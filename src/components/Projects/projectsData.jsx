import projectPhoto from "../../assets/projectphoto.png";
import LibraryManagement from "../../assets/LibraryManagement.png";
import portfolio from "../../assets/portfolio.png";
export const projects = [
  {
    id: 1,
    title: "MERN E-Commerce",
    description:
      "Full-stack e-commerce with auth, dashboard & payments.",

    image: projectPhoto,

    github: "https://github.com/ankurpatel926091-arch/E-Commerce-Website",

    live: "https://e-commerce-website-virid-three.vercel.app/",

    tech: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind",
    ],
  },
{
  id: 2,
  title: "Library Management",

  description:
    "Modern library management system with CRUD operations, authentication and responsive dashboard.",

  image: LibraryManagement,

  github: "https://github.com/ankurpatel926091-arch",

  live: "https://library.vercel.app",

  tech: [
    "React",
    "Express",
    "MongoDB",
  ],
},

  {
    id: 3,

    title: "Portfolio Website",

    description:
      "Premium portfolio built with React, Tailwind CSS and Framer Motion featuring smooth animations and modern UI.",

    image: portfolio,

    github: "https://github.com/ankurpatel926091-arch",

    live: "https://portfolio.vercel.app",

    tech: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],
  },
];