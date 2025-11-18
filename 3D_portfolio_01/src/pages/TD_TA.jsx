import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";
import Footer from "../components/footer";
import Slider from "react-slick";
import PortfolioTile from "../components/TDPortfolioTile";
import auth1 from "../assets/images/auth-1.png";
import auth2 from "../assets/images/auth-2.png";
import auth3 from "../assets/images/auth-3.png";
// import noraRig from "../assets/images/noraRig1.png";
// import nora1 from "../assets/images/Nora1.png";
import nora2 from "../assets/images/Nora_scared_still_normaal 3 point.png";
import nora3 from "../assets/images/Nora_scared_still_wireframe.png";
import nora4 from "../assets/images/NoraRig.gif";
import hero1 from "../assets/images/HeroChar-1.png";
import clock1 from "../assets/images/clock1.jpeg";
import clock2 from "../assets/images/clock2.jpeg";
import clock3 from "../assets/images/clock3.jpeg";
import clock4 from "../assets/images/render_of_SubstancePainter_ofClock.gif";
import decor1 from "../assets/images/decor-1.jpeg";
import decor2 from "../assets/images/decor-2.jpeg";
import decor3 from "../assets/images/decor-3.jpeg";
import shot07process from "../assets/images/Shot_07.gif";
import cityGen1 from "../assets/images/CityGenertor.gif";
import guyRig from "../assets/images/GuyRig.gif";
import guyTurn from "../assets/images/Guy_Turntable.gif";
import trogRig from "../assets/images/JainSaniya_Trog_ROM.gif";
import guyTurnImg from "../assets/images/GUyRigAnipng.png";

// Data: update image paths to your actual assets
const portfolioItems = [
  
  {
    name: "Used Alarm Clock",
    description:
      "Modeled and textured a rustic alarm clock",
    images: [
    clock1,
      clock2,
      clock3,
      clock4

    ],
    tools: ["Maya", "Substance Painter", "Redshift"],
    link: "https://saniyajain6.artstation.com/projects/1N634K",
  },
  {
    name: "City Genrator Tool",
    description:
      "The need for a city genreator tool arose when I was working on my solo short film. I created a python tool to quickly generate a city layout with buildings, roads and arrange buildings I had modeled in a city like pettern. This was quite useful in generating city blocks further in the distance.",
    images: [
      cityGen1,
 
    ],
    tools: ["Maya", " Python", "Redshift"],
    
  },
//   {
//     name: "Ixtal Shaman Character Model",
//     description:
//       "Girl with great talent who holds ancient magic and is able to hear the voice of all things. Modeled and textured.",
//     images: [
//       hero1
//     ],
//     tools: ["ZBrush", "Maya"],
//     link: "https://saniyajain6.artstation.com/projects/1xJ53G",
//   },
   {
    name: "Models and Rigs",
    description:
      "Nora is stuck in the afterlife library and is trying to find her way out. Modeled, textured and rigged.",
    heroImages: [
      nora2,
      nora3,
      guyTurnImg
      
    ],
    bottomImages: [guyRig,
      trogRig,
      nora4],
    carousel: true,
    tools: ["Maya"]
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
  // {
  //   name: "Authenticating – a Solo 3D Short Film",
  //   description:
  //     "A 3D animated short about Guy and his AI-driven car that goes wrong.",
  //   images: [
  //     auth1,
  //     auth2,
  //     auth3
  //   ],
  //   tools: ["Maya", " Adobe Premiere Pro", "Adobe After Effects", "Redshift"],
  //   link: "https://vimeo.com/1121339170",
  // },
  
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

    

        <p className="text-slate-500 mt-2 leading-relaxed">
          Here’s a collection of my Technical Art work in my pursuit to becoming a Techincal Artist OR a Technical Director!
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