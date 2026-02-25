import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiInstagram, mdiYoutube, mdiMusicNote, mdiDownload } from "@mdi/js";
import content from "../data/content";

export default function MediaKit({ lang }) {
  const t = content[lang].mediaKit;

  const platforms = [
    { icon: mdiInstagram, name: "Instagram", followers: "688K", color: "#e1306c" },
    { icon: mdiYoutube, name: "YouTube", followers: "12K", color: "#ff0000" },
    { icon: mdiMusicNote, name: "TikTok", followers: "45K", color: "#69c9d0" },
  ];

  const demographics = t.demographics || [
    { label: lang === "ar" ? "18–24 سنة" : "18–24 yrs", pct: 42 },
    { label: lang === "ar" ? "25–34 سنة" : "25–34 yrs", pct: 35 },
    { label: lang === "ar" ? "+35 سنة" : "+35 yrs", pct: 23 },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <section
        className="py-24 px-6 text-center text-white relative overflow-hidden"
        style={{ backgroundColor: "#1c2826" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(128,24,46,0.18) 0%, transparent 70%)" }}
        />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-black mb-4">{t.title}</h1>
          <p className="text-gray-400 text-lg mb-8">{t.desc}</p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #80182e, #a02040)", boxShadow: "0 8px 24px rgba(128,24,46,0.4)" }}
          >
            <Icon path={mdiDownload} size={0.85} color="white" /> {t.downloadBtn}
          </a>
        </motion.div>
      </section>

      {/* Platform Stats */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">{t.platformsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6"
                  style={{ background: "rgba(28,40,38,0.06)", color: p.color }}
                >
                  <Icon path={p.icon} size={1.2} color={p.color} />
                </div>
                <div className="text-4xl font-black brand-text mb-2">{p.followers}</div>
                <div className="text-gray-500 font-medium">{p.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">{t.audienceTitle}</h2>
          <div className="space-y-8">
            {demographics.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{d.label}</span>
                  <span className="font-black" style={{ color: "#80182e" }}>{d.pct}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #1c2826, #80182e)" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${d.pct}%` }}
                    transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center text-white"
        style={{ backgroundColor: "#1c2826" }}
      >
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-black mb-4">{t.ctaTitle}</h2>
          <p className="text-gray-400 mb-8">{t.ctaDesc}</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #80182e, #a02040)", boxShadow: "0 8px 30px rgba(128,24,46,0.4)" }}
          >
            {t.ctaButton}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
