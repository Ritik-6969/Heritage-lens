import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Language, 
  Destination, 
  Quest, 
  Badge, 
  TripPlannerInput, 
  BudgetBreakdown, 
  ItineraryDay, 
  HotelRecommendation, 
  TransportFare,
  AIMessage,
  UserProfile
} from '../types';
import { translations } from '../data/translations';
import { destinationsData } from '../data/destinationsData';
import { questsData, initialBadges } from '../data/questsData';
import { speakText, stopSpeech, playSfx } from '../utils/audioUtils';
import confetti from 'canvas-confetti';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

export interface GeneratedTripData {
  input: TripPlannerInput;
  destinationDetails: Destination;
  budgetBreakdown: BudgetBreakdown;
  hotels: HotelRecommendation[];
  transport: TransportFare[];
  weatherAlert?: string;
  crowdSummary: string;
  itinerary: ItineraryDay[];
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  
  // User Authentication & Profile
  userProfile: UserProfile;
  loginUser: (name: string, email: string, phone?: string) => void;
  logoutUser: () => void;
  authModalOpen: boolean;
  setAuthModalOpen: (open: boolean) => void;

  // Destination
  selectedDestination: Destination | null;
  setSelectedDestination: (dest: Destination | null) => void;
  openDestinationDetails: (idOrDest: string | Destination) => void;
  
  // Trip Planner
  plannerInput: TripPlannerInput;
  setPlannerInput: React.Dispatch<React.SetStateAction<TripPlannerInput>>;
  generatedTrip: GeneratedTripData | null;
  generateTrip: (customParams?: Partial<TripPlannerInput>) => void;
  
  // Heritage Quest & Gamification
  userXp: number;
  userLevel: number;
  addXp: (amount: number) => void;
  badges: Badge[];
  unlockBadge: (badgeId: string) => void;
  activeQuest: Quest;
  setActiveQuest: React.Dispatch<React.SetStateAction<Quest>>;
  gpsDistance: number;
  gpsReached: boolean;
  simulateGpsApproach: () => void;
  cameraScanning: boolean;
  cameraVerified: boolean;
  runCameraScan: () => void;
  questCompleted: boolean;
  completeActiveQuest: () => void;
  puzzleSolved: boolean;
  solvePuzzle: (isCorrect: boolean) => boolean;
  
  // Audio & Speech
  isSpeaking: boolean;
  currentSpeakingId: string | null;
  playVoice: (text: string, lang?: 'hi' | 'en', id?: string) => void;
  stopVoice: () => void;
  
  // AI Guide
  aiMessages: AIMessage[];
  sendAIMessage: (text: string) => void;
  
  // ScamShield state
  scamShieldActive: boolean;
  scamDetectedState: 'idle' | 'listening' | 'detected' | 'reported';
  startScamShieldVoiceCheck: () => void;
  resetScamShield: () => void;
  submitScamReport: (data: any) => void;
  
  // Toast notifications
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  
  // Guided Hackathon Demo
  demoStep: number;
  setDemoStep: (step: number) => void;
  goToDemoStep: (step: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(destinationsData[0]); // Chunar Fort default
  
  // User Authentication State
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: 'usr-1',
    name: 'Aarav Sharma',
    email: 'aarav.explorer@heritagelens.in',
    avatar: '🧭',
    isAuthenticated: true,
    phone: '+91 98765 43210',
    level: 4,
    xp: 680,
    savedDestinations: ['chunar-fort', 'orchha', 'dholavira'],
    joinedDate: 'August 2026'
  });

  // Planner State
  const [plannerInput, setPlannerInput] = useState<TripPlannerInput>({
    destination: 'Agra Heritage & Craft Circuit',
    travelers: 2,
    durationDays: 2,
    budget: 5000,
    interests: ['Heritage', 'Culture'],
    stayPreference: 'Budget',
    transportPreference: 'Public Transport'
  });

  const [generatedTrip, setGeneratedTrip] = useState<GeneratedTripData | null>(null);

  // Gamification & Quest State
  const [userXp, setUserXp] = useState<number>(680);
  const [userLevel, setUserLevel] = useState<number>(4);
  const [badges, setBadges] = useState<Badge[]>(initialBadges);
  const [activeQuest, setActiveQuest] = useState<Quest>(questsData[0]);
  const [gpsDistance, setGpsDistance] = useState<number>(120);
  const [gpsReached, setGpsReached] = useState<boolean>(false);
  const [cameraScanning, setCameraScanning] = useState<boolean>(false);
  const [cameraVerified, setCameraVerified] = useState<boolean>(false);
  const [questCompleted, setQuestCompleted] = useState<boolean>(false);
  const [puzzleSolved, setPuzzleSolved] = useState<boolean>(false);

  // Audio State
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [currentSpeakingId, setCurrentSpeakingId] = useState<string | null>(null);

  // ScamShield State
  const [scamShieldActive, setScamShieldActive] = useState<boolean>(false);
  const [scamDetectedState, setScamDetectedState] = useState<'idle' | 'listening' | 'detected' | 'reported'>('idle');

  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Demo Guide
  const [demoStep, setDemoStep] = useState<number>(1);

  // AI Guide Chat History
  const [aiMessages, setAiMessages] = useState<AIMessage[]>([
    {
      id: 'ai-init',
      sender: 'ai',
      text: 'Namaste! I am HeritageLens AI, your cultural guide. I can help you discover forgotten monuments, plan optimized trips on your budget, check fair local transport fares, and narrate authentic historical folklore.',
      timestamp: 'Just now'
    }
  ]);

  const t = translations[language];

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(item => item.id !== id));
    }, 4000);
  };

  const loginUser = (name: string, email: string, phone?: string) => {
    setUserProfile({
      id: 'usr-' + Date.now(),
      name: name || 'Aarav Sharma',
      email: email || 'aarav.explorer@heritagelens.in',
      avatar: '🧭',
      isAuthenticated: true,
      phone: phone || '+91 98765 43210',
      level: userLevel,
      xp: userXp,
      savedDestinations: ['chunar-fort', 'orchha', 'dholavira'],
      joinedDate: 'August 2026'
    });
    setAuthModalOpen(false);
    playSfx('success');
    showToast(`✨ Welcome back, ${name || 'Explorer'}! You are logged in.`, 'success');
  };

  const logoutUser = () => {
    setUserProfile(prev => ({
      ...prev,
      isAuthenticated: false
    }));
    playSfx('click');
    showToast('👋 You have been logged out safely.', 'info');
  };

  const addXp = (amount: number) => {
    setUserXp(prev => {
      const nextXp = prev + amount;
      const nextLevel = Math.floor(nextXp / 200) + 1;
      if (nextLevel > userLevel) {
        setUserLevel(nextLevel);
        playSfx('success');
        showToast(`🎉 Level Up! You are now a Level ${nextLevel} Explorer!`, 'success');
      } else {
        playSfx('xp');
      }
      return nextXp;
    });
  };

  const unlockBadge = (badgeId: string) => {
    setBadges(prev =>
      prev.map(b => (b.id === badgeId ? { ...b, unlocked: true, unlockedDate: 'Today' } : b))
    );
  };

  const openDestinationDetails = (idOrDest: string | Destination) => {
    if (typeof idOrDest === 'string') {
      const dest = destinationsData.find(d => d.id === idOrDest) || destinationsData[0];
      setSelectedDestination(dest);
    } else {
      setSelectedDestination(idOrDest);
    }
  };

  const playVoice = (text: string, lang: 'hi' | 'en' = language, id?: string) => {
    setIsSpeaking(true);
    if (id) setCurrentSpeakingId(id);
    speakText(text, lang, () => {
      setIsSpeaking(false);
      setCurrentSpeakingId(null);
    });
  };

  const stopVoice = () => {
    stopSpeech();
    setIsSpeaking(false);
    setCurrentSpeakingId(null);
  };

  const simulateGpsApproach = () => {
    playSfx('click');
    setGpsDistance(0);
    setGpsReached(true);
    playSfx('success');
    showToast('📍 Quest Location Reached! You are in the Sonwa Mandap precinct.', 'success');
  };

  const runCameraScan = () => {
    setCameraScanning(true);
    playSfx('scan');
    setTimeout(() => {
      setCameraScanning(false);
      setCameraVerified(true);
      playSfx('success');
      showToast('✨ Object Verified: 11th Century Ganga Fish Carving!', 'success');
    }, 2200);
  };

  const completeActiveQuest = () => {
    if (questCompleted) return;
    setQuestCompleted(true);
    addXp(activeQuest.xpReward);
    playSfx('success');
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
    showToast(`🏆 Quest Completed! +${activeQuest.xpReward} XP earned. Secret Micro-Story Unlocked!`, 'success');
    unlockBadge('mystery-solver');
  };

  const solvePuzzle = (isCorrect: boolean): boolean => {
    if (isCorrect) {
      setPuzzleSolved(true);
      addXp(activeQuest.nextPuzzle.xpReward);
      playSfx('success');
      confetti({
        particleCount: 60,
        spread: 50,
        origin: { y: 0.7 }
      });
      showToast(`🎉 Correct Answer! +${activeQuest.nextPuzzle.xpReward} XP earned. Level 4 Quest Master progress unlocked!`, 'success');
      return true;
    } else {
      playSfx('alert');
      showToast('❌ Incorrect choice. Read the architectural hint and try again.', 'warning');
      return false;
    }
  };

  const startScamShieldVoiceCheck = () => {
    setScamShieldActive(true);
    setScamDetectedState('listening');
    playSfx('click');
    setTimeout(() => {
      setScamDetectedState('detected');
      playSfx('alert');
    }, 2400);
  };

  const resetScamShield = () => {
    setScamDetectedState('idle');
  };

  const submitScamReport = (_data: any) => {
    setScamDetectedState('reported');
    playSfx('success');
    showToast('📋 Report submitted for review. Thank you for contributing to fair tourism!', 'success');
  };

  const generateTrip = (customParams?: Partial<TripPlannerInput>) => {
    const input = { ...plannerInput, ...(customParams || {}) };
    setPlannerInput(input);
    playSfx('click');

    const dest = destinationsData.find(d => d.name.toLowerCase().includes(input.destination.toLowerCase()) || input.destination.toLowerCase().includes(d.name.toLowerCase())) || destinationsData[7]; // default to Agra circuit

    // Dynamic budget calculation based on input
    const isBudgetStay = input.stayPreference === 'Budget';
    const hotelCostPerNight = isBudgetStay ? 600 : input.stayPreference === 'Comfort' ? 1200 : 2200;
    const totalHotel = hotelCostPerNight * (input.durationDays - 1 > 0 ? input.durationDays - 1 : 1);
    const totalFood = 450 * input.travelers * input.durationDays;
    const totalLocalTransport = 200 * input.durationDays;
    const totalTickets = 175 * input.travelers;
    const totalIntercity = 400 * input.travelers;
    const misc = 300;

    const totalEst = totalHotel + totalFood + totalLocalTransport + totalTickets + totalIntercity + misc;
    const remaining = input.budget - totalEst;

    const breakdown: BudgetBreakdown = {
      intercityTravel: totalIntercity,
      hotel: totalHotel,
      food: totalFood,
      localTransport: totalLocalTransport,
      tickets: totalTickets,
      miscellaneous: misc,
      totalEstimated: totalEst,
      budget: input.budget,
      remaining: Math.max(0, remaining),
      status: remaining >= 0 ? 'within' : 'exceeded'
    };

    const generatedItinerary: ItineraryDay[] = [
      {
        dayNumber: 1,
        theme: 'Mughal Splendor & Living Artisan Streets',
        activities: [
          {
            time: '07:00 AM',
            title: 'Sunrise at Taj Mahal (East Gate Gardens)',
            location: 'Taj Mahal Complex',
            cost: 50 * input.travelers,
            duration: '2.5 hours',
            crowdLevel: 'Low',
            weatherSuitability: '24°C - Perfect Morning Dawn Light',
            category: 'Heritage',
            notes: 'Beat the large tourist rush by entering at opening gate'
          },
          {
            time: '10:30 AM',
            title: 'Agra Fort & Diwan-i-Khas Ramparts',
            location: 'Agra Fort',
            cost: 50 * input.travelers,
            duration: '2 hours',
            crowdLevel: 'Moderate',
            weatherSuitability: '27°C - Shaded Colonnades',
            category: 'Heritage'
          },
          {
            time: '01:00 PM',
            title: 'Authentic Mughlai & Braj Food Experience',
            location: 'Old Agra Heritage Lane',
            cost: 250 * input.travelers,
            duration: '1 hour',
            crowdLevel: 'Moderate',
            weatherSuitability: 'Indoor AC Seating',
            category: 'Food',
            notes: 'Try traditional Bedmi Puri and fresh Petha sweet tasting'
          },
          {
            time: '03:30 PM',
            title: 'Lesser-Known Gem: Itmad-ud-Daulah (Baby Taj)',
            location: 'Yamuna Riverbank',
            cost: 30 * input.travelers,
            duration: '1.5 hours',
            crowdLevel: 'Low',
            weatherSuitability: 'Cool Marble Courtyard',
            category: 'Heritage',
            notes: 'Intricate marble lattice work that predates the Taj Mahal'
          },
          {
            time: '06:00 PM',
            title: 'Sunset View from Mehtab Bagh across the River',
            location: 'Mehtab Bagh',
            cost: 25 * input.travelers,
            duration: '1 hour',
            crowdLevel: 'Moderate',
            weatherSuitability: '26°C - Sunset Breeze',
            category: 'Nature'
          }
        ]
      },
      {
        dayNumber: 2,
        theme: 'Forgotten Crafts, Pietra Dura & Ancient Bazaars',
        activities: [
          {
            time: '08:30 AM',
            title: 'Parchin Kari (Pietra Dura) Master Inlay Workshop',
            location: 'Gokulpura Artisan Colony',
            cost: 0,
            duration: '1.5 hours',
            crowdLevel: 'Low',
            weatherSuitability: 'Pleasant Morning',
            category: 'Art & Crafts',
            notes: 'Watch 6th-generation artisans inlay semi-precious stones'
          },
          {
            time: '11:00 AM',
            title: 'Chini Ka Rauza (Persian Glazed Tile Monument)',
            location: 'Etmadpur Road',
            cost: 0,
            duration: '1 hour',
            crowdLevel: 'Low',
            weatherSuitability: '28°C - Shaded Shrine',
            category: 'Culture'
          },
          {
            time: '02:00 PM',
            title: 'Traditional Lunch & Spices Tasting',
            location: 'Kinari Bazaar Eateries',
            cost: 200 * input.travelers,
            duration: '1 hour',
            crowdLevel: 'Moderate',
            weatherSuitability: 'Covered Bazaar',
            category: 'Food'
          },
          {
            time: '04:00 PM',
            title: 'Zardozi Gold-Thread Embroidery Artisan Guild',
            location: 'Kashmiri Bazaar',
            cost: 0,
            duration: '1.5 hours',
            crowdLevel: 'Low',
            weatherSuitability: 'Cool Evening',
            category: 'Art & Crafts'
          },
          {
            time: '07:00 PM',
            title: 'Return Departure from Agra Cantt',
            location: 'Railway Station',
            cost: 0,
            duration: '45 mins',
            crowdLevel: 'Low',
            weatherSuitability: 'Night Cool',
            category: 'Culture'
          }
        ]
      }
    ];

    const result: GeneratedTripData = {
      input,
      destinationDetails: dest,
      budgetBreakdown: breakdown,
      hotels: dest.nearbyHotels,
      transport: dest.transport,
      weatherAlert: 'Weather Intelligence Alert: 20% rain probability detected for afternoon. Outdoor monuments prioritized for crisp 7:00 AM morning slot.',
      crowdSummary: 'Crowd Predictor: Low to Moderate on Tuesday / Wednesday (Estimated 70% fewer tourists than weekend peak).',
      itinerary: generatedItinerary
    };

    setGeneratedTrip(result);
    playSfx('success');
    showToast('✨ Smart Itinerary & Budget Breakdown generated successfully!', 'success');
  };

  const sendAIMessage = (userText: string) => {
    if (!userText.trim()) return;

    playSfx('click');
    const userMsg: AIMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: 'Just now'
    };

    setAiMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      playSfx('story_chime');
      const lower = userText.toLowerCase();
      let aiText = '';
      let embeddedCard: AIMessage['embeddedCard'] = undefined;

      if (lower.includes('5000') || lower.includes('plan') || lower.includes('agra')) {
        aiText = 'Here is an optimized budget-friendly 2-day cultural itinerary for Agra for 2 people within ₹5000. It includes morning sunrise timings at Taj Mahal, Baby Taj, and living artisan workshops with low crowd windows.';
        embeddedCard = {
          type: 'budget',
          data: {
            destination: 'Agra Cultural Circuit',
            budget: 5000,
            estimated: 3950,
            remaining: 1050,
            status: 'within'
          }
        };
      } else if (lower.includes('rain') || lower.includes('weather') || lower.includes('modify')) {
        aiText = 'Weather Alert Analyzed: Rain probability shifts to 60% between 2:00 PM and 4:30 PM. I have reallocated your outdoor monument visits (Mehtab Bagh) to the clear 7:00 AM slot and scheduled the Pietra Dura covered marble workshop during the afternoon rain.';
        embeddedCard = {
          type: 'itinerary_change',
          data: {
            changeSummary: 'Rain Alert Mitigation: Outdoor activities moved to 07:00 AM. Indoor craft studio moved to 02:30 PM.'
          }
        };
      } else if (lower.includes('chunar') || lower.includes('hidden') || lower.includes('near me')) {
        aiText = 'I recommend Chunar Fort in Mirzapur, Uttar Pradesh (42km from Varanasi). It has 2,000+ years of history, the 28-pillared Sonwa Mandap, and GI-tagged red clay pottery with very low crowd levels.';
        embeddedCard = {
          type: 'destination',
          data: destinationsData[0]
        };
      } else if (lower.includes('hotel') || lower.includes('stay')) {
        aiText = 'Here are verified budget & comfort stays near your destination with verified traveler ratings and smart location savings.';
        embeddedCard = {
          type: 'hotel',
          data: destinationsData[7].nearbyHotels[0]
        };
      } else {
        aiText = `Based on verified archives and current regional telemetry, I can provide verified historical context, reference transport rates, crowd forecasts, and gamified quests for destinations across India.`;
      }

      const aiReply: AIMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiText,
        timestamp: 'Just now',
        embeddedCard
      };

      setAiMessages(prev => [...prev, aiReply]);
    }, 1000);
  };

  // Hackathon Guided Demo Navigation Flow
  const goToDemoStep = (step: number) => {
    setDemoStep(step);
    playSfx('click');

    switch (step) {
      case 1: // Home
        setActiveTab('home');
        break;
      case 2: // Explore Hidden India
        setActiveTab('explore');
        break;
      case 3: // Select Chunar Fort & View Details
        setActiveTab('explore');
        openDestinationDetails('chunar-fort');
        break;
      case 4: // Start Heritage Quest
        setActiveTab('quest');
        setActiveQuest(questsData[0]);
        setGpsDistance(120);
        setGpsReached(false);
        setCameraVerified(false);
        setQuestCompleted(false);
        break;
      case 5: // Simulate GPS Arrival
        setActiveTab('quest');
        simulateGpsApproach();
        break;
      case 6: // Camera Scan
        setActiveTab('quest');
        runCameraScan();
        break;
      case 7: // Quest Completed & Micro Story
        setActiveTab('quest');
        completeActiveQuest();
        break;
      case 8: // Plan My Trip (Agra, 5000, 2p, 2d)
        setActiveTab('planner');
        generateTrip({
          destination: 'Agra Heritage & Craft Circuit',
          travelers: 2,
          durationDays: 2,
          budget: 5000,
          interests: ['Heritage', 'Culture'],
          stayPreference: 'Budget',
          transportPreference: 'Public Transport'
        });
        break;
      case 9: // AI Guide & Weather Itinerary Modification
        setActiveTab('ai');
        sendAIMessage('Modify my itinerary because of rain');
        break;
      case 10: // ScamShield Detection (250 vs 50)
        setActiveTab('scamshield');
        startScamShieldVoiceCheck();
        break;
      case 11: // Hindi Negotiation Speech
        setActiveTab('scamshield');
        playVoice('भैया, इस रास्ते का सामान्य किराया ₹50 है। क्या आप ₹50 में चलेंगे?', 'hi', 'demo-neg');
        break;
      case 12: // Culture & Artisans
        setActiveTab('culture');
        break;
      case 13: // Responsible Tourism Pledge
        setActiveTab('responsible');
        break;
      default:
        setActiveTab('home');
        break;
    }
  };

  // Initialize trip generator on first render
  useEffect(() => {
    generateTrip();
  }, []);

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        activeTab,
        setActiveTab,
        userProfile,
        loginUser,
        logoutUser,
        authModalOpen,
        setAuthModalOpen,
        selectedDestination,
        setSelectedDestination,
        openDestinationDetails,
        plannerInput,
        setPlannerInput,
        generatedTrip,
        generateTrip,
        userXp,
        userLevel,
        addXp,
        badges,
        unlockBadge,
        activeQuest,
        setActiveQuest,
        gpsDistance,
        gpsReached,
        simulateGpsApproach,
        cameraScanning,
        cameraVerified,
        runCameraScan,
        questCompleted,
        completeActiveQuest,
        puzzleSolved,
        solvePuzzle,
        isSpeaking,
        currentSpeakingId,
        playVoice,
        stopVoice,
        aiMessages,
        sendAIMessage,
        scamShieldActive,
        scamDetectedState,
        startScamShieldVoiceCheck,
        resetScamShield,
        submitScamReport,
        toasts,
        showToast,
        demoStep,
        setDemoStep,
        goToDemoStep
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
