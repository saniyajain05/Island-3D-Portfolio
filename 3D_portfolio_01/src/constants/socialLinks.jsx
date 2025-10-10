import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    artstation,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
     {
        imageUrl: artstation,
        name: "ArtStation",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'ArtStation',
        iconUrl: artstation,
        link: '/https://saniyajain6.artstation.com/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/saniyajain05',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saniya-jain-1109b5232/',
    }
];

const projects = [
  {
    name: "Island 3D Portfolio",
    description:
      "A 3D island-style interactive portfolio built using React, Three.js, and modern webGL design.",
    link: "https://github.com/saniyajain05/Island-3D-Portfolio",
    iconUrl: "/assets/icons/island.png", // replace with your own icon
    theme: "bg-blue-500",
  },
  {
    name: "Team Management App",
    description:
      "A collaborative team management and task-tracking web app with authentication and dashboards.",
    link: "https://github.com/saniyajain05/Team_Management",
    iconUrl: "/assets/icons/team.png",
    theme: "bg-green-500",
  },
  {
    name: "Breast Cancer Wisconsin Analysis",
    description:
      "Data analysis and prediction using machine learning models on the Wisconsin Breast Cancer dataset.",
    link: "https://github.com/saniyajain05/BreastCancer-Wisconsin",
    iconUrl: "/assets/icons/ai.png",
    theme: "bg-pink-500",
  },
  {
    name: "Live Language Translation Device",
    description:
      "An IoT-based language translation device enabling real-time speech translation.",
    link: "https://github.com/saniyajain05/Live-Language-Translation-Device",
    iconUrl: "/assets/icons/mic.png",
    theme: "bg-yellow-500",
  },
  {
    name: "Digital Twin (CDAC Internship)",
    description:
      "A digital twin simulation built during my CDAC internship to visualize sensor data and process flows.",
    link: "https://github.com/saniyajain05/DigitalTwin_CDAC_Internship",
    iconUrl: "/assets/icons/digital.png",
    theme: "bg-purple-500",
  },
  {
    name: "Cardiology Data Analysis & Regression",
    description:
      "Predictive modeling and regression analysis on cardiology datasets for health diagnostics.",
    link: "https://github.com/saniyajain05/Cadiology-Data-Analysis-and-Regression",
    iconUrl: "/assets/icons/heart.png",
    theme: "bg-red-500",
  },
];

export default projects;