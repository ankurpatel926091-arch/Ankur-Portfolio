import { motion } from "framer-motion";

const SkillCard = ({ icon, title, level }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 p-6"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="text-4xl text-cyan-400">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="text-sm text-gray-400">
            {level}%
          </p>
        </div>
      </div>

      <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />

      </div>
    </motion.div>
  );
};

export default SkillCard;