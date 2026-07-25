import { motion } from "framer-motion";

const StatsCard = ({ number, title }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6 text-center shadow-xl"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
        {number}
      </h2>

      <p className="mt-2 text-gray-300">
        {title}
      </p>
    </motion.div>
  );
};

export default StatsCard;