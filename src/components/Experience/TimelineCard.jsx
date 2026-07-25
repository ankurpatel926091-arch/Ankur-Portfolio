import { motion } from "framer-motion";

const TimelineCard = ({
  year,
  title,
  company,
  description,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: .3 }}
      className="relative rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-7"
    >
      <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
        {year}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="text-cyan-300 mt-2">
        {company}
      </p>

      <p className="mt-5 leading-8 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
};

export default TimelineCard;