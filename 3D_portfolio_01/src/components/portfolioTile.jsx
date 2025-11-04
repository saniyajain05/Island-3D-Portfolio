import Slider from "react-slick";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const PortfolioTile = ({ item }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Left: Image or Carousel */}
      <div className="md:w-1/2 w-full">
        {item.images && item.images.length > 1 ? (
          <Slider {...settings}>
            {item.images.map((img, i) => (
              <Link
                key={i}
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img}
                  alt={`${item.name}-${i}`}
                  className="w-full h-72 object-cover"
                />
              </Link>
            ))}
          </Slider>
        ) : (
          <Link to={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>
        )}
      </div>

      {/* Right: Text content */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold">{item.name}</h3>
        <p className="mt-2 text-slate-500 leading-relaxed">
          {item.description}
        </p>
        {item.tools && (
          <p className="mt-3 text-sm text-slate-400">
            <strong>Tools:</strong> {item.tools.join(", ")}
          </p>
        )}
        <div className="mt-4 flex items-center gap-2">
          <Link
            to={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 flex items-center gap-1"
          >
            View Work
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTile;
