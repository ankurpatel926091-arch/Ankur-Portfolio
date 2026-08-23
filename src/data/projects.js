import aiShieldImg from "../assets/AIShield.png";
import drVinishImg from "../assets/Dr.Vinish-Project.png";
import projectPhoto from "../assets/projectphoto.png";
import LibraryManagement from "../assets/LibraryManagement.png";
import portfolio from "../assets/portfolio.png";
import projectImg from "../assets/project.png";

export const projects = [
  {
    id: 1,
    title: "Dr. Vinish Singh Healthcare Portal",
    category: "Full Stack",
    description:
      "Comprehensive full-stack medical and healthcare platform featuring online doctor appointment booking, patient portal, responsive medical services catalog, and dynamic consultation workflows.",
    image: drVinishImg,
    github: "https://github.com/ankurpatel926091-arch",
    live: "https://dr-vinish-singh-frontend.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    featured: true,
    highlights: [
      "Online Doctor Appointment Booking System",
      "Patient & Medical Consultation Management",
      "Responsive Glassmorphic Healthcare UI",
      "Secure API Integration & Database Schemas"
    ]
  },
  {
    id: 2,
    title: "MERN E-Commerce Platform",
    category: "MERN Stack",
    description:
      "Feature-rich full-stack e-commerce store with JWT user authentication, admin dashboard, cart management, stripe payments & order tracking.",
    image: projectPhoto,
    github: "https://github.com/ankurpatel926091-arch",
    live: "https://e-commerce-website-virid-three.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    featured: true,
    highlights: [
      "Secure Auth & Role-based Access",
      "Stripe Payment Gateway Integration",
      "Comprehensive Admin Control Panel",
      "Responsive Product Filtering & Search"
    ]
  },
  {
    id: 3,
    title: "AI Scam Shield & Threat Protection",
    category: "Full Stack",
    description:
      "AI-powered scam detection and cyber threat protection platform featuring real-time link/text analysis, risk scoring dashboard, user alert system, and security analytics.",
    image: aiShieldImg,
    github: "https://github.com/ankurpatel926091-arch",
    live: "https://scam-shield-frontend-tau.vercel.app/",
    tech: ["React", "Node.js", "Express", "Tailwind CSS", "AI Analytics"],
    featured: true,
    highlights: [
      "Real-Time AI Scam & Phishing Detection",
      "Cyber Threat Risk Analysis Dashboard",
      "Instant Threat Scoring & Alert System",
      "Responsive Security Operations Portal"
    ]
  },
  {
    id: 4,
    title: "Modern Library Management",
    category: "Full Stack",
    description:
      "Modern full-stack library management system featuring book issue/return tracking, member management, CRUD operations, and analytics dashboard.",
    image: LibraryManagement,
    github: "https://github.com/ankurpatel926091-arch",
    live: "https://library.vercel.app",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    featured: true,
    highlights: [
      "Real-time Book Inventory Tracking",
      "User Fine Calculation Logic",
      "Role-Based Admin & Student Views",
      "Optimized Database Queries"
    ]
  },
  {
    id: 5,
    title: "Developer Portfolio V2",
    category: "Frontend",
    description:
      "Premium dark-themed developer portfolio built with React 19, Tailwind CSS v4, Lenis smooth scrolling, framer motion animations, and interactive CLI.",
    image: portfolio,
    github: "https://github.com/ankurpatel926091-arch",
    live: "https://portfolio.vercel.app",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Lenis"],
    featured: true,
    highlights: [
      "Interactive Embedded CLI Terminal",
      "Smooth Lenis Inertial Scroll",
      "Real-Time GitHub Stats Integration",
      "In-Browser PDF Resume Viewer"
    ]
  },
  {
    id: 6,
    title: "Real-Time DevChat & Code Share",
    category: "MERN Stack",
    description:
      "Real-time developer chat room application with Socket.io, markdown code snippet highlighting, direct messaging, and online status badges.",
    image: projectImg,
    github: "https://github.com/ankurpatel926091-arch",
    live: "https://github.com/ankurpatel926091-arch",
    tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    featured: false,
    highlights: [
      "WebSockets Instant Messaging",
      "Syntax Highlighted Code Sharing",
      "Active Room Presence Indicators"
    ]
  }
];

export const categories = ["All", "MERN Stack", "Full Stack", "Frontend"];
