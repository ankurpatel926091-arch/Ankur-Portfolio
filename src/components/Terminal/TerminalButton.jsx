import { HiTerminal } from "react-icons/hi";

const TerminalButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      title="Open Interactive Developer CLI"
      className="
        fixed
        bottom-6
        left-6
        z-40
        group
        flex
        items-center
        gap-2.5
        px-4
        py-3
        rounded-full
        bg-[#08111F]/90
        border
        border-cyan-500/40
        hover:border-cyan-400
        text-cyan-400
        hover:text-white
        shadow-[0_0_25px_rgba(34,211,238,0.25)]
        hover:shadow-[0_0_35px_rgba(34,211,238,0.45)]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        font-mono
        text-xs
        sm:text-sm
        font-bold
        cursor-pointer
      "
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500"></span>
      </span>

      <HiTerminal className="text-lg text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
      
      <span className="hidden sm:inline tracking-wider">&gt;_ CLI</span>
    </button>
  );
};

export default TerminalButton;
