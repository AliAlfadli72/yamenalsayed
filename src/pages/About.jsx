import { motion } from "framer-motion";
import { useState } from "react";
import content from "../data/content";

export default function About({ lang }) {
  const t = content[lang].about;
  const isRtl = lang === "ar";
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="pt-24" dir={isRtl ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{ background: "rgba(128,24,46,0.08)", color: "#80182e" }}
            >
              {t.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">{t.desc1}</p>
            <p className="text-gray-500 leading-relaxed">{t.desc2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="absolute -inset-4 rounded-3xl blur-xl"
              style={{ background: "linear-gradient(135deg, rgba(128,24,46,0.12), rgba(28,40,38,0.08))" }}
            />
            <img
              src="/foto.webp"
              alt="Yaman Al-Sayed"
              loading="lazy"
              decoding="async"
              className="relative w-full max-w-sm mx-auto rounded-2xl shadow-2xl object-cover object-top aspect-[3/4]"
            />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-8 py-4 text-center border border-gray-100">
              <div className="text-2xl font-black brand-text">688K+</div>
              <div className="text-xs text-gray-500 font-medium">
                {isRtl ? "متابع على إنستغرام" : "Instagram Followers"}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SKILLS — new dark card grid design
      ══════════════════════════════════════════ */}
      <section style={{ background: "#07100f", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 50% 0%, rgba(128,24,46,0.15) 0%, transparent 60%)",
        }} />

        {/* Top line */}
        <div style={{
          position: "absolute", top: 0, left: "10%", right: "10%", height: "2px",
          background: "linear-gradient(90deg, transparent, #80182e, #e8294e, #80182e, transparent)",
          boxShadow: "0 0 20px rgba(128,24,46,0.6)",
        }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(128,24,46,0.15)",
              border: "1px solid rgba(128,24,46,0.3)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "16px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#e8294e", boxShadow: "0 0 8px #e8294e" }} />
              <span style={{ fontSize: "11px", fontWeight: "700", color: "#e8294e", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {isRtl ? "مجالات الخبرة" : "Areas of Expertise"}
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: "900", color: "#fff", margin: 0 }}>
              {t.skillsTitle}
            </h2>
          </motion.div>

          {/* Skills grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "12px",
          }}>
            {t.skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                onMouseEnter={() => setActiveSkill(i)}
                onMouseLeave={() => setActiveSkill(null)}
                style={{
                  padding: "18px 16px",
                  borderRadius: "16px",
                  background: activeSkill === i
                    ? "linear-gradient(135deg, rgba(128,24,46,0.3), rgba(232,41,78,0.15))"
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${activeSkill === i ? "rgba(128,24,46,0.5)" : "rgba(255,255,255,0.06)"}`,
                  textAlign: "center",
                  cursor: "default",
                  transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
                  transform: activeSkill === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: activeSkill === i ? "0 12px 32px rgba(128,24,46,0.2)" : "none",
                }}
              >
                {/* Number badge */}
                <div style={{
                  fontSize: "10px",
                  fontWeight: "800",
                  color: activeSkill === i ? "#e8294e" : "rgba(128,24,46,0.4)",
                  letterSpacing: "0.1em",
                  marginBottom: "8px",
                  transition: "color 0.25s",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{
                  fontSize: "13.5px",
                  fontWeight: "600",
                  color: activeSkill === i ? "#fff" : "rgba(160,175,172,0.65)",
                  lineHeight: "1.4",
                  transition: "color 0.25s",
                }}>
                  {skill}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CAREER TIMELINE — new design
      ══════════════════════════════════════════ */}
      <section style={{ background: "#0b1614", padding: "80px 24px", position: "relative" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(28,40,38,0.8)",
              border: "1px solid rgba(128,24,46,0.25)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "16px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#80182e", boxShadow: "0 0 8px #80182e" }} />
              <span style={{ fontSize: "11px", fontWeight: "700", color: "#80182e", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {isRtl ? "المسيرة" : "Journey"}
              </span>
            </div>
            <h2 style={{ fontSize: "clamp(28px,4vw,38px)", fontWeight: "900", color: "#fff", margin: 0 }}>
              {t.careerTitle}
            </h2>
          </motion.div>

          {/* Timeline items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px", position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              [isRtl ? "right" : "left"]: "27px",
              width: "2px",
              background: "linear-gradient(to bottom, #80182e 0%, rgba(128,24,46,0.1) 100%)",
            }} />

            {t.career.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                style={{
                  display: "flex",
                  gap: "28px",
                  alignItems: "flex-start",
                  paddingBottom: i < t.career.length - 1 ? "40px" : "0",
                  ...(isRtl ? { flexDirection: "row-reverse" } : {}),
                }}
              >
                {/* Dot */}
                <div style={{
                  width: "56px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                  position: "relative",
                }}>
                  <div style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    background: "#80182e",
                    border: "3px solid #0b1614",
                    boxShadow: "0 0 0 2px #80182e, 0 0 16px rgba(128,24,46,0.5)",
                    zIndex: 1,
                    flexShrink: 0,
                  }} />
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "18px",
                  padding: "24px 28px",
                  transition: "all 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(128,24,46,0.1)";
                    e.currentTarget.style.borderColor = "rgba(128,24,46,0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(128,24,46,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Left accent bar */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    [isRtl ? "right" : "left"]: 0,
                    width: "3px",
                    background: "linear-gradient(to bottom, #80182e, transparent)",
                    borderRadius: "2px",
                  }} />

                  {/* Year badge */}
                  <div style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    background: "rgba(128,24,46,0.18)",
                    border: "1px solid rgba(128,24,46,0.3)",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: "800",
                    color: "#e8294e",
                    letterSpacing: "0.06em",
                    marginBottom: "12px",
                  }}>
                    {item.year}
                  </div>

                  <h3 style={{
                    fontSize: "18px",
                    fontWeight: "800",
                    color: "#fff",
                    margin: "0 0 8px",
                    lineHeight: 1.3,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: "13.5px",
                    color: "rgba(148,163,160,0.65)",
                    lineHeight: "1.8",
                    margin: 0,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
