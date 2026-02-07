// ===== Temple Info (MULTI-LANGUAGE NAME + PLACE) =====
const TEMPLE = {
  name: {
    en: "Sri Jambukeswara Swamy Sivalayam",
    te: "శ్రీ జంబుకేశ్వర స్వామి శివాలయం",
    hi: "श्री जम्बुकेश्वर स्वामी शिवालय",
    ta: "ஸ்ரீ ஜம்புகேஸ்வர ஸ்வாமி சிவாலயம்"
  },
  place: {
    en: "Mangalam Village, Tirupati District",
    te: "మంగళం గ్రామం, తిరుపతి జిల్లా",
    hi: "मंगलम गाँव, तिरुपति ज़िला",
    ta: "மங்களம் கிராமம், திருப்பதி மாவட்டம்"
  },
  nextFestivalName: "Maha Shivaratri",
  nextFestivalDate: "2026-02-15T09:30:00"
};

const TEMPLE_COORDS = { lat: 13.6507311, lng: 79.4591733 };

// Darshan timings (editable)
const TIMINGS = [
  { day: "Sunday",    open: "5:30 AM", close: "8:30 PM" },
  { day: "Monday",    open: "5:00 AM", close: "9:30 PM" },
  { day: "Tuesday",   open: "6:00 AM", close: "8:30 PM" },
  { day: "Wednesday", open: "6:00 AM", close: "8:30 PM" },
  { day: "Thursday",  open: "5:30 AM", close: "8:30 PM" },
  { day: "Friday",    open: "5:30 AM", close: "8:30 PM" },
  { day: "Saturday",  open: "5:30 AM", close: "8:30 PM" },
];

// Today Poojas (edit this list)
const TODAY_POOJAS = {
  monday: [
    { name: { en:"Rudrabhishekam", te:"రుద్రాభిషేకం", hi:"रुद्राभिषेक", ta:"ருத்ராபிஷேகம்" }, time: "6:30 AM" },
    { name: { en:"Shiva Abhishekam", te:"శివాభిషేకం", hi:"शिव अभिषेक", ta:"சிவ அபிஷேகம்" }, time: "7:00 AM" },
    { name: { en:"Aarti", te:"హారతి", hi:"आरती", ta:"ஆரத்தி" }, time: "8:30 AM" }
  ],
  default: [
    { name: { en:"Morning Abhishekam", te:"ఉదయం అభిషేకం", hi:"सुबह अभिषेक", ta:"காலை அபிஷேகம்" }, time: "7:00 AM" },
    { name: { en:"Aarti", te:"హారతి", hi:"आरती", ta:"ஆரத்தி" }, time: "8:30 AM" },
    { name: { en:"Evening Aarti", te:"సాయంత్రం హారతి", hi:"शाम आरती", ta:"மாலை ஆரத்தி" }, time: "7:00 PM" }
  ]
};

// ===== i18n UI text (EN/TE/HI/TA) =====
const i18n = {
  en: {
    brandKicker: "Shiva Temple",
    menuText: "Menu",
    navAbout: "About",
    navTimings: "Timings",
    navPoojas: "Poojas",
    navEvents: "Festivals",
    navGallery: "Gallery",
    navLocation: "Location",
    navContact: "Contact",
    pillLine: "Shiva Temple • Village Committee",
    heroTitle: "Om Namah Shivaya",
    heroSubtitle: "A peaceful Shiva temple in our village — daily darshan, poojas, and festivals for all devotees.",
    ctaTimings: "View Timings",
    ctaDonate: "Donate",
    ctaDirections: "Get Directions",
    todayBoxTitle: "Today’s Timings",
    todayNote: "Updated automatically based on day.",
    countdownTitle: "Festival Countdown",
    badgeOpen: "Open",
    badgeFestival: "Festival",
    heroImageText: "Temple Photo Placeholder",
    heroImageSub: "Replace with your temple photo",
    noticeTitle: "Important",
    noticeText: "For special pooja booking, please contact the committee members.",
    statLat: "Latitude",
    statLng: "Longitude",
    statDevotees: "Devotees",
    statBless: "Blessings",
    aboutTitle: "About the Temple",
    aboutDesc: "This temple is dedicated to Lord Shiva (Mahadev). It is maintained by the village committee and devotees.",
    historyTitle: "History",
    historyText: "Our temple stands as a sacred center of peace, devotion, and unity. Generations of devotees have prayed here with faith, and the temple continues to inspire spiritual strength, harmony, and service in the village.",
    aboutTip: "",
    featuresTitle: "Special Features",
    feat1: "Peaceful temple premises",
    feat2: "Daily Abhishekam and Aarti",
    feat3: "Annual festivals and community gatherings",
    timingsTitle: "Darshan Timings",
    timingsDesc: "",
    thDay: "Day",
    thMorning: "Open",
    thEvening: "Close",
    poojaTitle: "Special Poojas",
    poojaDesc: "Weekly and monthly poojas information.",
    pooja1Title: "Monday: Shiva Abhishekam",
    pooja1Text: "Every Monday Rudrabhishekam starts at 6:30 AM, followed by Shiva Abhishekam and Aarti.",
    pooja2Title: "Pradosham",
    pooja2Text: "Special pooja on Pradosham days with devotional bhajans.",
    pooja3Title: "Monthly Rudrabhishekam",
    pooja3Text: "Rudram chanting and abhishekam once a month (date announced).",
    eventsTitle: "Festivals & Events",
    eventsDesc: "Upcoming and annual celebrations.",
    tagMajor: "Major",
    tagSeasonal: "Seasonal",
    tagCommunity: "Community",
    event1Title: "Maha Shivaratri (15-02-2026)",
    event1Text: "Night-long bhajans, abhishekam, and special darshan. Date: 15-02-2026.",
    event2Title: "Karthika Masam",
    event2Text: "Deepam, special poojas, and devotional programs.",
    event3Title: "Temple Anniversary",
    event3Text: "Annadanam and cultural programs.",
    masikTitle: "All Masik Shivaratri Dates in 2026",
    masikPlan: "Plan your year:",
    masikDate1: "February 15 (Sunday)",
    masikDate2: "March 17 (Tuesday)",
    masikDate3: "April 15 (Wednesday)",
    masikDate4: "May 15 (Friday)",
    masikDate5: "June 13 (Saturday)",
    masikDate6: "July 12 (Sunday)",
    masikDate7: "August 11 (Tuesday)",
    masikDate8: "September 9 (Wednesday)",
    masikDate9: "October 8 (Thursday)",
    masikDate10: "November 7 (Saturday)",
    masikDate11: "December 7 (Monday)",
    galleryTitle: "Photo Gallery",
    galleryDesc: "Click a photo to enlarge.",
    videoTitle: "YouTube Videos",
    videoDesc: "Temple videos, poojas and festivals",
    msTitle: "Maha Shivaratri 2026",
    msDesc: "Sunday, February 15, 2026 - Main program begins at 9:30 AM.",
    msPoster1: "Sivaparvathi Kalyanotsavam poster.",
    msPoster2: "Maha Shivaratri program schedule poster.",
    ytChannel: "YouTube Channel",
    ytShorts: "Watch Shorts",
    donateTitle: "Donations",
    donateDesc: "Support temple maintenance and annadanam.",
    donateContact: "Please connect Alaya Committee for donations.",
    upiTitle: "UPI / QR",
    qrText: "UPI QR Placeholder",
    qrSub: "Replace with your QR image",
    bankTitle: "Bank Details",
    accNameLabel: "Account Name:",
    accNoLabel: "Account No:",
    ifscLabel: "IFSC:",
    bankLabel: "Bank:",
    branchLabel: "Branch:",
    donateThanks: "Thank you for supporting the temple 🙏",
    locationTitle: "Location",
    locationDesc: "Find the temple on the map",
    contactTitle: "Contact",
    contactDesc: "For pooja booking and events.",
    contactInfoTitle: "Contact Info",
    phoneLabel: "Phone:",
    emailLabel: "Email:",
    committeeTitle: "Alaya Committee",
    committee1: "Mangalam Gramam",
    committee2: "Mangalam Gramam",
    committee3: "Mangalam Gramam",
    toTop: "↑ Top",
    msPoster1Alt: "Maha Shivaratri 2026 Kalyanotsavam poster",
    msPoster2Alt: "Maha Shivaratri 2026 program poster",
    filterAll: "All",
    filterDaily: "Daily Pooja",
    filterFestivals: "Festivals",
    filterAnnadanam: "Annadanam",
    filterTemple: "Temple",
    daySun: "Sunday",
    dayMon: "Monday",
    dayTue: "Tuesday",
    dayWed: "Wednesday",
    dayThu: "Thursday",
    dayFri: "Friday",
    daySat: "Saturday",
  },

  te: {
    brandKicker: "శివాలయం",
    menuText: "మెనూ",
    navAbout: "గురించి",
    navTimings: "టైమింగ్స్",
    navPoojas: "పూజలు",
    navEvents: "పండుగలు",
    navGallery: "గ్యాలరీ",
    navLocation: "స్థానం",
    navContact: "సంప్రదింపు",
    pillLine: "శివాలయం • గ్రామ కమిటీ",
    heroTitle: "ఓం నమః శివాయ",
    heroSubtitle: "మన గ్రామంలోని శివాలయం — రోజువారీ దర్శనం, పూజలు మరియు పండుగలు.",
    ctaTimings: "టైమింగ్స్ చూడండి",
    ctaDonate: "దానం చేయండి",
    ctaDirections: "దారి చూపండి",
    todayBoxTitle: "ఈ రోజు టైమింగ్స్",
    todayNote: "రోజు ఆధారంగా ఆటోమేటిక్‌గా మారుతుంది.",
    countdownTitle: "పండుగ కౌంట్‌డౌన్",
    badgeOpen: "ఓపెన్",
    badgeFestival: "పండుగ",
    heroImageText: "ఆలయ ఫోటో ప్లేస్‌హోల్డర్",
    heroImageSub: "మీ ఆలయ ఫోటో పెట్టండి",
    noticeTitle: "ముఖ్యం",
    noticeText: "ప్రత్యేక పూజ బుకింగ్ కోసం కమిటీ సభ్యులను సంప్రదించండి.",
    statLat: "అక్షాంశం",
    statLng: "రేఖాంశం",
    statDevotees: "భక్తులు",
    statBless: "ఆశీర్వాదాలు",
    aboutTitle: "ఆలయం గురించి",
    aboutDesc: "ఈ ఆలయం మహాదేవుడికి అంకితం. గ్రామ కమిటీ మరియు భక్తుల సహకారంతో నిర్వహించబడుతుంది.",
    historyTitle: "చరిత్ర",
    historyText: "మా ఆలయం భక్తి, శాంతి, ఐక్యతకు పవిత్ర కేంద్రం. తరతరాలుగా భక్తులు విశ్వాసంతో ఇక్కడ సేవలు చేస్తున్నారు; ఈ ఆలయం గ్రామంలో ఆధ్యాత్మిక శక్తి, సౌహార్దం, సేవాభావాన్ని పెంపొందిస్తోంది.",
    aboutTip: "",
    featuresTitle: "ప్రత్యేకతలు",
    feat1: "శాంతమైన ఆలయ ప్రాంగణం",
    feat2: "రోజువారీ అభిషేకం మరియు హారతి",
    feat3: "వార్షిక పండుగలు మరియు గ్రామ కార్యక్రమాలు",
    timingsTitle: "దర్శన సమయాలు",
    timingsDesc: "",
    thDay: "రోజు",
    thMorning: "తెరచే సమయం",
    thEvening: "మూసే సమయం",
    poojaTitle: "ప్రత్యేక పూజలు",
    poojaDesc: "వారపు/నెలవారీ పూజల వివరాలు.",
    pooja1Title: "సోమవారం: శివాభిషేకం",
    pooja1Text: "ప్రతి సోమవారం ఉదయం 6:30కి రుద్రాభిషేకం ప్రారంభమవుతుంది; తరువాత శివాభిషేకం మరియు హారతి జరుగుతాయి.",
    pooja2Title: "ప్రదోషం",
    pooja2Text: "ప్రదోషం రోజున ప్రత్యేక పూజ మరియు భజనలు.",
    pooja3Title: "నెలవారీ రుద్రాభిషేకం",
    pooja3Text: "నెలకు ఒకసారి రుద్రం జపం మరియు అభిషేకం (తేదీ ప్రకటిస్తారు).",
    eventsTitle: "పండుగలు & కార్యక్రమాలు",
    eventsDesc: "రాబోయే/వార్షిక వేడుకలు.",
    tagMajor: "ప్రధానం",
    tagSeasonal: "ఋతువారీ",
    tagCommunity: "గ్రామం",
    event1Title: "మహా శివరాత్రి (15-02-2026)",
    event1Text: "రాత్రి మొత్తం భజనలు, అభిషేకం, ప్రత్యేక దర్శనం.",
    event2Title: "కార్తీక మాసం",
    event2Text: "దీపం, ప్రత్యేక పూజలు, భక్తి కార్యక్రమాలు.",
    event3Title: "ఆలయ వార్షికోత్సవం",
    event3Text: "అన్నదానం మరియు సాంస్కృతిక కార్యక్రమాలు.",
    masikTitle: "2026 లో అన్ని మాస శివరాత్రి తేదీలు",
    masikPlan: "మీ ఏడాది ప్రణాళిక:",
    masikDate1: "ఫిబ్రవరి 15 (ఆదివారం)",
    masikDate2: "మార్చి 17 (మంగళవారం)",
    masikDate3: "ఏప్రిల్ 15 (బుధవారం)",
    masikDate4: "మే 15 (శుక్రవారం)",
    masikDate5: "జూన్ 13 (శనివారం)",
    masikDate6: "జూలై 12 (ఆదివారం)",
    masikDate7: "ఆగస్టు 11 (మంగళవారం)",
    masikDate8: "సెప్టెంబర్ 9 (బుధవారం)",
    masikDate9: "అక్టోబర్ 8 (గురువారం)",
    masikDate10: "నవంబర్ 7 (శనివారం)",
    masikDate11: "డిసెంబర్ 7 (సోమవారం)",
    galleryTitle: "ఫోటో గ్యాలరీ",
    galleryDesc: "ఫోటోపై క్లిక్ చేసి పెద్దగా చూడండి.",
    videoTitle: "యూట్యూబ్ వీడియోలు",
    videoDesc: "ఆలయ వీడియోలు, పూజలు, పండుగలు",
    donateTitle: "దానాలు",
    donateDesc: "ఆలయ నిర్వహణ మరియు అన్నదానానికి సహాయం చేయండి.",
    donateContact: "దానాల కోసం ఆలయ కమిటీని సంప్రదించండి.",
    upiTitle: "UPI / QR",
    qrText: "UPI QR ప్లేస్‌హోల్డర్",
    qrSub: "మీ QR చిత్రం పెట్టండి",
    bankTitle: "బ్యాంక్ వివరాలు",
    accNameLabel: "ఖాతా పేరు:",
    accNoLabel: "ఖాతా నెం:",
    ifscLabel: "IFSC:",
    bankLabel: "బ్యాంక్:",
    branchLabel: "శాఖ:",
    donateThanks: "ఆలయానికి సహాయం చేసినందుకు ధన్యవాదాలు 🙏",
    locationTitle: "స్థానం",
    locationDesc: "మ్యాప్‌లో ఆలయాన్ని చూడండి",
    contactTitle: "సంప్రదింపు",
    contactDesc: "పూజ బుకింగ్ మరియు కార్యక్రమాల కోసం.",
    contactInfoTitle: "సంప్రదింపు వివరాలు",
    phoneLabel: "ఫోన్:",
    emailLabel: "ఇమెయిల్:",
    committeeTitle: "ఆలయ కమిటీ",
    committee1: "మంగళం గ్రామం",
    committee2: "మంగళం గ్రామం",
    committee3: "మంగళం గ్రామం",
    toTop: "↑ పైకి",
    msTitle: "మహా శివరాత్రి 2026",
    msDesc: "ఆదివారం, 15 ఫిబ్రవరి 2026 - ప్రధాన కార్యక్రమం ఉదయం 9:30 కి ప్రారంభం.",
    msPoster1: "శివపార్వతి కల్యాణోత్సవం పోస్టర్.",
    msPoster2: "మహా శివరాత్రి కార్యక్రమ షెడ్యూల్ పోస్టర్.",
    msPoster1Alt: "మహా శివరాత్రి 2026 కల్యాణోత్సవం పోస్టర్",
    msPoster2Alt: "మహా శివరాత్రి 2026 కార్యక్రమ పోస్టర్",
    filterAll: "అన్నీ",
    filterDaily: "రోజువారీ పూజ",
    filterFestivals: "పండుగలు",
    filterAnnadanam: "అన్నదానం",
    filterTemple: "ఆలయం",
    daySun: "ఆదివారం",
    dayMon: "సోమవారం",
    dayTue: "మంగళవారం",
    dayWed: "బుధవారం",
    dayThu: "గురువారం",
    dayFri: "శుక్రవారం",
    daySat: "శనివారం",
  },

  hi: {
    brandKicker: "शिव मंदिर",
    menuText: "मेन्यू",
    navAbout: "परिचय",
    navTimings: "समय",
    navPoojas: "पूजाएँ",
    navEvents: "त्योहार",
    navGallery: "गैलरी",
    navLocation: "स्थान",
    navContact: "संपर्क",
    pillLine: "शिव मंदिर • ग्राम समिति",
    heroTitle: "ॐ नमः शिवाय",
    heroSubtitle: "हमारे गाँव का शांत शिव मंदिर — दैनिक दर्शन, पूजा और त्योहार।",
    ctaTimings: "समय देखें",
    ctaDonate: "दान करें",
    ctaDirections: "दिशा निर्देश",
    todayBoxTitle: "आज का समय",
    todayNote: "दिन के अनुसार स्वतः अपडेट होता है।",
    countdownTitle: "त्योहार काउंटडाउन",
    badgeOpen: "खुला",
    badgeFestival: "त्योहार",
    heroImageText: "मंदिर फोटो प्लेसहोल्डर",
    heroImageSub: "अपने मंदिर की फोटो लगाएँ",
    noticeTitle: "महत्वपूर्ण",
    noticeText: "विशेष पूजा बुकिंग के लिए समिति सदस्यों से संपर्क करें।",
    statLat: "अक्षांश",
    statLng: "देशांतर",
    statDevotees: "भक्त",
    statBless: "आशीर्वाद",
    aboutTitle: "मंदिर के बारे में",
    aboutDesc: "यह मंदिर भगवान शिव को समर्पित है। इसे ग्राम समिति और भक्तों द्वारा संचालित किया जाता है।",
    historyTitle: "इतिहास",
    historyText: "हमारा मंदिर भक्ति, शांति और एकता का पवित्र केंद्र है। पीढ़ियों से भक्त यहां श्रद्धा के साथ पूजा करते आए हैं; यह मंदिर गांव में आध्यात्मिक शक्ति, सद्भाव और सेवा की भावना को मजबूत करता है।",
    aboutTip: "",
    featuresTitle: "विशेषताएँ",
    feat1: "शांत मंदिर परिसर",
    feat2: "दैनिक अभिषेक और आरती",
    feat3: "वार्षिक त्योहार और सामुदायिक कार्यक्रम",
    timingsTitle: "दर्शन समय",
    timingsDesc: "",
    thDay: "दिन",
    thMorning: "खुलने का समय",
    thEvening: "बंद होने का समय",
    poojaTitle: "विशेष पूजाएँ",
    poojaDesc: "साप्ताहिक और मासिक पूजा जानकारी।",
    pooja1Title: "सोमवार: शिव अभिषेक",
    pooja1Text: "हर सोमवार सुबह 6:30 बजे रुद्राभिषेक शुरू होता है, उसके बाद शिव अभिषेक और आरती होती है।",
    pooja2Title: "प्रदोष",
    pooja2Text: "प्रदोष के दिन विशेष पूजा और भजन।",
    pooja3Title: "मासिक रुद्राभिषेक",
    pooja3Text: "मास में एक बार रुद्रम पाठ और अभिषेक (तारीख घोषित होगी)।",
    eventsTitle: "त्योहार और कार्यक्रम",
    eventsDesc: "आगामी और वार्षिक उत्सव।",
    tagMajor: "मुख्य",
    tagSeasonal: "मौसमी",
    tagCommunity: "समुदाय",
    event1Title: "महाशिवरात्रि (15-02-2026)",
    event1Text: "रात्रि भर भजन, अभिषेक और विशेष दर्शन।",
    event2Title: "कार्तिक मास",
    event2Text: "दीपम, विशेष पूजा और भक्ति कार्यक्रम।",
    event3Title: "मंदिर वार्षिकोत्सव",
    event3Text: "अन्नदान और सांस्कृतिक कार्यक्रम।",
    masikTitle: "2026 की सभी मासिक शिवरात्रि तिथियां",
    masikPlan: "अपना वर्ष योजना बनाएं:",
    masikDate1: "15 फरवरी (रविवार)",
    masikDate2: "17 मार्च (मंगलवार)",
    masikDate3: "15 अप्रैल (बुधवार)",
    masikDate4: "15 मई (शुक्रवार)",
    masikDate5: "13 जून (शनिवार)",
    masikDate6: "12 जुलाई (रविवार)",
    masikDate7: "11 अगस्त (मंगलवार)",
    masikDate8: "9 सितंबर (बुधवार)",
    masikDate9: "8 अक्टूबर (गुरुवार)",
    masikDate10: "7 नवंबर (शनिवार)",
    masikDate11: "7 दिसंबर (सोमवार)",
    galleryTitle: "फोटो गैलरी",
    galleryDesc: "बड़ा देखने के लिए फोटो पर क्लिक करें।",
    videoTitle: "यूट्यूब वीडियो",
    videoDesc: "मंदिर वीडियो, पूजा और त्योहार",
    donateTitle: "दान",
    donateDesc: "मंदिर रखरखाव और अन्नदान में सहयोग करें।",
    donateContact: "दान के लिए आलय समिति से संपर्क करें।",
    upiTitle: "UPI / QR",
    qrText: "UPI QR प्लेसहोल्डर",
    qrSub: "अपना QR इमेज लगाएँ",
    bankTitle: "बैंक विवरण",
    accNameLabel: "खाता नाम:",
    accNoLabel: "खाता नंबर:",
    ifscLabel: "IFSC:",
    bankLabel: "बैंक:",
    branchLabel: "शाखा:",
    donateThanks: "मंदिर को सहयोग देने के लिए धन्यवाद 🙏",
    locationTitle: "स्थान",
    locationDesc: "मानचित्र पर मंदिर देखें",
    contactTitle: "संपर्क",
    contactDesc: "पूजा बुकिंग और कार्यक्रमों के लिए।",
    contactInfoTitle: "संपर्क जानकारी",
    phoneLabel: "फोन:",
    emailLabel: "ईमेल:",
    committeeTitle: "आलय समिति",
    committee1: "मंगलम ग्रामम",
    committee2: "मंगलम ग्रामम",
    committee3: "मंगलम ग्रामम",
    toTop: "↑ ऊपर",
    msTitle: "महाशिवरात्रि 2026",
    msDesc: "रविवार, 15 फ़रवरी 2026 - मुख्य कार्यक्रम सुबह 9:30 बजे शुरू होगा।",
    msPoster1: "शिव पार्वती कल्याणोत्सव पोस्टर।",
    msPoster2: "महाशिवरात्रि कार्यक्रम समय-सारणी पोस्टर।",
    msPoster1Alt: "महाशिवरात्रि 2026 कल्याणोत्सव पोस्टर",
    msPoster2Alt: "महाशिवरात्रि 2026 कार्यक्रम पोस्टर",
    filterAll: "सभी",
    filterDaily: "दैनिक पूजा",
    filterFestivals: "त्योहार",
    filterAnnadanam: "अन्नदान",
    filterTemple: "मंदिर",
    daySun: "रविवार",
    dayMon: "सोमवार",
    dayTue: "मंगलवार",
    dayWed: "बुधवार",
    dayThu: "गुरुवार",
    dayFri: "शुक्रवार",
    daySat: "शनिवार",
  },

  ta: {
    brandKicker: "சிவன் கோவில்",
    menuText: "மெனு",
    navAbout: "பற்றி",
    navTimings: "நேரம்",
    navPoojas: "பூஜைகள்",
    navEvents: "திருவிழாக்கள்",
    navGallery: "காட்சியகம்",
    navLocation: "இடம்",
    navContact: "தொடர்பு",
    pillLine: "சிவன் கோவில் • கிராமக் குழு",
    heroTitle: "ஓம் நமஃ சிவாய",
    heroSubtitle: "எங்கள் கிராமத்தின் அமைதியான சிவன் கோவில் — தினசரி தரிசனம், பூஜைகள் மற்றும் திருவிழாக்கள்.",
    ctaTimings: "நேரம் பார்க்க",
    ctaDonate: "தானம் செய்ய",
    ctaDirections: "திசைகள்",
    todayBoxTitle: "இன்றைய நேரம்",
    todayNote: "நாளின் அடிப்படையில் தானாக புதுப்பிக்கும்.",
    countdownTitle: "திருவிழா கவுண்ட்டவுன்",
    badgeOpen: "திறந்துள்ளது",
    badgeFestival: "திருவிழா",
    heroImageText: "கோவில் புகைப்பட இடமாற்று",
    heroImageSub: "உங்கள் கோவில் புகைப்படத்தை சேர்க்கவும்",
    noticeTitle: "முக்கியம்",
    noticeText: "சிறப்பு பூஜை முன்பதிவிற்கு குழு உறுப்பினர்களை தொடர்புகொள்ளவும்.",
    statLat: "அட்சரேகை",
    statLng: "தீர்க்கரேகை",
    statDevotees: "பக்தர்கள்",
    statBless: "ஆசி",
    aboutTitle: "கோவில் பற்றி",
    aboutDesc: "இந்த கோவில் சிவபெருமானுக்கு அர்ப்பணிக்கப்பட்டது. கிராமக் குழு மற்றும் பக்தர்கள் பராமரிக்கின்றனர்.",
    historyTitle: "வரலாறு",
    historyText: "எங்கள் கோவில் பக்தி, அமைதி, ஒற்றுமைக்கு புனித மையமாக உள்ளது. பல தலைமுறைகளாக பக்தர்கள் நம்பிக்கையுடன் இங்கு வழிபட்டு வருகின்றனர்; இந்த கோவில் கிராமத்தில் ஆன்மிக வலிமை, நல்லிணக்கம் மற்றும் சேவை மனப்பாங்கை வளர்க்கிறது.",
    aboutTip: "",
    featuresTitle: "சிறப்பம்சங்கள்",
    feat1: "அமைதியான கோவில் வளாகம்",
    feat2: "தினசரி அபிஷேகம் மற்றும் ஆரத்தி",
    feat3: "ஆண்டு விழாக்கள் மற்றும் சமூக நிகழ்வுகள்",
    timingsTitle: "தரிசன நேரங்கள்",
    timingsDesc: "",
    thDay: "நாள்",
    thMorning: "திறக்கும் நேரம்",
    thEvening: "மூடும் நேரம்",
    poojaTitle: "சிறப்பு பூஜைகள்",
    poojaDesc: "வாராந்திர மற்றும் மாதாந்திர பூஜை தகவல்கள்.",
    pooja1Title: "திங்கள்: சிவ அபிஷேகம்",
    pooja1Text: "ஒவ்வொரு திங்கட்கிழமையும் காலை 6:30 மணிக்கு ருத்ராபிஷேகம் தொடங்கும்; அதன் பின் சிவ அபிஷேகம் மற்றும் ஆரத்தி நடைபெறும்.",
    pooja2Title: "பிரதோஷம்",
    pooja2Text: "பிரதோஷ நாட்களில் சிறப்பு பூஜை மற்றும் பக்திப் பாடல்கள்.",
    pooja3Title: "மாத ருத்ராபிஷேகம்",
    pooja3Text: "மாதத்தில் ஒருமுறை ருத்ரம் பாராயணம் மற்றும் அபிஷேகம் (தேதி அறிவிப்பு).",
    eventsTitle: "திருவிழாக்கள் & நிகழ்வுகள்",
    eventsDesc: "வரவிருக்கும் மற்றும் ஆண்டு விழாக்கள்.",
    tagMajor: "முக்கியம்",
    tagSeasonal: "பருவம்",
    tagCommunity: "சமூகம்",
    event1Title: "மகா சிவராத்திரி (15-02-2026)",
    event1Text: "இரவு முழுவதும் பக்திப் பாடல்கள், அபிஷேகம், சிறப்பு தரிசனம்.",
    event2Title: "கார்த்திகை மாதம்",
    event2Text: "தீபம், சிறப்பு பூஜைகள் மற்றும் நிகழ்ச்சிகள்.",
    event3Title: "கோவில் ஆண்டு விழா",
    event3Text: "அன்னதானம் மற்றும் கலாச்சார நிகழ்ச்சிகள்.",
    masikTitle: "2026 ஆம் ஆண்டின் அனைத்து மாத சிவராத்திரி தேதிகள்",
    masikPlan: "உங்கள் ஆண்டு திட்டம்:",
    masikDate1: "பிப்ரவரி 15 (ஞாயிறு)",
    masikDate2: "மார்ச் 17 (செவ்வாய்)",
    masikDate3: "ஏப்ரல் 15 (புதன்)",
    masikDate4: "மே 15 (வெள்ளி)",
    masikDate5: "ஜூன் 13 (சனி)",
    masikDate6: "ஜூலை 12 (ஞாயிறு)",
    masikDate7: "ஆகஸ்ட் 11 (செவ்வாய்)",
    masikDate8: "செப்டம்பர் 9 (புதன்)",
    masikDate9: "அக்டோபர் 8 (வியாழன்)",
    masikDate10: "நவம்பர் 7 (சனி)",
    masikDate11: "டிசம்பர் 7 (திங்கள்)",
    galleryTitle: "புகைப்பட காட்சியகம்",
    galleryDesc: "பெரிதாக பார்க்க படத்தை கிளிக் செய்யவும்.",
    videoTitle: "யூடியூப் வீடியோக்கள்",
    videoDesc: "கோவில் வீடியோக்கள், பூஜைகள், திருவிழாக்கள்",
    donateTitle: "தானங்கள்",
    donateDesc: "கோவில் பராமரிப்பு மற்றும் அன்னதானத்திற்கு உதவவும்.",
    donateContact: "தானங்களுக்காக ஆலயக் குழுவை தொடர்புகொள்ளவும்.",
    upiTitle: "UPI / QR",
    qrText: "UPI QR இடமாற்று",
    qrSub: "உங்கள் QR படத்தை சேர்க்கவும்",
    bankTitle: "வங்கி விவரங்கள்",
    accNameLabel: "கணக்கு பெயர்:",
    accNoLabel: "கணக்கு எண்:",
    ifscLabel: "IFSC:",
    bankLabel: "வங்கி:",
    branchLabel: "கிளை:",
    donateThanks: "கோவிலுக்கு உதவியதற்கு நன்றி 🙏",
    locationTitle: "இடம்",
    locationDesc: "வரைபடத்தில் கோவிலை காண்க",
    contactTitle: "தொடர்பு",
    contactDesc: "பூஜை முன்பதிவு மற்றும் நிகழ்வுகளுக்காக.",
    contactInfoTitle: "தொடர்பு தகவல்",
    phoneLabel: "தொலைபேசி:",
    emailLabel: "மின்னஞ்சல்:",
    committeeTitle: "ஆலயக் குழு",
    committee1: "மங்களம் கிராமம்",
    committee2: "மங்களம் கிராமம்",
    committee3: "மங்களம் கிராமம்",
    msTitle: "மகா சிவராத்திரி 2026",
    msDesc: "ஞாயிறு, 15 பிப்ரவரி 2026 - முக்கிய நிகழ்ச்சி காலை 9:30 மணிக்கு தொடங்கும்.",
    msPoster1: "சிவபார்வதி கல்யாணோத்சவம் போஸ்டர்.",
    msPoster2: "மகா சிவராத்திரி நிகழ்ச்சி அட்டவணை போஸ்டர்.",
    msPoster1Alt: "மகா சிவராத்திரி 2026 கல்யாணோத்சவம் போஸ்டர்",
    msPoster2Alt: "மகா சிவராத்திரி 2026 நிகழ்ச்சி போஸ்டர்",
    filterAll: "அனைத்து",
    filterDaily: "தினசரி பூஜை",
    filterFestivals: "திருவிழாக்கள்",
    filterAnnadanam: "அன்னதானம்",
    filterTemple: "கோவில்",
    daySun: "ஞாயிறு",
    dayMon: "திங்கள்",
    dayTue: "செவ்வாய்",
    dayWed: "புதன்",
    dayThu: "வியாழன்",
    dayFri: "வெள்ளி",
    daySat: "சனி",
    toTop: "↑ மேலே"
  }
};

let lang = localStorage.getItem("lang") || "en";
let countdownTimer = null;

function $(id){ return document.getElementById(id); }

function applyLanguage(){
  const dict = i18n[lang] || i18n.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = dict[key] || i18n.en[key] || el.textContent;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    const value = dict[key] || i18n.en[key];
    if (value) el.setAttribute("alt", value);
  });

  const tName = TEMPLE.name[lang] || TEMPLE.name.en;
  const tPlace = TEMPLE.place[lang] || TEMPLE.place.en;

  $("templeName").textContent = tName;
  $("templePlace").textContent = tPlace;
  $("footerTempleName").textContent = tName;

  const nextLabel =
    lang === "te" ? "తదుపరి పండుగ" :
    lang === "hi" ? "अगला त्योहार" :
    lang === "ta" ? "அடுத்த திருவிழா" :
    "Next festival";

  const festDate = formatFestivalDate(TEMPLE.nextFestivalDate);
  $("festivalNameLine").textContent = `${nextLabel}: ${TEMPLE.nextFestivalName}${festDate ? " - " + festDate : ""}`;

  const sel = $("langSelect");
  if (sel) sel.value = lang;

  const url = `https://www.google.com/maps/dir/?api=1&destination=${TEMPLE_COORDS.lat},${TEMPLE_COORDS.lng}`;
  const dirBtn = $("directionsBtn");
  if (dirBtn) dirBtn.href = url;
}

const DAY_KEYS = ["daySun","dayMon","dayTue","dayWed","dayThu","dayFri","daySat"];

function getDayLabel(index){
  const dict = i18n[lang] || i18n.en;
  const key = DAY_KEYS[index];
  return dict[key] || i18n.en[key] || (TIMINGS[index] ? TIMINGS[index].day : "");
}

function getTodayIndex(){
  return new Date().getDay();
}

function getTodayRow(){
  const idx = getTodayIndex();
  return TIMINGS[idx];
}

function renderTimingsTable(){
  const body = $("timingsTableBody");
  body.innerHTML = "";
  TIMINGS.forEach((r, idx) => {
    const dayLabel = getDayLabel(idx);
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${dayLabel}</td><td>${r.open}</td><td>${r.close}</td>`;
    body.appendChild(tr);
  });
}

function setTodayTiming(){
  const row = getTodayRow();
  if (!row) return;
  $("todayTiming").textContent = `${row.open} - ${row.close}`;
}

function startCountdown(){
  if (countdownTimer) clearInterval(countdownTimer);
  const target = new Date(TEMPLE.nextFestivalDate).getTime();

  function tick(){
    const now = Date.now();
    let diff = target - now;

    if (diff <= 0) {
      $("countdown").textContent =
        (lang === "te") ? "ఈరోజు!" :
        (lang === "hi") ? "आज!" :
        (lang === "ta") ? "இன்று!" :
        "Today!";
      return;
    }

    const d = Math.floor(diff / (1000*60*60*24));
    diff -= d * (1000*60*60*24);
    const h = Math.floor(diff / (1000*60*60));
    diff -= h * (1000*60*60);
    const m = Math.floor(diff / (1000*60));
    diff -= m * (1000*60);
    const s = Math.floor(diff / 1000);

    $("countdown").textContent = `${d}d ${h}h ${m}m ${s}s`;
  }

  tick();
  countdownTimer = setInterval(tick, 1000);
}

function setupMobileMenu(){
  const btn = $("menuBtn");
  const mobile = $("mobileNav");
  if (!btn || !mobile) return;

  const openMenu = () => { btn.setAttribute("aria-expanded", "true"); mobile.hidden = false; };
  const closeMenu = () => { btn.setAttribute("aria-expanded", "false"); mobile.hidden = true; };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  mobile.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) closeMenu();
  });

  document.addEventListener("click", (e) => {
    const clickedInside = mobile.contains(e.target) || btn.contains(e.target);
    if (!clickedInside) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 920) closeMenu();
  });
}

function setupGalleryModal(){
  const modal = $("modal");
  const modalImg = $("modalImg");
  const closeBtn = $("modalClose");
  const gallery = $("galleryGrid");
  if (!modal || !modalImg || !closeBtn || !gallery) return;

  const openModal = (src) => {
    modalImg.src = src;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    document.body.style.overflow = "";
  };

  gallery.addEventListener("click", (e) => {
    const item = e.target.closest(".g-item");
    if (!item) return;
    openModal(item.dataset.src);
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// 3D tilt for gallery images
function setupGallery3DEffect(){
  const items = document.querySelectorAll(".g-item");

  items.forEach(item => {
    const img = item.querySelector("img");
    if (!img) return;

    item.addEventListener("mousemove", (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const midX = rect.width / 2;
      const midY = rect.height / 2;

      const rotateY = ((x - midX) / midX) * 8;
      const rotateX = -((y - midY) / midY) * 8;

      img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(16px)`;
    });

    item.addEventListener("mouseleave", () => {
      img.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
    });
  });
}

// Filters for gallery/videos
function setupTagFilters(filterContainerId, itemsSelector){
  const container = document.getElementById(filterContainerId);
  if (!container) return;

  const buttons = Array.from(container.querySelectorAll(".filter-btn"));
  const items = Array.from(document.querySelectorAll(itemsSelector));

  const setActive = (btn) => {
    buttons.forEach(b => b.classList.toggle("active", b === btn));
  };

  const apply = (tag) => {
    items.forEach(item => {
      const tags = (item.dataset.tags || "").split(",").map(x => x.trim()).filter(Boolean);
      const show = (tag === "all") || tags.includes(tag);
      item.style.display = show ? "" : "none";
    });
  };

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const tag = btn.dataset.filter;
    setActive(btn);
    apply(tag);
  });

  apply("all");
}

function setupTempleMap(){
  const map = L.map("templeMap", {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([TEMPLE_COORDS.lat, TEMPLE_COORDS.lng], 17);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  const templeIcon = L.divIcon({
    html: `
      <div style="
        font-size:40px;
        transform: translate(-50%, -100%);
        filter: drop-shadow(0 14px 22px rgba(0,0,0,0.55));
      ">🛕</div>
    `,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  L.marker([TEMPLE_COORDS.lat, TEMPLE_COORDS.lng], { icon: templeIcon })
    .addTo(map)
    .bindPopup(`
      <div style="text-align:center; line-height:1.4">
        <b>🛕 Sri Jambukeswara Swamy Sivalayam</b><br/>
        <span style="font-size:13px;">శ్రీ జంబుకేశ్వర స్వామి శివాలయం</span><br/><br/>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=${TEMPLE_COORDS.lat},${TEMPLE_COORDS.lng}"
          target="_blank"
          style="
            display:inline-block;
            padding:6px 10px;
            border-radius:10px;
            background: linear-gradient(135deg, #f6c453, #ff8a2a);
            color:#1b1306;
            text-decoration:none;
            font-size:12px;
            font-weight:900;
          "
        >📍 Get Directions</a>
      </div>
    `)
    .openPopup();
}

/* Click anywhere: 3 icons LEFT/RIGHT/TOP + particles */
function setupDivine3DClicks(){
  const symbols = [
    { key: "om",      text: "ॐ" },
    { key: "trishul", text: "🔱" },
    { key: "damaru",  text: "🪘" }
  ];

  const PARTICLES = 18;
  const MAX_BURSTS = 12;
  let activeBursts = 0;

  document.addEventListener("pointerdown", (e) => {
    // ignore right click
    if (e.button && e.button !== 0) return;
    if (activeBursts >= MAX_BURSTS) return;
    activeBursts++;

    // random picks (can repeat)
    const pick1 = symbols[Math.floor(Math.random() * symbols.length)];
    const pick2 = symbols[Math.floor(Math.random() * symbols.length)];
    const pick3 = symbols[Math.floor(Math.random() * symbols.length)];

    const wrap = document.createElement("div");
    wrap.className = "click-burst";
    wrap.style.left = `${e.clientX}px`;
    wrap.style.top = `${e.clientY}px`;

    // positions: LEFT, RIGHT, TOP
    const icons = [
      { pick: pick1, rz: "45deg",  x: -55, y: 6,   size: 40 },  // LEFT
      { pick: pick2, rz: "-45deg", x:  55, y: 6,   size: 40 },  // RIGHT
      { pick: pick3, rz: "90deg",  x:   0, y: -60, size: 44 }   // TOP
    ];

    icons.forEach(cfg => {
      const icon = document.createElement("div");
      icon.className = `click-icon ${cfg.pick.key}`;
      icon.textContent = cfg.pick.text;

      // IMPORTANT: these control left/right/top + rotation
      icon.style.setProperty("--rz", cfg.rz);
      icon.style.setProperty("--x", `${cfg.x}px`);
      icon.style.setProperty("--y", `${cfg.y}px`);
      icon.style.fontSize = `${cfg.size}px`;

      wrap.appendChild(icon);
    });

    // Particles
    for (let i = 0; i < PARTICLES; i++){
      const p = document.createElement("span");
      p.className = "particle";

      const angle = Math.random() * Math.PI * 2;
      const dist = 30 + Math.random() * 85;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - (22 + Math.random() * 44);

      p.style.setProperty("--dx", `${dx.toFixed(1)}px`);
      p.style.setProperty("--dy", `${dy.toFixed(1)}px`);
      p.style.animationDelay = `${(Math.random() * 120).toFixed(0)}ms`;

      wrap.appendChild(p);
    }

    document.body.appendChild(wrap);

    setTimeout(() => {
      wrap.remove();
      activeBursts = Math.max(0, activeBursts - 1);
    }, 1100);
  });
}

/* Reveal animation */
function setupReveal(){
  const els = Array.from(document.querySelectorAll(".reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) ent.target.classList.add("in");
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

function setupLanguageSelect(){
  const sel = $("langSelect");
  if (!sel) return;
  sel.value = lang;

  sel.addEventListener("change", () => {
    lang = sel.value;
    localStorage.setItem("lang", lang);

    applyLanguage();
    renderTimingsTable();
    setTickerText();
    setTodayTiming();
    startCountdown();
  });
}

function formatFestivalDate(dateStr){
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" });
}

function setTickerText(){
  const row = getTodayRow();
  const timingText = row ? `${row.open} - ${row.close}` : "";

  const list = getTodayIndex() === 1 ? (TODAY_POOJAS.monday || TODAY_POOJAS.default) : TODAY_POOJAS.default;
  const poojaText = list
    .map(p => `${(p.name[lang] || p.name.en)} - ${p.time}`)
    .join(", ");

  const festDate = formatFestivalDate(TEMPLE.nextFestivalDate);

  const labels = {
    en: { t:"Today Timings", p:"Today Poojas", f:"Upcoming Festival" },
    te: { t:"ఈ రోజు టైమింగ్స్", p:"ఈ రోజు పూజలు", f:"రాబోయే పండుగ" },
    hi: { t:"आज का समय", p:"आज की पूजाएँ", f:"आगामी त्योहार" },
    ta: { t:"இன்றைய நேரம்", p:"இன்றைய பூஜைகள்", f:"வரவிருக்கும் திருவிழா" }
  };

  const L = labels[lang] || labels.en;

  const t1 = `${L.t}: ${timingText}`;
  const p1 = `${L.p}: ${poojaText}`;
  const f1 = `${L.f}: ${TEMPLE.nextFestivalName}${festDate ? " - " + festDate : ""}`;

  ["tickerTiming","tickerTiming2"].forEach(id => { const el = $(id); if (el) el.textContent = t1; });
  ["tickerPoojas","tickerPoojas2"].forEach(id => { const el = $(id); if (el) el.textContent = p1; });
  ["tickerFestival","tickerFestival2"].forEach(id => { const el = $(id); if (el) el.textContent = f1; });
}

function init(){
  $("year").textContent = String(new Date().getFullYear());

  setupDivine3DClicks();
  setupMobileMenu();
  setupGalleryModal();
  setupGallery3DEffect();
  setupTagFilters("galleryFilters", "#galleryGrid .g-item");
  setupTagFilters("videoFilters", "#videoGrid .v-item");
  setupTempleMap();
  setupReveal();
  setupLanguageSelect();

  renderTimingsTable();
  setTodayTiming();

  applyLanguage();
  setTickerText();
  startCountdown();
}

document.addEventListener("DOMContentLoaded", init);
