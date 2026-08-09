import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const FooterBrand = () => {
  return (
    <div className="max-w-md">
      {/* Logo */}
      <h2 className="text-3xl font-extrabold tracking-tight">
        <span className="text-white">Ankur</span>
        <span className="text-cyan-400">.</span>
      </h2>

      {/* Profession */}
      <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300 font-medium">
        <span>🚀</span> Full Stack MERN Developer
      </p>

      {/* Description */}
      <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
        Passionate about building modern, fast and scalable web applications
        using React, Node.js, Express and MongoDB.
      </p>

      {/* Contact */}
      <div className="mt-5 space-y-2.5">
        <a
          href="mailto:ankurpatel926091@gmail.com"
          className="group flex items-center gap-3 text-xs sm:text-sm text-gray-300 hover:text-cyan-400 transition"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition">
            <FaEnvelope />
          </div>
          <span>ankurpatel926091@gmail.com</span>
        </a>

        <a
          href="tel:+919198370285"
          className="group flex items-center gap-3 text-xs sm:text-sm text-gray-300 hover:text-cyan-400 transition"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs group-hover:border-cyan-400/50 group-hover:text-cyan-400 transition">
            <FaPhoneAlt />
          </div>
          <span>+91 9198370285</span>
        </a>

        <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs">
            <FaMapMarkerAlt />
          </div>
          <span>Lucknow, Uttar Pradesh</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBrand;