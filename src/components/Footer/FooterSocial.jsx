import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub size={18} />,
    link: "https://github.com/ankurpatel926091-arch",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    link: "https://linkedin.com/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={18} />,
    link: "https://instagram.com/",
  },
];

const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-base font-bold text-white mb-4 relative inline-block">
        Let's Connect
        <span className="absolute left-0 -bottom-1.5 w-6 h-0.5 rounded-full bg-cyan-400"></span>
      </h3>

      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
        Have an idea, project or opportunity? Feel free to reach out. I'm always
        open to discussing new work.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3 flex-wrap mb-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            title={social.name}
            className="
              w-9 h-9
              rounded-lg
              bg-white/5
              border
              border-white/10
              backdrop-blur-md
              flex
              items-center
              justify-center
              text-gray-300
              hover:text-cyan-400
              hover:border-cyan-400/50
              hover:bg-cyan-500/10
              hover:scale-105
              transition-all
              duration-200
            "
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Status */}
      <div className="mt-4 p-3 sm:p-3.5 rounded-xl bg-white/5 border border-cyan-400/20 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
          </span>

          <p className="text-xs font-semibold text-green-400">
            Available for Freelance
          </p>
        </div>

        <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
          Currently available for freelance projects, internships and full-time
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default FooterSocial;