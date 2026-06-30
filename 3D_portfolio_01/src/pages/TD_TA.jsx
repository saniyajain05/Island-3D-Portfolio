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
import resumePDF from "../assets/Saniya_Resume_Areeg_2_20_2026 (1).pdf";
import Island from "../assets/images/3DIsland.gif";
import AlarmClockGIF from "../assets/images/Saniya_Jain_Alarm_Clock_Look_Dev_wireframe_02_1.gif";
import UVSClock from "../assets/images/UVs_Clock.jpg"
// Data: update image paths to your actual assets
const portfolioItems = [
  {
    name: "City Generator Tool",
    description: [
  "The need for a city generator tool arose when I was working on my solo short film.",
  "I created a python tool to quickly generate a city layout with buildings, roads and arrange buildings I had modeled in a city-like pattern.",
  "This was quite useful in generating city blocks further in the distance.",

  "**Problem**: Quick prototyping for city layouts in 3D scenes can be time-consuming and tedious when done manually.",
  "**Solution**: Developed a Python-based city generator tool that automates the creation of city layouts, including buildings and roads, allowing for rapid prototyping and iteration.",
  "Step 1: Create a plane according to user input.",
  "Step 2: Create grid, randomly pick primary curves for major roads.",
  "Step 3: Pick custom buildings from scene and add to the building list.",
  "Step 4: Generate city by placing buildings along the roads with a spawn probability of 75% and add parking lots where buildings don't appear.",
  "**Impact**: Reduced manual layout work for background city shots and enabled rapid iteration for lighting and camera tests."
],
      images: [
      cityGen1,
 
    ],
    tools: ["Maya", " Python", "Redshift"],
    
  },

  {
    name: "Interactive 3D Island",
    description: [
  "This project is an interactive 3D portfolio built using React Three Fiber to deliver a real-time, immersive user experience directly in the browser. My goal was to combine modern frontend architecture with WebGL rendering to create a performant, scalable, and maintainable 3D interface that replaces traditional static portfolio layouts.",
  "**Problem**: Traditional portfolios can be static and may not fully showcase real-time lighting and structure of a 3D scene.",
  "**Solution**: Built a real-time camera interactive modular system with reusable assets. Optimized loading times with code splitting and lazy loading. Built a deterministic loading and scene state pipeline to ensure smooth user experience.",
  "Architecture: The project is structured with a clear separation of concerns. The React component hierarchy manages UI state and interactions, while Three.js handles the 3D rendering. This modular approach allows for easy maintenance and scalability.",
  
  "Asset Integration: The 3D assets were integrated as reusable components, allowing them to be easily reused or swapped without affecting the scene architecture. This mirrors production pipelines where assets and rendering logic remain decoupled",
  "Rendering: Implemented a real-time rendering pipeline using React Three Fiber, which abstracts Three.js into a declarative React model. The scene uses multiple light sources—directional, ambient, and hemisphere lighting—to simulate depth and realism while balancing performance."



],
      images: [
      Island,
 
    ],
    tools: ["Maya", " Three.js", "Vite", "JavaScriptXML"],
    
  },
  
  {
    name: "Used Alarm Clock",
    description:
      "Modeled and textured a rustic alarm clock",
      heroImages: [
      clock1,
      clock2,
      clock3
      
    ],

    bottomImages: [AlarmClockGIF,
      clock4,
      UVSClock],
    carousel: true,

    images: [
    clock1,
      AlarmClockGIF,
      clock2,
      clock3,
      clock4

    ],
    tools: ["Maya", "Substance Painter", "Redshift"],
   
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
      "Contemporary, minimalistic decor and mid-century furniture filled scene. Lit and rendered scene in Maya with a minimalistic aesthetic.",
    images: [
      decor1,
      decor2,
      decor3
    ],
    tools: ["Maya", "Substance Painter", "Redshift", "Photoshop"],
    //link: "https://saniyajain6.artstation.com/projects/dyr5vQ?album_id=11661566",
  },
  {
    name: "Composite Process",
    description:
      "A breakdown of the compositing process for a shot from my short film, including the original render, passes, and final composite.",
    images: [
      shot07process
    ],
    tools: ["Maya", "Adobe After Effects", "Redshift"],
    //link : "https://www.artstation.com/artwork/eRwn2P"
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
          Hi, I'm{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Saniya!
          </span>
        </h1>
        <h3 className="subhead-text mt-3">
          Technical Director specializing in Maya tools and production pipelines!
        </h3>

    

<p className="text-slate-500 mt-2 leading-relaxed">
  I am a college graduate with a double major in Computer Science and 3D Animation, with a minor in Data Science and 
  Illustration. My passion lies in the intersection of technology and creativity, where I strive to bring 
  innovative ideas to life by optimizing 3D art and technical solutions.
</p>

<div className="mt-6 flex flex-wrap gap-4">
  <a
    href={resumePDF}
    download
    className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition font-medium"
  >
    View My Resume!
  </a>

  <a
    href="https://saniyajain6.artstation.com/albums/11661566"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-slate-900 text-white rounded-xl shadow-md hover:bg-slate-700 transition font-medium"
  >
    Check Out My ArtStation
  </a>
</div>



{/* Tiles */}
<div className="flex flex-col gap-12 my-16">
  {portfolioItems.map((item) => (
    <PortfolioTile key={item.name} item={item} />
  ))}
</div>




       
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
        <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
  <h2 className="text-2xl font-semibold text-slate-900">
    Check out more of my work on ArtStation
  </h2>

  <p className="text-slate-500 mt-3 leading-relaxed">
    You can find more of my 3D modeling, texturing, lighting, rendering, and animation work on my ArtStation portfolio.
  </p>

  <a
    href="https://saniyajain6.artstation.com/albums/11661566"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-5 px-5 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition font-medium"
  >
    Visit My ArtStation
  </a>
</div>

        <hr className="border-slate-200" />
        <CTA />
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
