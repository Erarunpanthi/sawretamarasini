/* ============================================================
   LANGUAGE.JS — Bilingual Support (English / Nepali)
   Portfolio: Law Student
   ============================================================ */

'use strict';

const LanguageManager = (() => {

  // ── Translation Dictionary ──────────────────────────────────
  const translations = {

    // ── GLOBAL / NAVIGATION ─────────────────────────────────
    'nav-home':              { en: 'Home',           ne: 'गृह पृष्ठ' },
    'nav-about':             { en: 'About Me',       ne: 'मेरो बारेमा' },
    'nav-practice':          { en: 'Areas of Interest', ne: 'रुचि क्षेत्र' },
    'nav-projects':          { en: 'Projects',       ne: 'परियोजनाहरू' },
    'nav-articles':          { en: 'Articles',       ne: 'लेखहरू' },
    'nav-contact':           { en: 'Contact',        ne: 'सम्पर्क' },
    'nav-sub-civil':         { en: 'Civil Law',      ne: 'दीवानी कानून' },
    'nav-sub-criminal':      { en: 'Criminal Law',   ne: 'फौजदारी कानून' },
    'nav-sub-constitutional':{ en: 'Constitutional Law', ne: 'संवैधानिक कानून' },
    'nav-sub-human-rights':  { en: 'Human Rights',   ne: 'मानव अधिकार' },
    'nav-sub-research':      { en: 'Research Papers', ne: 'अनुसन्धान पत्रहरू' },
    'nav-sub-blog':          { en: 'Legal Blog',     ne: 'कानुनी ब्लग' },
    'nav-sub-moot':          { en: 'Moot Court',     ne: 'मूट कोर्ट' },
    'nav-sub-internship':    { en: 'Internships',    ne: 'इन्टर्नसिप' },
    'nav-sub-community':     { en: 'Community Work', ne: 'सामुदायिक कार्य' },

    // ── TOP BAR ───────────────────────────────────────────────
    'topbar-location':  { en: 'Kathmandu, Nepal', ne: 'काठमाडौं, नेपाल' },
    'topbar-available': { en: 'Available for Internships', ne: 'इन्टर्नसिपको लागि उपलब्ध' },

    // ── HEADER ───────────────────────────────────────────────
    'header-name':        { en: 'Aarav Sharma',     ne: 'आरव शर्मा' },
    'header-name-ne':     { en: 'Aarav Sharma',     ne: 'आरव शर्मा' },
    'header-designation': { en: 'Law Student · 5th Semester · Tribhuvan University', ne: 'कानून विद्यार्थी · पाँचौं सेमेस्टर · त्रिभुवन विश्वविद्यालय' },
    'header-email':       { en: 'aarav.sharma@law.tu.edu.np', ne: 'aarav.sharma@law.tu.edu.np' },
    'header-phone':       { en: '+977-98XXXXXXXX', ne: '+९७७-९८XXXXXXXX' },

    // ── NOTICE BAR ───────────────────────────────────────────
    'notice-label':    { en: 'NOTICE',         ne: 'सूचना' },
    'notice-1':        { en: 'Currently seeking internship opportunities at law firms and NGOs in Kathmandu.',
                         ne: 'काठमाडौंको कानून फर्म तथा गैसस मा इन्टर्नसिप अवसरको खोजीमा।' },
    'notice-2':        { en: 'New article published: "Constitutional Rights of Indigenous Peoples in Nepal".',
                         ne: 'नयाँ लेख प्रकाशित: "नेपालमा आदिवासी जनजातिको संवैधानिक अधिकार"।' },
    'notice-3':        { en: 'Participated in National Moot Court Competition 2024 – Finalist.',
                         ne: 'राष्ट्रिय मूट कोर्ट प्रतियोगिता २०२४ मा सहभागी – फाइनलिस्ट।' },

    // ── HERO SECTION ─────────────────────────────────────────
    'hero-pretitle':    { en: 'Welcome to My Portfolio',   ne: 'मेरो पोर्टफोलियोमा स्वागत छ' },
    'hero-name':        { en: 'Aarav Sharma',              ne: 'आरव शर्मा' },
    'hero-tagline':     { en: '"Justice is the foundation of a civilised society."', ne: '"न्याय नै एक सभ्य समाजको आधार हो।"' },
    'hero-info-degree': { en: 'LL.B. (5th Semester)',      ne: 'LL.B. (पाँचौं सेमेस्टर)' },
    'hero-info-uni':    { en: 'Tribhuvan University',      ne: 'त्रिभुवन विश्वविद्यालय' },
    'hero-info-loc':    { en: 'Kathmandu, Nepal',          ne: 'काठमाडौं, नेपाल' },
    'hero-info-lang':   { en: 'Nepali | English | Hindi',  ne: 'नेपाली | अंग्रेजी | हिन्दी' },
    'hero-btn-cv':      { en: 'Download CV',               ne: 'सिभी डाउनलोड गर्नुहोस्' },
    'hero-btn-contact': { en: 'Contact Me',                ne: 'सम्पर्क गर्नुहोस्' },
    'hero-status':      { en: '✦ Open to Opportunities',  ne: '✦ अवसरका लागि उपलब्ध' },

    // ── STATS ─────────────────────────────────────────────────
    'stat-1-label': { en: 'Semesters Completed', ne: 'सेमेस्टर पूरा भए' },
    'stat-2-label': { en: 'Projects Completed',  ne: 'परियोजना पूरा भए' },
    'stat-3-label': { en: 'Articles Published',  ne: 'लेख प्रकाशित' },
    'stat-4-label': { en: 'Awards & Honours',    ne: 'पुरस्कार र सम्मान' },

    // ── ABOUT (Home Snippet) ──────────────────────────────────
    'about-section-title':    { en: 'About Me',     ne: 'मेरो बारेमा' },
    'about-section-subtitle': { en: 'Know who I am, what I do, and what drives me.',
                                 ne: 'म को हुँ, के गर्छु, र मलाई के प्रेरित गर्छ।' },
    'about-p1': {
      en: 'I am Aarav Sharma, a dedicated Law student currently in my 5th semester at the Faculty of Law, Tribhuvan University, Kathmandu. My academic journey has been shaped by a deep commitment to justice, equity, and the rule of law.',
      ne: 'म आरव शर्मा हुँ, एक समर्पित कानून विद्यार्थी जो हाल त्रिभुवन विश्वविद्यालयको कानून संकायमा पाँचौं सेमेस्टरमा अध्ययन गर्दैछु। मेरो शैक्षिक यात्रा न्याय, समता र कानुनी शासनप्रति गहिरो प्रतिबद्धताले आकारित भएको छ।'
    },
    'about-p2': {
      en: 'I have engaged in legal research, moot court competitions, community legal awareness programs, and internships with renowned law firms. I am passionate about constitutional law, human rights, and access to justice for marginalised communities.',
      ne: 'मैले कानुनी अनुसन्धान, मूट कोर्ट प्रतियोगिता, सामुदायिक कानुनी जागरण कार्यक्रमहरू र प्रख्यात कानून फर्महरूमा इन्टर्नसिपमा संलग्न भएको छु। म संवैधानिक कानून, मानव अधिकार र सीमान्तकृत समुदायका लागि न्यायसँग पहुँचप्रति उत्साही छु।'
    },
    'about-quote': {
      en: '"The law is reason, free from passion." — Aristotle',
      ne: '"कानून भनेको कारण हो, जो आवेशबाट मुक्त छ।" — अरस्तु'
    },
    'about-btn-more': { en: 'Read Full Profile', ne: 'पूरा प्रोफाइल पढ्नुहोस्' },

    // Personal Info Card
    'info-card-personal':   { en: 'Personal Information',    ne: 'व्यक्तिगत जानकारी' },
    'info-full-name-label': { en: 'Full Name',               ne: 'पूरा नाम' },
    'info-full-name-value': { en: 'Aarav Sharma',            ne: 'आरव शर्मा' },
    'info-dob-label':       { en: 'Date of Birth',           ne: 'जन्म मिति' },
    'info-dob-value':       { en: '15 August 2002',          ne: '१५ अगस्ट २००२' },
    'info-nationality-label':{ en: 'Nationality',            ne: 'राष्ट्रियता' },
    'info-nationality-value':{ en: 'Nepali',                 ne: 'नेपाली' },
    'info-uni-label':       { en: 'University',              ne: 'विश्वविद्यालय' },
    'info-uni-value':       { en: 'Tribhuvan University',    ne: 'त्रिभुवन विश्वविद्यालय' },
    'info-semester-label':  { en: 'Current Semester',        ne: 'वर्तमान सेमेस्टर' },
    'info-semester-value':  { en: '5th Semester, LL.B.',     ne: 'पाँचौं सेमेस्टर, LL.B.' },
    'info-email-label':     { en: 'Email',                   ne: 'इमेल' },

    // Skills Card
    'skills-card-title':   { en: 'Key Legal Skills',         ne: 'मुख्य कानुनी सीपहरू' },
    'skill-legal-research': { en: 'Legal Research',          ne: 'कानुनी अनुसन्धान' },
    'skill-moot-court':     { en: 'Moot Court / Advocacy',   ne: 'मूट कोर्ट / वकालत' },
    'skill-drafting':       { en: 'Legal Drafting',          ne: 'कानुनी मस्यौदा' },
    'skill-analysis':       { en: 'Case Analysis',           ne: 'मुद्दा विश्लेषण' },
    'skill-nepali':         { en: 'Nepali Legal Writing',    ne: 'नेपाली कानुनी लेखन' },

    // ── PRACTICE AREAS ─────────────────────────────────────────
    'areas-section-title':    { en: 'Areas of Legal Interest', ne: 'कानुनी रुचि क्षेत्रहरू' },
    'areas-section-subtitle': { en: 'The branches of law I study, research, and work in.',
                                 ne: 'कानुनका ती शाखाहरू जहाँ म अध्ययन, अनुसन्धान र काम गर्छु।' },

    'area-1-title': { en: 'Constitutional Law',       ne: 'संवैधानिक कानून' },
    'area-1-desc':  { en: 'Studying the foundational laws of Nepal's 2015 Constitution, fundamental rights, directive principles, and constitutional bodies with a focus on judicial review.',
                      ne: 'नेपालको २०१५ संविधानका आधारभूत कानून, मौलिक अधिकार, निर्देशक सिद्धान्त र संवैधानिक निकायहरूको अध्ययन।' },

    'area-2-title': { en: 'Human Rights Law',         ne: 'मानव अधिकार कानून' },
    'area-2-desc':  { en: 'Researching international and domestic human rights frameworks, the role of NHRC, and protection of marginalised communities under Nepali law.',
                      ne: 'अन्तर्राष्ट्रिय र घरेलु मानव अधिकार ढाँचाहरू, NHRC को भूमिका र नेपाली कानून अन्तर्गत सीमान्तकृत समुदायको संरक्षण।' },

    'area-3-title': { en: 'Criminal Law & Procedure', ne: 'फौजदारी कानून र कार्यविधि' },
    'area-3-desc':  { en: 'In-depth study of the National Penal Code 2017, criminal procedure, evidence law, and victim rights within Nepal's justice system.',
                      ne: 'राष्ट्रिय दण्ड संहिता २०१७, फौजदारी कार्यविधि, प्रमाण कानून र पीडित अधिकारको गहन अध्ययन।' },

    'area-4-title': { en: 'Civil & Family Law',       ne: 'दीवानी तथा पारिवारिक कानून' },
    'area-4-desc':  { en: 'Exploring civil procedure, property rights, contract law, and family law regulations including marriage, divorce, and inheritance under Nepali statute.',
                      ne: 'दीवानी कार्यविधि, सम्पत्ति अधिकार, सम्झौता कानून र विवाह, सम्बन्धविच्छेद तथा उत्तराधिकार सम्बन्धी पारिवारिक कानूनहरूको अन्वेषण।' },

    'area-5-title': { en: 'Environmental Law',        ne: 'वातावरण कानून' },
    'area-5-desc':  { en: 'Studying environmental protection laws, climate justice, and the intersection of constitutional rights with environmental governance in Nepal.',
                      ne: 'वातावरण संरक्षण कानून, जलवायु न्याय र नेपालमा संवैधानिक अधिकार तथा वातावरण शासनको अन्तरसम्बन्धको अध्ययन।' },

    'area-6-title': { en: 'Labour & Employment Law',  ne: 'श्रम तथा रोजगार कानून' },
    'area-6-desc':  { en: 'Research into the Labour Act 2017, workers' rights, trade union law, and dispute resolution mechanisms in Nepali workplaces.',
                      ne: 'श्रम ऐन २०१७, श्रमिक अधिकार, ट्रेड युनियन कानून र नेपाली कार्यस्थलमा विवाद समाधान संयन्त्रको अनुसन्धान।' },

    // ── PROJECTS ──────────────────────────────────────────────
    'projects-section-title':    { en: 'My Projects',      ne: 'मेरा परियोजनाहरू' },
    'projects-section-subtitle': { en: 'Academic projects, research, and community initiatives I have undertaken.',
                                    ne: 'मैले गरेका शैक्षिक परियोजना, अनुसन्धान र सामुदायिक पहलहरू।' },
    'projects-btn-all': { en: 'View All Projects', ne: 'सबै परियोजना हेर्नुहोस्' },

    'proj-1-title': { en: 'Legal Aid Clinic – Kathmandu',
                      ne: 'कानुनी सहायता क्लिनिक – काठमाडौं' },
    'proj-1-desc':  { en: 'Organised and participated in a free legal aid clinic in Kirtipur, providing basic legal consultation to underprivileged communities.',
                      ne: 'किर्तिपुरमा नि:शुल्क कानुनी सहायता क्लिनिक आयोजना गरी विपन्न समुदायलाई आधारभूत कानुनी परामर्श प्रदान गरियो।' },

    'proj-2-title': { en: 'Research: Child Rights in Nepal',
                      ne: 'अनुसन्धान: नेपालमा बाल अधिकार' },
    'proj-2-desc':  { en: 'An academic research paper analysing the implementation of the Convention on the Rights of the Child within the Nepali legal system.',
                      ne: 'नेपाली कानुनी प्रणालीमा बाल अधिकार सम्बन्धी महासन्धिको कार्यान्वयनको विश्लेषण गर्ने शैक्षिक अनुसन्धान पत्र।' },

    'proj-3-title': { en: 'Moot Court – National Competition 2024',
                      ne: 'मूट कोर्ट – राष्ट्रिय प्रतियोगिता २०२४' },
    'proj-3-desc':  { en: 'Represented the Faculty of Law in the National Inter-University Moot Court Competition, advancing to the finals on a constitutional rights problem.',
                      ne: 'राष्ट्रिय अन्तरविश्वविद्यालय मूट कोर्ट प्रतियोगितामा कानून संकायको प्रतिनिधित्व गर्दै संवैधानिक अधिकारको प्रश्नमा फाइनलमा पुगियो।' },

    // ── ARTICLES ──────────────────────────────────────────────
    'articles-section-title':    { en: 'Articles & Publications', ne: 'लेख तथा प्रकाशनहरू' },
    'articles-section-subtitle': { en: 'Legal essays, research notes, and opinion pieces I have authored.',
                                    ne: 'मैले लेखेका कानुनी निबन्ध, अनुसन्धान टिप्पणी र मत लेखहरू।' },
    'articles-btn-all': { en: 'View All Articles', ne: 'सबै लेख हेर्नुहोस्' },

    'art-1-title': { en: 'Constitutional Rights of Indigenous Peoples in Nepal',
                     ne: 'नेपालमा आदिवासी जनजातिको संवैधानिक अधिकार' },
    'art-1-excerpt': { en: 'An analysis of how Nepal's 2015 Constitution guarantees and limits the rights of indigenous and Janajati communities, with reference to ILO Convention 169.',
                       ne: 'नेपालको २०१५ संविधानले ILO महासन्धि १६९ को सन्दर्भमा आदिवासी तथा जनजाति समुदायको अधिकार कसरी सुनिश्चित र सीमित गर्दछ भन्ने विश्लेषण।' },

    'art-2-title': { en: 'Bail Rights and Pre-Trial Detention in Nepali Criminal Procedure',
                     ne: 'नेपाली फौजदारी कार्यविधिमा जमानत अधिकार र पूर्व-परीक्षण थुना' },
    'art-2-excerpt': { en: 'A critical review of bail provisions under the National Criminal Procedure Code and the systemic issues affecting access to bail for economically vulnerable accused.',
                       ne: 'राष्ट्रिय फौजदारी कार्यविधि संहिता अन्तर्गत जमानत प्रावधानहरूको आलोचनात्मक समीक्षा र आर्थिक रूपमा कमजोर अभियुक्तहरूको जमानतमाथिको पहुँचलाई असर गर्ने प्रणालीगत समस्याहरू।' },

    'art-3-title': { en: 'The Role of the Supreme Court in Protecting Fundamental Rights',
                     ne: 'मौलिक अधिकार संरक्षणमा सर्वोच्च अदालतको भूमिका' },
    'art-3-excerpt': { en: 'Examining landmark writs and public interest litigations filed before Nepal's Supreme Court that have shaped the interpretation of constitutional fundamental rights.',
                       ne: 'नेपालको सर्वोच्च अदालतमा दायर भएका महत्त्वपूर्ण रिट र सार्वजनिक हित मुद्दाहरूको परीक्षण जसले संवैधानिक मौलिक अधिकारको व्याख्यालाई आकार दिएका छन्।' },

    // ── CONTACT ───────────────────────────────────────────────
    'contact-section-title':    { en: 'Contact Me',            ne: 'सम्पर्क गर्नुहोस्' },
    'contact-section-subtitle': { en: 'Reach out for internship enquiries, collaborations, or any queries.',
                                   ne: 'इन्टर्नसिप सोधपुछ, सहकार्य वा कुनै प्रश्नका लागि सम्पर्क गर्नुहोस्।' },
    'contact-info-address-title': { en: 'Address',             ne: 'ठेगाना' },
    'contact-info-address-value': { en: 'Kirtipur, Kathmandu, Nepal', ne: 'किर्तिपुर, काठमाडौं, नेपाल' },
    'contact-info-email-title':   { en: 'Email Address',       ne: 'इमेल ठेगाना' },
    'contact-info-phone-title':   { en: 'Phone Number',        ne: 'फोन नम्बर' },
    'contact-info-hours-title':   { en: 'Response Hours',      ne: 'प्रतिक्रिया समय' },
    'contact-info-hours-value':   { en: 'Sunday – Friday, 9:00 AM – 5:00 PM', ne: 'आइतबार – शुक्रबार, बिहान ९:०० – साँझ ५:००' },

    'form-title':         { en: 'Send a Message',          ne: 'सन्देश पठाउनुहोस्' },
    'form-subtitle':      { en: 'Fill in the form and I will respond within 24 hours.', ne: 'फारम भर्नुहोस्, म २४ घण्टाभित्र जवाफ दिनेछु।' },
    'form-fname':         { en: 'First Name',              ne: 'पहिलो नाम' },
    'form-lname':         { en: 'Last Name',               ne: 'थर' },
    'form-email':         { en: 'Email Address',           ne: 'इमेल ठेगाना' },
    'form-phone':         { en: 'Phone Number',            ne: 'फोन नम्बर' },
    'form-subject':       { en: 'Subject',                 ne: 'विषय' },
    'form-subject-opt-1': { en: 'Internship Enquiry',      ne: 'इन्टर्नसिप सोधपुछ' },
    'form-subject-opt-2': { en: 'Research Collaboration',  ne: 'अनुसन्धान सहकार्य' },
    'form-subject-opt-3': { en: 'Article / Publication',   ne: 'लेख / प्रकाशन' },
    'form-subject-opt-4': { en: 'General Enquiry',         ne: 'सामान्य सोधपुछ' },
    'form-subject-opt-5': { en: 'Other',                   ne: 'अन्य' },
    'form-message':       { en: 'Your Message',            ne: 'तपाईंको सन्देश' },
    'form-submit':        { en: 'Send Message',            ne: 'सन्देश पठाउनुहोस्' },
    'form-notice':        { en: 'Your information is kept strictly confidential and will not be shared with any third party.', ne: 'तपाईंको जानकारी कडाइका साथ गोप्य राखिनेछ र कुनै तेस्रो पक्षसँग साझा गरिने छैन।' },

    // ── FOOTER ───────────────────────────────────────────────
    'footer-about':       { en: 'A passionate 5th semester Law student at Tribhuvan University, dedicated to justice, human rights, and the rule of law in Nepal.',
                            ne: 'त्रिभुवन विश्वविद्यालयमा पाँचौं सेमेस्टरका एक उत्साही कानून विद्यार्थी, जो नेपालमा न्याय, मानव अधिकार र कानुनी शासनप्रति समर्पित छन्।' },
    'footer-quicklinks':  { en: 'Quick Links',             ne: 'द्रुत लिंकहरू' },
    'footer-legalwork':   { en: 'Legal Work',              ne: 'कानुनी कार्य' },
    'footer-getintouch':  { en: 'Get In Touch',            ne: 'सम्पर्कमा आउनुहोस्' },
    'footer-copyright':   { en: '© 2025 Aarav Sharma. All Rights Reserved.',
                            ne: '© २०२५ आरव शर्मा। सर्वाधिकार सुरक्षित।' },
    'footer-privacy':     { en: 'Privacy Policy',          ne: 'गोपनीयता नीति' },
    'footer-disclaimer':  { en: 'Disclaimer',              ne: 'अस्वीकरण' },
    'footer-sitemap':     { en: 'Sitemap',                 ne: 'साइटम्याप' },

    // ── CTA ──────────────────────────────────────────────────
    'cta-title':   { en: 'Interested in Working Together?', ne: 'सँगै काम गर्न चाहनुहुन्छ?' },
    'cta-desc':    { en: 'Whether you need a legal research collaborator, an intern, or just want to discuss ideas — I would love to connect.', ne: 'चाहे तपाईंलाई कानुनी अनुसन्धान सहयोगी, इन्टर्न वा विचार विमर्श गर्ने साथी चाहिएको होस् — म जोडिन चाहन्छु।' },
    'cta-btn-contact': { en: 'Get In Touch', ne: 'सम्पर्क गर्नुहोस्' },
    'cta-btn-cv':      { en: 'Download CV',  ne: 'सिभी डाउनलोड गर्नुहोस्' },

    // ── ABOUT PAGE ───────────────────────────────────────────
    'about-page-title': { en: 'About Me', ne: 'मेरो बारेमा' },
    'about-page-desc':  { en: 'My academic background, experiences, and aspirations in law.', ne: 'कानूनमा मेरो शैक्षिक पृष्ठभूमि, अनुभव र आकांक्षाहरू।' },
    'education-title':  { en: 'Educational Background', ne: 'शैक्षिक पृष्ठभूमि' },
    'experience-title': { en: 'Experience & Activities', ne: 'अनुभव र गतिविधिहरू' },

    // ── PRACTICE AREAS PAGE ──────────────────────────────────
    'practice-page-title': { en: 'Areas of Legal Interest', ne: 'कानुनी रुचि क्षेत्रहरू' },
    'practice-page-desc':  { en: 'The legal domains I study, research, and am passionate about.', ne: 'ती कानुनी क्षेत्रहरू जहाँ म अध्ययन, अनुसन्धान गर्छु र उत्साही छु।' },

    // ── PROJECTS PAGE ─────────────────────────────────────────
    'projects-page-title': { en: 'My Projects', ne: 'मेरा परियोजनाहरू' },
    'projects-page-desc':  { en: 'A full catalogue of my academic, research, and community projects.', ne: 'मेरा शैक्षिक, अनुसन्धान र सामुदायिक परियोजनाहरूको पूर्ण सूची।' },

    // ── ARTICLES PAGE ─────────────────────────────────────────
    'articles-page-title': { en: 'Articles & Publications', ne: 'लेख तथा प्रकाशनहरू' },
    'articles-page-desc':  { en: 'My legal essays, research notes, and opinion pieces.', ne: 'मेरा कानुनी निबन्ध, अनुसन्धान टिप्पणी र मत लेखहरू।' },

    // ── CONTACT PAGE ─────────────────────────────────────────
    'contact-page-title': { en: 'Contact Me', ne: 'सम्पर्क गर्नुहोस्' },
    'contact-page-desc':  { en: 'For internship enquiries, collaborations, or general queries.', ne: 'इन्टर्नसिप सोधपुछ, सहकार्य वा सामान्य प्रश्नका लागि।' },

    // ── GENERAL BUTTONS ───────────────────────────────────────
    'btn-read-more':   { en: 'Read More',           ne: 'थप पढ्नुहोस्' },
    'btn-view-detail': { en: 'View Details',        ne: 'विवरण हेर्नुहोस्' },
    'btn-back-home':   { en: 'Back to Home',        ne: 'गृह पृष्ठमा फर्कनुहोस्' },
    'scroll-top-title':{ en: 'Back to Top',         ne: 'माथि जानुहोस्' },

    // ── FILTER TABS ───────────────────────────────────────────
    'filter-all':         { en: 'All',              ne: 'सबै' },
    'filter-research':    { en: 'Research',         ne: 'अनुसन्धान' },
    'filter-community':   { en: 'Community',        ne: 'सामुदायिक' },
    'filter-moot':        { en: 'Moot Court',       ne: 'मूट कोर्ट' },
    'filter-internship':  { en: 'Internship',       ne: 'इन्टर्नसिप' },
    'filter-constitutional':{ en: 'Constitutional', ne: 'संवैधानिक' },
    'filter-criminal':    { en: 'Criminal',         ne: 'फौजदारी' },
    'filter-human-rights':{ en: 'Human Rights',     ne: 'मानव अधिकार' },
    'filter-civil':       { en: 'Civil',            ne: 'दीवानी' },
  };

  // ── Current Language ─────────────────────────────────────
  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  // ── Apply Translations ───────────────────────────────────
  function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(el => {
      const key = el.getAttribute('data-lang-key');
      if (translations[key] && translations[key][lang]) {
        const text = translations[key][lang];
        // Check for specific tag types
        if (el.tagName === 'INPUT' && el.type !== 'submit') {
          el.placeholder = text;
        } else if (el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else if (el.tagName === 'OPTION') {
          el.textContent = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update HTML attribute
    document.documentElement.setAttribute('lang', lang === 'ne' ? 'ne' : 'en');

    // Toggle body class
    document.body.classList.toggle('lang-ne', lang === 'ne');

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update page direction (LTR for both)
    document.documentElement.setAttribute('dir', 'ltr');
  }

  // ── Get Translation ──────────────────────────────────────
  function t(key) {
    if (translations[key] && translations[key][currentLang]) {
      return translations[key][currentLang];
    }
    return key;
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    // Set up language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyTranslations(lang);
      });
    });

    // Apply stored/default language
    applyTranslations(currentLang);
  }

  return { init, applyTranslations, t, getCurrentLang: () => currentLang };

})();

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', LanguageManager.init);
