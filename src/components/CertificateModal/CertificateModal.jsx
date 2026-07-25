import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  return (
    <AnimatePresence>

      {isOpen && certificate && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
        >

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-[#08111F] border border-cyan-500/20 shadow-[0_0_50px_rgba(34,211,238,.2)]"
          >

            {/* Close */}

            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-red-500 transition flex items-center justify-center"
            >
              <FaTimes />
            </button>

            {/* Image */}

            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full object-cover max-h-[75vh]"
            />

            {/* Content */}

            <div className="p-8">

              <h2 className="text-3xl font-bold text-white">
                {certificate.title}
              </h2>

              <p className="mt-4 text-gray-400 leading-8">
                {certificate.description}
              </p>

              <div className="mt-8">

                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
                >
                  View Certificate
                </a>

              </div>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default CertificateModal;