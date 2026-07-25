import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGithub,
  SiHtml5,
  SiCss,
  SiRedux,
} from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        icon: <FaReact />,
        title: "React.js",
        level: 95,
      },
      {
        icon: <SiJavascript />,
        title: "JavaScript",
        level: 92,
      },
      {
        icon: <SiTailwindcss />,
        title: "Tailwind CSS",
        level: 95,
      },
      {
        icon: <SiHtml5 />,
        title: "HTML5",
        level: 98,
      },
      {
        icon: <SiCss />,
        title: "CSS3",
        level: 95,
      },
      {
        icon: <SiRedux />,
        title: "Redux Toolkit",
        level: 90,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        icon: <FaNodeJs />,
        title: "Node.js",
        level: 92,
      },
      {
        icon: <SiExpress />,
        title: "Express.js",
        level: 90,
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        icon: <SiMongodb />,
        title: "MongoDB",
        level: 90,
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        icon: <FaGitAlt />,
        title: "Git",
        level: 90,
      },
      {
        icon: <SiGithub />,
        title: "GitHub",
        level: 92,
      },
      {
        icon: <SiPostman />,
        title: "Postman",
        level: 90,
      },
    ],
  },
];