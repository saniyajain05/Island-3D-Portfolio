import PortfolioTile from "../components/portfolioTile";
import CTA from "../components/CTA";
import Footer from "../components/footer";

const portfolioItems = [
  {
    name: "Authenticating - a Solo 3D Short Film",
    description:
      "A 3D animated short about Guy and his AI-driven car that goes wrong.",
    images: [
      "/assets/images/auth-1.jpg",
      "/assets/images/auth-2.jpg",
      "/assets/images/auth-3.jpg",
    ],
    tools: ["Maya", "After Effects", "Substance Painter"],
    link: "https://vimeo.com/1121339170",
  },
  {
    name: "3D Modeling & Texturing Showcase",
    description:
      "A collection of modeling, texturing, and rigging work using industry tools.",
    image: "/assets/images/modeling-thumb.jpg",
    tools: ["ZBrush", "Maya", "Substance Painter"],
    link: "https://saniyajain6.artstation.com/albums/11661566",
  },
];

const Portfolio = () => (
  <>
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Portfolio
        </span>
      </h1>

      <div className="flex flex-col gap-16 my-20">
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

export default Portfolio;
