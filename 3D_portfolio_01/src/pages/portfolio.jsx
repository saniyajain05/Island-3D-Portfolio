import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";
import Footer from "../components/footer";
import Slider from "react-slick";
import PortfolioTile from "../components/portfolioTile";
import model1 from "../assets/images/model-1.png";
import model2 from "../assets/images/model-2.jpeg";
import model3 from "../assets/images/model-3.jpeg";
import model4 from "../assets/images/model-4.jpeg";
import model5 from  "../assets/images/model-5.png";
import model6 from  "../assets/images/model-6.jpeg";
import auth1 from "../assets/images/auth-1.png";
import auth2 from "../assets/images/auth-2.png";
import auth3 from "../assets/images/auth-3.png";
import hero from "../assets/images/hero.jpg";


// Data: update image paths to your actual assets
const portfolioItems = [
  {
    name: "Authenticating – a Solo 3D Short Film",
    description:
      "A 3D animated short about Guy and his AI-driven car that goes wrong.",
    images: [
      auth1,
      auth2,
      auth3
    ],
    tools: ["Maya", " Adobe Premiere Pro", "Adobe After Effects", "Redshift"],
    link: "https://vimeo.com/1121339170",
  },
  {
    name: "3D Modeling, Texturing & Rigging",
    description:
      "Selected modeling, texturing, and rigging pieces using Maya, ZBrush, and Substance Painter.",
    images: [
      model1,
      model2,
      model3,
      model4,
      model5,
      model6
    ],
    tools: ["ZBrush", "Maya", "Substance Painter",],
    link: "https://saniyajain6.artstation.com/albums/11661566",
  },
  
  // {
  //   name: "Environment Lighting & Rendering",
  //   description:
  //     "Cinematic lighting studies and rendering setups across stylized scenes.",
  //   images: ["/assets/images/env-1.jpg"],
  //   tools: ["Arnold", "Maya", "Nuke"],
  //   link: "https://yourportfolio.com/environment",
  // },
];

const Portfolio = () => {
  return (
    <>
    
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Portfolio
          </span>
        </h1>

        {/* ✅ Reel stays at the top */}
        <div className="w-full flex justify-center my-10">
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://player.vimeo.com/video/1126261521"
              title="Animation Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <p className="text-slate-500 mt-2 leading-relaxed">
          Here’s a collection of my 3D animation and design work, including my demo
          reel, modeling showcases, and environment art. Each piece represents my
          passion for storytelling and bringing visuals to life.
        </p>

        {/* Tiles */}
        <div className="flex flex-col gap-12 my-16">
          {portfolioItems.map((item) => (
            <PortfolioTile key={item.name} item={item} />
          ))}
        </div>

        <hr className="border-slate-200" />
        <CTA />
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;