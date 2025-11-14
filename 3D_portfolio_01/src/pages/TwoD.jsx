import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import Footer from "../components/footer";
import PortfolioTile from "../components/portfolioTile";

// Example placeholder imports — replace with your real 2D images/animations
import twoD1 from "../assets/images/GC1.png";
import twoD2 from "../assets/images/CI-4.png";
import map1 from "../assets/images/Map-1.png";
import tenyr1 from "../assets/images/10 Year anniversary .png"; 
import jap1 from "../assets/images/japanese-1.jpeg";
import jap2 from "../assets/images/japanese-2.jpeg";
import o1 from "../assets/images/Oscar-2.jpeg";
import o2 from "../assets/images/Oscar-1.jpeg";

// New cards for 2D work displayed directly on page
const twoDItems = [
  {
    name: "Visual Development for Animated Shorts",
    description: "Visual development work for animated shorts, including character design, environment concepts, and key art.",
    orientation: "vertical", // NEW
    images: [jap1, jap2, o1, o2],
    tools: ["Procreate"],
  },
  {
    name: "Marketing for DePaul Global Engagment",
    description: "Marketing materials for DePaul's Global Engagement office, including social media graphics and event posters adhereing to the university's brand guidelines.",
    orientation: "horizontal", // NEW
    images: [twoD1, twoD2, map1, tenyr1],
    tools: ["Photoshop", "Illustrator"],
  },
  
];

const TwoD = () => {
  return (
    <>
      <section className="max-container">
        <h1 className="head-text">
          My {" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            2D Portfolio
          </span>
        </h1>

        <p className="text-slate-500 mt-2 leading-relaxed">
          A selection of my 2D illustration, concept art, and animation work. All assets are displayed directly on this page.
        </p>

        {/* Simple Full‑Width Image Layout */}
        <div className="flex flex-col gap-16 my-16">
          {twoDItems.map((item) => (
            <div
              key={item.name}
              className="w-full bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
              <p className="text-slate-600 mb-4">{item.description}</p>

              {/* Full‑Width Images */}
              <div className="flex flex-col gap-6">
                {item.images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${item.name} asset ${index + 1}`}
                    className="rounded-lg w-full object-cover"
                  />
                ))}
              </div>

              <div className="flex gap-2 flex-wrap mt-4">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" /> 
        <CTA />
      </section>
      <Footer />
    </>
  );
};

export default TwoD;
