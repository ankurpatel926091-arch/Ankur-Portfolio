import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="space-y-6">

      <h3 className="text-3xl font-bold text-white">
        Let's Work Together 🚀
      </h3>

      <p className="text-gray-400 leading-8">
        Feel free to contact me for freelance work,
        internships or full-time opportunities.
      </p>

      <div className="space-y-5">

        <div className="flex items-center gap-4">
          <FaEnvelope className="text-cyan-400 text-xl" />
          <span className="text-gray-300">
            ankurpatel926091@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-cyan-400 text-xl" />
          <span className="text-gray-300">
            +91 91983 70285 
          </span>
        </div>

        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-cyan-400 text-xl" />
          <span className="text-gray-300">
            Lucknow, India
          </span>
        </div>

      </div>

      <div className="flex gap-5 pt-5">

        <a href="https://github.com/ankurpatel926091-arch" className="text-3xl hover:text-cyan-400 transition">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/ankur285/" className="text-3xl hover:text-blue-400 transition">
          <FaLinkedin />
        </a>

      </div>

    </div>
  );
};

export default ContactInfo;