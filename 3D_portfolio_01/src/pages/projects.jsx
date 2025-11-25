import { Link } from "react-router-dom";

import  CTA  from "../components/CTA";
import  projects  from "../constants/socialLinks";
import { arrow } from "../assets/icons";
import Footer from "../components/footer";
import PortfolioTile from "../components/portfolioTile";
import Island from "../assets/images/3DIsland.gif";

const projectItems = [
  {
    name: "Island 3D Portfolio",
    description:
      "A 3D island-style interactive portfolio built using React, Three.js, and modern webGL design.",
    link: "https://github.com/saniyajain05/Island-3D-Portfolio",
    images: [Island,],
    tools: ["React", "Three.js", "VSCode", "Blender"],
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

const Projects = () => {
  return (
    <>
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      {/* Tiles */}
        <div className="flex flex-col gap-12 my-16">
          {projectItems.map((item) => (
            <PortfolioTile key={item.name} item={item} />
          ))}
        </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
    <Footer/>
    </>
  );
};

export default Projects;