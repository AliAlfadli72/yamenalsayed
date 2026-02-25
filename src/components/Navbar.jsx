import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@mdi/react";
import { mdiClose, mdiMenu } from "@mdi/js";
import content from "../data/content";

/* ── Globe Language Toggle ── */
function LangToggle({ lang, onClick, size = "md" }) {
  const [spinning, setSpinning] = useState(false);
  const isMd = size === "md";

  const handleClick = () => {
    setSpinning(true);
    onClick();
    setTimeout(() => setSpinning(false), 500);
  };

  return (
    <button
      onClick={handleClick}
      title={lang === "ar" ? "Switch to English" : "التبديل للعربية"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: isMd ? "7px" : "5px",
        padding: isMd ? "7px 14px 7px 10px" : "6px 11px 6px 8px",
        borderRadius: "50px",
        border: "1px solid rgba(255,255,255,0.11)",
        background: "rgba(255,255,255,0.04)",
        cursor: "pointer",
        backdropFilter: "blur(12px)",
        transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(128,24,46,0.5)";
        e.currentTarget.style.background = "rgba(128,24,46,0.1)";
        e.currentTarget.style.boxShadow = "0 0 18px rgba(128,24,46,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.11)";
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Globe icon — spins on click */}
      <motion.span
        animate={spinning ? { rotateY: [0, 180, 360] } : { rotateY: 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        style={{ display: "flex", alignItems: "center", transformStyle: "preserve-3d" }}
      >
        <svg
          width={isMd ? "15" : "13"}
          height={isMd ? "15" : "13"}
          viewBox="0 0 24 24"
          fill="none"
          style={{ opacity: 0.65 }}
        >
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4" ry="10" stroke="white" strokeWidth="1.5" />
          <path d="M2 12h20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4.5 7h15M4.5 17h15" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </svg>
      </motion.span>

      {/* Divider */}
      <span style={{ width: "1px", height: isMd ? "12px" : "10px", background: "rgba(255,255,255,0.15)", borderRadius: "1px" }} />

      {/* Language label with flip */}
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.22 }}
        style={{
          fontSize: isMd ? "12px" : "10px",
          fontWeight: "700",
          color: "rgba(255,255,255,0.82)",
          letterSpacing: lang === "en" ? "0.1em" : "0.02em",
          fontFamily: lang === "ar" ? "'Tajawal',sans-serif" : "'Inter',sans-serif",
          userSelect: "none",
          lineHeight: 1,
        }}
      >
        {lang === "ar" ? "EN" : "عربي"}
      </motion.span>
    </button>
  );
}

export default function Navbar({ lang, toggleLanguage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();
  const t = content[lang].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { to: "/", label: t.home },
    { to: "/about", label: t.about },
    { to: "/portfolio", label: t.portfolio },
    { to: "/services", label: t.services },
    { to: "/contact", label: t.contact },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      {/* ── MAIN NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          paddingTop: scrolled ? "0" : "12px",
        }}
      >
        <div
          className="max-w-7xl mx-auto transition-all duration-500"
          style={{
            padding: scrolled ? "0 0" : "0 20px",
          }}
        >
          <div
            className="flex items-center justify-between transition-all duration-500"
            style={{
              background: scrolled
                ? "rgba(14, 20, 18, 0.96)"
                : "rgba(14, 20, 18, 0.55)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: scrolled ? "0px" : "18px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: scrolled
                ? "0 4px 30px rgba(0,0,0,0.4)"
                : "0 8px 32px rgba(0,0,0,0.25)",
              padding: "0 20px",
              height: scrolled ? "60px" : "66px",
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center flex-shrink-0 group"
              style={{ zIndex: 10 }}
            >
              <img
                src="/logo.webp"
                alt="Yaman Al-Sayed"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                style={{
                  height: "38px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  transition: "filter 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter =
                    "brightness(0) saturate(100%) invert(13%) sepia(78%) saturate(1200%) hue-rotate(320deg) brightness(90%)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "brightness(0) invert(1)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </Link>

            {/* Desktop Links */}
            <div
              className="hidden md:flex items-center"
              style={{
                gap: "2px",
                direction: lang === "ar" ? "rtl" : "ltr",
              }}
            >
              {links.map((link) => {
                const active = isActive(link.to);
                const hovered = hoveredLink === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onMouseEnter={() => setHoveredLink(link.to)}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                      position: "relative",
                      padding: "8px 16px",
                      borderRadius: "10px",
                      fontSize: "14px",
                      fontWeight: active ? "700" : "500",
                      color: active
                        ? "#fff"
                        : hovered
                        ? "#fff"
                        : "rgba(255,255,255,0.65)",
                      background: active
                        ? "rgba(128,24,46,0.30)"
                        : hovered
                        ? "rgba(255,255,255,0.07)"
                        : "transparent",
                      border: active
                        ? "1px solid rgba(128,24,46,0.45)"
                        : "1px solid transparent",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      letterSpacing: "0.01em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {active && (
                      <span
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "#80182e",
                          flexShrink: 0,
                          boxShadow: "0 0 6px #80182e",
                        }}
                      />
                    )}
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Side: Language Toggle — Globe style */}
            <div className="hidden md:flex items-center">
              <LangToggle lang={lang} onClick={toggleLanguage} size="md" />
            </div>

            {/* Mobile: Lang + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <LangToggle lang={lang} onClick={toggleLanguage} size="sm" />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: menuOpen
                    ? "rgba(128,24,46,0.4)"
                    : "rgba(255,255,255,0.07)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Icon path={mdiClose} size={0.75} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Icon path={mdiMenu} size={0.9} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE FULL-SCREEN OVERLAY ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                zIndex: 40,
                backdropFilter: "blur(4px)",
              }}
            />

            {/* Drawer from bottom */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 250 }}
              style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                background: "rgba(14,20,18,0.98)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "28px 28px 40px",
                direction: lang === "ar" ? "rtl" : "ltr",
              }}
            >
              {/* Handle bar */}
              <div
                style={{
                  width: "40px",
                  height: "4px",
                  borderRadius: "2px",
                  background: "rgba(255,255,255,0.2)",
                  margin: "0 auto 28px",
                }}
              />

              {/* Links grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                {links.map((link, i) => {
                  const active = isActive(link.to);
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                    >
                      <Link
                        to={link.to}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "14px 16px",
                          borderRadius: "14px",
                          background: active
                            ? "rgba(128,24,46,0.25)"
                            : "rgba(255,255,255,0.05)",
                          border: `1px solid ${active ? "rgba(128,24,46,0.4)" : "rgba(255,255,255,0.07)"}`,
                          color: active ? "#fff" : "rgba(255,255,255,0.7)",
                          fontWeight: active ? "700" : "500",
                          fontSize: "15px",
                          transition: "all 0.2s",
                        }}
                      >
                        {active && (
                          <span
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: "#80182e",
                              flexShrink: 0,
                              boxShadow: "0 0 8px #80182e",
                            }}
                          />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <img
                  src="/logo.webp"
                  alt="logo"
                  loading="lazy"
                  decoding="async"
                  style={{
                    height: "28px",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.6,
                  }}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <Link
                  to="/contact"
                  style={{
                    padding: "10px 24px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #80182e, #a02040)",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "14px",
                    boxShadow: "0 4px 16px rgba(128,24,46,0.4)",
                  }}
                >
                  {lang === "ar" ? "تواصل معي" : "Contact Me"}
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
