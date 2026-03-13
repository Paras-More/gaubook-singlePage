// ===== ALL TEXT CONTENT FOR THE WEBSITE =====
// Bilingual: "en" for English, "hi" for Hindi
// To change ANY text on the website, edit it here only.

const content = {
  // ── Brand ──
  brand: {
    en: "Gaubook",
    hi: "गौबुक",
  },

  // ── Navigation ──
  nav: {
    links: [
      { id: "hero", en: "Home", hi: "होम" },
      { id: "community", en: "6G Community", hi: "6G समुदाय" },
      { id: "about", en: "About Us", hi: "हमारे बारे में" },
      { id: "contact", en: "Contact", hi: "संपर्क" },
      { id: "downloads", en: "Downloads", hi: "डाउनलोड" },
      { id: "digital", en: "Digital Initiative", hi: "डिजिटल पहल" },
    ],
    downloadApp: { en: "Download App", hi: "ऐप डाउनलोड करें" },
    languageToggle: { en: "हिंदी", hi: "English" },
  },

  // ── Hero Section ──
  hero: {
    heading: {
      en: "One Platform to Connect, Support & Empower Gaushalas",
      hi: "गौशालाओं को जोड़ने, सहायता और सशक्त बनाने का एक मंच",
    },
    subtext: {
      en: "Be part of India's largest Gau Community",
      hi: "भारत के सबसे बड़े गौ समुदाय का हिस्सा बनें",
    },
    downloadAndroid: {
      en: "Download for Android",
      hi: "एंड्रॉइड के लिए डाउनलोड करें",
    },
    downloadIos: { en: "Download for iOS", hi: "iOS के लिए डाउनलोड करें" },
    appLinks: {
      android: "#",
      ios: "#",
    },
  },

  // ── 6G Community Section ──
  community: {
    heading: {
      en: "What is 6G Community?",
      hi: "6G समुदाय क्या है?",
    },
    // Left side members
    leftMembers: [
      {
        en: {
          title: "Gau Shala",
          desc: "Shelters protecting and nurturing cows",
        },
        hi: {
          title: "गौ शाला",
          desc: "गायों की रक्षा और पालन-पोषण करने वाली शरणस्थली",
        },
        icon: "🏠",
      },
      {
        en: {
          title: "Gau Influencer",
          desc: "Spreading awareness through digital platforms",
        },
        hi: {
          title: "गौ इन्फ्लुएंसर",
          desc: "डिजिटल माध्यम से जागरूकता फैलाने वाले",
        },
        icon: "📢",
      },
      {
        en: {
          title: "Gau NGO",
          desc: "Organizations supporting Gaushala welfare",
        },
        hi: {
          title: "गौ एनजीओ",
          desc: "गौशाला कल्याण का समर्थन करने वाली संस्थाएँ",
        },
        icon: "🏛️",
      },
    ],
    // Right side members
    rightMembers: [
      {
        en: {
          title: "Gau Volunteer",
          desc: "Dedicated individuals serving the cause",
        },
        hi: { title: "गौ स्वयंसेवक", desc: "सेवा के लिए समर्पित व्यक्ति" },
        icon: "🙏",
      },
      {
        en: {
          title: "Gau Donor",
          desc: "Contributing financially to the movement",
        },
        hi: { title: "गौ दानदाता", desc: "आंदोलन में आर्थिक योगदान देने वाले" },
        icon: "💛",
      },
      {
        en: { title: "Gau Vendor", desc: "Selling authentic Gau products" },
        hi: { title: "गौ विक्रेता", desc: "प्रामाणिक गौ उत्पाद बेचने वाले" },
        icon: "🛒",
      },
    ],
    cta: {
      en: "Join the Movement",
      hi: "आंदोलन से जुड़ें",
    },
  },

  // ── About Section ──
  about: {
    heading: {
      en: "About Us",
      hi: "हमारे बारे में",
    },
    initiative: {
      en: "Initiative Head: Krishna's Cows and Shiva's Nandi Maharaj",
      hi: "पहल प्रमुख: कृष्ण की गायें और शिव के नंदी महाराज",
    },
    blessings: {
      label: { en: "Blessings", hi: "आशीर्वाद" },
      text: {
        en: "All venerable Deities of the Indian tradition.",
        hi: "भारतीय परंपरा के सभी पूजनीय देवी-देवता।",
      },
    },
    support: {
      label: { en: "Support", hi: "समर्थन" },
      text: {
        en: "All Acharyas, eminent Saints, great personalities, all Cow-Saints, Cow-devotees, Cow-protectors, Cow-servants, Cow-keepers, and Cow-lovers of the Indian tradition.",
        hi: "भारतीय परंपरा के सभी आचार्य, प्रतिष्ठित संत, महान व्यक्तित्व, सभी गौ-संत, गौ-भक्त, गौ-रक्षक, गौ-सेवक, गौ-पालक और गौ-प्रेमी।",
      },
    },
    vision: {
      label: { en: "Vision", hi: "दृष्टिकोण" },
      text: {
        en: "India's largest Gau Community to connect, support & empower Gaushalas",
        hi: "गौशालाओं को जोड़ने, सहायता और सशक्त बनाने के लिए भारत का सबसे बड़ा गौ समुदाय",
      },
    },
    mission: {
      label: { en: "Mission", hi: "मिशन" },
      text: {
        en: "Gaushala Bachao, Gaushala Banao",
        hi: "गौशाला बचाओ, गौशाला बनाओ",
      },
    },
    goals: {
      label: { en: "Goals", hi: "लक्ष्य" },
      items: [
        {
          en: "Protect & serve Gau Mata & Nandi Maharaj",
          hi: "गौ माता एवं नंदी महाराज की रक्षा एवं सेवा",
        },
        { en: "Har Mandir Gaushala", hi: "हर मंदिर गौशाला" },
      ],
    },
    purpose: {
      label: { en: "Purpose", hi: "उद्देश्य" },
      items: [
        {
          en: "Verified national directory of 6G community with reviews & ratings",
          hi: "समीक्षा और रेटिंग के साथ 6G समुदाय की सत्यापित राष्ट्रीय निर्देशिका",
        },
        {
          en: "Financial & manpower support to Gaushalas",
          hi: "गौशालाओं को वित्तीय एवं जनशक्ति सहायता",
        },
        {
          en: "Transparent & easy donations to Gaushalas and NGOs",
          hi: "गौशालाओं और एनजीओ को पारदर्शी और आसान दान",
        },
        {
          en: "Buy Gau Products directly from Gaushalas",
          hi: "गौशालाओं से सीधे गौ उत्पाद खरीदें",
        },
        {
          en: "Gau community Events & Engagement",
          hi: "गौ समुदाय कार्यक्रम और जुड़ाव",
        },
        {
          en: "Platform to increase reach for Gau influencers",
          hi: "गौ इन्फ्लुएंसर की पहुंच बढ़ाने का मंच",
        },
        {
          en: "Opportunity for Gaushala vendors",
          hi: "गौशाला विक्रेताओं के लिए अवसर",
        },
        {
          en: "Collaborative action against Gau trafficking",
          hi: "गौ तस्करी के खिलाफ सामूहिक कार्रवाई",
        },
      ],
    },
  },

  // ── Contact Section ──
  contact: {
    heading: { en: "Contact Us", hi: "संपर्क करें" },
    connectHeading: { en: "Connect us", hi: "हमसे जुड़ें" },
    subtext: { en: "Please share Suggestions", hi: "कृपया सुझाव साझा करें" },
    fields: {
      name: { en: "Name", hi: "नाम" },
      email: { en: "Email (Optional)", hi: "ईमेल (वैकल्पिक)" },
      mobile: { en: "Mobile Number", hi: "मोबाइल नंबर" },
      message: { en: "Message", hi: "संदेश" },
    },
    submit: { en: "Submit", hi: "सबमिट करें" },
    privacy: {
      en: "Your information is safe with us. We respect your privacy.",
      hi: "आपकी जानकारी हमारे पास सुरक्षित है। हम आपकी गोपनीयता का सम्मान करते हैं।",
    },
    // Social links for circular contact UI - dynamic & scalable
    socialLinks: [
      {
        name: "WhatsApp",
        icon: "whatsapp",
        url: "https://wa.me/919999999999",
        color: "25 98% 40%",
      },
      {
        name: "YouTube",
        icon: "youtube",
        url: "https://youtube.com/@gaubook",
        color: "0 100% 50%",
      },
      {
        name: "Mail",
        icon: "mail",
        url: "mailto:info@gaubook.com",
        color: "24 95% 53%",
      },
      {
        name: "Facebook",
        icon: "facebook",
        url: "https://facebook.com/gaubook",
        color: "220 46% 48%",
      },
      {
        name: "Instagram",
        icon: "instagram",
        url: "https://instagram.com/gaubook",
        color: "330 70% 50%",
      },
      {
        name: "Twitter / X",
        icon: "twitter",
        url: "https://twitter.com/gaubook",
        color: "200 10% 15%",
      },
      { name: "Apple", icon: "apple", url: "#", color: "0 0% 20%" },
      { name: "Spotify", icon: "spotify", url: "#", color: "141 73% 42%" },
    ],
  },

  // ── Download Center ──
  downloads: {
    heading: { en: "Download Center", hi: "डाउनलोड सेंटर" },
    subtext: {
      en: "Download important files related to this initiative and share them with your community",
      hi: "इस पहल से संबंधित महत्वपूर्ण फाइलें डाउनलोड करें और अपने समुदाय के साथ साझा करें",
    },
    specialRequest: {
      en: "Join the Gaubook App and connect everyone. Get the banners and pamphlets printed and distributed at temples, gaushalas and public places, and take this digital campaign to each and every individual.",
      hi: "गौबुक ऐप से जुड़ें और सबको जोड़ें। बैनर और पैम्फलेट छपवाकर मंदिरों, गौशालाओं और सार्वजनिक स्थानों पर वितरित करें, और इस डिजिटल अभियान को हर व्यक्ति तक पहुँचाएं।",
    },
    preview: { en: "Preview", hi: "पूर्वावलोकन" },
    download: { en: "Download", hi: "डाउनलोड" },
    items: [
      {
        en: "Pamphlet",
        hi: "पैम्फलेट",
        variants: [
          {
            en: "Hindi",
            hi: "हिंदी",
            previewUrl: "https://picsum.photos/600/800?random=1",
            downloadUrl: "https://picsum.photos/600/800?random=1",
          },
          {
            en: "English",
            hi: "अंग्रेजी",
            previewUrl: "https://picsum.photos/600/800?random=2",
            downloadUrl: "https://picsum.photos/600/800?random=2",
          },
        ],
      },
      {
        en: "Banner 2x4",
        hi: "बैनर 2x4",
        variants: [
          {
            en: "Hindi",
            hi: "हिंदी",
            previewUrl: "https://picsum.photos/800/400?random=3",
            downloadUrl: "https://picsum.photos/800/400?random=3",
          },
          {
            en: "English",
            hi: "अंग्रेजी",
            previewUrl: "https://picsum.photos/800/400?random=4",
            downloadUrl: "https://picsum.photos/800/400?random=4",
          },
        ],
      },
      {
        en: "Banner 6x4",
        hi: "बैनर 6x4",
        variants: [
          {
            en: "Hindi",
            hi: "हिंदी",
            previewUrl: "https://picsum.photos/1200/800?random=5",
            downloadUrl: "https://picsum.photos/1200/800?random=5",
          },
          {
            en: "English",
            hi: "अंग्रेजी",
            previewUrl: "https://picsum.photos/1200/800?random=6",
            downloadUrl: "https://picsum.photos/1200/800?random=6",
          },
        ],
      },
      {
        en: "Standee 3x6",
        hi: "स्टैंडी 3x6",
        variants: [
          {
            en: "Hindi",
            hi: "हिंदी",
            previewUrl: "https://picsum.photos/600/1200?random=7",
            downloadUrl: "https://picsum.photos/600/1200?random=7",
          },
          {
            en: "English",
            hi: "अंग्रेजी",
            previewUrl: "https://picsum.photos/600/1200?random=8",
            downloadUrl: "https://picsum.photos/600/1200?random=8",
          },
        ],
      },
      {
        en: "T-Shirt – Backside",
        hi: "टी-शर्ट – पीछे",
        variants: [
          {
            en: "View",
            hi: "देखें",
            previewUrl: "https://picsum.photos/500/600?random=9",
            downloadUrl: "https://picsum.photos/500/600?random=9",
          },
        ],
      },
      {
        en: "Cap – Logo",
        hi: "कैप – लोगो",
        variants: [
          {
            en: "View",
            hi: "देखें",
            previewUrl: "https://picsum.photos/400/400?random=10",
            downloadUrl: "https://picsum.photos/400/400?random=10",
          },
        ],
      },
      {
        en: "WhatsApp Status Banner",
        hi: "व्हाट्सएप स्टेटस बैनर",
        variants: [
          {
            en: "Hindi",
            hi: "हिंदी",
            previewUrl: "https://picsum.photos/1080/1920?random=11",
            downloadUrl: "https://picsum.photos/1080/1920?random=11",
          },
          {
            en: "English",
            hi: "अंग्रेजी",
            previewUrl: "https://picsum.photos/1080/1920?random=12",
            downloadUrl: "https://picsum.photos/1080/1920?random=12",
          },
        ],
      },
      {
        en: "WhatsApp Channel QR",
        hi: "व्हाट्सएप चैनल QR",
        variants: [
          {
            en: "Hindi",
            hi: "हिंदी",
            previewUrl: "https://picsum.photos/300/300?random=13",
            downloadUrl: "https://picsum.photos/300/300?random=13",
          },
          {
            en: "English",
            hi: "अंग्रेजी",
            previewUrl: "https://picsum.photos/300/300?random=14",
            downloadUrl: "https://picsum.photos/300/300?random=14",
          },
        ],
      },
    ],
  },

  // ── Digital Solutions Section ──
  digital: {
    heading: {
      en: "Gaushala Digital Solutions Foundation",
      hi: "गौशाला डिजिटल सॉल्यूशंस फाउंडेशन",
    },
    subtext: {
      en: "Building India's Largest Free Digital Ecosystem for Gaushalas",
      hi: "गौशालाओं के लिए भारत का सबसे बड़ा मुफ्त डिजिटल इकोसिस्टम बनाना",
    },
    services: [
      { en: "Consulting", hi: "परामर्श", icon: "💼" },
      { en: "Websites", hi: "वेबसाइट", icon: "🌐" },
      { en: "Accounting", hi: "लेखांकन", icon: "📊" },
      { en: "Management", hi: "प्रबंधन", icon: "📋" },
      { en: "Marketing", hi: "मार्केटिंग", icon: "📣" },
      { en: "Automation", hi: "ऑटोमेशन", icon: "⚙️" },
      { en: "Expert Training", hi: "विशेषज्ञ प्रशिक्षण", icon: "🎓" },
    ],
    formHeading: {
      en: "Register to become a part of this Digital Initiative",
      hi: "इस डिजिटल पहल का हिस्सा बनने के लिए रजिस्टर करें",
    },
    fields: {
      name: { en: "Name *", hi: "नाम *" },
      email: { en: "Email *", hi: "ईमेल *" },
      mobile: { en: "Mobile Number *", hi: "मोबाइल नंबर *" },
      whatsapp: { en: "WhatsApp Number", hi: "व्हाट्सएप नंबर" },
      category: { en: "Category *", hi: "श्रेणी *" },
      helpText: {
        en: "How can you help us? *",
        hi: "आप हमारी कैसे मदद कर सकते हैं? *",
      },
    },
    categories: [
      { en: "Software Developer", hi: "सॉफ्टवेयर डेवलपर" },
      { en: "Software Tester", hi: "सॉफ्टवेयर टेस्टर" },
      { en: "IT Infrastructure", hi: "आईटी इंफ्रास्ट्रक्चर" },
      { en: "Project Manager", hi: "प्रोजेक्ट मैनेजर" },
      { en: "Social Media Manager", hi: "सोशल मीडिया मैनेजर" },
      { en: "Digital Marketer", hi: "डिजिटल मार्केटर" },
      { en: "Designer", hi: "डिजाइनर" },
      { en: "Editor", hi: "एडिटर" },
      { en: "Legal & Trust/NGO Formation", hi: "कानूनी एवं ट्रस्ट/NGO गठन" },
      { en: "Veterinary Doctor", hi: "पशु चिकित्सक" },
      { en: "Pharma Expert", hi: "फार्मा विशेषज्ञ" },
      { en: "Trainer", hi: "प्रशिक्षक" },
      { en: "Others", hi: "अन्य" },
    ],
    submit: { en: "Submit", hi: "सबमिट करें" },
  },

  // ── Legal Sections (Accordion) ──
  legal: {
    termsHeading: { en: "Terms & Conditions", hi: "नियम और शर्तें" },
    privacyHeading: { en: "Privacy Policy", hi: "गोपनीयता नीति" },
    disclaimerHeading: { en: "Disclaimer", hi: "अस्वीकरण" },
    lastUpdated: {
      en: "Last Updated: January 2026",
      hi: "अंतिम अपडेट: जनवरी 2026",
    },
    terms: [
      {
        title: { en: "1. About the Platform", hi: "1. प्लेटफॉर्म के बारे में" },
        content: {
          en: "Gaubook is a movement-oriented digital initiative aimed at building India's largest Gau Community to connect, support, and empower Gaushalas. This website acts as the official digital identity of Gaubook, promotes the Gaubook mobile application, provides information about the 6G Gau Community, allows users to download campaign materials, and enables users to submit feedback and suggestions. This website does not directly process donations, conduct financial transactions, or operate as an e-commerce marketplace.",
          hi: "गौबुक एक आंदोलन-उन्मुख डिजिटल पहल है जिसका उद्देश्य भारत का सबसे बड़ा गौ समुदाय बनाना है। यह वेबसाइट गौबुक की आधिकारिक डिजिटल पहचान के रूप में कार्य करती है, गौबुक मोबाइल एप्लिकेशन को बढ़ावा देती है, 6G गौ समुदाय के बारे में जानकारी प्रदान करती है।",
        },
      },
      {
        title: { en: "2. Use of Website", hi: "2. वेबसाइट का उपयोग" },
        content: {
          en: "By using this website, you agree to use the platform only for lawful purposes, not to misuse downloadable materials, not to upload malicious content via contact forms, and not to attempt unauthorized access to admin systems. We reserve the right to restrict or terminate access if misuse is detected.",
          hi: "इस वेबसाइट का उपयोग करके, आप सहमत हैं कि प्लेटफॉर्म का उपयोग केवल वैध उद्देश्यों के लिए करेंगे, डाउनलोड करने योग्य सामग्री का दुरुपयोग नहीं करेंगे।",
        },
      },
      {
        title: { en: "3. Intellectual Property", hi: "3. बौद्धिक संपदा" },
        content: {
          en: "All content on this website, including text, design, logos, graphics, campaign materials, and downloadable assets are the intellectual property of Gaubook / Nishkam Gauseva unless otherwise stated. Downloadable materials may be used for campaign promotion, awareness activities, and community distribution. They may NOT be modified for misleading purposes, sold commercially, or used for political manipulation.",
          hi: "इस वेबसाइट पर सभी सामग्री, जिसमें टेक्स्ट, डिज़ाइन, लोगो, ग्राफिक्स, अभियान सामग्री और डाउनलोड करने योग्य संपत्तियां शामिल हैं, गौबुक / निष्काम गौसेवा की बौद्धिक संपदा हैं।",
        },
      },
      {
        title: { en: "4. App Redirection", hi: "4. ऐप रीडायरेक्शन" },
        content: {
          en: "This website provides links to Android and iOS app stores. Once redirected, users are governed by respective App Store policies. Gaubook is not responsible for third-party store terms.",
          hi: "यह वेबसाइट एंड्रॉइड और iOS ऐप स्टोर के लिंक प्रदान करती है। रीडायरेक्ट होने के बाद, उपयोगकर्ता संबंधित ऐप स्टोर नीतियों द्वारा शासित होते हैं।",
        },
      },
      {
        title: { en: "5. User Submissions", hi: "5. उपयोगकर्ता सबमिशन" },
        content: {
          en: "When submitting suggestions: You confirm information provided is accurate. You agree not to submit harmful, defamatory, or illegal content. You grant Gaubook the right to review and use suggestions for platform improvement. We are not obligated to respond to every submission.",
          hi: "सुझाव जमा करते समय: आप पुष्टि करते हैं कि प्रदान की गई जानकारी सटीक है। आप हानिकारक, अपमानजनक या अवैध सामग्री जमा नहीं करने के लिए सहमत हैं।",
        },
      },
      {
        title: { en: "6. Limitation of Liability", hi: "6. दायित्व की सीमा" },
        content: {
          en: "Gaubook makes reasonable efforts to ensure information accuracy. However, we do not guarantee completeness or real-time updates. We are not liable for any losses arising from reliance on website content. We are not responsible for third-party misuse of downloaded materials.",
          hi: "गौबुक सूचना सटीकता सुनिश्चित करने के लिए उचित प्रयास करता है। हालाँकि, हम पूर्णता या रीयल-टाइम अपडेट की गारंटी नहीं देते हैं।",
        },
      },
      {
        title: { en: "7. Modifications", hi: "7. संशोधन" },
        content: {
          en: "We reserve the right to modify these Terms at any time. Continued use of the website constitutes acceptance of updated terms.",
          hi: "हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं।",
        },
      },
      {
        title: { en: "8. Governing Law", hi: "8. शासी कानून" },
        content: {
          en: "These Terms shall be governed by and interpreted under the laws of India. Any disputes shall fall under the jurisdiction of appropriate courts in India.",
          hi: "ये शर्तें भारत के कानूनों के तहत शासित और व्याख्यायित होंगी।",
        },
      },
    ],
    privacy: [
      {
        title: {
          en: "1. Information We Collect",
          hi: "1. हम कौन सी जानकारी एकत्र करते हैं",
        },
        content: {
          en: "This landing website may collect: Information You Provide (Name, Mobile number, Email address, Message content) and Automatically Collected Data (Device type, Browser type, IP address, Website usage analytics, Download click data).",
          hi: "यह लैंडिंग वेबसाइट एकत्र कर सकती है: आपके द्वारा प्रदान की गई जानकारी (नाम, मोबाइल नंबर, ईमेल पता, संदेश सामग्री) और स्वचालित रूप से एकत्रित डेटा।",
        },
      },
      {
        title: {
          en: "2. How We Use Your Information",
          hi: "2. हम आपकी जानकारी का उपयोग कैसे करते हैं",
        },
        content: {
          en: "We use collected information to respond to suggestions, improve user experience, monitor app download interest, analyze website traffic, and improve campaign effectiveness. We do NOT sell your personal data.",
          hi: "हम एकत्रित जानकारी का उपयोग सुझावों का जवाब देने, उपयोगकर्ता अनुभव में सुधार करने के लिए करते हैं। हम आपका व्यक्तिगत डेटा नहीं बेचते हैं।",
        },
      },
      {
        title: { en: "3. Data Sharing", hi: "3. डेटा साझाकरण" },
        content: {
          en: "We do not sell, rent, or trade personal information. Data may be shared only with authorized internal team members, with technical service providers (hosting, analytics), or if required by law.",
          hi: "हम व्यक्तिगत जानकारी को बेचते, किराए पर देते या व्यापार नहीं करते हैं।",
        },
      },
      {
        title: { en: "4. Data Security", hi: "4. डेटा सुरक्षा" },
        content: {
          en: "We implement reasonable safeguards including SSL encryption, secure hosting, and limited admin access. However, no digital system is 100% secure.",
          hi: "हम SSL एन्क्रिप्शन, सुरक्षित होस्टिंग और सीमित एडमिन एक्सेस सहित उचित सुरक्षा उपाय लागू करते हैं।",
        },
      },
      {
        title: { en: "5. Cookies & Analytics", hi: "5. कुकीज और एनालिटिक्स" },
        content: {
          en: "The website may use cookies and third-party analytics tools to track usage patterns, improve performance, and monitor engagement. Users may disable cookies via browser settings.",
          hi: "वेबसाइट उपयोग पैटर्न को ट्रैक करने के लिए कुकीज और तृतीय-पक्ष एनालिटिक्स टूल का उपयोग कर सकती है।",
        },
      },
      {
        title: { en: "6. External Links", hi: "6. बाहरी लिंक" },
        content: {
          en: "This website may contain links to mobile app stores and social media platforms. We are not responsible for privacy practices of third-party platforms.",
          hi: "इस वेबसाइट में मोबाइल ऐप स्टोर और सोशल मीडिया प्लेटफॉर्म के लिंक हो सकते हैं।",
        },
      },
      {
        title: { en: "7. Data Retention", hi: "7. डेटा प्रतिधारण" },
        content: {
          en: "We retain suggestion form data only as long as necessary for responding, internal recordkeeping, and legal compliance.",
          hi: "हम सुझाव फॉर्म डेटा केवल तब तक रखते हैं जब तक आवश्यक हो।",
        },
      },
      {
        title: { en: "8. Children's Privacy", hi: "8. बच्चों की गोपनीयता" },
        content: {
          en: "This website is not directed toward children under 18. We do not knowingly collect data from minors.",
          hi: "यह वेबसाइट 18 वर्ष से कम उम्र के बच्चों के लिए निर्देशित नहीं है।",
        },
      },
      {
        title: { en: "9. Changes to Policy", hi: "9. नीति में परिवर्तन" },
        content: {
          en: "We may update this Privacy Policy periodically. Updates will be reflected with a revised date.",
          hi: "हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं।",
        },
      },
    ],
    disclaimer: [
      {
        title: { en: "General Disclaimer", hi: "सामान्य अस्वीकरण" },
        content: {
          en: "Gaubook is a community-driven initiative intended to promote Gau welfare and connect stakeholders within the 6G ecosystem. This website is informational in nature, promotes a broader digital movement, and does not directly conduct financial transactions.",
          hi: "गौबुक एक समुदाय-संचालित पहल है जिसका उद्देश्य गौ कल्याण को बढ़ावा देना और 6G पारिस्थितिकी तंत्र के भीतर हितधारकों को जोड़ना है।",
        },
      },
      {
        title: { en: "1. No Financial Advice", hi: "1. कोई वित्तीय सलाह नहीं" },
        content: {
          en: "Nothing on this website constitutes financial advice, legal advice, or investment advice. Any donations, purchases, or financial engagements occur within the mobile application or external platforms governed by separate terms.",
          hi: "इस वेबसाइट पर कुछ भी वित्तीय सलाह, कानूनी सलाह या निवेश सलाह नहीं है।",
        },
      },
      {
        title: {
          en: "2. No Guarantee of Outcomes",
          hi: "2. परिणामों की कोई गारंटी नहीं",
        },
        content: {
          en: "While Gaubook aims to support Gaushalas, promote transparency, and strengthen collaboration, we do not guarantee specific financial, operational, or social outcomes.",
          hi: "जबकि गौबुक का लक्ष्य गौशालाओं का समर्थन करना है, हम विशिष्ट वित्तीय, परिचालन या सामाजिक परिणामों की गारंटी नहीं देते हैं।",
        },
      },
      {
        title: { en: "3. Third-Party Content", hi: "3. तृतीय-पक्ष सामग्री" },
        content: {
          en: "Downloadable materials and campaign content are intended for awareness purposes only. Gaubook is not responsible for misuse of campaign materials, unauthorized modifications, or independent activities conducted by community members.",
          hi: "डाउनलोड करने योग्य सामग्री और अभियान सामग्री केवल जागरूकता उद्देश्यों के लिए हैं।",
        },
      },
      {
        title: {
          en: "4. Spiritual & Cultural References",
          hi: "4. आध्यात्मिक और सांस्कृतिक संदर्भ",
        },
        content: {
          en: "This website includes spiritual references aligned with Indian tradition and Gau heritage. These are presented respectfully to reflect the mission and values of the initiative. They are not intended to exclude, discriminate, or impose beliefs.",
          hi: "इस वेबसाइट में भारतीय परंपरा और गौ विरासत के अनुरूप आध्यात्मिक संदर्भ शामिल हैं।",
        },
      },
      {
        title: { en: "5. Limitation of Liability", hi: "5. दायित्व की सीमा" },
        content: {
          en: "Under no circumstances shall Gaubook or Nishkam Gauseva be liable for direct or indirect damages, loss of data, loss of profits, campaign misuse, or external platform issues. Use of the website constitutes acceptance of this disclaimer.",
          hi: "किसी भी परिस्थिति में गौबुक या निष्काम गौसेवा प्रत्यक्ष या अप्रत्यक्ष नुकसान के लिए उत्तरदायी नहीं होगी।",
        },
      },
    ],
  },

  // ── Footer ──
  footer: {
    copyright: {
      en: "© 2026 All Rights Reserved By Gaushala Digital Solutions Foundation",
      hi: "© 2026 सर्वाधिकार सुरक्षित गौशाला डिजिटल सॉल्यूशंस फाउंडेशन",
    },
    email: "info@gaubook.com",
    quickLinks: {
      label: { en: "Quick Links", hi: "त्वरित लिंक" },
      items: [
        { en: "Terms & Conditions", hi: "नियम और शर्तें", url: "#legal" },
        { en: "Privacy Policy", hi: "गोपनीयता नीति", url: "#legal" },
        { en: "Disclaimer", hi: "अस्वीकरण", url: "#legal" },
      ],
    },
    socialLinks: {
      label: { en: "Follow Us", hi: "हमें फॉलो करें" },
    },
  },
};

export default content;
