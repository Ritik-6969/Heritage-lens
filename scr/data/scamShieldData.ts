import { ScamShieldRecord } from '../types';

export const referenceFaresData: ScamShieldRecord[] = [
  {
    id: 'fare-1',
    city: 'Agra',
    fromLocation: 'Taj Mahal (East / West Gate)',
    toLocation: 'Agra Fort',
    service: 'Auto-rickshaw',
    referenceFareRange: '₹40 – ₹60',
    referenceFareAvg: 50,
    lastUpdated: 'August 2026',
    sourceAuthority: 'Agra Regional Transport Authority & Tourist Police Reference Table'
  },
  {
    id: 'fare-2',
    city: 'Agra',
    fromLocation: 'Agra Cantt Railway Station',
    toLocation: 'Taj Mahal East Gate',
    service: 'Prepaid Auto / E-Rickshaw',
    referenceFareRange: '₹80 – ₹120',
    referenceFareAvg: 100,
    lastUpdated: 'August 2026',
    sourceAuthority: 'Agra Cantt Prepaid Booth Reference Index'
  },
  {
    id: 'fare-3',
    city: 'Varanasi / Mirzapur',
    fromLocation: 'Chunar Railway Station',
    toLocation: 'Chunar Fort Ramparts',
    service: 'E-Rickshaw',
    referenceFareRange: '₹40 – ₹60',
    referenceFareAvg: 50,
    lastUpdated: 'August 2026',
    sourceAuthority: 'Mirzapur Municipal Transport Board'
  },
  {
    id: 'fare-4',
    city: 'Orchha / Jhansi',
    fromLocation: 'Jhansi Junction',
    toLocation: 'Orchha Town Palace Precinct',
    service: 'Shared / Private Auto',
    referenceFareRange: '₹200 – ₹280',
    referenceFareAvg: 240,
    lastUpdated: 'August 2026',
    sourceAuthority: 'Jhansi-Niwari Inter-District Tourist Transport Guide'
  },
  {
    id: 'fare-5',
    city: 'Jaipur',
    fromLocation: 'Hawa Mahal',
    toLocation: 'Amber Fort',
    service: 'Auto-rickshaw',
    referenceFareRange: '₹150 – ₹200',
    referenceFareAvg: 175,
    lastUpdated: 'August 2026',
    sourceAuthority: 'Jaipur Smart Mobility Board'
  },
  {
    id: 'fare-6',
    city: 'Puri / Konark',
    fromLocation: 'Puri Railway Station',
    toLocation: 'Konark Sun Temple',
    service: 'Direct Tourist Auto',
    referenceFareRange: '₹350 – ₹450',
    referenceFareAvg: 400,
    lastUpdated: 'August 2026',
    sourceAuthority: 'Odisha Tourism Marine Drive Fare Norms'
  }
];

export interface NegotiationScript {
  id: string;
  situation: string;
  hindiText: string;
  hindiPhonetic: string;
  englishText: string;
  recommendedPrice: number;
}

export const negotiationScripts: NegotiationScript[] = [
  {
    id: 'auto-standard',
    situation: 'Auto-Rickshaw standard rate negotiation',
    hindiText: 'भैया, इस रास्ते का सामान्य किराया ₹50 है। क्या आप ₹50 में चलेंगे?',
    hindiPhonetic: 'Bhaiya, iss raaste ka saamaanya kiraaya pachaas rupaye hai. Kya aap pachaas rupaye mein chalenge?',
    englishText: 'The standard reference fare is ₹50. Can we go at the standard rate?',
    recommendedPrice: 50
  },
  {
    id: 'meter-request',
    situation: 'Polite request to turn on the meter or fixed rate',
    hindiText: 'भैया, कृपया मीटर से चलिए या सरकारी संदर्भ दर ₹50 पर चलिए।',
    hindiPhonetic: 'Bhaiya, kripya meter se chaliye ya sarkaari sandarbh dar pachaas par chaliye.',
    englishText: 'Please run by the official meter or standard reference rate of ₹50.',
    recommendedPrice: 50
  },
  {
    id: 'craft-shop',
    situation: 'Handicraft / Artisan fair price query',
    hindiText: 'नमस्ते जी, क्या आप मुझे इस हस्तशिल्प की प्रामाणिक कीमत और कारीगर का नाम बता सकते हैं?',
    hindiPhonetic: 'Namaste ji, kya aap mujhe iss hastashilp ki praamaanik keemat aur kaarigar ka naam bata sakte hain?',
    englishText: 'Namaste, could you please tell me the authentic artisan price and maker details?',
    recommendedPrice: 0
  }
];
