import TimelineCard from "./TimelineCard";

const experienceData = [
  {
    year: "2025",
    title: "MERN Stack Intern",
    company: "Digi Coder",
    description:
      "Worked on real-world MERN applications using React, Node.js, Express and MongoDB. Built responsive interfaces and REST APIs.",
  },
  {
    year: "2026",
    title: "Freelance Developer",
    company: "Personal Projects",
    description:
      "Developed premium portfolio websites, e-commerce platforms and full-stack web applications with modern UI/UX.",
  },
];

const Timeline = () => {
  return (
    <div className="space-y-8">
      {experienceData.map((item, index) => (
        <TimelineCard
          key={index}
          year={item.year}
          title={item.title}
          company={item.company}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Timeline;