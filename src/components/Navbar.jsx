import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX, HiTerminal, HiDocumentText } from "react-icons/hi";
import { Link } from "react-scroll";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Certificates", to: "certificates" },
  { name: "GitHub", to: "github" },
  { name: "Contact", to: "contact" },
];

const Navbar = ({ onOpenTerminal, onOpenResume }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#08111F]/85 backdrop-blur-2xl border-b border-cyan-500/10 shadow-lg py-1"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold cursor-pointer select-none">
          <span className="text-cyan-400">Ankur</span>
          <span className="text-white">.</span>
        </h1>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              spy={true}
              offset={-80}
              onSetActive={() => setActive(item.to)}
              className={`
                relative
                cursor-pointer
                px-3.5
                py-2
                rounded-full
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  active === item.to
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,.25)]"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                }
              `}
            >
              {item.name}
              {active === item.to && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons: CLI + Theme + Resume */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeSwitcher />

          <button
            onClick={onOpenTerminal}
            className="
              flex
              items-center
              gap-2
              px-3.5
              py-2.5
              rounded-xl
              bg-cyan-950/40
              hover:bg-cyan-500/15
              border
              border-cyan-500/40
              hover:border-cyan-400
              text-cyan-300
              hover:text-cyan-200
              transition-all
              duration-300
              font-mono
              text-xs
              font-semibold
              shadow-[0_0_15px_rgba(34,211,238,0.15)]
              cursor-pointer
            "
            title="Open Interactive Developer CLI"
          >
            <HiTerminal className="text-base text-cyan-400" />
            <span>&gt;_ CLI</span>
          </button>

          <button
            onClick={onOpenResume}
            className="
              flex
              items-center
              gap-2
              px-4
              py-2.5
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              hover:scale-105
              transition
              font-semibold
              text-xs
              shadow-[0_0_20px_rgba(34,211,238,.35)]
              cursor-pointer
            "
          >
            <HiDocumentText className="text-base" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white p-1"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#08111F]/95 backdrop-blur-2xl flex flex-col items-center gap-3 py-6 px-6 border-b border-cyan-500/10">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              spy={true}
              offset={-80}
              onSetActive={() => setActive(item.to)}
              onClick={() => setMenuOpen(false)}
              className={`
                px-6
                py-2
                rounded-full
                cursor-pointer
                text-sm
                transition-all
                duration-300
                ${
                  active === item.to
                    ? "bg-cyan-500 text-black font-semibold"
                    : "text-gray-300 hover:text-cyan-400"
                }
              `}
            >
              {item.name}
            </Link>
          ))}

          <div className="w-full h-px bg-white/10 my-2"></div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenTerminal();
              }}
              className="
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                bg-cyan-950/60
                border
                border-cyan-500/40
                text-cyan-300
                font-mono
                text-xs
                font-semibold
              "
            >
              <HiTerminal className="text-base text-cyan-400" />
              <span>Open CLI</span>
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenResume();
              }}
              className="
                flex
                items-center
                gap-2
                px-4
                py-2.5
                rounded-xl
                bg-cyan-500
                text-black
                font-semibold
                text-xs
              "
            >
              <HiDocumentText className="text-base" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;