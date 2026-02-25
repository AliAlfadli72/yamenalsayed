import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

function App() {
  // Default language = Arabic
  const [lang, setLang] = useState("ar");

  // Load from localStorage on first render
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLang(savedLang);
    } else {
      localStorage.setItem("lang", "ar");
    }
  }, []);

  // Toggle language
  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // Text content
  const content = {
    ar: {
      heroTitle1: "إعلام يتجاوز الكاميرا",
      heroTitle2: "ويصنع التأثير",
      heroDesc:
        "يمان السيد — صانع محتوى وصحفي ميداني يبني قصصاً إعلامية تُشاهَد… وتُحدث فرقاً.",
      cooperate: "طلب تعاون",
      watchWork: "مشاهدة الأعمال",
      aboutTitle: "من هو يمان؟",
      aboutDesc:
        "إعلامي وصحفي ميداني يمتلك حضوراً رقمياً قوياً ويقدم محتوى احترافياً يخاطب الجمهور بأسلوب عصري.",
      latestWork: "أحدث الأعمال",
      finalCTA: "جاهزون لبناء تعاون إعلامي مؤثر؟",
    },
    en: {
      heroTitle1: "Media Beyond The Camera",
      heroTitle2: "Creating Real Impact",
      heroDesc:
        "Yaman Al-Sayed — Field Journalist & Content Creator building powerful media stories that make an impact.",
      cooperate: "Work Together",
      watchWork: "View Portfolio",
      aboutTitle: "About Yaman",
      aboutDesc:
        "A field journalist and content creator with strong digital presence, delivering professional media campaigns.",
      latestWork: "Latest Work",
      finalCTA: "Ready to Build a Powerful Media Collaboration?",
    },
  };

  const t = content[lang];

  return (
    <div
      className={`bg-black text-white overflow-x-hidden ${
        lang === "ar" ? "font-body" : "font-body"
      }`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* ================= NAVBAR ================= */}
      <nav className="fixed w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">
            Yaman Al-Sayed
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-300">
            <button
              onClick={toggleLanguage}
              className="px-4 py-1 border border-white/30 rounded-full hover:bg-white hover:text-black transition"
            >
              {lang === "ar" ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            {t.heroTitle1}
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              {t.heroTitle2}
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10">
            {t.heroDesc}
          </p>

          <div className="flex justify-center gap-6">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold hover:scale-105 transition">
              {t.cooperate}
            </button>
            <button className="px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
              {t.watchWork}
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-neutral-950 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { number: "687K+", label: "Instagram Followers" },
            { number: "10M+", label: "Monthly Reach" },
            { number: "50M+", label: "Total Views" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {item.number}
              </h2>
              <p className="text-gray-500 tracking-wide">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          key={lang + "about"}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">{t.aboutTitle}</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {t.aboutDesc}
          </p>
        </motion.div>

        <div className="h-96 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-2xl" />
      </section>

      {/* ================= WORK PREVIEW ================= */}
      <section className="py-32 bg-neutral-950 px-6">
        <h2 className="text-4xl font-bold text-center mb-20">
          {t.latestWork}
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl border border-white/5"
            >
              <div className="h-64 bg-neutral-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {lang === "ar"
                    ? "مشروع إعلامي احترافي"
                    : "Professional Media Project"}
                </h3>
                <p className="text-gray-500 text-sm">
                  {lang === "ar"
                    ? "تقرير ميداني أو حملة إعلامية بالتعاون مع جهة رسمية."
                    : "Field report or media campaign in collaboration with an official entity."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 text-center px-6">
        <motion.h2
          key={lang + "cta"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          {t.finalCTA}
        </motion.h2>

        <div className="flex justify-center gap-8 text-2xl">
          <a href="#" className="hover:text-yellow-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            <FaEnvelope />
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        © 2026 Yaman Al-Sayed. All rights reserved.
      </footer>
    </div>
  );
}

export default App;