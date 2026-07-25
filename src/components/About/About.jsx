import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

import FadeLeft from "../Motion/FadeLeft";
import FadeRight from "../Motion/FadeRight";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#08111F] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[160px]"></div>

      {/* Container */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Get To Know Me
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-bold">
            About{" "}
            <span className="text-cyan-400">
              Me
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">
            I'm a passionate MERN Stack Developer who enjoys building
            modern, responsive and scalable web applications with a
            focus on clean UI, performance and user experience.
          </p>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <FadeLeft>
            <AboutImage />
          </FadeLeft>

          {/* Right */}

          <FadeRight delay={0.2}>
            <AboutContent />
          </FadeRight>

        </div>

      </div>
    </section>
  );
};

export default About;