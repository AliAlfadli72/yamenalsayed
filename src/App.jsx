import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ── Lazy-loaded pages (each bundles separately → faster first load)
const Home      = lazy(() => import("./pages/Home"));
const About     = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Services  = lazy(() => import("./pages/Services"));
const Contact   = lazy(() => import("./pages/Contact"));

// Lightweight page loading fallback
function PageLoader() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#06080f" }}>
      <div style={{ width: "36px", height: "36px", borderRadius: "50%", border: "3px solid rgba(128,24,46,0.2)", borderTop: "3px solid #80182e", animation: "spin 0.75s linear infinite" }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}


// Page transition wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "ar";
  });

  const toggleLanguage = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const location = useLocation();

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="bg-white text-gray-900 overflow-x-hidden">
      <ScrollToTop />
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />

      <main>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home lang={lang} />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About lang={lang} />
                </PageWrapper>
              }
            />
            <Route
              path="/portfolio"
              element={
                <PageWrapper>
                  <Portfolio lang={lang} />
                </PageWrapper>
              }
            />
            <Route
              path="/services"
              element={
                <PageWrapper>
                  <Services lang={lang} />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact lang={lang} />
                </PageWrapper>
              }
            />
            {/* 404 */}
            <Route
              path="*"
              element={
                <PageWrapper>
                  <div className="min-h-screen flex items-center justify-center text-center px-6 pt-24">
                    <div>
                      <div className="text-8xl font-black gold-text mb-4">404</div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {lang === "ar" ? "الصفحة غير موجودة" : "Page Not Found"}
                      </h1>
                      <a
                        href="/"
                        className="inline-block mt-6 px-8 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-yellow-600 transition-all"
                      >
                        {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
                      </a>
                    </div>
                  </div>
                </PageWrapper>
              }
            />
          </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;
