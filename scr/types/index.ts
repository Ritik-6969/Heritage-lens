export type Language = 'en' | 'hi';

export type DestinationCategory = 'Heritage' | 'Culture' | 'Art & Crafts' | 'Food' | 'Festivals' | 'Nature';

export type CrowdLevel = 'Low' | 'Moderate' | 'High' | 'Very High';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isAuthenticated: boolean;
  phone?: string;
  level: number;
  xp: number;
  savedDestinations: string[];
  joinedDate: string;
}

export interface TransportFare {
  mode: string;
  fareRange: string;
  duration: string;
  notes?: string;
}

export interface HotelRecommendation {
  id: string;
  name: string;
  category: 'Budget' | 'Comfort' | 'Premium';
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  distance: string;
  image: string;
  amenities: string[];
  bestValueTag?: boolean;
  smartComparisonTip?: string;
}

export interface HourlyWeather {
  time: string;
  temp: number;
  condition: string;
  rainProb: number;
  icon: string;
}

export interface Destination {
  id: string;
  name: string;
  nameHi: string;
  location: string;
  locationHi: string;
  state: string;
  category: DestinationCategory;
  tagline: string;
  description: string;
  descriptionHi: string;
  history: string;
  architecture: string;
  culturalSignificance: string;
  localStory: string;
  thingsToExperience: string[];
  image: string;
  galleryImages: string[];
  estimatedVisitCost: {
    min: number;
    max: number;
  };
  crowdLevel: CrowdLevel;
  bestTime: string;
  weather: {
    temp: number;
    condition: string;
    rainProb: number;
    humidity: number;
    windSpeed: number;
    hourly: HourlyWeather[];
    weatherAlert?: string;
  };
  transport: TransportFare[];
  nearbyHotels: HotelRecommendation[];
  responsibleTourismTips: string[];
  sources: string[];
  lastUpdated: string;
  rating: number;
  reviewsCount: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  hasActiveQuest?: boolean;
}

export interface QuestClue {
  id: string;
  text: string;
  textHi: string;
  hint: string;
  targetObject: string;
  targetDescription: string;
  targetImage: string;
}

export interface MicroStory {
  id: string;
  title: string;
  titleHi: string;
  duration: string;
  audioDurationSec: number;
  narrationText: string;
  narrationTextHi: string;
  historicalContext: string;
  verifiedSource: string;
  image: string;
}

export interface CulturalPuzzle {
  id: string;
  question: string;
  questionHi: string;
  options: {
    id: string;
    text: string;
    textHi: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  xpReward: number;
}

export interface Quest {
  id: string;
  destinationId: string;
  destinationName: string;
  title: string;
  titleHi: string;
  subtitle: string;
  initialDistanceMeters: number;
  xpReward: number;
  estimatedMinutes: number;
  difficulty: 'Easy' | 'Medium' | 'Challenging';
  clue: QuestClue;
  microStory: MicroStory;
  nextPuzzle: CulturalPuzzle;
  isUnlocked: boolean;
  isCompleted: boolean;
  offlineAvailable: boolean;
}

export interface Badge {
  id: string;
  name: string;
  nameHi: string;
  icon: string;
  description: string;
  unlocked: boolean;
  unlockedDate?: string;
}

export interface TripPlannerInput {
  destination: string;
  travelers: number;
  durationDays: number;
  budget: number;
  interests: DestinationCategory[];
  stayPreference: 'Budget' | 'Comfort' | 'Premium';
  transportPreference: 'Public Transport' | 'Taxi' | 'Mixed' | 'Walking Friendly';
}

export interface ItineraryActivity {
  time: string;
  title: string;
  location: string;
  cost: number;
  duration: string;
  crowdLevel: CrowdLevel;
  weatherSuitability: string;
  category: DestinationCategory;
  notes?: string;
}

export interface ItineraryDay {
  dayNumber: number;
  theme: string;
  activities: ItineraryActivity[];
}

export interface BudgetBreakdown {
  intercityTravel: number;
  hotel: number;
  food: number;
  localTransport: number;
  tickets: number;
  miscellaneous: number;
  totalEstimated: number;
  budget: number;
  remaining: number;
  status: 'within' | 'near_limit' | 'exceeded';
}

export interface CultureItem {
  id: string;
  title: string;
  titleHi: string;
  category: 'Traditional Art' | 'Music & Dance' | 'Handicrafts' | 'Local Food' | 'Festivals' | 'Local Communities';
  region: string;
  state: string;
  culturalStory: string;
  significance: string;
  image: string;
  tags: string[];
}

export interface ScamShieldRecord {
  id: string;
  city: string;
  fromLocation: string;
  toLocation: string;
  service: string;
  referenceFareRange: string;
  referenceFareAvg: number;
  lastUpdated: string;
  sourceAuthority?: string;
}

export interface AIMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  embeddedCard?: {
    type: 'budget' | 'hotel' | 'transport' | 'weather' | 'crowd' | 'destination' | 'itinerary_change';
    data: any;
  };
}
