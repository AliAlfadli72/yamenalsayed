import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import content from "../data/content";

const SERVICES_CONFIG = [
  {
    icon: "mdi:video-box",
    gradient: "linear-gradient(135deg, #80182e, #a02040)",
    glowColor: "rgba(128,24,46,0.35)",
    bgIcon: "mdi:movie-open",
  },
  {
    icon: "mdi:city-variant-outline",
    gradient: "linear-gradient(135deg, #1c2826, #2e4640)",
    glowColor: "rgba(28,40,38,0.45)",
    bgIcon: "mdi:domain",
  },
  {
    icon: "mdi:bullhorn-variant",
    gradient: "linear-gradient(135deg, #80182e, #601020)",
    glowColor: "rgba(128,24,46,0.35)",
    bgIcon: "mdi:bullhorn",
  },
  {
    icon: "mdi:tree",
    gradient: "linear-gradient(135deg, #1c4030, #1c2826)",
    glowColor: "rgba(28,64,48,0.45)",
    bgIcon: "mdi:leaf",
  },
];

const PROCESS_STEPS = {
  ar: [
    { icon: "mdi:phone-outline", label: "التواصل والاستشارة" },
    { icon: "mdi:map-marker-outline", label: "التخطيط الميداني" },
    { icon: "mdi:camera-outline", label: "التصوير والتوثيق" },
    { icon: "mdi:broadcast", label: "النشر والتوزيع" },
  ],
  en: [
    { icon: "mdi:phone-outline", label: "Consultation" },
    { icon: "mdi:map-marker-outline", label: "Field Planning" },
    { icon: "mdi:camera-outline", label: "Filming & Documentation" },
    { icon: "mdi:broadcast", label: "Publishing" },
  ],
};

export default function Services({ lang }) {
  const t = content[lang].services;
  const isAr = lang === "ar";
  const steps = PROCESS_STEPS[lang];

  return (
    <div dir={isAr ? "rtl" : "ltr"} style={{ background: "#f5f5f5", minHeight: "100vh" }}>

      {/* ─── HERO COVER ─── */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Cover Image */}
        <img
          src="/cover.webp"
          alt="cover"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(28,40,38,0.72) 0%, rgba(12,18,16,0.88) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(128,24,46,0.32) 0%, transparent 65%)",
          }}
        />

        {/* Animated horizontal lines */}
        {[15, 40, 65, 85].map((top, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.06 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 1.5 }}
            style={{
              position: "absolute",
              top: `${top}%`,
              left: 0,
              right: 0,
              height: 1,
              background: "rgba(255,255,255,1)",
              transformOrigin: isAr ? "right" : "left",
            }}
          />
        ))}

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px" }}>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: 36 }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "14px 22px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
              }}
            >
              <img src="/logo.webp" alt="Yaman Al-Sayed" loading="lazy" decoding="async" style={{ height: 64, objectFit: "contain" }} />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ marginBottom: 20 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "8px 20px",
                borderRadius: 999,
                background: "rgba(128,24,46,0.25)",
                border: "1px solid rgba(128,24,46,0.6)",
                color: "#f0a0b0",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                backdropFilter: "blur(8px)",
              }}
            >
              <Icon icon="mdi:star-four-points" style={{ fontSize: 14 }} />
              {t.badge}
              <Icon icon="mdi:star-four-points" style={{ fontSize: 14 }} />
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
              fontWeight: 900,
              color: "#ffffff",
              margin: "0 0 18px",
              lineHeight: 1.1,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            }}
          >
            {t.title}
          </motion.h1>

          {/* Desc */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{
              color: "rgba(200,210,205,0.9)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: 560,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            {t.desc}
          </motion.p>

          {/* Hero CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #80182e, #a02040)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(128,24,46,0.45)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(128,24,46,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(128,24,46,0.45)"; }}
            >
              <Icon icon="mdi:message-text-outline" style={{ fontSize: 18 }} />
              {t.ctaButton}
            </Link>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 32px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.22)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.16)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            >
              <Icon icon="mdi:arrow-down-circle-outline" style={{ fontSize: 18 }} />
              {isAr ? "اكتشف الخدمات" : "Explore Services"}
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            <Icon icon="mdi:chevron-double-down" style={{ fontSize: 28 }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section id="services" style={{ padding: "100px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 72 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 18px",
                borderRadius: 999,
                background: "rgba(128,24,46,0.08)",
                border: "1px solid rgba(128,24,46,0.2)",
                color: "#80182e",
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              <Icon icon="mdi:format-list-bulleted-type" style={{ fontSize: 14 }} />
              {isAr ? "الخدمات الإعلامية" : "Media Services"}
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 900,
                color: "#1c2826",
                margin: "0 0 16px",
              }}
            >
              {isAr ? "ماذا أقدّم لك؟" : "What I Offer"}
            </h2>
            <p style={{ color: "#6b7280", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              {t.desc}
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {t.services.map((service, i) => {
              const cfg = SERVICES_CONFIG[i] || SERVICES_CONFIG[0];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    padding: "36px 30px",
                    border: "1px solid rgba(28,40,38,0.08)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "default",
                  }}
                >
                  {/* Background large icon */}
                  <Icon
                    icon={cfg.bgIcon}
                    style={{
                      position: "absolute",
                      bottom: -20,
                      [isAr ? "left" : "right"]: -20,
                      fontSize: 120,
                      color: "rgba(28,40,38,0.04)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Icon Badge */}
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 18,
                      background: cfg.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                      boxShadow: `0 8px 24px ${cfg.glowColor}`,
                    }}
                  >
                    <Icon icon={cfg.icon} style={{ fontSize: 28, color: "#fff" }} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "#1c2826",
                      marginBottom: 12,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Desc */}
                  <p
                    style={{
                      color: "#6b7280",
                      fontSize: "0.92rem",
                      lineHeight: 1.8,
                      marginBottom: 24,
                    }}
                  >
                    {service.desc}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                      {service.features.map((f, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            fontSize: "0.88rem",
                            color: "#374151",
                          }}
                        >
                          <Icon
                            icon="mdi:check-circle"
                            style={{ fontSize: 17, color: "#80182e", flexShrink: 0 }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROCESS SECTION ─── */}
      <section style={{ padding: "100px 24px", background: "#1c2826" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 64 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 18px",
                borderRadius: 999,
                background: "rgba(128,24,46,0.25)",
                border: "1px solid rgba(128,24,46,0.5)",
                color: "#f0a0b0",
                fontSize: 13,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              <Icon icon="mdi:progress-check" style={{ fontSize: 14 }} />
              {isAr ? "كيف أعمل؟" : "How I Work"}
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 900,
                color: "#ffffff",
                margin: 0,
              }}
            >
              {isAr ? "مراحل العمل الميداني" : "The Field Work Process"}
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 24,
            }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                style={{
                  textAlign: "center",
                  padding: "36px 20px",
                  borderRadius: 20,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                }}
              >
                {/* Step Number */}
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    [isAr ? "left" : "right"]: 14,
                    width: 26,
                    height: 26,
                    borderRadius: 999,
                    background: "rgba(128,24,46,0.5)",
                    border: "1px solid rgba(128,24,46,0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#fff",
                  }}
                >
                  {i + 1}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 20,
                    background: "linear-gradient(135deg, rgba(128,24,46,0.3), rgba(128,24,46,0.1))",
                    border: "1px solid rgba(128,24,46,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Icon icon={step.icon} style={{ fontSize: 30, color: "#f0a0b0" }} />
                </div>

                <p style={{ color: "#d1d5db", fontSize: "0.95rem", fontWeight: 700, margin: 0 }}>
                  {step.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 32,
              textAlign: "center",
            }}
          >
            {[
              { icon: "mdi:instagram", value: "688K+", label: isAr ? "متابع" : "Followers", color: "#e1306c" },
              { icon: "mdi:eye-outline", value: "50M+", label: isAr ? "مشاهدة" : "Views", color: "#80182e" },
              { icon: "mdi:map-marker-multiple", value: "14+", label: isAr ? "محافظة" : "Governorates", color: "#1c2826" },
              { icon: "mdi:video-outline", value: "500+", label: isAr ? "تقرير" : "Reports", color: "#80182e" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon icon={stat.icon} style={{ fontSize: 36, color: stat.color, marginBottom: 12 }} />
                <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#1c2826", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ color: "#6b7280", fontSize: "0.9rem", marginTop: 6 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section
        style={{
          padding: "100px 24px",
          position: "relative",
          overflow: "hidden",
          background: "#1c2826",
        }}
      >
        {/* glow orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(128,24,46,0.22) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", position: "relative", zIndex: 2 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 22,
              background: "linear-gradient(135deg, #80182e, #a02040)",
              boxShadow: "0 12px 36px rgba(128,24,46,0.45)",
              marginBottom: 28,
            }}
          >
            <Icon icon="mdi:handshake-outline" style={{ fontSize: 36, color: "#fff" }} />
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
              fontWeight: 900,
              color: "#fff",
              margin: "0 0 16px",
            }}
          >
            {t.ctaTitle}
          </h2>
          <p style={{ color: "rgba(200,210,205,0.8)", marginBottom: 40, fontSize: "1.05rem" }}>
            {t.ctaDesc}
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 38px",
                borderRadius: 999,
                background: "linear-gradient(135deg, #80182e, #a02040)",
                color: "#fff",
                fontWeight: 800,
                fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 10px 32px rgba(128,24,46,0.45)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              <Icon icon="mdi:send-outline" style={{ fontSize: 20 }} />
              {t.ctaButton}
            </Link>
            <a
              href="https://www.instagram.com/yamanalssayed"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "15px 38px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            >
              <Icon icon="mdi:instagram" style={{ fontSize: 22 }} />
              Instagram
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
