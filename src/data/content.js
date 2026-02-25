const content = {
  ar: {
    // Navbar
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      portfolio: "الأعمال",
      services: "ما أقدمه",
      mediaKit: "Media Kit",
      contact: "تواصل",
    },

    // Home Page
    home: {
      heroTitle1: "صوت الميدان",
      heroTitle2: "من قلب الحدث",
      heroDesc:
        "يمان السيد — مراسل ميداني يتنقل بين المحافظات لرصد مشاريع الدولة والبنية التحتية، ويوثّق الإنجازات والإشكاليات بعين الصحفي الأمين.",
      heroCTA1: "تواصل معي",
      heroCTA2: "شاهد تقاريري",
      statsTitle: "بالأرقام",
      followers: "متابع على إنستغرام",
      posts: "منشور",
      following: "يتابعهم",
      reach: "مشاهدة+",
      servicesTitle: "ما أقدمه",
      servicesDesc: "مراسلة ميدانية ورصد إعلامي احترافي",
      workTitle: "أحدث التقارير",
      workDesc: "من الميدان مباشرةً — تقارير حقيقية من أرض الواقع",
      ctaTitle: "تريد تغطية ميدانية أو تعاون إعلامي؟",
      ctaDesc: "تواصل معي وسأكون على أرض الحدث",
      ctaButton: "تواصل الآن",
    },

    // About Page
    about: {
      badge: "نبذة عني",
      title: "من هو يمان السيد؟",
      desc1:
        "مراسل ميداني يتجول بين المحافظات لتوثيق واقع البنية التحتية وأعمال الدولة، بحضور رقمي يتجاوز 688 ألف متابع ومشاهدات تخطّت 50 مليون.",
      desc2:
        "يرصد وبأمانة كل ما تعمله الجهات الحكومية — من إصلاح طرق وإنارة شوارع وتشجير، إلى مشاريع الأنهار والجسور والمرافق العامة. لا يجامل ولا يسكت عن خلل.",
      skillsTitle: "مجالات العمل",
      skills: [
        "مراسلة ميدانية",
        "رصد مشاريع الدولة",
        "توثيق البنية التحتية",
        "محتوى رقابي",
        "تقارير ميدانية",
        "تغطية البيئة",
        "إنتاج فيديو",
        "صحافة مواطنة",
      ],
      careerTitle: "المسيرة الميدانية",
      career: [
        {
          year: "2023 – الآن",
          title: "مراسل ميداني مستقل",
          desc: "تجوال ميداني مستمر بين المحافظات لتوثيق أعمال الدولة والبنية التحتية ونشرها عبر المنصات الرقمية.",
        },
        {
          year: "2020 – 2023",
          title: "صانع محتوى رقابي",
          desc: "بناء قاعدة جماهيرية من خلال تقارير ميدانية تتناول الواقع اليومي للمواطن والمشاريع الحكومية.",
        },
        {
          year: "2018 – 2020",
          title: "مبادرات محلية وتوثيق",
          desc: "توثيق المشاريع والمبادرات المحلية وإيصال صوت المناطق البعيدة إلى الرأي العام.",
        },
      ],
    },

    // Portfolio Page
    portfolio: {
      title: "التقارير والأعمال",
      desc: "من الميدان — تغطيات حقيقية لمشاريع ومناطق وأحداث",
      filters: [
        "الكل",
        "طرق وبنية تحتية",
        "بيئة وتشجير",
        "مشاريع الدولة",
        "رصادة وانتقاد",
      ],
      projects: [
        {
          id: 1,
          category: "طرق وبنية تحتية",
          title: "تقرير: الطريق السريع بعد الترميم",
          desc: "جولة ميدانية على أحد الطرق الرئيسية قبل وبعد أعمال الإصلاح والتعبيد.",
          partner: "جولة ميدانية",
        },
        {
          id: 2,
          category: "بيئة وتشجير",
          title: "مشروع تشجير الطريق الدولي",
          desc: "توثيق مشروع زراعة الأشجار على جانبي الطريق الدولي وأثره على البيئة.",
          partner: "وزارة البيئة",
        },
        {
          id: 3,
          category: "مشاريع الدولة",
          title: "إضاءة الطريق السريع",
          desc: "رصد مشروع استبدال لمبات الإنارة على الطريق السريع وتأثيره على سلامة السائقين.",
          partner: "بلدية المحافظة",
        },
        {
          id: 4,
          category: "بيئة وتشجير",
          title: "تنظيف وتأهيل نهر العاصي",
          desc: "تقرير ميداني عن أعمال تنظيف وتأهيل النهر وإعادة الحياة إلى مجراه.",
          partner: "تقرير ميداني",
        },
        {
          id: 5,
          category: "رصادة وانتقاد",
          title: "حفر الشوارع دون إصلاح",
          desc: "رصد حالات حفر الطرق من قِبل شركات الاتصالات دون إعادة التعبيد.",
          partner: "استقصاء ميداني",
        },
        {
          id: 6,
          category: "مشاريع الدولة",
          title: "إنشاء جسر محافظة ريف دمشق",
          desc: "متابعة مراحل بناء الجسر الجديد وأثره على حركة المرور وحياة الأهالي.",
          partner: "مشروع حكومي",
        },
      ],
    },

    // Services Page
    services: {
      badge: "ما أقدمه",
      title: "خدماتي الإعلامية",
      desc: "مراسلة ميدانية ورصد أرضي احترافي",
      ctaTitle: "تريد تغطية ميدانية؟",
      ctaDesc: "تواصل معي وأنا هناك على أرض الحدث",
      ctaButton: "تواصل الآن",
      services: [
        {
          icon: "🎥",
          title: "تقارير ميدانية",
          desc: "إنتاج تقارير مصوّرة من الميدان مباشرةً، بتنقل فعلي بين المحافظات لتوثيق الواقع كما هو.",
          features: [
            "تصوير ميداني",
            "تقرير معدّ ومنتَج",
            "بث على المنصات",
            "أرشيف رقمي",
          ],
        },
        {
          icon: "🏗️",
          title: "رصد مشاريع الدولة",
          desc: "متابعة ميدانية لمشاريع الطرق والجسور والإنارة والمرافق العامة وتوثيق مراحل تنفيذها.",
          features: [
            "متابعة دورية",
            "تقارير قبل وبعد",
            "مؤشرات الإنجاز",
            "توثيق بالصورة والفيديو",
          ],
        },
        {
          icon: "📢",
          title: "محتوى رقابي",
          desc: "تسليط الضوء على الإهمال والإشكاليات التي تمسّ المواطن، بأسلوب صحفي موضوعي وشفاف.",
          features: [
            "رصد الإشكاليات",
            "طرح للرأي العام",
            "متابعة الحلول",
            "ضغط إعلامي إيجابي",
          ],
        },
        {
          icon: "🌿",
          title: "تغطية البيئة والتطوير",
          desc: "توثيق مشاريع الأنهار والتشجير والطاقة وكل ما يتعلق بالبيئة والتطوير المحلي.",
          features: [
            "مشاريع الأنهار",
            "التشجير والخضرة",
            "الطاقة المتجددة",
            "التطوير العمراني",
          ],
        },
      ],
    },

    // Media Kit Page
    mediaKit: {
      title: "Media Kit",
      desc: "كل ما تحتاجه لمعرفة نطاق التأثير والتواصل مع الجمهور",
      platformsTitle: "إحصائيات المنصات",
      statsTitle: "إحصائيات المنصات",
      ctaTitle: "تريد تغطية أو شراكة إعلامية؟",
      ctaDesc: "تواصل معي لمناقشة تفاصيل التعاون",
      ctaButton: "تواصل الآن",
      downloadBtn: "تحميل Media Kit كـ PDF",
      stats: [
        {
          platform: "إنستغرام",
          followers: "688K+",
          reach: "50M+",
          engagement: "8.2%",
        },
        {
          platform: "يوتيوب",
          followers: "45K+",
          reach: "10M+",
          engagement: "6.5%",
        },
        {
          platform: "تيك توك",
          followers: "120K+",
          reach: "25M+",
          engagement: "11%",
        },
      ],
      audienceTitle: "الجمهور",
      audience: [
        { label: "الفئة العمرية 18-35", value: "72%" },
        { label: "الجمهور العربي", value: "85%" },
        { label: "نسبة الذكور", value: "62%" },
        { label: "سوريا ولبنان والأردن", value: "55%" },
      ],
      contactTitle: "للشراكات والتعاون",
      contactDesc:
        "تواصل معي مباشرةً لمناقشة فرص التغطية الميدانية والشراكات الإعلامية.",
      demographics: [
        { label: "18–24 سنة", pct: 42 },
        { label: "25–34 سنة", pct: 35 },
        { label: "+35 سنة", pct: 23 },
      ],
    },

    // Contact Page
    contact: {
      title: "تواصل معي",
      desc: "هل تريد تغطية ميدانية أو تعاون إعلامي؟ أنا هنا",
      formTitle: "أرسل رسالة",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      messageLabel: "الرسالة",
      namePlaceholder: "الاسم الكامل",
      emailPlaceholder: "البريد الإلكتروني",
      subjectPlaceholder: "موضوع الرسالة",
      messagePlaceholder: "اكتب رسالتك هنا...",
      sendBtn: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successMsg: "تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.",
      errorMsg: "حدث خطأ. يرجى المحاولة مجدداً.",
      directTitle: "تواصل مباشر",
      responseTitle: "وقت الاستجابة",
      responseNote:
        "أحرص على الرد خلال 24 ساعة. للتواصل السريع يمكنك مراسلتي عبر إنستغرام.",
      directContact: "تواصل مباشر",
      email: "yaman@example.com",
      instagram: "@yamanalssayed",
    },

    // Footer
    footer: {
      tagline: "مراسل ميداني يوثّق واقع المحافظات بعين أمينة",
      quickLinks: "روابط سريعة",
      followMe: "تابعني",
      copyright: "© 2026 يمان السيد. جميع الحقوق محفوظة.",
    },
  },

  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      services: "Services",
      mediaKit: "Media Kit",
      contact: "Contact",
    },

    // Home Page
    home: {
      heroTitle1: "Field Journalist",
      heroTitle2: "Documenting Reality Unfiltered",
      heroDesc:
        "Yaman Al-Sayed — A field journalist who travels across governorates documenting government projects and infrastructure, reporting achievements and failures with journalistic integrity.",
      heroCTA1: "Get In Touch",
      heroCTA2: "Watch My Reports",
      statsTitle: "By The Numbers",
      followers: "Instagram Followers",
      posts: "Posts",
      following: "Following",
      reach: "Views+",
      servicesTitle: "What I Do",
      servicesDesc: "Professional field journalism and media coverage",
      workTitle: "Latest Reports",
      workDesc: "Live from the field — real reports from the ground",
      ctaTitle: "Need Field Coverage or Media Collaboration?",
      ctaDesc: "Reach out and I'll be on the ground",
      ctaButton: "Contact Now",
    },

    // About Page
    about: {
      badge: "About Me",
      title: "Who is Yaman Al-Sayed?",
      desc1:
        "A field journalist who travels across governorates documenting government infrastructure projects, with a digital presence of over 688K followers and 50M+ views.",
      desc2:
        "He honestly covers everything governments do — from road repairs and street lighting to tree planting, river restoration, and public infrastructure. He doesn't shy away from criticism or stay silent about failures.",
      skillsTitle: "Areas of Work",
      skills: [
        "Field Journalism",
        "Government Project Monitoring",
        "Infrastructure Documentation",
        "Accountability Content",
        "Field Reports",
        "Environmental Coverage",
        "Video Production",
        "Citizen Journalism",
      ],
      careerTitle: "Career Timeline",
      career: [
        {
          year: "2023 – Present",
          title: "Independent Field Journalist",
          desc: "Continuous field travel across governorates documenting government work and infrastructure on digital platforms.",
        },
        {
          year: "2020 – 2023",
          title: "Accountability Content Creator",
          desc: "Built an audience through field reports covering daily citizen reality and government projects.",
        },
        {
          year: "2018 – 2020",
          title: "Local Initiatives & Documentation",
          desc: "Documenting local projects and initiatives, amplifying voices from remote areas to the public sphere.",
        },
      ],
    },

    // Portfolio Page
    portfolio: {
      title: "Reports & Work",
      desc: "From the field — real coverage of projects, areas, and events",
      filters: [
        "All",
        "Roads & Infrastructure",
        "Environment",
        "Gov Projects",
        "Accountability",
      ],
      projects: [
        {
          id: 1,
          category: "Roads & Infrastructure",
          title: "Report: Highway After Renovation",
          desc: "A field tour of a major road before and after repair and paving work.",
          partner: "Field Tour",
        },
        {
          id: 2,
          category: "Environment",
          title: "International Road Tree Planting Project",
          desc: "Documenting a tree planting project along the international road and its environmental impact.",
          partner: "Ministry of Environment",
        },
        {
          id: 3,
          category: "Gov Projects",
          title: "Highway Lighting Installation",
          desc: "Covering the highway lighting replacement project and its impact on driver safety.",
          partner: "Municipality",
        },
        {
          id: 4,
          category: "Environment",
          title: "Orontes River Cleanup & Restoration",
          desc: "Field report on cleanup and rehabilitation work restoring life to the river.",
          partner: "Field Report",
        },
        {
          id: 5,
          category: "Accountability",
          title: "Roads Dug Without Repair",
          desc: "Monitoring cases of roads dug by telecom companies without repaving.",
          partner: "Investigative Report",
        },
        {
          id: 6,
          category: "Gov Projects",
          title: "Rural Damascus Bridge Construction",
          desc: "Following the construction phases of a new bridge and its impact on traffic and residents.",
          partner: "Government Project",
        },
      ],
    },

    // Services Page
    services: {
      badge: "What I Do",
      title: "My Media Services",
      desc: "Professional field journalism and ground-level monitoring",
      ctaTitle: "Need Field Coverage?",
      ctaDesc: "Reach out and I'll be on the ground",
      ctaButton: "Contact Now",
      services: [
        {
          icon: "🎥",
          title: "Field Reports",
          desc: "Producing filmed reports directly from the field, with actual travel between governorates to document reality as it is.",
          features: [
            "Field Filming",
            "Edited Report",
            "Platform Publishing",
            "Digital Archive",
          ],
        },
        {
          icon: "🏗️",
          title: "Government Project Monitoring",
          desc: "Field monitoring of road, bridge, lighting, and public utility projects, documenting each phase of implementation.",
          features: [
            "Regular Follow-up",
            "Before & After Reports",
            "Progress Indicators",
            "Photo & Video Documentation",
          ],
        },
        {
          icon: "📢",
          title: "Accountability Content",
          desc: "Spotlighting neglect and issues affecting citizens, with an objective and transparent journalistic approach.",
          features: [
            "Issue Monitoring",
            "Public Exposure",
            "Solution Follow-up",
            "Positive Media Pressure",
          ],
        },
        {
          icon: "🌿",
          title: "Environment & Development Coverage",
          desc: "Documenting river, tree planting, energy, and all local environment and development projects.",
          features: [
            "River Projects",
            "Trees & Greenery",
            "Renewable Energy",
            "Urban Development",
          ],
        },
      ],
    },

    // Media Kit Page
    mediaKit: {
      title: "Media Kit",
      desc: "Everything you need to understand reach and audience engagement",
      platformsTitle: "Platform Statistics",
      statsTitle: "Platform Statistics",
      ctaTitle: "Want Coverage or a Media Partnership?",
      ctaDesc: "Reach out to discuss collaboration details",
      ctaButton: "Contact Now",
      downloadBtn: "Download Media Kit as PDF",
      stats: [
        {
          platform: "Instagram",
          followers: "688K+",
          reach: "50M+",
          engagement: "8.2%",
        },
        {
          platform: "YouTube",
          followers: "45K+",
          reach: "10M+",
          engagement: "6.5%",
        },
        {
          platform: "TikTok",
          followers: "120K+",
          reach: "25M+",
          engagement: "11%",
        },
      ],
      audienceTitle: "Audience",
      audience: [
        { label: "Age Group 18-35", value: "72%" },
        { label: "Arab Audience", value: "85%" },
        { label: "Male Audience", value: "62%" },
        { label: "Syria, Lebanon & Jordan", value: "55%" },
      ],
      contactTitle: "For Partnerships & Collaborations",
      contactDesc:
        "Reach out directly to discuss field coverage opportunities and media partnerships.",
      demographics: [
        { label: "18–24 yrs", pct: 42 },
        { label: "25–34 yrs", pct: 35 },
        { label: "+35 yrs", pct: 23 },
      ],
    },

    // Contact Page
    contact: {
      title: "Get In Touch",
      desc: "Want field coverage or media collaboration? I'm here",
      formTitle: "Send a Message",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Write your message here...",
      sendBtn: "Send Message",
      sending: "Sending...",
      successMsg:
        "Your message was sent successfully! I'll get back to you soon.",
      errorMsg: "An error occurred. Please try again.",
      directTitle: "Direct Contact",
      responseTitle: "Response Time",
      responseNote:
        "I aim to respond within 24 hours. For faster responses, reach out via Instagram.",
      directContact: "Direct Contact",
      email: "yaman@example.com",
      instagram: "@yamanalssayed",
    },

    // Footer
    footer: {
      tagline: "Field Journalist Documenting Governorates with Honest Eyes",
      quickLinks: "Quick Links",
      followMe: "Follow Me",
      copyright: "© 2026 Yaman Al-Sayed. All rights reserved.",
    },
  },
};

export default content;
