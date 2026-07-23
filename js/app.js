/* ==========================================================================
   SASYA SARTHI TECH SOLUTIONS AND ALLIED SERVICES PRIVATE LIMITED
   Application Controller & Interactive Engines
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Dictionary Engine (EN, HI, MR, TE)
  const translations = {
    en: {
      navHome: "Home",
      navServices: "Services",
      navReinsurance: "Reinsurance",
      navSmartVillage: "SmartVillage",
      navCalculator: "Risk Calculator",
      navContact: "Contact Us",
      heroBadge: "🌾 India's Pioneer Agri-Risk & AI Tech Partner",
      heroTitlePrefix: "Empowering Indian Agriculture with",
      heroTitleSuffix: "Digital Risk & Insurance Tech",
      heroDesc: "Bridging farmers, insurance companies, reinsurance markets, and financial institutions under Pradhan Mantri Fasal Bima Yojana (PMFBY) with cutting-edge satellite analytics and AI precision.",
      btnCalc: "Calculate Crop Risk",
      btnAi: "Talk to AI Sarthi",
      statHectares: "2.4M+",
      statHectaresLabel: "Hectares Monitored",
      statClaims: "₹850 Cr+",
      statClaimsLabel: "PMFBY Claims Assessed",
      statVillage: "12,000+",
      statVillageLabel: "Gram Panchayats Covered",
      statAccuracy: "94.8%",
      statAccuracyLabel: "Yield Risk Precision",
      calcTag: "REAL-TIME AGRI RISK ESTIMATOR",
      calcTitle: "Crop Insurance & Premium Risk Calculator",
      calcDesc: "Calculate estimated sum insured, subsidized farmer premium under PMFBY, government subsidy shares, and risk exposure index instantly.",
      servicesTag: "WHAT WE DO",
      servicesTitle: "Complete Risk Ecosystem for Stakeholders",
      contactTitle: "Partner with Sasya Sarthi Today",
      contactDesc: "Schedule a consultation with our agricultural risk consultants, reinsurance actuaries, and digital agri-tech specialists."
    },
    hi: {
      navHome: "मुख्य पृष्ठ",
      navServices: "हमारी सेवाएं",
      navReinsurance: "पुनर्बीमा (Reinsurance)",
      navSmartVillage: "स्मार्ट विलेज",
      navCalculator: "जोखिम कैलकुलेटर",
      navContact: "संपर्क करें",
      heroBadge: "🌾 भारत का अग्रणी कृषि-जोखिम एवं AI तकनीक भागीदार",
      heroTitlePrefix: "भारतीय कृषि को सशक्त बनाना",
      heroTitleSuffix: "डिजिटल जोखिम एवं बीमा तकनीक से",
      heroDesc: "प्रधानमंत्री फसल बीमा योजना (PMFBY) के तहत किसानों, बीमा कंपनियों, पुनर्बीमा बाजारों और वित्तीय संस्थानों को उपग्रह तकनीक और AI सटीकता से जोड़ना।",
      btnCalc: "फसल जोखिम की गणना करें",
      btnAi: "एआई सारथी से बात करें",
      statHectares: "24 लाख+",
      statHectaresLabel: "हेक्टेयर निगरानी",
      statClaims: "₹850 करोड़+",
      statClaimsLabel: "दावों का मूल्यांकन",
      statVillage: "12,000+",
      statVillageLabel: "ग्राम पंचायतें शामिल",
      statAccuracy: "94.8%",
      statAccuracyLabel: "सटीकता दर",
      calcTag: "रियल-टाइम कृषि जोखिम कैलकुलेटर",
      calcTitle: "फसल बीमा एवं प्रीमियम कैलकुलेटर",
      calcDesc: "PMFBY के तहत अनुमानित बीमित राशि, रियायती किसान प्रीमियम और सरकारी सब्सिडी की तुरंत गणना करें।",
      servicesTag: "हमारी सेवाएं",
      servicesTitle: "कृषि हितधारकों के लिए संपूर्ण जोखिम प्रबंधन",
      contactTitle: "सस्य सारथी के साथ आज ही जुड़ें",
      contactDesc: "हमारे कृषि जोखिम सलाहकारों और बीमा विशेषज्ञों के साथ परामर्श का समय निर्धारित करें।"
    },
    mr: {
      navHome: "मुख्यपृष्ठ",
      navServices: "सेवा",
      navReinsurance: "पुनर्विमा",
      navSmartVillage: "स्मार्ट व्हिलेज्",
      navCalculator: "धोका कॅल्क्युलेटर",
      navContact: "संपर्क",
      heroBadge: "🌾 भारतातील अग्रेसर कृषी-धोका आणि AI तंत्रज्ञान भागीदार",
      heroTitlePrefix: "भारतीय शेतीचे सक्षमीकरण",
      heroTitleSuffix: "डिजिटल कृषी तंत्रज्ञानाद्वारे",
      heroDesc: "पंतप्रधान पीक विमा योजनेअंतर्गत शेतकरी, विमा कंपन्या आणि पुनर्विमा बाजाराला सॅटेलाइट विश्लेषणाद्वारे जोडणे.",
      btnCalc: "पीक धोका मोजा",
      btnAi: "AI सारथीशी बोला",
      statHectares: "२४ लाख+",
      statHectaresLabel: "हेक्टरवर देखरेख",
      statClaims: "₹८५० कोटी+",
      statClaimsLabel: "दावे मूल्यांकन",
      statVillage: "१२,०००+",
      statVillageLabel: "ग्रामपंचायती",
      statAccuracy: "९४.८%",
      statAccuracyLabel: "स अचूकता दर",
      calcTag: "रियल-टाइम कृषी धोका गणक",
      calcTitle: "पीक विमा व प्रीमियम कॅल्क्युलेटर",
      calcDesc: "अंदाजित विमा रक्कम, सवलतीचा शेतकरी हप्ता आणि शासकीय अनुदान त्वरित मोजा.",
      servicesTag: "आमच्या सेवा",
      servicesTitle: "कृषी क्षेत्रासाठी सर्वसमावेशक उपाय",
      contactTitle: "सस्य सारथीशी संपर्क साधा",
      contactDesc: "आमच्या कृषी तज्ज्ञांशी चर्चा करण्यासाठी अपॉइंटमेंट बुक करा."
    },
    te: {
      navHome: "హోమ్",
      navServices: "సేవలు",
      navReinsurance: "రీఇన్సూరెన్స్",
      navSmartVillage: "స్మార్ట్ విలేజ్",
      navCalculator: "రిస్క్ క్యాలిక్యులేటర్",
      navContact: "సంప్రదించండి",
      heroBadge: "🌾 భారతదేశపు అగ్రగామి వ్యవసాయ రిస్క్ & AI భాగస్వామి",
      heroTitlePrefix: "భారతీయ వ్యవసాయ సాధికారత",
      heroTitleSuffix: "డిజిటల్ ఇన్సూరెన్స్ టెక్నాలజీతో",
      heroDesc: "ప్రధాన్ మంత్రి ఫసల్ బీమా యోజన (PMFBY) కింద రైతులు, ఇన్సూరెన్స్ కంపెనీలను ఉపగ్రహ విశ్లేషణ ద్వారా అనుసంధానించడం.",
      btnCalc: "రిస్క్ గణించండి",
      btnAi: "AI సారథితో మాట్లాడండి",
      statHectares: "24 లక్షల+",
      statHectaresLabel: "హెక్టార్ల పర్యవేక్షణ",
      statClaims: "₹850 కోట్లు+",
      statClaimsLabel: "క్లెయిమ్‌ల అంచనా",
      statVillage: "12,000+",
      statVillageLabel: "గ్రామ పంచాయతీలు",
      statAccuracy: "94.8%",
      statAccuracyLabel: "ఖచ్చితత్వ రేటు",
      calcTag: "రియల్ టైమ్ అగ్రి రిస్క్ ఎస్టిమేటర్",
      calcTitle: "పంట బీమా & ప్రీమియం క్యాలిక్యులేటర్",
      calcDesc: "PMFBY కింద అంచనా వేసిన బీమా మొత్తం మరియు ప్రీమియం వివరాలను తక్షణమే పొందండి.",
      servicesTag: "మా సేవలు",
      servicesTitle: "వ్యవసాయ భాగస్వాముల కోసం సమగ్ర పరిష్కారాలు",
      contactTitle: "సస్య సారథితో కనెక్ట్ అవ్వండి",
      contactDesc: "మా వ్యవసాయ నిపుణులతో సంప్రదింపులను షెడ్యూల్ చేయండి."
    }
  };

  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      const dict = translations[selectedLang] || translations.en;
      
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });
    });
  }

  // 2. PMFBY & Crop Risk Calculator Engine
  const calcForm = document.getElementById('riskCalcForm');
  if (calcForm) {
    const cropSelect = document.getElementById('calcCrop');
    const seasonSelect = document.getElementById('calcSeason');
    const acresInput = document.getElementById('calcAcres');
    
    const resSumInsured = document.getElementById('resSumInsured');
    const resFarmerRate = document.getElementById('resFarmerRate');
    const resFarmerPremium = document.getElementById('resFarmerPremium');
    const resGovtSubsidy = document.getElementById('resGovtSubsidy');
    const resRiskScore = document.getElementById('resRiskScore');
    const riskFill = document.getElementById('riskFill');

    function calculateRisk() {
      const crop = cropSelect ? cropSelect.value : 'paddy';
      const season = seasonSelect ? seasonSelect.value : 'kharif';
      const acres = parseFloat(acresInput ? acresInput.value : 5) || 5;

      // Base Values per acre (in INR)
      const baseValues = {
        paddy: 45000,
        wheat: 40000,
        cotton: 52000,
        soybean: 38000,
        sugarcane: 75000
      };

      // Subsidized PMFBY Farmer Premium Rates
      // Kharif crops: 2.0%, Rabi crops: 1.5%, Commercial/Oilseeds: 5.0%
      let farmerRate = 2.0;
      if (season === 'rabi') {
        farmerRate = 1.5;
      } else if (crop === 'cotton' || crop === 'sugarcane') {
        farmerRate = 5.0;
      }

      const totalSumInsured = (baseValues[crop] || 40000) * acres;
      const farmerPremium = Math.round(totalSumInsured * (farmerRate / 100));
      
      // Actuarial Rate simulation (e.g. 12.5%)
      const actuarialRate = 12.5;
      const totalActuarialPremium = Math.round(totalSumInsured * (actuarialRate / 100));
      const govtSubsidy = Math.max(0, totalActuarialPremium - farmerPremium);

      // Risk score calculation based on season & crop
      let riskScore = 38; // Normal Low-Medium
      if (season === 'kharif') riskScore += 18; // Monsoon variability
      if (crop === 'cotton' || crop === 'soybean') riskScore += 14;

      if (resSumInsured) resSumInsured.textContent = `₹${totalSumInsured.toLocaleString('en-IN')}`;
      if (resFarmerRate) resFarmerRate.textContent = `${farmerRate.toFixed(1)}%`;
      if (resFarmerPremium) resFarmerPremium.textContent = `₹${farmerPremium.toLocaleString('en-IN')}`;
      if (resGovtSubsidy) resGovtSubsidy.textContent = `₹${govtSubsidy.toLocaleString('en-IN')}`;
      if (resRiskScore) resRiskScore.textContent = `${riskScore}/100`;
      
      if (riskFill) {
        riskFill.style.width = `${Math.min(100, riskScore)}%`;
      }
    }

    // Attach listeners
    [cropSelect, seasonSelect, acresInput].forEach(elem => {
      if (elem) elem.addEventListener('change', calculateRisk);
      if (elem) elem.addEventListener('input', calculateRisk);
    });

    calculateRisk();
  }

  // 3. Interactive "Sasya AI Sarthi" Chatbot Drawer Logic
  const aiLauncher = document.getElementById('aiLauncher');
  const chatDrawer = document.getElementById('chatDrawer');
  const chatClose = document.getElementById('chatClose');
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');

  if (aiLauncher && chatDrawer) {
    aiLauncher.addEventListener('click', () => {
      chatDrawer.classList.toggle('active');
    });
  }

  if (chatClose && chatDrawer) {
    chatClose.addEventListener('click', () => {
      chatDrawer.classList.remove('active');
    });
  }

  // Pre-programmed Knowledge Responses for AI Sarthi
  const aiKnowledge = [
    {
      keywords: ['pmfby', 'premium', 'scheme', 'subsidy'],
      response: "🌾 Under **PMFBY (Pradhan Mantri Fasal Bima Yojana)**, farmers pay a capped nominal premium:\n• **Kharif Crops**: 2.0%\n• **Rabi Crops**: 1.5%\n• **Commercial/Horticultural**: 5.0%\n\nThe remaining actuarial premium is shared 50:50 between the Central & State Governments! You can use our live **Crop Risk Calculator** above to compute exact numbers."
    },
    {
      keywords: ['reinsurance', 'treaty', 'underwriting', 'analytics', 'cat-modelling'],
      response: "📊 **Sasya Sarthi Reinsurance Analytics**: We provide actuarial-grade portfolio scoring, cat-modelling APIs, treaty design, exposure mapping, ground-truthing verification, and loss ratio prediction models using satellite NDVI and 20 years of CCE yield data."
    },
    {
      keywords: ['smartvillage', 'iot', 'weather', 'satellite', 'ndvi', 'vernacular'],
      response: "📡 **Sasya SmartVillage SaaS Stack**: Integrated platform for farmers, FPOs, and ag-officers available in **11 Indian languages**. Includes micro-weather sensors, drone ground-truthing, and automated claims triage."
    },
    {
      keywords: ['drone', 'squad', 'mapping', 'orthomosaic', 'cce'],
      response: "🚁 **DGCA-Licensed Drone Fleet**: Our licensed drone squads perform high-resolution orthomosaic crop mapping, spot-damage verification, and CCE yield audits to eliminate fraud for insurance partners."
    },
    {
      keywords: ['api', 'pas', 'cas', 'integration', 'webhook', 'kafka', 'sftp'],
      response: "🔌 **Enterprise Integration & APIs**: Sasya Sarthi connects seamlessly to major PAS/CAS insurance core systems using REST Webhooks, SFTP batch sync, and Apache Kafka real-time event streams."
    },
    {
      keywords: ['security', 'data', 'privacy', 'irdai'],
      response: "🔒 **Security & IRDAI Compliance**: All data is encrypted in transit and at rest. Models follow IRDAI regulatory guidelines and strict ISO 27001 data protection protocols."
    },
    {
      keywords: ['contact', 'office', 'consultation', 'phone', 'email'],
      response: "📞 You can reach **Sasya Sarthi Tech Solutions** at:\n• **Email**: info@agriskconsultant.com / contact@sasyasarthi.com\n• **Phone**: +91-7021701006\n• **Services**: Insurance Underwriting, Reinsurance Analytics, SmartVillage Stack."
    }
  ];

  function sendChatMessage(text) {
    if (!text.trim()) return;

    // Append User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'msg msg-user';
    userMsg.textContent = text;
    chatBody.appendChild(userMsg);

    chatInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    // Simulated Bot Typing Delay
    setTimeout(() => {
      let replyText = "I'm **Sasya AI Sarthi**, your digital agriculture risk assistant! I can help you with PMFBY insurance claims, actuarial cat-modelling APIs, reinsurance exposure analytics, drone ground-truthing, and SmartVillage technology. Feel free to ask any question!";
      
      const lowerText = text.toLowerCase();
      for (const item of aiKnowledge) {
        if (item.keywords.some(k => lowerText.includes(k))) {
          replyText = item.response;
          break;
        }
      }

      const botMsg = document.createElement('div');
      botMsg.className = 'msg msg-bot';
      // Format simple bold markdown
      botMsg.innerHTML = replyText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
      chatBody.appendChild(botMsg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  }

  if (chatSend && chatInput) {
    chatSend.addEventListener('click', () => sendChatMessage(chatInput.value));
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendChatMessage(chatInput.value);
    });
  }

  // Handle Prompt Pills
  document.querySelectorAll('.prompt-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const promptText = pill.getAttribute('data-prompt') || pill.textContent;
      if (!chatDrawer.classList.contains('active')) {
        chatDrawer.classList.add('active');
      }
      sendChatMessage(promptText);
    });
  });

  // 4. Satellite Index Switcher Interactive Preview
  const satBtns = document.querySelectorAll('.sat-btn');
  const satTitle = document.getElementById('satIndexTitle');
  const satVal = document.getElementById('satIndexValue');

  if (satBtns.length > 0) {
    satBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        satBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const indexType = btn.getAttribute('data-index');
        if (indexType === 'ndvi') {
          if (satTitle) satTitle.textContent = "NDVI Crop Health";
          if (satVal) satVal.textContent = "0.78 (Healthy Vigor)";
        } else if (indexType === 'ndwi') {
          if (satTitle) satTitle.textContent = "NDWI Water Stress";
          if (satVal) satVal.textContent = "Optimal Soil Moisture";
        } else if (indexType === 'rainfall') {
          if (satTitle) satTitle.textContent = "Rainfall Anomaly";
          if (satVal) satVal.textContent = "+12% Normal Monsoonal";
        }
      });
    });
  }

  // 5. FAQ Accordion Listener
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const parent = q.parentElement;
      parent.classList.toggle('active');
    });
  });

  // 6. Contact Form Submission Notification
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("✅ Thank you! Your consultation request has been submitted to Sasya Sarthi Tech Solutions. Our agricultural risk expert will contact you shortly.");
  // 7. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }
});


