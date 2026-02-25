import { useState } from "react";
import { motion } from "framer-motion";
import content from "../data/content";

export default function Portfolio({ lang }) {
  const t = content[lang].portfolio;
  const [activeFilter, setActiveFilter] = useState(t.filters[0]);

  const getFiltered = () => {
    if (activeFilter === t.filters[0]) return t.projects;
    const filterIndex = t.filters.indexOf(activeFilter);
    const arCats = ["الكل", "تقارير", "حملات", "تغطيات", "برامج"];
    const enCats = ["All", "Reports", "Campaigns", "Coverage", "Programs"];
    const cats = lang === "ar" ? arCats : enCats;
    return t.projects.filter((p) => p.category === cats[filterIndex]);
  };

  const displayProjects = getFiltered();

  const categoryStyle = {
    "تقارير": { bg: "rgba(59,130,246,0.12)", color: "#2563eb" },
    "حملات": { bg: "rgba(147,51,234,0.12)", color: "#7c3aed" },
    "تغطيات": { bg: "rgba(16,185,129,0.12)", color: "#059669" },
    "برامج": { bg: "rgba(249,115,22,0.12)", color: "#ea580c" },
    "Reports": { bg: "rgba(59,130,246,0.12)", color: "#2563eb" },
    "Campaigns": { bg: "rgba(147,51,234,0.12)", color: "#7c3aed" },
    "Coverage": { bg: "rgba(16,185,129,0.12)", color: "#059669" },
    "Programs": { bg: "rgba(249,115,22,0.12)", color: "#ea580c" },
  };

  return (
    <div className="pt-24 min-h-screen" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Header */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">{t.title}</h1>
          <p className="text-gray-500 text-lg">{t.desc}</p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="pb-10 px-6 sticky top-20 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 py-4">
          {t.filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                activeFilter === filter
                  ? { backgroundColor: "#1c2826", color: "#fff", boxShadow: "0 4px 12px rgba(28,40,38,0.3)" }
                  : { backgroundColor: "#f3f4f6", color: "#4b5563" }
              }
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div
                className="h-52 relative overflow-hidden flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(28,40,38,0.06), rgba(128,24,46,0.05))" }}
              >
                <img src="/logo.webp" alt="" className="w-24 opacity-15" />
                <span
                  className={`absolute top-4 ${lang === "ar" ? "right-4" : "left-4"} px-3 py-1 rounded-full text-xs font-bold`}
                  style={categoryStyle[project.category] || { bg: "rgba(128,24,46,0.1)", color: "#80182e" }}
                >
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-black text-gray-900 text-lg mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm" style={{ color: "#80182e" }}>{project.partner}</span>
                  <span className="text-gray-300 text-xs">
                    {lang === "ar" ? "عرض التقرير ←" : "View Report →"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {displayProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            {lang === "ar" ? "لا توجد أعمال في هذه الفئة" : "No projects in this category"}
          </div>
        )}
      </section>
    </div>
  );
}
