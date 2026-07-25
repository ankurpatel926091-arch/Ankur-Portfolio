const quickLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Certificates", href: "#certificates" },
      { name: "Contact", href: "#contact" },
    ],
  },

  {
    title: "Services",
    links: [
      { name: "MERN Stack Apps" },
      { name: "React Development" },
      { name: "REST API" },
      { name: "Responsive UI" },
      { name: "MongoDB Database" },
      { name: "Deployment" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-12">

      {quickLinks.map((section) => (

        <div key={section.title}>

          <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">

            {section.title}

            <span className="absolute left-0 -bottom-2 w-12 h-1 rounded-full bg-cyan-400"></span>

          </h3>

          <ul className="space-y-5">

            {section.links.map((link) => (

              <li key={link.name}>

                <a
                  href={link.href || "#"}
                  className="group flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >

                  <span className="w-2 h-2 rounded-full bg-cyan-400 scale-0 group-hover:scale-100 transition duration-300"></span>

                  <span className="relative">

                    {link.name}

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

                  </span>

                </a>

              </li>

            ))}

          </ul>

        </div>

      ))}

    </div>
  );
};

export default FooterLinks;