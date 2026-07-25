import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const FooterBrand = () => {
  return (
    <div className="max-w-md">

      {/* Logo */}

      <h2 className="text-5xl font-black tracking-tight">

        <span className="text-white">
          Ankur
        </span>

        <span className="text-cyan-400">
          .
        </span>

      </h2>

      {/* Profession */}

      <p className="mt-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-cyan-300 font-medium">

        🚀 Full Stack MERN Developer

      </p>

      {/* Description */}

      <p className="mt-8 text-gray-400 leading-8 text-lg">

        Passionate about building modern,
        fast and scalable web applications
        using React, Node.js, Express and
        MongoDB.

      </p>

      {/* Contact */}

      <div className="mt-8 space-y-4">

        <a
          href="mailto:ankurpatel926091@gmail.com"
          className="group flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
        >

          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400">

            <FaEnvelope />

          </div>

          <span>

            ankurpatel926091@gmail.com

          </span>

        </a>

        <a
          href="tel:+919198370285"
          className="group flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition"
        >

          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400">

            <FaPhoneAlt />

          </div>

          <span>

            +91 9198370285

          </span>

        </a>

        <div className="flex items-center gap-4 text-gray-300">

          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">

            <FaMapMarkerAlt />

          </div>

          <span>

            Lucknow, Uttar Pradesh

          </span>

        </div>

      </div>

    </div>
  );
};

export default FooterBrand;