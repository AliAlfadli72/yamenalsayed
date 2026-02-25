import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Icon from "@mdi/react";
import {
  mdiInstagram,
  mdiYoutube,
  mdiMusicNote,
  mdiEmail,
  mdiArrowUp,
  mdiNewspaper,
  mdiMapMarker,
  mdiChevronLeft,
  mdiChevronRight,
} from "@mdi/js";
import content from "../data/content";

/* ── animated news ticker items ── */
const TICKER_AR = [
  "📡 تغطية ميدانية مباشرة من قلب الحدث",
  "🏗️ رصد مشاريع الدولة والبنية التحتية",
  "📰 محتوى صحفي أمين وموثوق",
  "🎥 إنتاج إعلامي احترافي عالي الجودة",
  "🌍 688 ألف متابع على إنستغرام",
  "📊 أكثر من 50 مليون مشاهدة شهرياً",
];
const TICKER_EN = [
  "📡 Live field coverage from the heart of events",
  "🏗️ Monitoring state projects & infrastructure",
  "📰 Honest & trusted journalistic content",
  "🎥 Professional high-quality media production",
  "🌍 688K+ followers on Instagram",
  "📊 50M+ monthly views",
];

export default function Footer({ lang }) {
  const t = content[lang].footer;
  const nav = content[lang].nav;
  const isRtl = lang === "ar";
  const TICKER = isRtl ? TICKER_AR : TICKER_EN;

  const [scrollUp, setScrollUp] = useState(false);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [tickerVisible, setTickerVisible] = useState(true);
  const [hoverLink, setHoverLink] = useState(null);
  const [hoverSocial, setHoverSocial] = useState(null);
  const [time, setTime] = useState(new Date());
  const counterRef = useRef(null);
  const [counters, setCounters] = useState({ follows: 0, views: 0, engagement: 0 });

  /* live clock */
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  /* scroll-to-top visibility */
  useEffect(() => {
    const fn = () => setScrollUp(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* ticker rotation */
  useEffect(() => {
    const id = setInterval(() => {
      setTickerVisible(false);
      setTimeout(() => {
        setTickerIdx((i) => (i + 1) % TICKER.length);
        setTickerVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(id);
  }, [TICKER.length]);

  /* animated counters on intersection */
  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const duration = 1800;
      const start = performance.now();
      const animate = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setCounters({
          follows: Math.round(ease * 688),
          views:   Math.round(ease * 50),
          engagement: +(ease * 8.2).toFixed(1),
        });
        if (p < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const links = [
    { to: "/", label: nav.home },
    { to: "/about", label: nav.about },
    { to: "/portfolio", label: nav.portfolio },
    { to: "/services", label: nav.services },
    { to: "/contact", label: nav.contact },
  ];

  const socials = [
    {
      icon: mdiInstagram,
      href: "https://instagram.com/yamanalssayed",
      label: "Instagram",
      bg: "linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
    },
    {
      icon: mdiYoutube,
      href: "#",
      label: "YouTube",
      bg: "linear-gradient(135deg,#ff0000,#990000)",
    },
    {
      icon: mdiMusicNote,
      href: "#",
      label: "TikTok",
      bg: "linear-gradient(135deg,#010101,#69C9D0)",
    },
    {
      icon: mdiEmail,
      href: "mailto:yaman@example.com",
      label: "Email",
      bg: "linear-gradient(135deg,#80182e,#e8294e)",
    },
  ];

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <>
      <footer
        dir={isRtl ? "rtl" : "ltr"}
        style={{
          background: "#07100f",
          fontFamily: "'Tajawal','Segoe UI',sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ══════════════════════════════════════════
            BREAKING NEWS TICKER BAR
        ══════════════════════════════════════════ */}
        <div style={{
          background: "#80182e",
          display: "flex",
          alignItems: "center",
          gap: "0",
          overflow: "hidden",
          height: "42px",
          position: "relative",
        }}>
          {/* BREAKING badge */}
          <div style={{
            background: "#fff",
            color: "#80182e",
            fontWeight: "900",
            fontSize: "11px",
            letterSpacing: "0.14em",
            padding: "0 18px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            flexShrink: 0,
            zIndex: 2,
            gap: "6px",
          }}>
            <span style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#80182e",
              animation: "blink 1s step-start infinite",
              display: "inline-block",
            }} />
            {isRtl ? "عاجل" : "LIVE"}
          </div>

          {/* Ticker text */}
          <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            overflow: "hidden",
          }}>
            <span style={{
              color: "#fff",
              fontSize: "13px",
              fontWeight: "500",
              whiteSpace: "nowrap",
              opacity: tickerVisible ? 1 : 0,
              transform: tickerVisible ? "translateY(0)" : "translateY(-8px)",
              transition: "all 0.4s ease",
              letterSpacing: "0.02em",
            }}>
              {TICKER[tickerIdx]}
            </span>
          </div>

          {/* Live clock */}
          <div style={{
            flexShrink: 0,
            padding: "0 20px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "12px",
            fontWeight: "700",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "0.08em",
          }}>
            {pad(time.getHours())}:{pad(time.getMinutes())}:{pad(time.getSeconds())}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            MAIN BODY
        ══════════════════════════════════════════ */}
        <div style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "72px 40px 56px",
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }} className="f-grid">

          {/* ── COL 1: BRAND ── */}
          <div>
            {/* Logo card */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: "28px",
            }}>
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "#fff",
                padding: "8px",
                boxShadow: "0 0 0 1px rgba(128,24,46,0.3), 0 0 30px rgba(128,24,46,0.2), 0 8px 24px rgba(0,0,0,0.5)",
                flexShrink: 0,
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05) rotate(-2deg)";
                  e.currentTarget.style.boxShadow = "0 0 0 2px rgba(128,24,46,0.5), 0 0 50px rgba(128,24,46,0.35), 0 12px 32px rgba(0,0,0,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0)";
                  e.currentTarget.style.boxShadow = "0 0 0 1px rgba(128,24,46,0.3), 0 0 30px rgba(128,24,46,0.2), 0 8px 24px rgba(0,0,0,0.5)";
                }}
              >
                <img src="/logo.webp" alt="Yaman Al-Sayed" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>

              <div>
                <div style={{ fontSize: "22px", fontWeight: "900", color: "#fff", lineHeight: 1.1 }}>
                  {isRtl ? "يمان السيد" : "Yaman Al-Sayed"}
                </div>
                <div style={{
                  fontSize: "11px",
                  color: "#80182e",
                  fontWeight: "700",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: "5px",
                }}>
                  {isRtl ? "صحفي • منشئ محتوى" : "Journalist • Creator"}
                </div>
              </div>
            </div>

            {/* Description */}
            <p style={{
              fontSize: "13.5px",
              color: "rgba(155,170,167,0.6)",
              lineHeight: "1.9",
              marginBottom: "28px",
              maxWidth: "340px",
              borderRight: isRtl ? "2px solid rgba(128,24,46,0.4)" : "none",
              borderLeft: isRtl ? "none" : "2px solid rgba(128,24,46,0.4)",
              paddingRight: isRtl ? "16px" : "0",
              paddingLeft: isRtl ? "0" : "16px",
            }}>
              {isRtl
                ? "صوت الميدان من قلب الحدث — يرصد مشاريع الدولة والبنية التحتية بعين الصحفي الأمين."
                : "Voice from the field — tracking state projects and infrastructure with honest journalism."}
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: hoverSocial === s.label ? s.bg : "rgba(255,255,255,0.04)",
                    border: `1px solid ${hoverSocial === s.label ? "transparent" : "rgba(255,255,255,0.07)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: hoverSocial === s.label ? "#fff" : "rgba(160,175,172,0.5)",
                    textDecoration: "none",
                    transition: "all 0.25s cubic-bezier(.4,0,.2,1)",
                    transform: hoverSocial === s.label ? "translateY(-4px) scale(1.1)" : "none",
                    boxShadow: hoverSocial === s.label ? "0 12px 28px rgba(128,24,46,0.35)" : "none",
                  }}
                  onMouseEnter={() => setHoverSocial(s.label)}
                  onMouseLeave={() => setHoverSocial(null)}
                >
                  <Icon path={s.icon} size={0.85} />
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 2: LINKS ── */}
          <div>
            <h4 style={{
              fontSize: "10px",
              fontWeight: "800",
              color: "rgba(128,24,46,0.9)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <Icon path={mdiNewspaper} size={0.6} />
              {t.quickLinks}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      fontSize: "13.5px",
                      color: hoverLink === link.to ? "#fff" : "rgba(148,163,160,0.55)",
                      background: hoverLink === link.to ? "rgba(128,24,46,0.18)" : "transparent",
                      border: `1px solid ${hoverLink === link.to ? "rgba(128,24,46,0.35)" : "transparent"}`,
                      textDecoration: "none",
                      fontWeight: hoverLink === link.to ? "600" : "400",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={() => setHoverLink(link.to)}
                    onMouseLeave={() => setHoverLink(null)}
                  >
                    <Icon
                      path={isRtl ? mdiChevronLeft : mdiChevronRight}
                      size={0.5}
                      style={{
                        color: hoverLink === link.to ? "#e8294e" : "rgba(128,24,46,0.3)",
                        transform: hoverLink === link.to
                          ? `translateX(${isRtl ? "-3px" : "3px"})`
                          : "translateX(0)",
                        transition: "transform 0.2s, color 0.2s",
                      }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: STATS (animated counters) ── */}
          <div ref={counterRef}>
            <h4 style={{
              fontSize: "10px",
              fontWeight: "800",
              color: "rgba(128,24,46,0.9)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <Icon path={mdiMapMarker} size={0.6} />
              {isRtl ? "بالأرقام" : "By Numbers"}
            </h4>

            {/* Stat cards */}
            {[
              { value: `${counters.follows}K+`, sub: isRtl ? "متابع إنستغرام" : "Instagram Followers", accent: "#e8294e" },
              { value: `${counters.views}M+`, sub: isRtl ? "مشاهدة شهرياً" : "Monthly Views", accent: "#c0304f" },
              { value: `${counters.engagement}%`, sub: isRtl ? "معدل التفاعل" : "Engagement Rate", accent: "#80182e" },
            ].map((stat, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "14px 16px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.05)",
                marginBottom: "8px",
                transition: "all 0.25s",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(128,24,46,0.12)";
                  e.currentTarget.style.borderColor = "rgba(128,24,46,0.3)";
                  e.currentTarget.style.transform = isRtl ? "translateX(-3px)" : "translateX(3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div style={{
                  width: "4px",
                  height: "36px",
                  borderRadius: "2px",
                  background: stat.accent,
                  flexShrink: 0,
                  boxShadow: `0 0 10px ${stat.accent}99`,
                }} />
                <div>
                  <div style={{
                    fontSize: "20px",
                    fontWeight: "900",
                    color: "#fff",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "11px",
                    color: "rgba(140,155,152,0.55)",
                    marginTop: "3px",
                  }}>
                    {stat.sub}
                  </div>
                </div>
              </div>
            ))}

            {/* Contact email */}
            <a
              href="mailto:yaman@example.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "16px",
                padding: "10px 14px",
                borderRadius: "10px",
                background: "rgba(128,24,46,0.1)",
                border: "1px solid rgba(128,24,46,0.2)",
                color: "rgba(200,180,185,0.7)",
                textDecoration: "none",
                fontSize: "12.5px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(128,24,46,0.22)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "rgba(128,24,46,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(128,24,46,0.1)";
                e.currentTarget.style.color = "rgba(200,180,185,0.7)";
                e.currentTarget.style.borderColor = "rgba(128,24,46,0.2)";
              }}
            >
              <Icon path={mdiEmail} size={0.65} color="#80182e" />
              yaman@example.com
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            BOTTOM BAR
        ══════════════════════════════════════════ */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
        }}>
          <div style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "18px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}>
            <span style={{ fontSize: "12px", color: "rgba(110,125,122,0.4)" }}>
              {t.copyright}
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{
                width: "7px", height: "7px", borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 10px #22c55e",
                display: "inline-block",
                animation: "fp 2s ease-in-out infinite",
              }} />
              <span style={{ fontSize: "12px", color: "rgba(110,125,122,0.45)" }}>
                {isRtl ? "متاح للتعاون الإعلامي" : "Available for media collaboration"}
              </span>
            </div>

            {/* Made with journalism ❤ */}
            <span style={{ fontSize: "11px", color: "rgba(128,24,46,0.45)", letterSpacing: "0.04em" }}>
              {isRtl ? "📰 صحافة بلا حدود" : "📰 Journalism without borders"}
            </span>
          </div>
        </div>

        {/* CSS */}
        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes fp {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(0.8); }
          }
          @media (max-width: 900px) {
            .f-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
              padding: 48px 24px 40px !important;
            }
          }
        `}</style>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "28px",
          right: isRtl ? "auto" : "28px",
          left: isRtl ? "28px" : "auto",
          width: "46px",
          height: "46px",
          borderRadius: "13px",
          background: "linear-gradient(135deg,#80182e,#e8294e)",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(128,24,46,0.55)",
          opacity: scrollUp ? 1 : 0,
          transform: scrollUp ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
          pointerEvents: scrollUp ? "auto" : "none",
          zIndex: 999,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.1)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(128,24,46,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = scrollUp ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(128,24,46,0.55)";
        }}
      >
        <Icon path={mdiArrowUp} size={0.9} />
      </button>
    </>
  );
}
