import { Quest, Badge } from '../types';

export const initialBadges: Badge[] = [
  {
    id: 'first-explorer',
    name: 'First Explorer',
    nameHi: 'प्रथम अन्वेषक',
    icon: '🏛️',
    description: 'Completed your first location-based heritage quest.',
    unlocked: true,
    unlockedDate: 'August 12, 2026'
  },
  {
    id: 'mystery-solver',
    name: 'Mystery Solver',
    nameHi: 'रहस्य भेदक',
    icon: '🔎',
    description: 'Deciphered 3 cryptic architectural stone clues with camera scan.',
    unlocked: true,
    unlockedDate: 'August 15, 2026'
  },
  {
    id: 'culture-seeker',
    name: 'Culture Seeker',
    nameHi: 'संस्कृति प्रेमी',
    icon: '🎨',
    description: 'Explored living artisan crafts and traditional folk lore.',
    unlocked: true,
    unlockedDate: 'August 18, 2026'
  },
  {
    id: 'hidden-india',
    name: 'Hidden India',
    nameHi: 'छिपा हुआ भारत',
    icon: '🗺️',
    description: 'Visited 2 lesser-known heritage monuments off the tourist track.',
    unlocked: true,
    unlockedDate: 'August 19, 2026'
  },
  {
    id: 'heritage-hunter',
    name: 'Heritage Hunter',
    nameHi: 'हेरिटेज हंटर',
    icon: '🧭',
    description: 'Accumulated over 600 XP across Indian cultural circuits.',
    unlocked: true,
    unlockedDate: 'August 20, 2026'
  },
  {
    id: 'india-explorer',
    name: 'India Explorer',
    nameHi: 'भारत खोजकर्ता',
    icon: '🇮🇳',
    description: 'Unlocked micro-stories across 3 distinct Indian states.',
    unlocked: false
  },
  {
    id: 'quest-master',
    name: 'Quest Master',
    nameHi: 'क्वेस्ट मास्टर',
    icon: '🏆',
    description: 'Mastered all architectural puzzles and earned 1000+ XP.',
    unlocked: false
  }
];

export const questsData: Quest[] = [
  {
    id: 'quest-chunar-queen',
    destinationId: 'chunar-fort',
    destinationName: 'Chunar Fort',
    title: 'The Mystery of the Queen',
    titleHi: 'रानी का गुप्त रहस्य',
    subtitle: 'Solve the 11th-century Sonwa Mandap stone riddle',
    initialDistanceMeters: 120,
    xpReward: 100,
    estimatedMinutes: 10,
    difficulty: 'Easy',
    isUnlocked: true,
    isCompleted: false,
    offlineAvailable: true,
    clue: {
      id: 'clue-1',
      text: 'Find the pillar with the broken fish carving near the royal pavilion.',
      textHi: 'शाही मंडप के पास टूटी हुई मछली की नक्काशी वाला स्तंभ खोजें।',
      hint: 'Walk towards the 28-pillared Sonwa Mandap facing the Ganga bluff. Inspect the northern outer row.',
      targetObject: 'Twin Ganga Fish Stone Carving',
      targetDescription: 'Ancient 11th-century dynastic aquatic emblem symbolizing riverine sovereignty and protection.',
      // Sandstone carving of sacred motifs
      targetImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsHqClz90vl-8Rn0zK4yAOmXvUUTymwRX7IcgpYKdIQ&s=10'
    },
    microStory: {
      id: 'story-queen-secret',
      title: "The Queen's Secret",
      titleHi: 'रानी का गुप्त राज',
      duration: '45 sec authentic story',
      audioDurationSec: 45,
      narrationText: 'Beneath the 28 pillars of Sonwa Mandap lies a concealed subterranean conduit engineered in 1032 AD. According to royal court chronicles, Princess Sonwa used this secret passage to bathe in the holy Ganga during dawn before the sunrise conch sounded, remaining unseen by invading scouts.',
      narrationTextHi: 'सोनवा मंडप के 28 खंभों के नीचे 1032 ईस्वी में निर्मित एक गुप्त भूमिगत मार्ग है। ऐतिहासिक वृत्तांतों के अनुसार, राजकुमारी सोनवा सूर्योदय से पहले पवित्र गंगा में स्नान करने के लिए इसी गुप्त रास्ते का उपयोग करती थीं ताकि शत्रु सैनिकों की नजर उन पर न पड़े।',
      historicalContext: 'Sonwa Mandap was constructed as an open-air wedding pavilion with 28 sandstone pillars. The fish motif represents the emblem of medieval riverine guilds.',
      verifiedSource: 'Archaeological Survey of India (Excavation Archives & Inscription Records)',
      // Sandstone fort pavilion
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLS3YqoHYwCPVaKWOye2ElX37IKo_-yr-f5eTVrhg8A&s=10'
    },
    nextPuzzle: {
      id: 'puzzle-chunar-symbol',
      question: 'Three ancient motifs appear on the inner fortress gateway. Which one was historically carved to invoke divine protection for travelers?',
      questionHi: 'भीतरी किले के मुख्य द्वार पर तीन प्राचीन प्रतीक उकेरे गए हैं। इनमें से किसे यात्रियों की दिव्य सुरक्षा के लिए बनाया गया था?',
      options: [
        {
          id: 'opt-lotus',
          text: 'Lotus (Padma) — Symbol of Spiritual Purity & Safe Passage',
          textHi: 'कमल (पद्म) — आध्यात्मिक शुद्धि और सुरक्षित यात्रा का प्रतीक',
          isCorrect: true,
          explanation: 'Correct! The eight-petaled lotus was placed above the threshold to bless incoming travelers and ward off peril.'
        },
        {
          id: 'opt-fish',
          text: 'Fish (Matsya) — Symbol of River Sovereignty',
          textHi: 'मछली (मत्स्य) — नदी संप्रभुता का प्रतीक',
          isCorrect: false,
          explanation: 'The fish represents water sovereignty and dynastic trade, not threshold protection.'
        },
        {
          id: 'opt-sun',
          text: 'Sun (Surya) — Symbol of Imperial Power',
          textHi: 'सूर्य — शाही शक्ति और शासन का प्रतीक',
          isCorrect: false,
          explanation: 'The sun represents solar dynasty power.'
        }
      ],
      xpReward: 50
    }
  },
  {
    id: 'quest-orchha-symbol',
    destinationId: 'orchha',
    destinationName: 'Orchha',
    title: 'The Forgotten Bundela Symbol',
    titleHi: 'भूला हुआ बुंदेला प्रतीक',
    subtitle: 'Decipher Jahangir Mahal secret fresco inscription',
    initialDistanceMeters: 350,
    xpReward: 150,
    estimatedMinutes: 15,
    difficulty: 'Medium',
    isUnlocked: true,
    isCompleted: false,
    offlineAvailable: true,
    clue: {
      id: 'clue-2',
      text: 'Locate the turquoise glazed tile embedded above the eastern camel stable courtyard.',
      textHi: 'पूर्वी ऊंट अस्तबल आंगन के ऊपर लगी फ़िरोज़ा चमकदार टाइल खोजें।',
      hint: 'Look for the Persian-style geometric tilework contrasting against red sandstone.',
      targetObject: 'Persian Glazed Turquoise Tile',
      targetDescription: 'Rare 16th-century Persian lapis-glazed tile gifted during the inauguration of Jahangir Mahal.',
      // Orchha palace glazed arch
      targetImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2k4esVzLkMtcWscGhUiCn1AcQVSUiKKMz96J2O4XveQ&s=10'
    },
    microStory: {
      id: 'story-orchha-fresco',
      title: 'The One-Night Palace',
      titleHi: 'एक रात का महल',
      duration: '40 sec authentic story',
      audioDurationSec: 40,
      narrationText: 'Bir Singh Deo spent 22 years constructing Jahangir Mahal with 136 subterranean rooms and delicate sandstone jalis, all to host Emperor Jahangir for a single ceremonial night in 1606. The palace was never occupied as a primary residence again, remaining an architectural monument of diplomacy.',
      narrationTextHi: 'राजा बीर सिंह देव ने जहांगीर महल को 136 कमरों और नाजुक जालियों के साथ 22 वर्षों में बनवाया, सिर्फ इसलिए कि 1606 में मुग़ल सम्राट जहांगीर का एक रात के लिए शाही स्वागत किया जा सके।',
      historicalContext: 'Recorded in the Tuzuk-i-Jahangiri (Memoirs of Jahangir) acknowledging the architectural grandeur of Bundelkhand.',
      verifiedSource: 'Madhya Pradesh State Archaeological Archives',
      // Authentic Orchha Jahangir Mahal
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1ILajE7itIjCctjeSP9Cb6jcr-beC5E__gdYcbmeKw&s=10'
    },
    nextPuzzle: {
      id: 'puzzle-orchha-deity',
      question: 'In which temple of Orchha is Lord Rama worshipped as the reigning Monarch with police guard of honor?',
      questionHi: 'ओरछा के किस मंदिर में भगवान राम को राजा मानकर पुलिस द्वारा गार्ड ऑफ ऑनर दिया जाता है?',
      options: [
        {
          id: 'opt-ram-raja',
          text: 'Ram Raja Temple',
          textHi: 'राम राजा मंदिर',
          isCorrect: true,
          explanation: 'Spot on! Ram Raja Temple is the only shrine in the world where Rama is legally and ceremonially saluted as the King.'
        },
        {
          id: 'opt-chaturbhuj',
          text: 'Chaturbhuj Temple',
          textHi: 'चतुर्भुज मंदिर',
          isCorrect: false,
          explanation: 'Chaturbhuj Temple was built for Rama, but the idol remained in the palace.'
        },
        {
          id: 'opt-lakshmi',
          text: 'Laxmi Narayan Temple',
          textHi: 'लक्ष्मी नारायण मंदिर',
          isCorrect: false,
          explanation: 'Laxmi Narayan Temple is famous for murals.'
        }
      ],
      xpReward: 50
    }
  },
  {
    id: 'quest-dholavira-water',
    destinationId: 'dholavira',
    destinationName: 'Dholavira',
    title: 'The Hidden Harappan Water Chamber',
    titleHi: 'हड़प्पा का गुप्त जल कक्ष',
    subtitle: 'Unlock the 4,500-year-old hydraulic engineering code',
    initialDistanceMeters: 800,
    xpReward: 250,
    estimatedMinutes: 20,
    difficulty: 'Challenging',
    isUnlocked: false,
    isCompleted: false,
    offlineAvailable: true,
    clue: {
      id: 'clue-3',
      text: 'Find the stepped conduit connecting the eastern stormwater cascade to the Great Reservoir.',
      textHi: 'पूर्वी वर्षा जल नाले को विशाल जलाशय से जोड़ने वाले सीढ़ीदार मार्ग को खोजें।',
      hint: 'Follow the stone water filter beds near the North Gate.',
      targetObject: 'Ancient Sluice Gate Siphon',
      targetDescription: 'Carved sandstone silt trap used to settle dust particles from desert rains before water entered the citadel.',
      // Dholavira stone step conduit
      targetImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHzvHqoJi6Di7yMDHhYiRyg8McmCHNJULPSxNbpJ8KhEoMBOyKclTePTP&s=10'
    },
    microStory: {
      id: 'story-dholavira-water',
      title: 'Masters of the Desert Rain',
      titleHi: 'रेगिस्तानी वर्षा के जादूगर',
      duration: '50 sec authentic story',
      audioDurationSec: 50,
      narrationText: 'Between 2600 BC and 1900 BC, Dholavira received erratic desert rains. Rather than perishing, Harappan master engineers created a network of 16 interconnected reservoirs cut directly into living rock, holding over 300,000 cubic meters of potable water—supporting a population of 20,000 year-round.',
      narrationTextHi: '4500 साल पहले धोलावीरा के इंजीनियरों ने चट्टानों को काटकर 16 आपस में जुड़े जलाशयों का ऐसा तंत्र बनाया जो 3 लाख घन मीटर वर्षा जल संचित कर सकता था।',
      historicalContext: 'UNESCO World Heritage citation for exceptional ancient hydraulic and urban management.',
      verifiedSource: 'UNESCO World Heritage Citation & ASI Excavation Report',
      // Dholavira rock-cut reservoir
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjNO1wKtJsVFsFvh8RVNBjchB3y9oRxSTklvx1JZZZV5rNMJ2KtYPv4ex&s=10'
    },
    nextPuzzle: {
      id: 'puzzle-dholavira-sign',
      question: 'How many Indus script characters were found embedded in the famous Dholavira Signboard?',
      questionHi: 'धोलावीरा के प्रसिद्ध साइनबोर्ड में सिंधु लिपि के कितने बड़े अक्षर पाए गए थे?',
      options: [
        {
          id: 'opt-10',
          text: '10 Characters made of crystalline gypsum',
          textHi: 'जिप्सम से बने 10 बड़े अक्षर',
          isCorrect: true,
          explanation: 'Precisely! 10 large Indus symbols (each ~37cm high) were found fallen near the Northern Gate.'
        },
        {
          id: 'opt-7',
          text: '7 Characters made of terracotta',
          textHi: 'टेराकोटा के 7 अक्षर',
          isCorrect: false,
          explanation: 'There were 10 characters, not 7.'
        },
        {
          id: 'opt-14',
          text: '14 Characters carved in granite',
          textHi: 'ग्रेनाइट पर खुदे 14 अक्षर',
          isCorrect: false,
          explanation: 'There were 10 characters.'
        }
      ],
      xpReward: 50
    }
  }
];

export const teamMembers = [
  { name: 'Shyam (You)', xp: 680, role: 'Lead Explorer', avatar: '🧭' },
  { name: 'shailesh', xp: 480, role: 'Clue Hunter', avatar: '🔎' },
  { name: 'Revannt', xp: 350, role: 'Story Archivist', avatar: '📖' },
  { name: 'lipika', xp: 290, role: 'Puzzle Solver', avatar: '🧩' }
];
