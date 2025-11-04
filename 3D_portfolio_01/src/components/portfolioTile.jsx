import Slider from "react-slick";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";



const PortfolioTile = ({ item, fit = "cover" }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,                               // 👈 show arrows

    autoplay: item.images?.length > 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const fitClass = fit === "contain" ? "object-contain bg-black/5" : "object-cover";

  return (
    <div className="card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
      <div className="grid items-stretch min-h-[300px] md:min-h-[340px] lg:min-h-[380px] md:[grid-template-columns:1.65fr_1fr]">
        {/* LEFT SIDE - Carousel or single image */}
        <div className="relative w-full overflow-hidden h-[300px] md:h-[340px] lg:h-[380px] group">
          <div className="absolute inset-0 h-full">
            {item.images?.length > 1 ? (
              <div className="h-full
                [&_.slick-slider]:h-full
                [&_.slick-list]:h-full
                [&_.slick-track]:h-full
                [&_.slick-slide>div]:h-full">
                <Slider {...sliderSettings}>
                  {item.images.map((src, i) => (
                    <Link
                      key={i}
                      to={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={src}
                        alt={`${item.name}-${i + 1}`}
                        className={`w-full h-full ${fitClass}`}
                        loading="lazy"
                        draggable={false}
                      />
                    </Link>
                  ))}
                </Slider>
              </div>
            ) : (
              <Link
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className={`w-full h-full ${fitClass}`}
                  loading="lazy"
                  draggable={false}
                />
              </Link>
            )}
          </div>
        </div>

        {/* RIGHT SIDE - Text (unchanged) */}
        <div className="p-5 md:p-6 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-semibold">{item.name}</h3>
          <p className="mt-2 text-xs md:text-sm text-slate-400">
          
            {item.description}
          </p>
          {item.tools && (
              <p className="mt-2 text-slate-500 text-sm md:text-base">
              <strong>Tools:</strong> {item.tools.join(", ")}
            </p>
          )}
          <div className="mt-3">
            <Link
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold inline-flex items-center gap-1 text-sm md:text-base"
            >
              View Work
              <img src={arrow} alt="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTile;
