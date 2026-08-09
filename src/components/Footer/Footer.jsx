import FooterBackground from "./FooterBackground";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#070D18] border-t border-white/10">
      {/* Background */}
      <FooterBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-12">
        {/* Top */}
        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr] gap-8 lg:gap-12">
          {/* Left */}
          <FooterBrand />

          {/* Center */}
          <FooterLinks />

          {/* Right */}
          <FooterSocial />
        </div>

        {/* Divider */}
        <div className="my-6 lg:my-8 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-semibold">Ankur Patel</span>. All
            Rights Reserved.
          </p>

          <p className="text-center">
            Built with ❤️ using React, Tailwind CSS & Framer Motion
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            title="Back to Top"
            className="
              w-9
              h-9
              rounded-full
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              font-bold
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:-translate-y-1
              shadow-md
              shadow-cyan-500/20
            "
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;