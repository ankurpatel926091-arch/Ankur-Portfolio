import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const CertificateCard = ({ certificate, onClick }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
        rotateX: 5,
        rotateY: -5,
      }}
      transition={{ duration: 0.35 }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500"
    >
      {/* Image */}

      <div className="relative h-56 overflow-hidden">

        <img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#08111F] via-black/20 to-transparent"></div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-white">
          {certificate.title}
        </h3>

        <p className="mt-2 text-cyan-400">
          {certificate.issuer}
        </p>

        <p className="mt-2 text-gray-400">
          {certificate.year}
        </p>

        <a
          href={certificate.link}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold transition hover:bg-cyan-400"
        >
          View Certificate
          <FaExternalLinkAlt />
        </a>

      </div>
    </motion.div>
  );
};

export default CertificateCard;