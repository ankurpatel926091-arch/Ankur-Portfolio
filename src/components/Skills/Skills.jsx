import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { skills } from "./skillsData";
import SkillsBackground from "./SkillsBackground";
import SkillCategory from "./SkillCategory";



const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-10 overflow-hidden bg-[#08111F] text-white"
    >
      {/* Background */}
      <SkillsBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            What I Know
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            My{" "}
            <span className="text-cyan-400">
              Skills
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            I enjoy learning modern technologies and building scalable,
            responsive and user-friendly applications using the MERN Stack.
          </p>

        </motion.div>

        {/* Floating Icons */}

        <div className="hidden lg:block">

          <FaReact
            className="absolute left-0 top-36 text-sky-400 opacity-20 animate-spin"
            size={90}
          />

          <FaNodeJs
            className="absolute right-10 top-96 text-green-500 opacity-20"
            size={90}
          />

          <SiMongodb
            className="absolute left-20 bottom-24 text-green-400 opacity-20"
            size={90}
          />

        </div>

        {/* Categories */}

        <div className="space-y-20">

          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .2,
              }}
              viewport={{ once: true }}
            >

              <SkillCategory
                title={category.title}
                skills={category.skills}
              />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;