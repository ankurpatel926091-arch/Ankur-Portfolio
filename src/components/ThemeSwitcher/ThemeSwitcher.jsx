import { useState, useEffect } from "react";
import { HiColorSwatch } from "react-icons/hi";

const themes = [
  { id: "cyan", name: "Cyber Cyan", color: "#22d3ee", borderClass: "border-cyan-400" },
  { id: "purple", name: "Neon Purple", color: "#a855f7", borderClass: "border-purple-400" },
  { id: "emerald", name: "Emerald Tech", color: "#34d399", borderClass: "border-emerald-400" },
  { id: "amber", name: "Sunset Gold", color: "#fbbf24", borderClass: "border-amber-400" }
];

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("cyan");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio_theme") || "cyan";
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId) => {
    setActiveTheme(themeId);
    localStorage.setItem("portfolio_theme", themeId);

    // Apply attribute to body / root element
    document.documentElement.setAttribute("data-theme", themeId);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 transition-all flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.15)]"
        title="Customize Color Theme"
      >
        <HiColorSwatch className="text-xl" />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-[#0F172A] border border-cyan-500/30 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in zoom-in-95 duration-200">
          <p className="text-xs font-semibold text-gray-400 mb-2 px-1">Accent Theme</p>
          <div className="space-y-1.5">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  applyTheme(theme.id);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition cursor-pointer ${
                  activeTheme === theme.id
                    ? "bg-cyan-500/20 text-white font-bold border border-cyan-500/40"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <span>{theme.name}</span>
                <span
                  className="w-3.5 h-3.5 rounded-full shadow"
                  style={{ backgroundColor: theme.color }}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
