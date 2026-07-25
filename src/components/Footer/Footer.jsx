import FooterBackground from "./FooterBackground";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#070D18] border-t border-white/10">

      {/* Background */}
      <FooterBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">

        {/* Top */}

        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-20">

          {/* Left */}

          <FooterBrand />

          {/* Center */}

          <FooterLinks />

          {/* Right */}

          <FooterSocial />

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-center md:text-left">

            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-semibold">
              Ankur Patel
            </span>

            . All Rights Reserved.

          </p>

          <p className="text-gray-500 text-center">

            Built with ❤️ using React, Tailwind CSS &
            Framer Motion

          </p>

          {/* Back To Top */}

          <a
            href="#home"
            className="
              w-12
              h-12
              rounded-full
              bg-cyan-500
              hover:bg-cyan-400
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:-translate-y-1
              shadow-lg
              shadow-cyan-500/30
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