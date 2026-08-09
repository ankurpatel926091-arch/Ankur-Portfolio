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
    <div className="grid grid-cols-2 gap-6 sm:gap-8">
      {quickLinks.map((section) => (
        <div key={section.title}>
          <h3 className="text-base font-bold text-white mb-4 relative inline-block">
            {section.title}
            <span className="absolute left-0 -bottom-1.5 w-6 h-0.5 rounded-full bg-cyan-400"></span>
          </h3>

          <ul className="space-y-2.5">
            {section.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href || "#"}
                  className="group flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                  <span className="relative">
                    {link.name}
                    <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
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