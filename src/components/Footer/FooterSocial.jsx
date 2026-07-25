import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub size={22} />,
    link: "https://github.com/YourGithub",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={22} />,
    link: "https://linkedin.com/in/YourLinkedin",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={22} />,
    link: "https://instagram.com/YourInstagram",
  },
];

const FooterSocial = () => {
  return (
    <div>

      <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">

        Let's Connect

        <span className="absolute left-0 -bottom-2 w-12 h-1 rounded-full bg-cyan-400"></span>

      </h3>

      <p className="text-gray-400 leading-8 mb-5">

          Have an idea, project or opportunity?
        Feel free to reach out.
        I'm always open to discussing new work.
       

      </p>

      {/* Social Icons */}

      <div className="flex gap-6 flex-wrap mb-8">

        {socials.map((social) => (

         <a
  key={social.name}
  href="https://github.com/ankurpatel926091-arch"
  target="_blank"
  rel="noreferrer"
  className="
    w-14 h-14
    rounded-2xl
    bg-white/5
    border
    border-white/10
    backdrop-blur-xl
    flex
    items-center
    justify-center
    text-gray-300
    hover:text-cyan-400
    hover:border-cyan-400
    hover:scale-110
    transition-all
    duration-300
  "
>
  {social.icon}
</a>

        ))}

      </div>
      {/* Status */}

      <div className="mt-5 p-5 rounded-2xl bg-white/5 border border-cyan-400/20 backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <span className="relative flex h-3 w-3">

            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

            <span className="relative inline-flex h-3 w-8 rounded-full bg-green-500"></span>

          </span>

          <p className="text-green-400 font-semibold">

            Available for Freelance

          </p>

        </div>

        <p className="mt-3 text-gray-400 text-sm leading-7">

          Currently available for freelance projects,
          internships and full-time opportunities.

        </p>

      </div>

    </div>
  );
};

export default FooterSocial;