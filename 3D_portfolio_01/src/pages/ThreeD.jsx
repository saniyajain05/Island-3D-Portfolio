import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";
import Footer from "../components/footer";
import Slider from "react-slick";
import PortfolioTile from "../components/portfolioTile";
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
import hero from "../assets/images/hero.jpg";
import shot07process from "../assets/images/Shot_07.gif";


// Data: update image paths to your actual assets
const portfolioItems = [
  {
    name: "Composite Process",
    description:
      "A breakdown of the compositing process for a shot from my short film, including the original render, passes, and final composite.",
    images: [
      shot07process
    ],
    tools: ["Maya", "Adobe After Effects", "Redshift"],
    
  },
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
  }
  
  // {
  //   name: "Environment Lighting & Rendering",
  //   description:
  //     "Cinematic lighting studies and rendering setups across stylized scenes.",
  //   images: ["/assets/images/env-1.jpg"],
  //   tools: ["Arnold", "Maya", "Nuke"],
  //   link: "https://yourportfolio.com/environment",
  // },
];

const ThreeD = () => {
  return (
    <>
    
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            3D Portfolio
          </span>
        </h1>


        <p className="text-slate-500 mt-2 leading-relaxed">
          A more compehensive list of my 3D work, including modeling, texturing, rigging and lighting studies.
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

export default ThreeD;