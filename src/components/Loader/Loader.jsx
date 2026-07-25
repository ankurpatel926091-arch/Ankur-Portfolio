import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08111F]"
    >
      {/* Background Glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative flex flex-col items-center">

        {/* Logo */}

        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-6xl md:text-7xl font-black"
        >
          <span className="text-white">
            Ankur
          </span>

          <span className="text-cyan-400">
            .
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
          }}
          className="mt-5 text-cyan-400 tracking-[5px] uppercase text-sm"
        >
          Full Stack MERN Developer
        </motion.p>

        {/* Loading Dots */}

        <div className="flex gap-3 mt-12">

          {[0, 1, 2].map((i) => (

            <motion.span
              key={i}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                delay: i * 0.2,
              }}
              className="w-3 h-3 rounded-full bg-cyan-400"
            />

          ))}

        </div>

      </div>
    </motion.div>
  );
};

export default Loader;