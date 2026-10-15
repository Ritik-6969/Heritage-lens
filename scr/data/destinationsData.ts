import { Destination } from '../types';

export const destinationsData: Destination[] = [
  {
    id: 'chunar-fort',
    name: 'Chunar Fort',
    nameHi: 'चुनार किला',
    location: 'Mirzapur, Uttar Pradesh',
    locationHi: 'मिर्ज़ापुर, उत्तर प्रदेश',
    state: 'Uttar Pradesh',
    category: 'Heritage',
    tagline: 'The Impregnable Sandstone Citadel of the Ganges',
    description: 'Perched strategically on a rocky bluff overlooking the holy Ganges, Chunar Fort has stood witness to over 2,000 years of imperial history, spanning King Vikramaditya, Sher Shah Suri, the Mughals, and the British.',
    descriptionHi: 'पवित्र गंगा नदी के किनारे एक ऊंची चट्टान पर स्थित, चुनार का किला 2,000 से अधिक वर्षों के शाही इतिहास का साक्षी रहा है, जिसमें राजा विक्रमादित्य, शेरशाह सूरी, मुग़ल और ब्रिटिश काल शामिल हैं।',
    history: 'Constructed originally during the reign of King Vikramaditya of Ujjain for his brother Bharthari in 56 BC, the fortress was heavily fortified by Sher Shah Suri in 1532. Emperor Humayun laid siege to it for six months before capturing it. The British East India Company utilized it as an artillery cantonment and garrison stronghold in the 18th century.',
    architecture: 'Built from native buff and pink sandstone, the citadel features subterranean dungeons, the Sun Clock (Dhup Ghadi), the mystical Sonwa Mandap with 28 carved pillars, and massive semicircular bastions offering commanding 360-degree views over the river curvature.',
    culturalSignificance: 'Chunar has also been the historical capital of glazed red-clay pottery (GI tagged) and black clay terracotta, preserved by local artisan guilds for generations along the riverbank.',
    localStory: 'Local folklore narrates that the fortress was rendered invincible by the ascetic penance of Saint Bharthari, who vowed that the spirit of sovereign protection would reside within the fort so long as the Ganga flowed along its ramparts.',
    thingsToExperience: [
      'Walk through the 28-pillared Sonwa Mandap with ancient dynastic carvings',
      'Examine the 18th-century Solar Eclipse and Time Sun-dial (Dhup Ghadi)',
      'Explore subterranean defense tunnels and the Well of Secrets',
      'Witness sunset over the Ganga curve from the Western Ramparts',
      'Visit the GI-tagged traditional Chunar terracotta clay pottery workshops'
    ],
    // Authentic Northern India River Sandstone Fort Citadel
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoNSop-pxKeGHiqRedy9Mka8kp-GNkVFni-5Kc55vnbA&s=10',
    galleryImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXAnuw3mn7GzUfuWJ003lZ_ouGRztLyglqKGSGcbEmg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVxecyi8uJG5jyim_BnNp8J59lq5b8WIYlZwSGFroiw&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzJU6KetccNCR2s46KqeD2vhYXf4bcAdQ7qAKH1QuaQ&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcIKzsQph7kgC8tBb86p3oqUMzVCD2KhKggyJSNqyDw&s=10'
    ],
    estimatedVisitCost: {
      min: 300,
      max: 800
    },
    crowdLevel: 'Low',
    bestTime: '7:00 AM – 10:00 AM',
    weather: {
      temp: 28,
      condition: 'Partly Cloudy',
      rainProb: 15,
      humidity: 62,
      windSpeed: 11,
      weatherAlert: 'Clear morning skies optimal for rampart exploration. Slight humid breeze post-noon.',
      hourly: [
        { time: '06:00', temp: 24, condition: 'Clear', rainProb: 5, icon: 'sun' },
        { time: '09:00', temp: 27, condition: 'Partly Cloudy', rainProb: 10, icon: 'cloud-sun' },
        { time: '12:00', temp: 31, condition: 'Sunny', rainProb: 15, icon: 'sun' },
        { time: '15:00', temp: 30, condition: 'Breezy', rainProb: 20, icon: 'wind' },
        { time: '18:00', temp: 27, condition: 'Clear Sunset', rainProb: 5, icon: 'sunset' }
      ]
    },
    transport: [
      { mode: 'E-Rickshaw (from Chunar Station)', fareRange: '₹40 – ₹60', duration: '12 mins', notes: 'Standard municipal shared/private rate' },
      { mode: 'Auto-Rickshaw (from Mirzapur Town)', fareRange: '₹80 – ₹120', duration: '25 mins', notes: 'Negotiate fixed reference fare' },
      { mode: 'Private Taxi (from Varanasi, 42km)', fareRange: '₹800 – ₹1200', duration: '1.2 hours', notes: 'Day return package recommended' },
      { mode: 'Local State Bus', fareRange: '₹25 – ₹40', duration: '40 mins', notes: 'Departs hourly from Mirzapur bus terminal' }
    ],
    nearbyHotels: [
      {
        id: 'h1',
        name: 'Ganga Heritage Retreat Chunar',
        category: 'Budget',
        pricePerNight: 750,
        rating: 4.6,
        reviewsCount: 142,
        distance: '0.8 km from Fort',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        amenities: ['River View', 'Free Wi-Fi', 'Artisan Breakfast', 'Bicycle Rental'],
        bestValueTag: true,
        smartComparisonTip: 'Direct walking access to Sonwa Mandap saves ₹80 daily local auto fares.'
      },
      {
        id: 'h2',
        name: 'Vindhya Valley Eco Lodge',
        category: 'Comfort',
        pricePerNight: 1350,
        rating: 4.8,
        reviewsCount: 89,
        distance: '2.5 km from Fort',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
        amenities: ['Organic Dining', 'Heritage Guide Included', 'Terrace Telescope', 'AC Rooms'],
        smartComparisonTip: 'Includes complimentary guided sunrise rampart tour worth ₹300.'
      }
    ],
    responsibleTourismTips: [
      'Preserve the sandstone: Never etch names or scratch ancient pillar surfaces',
      'Support GI-certified local potters in Chunar bazaar rather than mass-produced plastics',
      'Carry reusable water bottles to eliminate single-use plastics along the river bluffs',
      'Hire verified ASI local storytellers for authentic non-commercial historical perspectives'
    ],
    sources: [
      'Archaeological Survey of India (Sarnath Circle)',
      'Uttar Pradesh State Tourism Archives',
      'Incredible India Heritage Database'
    ],
    lastUpdated: 'August 2026',
    rating: 4.7,
    reviewsCount: 384,
    coordinates: { lat: 25.1278, lng: 82.8767 },
    hasActiveQuest: true
  },
  {
    id: 'orchha',
    name: 'Orchha',
    nameHi: 'ओरछा',
    location: 'Niwari, Madhya Pradesh',
    locationHi: 'निवाड़ी, मध्य प्रदेश',
    state: 'Madhya Pradesh',
    category: 'Heritage',
    tagline: 'The Medieval Sanctuary of the Bundela Kings',
    description: 'Frozen in time along the boulder-strewn banks of the Betwa River, Orchha is a cinematic medieval sanctuary featuring the majestic Jahangir Mahal, Raja Mahal with vibrant murals, and sacred cenotaphs.',
    descriptionHi: 'बेतवा नदी के सुरम्य तट पर बसा ओरछा, बुंदेला राजाओं का एक मध्यकालीन स्वप्निल शहर है, जहाँ जहांगीर महल, राजा महल और भव्य छतरियां स्थित हैं।',
    history: 'Founded in 1501 by Bundela chieftain Rudra Pratap Singh, Orchha remained an independent, unconquered cultural capital. The Jahangir Mahal was built by Bir Singh Deo as a symbol of friendship with Mughal Emperor Jahangir.',
    architecture: 'A rare fusion of Rajput chhatris, Mughal domed cupolas, and Bundela cantilevered balconies with intricate lattice jali stonework and original mineral fresco paintings.',
    culturalSignificance: 'Home to the sacred Ram Raja Temple, where Lord Rama is revered not just as a deity, but officially as the reigning King with daily police guard of honor salutes.',
    localStory: 'Legend states that Queen Ganesh Kunwari brought Lord Rama from Ayodhya under the strict condition that Rama would never move to another temple once established in Orchha.',
    thingsToExperience: [
      'Gaze at the sunset reflection over the 14 Chhatris by the Betwa riverbank',
      'Observe the evening Aarti and ceremonial Guard of Honor at Ram Raja Temple',
      'Decipher 16th-century Bundelkhand murals in Raja Mahal',
      'Kayaking along the pristine Betwa river rapids',
      'Cycle through Orchha Wildlife Sanctuary forest trails'
    ],
    // Authentic Orchha Chhatris & Cenotaphs at Sunset
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1ZtiHEwEnR2KDo5wic8jAPiRDWIUkpYl2LF0BuHfGQ&s=10',
    galleryImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiYPqq-etLvWqKECPN9GxnluMj1ycNhgr5pOez0vDJQ&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYnRmmIIBOvmSpIR5RVojz6JhFV6eS3bT_AdM8ONWgg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3Ldw0ZQCilpntFyGobztvnuonQCx3SAqFqCmKd56ZQ&s=10'
    ],
    estimatedVisitCost: {
      min: 400,
      max: 950
    },
    crowdLevel: 'Low',
    bestTime: '6:30 AM – 9:30 AM',
    weather: {
      temp: 26,
      condition: 'Pleasant Breeze',
      rainProb: 10,
      humidity: 55,
      windSpeed: 14,
      weatherAlert: 'Ideal cooler mornings for heritage photography across cenotaphs.',
      hourly: [
        { time: '06:00', temp: 22, condition: 'Cool', rainProb: 5, icon: 'sun' },
        { time: '09:00', temp: 25, condition: 'Clear', rainProb: 5, icon: 'sun' },
        { time: '12:00', temp: 29, condition: 'Pleasant', rainProb: 10, icon: 'cloud-sun' }
      ]
    },
    transport: [
      { mode: 'Shared Auto (from Jhansi Junction, 16km)', fareRange: '₹30 – ₹50', duration: '35 mins', notes: 'Frequent departures from station gate' },
      { mode: 'Direct Auto Rickshaw', fareRange: '₹200 – ₹300', duration: '25 mins', notes: 'Fixed tourist route price' },
      { mode: 'E-Rickshaw within Orchha town', fareRange: '₹20 – ₹40', duration: '5 mins', notes: 'Walkable compact town' }
    ],
    nearbyHotels: [
      {
        id: 'h3',
        name: 'Bundelkhand Riverside Retreat',
        category: 'Comfort',
        pricePerNight: 1200,
        rating: 4.7,
        reviewsCount: 210,
        distance: '0.4 km from Chhatris',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNs29P4T8741ZLNAyGlacu3tJu9nmoxm1LqA0Vm8Q09g&s=10',
        amenities: ['Betwa View', 'Heritage Courtyard', 'Local Cuisine Buffet'],
        bestValueTag: true,
        smartComparisonTip: 'Centrally located inside historical precinct; eliminates internal transport cost.'
      }
    ],
    responsibleTourismTips: [
      'Maintain serene decorum during the ceremonial Ram Raja evening Aarti',
      'Refrain from touching painted mineral frescoes inside Raja Mahal apartments',
      'Hire registered Bundelkhand women-led village heritage guides'
    ],
    sources: [
      'Archaeological Survey of India (Bhopal Circle)',
      'Madhya Pradesh Tourism Board',
      'UNESCO Tentative List Dossier'
    ],
    lastUpdated: 'August 2026',
    rating: 4.8,
    reviewsCount: 520,
    coordinates: { lat: 25.3512, lng: 78.6433 },
    hasActiveQuest: true
  },
  {
    id: 'meenakshi-temple',
    name: 'Meenakshi Amman Temple',
    nameHi: 'मीनाक्षी अम्मन मंदिर',
    location: 'Madurai, Tamil Nadu',
    locationHi: 'मदुरै, तमिलनाडु',
    state: 'Tamil Nadu',
    category: 'Heritage',
    tagline: 'The Monumental Dravidian Gopurams & Hall of Thousand Pillars',
    description: 'A world-renowned spiritual masterpiece dating back to antiquity, renowned for its 14 towering, multi-tiered sculptural Gopurams, the sacred Golden Lotus tank (Potramarai Kulam), and the awe-inspiring Thousand Pillar Hall (Aayiram Kaal Mandapam).',
    descriptionHi: 'प्राचीन मदुरै शहर के केंद्र में स्थित 14 भव्य गोपुरमों, स्वर्ण कमल सरोवर और 1000 स्तंभों वाले मंडप से सुसज्जित द्रविड़ वास्तुकला का अमर गौरव।',
    history: 'Mentioned in ancient Tamil Sangam literature over 2,500 years ago, the temple was expanded to its current monumental grandeur by King Thirumalai Nayak in the 16th and 17th centuries.',
    architecture: 'Classical Dravidian temple architecture featuring massive multi-colored stucco sculpted gopurams reaching up to 52 meters, musical stone pillars that produce distinct musical notes when tapped, and the sacred Hall of 985 exquisitely carved monolithic pillars.',
    culturalSignificance: 'Epicenter of Madurai’s 2,500-year living urban civilization, classical Carnatic music traditions, jasmine (Madurai Malli) culture, and the grand annual Chithirai festival.',
    localStory: 'According to sacred lore, Goddess Meenakshi (an avatar of Parvati) was born with three breasts; ancient seers prophesied that the third would vanish upon meeting her divine consort, Lord Sundareswarar (Shiva), on the holy soils of Madurai.',
    thingsToExperience: [
      'Stand in awe before the 14 multi-tiered vibrant Dravidian gateway Gopurams',
      'Walk through the monolithic Hall of Thousand Pillars (Aayiram Kaal Mandapam)',
      'Listen to the acoustic musical stone pillars near the North Tower',
      'Experience the evening Palanquin procession and traditional Nadaswaram recital',
      'Smell the fragrant GI-tagged Madurai Malli jasmine flower bazaar at dawn'
    ],
    // High-res authentic Dravidian Gopuram & Temple architecture
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8MzqsA4VlvqEUfvgknn0_2zQMH4aQOzFGXgH4Bgtbg&s=10',
    galleryImages: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTpVW6J1Yd34iwAX1YVblFTIjbvJKJ8DUgbB-jd5r6A&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeryDFn_-zZbg2w9_i40pM0JOuyVYlpH631S8zssQGA&s=10'
    ],
    estimatedVisitCost: {
      min: 200,
      max: 600
    },
    crowdLevel: 'Moderate',
    bestTime: '5:30 AM – 8:30 AM',
    weather: {
      temp: 30,
      condition: 'Warm & Sunny',
      rainProb: 10,
      humidity: 60,
      windSpeed: 10,
      weatherAlert: 'Early morning temple entry recommended to avoid afternoon queues.',
      hourly: [
        { time: '05:30', temp: 24, condition: 'Cool Dawn', rainProb: 5, icon: 'sun' },
        { time: '09:00', temp: 29, condition: 'Sunny', rainProb: 5, icon: 'sun' }
      ]
    },
    transport: [
      { mode: 'Auto-Rickshaw (from Madurai Junction, 2km)', fareRange: '₹50 – ₹80', duration: '10 mins', notes: 'Standard prepaid auto stand' },
      { mode: 'Local City Bus', fareRange: '₹10 – ₹20', duration: '15 mins', notes: 'Stops directly near East Gopuram' }
    ],
    nearbyHotels: [
      {
        id: 'h-madurai-1',
        name: 'Heritage Residency Madurai',
        category: 'Comfort',
        pricePerNight: 1200,
        rating: 4.8,
        reviewsCount: 380,
        distance: '1.2 km from West Gopuram',
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
        amenities: ['Temple View', 'Traditional Chettinad Dining', 'Free Wi-Fi'],
        bestValueTag: true,
        smartComparisonTip: 'Direct auto access saves 20 mins travel time during morning Darshan.'
      }
    ],
    responsibleTourismTips: [
      'Maintain strict traditional dress code (dhoti/sari/kurta; no shorts)',
      'Electronic devices and mobile phones must be deposited in official lockers before entry',
      'Buy authentic Madurai Sungudi cotton handloom sarees directly from registered weavers'
    ],
    sources: [
      'Tamil Nadu Tourism Development Corporation (TTDC)',
      'Archaeological Survey of India (Chennai Circle)',
      'Madurai District Heritage Authority'
    ],
    lastUpdated: 'August 2026',
    rating: 4.9,
    reviewsCount: 1650,
    coordinates: { lat: 9.9195, lng: 78.1193 },
    hasActiveQuest: true
  },
  {
    id: 'mandu',
    name: 'Mandu',
    nameHi: 'मांडू',
    location: 'Dhar, Madhya Pradesh',
    locationHi: 'धार, मध्य प्रदेश',
    state: 'Madhya Pradesh',
    category: 'Heritage',
    tagline: 'The City of Joy and Eternal Poetry',
    description: 'Perched on the edge of the Vindhya range, Mandu is an architectural wonderland of floating water palaces, acoustic echo domes, Afghan pavilions, and the legendary love story of Baz Bahadur and Rani Roopmati.',
    descriptionHi: 'विंध्य की पहाड़ियों में बसा मांडू, जहाज़ महल, रानी रूपमती मंडप और बाज़ बहादुर की अमर प्रेम कहानी का प्रतीक महलों का जादुई शहर है।',
    history: 'Flourishing under the Paramara kings and later Sultan Hoshang Shah, Mandu reached its poetic zenith in the 16th century with Baz Bahadur, until Mughal annexation by Akbar in 1561.',
    architecture: 'Home to Jahaz Mahal (Ship Palace built between two artificial lakes), Hindola Mahal (Swinging Palace with 77-degree tilted walls), and Jami Masjid inspired by Damascus architecture.',
    culturalSignificance: 'Mandu represents the highest achievement of medieval hydraulic engineering, rainwater catchment reservoirs (Champa Baoli), and romantic folk ballads.',
    localStory: 'Rani Roopmati agreed to marry Baz Bahadur only on the condition that her pavilion overlook the holy Narmada River so she could gaze upon the sacred waters before her morning prayers.',
    thingsToExperience: [
      'Watch Jahaz Mahal appear to float between Kapur and Munj water tanks',
      'Whisper inside the acoustic dome of Hoshang Shah’s white marble tomb',
      'Look out at the Narmada River basin from Roopmati’s hilltop pavilion',
      'Taste unique giant Baobab fruits (Khorasani Imli) introduced by Afghan traders'
    ],
    // Authentic Jahaz Mahal water palace architecture & Mandu plateau
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiA6EQUKjQT3rfUKEDIJ7TQMVjgj6MLjjqah4zSeqJJw&s=10',
    galleryImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kg43CiKk706TopaDWHgaWE4-suep8uWDWHYHO28R7g&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kg43CiKk706TopaDWHgaWE4-suep8uWDWHYHO28R7g&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRE-aOB22AJ1IeOJh24rsc_aee1BgQf7G5WXKo4MOJcA&s=10'
    ],
    estimatedVisitCost: {
      min: 350,
      max: 900
    },
    crowdLevel: 'Low',
    bestTime: '7:30 AM – 11:00 AM',
    weather: {
      temp: 25,
      condition: 'Misty & Breezy',
      rainProb: 25,
      humidity: 70,
      windSpeed: 16,
      hourly: [
        { time: '08:00', temp: 23, condition: 'Misty', rainProb: 15, icon: 'cloud' },
        { time: '12:00', temp: 27, condition: 'Breezy', rainProb: 20, icon: 'wind' }
      ]
    },
    transport: [
      { mode: 'Bus from Indore (98km)', fareRange: '₹90 – ₹130', duration: '2.5 hours', notes: 'Direct morning buses available' },
      { mode: 'Shared Taxi from Dhar (35km)', fareRange: '₹50 – ₹80', duration: '45 mins', notes: 'Runs every 20 minutes' },
      { mode: 'Rented Bicycle in Mandu', fareRange: '₹100/day', duration: 'Flexible', notes: 'Best eco-friendly way to see palaces' }
    ],
    nearbyHotels: [
      {
        id: 'h4',
        name: 'Malwa Resort Mandu',
        category: 'Comfort',
        pricePerNight: 1100,
        rating: 4.5,
        reviewsCount: 164,
        distance: '1.1 km from Jahaz Mahal',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
        amenities: ['Lake View', 'Garden Dining', 'Cycle Rental'],
        bestValueTag: true
      }
    ],
    responsibleTourismTips: [
      'Mandu is a zero-litter biodiversity plateau; leave no trace',
      'Support tribal women co-operatives selling hand-processed baobab squash',
      'Do not carve initials into the historical step-well stonework'
    ],
    sources: [
      'Archaeological Survey of India',
      'Madhya Pradesh Tourism Portal'
    ],
    lastUpdated: 'August 2026',
    rating: 4.8,
    reviewsCount: 410,
    coordinates: { lat: 22.3662, lng: 75.4058 },
    hasActiveQuest: true
  },
  {
    id: 'majuli',
    name: 'Majuli Island',
    nameHi: 'माजुली द्वीप',
    location: 'Brahmaputra Basin, Assam',
    locationHi: 'ब्रह्मपुत्र बेसिन, असम',
    state: 'Assam',
    category: 'Culture',
    tagline: 'The World’s Largest Freshwater River Island & Satra Cradle',
    description: 'Floating on the mighty Brahmaputra, Majuli is the heart of Neo-Vaishnavite Monastic Satras, traditional bamboo mask-making, Mishing tribal handlooms, and bird sanctuaries.',
    descriptionHi: 'ब्रह्मपुत्र नदी के बीच स्थित माजुली दुनिया का सबसे बड़ा नदी द्वीप है, जो नव-वैष्णव सत्रों, पारंपरिक मुखौटा निर्माण और रेशम बुनाई का केंद्र है।',
    history: 'Established in the 15th century by Srimanta Sankardev as the epicenter of spiritual egalitarianism and classical Sattriya dance, music, and dramatic arts.',
    architecture: 'Unique bamboo and stilt architecture (Chang Ghar) designed to endure seasonal river floods, harmonized with ancient Satra prayer halls (Namghar).',
    culturalSignificance: 'Preserves the rare art of organic bamboo and clay theatrical masks used in Ankiya Naat folk dramas, crafted by Samaguri Satra artisans.',
    localStory: 'The islanders revere the river as "Luit" (Red River) and hold an intimate spiritual dialogue with nature, relocating villages sustainably as sandbars shift.',
    thingsToExperience: [
      'Learn classical bamboo-and-paper mask craft at Samaguri Satra',
      'Listen to morning Borgeet hymns inside Dakhinpat Satra',
      'Stay in an authentic Mishing bamboo eco-homestay',
      'Sample traditional fermented Apong rice delicacy and herbal fish stew',
      'Watch migratory pelicans and Siberian cranes at sunset wetlands'
    ],
    // Authentic Assam Brahmaputra river landscape & bamboo island
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPEnu_M2UAI40LaKpGl2BshYCN8f7fKyp6_aOaY5vWpQ&s=10',
    galleryImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfxF_gbHZejCdMSLzXriOPZTlwuae4JezY-cUk3Fpeg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYGkaZ0y4NfUdLTjtNsld63v-P_nYMxB_rzd7b66lsw&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJzT27w3sJatjLdqwCZYjuPLougpuHqPvuv5vozYaIg&s=10'
    ],
    estimatedVisitCost: {
      min: 500,
      max: 1200
    },
    crowdLevel: 'Low',
    bestTime: '8:00 AM – 12:00 PM',
    weather: {
      temp: 24,
      condition: 'Clean Island Breeze',
      rainProb: 15,
      humidity: 75,
      windSpeed: 10,
      hourly: [
        { time: '07:00', temp: 21, condition: 'Misty River', rainProb: 10, icon: 'cloud' }
      ]
    },
    transport: [
      { mode: 'Government Ferry (Nimati Ghat to Majuli)', fareRange: '₹15 – ₹30', duration: '1 hour', notes: 'Scheduled every 1.5 hours' },
      { mode: 'Island E-Rickshaw', fareRange: '₹30 – ₹60', duration: '15 mins', notes: 'Shared island route' },
      { mode: 'Bicycle Rental', fareRange: '₹80/day', duration: 'Full Day', notes: 'Best way to travel between Satras' }
    ],
    nearbyHotels: [
      {
        id: 'h5',
        name: 'Mishing Eco Bamboo Cottage',
        category: 'Budget',
        pricePerNight: 650,
        rating: 4.9,
        reviewsCount: 188,
        distance: 'Near Kamalabari',
        image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=600&q=80',
        amenities: ['Authentic Tribal Food', 'River View', 'Handloom Workshop Access'],
        bestValueTag: true
      }
    ],
    responsibleTourismTips: [
      'Respect monastic vows: remove footwear before entering prayer Namghars',
      'Purchase masks directly from Samaguri Satra master artisans to preserve endangered craft',
      'Support the zero-single-use-plastic initiative across the river island'
    ],
    sources: [
      'Majuli Cultural Landscape Authority',
      'Assam Tourism Development Corporation',
      'Sangeet Natak Akademi'
    ],
    lastUpdated: 'August 2026',
    rating: 4.9,
    reviewsCount: 290,
    coordinates: { lat: 26.9538, lng: 94.2037 },
    hasActiveQuest: false
  },
  {
    id: 'dholavira',
    name: 'Dholavira',
    nameHi: 'धोलावीरा',
    location: 'Khadir Bet, Great Rann of Kutch, Gujarat',
    locationHi: 'खादिर बेट, कच्छ का रण, गुजरात',
    state: 'Gujarat',
    category: 'Heritage',
    tagline: 'The 4,500-Year-Old Harappan Metropolis of Master Engineers',
    description: 'An extraordinary UNESCO World Heritage archaeological marvel showcasing the pinnacle of Indus Valley urban planning, colossal stone reservoirs, stormwater harvesting, and ancient signboard script.',
    descriptionHi: '4,500 वर्ष पुराना सिंधु घाटी सभ्यता का प्रमुख नगर, जो अपनी अद्वितीय जल संरक्षण प्रणाली और नगर योजना के लिए यूनेस्को विश्व धरोहर है।',
    history: 'Flourishing between 3000 BC and 1500 BC, Dholavira was a bustling maritime trading port connecting the Indus civilization with ancient Mesopotamia and Oman.',
    architecture: 'Engineered entirely with precision-dressed limestone blocks and mud bricks, featuring tripartite fortification (Citadel, Middle Town, Lower Town) and 16 massive interlinked water reservoirs.',
    culturalSignificance: 'Site of the famous "Dholavira Signboard" consisting of 10 large Indus script symbols inlaid with white gypsum crystals, one of the earliest public signages in human history.',
    localStory: 'Archaeological excavations reveal that even during multi-year droughts in the desert, Dholavira’s hydraulic network collected and purified every drop of seasonal rainwater.',
    thingsToExperience: [
      'Stand inside the 4,500-year-old rock-cut colossal step reservoir',
      'Inspect the ceremonial stadium with stepped seating for thousands',
      'View original pottery, steatite seals, and carnelian beads in the ASI museum',
      'Drive across the surreal White Rann Road to Heaven causeway'
    ],
    // Authentic Harappan rock-cut stone archaeological ruins
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsxqOqqaPr8lolo6mTyEadiaQBnpJG2wHUeYIHPJPGQ&s=10',
    galleryImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ofHNjb2of3tYbI6RLz_RRN__mBNN41OHU2DenxAJhg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB29Q4gLFmfiwsX-E5B2OcjVhbl4NZrDbfIiiIOZ9qA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzKXuquXrWUDymt4Tz5cjjmkCrrZo69DvmQgcajrEkg&s=10'
    ],
    estimatedVisitCost: {
      min: 400,
      max: 1000
    },
    crowdLevel: 'Low',
    bestTime: '7:00 AM – 10:30 AM',
    weather: {
      temp: 29,
      condition: 'Sunny Desert Morning',
      rainProb: 5,
      humidity: 40,
      windSpeed: 18,
      hourly: [
        { time: '07:00', temp: 23, condition: 'Cool Desert', rainProb: 0, icon: 'sun' }
      ]
    },
    transport: [
      { mode: 'State Bus from Bhuj (215km)', fareRange: '₹140 – ₹190', duration: '4.5 hours', notes: 'Daily morning service' },
      { mode: 'Shared Taxi from Rapar (90km)', fareRange: '₹100 – ₹150', duration: '1.8 hours', notes: 'Available from Rapar bus station' }
    ],
    nearbyHotels: [
      {
        id: 'h6',
        name: 'Khadir Bet Heritage Homestay',
        category: 'Budget',
        pricePerNight: 800,
        rating: 4.8,
        reviewsCount: 112,
        distance: '3 km from Site',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
        amenities: ['Traditional Bhunga stay', 'Kutchi Millet Meals', 'Stargazing Courtyard'],
        bestValueTag: true
      }
    ],
    responsibleTourismTips: [
      'Do not climb fragile mud-brick excavation walls',
      'Carry back all personal packaging; desert winds easily disperse trash',
      'Support Kutchi mirror-work embroidery artisans in Khadir villages'
    ],
    sources: [
      'UNESCO World Heritage Centre',
      'Archaeological Survey of India (Excavation Branch)'
    ],
    lastUpdated: 'August 2026',
    rating: 4.9,
    reviewsCount: 245,
    coordinates: { lat: 23.8864, lng: 70.2133 },
    hasActiveQuest: true
  },
  {
    id: 'lepakshi',
    name: 'Lepakshi Veerabhadra Temple',
    nameHi: 'लेपाक्षी वीरभद्र मंदिर',
    location: 'Sri Sathya Sai, Andhra Pradesh',
    locationHi: 'श्री सत्य साई, आंध्र प्रदेश',
    state: 'Andhra Pradesh',
    category: 'Heritage',
    tagline: 'The Mystical Hanging Pillar and Vijayanagara Fresco Sanctuary',
    description: 'A 16th-century architectural masterpiece famous for the gravity-defying Hanging Pillar, the monolithic Nandi bull, multi-hooded Naga Shiva lingam, and India’s largest ceiling murals.',
    descriptionHi: '16वीं सदी का वास्तुशिल्प चमत्कार, जो हवा में लटके खंभे, विशाल नंदी प्रतिमा और भारत के सबसे बड़े छत भित्तिचित्रों के लिए प्रसिद्ध है।',
    history: 'Built in 1530 AD by brothers Virupanna and Veeranna, governors under the Vijayanagara king Achyuta Deva Raya, atop the Kurmasailam (tortoise hill).',
    architecture: 'Intricate Vijayanagara stone sculpting style featuring the famous pillar that does not touch the granite floor, 100-pillared Natya Mandapa with divine musicians, and a single-boulder 7-hooded serpent.',
    culturalSignificance: 'Associated with the Ramayana epic; where the wounded bird king Jatayu fell after battling Ravana and was blessed by Lord Rama with the words "Le Pakshi" (Rise, O Bird).',
    localStory: 'British engineers once attempted to dislodge the hanging pillar to understand its structural secret, only to find the entire roof beginning to shift in sympathy.',
    thingsToExperience: [
      'Pass a silk scarf underneath the famous gravity-defying Hanging Pillar',
      'Marvel at the monolithic granite Nandi Bull (4.5m high, 8.2m long)',
      'Look up at the 16th-century vegetable-dye ceiling fresco of Virabhadra',
      'Trace the legendary giant footprint carved on the granite hillock'
    ],
    // Authentic Vijayanagara stone temple pillared corridor
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHXBCtV2BIWAq3vNQal2Is7dq4bK9NVs-lcC-h4COVQ&s=10',
    galleryImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBILtD05y1t98O0o41T9j7Sav89iCLnJkCbVFhY9sqPw&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLR8pPV1yvbIgcWWVz364R2BlDWOK6E7yMWd1MXpyTA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHXBCtV2BIWAq3vNQal2Is7dq4bK9NVs-lcC-h4COVQ&s=10'
    ],
    estimatedVisitCost: {
      min: 250,
      max: 600
    },
    crowdLevel: 'Moderate',
    bestTime: '6:30 AM – 9:30 AM',
    weather: {
      temp: 27,
      condition: 'Sunny & Pleasant',
      rainProb: 10,
      humidity: 58,
      windSpeed: 12,
      hourly: [
        { time: '07:00', temp: 24, condition: 'Sunny', rainProb: 5, icon: 'sun' }
      ]
    },
    transport: [
      { mode: 'Direct Bus from Hindupur (14km)', fareRange: '₹20 – ₹35', duration: '25 mins', notes: 'Runs every 15 minutes' },
      { mode: 'Auto Rickshaw from Hindupur Station', fareRange: '₹120 – ₹180', duration: '20 mins', notes: 'Fixed standard rate' },
      { mode: 'Cab from Bengaluru Airport (105km)', fareRange: '₹1800 – ₹2400', duration: '2 hours', notes: 'Popular day excursion' }
    ],
    nearbyHotels: [
      {
        id: 'h7',
        name: 'Haritha Heritage Lepakshi',
        category: 'Budget',
        pricePerNight: 750,
        rating: 4.4,
        reviewsCount: 198,
        distance: '0.3 km from Temple',
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80',
        amenities: ['Direct Temple Access', 'South Indian Dining', 'Free Parking'],
        bestValueTag: true
      }
    ],
    responsibleTourismTips: [
      'Do not drag heavy objects under the hanging pillar to preserve alignment',
      'Flash photography is strictly prohibited under the 16th-century painted ceiling',
      'Wear traditional respectful attire when entering active sanctum areas'
    ],
    sources: [
      'Archaeological Survey of India (Hyderabad Circle)',
      'Andhra Pradesh Tourism'
    ],
    lastUpdated: 'August 2026',
    rating: 4.7,
    reviewsCount: 460,
    coordinates: { lat: 13.8052, lng: 77.6083 },
    hasActiveQuest: true
  },
  {
    id: 'bhimbetka',
    name: 'Bhimbetka Rock Shelters',
    nameHi: 'भीमबेटका शैलचित्र',
    location: 'Raisen, Madhya Pradesh',
    locationHi: 'रायसेन, मध्य प्रदेश',
    state: 'Madhya Pradesh',
    category: 'Heritage',
    tagline: '100,000 Years of Human Prehistoric Artistic Expression',
    description: 'A UNESCO World Heritage sanctuary comprising over 750 rock shelters nestled in dense teak forests, containing paintings that span the Upper Paleolithic to medieval eras.',
    descriptionHi: '100,000 वर्षों से अधिक पुरानी मानव कला और आदिमानव के जीवन को दर्शाने वाले 750 से अधिक शैलचित्रों का यूनेस्को विश्व धरोहर स्थल।',
    history: 'Discovered in 1957 by legendary Indian archaeologist Dr. V. S. Wakankar, revealing continuous human habitation spanning from the Acheulian Stone Age.',
    architecture: 'Naturally carved sandstone shelters and monoliths shaped by water erosion, containing vibrant mineral pigments of ochre, white manganese, and vegetable dyes.',
    culturalSignificance: 'Provides the oldest known visual record of dance, childbirth, bison hunting, ritual ceremonies, and domesticated animals in the Indian subcontinent.',
    localStory: 'Named after Bhima of Mahabharata fame ("Bhim-baithaka" or seat of Bhima), the site was considered sacred by surrounding Gond tribal forest dwellers for millennia.',
    thingsToExperience: [
      'Stand before the famous "Zoo Rock" shelter depicting 252 animals across 16 species',
      'Observe the Auditorium Cave with deep acoustic properties and ancient cupules',
      'Walk the 1.5 km canopy pathway through ancient wind-sculpted rock formations',
      'Witness the world’s oldest depiction of communal music and circle dancing'
    ],
    // Authentic prehistoric ancient rock shelters & forested sandstone overhangs
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijWW0gurbSNuHGs1tQUgghi_3PKjo9lLVW3rvaDT6Fg&s=10',
    galleryImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZVnMgQEvDFDC_R8NmuWlLwbmQTPVgE_Q6DWDgp2JoQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FJf7IXM2VMPFefufbDbXmfJjw3z8iPFy2tY97CFORA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbW2BXrqM0Cnzcrg1Qk7oAJy-U_z3ttAcag6mOTLbiA&s=10'
    ],
    estimatedVisitCost: {
      min: 200,
      max: 500
    },
    crowdLevel: 'Low',
    bestTime: '8:00 AM – 11:30 AM',
    weather: {
      temp: 26,
      condition: 'Forested Shade & Clear',
      rainProb: 10,
      humidity: 50,
      windSpeed: 9,
      hourly: [
        { time: '08:00', temp: 22, condition: 'Clear', rainProb: 5, icon: 'sun' }
      ]
    },
    transport: [
      { mode: 'Bus from Bhopal (45km)', fareRange: '₹40 – ₹60', duration: '1 hour', notes: 'Alight at Bhimbetka crossing' },
      { mode: 'Auto from Obaidullaganj (8km)', fareRange: '₹80 – ₹120', duration: '15 mins', notes: 'Short hop to shelter gate' }
    ],
    nearbyHotels: [
      {
        id: 'h8',
        name: 'Highway Treat Bhimbetka MPT',
        category: 'Budget',
        pricePerNight: 850,
        rating: 4.5,
        reviewsCount: 130,
        distance: '2 km from Shelters',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80',
        amenities: ['Forest Setting', 'Local Thali', 'Guide Desk'],
        bestValueTag: true
      }
    ],
    responsibleTourismTips: [
      'Strictly prohibited to touch rock paintings; human skin oils degrade mineral pigments',
      'Maintain absolute silence along forest trails to protect resident wildlife',
      'Support tribal Gond artists selling certified contemporary forest paintings at the museum exit'
    ],
    sources: [
      'UNESCO World Heritage Centre',
      'Archaeological Survey of India'
    ],
    lastUpdated: 'August 2026',
    rating: 4.8,
    reviewsCount: 310,
    coordinates: { lat: 22.9372, lng: 77.6128 },
    hasActiveQuest: false
  },
  {
    id: 'konark',
    name: 'Konark Sun Temple',
    nameHi: 'कोणार्क सूर्य मंदिर',
    location: 'Puri, Odisha',
    locationHi: 'पुरी, ओडिशा',
    state: 'Odisha',
    category: 'Heritage',
    tagline: 'The Cosmic Stone Chariot of the Sun God',
    description: 'A 13th-century architectural marvel shaped as a monumental celestial chariot with 24 exquisitely carved stone sundial wheels pulled by seven galloping stone horses on the Bay of Bengal coast.',
    descriptionHi: '13वीं शताब्दी का अद्वितीय सूर्य रथ मंदिर, जिसके 24 पहिये समय मापने वाली खगोलीय घड़ियों के रूप में नक्काशीदार हैं।',
    history: 'Commissioned by King Narasimhadeva I of the Eastern Ganga Dynasty in 1250 AD to commemorate his military victory and devotion to Surya.',
    architecture: 'Kalinga architectural peak executed in ferruginous Khondalite stone, engineered with magnetic iron beams that once suspended the main deity in mid-air.',
    culturalSignificance: 'The 24 wheels represent the 24 fortnights of the solar year, with spokes that accurately cast shadow time down to the minute.',
    localStory: 'Legend commemorates the 12-year-old master architect’s son, Dharmapada, who solved the crowning apex stone (Kalasa) engineering challenge when 1,200 master craftsmen could not.',
    thingsToExperience: [
      'Calculate current solar time using the shadow cast on the Great Sundial Wheel',
      'Admire intricate stone carvings of musicians playing 12 ancient instruments',
      'Stroll along the tranquil golden sands of Chandrabhaga Beach at dawn',
      'Visit the nearby heritage craft village of Raghurajpur for Pattachitra art'
    ],
    // Authentic Konark Sun Temple Stone Carvings
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKmIbEo9C02zIYtP4aitJJrNOFQ3Mr_ilp4PvjBp0LnA&s=10',
    galleryImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBBSNnPdBjGPrcKjO9TE8BcZiowN-KA3wotlbtSeRcA&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy65ZlB3_vs8kl2o6tYUoYT8sIa9HI6s1JpGXOyGKyXg&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxG5rRTcXPDD3ibEvCZT0EfJhTzTTUeaSvumfB_JRQg&s=10'
    ],
    estimatedVisitCost: {
      min: 350,
      max: 850
    },
    crowdLevel: 'Moderate',
    bestTime: '6:00 AM – 9:00 AM',
    weather: {
      temp: 28,
      condition: 'Coastal Breeze',
      rainProb: 20,
      humidity: 68,
      windSpeed: 15,
      hourly: [
        { time: '06:00', temp: 25, condition: 'Sunrise Breeze', rainProb: 10, icon: 'sun' }
      ]
    },
    transport: [
      { mode: 'AC Bus from Bhubaneswar (65km)', fareRange: '₹70 – ₹110', duration: '1.5 hours', notes: 'Frequent direct services' },
      { mode: 'Auto from Puri Town (35km)', fareRange: '₹350 – ₹450', duration: '45 mins', notes: 'Along Marine Drive' }
    ],
    nearbyHotels: [
      {
        id: 'h9',
        name: 'Lotus Eco Beach Resort Konark',
        category: 'Comfort',
        pricePerNight: 1400,
        rating: 4.6,
        reviewsCount: 220,
        distance: '2.5 km from Temple',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFb664gG5e0ASraIuruefkHBbZ6hUFsZKo6wMDvpYCKg&s=10',
        amenities: ['Beachside Chalets', 'Odia Seafood', 'Ayurvedic Spa'],
        bestValueTag: true
      }
    ],
    responsibleTourismTips: [
      'Do not cross safety rope barricades around weathered Khondalite carvings',
      'Support authentic Raghurajpur palm-leaf Pattachitra artists directly in their artisan homes',
      'Keep the Chandrabhaga nesting turtle coastal zone free of plastic refuse'
    ],
    sources: [
      'UNESCO World Heritage Centre',
      'Archaeological Survey of India (Bhubaneswar Circle)',
      'Odisha Tourism'
    ],
    lastUpdated: 'August 2026',
    rating: 4.8,
    reviewsCount: 780,
    coordinates: { lat: 19.8876, lng: 86.0945 },
    hasActiveQuest: true
  },
  {
    id: 'agra-cultural',
    name: 'Agra Heritage & Craft Circuit',
    nameHi: 'आगरा सांस्कृतिक व विरासत परिपथ',
    location: 'Agra, Uttar Pradesh',
    locationHi: 'आगरा, उत्तर प्रदेश',
    state: 'Uttar Pradesh',
    category: 'Heritage',
    tagline: 'Beyond the Taj: Mughal Secrets, Zardozi Weavers, and Mehtab Sunset',
    description: 'An immersive cultural expedition connecting the world-renowned Taj Mahal and Agra Fort with lesser-known gems: Itmad-ud-Daulah (Baby Taj), Chini Ka Rauza, and ancient marble inlay artisans.',
    descriptionHi: 'ताजमहल से परे, बेबी ताज, चीनी का रौज़ा, प्राचीन ज़रदोज़ी कारीगरों और संगमरमर पच्चीकारी की प्रामाणिक यात्रा।',
    history: 'Capital of the Mughal Empire for over a century under Akbar, Jahangir, and Shah Jahan, serving as the international center for Persian arts, architecture, and cuisine.',
    architecture: 'Pietra Dura (Parchin Kari) marble stone inlay with semi-precious lapis lazuli and jasper, symmetry gardens (Charbagh), and red sandstone bastions.',
    culturalSignificance: 'Living repository of Mughal culinary craft (Petha confectioneries, Mughlai spices) and intricate Zardozi gold-thread embroidery.',
    localStory: 'Nur Jahan personally designed the tomb of her father Itmad-ud-Daulah, introducing white marble with floral inlay in India before the Taj Mahal was conceived.',
    thingsToExperience: [
      'Sunrise view of Taj Mahal with zero crowds from the East Gate gardens',
      'Witness living Pietra Dura artisans cut and set malachite into white marble',
      'Sunset reflection of the Taj Mahal across the Yamuna from Mehtab Bagh',
      'Taste authentic traditional Agra Petha crafted at heritage sweet shops'
    ],
    // Iconic Taj Mahal & Agra Fort Marble Heritage
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVLq3fq8IXgNA0XE3HlfnDGKfWPZH5aKWAfOULS6zIA&s=10'
    ],
    estimatedVisitCost: {
      min: 400,
      max: 1200
    },
    crowdLevel: 'Moderate',
    bestTime: '6:00 AM – 9:00 AM',
    weather: {
      temp: 28,
      condition: 'Partly Cloudy',
      rainProb: 20,
      humidity: 65,
      windSpeed: 12,
      weatherAlert: 'If afternoon rain increases to 40%, outdoor monuments will be rescheduled to the morning session.',
      hourly: [
        { time: '06:00', temp: 24, condition: 'Clear Dawn', rainProb: 5, icon: 'sun' },
        { time: '09:00', temp: 27, condition: 'Partly Cloudy', rainProb: 15, icon: 'cloud-sun' },
        { time: '13:00', temp: 31, condition: 'Isolated Showers', rainProb: 35, icon: 'cloud-rain' },
        { time: '17:00', temp: 28, condition: 'Pleasant Sunset', rainProb: 10, icon: 'sunset' }
      ]
    },
    transport: [
      { mode: 'Walking (Taj East Gate to Nature Walk)', fareRange: 'Free', duration: '15 mins', notes: 'Best scenic pedestrian path' },
      { mode: 'E-Rickshaw (Taj to Agra Fort)', fareRange: '₹40 – ₹60', duration: '12 mins', notes: 'Eco-friendly zone standard rate' },
      { mode: 'Auto-Rickshaw (Standard Route)', fareRange: '₹50 – ₹80', duration: '10 mins', notes: 'Standard reference fare (Check ScamShield!)' },
      { mode: 'Local City AC Bus', fareRange: '₹20 – ₹30', duration: '20 mins', notes: 'Departs from Idgah bus stand' },
      { mode: 'Prepaid App Cab', fareRange: '₹150 – ₹200', duration: '10 mins', notes: 'Point to point air-conditioned' }
    ],
    nearbyHotels: [
      {
        id: 'h10',
        name: 'Taj View Haveli & Guest House',
        category: 'Budget',
        pricePerNight: 650,
        rating: 4.6,
        reviewsCount: 340,
        distance: '0.6 km from Taj East Gate',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80',
        amenities: ['Rooftop Taj View', 'Free Wi-Fi', 'Mughlai Breakfast', '24/7 Security'],
        bestValueTag: true,
        smartComparisonTip: 'Walk to Taj Mahal in 8 minutes; saves ₹150 daily in local auto fares.'
      },
      {
        id: 'h11',
        name: 'Courtyard Heritage Agra',
        category: 'Comfort',
        pricePerNight: 1250,
        rating: 4.8,
        reviewsCount: 412,
        distance: '2.1 km from Taj Mahal',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80',
        amenities: ['Pool', 'Authentic Dining', 'Shuttle Service', 'Guide Assistance'],
        smartComparisonTip: 'Includes free scheduled electric shuttle to monument gates.'
      }
    ],
    responsibleTourismTips: [
      'Use ScamShield to confirm reference fares and protect yourself from unsolicited touts',
      'Buy GI-tagged Agra Petha from registered heritage shops in Noori Gate',
      'Do not accept unrequested "free guidance" from unofficial guides without verifying credentials'
    ],
    sources: [
      'Archaeological Survey of India (Agra Circle)',
      'Ministry of Tourism, Government of India',
      'Incredible India'
    ],
    lastUpdated: 'August 2026',
    rating: 4.8,
    reviewsCount: 1420,
    coordinates: { lat: 27.1751, lng: 78.0421 },
    hasActiveQuest: true
  }
];
