import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Icon } from "@iconify/react";
import content from "../data/content";

/* ─────────────────────────────────────────
   PARTICLE FIELD
───────────────────────────────────────── */
function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.35 + 0.08,
    }));
    let rafId;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`;
        ctx.fill();
      });
      /* connect near particles */
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      rafId = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

/* ─────────────────────────────────────────
   TYPEWRITER
───────────────────────────────────────── */
function Typewriter({ words, style }) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[idx];
    const speed = del ? 40 : 80;
    const to = setTimeout(() => {
      if (!del) {
        setTxt(cur.slice(0, txt.length + 1));
        if (txt.length + 1 === cur.length) setTimeout(() => setDel(true), 1400);
      } else {
        setTxt(cur.slice(0, txt.length - 1));
        if (txt.length - 1 === 0) {
          setDel(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(to);
  }, [txt, del, idx, words]);
  return (
    <span style={style}>
      {txt}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
        style={{ display: "inline-block", width: "3px", height: "0.85em", background: "#e8294e", marginLeft: "3px", borderRadius: "2px", verticalAlign: "middle" }}
      />
    </span>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function Contact({ lang }) {
  const t = content[lang].contact;
  const isRtl = lang === "ar";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success
  const [focused, setFocused] = useState(null);

  /* mouse glow */
  const mx = useMotionValue(0), my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(my, { stiffness: 80, damping: 20 });
  const heroRef = useRef(null);
  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socials = [
    {
      icon: "mdi:email-fast-outline",
      label: isRtl ? "البريد الإلكتروني" : "Email",
      value: "yaman@example.com",
      href: "mailto:yaman@example.com",
      color: "#80182e",
      bg: "linear-gradient(135deg,#80182e,#c02040)",
    },
    {
      icon: "mdi:instagram",
      label: "Instagram",
      value: "@yamanalssayed",
      href: "https://instagram.com/yamanalssayed",
      color: "#e1306c",
      bg: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
    },
    {
      icon: "mdi:map-marker-outline",
      label: isRtl ? "الموقع" : "Location",
      value: isRtl ? "سوريا، دمشق" : "Syria, Damascus",
      href: null,
      color: "#1c2826",
      bg: "linear-gradient(135deg,#1c2826,#2a3d3a)",
    },
  ];

  const twWords = isRtl
    ? ["تواصل معي", "ابدأ تعاوناً", "آراء؟ شاركني", "لنبني معاً"]
    : ["Let's connect.", "Start a collab.", "Got a story?", "Build together."];

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal','Inter','Segoe UI',sans-serif", background: "#06080f", minHeight: "100vh" }}
    >

      {/* ══════════════════════════════════
          HERO — full viewport dark section
      ══════════════════════════════════ */}
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}
      >
        {/* Animated mesh gradient bg */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 20% 50%,rgba(128,24,46,0.18) 0%,transparent 60%), radial-gradient(ellipse 60% 80% at 80% 30%,rgba(28,40,38,0.4) 0%,transparent 70%), #06080f", zIndex: 0 }} />

        {/* Mouse follower glow */}
        <motion.div
          style={{
            position: "absolute",
            left: smoothX, top: smoothY,
            width: "500px", height: "500px",
            x: "-50%", y: "-50%",
            background: "radial-gradient(circle,rgba(128,24,46,0.13) 0%,transparent 65%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Particle canvas */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}><Particles /></div>

        {/* Decorative rings */}
        {[320, 520, 720].map((s, i) => (
          <motion.div
            key={i}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              top: "50%", [isRtl ? "right" : "left"]: "-80px",
              width: `${s}px`, height: `${s}px`,
              marginTop: `-${s / 2}px`,
              borderRadius: "50%",
              border: "1px solid rgba(128,24,46,0.12)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        ))}

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "120px 40px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="hero-grid">

          {/* LEFT — Copy */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e8294e", display: "inline-block", boxShadow: "0 0 14px #e8294e80" }}
              />
              <span style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "0.22em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
                {isRtl ? "تواصل مباشر" : "Direct Contact"}
              </span>
            </motion.div>

            {/* Big headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22,1,0.36,1] }}
              style={{
                fontSize: "clamp(36px,4.5vw,68px)",
                fontWeight: "900",
                color: "#fff",
                margin: "0 0 12px",
                lineHeight: 1.06,
                letterSpacing: isRtl ? "0.01em" : "-0.04em",
              }}
            >
              {isRtl ? "يمان السيد" : "Yaman Al-Sayed"}
            </motion.h1>

            {/* Typewriter */}
            <div style={{ fontSize: "clamp(18px,2.2vw,28px)", fontWeight: "700", marginBottom: "32px", minHeight: "40px" }}>
              <Typewriter words={twWords} style={{ color: "#e8294e" }} />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              style={{ fontSize: "14.5px", color: "rgba(148,163,160,0.55)", lineHeight: "1.85", marginBottom: "52px", maxWidth: "380px" }}
            >
              {t.desc}
            </motion.p>

            {/* Stats */}
            <div style={{ display: "flex", gap: "36px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {[
                { n: "688K", l: isRtl ? "متابع" : "Followers" },
                { n: "50M+", l: isRtl ? "مشاهدة / شهر" : "Views / mo" },
                { n: "<24h", l: isRtl ? "وقت الرد" : "Response" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.09 }}
                >
                  <div style={{ fontSize: "22px", fontWeight: "900", color: "#fff", letterSpacing: "-0.02em" }}>{s.n}</div>
                  <div style={{ fontSize: "10px", color: "rgba(148,163,160,0.38)", fontWeight: "600", letterSpacing: "0.06em", marginTop: "2px" }}>{s.l}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Glass form card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22,1,0.36,1] }}
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.09)",
              padding: "44px 40px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* top shimmer line */}
            <div style={{ position: "absolute", top: 0, [isRtl?"right":"left"]: "10%", width: "80%", height: "1px", background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)" }} />

            {/* Form header */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "34px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "14px", background: "linear-gradient(135deg,#80182e,#a02040)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(128,24,46,0.4)", flexShrink: 0 }}>
                <Icon icon="mdi:email-outline" style={{ fontSize: "20px", color: "#fff" }} />
              </div>
              <div>
                <h2 style={{ fontSize: "16px", fontWeight: "900", color: "#fff", margin: 0 }}>{t.formTitle}</h2>
                <p style={{ fontSize: "11.5px", color: "rgba(148,163,160,0.45)", margin: "3px 0 0" }}>
                  {isRtl ? "يسعدني الرد خلال 24 ساعة" : "I'll reply within 24 hours"}
                </p>
              </div>
            </div>

            {/* Fields */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {[
                { key: "name", label: t.nameLabel, type: "text", ph: t.namePlaceholder },
                { key: "email", label: t.emailLabel, type: "email", ph: t.emailPlaceholder },
              ].map((f) => (
                <div key={f.key}>
                  <label style={{
                    fontSize: "10.5px",
                    fontWeight: "800",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: focused === f.key ? "#e8294e" : "rgba(148,163,160,0.45)",
                    display: "block",
                    marginBottom: "7px",
                    transition: "color 0.2s",
                  }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    required
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    onFocus={() => setFocused(f.key)}
                    onBlur={() => setFocused(null)}
                    placeholder={f.ph}
                    style={{
                      width: "100%",
                      padding: "12px 15px",
                      borderRadius: "11px",
                      border: `1.5px solid ${focused === f.key ? "rgba(232,41,78,0.55)" : "rgba(255,255,255,0.08)"}`,
                      background: focused === f.key ? "rgba(232,41,78,0.06)" : "rgba(255,255,255,0.04)",
                      color: "#fff",
                      fontSize: "14px",
                      fontFamily: "'Tajawal','Segoe UI',sans-serif",
                      outline: "none",
                      transition: "all 0.22s",
                      boxShadow: focused === f.key ? "0 0 0 3px rgba(232,41,78,0.12)" : "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label style={{
                  fontSize: "10.5px",
                  fontWeight: "800",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: focused === "msg" ? "#e8294e" : "rgba(148,163,160,0.45)",
                  display: "block",
                  marginBottom: "7px",
                  transition: "color 0.2s",
                }}>
                  {t.messageLabel}
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                  placeholder={t.messagePlaceholder}
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    borderRadius: "11px",
                    border: `1.5px solid ${focused === "msg" ? "rgba(232,41,78,0.55)" : "rgba(255,255,255,0.08)"}`,
                    background: focused === "msg" ? "rgba(232,41,78,0.06)" : "rgba(255,255,255,0.04)",
                    color: "#fff",
                    fontSize: "14px",
                    fontFamily: "'Tajawal','Segoe UI',sans-serif",
                    outline: "none",
                    resize: "none",
                    transition: "all 0.22s",
                    boxShadow: focused === "msg" ? "0 0 0 3px rgba(232,41,78,0.12)" : "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "12px 16px", borderRadius: "10px",
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.25)",
                      color: "#4ade80",
                      fontSize: "13px", fontWeight: "700",
                    }}
                  >
                    <Icon icon="mdi:check-circle-outline" style={{ fontSize: "18px" }} />
                    {t.successMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  marginTop: "4px",
                  padding: "15px 24px",
                  borderRadius: "12px",
                  background: status === "success"
                    ? "linear-gradient(135deg,#15803d,#16a34a)"
                    : "linear-gradient(135deg,#80182e 0%,#c0202e 60%,#e8294e 100%)",
                  border: "none",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "800",
                  fontFamily: "'Tajawal','Segoe UI',sans-serif",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  letterSpacing: "0.06em",
                  boxShadow: "0 8px 24px rgba(128,24,46,0.45)",
                  opacity: status === "sending" ? 0.6 : 1,
                  transition: "background 0.35s, box-shadow 0.35s, opacity 0.2s",
                }}
              >
                {status === "sending" ? (
                  <span style={{ width: "18px", height: "18px", border: "2.5px solid rgba(255,255,255,0.25)", borderTop: "2.5px solid #fff", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />
                ) : status === "success" ? (
                  <><Icon icon="mdi:check" style={{ fontSize: "19px" }} /> {isRtl ? "تم الإرسال!" : "Sent!"}</>
                ) : (
                  <><Icon icon="mdi:send-circle-outline" style={{ fontSize: "19px" }} /> {t.sendBtn}</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════
          SOCIAL STRIP — bottom section
      ══════════════════════════════════ */}
      <div style={{ background: "#0b0f18", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "60px 40px" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
          {/* label */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: "11px", fontWeight: "800", letterSpacing: "0.2em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", textAlign: "center", marginBottom: "36px" }}
          >
            {isRtl ? "وسائل التواصل" : "Reach me via"}
          </motion.p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            {socials.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22,1,0.36,1] }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px rgba(0,0,0,0.4)` }}
              >
                {s.href ? (
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <SocialCard s={s} isRtl={isRtl} />
                  </a>
                ) : (
                  <SocialCard s={s} isRtl={isRtl} />
                )}
              </motion.div>
            ))}

            {/* Available card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -6 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "24px 28px",
                minWidth: "220px",
                cursor: "default",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 14px #22c55e" }}
                />
                <span style={{ fontSize: "11px", fontWeight: "800", color: "#22c55e", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {isRtl ? "متاح الآن" : "Available Now"}
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(148,163,160,0.45)", lineHeight: "1.6", margin: 0 }}>
                {isRtl ? "مفتوح للتعاون في محتوى إعلامي واستشارات" : "Open to media collaborations & consulting"}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: rgba(148,163,160,0.28); }
        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </div>
  );
}

function SocialCard({ s, isRtl }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        padding: "24px 28px",
        minWidth: "200px",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.055)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
    >
      <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", boxShadow: `0 6px 18px ${s.color}55` }}>
        <Icon icon={s.icon} style={{ fontSize: "20px", color: "#fff" }} />
      </div>
      <div style={{ fontSize: "10px", color: "rgba(148,163,160,0.35)", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "4px" }}>{s.label}</div>
      <div style={{ fontSize: "13.5px", fontWeight: "800", color: "rgba(255,255,255,0.75)" }}>{s.value}</div>
    </div>
  );
}
