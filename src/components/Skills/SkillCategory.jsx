import SkillCard from "./SkillCard";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-16">

      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            level={skill.level}
          />
        ))}

      </div>

    </div>
  );
};

export default SkillCategory;