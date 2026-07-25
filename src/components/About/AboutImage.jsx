import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import ankur2 from "../../assets/ankur2.png";

const AboutImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex justify-center"
    >
      {/* Glow */}
      <div className="absolute w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

      {/* Image */}
      <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-3xl overflow-hidden border-2 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.4)]">
<img
  src={ankur2}
  alt="Ankur Patel"
  className="w-full h-full object-cover"
/>

      </div>

      {/* Experience Card */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute -bottom-6 right-0 bg-[#0f172a] border border-cyan-500/20 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl"
      >
        <h3 className="text-2xl font-bold text-cyan-400">
          1+
        </h3>

        <p className="text-gray-300 text-sm">
          Years Learning MERN
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutImage;