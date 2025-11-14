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
import noraRig from "../assets/images/noraRig1.png";
// import nora1 from "../assets/images/Nora1.png";
import nora2 from "../assets/images/Nora_scared_still_normaal 3 point.png";
import nora3 from "../assets/images/Nora_scared_still_wireframe.png";
import hero1 from "../assets/images/HeroChar-1.png";
import clock1 from "../assets/images/clock1.jpeg";
import clock2 from "../assets/images/clock2.jpeg";
import clock3 from "../assets/images/clock3.jpeg";
import decor1 from "../assets/images/decor-1.jpeg";
import decor2 from "../assets/images/decor-2.jpeg";
import decor3 from "../assets/images/decor-3.jpeg";
import shot07process from "../assets/images/Shot_07.gif";

// Data: update image paths to your actual assets
const portfolioItems = [
  
  {
    name: "Used Alarm Clock",
    description:
      "Modeled and textured a rustic alarm clock",
    images: [
    clock1,
      clock2,
      clock3
    ],
    tools: ["Maya", "Substance Painter", "Redshift"],
    link: "https://saniyajain6.artstation.com/projects/1N634K",
  },
  {
    name: "Ixtal Shaman Character Model",
    description:
      "Girl with great talent who holds ancient magic and is able to hear the voice of all things. Modeled and textured.",
    images: [
      hero1
    ],
    tools: ["ZBrush", "Maya"],
    link: "https://saniyajain6.artstation.com/projects/1xJ53G",
  },
   {
    name: "Nora (The Midnight Library)",
    description:
      "Nora is stuck in the afterlife library and is trying to find her way out. Modeled, textured and rigged.",
    images: [
      
      nora2,
      nora3,
      noraRig
    ],
    tools: ["Maya"],
    link: "https://saniyajain6.artstation.com/projects/98K4lo",
  },

  {
    name: "Minimalistic Decor Scene",
    description:
      "Contemporary, minimalistic decor and mid-centuary furniture filled scene. Lit and rendered scene in Maya with a minimalistic aesthetic.",
    images: [
      decor1,
      decor2,
      decor3
    ],
    tools: ["Maya", "Substance Painter", "Redshift", "Photoshop"],
    link: "https://saniyajain6.artstation.com/projects/dyr5vQ?album_id=11661566",
  },
  {
    name: "Composite Process",
    description:
      "A breakdown of the compositing process for a shot from my short film, including the original render, passes, and final composite.",
    images: [
      shot07process
    ],
    tools: ["Maya", "Adobe After Effects", "Redshift"],
    link : "https://www.artstation.com/artwork/eRwn2P"
  },
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