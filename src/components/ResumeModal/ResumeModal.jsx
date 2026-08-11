import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiDownload, HiPrinter, HiExternalLink, HiDocumentText } from "react-icons/hi";

const ResumeModal = ({ isOpen, onClose, resumeUrl = "/resume.pdf" }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const iframe = document.getElementById("resume-iframe");
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } else {
      window.open(resumeUrl, "_blank");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl h-[85vh] bg-[#0F172A] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.2)] flex flex-col overflow-hidden text-white"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-[#08111F]/80">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <HiDocumentText className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Ankur Patel &mdash; Resume
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-normal border border-cyan-500/30">
                    PDF Preview
                  </span>
                </h3>
                <p className="text-xs text-gray-400">Full Stack MERN Developer</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              <a
                href={resumeUrl}
                download="Ankur_Patel_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/40 text-xs font-semibold transition"
                title="Download PDF"
              >
                <HiDownload className="text-base" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 text-xs font-semibold transition cursor-pointer"
                title="Print Resume"
              >
                <HiPrinter className="text-base" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 text-xs font-semibold transition"
                title="Open in new tab"
              >
                <HiExternalLink className="text-base" />
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 text-lg transition cursor-pointer"
              >
                <HiX />
              </button>
            </div>
          </div>

          {/* Modal Body - Embedded Frame */}
          <div className="flex-1 w-full h-full bg-[#1E293B]/50 relative">
            <iframe
              id="resume-iframe"
              src={`${resumeUrl}#toolbar=0&navpanes=0`}
              title="Resume Preview"
              className="w-full h-full border-none"
            />

            {/* Fallback Notice */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#08111F]/90 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-500/30 text-xs text-gray-300 flex items-center gap-3 shadow-lg pointer-events-none">
              <span>Can&apos;t see the preview?</span>
              <a
                href={resumeUrl}
                download="Ankur_Patel_Resume.pdf"
                className="text-cyan-400 hover:underline font-semibold pointer-events-auto"
              >
                Click here to download directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
