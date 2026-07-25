import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#08111F] text-white flex items-center"
    >
      {/* Background */}
      <HeroBackground />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left Side */}
          <HeroContent />

          {/* Right Side */}
          <HeroImage />

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center z-20">

        <span className="text-sm text-gray-400 mb-3 tracking-widest uppercase">
          Scroll
        </span>

        <div className="w-7 h-12 rounded-full border-2 border-cyan-400 flex justify-center">

          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>

        </div>

      </div>

    </section>
  );
};

export default Hero;