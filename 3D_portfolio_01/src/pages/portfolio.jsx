import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";

// Example data: you can also import this from constants/portfolioLinks.js
const portfolioItems = [
  {
    name: "Authenticating - a Solo 3D Short Film",
    description:
      "A solo 3D animated short film about Guy. Guy thinks that AI and automation are the best things that happened to humanity. In is giddy with glee to finally get his automated AI run car - BEST DAY EVER. In his carelessness and hurry to try his sweet new ride, he locks his car away with just a facial recognition; what he doesn't know is that while driving, he cannot change anything without authenticating his face! Will he be able to stop the car in time, or is this ride going to truly be the ride of a lifetime?",
    link: "https://vimeo.com/1121339170",
    iconUrl: "/assets/icons/animation.png", // update to your actual icon
    theme: "bg-blue-500",
  },
  {
    name: "3D Modeling, Texturing and Rigging",
    description:
      "A showcase of 3D of my modeling, texturing, and rigging work using Maya, ZBrush, and Substance Painter.",
    link: "https://saniyajain6.artstation.com/albums/11661566",
    iconUrl: "/assets/icons/environment.png",
    theme: "bg-green-500",
  },
  // {
  //   name: "Modeling Portfolio",
  //   description:
  //     "A collection of 3D models and textures I’ve created for projects and commissions.",
  //   link: "https://yourportfolio.com/models",
  //   iconUrl: "/assets/icons/modeling.png",
  //   theme: "bg-purple-500",
  // },
];

const Portfolio = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Portfolio
        </span>
      </h1>
      
      <div className="w-full flex justify-center my-10">
        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
            src="https://player.vimeo.com/1126261521"
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

      <div className="flex flex-wrap my-20 gap-16">
        {portfolioItems.map((item) => (
          <div className="lg:w-[400px] w-full" key={item.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${item.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {item.name}
              </h4>
              <p className="mt-2 text-slate-500">{item.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  View Work
                </Link>
                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Portfolio;
