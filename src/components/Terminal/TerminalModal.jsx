import { useState, useEffect, useRef } from "react";
import { FaTimes, FaExpandAlt, FaCompressAlt } from "react-icons/fa";
import { HiTerminal } from "react-icons/hi";

const BANNER = `
   ___        _                 ___ _    ___ 
  / _ \\  _ _ | | ___  _ _ _    / __| |  |_ _|
 |  _  || ' \\| |/ / || | '_|  | (__| |__ | | 
 |_| |_||_||_|_|\\_\\_,_|_|     \\___|____|___|

⚡ Ankur Patel's Portfolio Interactive CLI [Version 1.2.0]
💡 Type 'help' or click quick buttons below to explore.
`;

const COMMANDS_LIST = [
  { cmd: "help", desc: "Show all available commands" },
  { cmd: "about", desc: "Who is Ankur Patel?" },
  { cmd: "skills", desc: "List technical skills & stack" },
  { cmd: "projects", desc: "Show featured projects" },
  { cmd: "resume", desc: "View PDF resume details" },
  { cmd: "github", desc: "View GitHub stats & profile" },
  { cmd: "experience", desc: "View work & internship experience" },
  { cmd: "certificates", desc: "Show certifications" },
  { cmd: "contact", desc: "Get contact info & social links" },
  { cmd: "hire", desc: "Recruiter / Hiring status" },
  { cmd: "clear", desc: "Clear terminal screen" },
];

const TerminalModal = ({ isOpen, onClose, onOpenResume }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "banner", text: BANNER },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, cmdText]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: "input", text: cmdText }];

    switch (trimmed) {
      case "help":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1.5 py-1">
              <p className="text-cyan-400 font-semibold">Available Commands:</p>
              {COMMANDS_LIST.map((item) => (
                <div key={item.cmd} className="grid grid-cols-[110px_1fr] gap-2 text-xs sm:text-sm">
                  <span className="text-green-400 font-mono font-bold">{item.cmd}</span>
                  <span className="text-gray-300">{item.desc}</span>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case "about":
      case "whoami":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1 text-gray-300 text-xs sm:text-sm">
              <p className="text-cyan-300 font-bold">👋 Hi, I&apos;m Ankur Patel!</p>
              <p>🚀 <strong className="text-white">Full Stack MERN Developer</strong> based in Lucknow, Uttar Pradesh.</p>
              <p>💡 I specialize in designing and developing fast, responsive, and scalable web applications using React, Node.js, Express, and MongoDB.</p>
              <p>🎯 Passionate about clean code, UI/UX perfection, and building full-stack solutions.</p>
            </div>
          ),
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-cyan-400 font-bold">🛠 Technical Stack &amp; Skills:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300">
                <div><span className="text-green-400 font-semibold">Frontend:</span> React.js, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5, CSS3</div>
                <div><span className="text-green-400 font-semibold">Backend:</span> Node.js, Express.js, RESTful APIs, JWT Auth</div>
                <div><span className="text-green-400 font-semibold">Database:</span> MongoDB, Mongoose</div>
                <div><span className="text-green-400 font-semibold">Tools &amp; Platforms:</span> Git, GitHub, VS Code, Postman, Vercel</div>
              </div>
            </div>
          ),
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-2.5 text-xs sm:text-sm">
              <p className="text-cyan-400 font-bold">📁 Featured Projects:</p>
              <div className="space-y-2">
                <div className="border-l-2 border-cyan-400 pl-3">
                  <p className="text-white font-semibold">1. MERN E-Commerce Platform</p>
                  <p className="text-gray-400">Full stack store with auth, admin dashboard &amp; stripe payments.</p>
                </div>
                <div className="border-l-2 border-green-400 pl-3">
                  <p className="text-white font-semibold">2. Library Management System</p>
                  <p className="text-gray-400">Web app for managing books, issue/return logs, and user roles.</p>
                </div>
                <div className="border-l-2 border-purple-400 pl-3">
                  <p className="text-white font-semibold">3. Developer Portfolio V2</p>
                  <p className="text-gray-400">Modern React 19 portfolio with live GitHub stats, CLI &amp; smooth animations.</p>
                </div>
              </div>
            </div>
          ),
        });
        break;

      case "resume":
      case "cat resume":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-cyan-400 font-bold">📄 Resume Document Loaded:</p>
              <p className="text-gray-300">Opening in-browser interactive PDF reader...</p>
              <button
                onClick={() => {
                  if (onOpenResume) onOpenResume();
                }}
                className="px-3 py-1.5 rounded bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition cursor-pointer"
              >
                Click here to view PDF Resume
              </button>
            </div>
          ),
        });
        if (onOpenResume) {
          setTimeout(() => onOpenResume(), 400);
        }
        break;

      case "github":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1.5 text-xs sm:text-sm text-gray-300">
              <p className="text-cyan-400 font-bold">🐙 GitHub Profile Info:</p>
              <p>Username: <span className="text-white font-mono">ankurpatel926091-arch</span></p>
              <p>Profile URL: <a href="https://github.com/ankurpatel926091-arch" target="_blank" rel="noreferrer" className="text-cyan-300 underline">https://github.com/ankurpatel926091-arch</a></p>
            </div>
          ),
        });
        break;

      case "experience":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-cyan-400 font-bold">💼 Experience &amp; Training:</p>
              <div className="space-y-2">
                <div>
                  <p className="text-white font-semibold">💻 Web Development Intern / Trainee</p>
                  <p className="text-gray-400 text-xs">Softpro India &amp; DigiCoder Structure Pvt. Ltd.</p>
                  <p className="text-gray-300">Worked on front-end UI design, REST API integration, and full-stack project building.</p>
                </div>
              </div>
            </div>
          ),
        });
        break;

      case "certificates":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p className="text-cyan-400 font-bold">📜 Certifications:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li><span className="text-white font-semibold">Softpro India</span> - Web Development Certification</li>
                <li><span className="text-white font-semibold">DigiCoder Structure</span> - MERN Stack Training</li>
                <li><span className="text-white font-semibold">Infosys Springboard</span> - Software Development Certification</li>
              </ul>
            </div>
          ),
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: (
            <div className="space-y-1.5 text-xs sm:text-sm text-gray-300">
              <p className="text-cyan-400 font-bold">📞 Contact Information:</p>
              <p>📧 Email: <a href="mailto:ankurpatel926091@gmail.com" className="text-cyan-300 underline">ankurpatel926091@gmail.com</a></p>
              <p>📱 Phone: <a href="tel:+919198370285" className="text-cyan-300 underline">+91 9198370285</a></p>
              <p>📍 Location: Lucknow, Uttar Pradesh, India</p>
            </div>
          ),
        });
        break;

      case "hire":
        newHistory.push({
          type: "output",
          text: (
            <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-400/30 text-xs sm:text-sm space-y-2">
              <p className="text-green-400 font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                Status: AVAILABLE FOR FREELANCE &amp; FULL-TIME ROLES!
              </p>
              <div className="flex gap-3 pt-1">
                <a
                  href="mailto:ankurpatel926091@gmail.com?subject=Hiring%20Inquiry%20for%20Ankur%20Patel"
                  className="px-3 py-1.5 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition"
                >
                  ✉️ Send Hiring Email
                </a>
              </div>
            </div>
          ),
        });
        break;

      case "matrix":
        newHistory.push({
          type: "output",
          text: (
            <div className="text-green-400 font-mono text-xs space-y-0.5 animate-pulse">
              <p>01000001 01101110 01101011 01110101 01110010</p>
              <p>SYSTEM INITIALIZED. WELCOME TO THE MATRIX.</p>
            </div>
          ),
        });
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInput("");
        return;

      default:
        if (trimmed.startsWith("sudo")) {
          newHistory.push({
            type: "output",
            text: (
              <p className="text-yellow-400 font-semibold">
                🔑 [SUDO ACCESS GRANTED]: Ankur Patel is officially hired! 🚀
              </p>
            ),
          });
        } else {
          newHistory.push({
            type: "error",
            text: (
              <p className="text-red-400">
                Command not recognized: &apos;<span className="text-white">{cmdText}</span>&apos;. Type &apos;<span className="text-cyan-400 underline">help</span>&apos; for valid commands.
              </p>
            ),
          });
        }
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIdx);
      setInput(commandHistory[commandHistory.length - 1 - nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md transition-all duration-300">
      <div
        className={`
          w-full
          ${isMaximized ? "max-w-7xl h-[92vh]" : "max-w-3xl h-[560px] max-h-[85vh]"}
          bg-[#0A1220]/95
          border
          border-cyan-500/30
          rounded-2xl
          shadow-[0_0_50px_rgba(34,211,238,0.2)]
          flex
          flex-col
          overflow-hidden
          transition-all
          duration-300
        `}
      >
        {/* Terminal Header Bar */}
        <div className="px-4 py-3 bg-[#060B14] border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer hover:bg-yellow-500" onClick={() => setHistory([])}></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer hover:bg-green-500" onClick={() => setIsMaximized(!isMaximized)}></span>
            <span className="ml-3 text-xs font-mono text-gray-400 flex items-center gap-1.5">
              <HiTerminal className="text-cyan-400 text-sm" />
              ankur@portfolio:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="hover:text-white transition hidden sm:block"
              title={isMaximized ? "Restore size" : "Maximize"}
            >
              {isMaximized ? <FaCompressAlt /> : <FaExpandAlt />}
            </button>
            <button
              onClick={onClose}
              className="hover:text-red-400 transition text-sm"
              title="Close Terminal (Esc)"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Terminal Quick Command Chips */}
        <div className="px-4 py-2 bg-[#08101C] border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar select-none">
          <span className="text-[11px] text-gray-500 font-mono shrink-0">Quick run:</span>
          {COMMANDS_LIST.map((item) => (
            <button
              key={item.cmd}
              onClick={() => handleCommand(item.cmd)}
              className="
                px-2.5
                py-1
                rounded-md
                bg-cyan-950/60
                hover:bg-cyan-500/20
                border
                border-cyan-500/20
                text-cyan-300
                hover:text-cyan-200
                text-xs
                font-mono
                transition
                shrink-0
                cursor-pointer
              "
            >
              {item.cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div
          className="flex-1 p-4 sm:p-5 overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed space-y-3 cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === "banner" && (
                <pre className="text-cyan-400 font-bold overflow-x-auto text-[10px] sm:text-xs leading-none mb-3">
                  {item.text}
                </pre>
              )}

              {item.type === "input" && (
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-green-400 font-bold">ankur@portfolio:~$</span>
                  <span className="text-white font-semibold">{item.text}</span>
                </div>
              )}

              {item.type === "output" && (
                <div className="mt-1 text-gray-200">{item.text}</div>
              )}

              {item.type === "error" && (
                <div className="mt-1">{item.text}</div>
              )}
            </div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-green-400 font-bold shrink-0">ankur@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="
                flex-1
                bg-transparent
                text-cyan-200
                font-mono
                text-xs
                sm:text-sm
                outline-none
                border-none
                caret-cyan-400
              "
              placeholder="Type command here..."
              autoFocus
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer */}
        <div className="px-4 py-2 bg-[#060B14] border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500 font-mono select-none">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">Esc</kbd> to close</span>
          <span>Tip: Use ↑ / ↓ keys for command history</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalModal;
