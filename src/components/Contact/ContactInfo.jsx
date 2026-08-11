import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCalendarCheck
} from "react-icons/fa";

const ContactInfo = () => {
  const whatsappUrl = `https://wa.me/919198370285?text=${encodeURIComponent(
    "Hi Ankur, I visited your portfolio and would like to connect with you!"
  )}`;

  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-white">
        Let&apos;s Work Together 🚀
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Feel free to contact me for freelance work, internships, full-time opportunities, or exciting collaborations.
        I&apos;m always open to discussing innovative ideas, building impactful web applications, and creating modern digital experiences.
      </p>

      {/* Quick Action Badges */}
      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-black border border-emerald-500/40 text-sm font-semibold transition shadow-lg"
        >
          <FaWhatsapp className="text-lg text-emerald-400" />
          <span>Instant WhatsApp Chat</span>
        </a>

        <a
          href="mailto:ankurpatel926091@gmail.com?subject=Project%20Query%20/%20Opportunity"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-black border border-cyan-500/40 text-sm font-semibold transition shadow-lg"
        >
          <FaCalendarCheck className="text-lg text-cyan-400" />
          <span>Schedule 15-min Call</span>
        </a>
      </div>

      <div className="space-y-5 pt-4 border-t border-cyan-500/10">
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
            <FaEnvelope className="text-xl" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block">Email Address</span>
            <a href="mailto:ankurpatel926091@gmail.com" className="text-gray-200 hover:text-cyan-400 transition font-medium">
              ankurpatel926091@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
            <FaPhoneAlt className="text-xl" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block">Phone Number</span>
            <a href="tel:+919198370285" className="text-gray-200 hover:text-cyan-400 transition font-medium">
              +91 91983 70285
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
            <FaMapMarkerAlt className="text-xl" />
          </div>
          <div>
            <span className="text-xs text-gray-400 block">Location</span>
            <span className="text-gray-200 font-medium">
              Lucknow, Uttar Pradesh, India
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Social Links:</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/ankurpatel926091-arch"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-gray-800 hover:bg-cyan-500 text-gray-300 hover:text-black transition"
            title="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/ankur285/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-gray-800 hover:bg-blue-500 text-gray-300 hover:text-white transition"
            title="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;