import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiPlay, mdiNewspaper, mdiCrane, mdiMagnify, mdiLeaf } from "@mdi/js";
import content from "../data/content";

export default function Home({ lang }) {
  const t = content[lang].home;


  const services = [
    {
      icon: mdiNewspaper,
      title: lang === "ar" ? "تقارير ميدانية" : "Field Reports",
      desc: lang === "ar"
        ? "تجوال بين المحافظات لتوثيق الواقع ورصد ما يجري على أرض الحدث بعين المراسل"
        : "Traveling across governorates to document reality and cover events on the ground",
    },
    {
      icon: mdiCrane,
      title: lang === "ar" ? "رصد مشاريع الدولة" : "Government Project Coverage",
      desc: lang === "ar"
        ? "متابعة وتغطية مشاريع البنية التحتية كالطرق والجسور والمرافق العامة"
        : "Covering infrastructure projects including roads, bridges, and public facilities",
    },
    {
      icon: mdiMagnify,
      title: lang === "ar" ? "محتوى رقابي" : "Accountability Content",
      desc: lang === "ar"
        ? "تسليط الضوء على الإشكاليات والإهمال وكذلك الإنجازات والتحسينات الحكومية"
        : "Highlighting neglected issues and praising real government achievements with transparency",
    },
    {
      icon: mdiLeaf,
      title: lang === "ar" ? "تغطية البيئة والتطوير" : "Environment & Development",
      desc: lang === "ar"
        ? "توثيق مشاريع الأنهار والتشجير والطاقة وكل ما يمس البيئة والتطوير المحلي"
        : "Documenting river restoration, tree planting, energy, and local development projects",
    },
  ];

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0a0f0e" }}>
        {/* Background image with multi-layer overlay */}
        <div className="absolute inset-0">
          <img
            src="/cover.webp"
            alt=""
            loading="eager"
            decoding="async"
            fetchpriority="high"
            style={{
              width: "100%", height: "100%", objectFit: "cover", objectPosition: "center",
              filter: "brightness(0.35) saturate(0.8)",
            }}
          />
          {/* Gradient layers */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(100deg, rgba(10,15,14,0.97) 0%, rgba(10,15,14,0.80) 45%, rgba(10,15,14,0.30) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 20% 60%, rgba(128,24,46,0.18) 0%, transparent 60%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 80% 30%, rgba(28,40,38,0.5) 0%, transparent 55%)",
          }} />
        </div>

        {/* Animated decorative lines */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          {[0.08, 0.25, 0.6, 0.78].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 1.5, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: `${pos * 100}%`,
                top: 0, bottom: 0,
                width: "1px",
                background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(128,24,46,0.08) 60%, transparent 100%)",
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16"
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-screen pt-28 pb-16">

            {/* ── LEFT / TEXT SIDE ── */}
            <div className="flex-1 max-w-2xl">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: lang === "ar" ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}
              >
                <span style={{
                  width: "28px", height: "2px",
                  background: "linear-gradient(to right, #80182e, transparent)",
                  display: "inline-block",
                }} />
                <span style={{
                  fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em",
                  color: "rgba(224,160,176,0.9)", textTransform: "uppercase",
                }}>
                  {lang === "ar" ? "صحفي ميداني · صانع محتوى" : "Field Journalist · Content Creator"}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: "clamp(30px, 7vw, 80px)",
                  fontWeight: "700",
                  lineHeight: "1",
                  color: "#fff",
                  marginBottom: "16px",
                }}
              >
                {t.heroTitle1}
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #80182e 0%, #c4374f 50%, #80182e 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                  display: "inline-block",
                }}>
                  {t.heroTitle2}
                </span>
              </motion.h1>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  width: "80px", height: "3px", borderRadius: "2px",
                  background: "linear-gradient(to right, #80182e, rgba(128,24,46,0.3))",
                  marginBottom: "24px",
                  transformOrigin: lang === "ar" ? "right" : "left",
                }}
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
                style={{
                  fontSize: "17px", lineHeight: "1.8",
                  color: "rgba(210,220,216,0.75)",
                  marginBottom: "40px",
                  maxWidth: "520px",
                }}
              >
                {t.heroDesc}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
              >
                <Link
                  to="/contact"
                  style={{
                    padding: "14px 32px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #80182e 0%, #a02040 100%)",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "15px",
                    boxShadow: "0 8px 30px rgba(128,24,46,0.45)",
                    transition: "all 0.25s ease",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 14px 40px rgba(128,24,46,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(128,24,46,0.45)";
                  }}
                >
                  {t.heroCTA1}
                </Link>
                <Link
                  to="/portfolio"
                  style={{
                    padding: "14px 32px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(8px)",
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: "600",
                    fontSize: "15px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon path={mdiPlay} size={0.55} style={{ opacity: 0.7 }} />
                  {t.heroCTA2}
                </Link>
              </motion.div>

              {/* Quick stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{
                  display: "flex",
                  gap: "32px",
                  marginTop: "52px",
                  paddingTop: "32px",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { n: "688K+", label: lang === "ar" ? "متابع" : "Followers" },
                  { n: "1748+", label: lang === "ar" ? "منشور" : "Posts" },
                  { n: "50M+", label: lang === "ar" ? "مشاهدات" : "Reach" },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: lang === "ar" ? "right" : "left" }}>
                    <div style={{
                      fontSize: "22px", fontWeight: "800", color: "#fff",
                      lineHeight: "1.2",
                    }}>{s.n}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "3px", fontWeight: "500" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT / PHOTO SIDE ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: lang === "ar" ? -60 : 60 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex flex-col items-center"
              style={{ flexShrink: 0 }}
            >
              {/* Photo frame */}
              <div style={{ position: "relative" }}>
                {/* Glow ring */}
                <div style={{
                  position: "absolute", inset: "-3px",
                  borderRadius: "28px",
                  background: "linear-gradient(135deg, rgba(128,24,46,0.8) 0%, rgba(28,40,38,0.5) 50%, rgba(128,24,46,0.4) 100%)",
                  filter: "blur(12px)",
                  zIndex: 0,
                }} />
                {/* Photo */}
                <div style={{
                  position: "relative", zIndex: 1,
                  width: "340px", height: "420px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(128,24,46,0.3)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}>
                  <img
                    src="/profli.webp"
                    alt="Yaman Al-Sayed"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                    }}
                  />
                  {/* Inner gradient overlay */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                    background: "linear-gradient(to top, rgba(10,15,14,0.8) 0%, transparent 100%)",
                  }} />
                  {/* Name tag */}
                  <div style={{
                    position: "absolute", bottom: "20px", left: "16px", right: "16px",
                    background: "rgba(10,15,14,0.75)",
                    backdropFilter: "blur(16px)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}>
                    <div style={{ fontSize: "15px", fontWeight: "700", color: "#fff" }}>
                      {lang === "ar" ? "يمان السيد" : "Yaman Al-Sayed"}
                    </div>
                    <div style={{ fontSize: "12px", color: "rgba(224,160,176,0.8)", marginTop: "2px" }}>
                      {lang === "ar" ? "صحفي ميداني" : "Field Journalist"}
                    </div>
                  </div>
                </div>

                {/* Floating badge — top */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: "-18px",
                    [lang === "ar" ? "left" : "right"]: "-22px",
                    background: "linear-gradient(135deg, #80182e, #a02040)",
                    borderRadius: "14px",
                    padding: "10px 16px",
                    boxShadow: "0 8px 24px rgba(128,24,46,0.5)",
                    zIndex: 2,
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "800", color: "#fff", lineHeight: 1 }}>688K</div>
                  <div style={{ fontSize: "10px", color: "rgba(255,200,210,0.9)", fontWeight: "500" }}>
                    {lang === "ar" ? "متابع" : "Followers"}
                  </div>
                </motion.div>

                {/* Floating badge — bottom */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                  style={{
                    position: "absolute",
                    bottom: "80px",
                    [lang === "ar" ? "right" : "left"]: "-28px",
                    background: "rgba(28,40,38,0.95)",
                    borderRadius: "14px",
                    padding: "10px 16px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    zIndex: 2,
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "800", color: "#fff", lineHeight: 1 }}>50M+</div>
                  <div style={{ fontSize: "10px", color: "rgba(210,220,216,0.7)", fontWeight: "500" }}>
                    {lang === "ar" ? "مشاهدة" : "Views"}
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            color: "rgba(255,255,255,0.3)", fontSize: "11px", zIndex: 10, letterSpacing: "0.1em",
          }}
        >
          <Icon path={mdiChevronDown} size={0.7} />
        </motion.div>

        {/* Shimmer keyframes */}
        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
        `}</style>
      </section>



      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(128,24,46,0.08)", color: "#80182e" }}
            >
              {t.servicesTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">{t.servicesDesc}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 transition-all duration-300 cursor-pointer"
                style={{ transition: "all 0.3s" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(128,24,46,0.04)";
                  e.currentTarget.style.borderColor = "rgba(128,24,46,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, rgba(128,24,46,0.1), rgba(28,40,38,0.1))" }}>
                  <Icon path={s.icon} size={1} style={{ color: "#80182e" }} />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300"
              style={{ backgroundColor: "#1c2826" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#80182e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1c2826")}
            >
              {lang === "ar" ? "عرض جميع الخدمات" : "View All Services"}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LATEST WORK ===== */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">{t.workTitle}</h2>
            <p className="text-gray-500">{t.workDesc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tag: lang === "ar" ? "تقرير ميداني" : "Field Report", title: lang === "ar" ? "تقرير ميداني – الحياة اليومية" : "Field Report – Daily Life", partner: "Al Jazeera" },
              { tag: lang === "ar" ? "حملة" : "Campaign", title: lang === "ar" ? "حملة رمضان يجمعنا" : "Ramadan Campaign", partner: "Brand Dubai" },
              { tag: lang === "ar" ? "تغطية" : "Coverage", title: lang === "ar" ? "تغطية إكسبو 2025" : "Expo 2025 Coverage", partner: "Expo Dubai" },
            ].map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="h-52 relative overflow-hidden flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(28,40,38,0.08), rgba(128,24,46,0.06))" }}
                >
                  <img src="/logo.webp" alt="" className="w-20 opacity-15" />
                  <span
                    className="absolute top-4 right-4 px-3 py-1 text-white text-xs rounded-full font-semibold"
                    style={{ background: "#80182e" }}
                  >
                    {work.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{work.title}</h3>
                  <p className="text-sm font-medium" style={{ color: "#80182e" }}>{work.partner}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 font-semibold transition-all duration-300"
              style={{ borderColor: "#1c2826", color: "#1c2826" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1c2826";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1c2826";
              }}
            >
              {lang === "ar" ? "عرض كل الأعمال" : "View All Work"}
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
