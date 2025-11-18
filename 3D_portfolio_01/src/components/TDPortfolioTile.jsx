import React, { useState } from "react";
import Slider from "react-slick";

const PortfolioTile = ({ item }) => {
  const [popupImage, setPopupImage] = useState(null);

  const openImage = (src) => setPopupImage(src);
  const closeImage = () => setPopupImage(null);

  // Explicit distinction
  const heroImages =
    (item.heroImages && item.heroImages.length > 0
      ? item.heroImages
      : item.images) || [];

  const bottomImages =
    (item.bottomImages && item.bottomImages.length > 0
      ? item.bottomImages
      : heroImages.slice(1)) || [];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: item.carousel && heroImages.length > 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6 rounded-2xl bg-white shadow-lg border border-slate-200 space-y-6">

      {/* POPUP MODAL */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={popupImage}
            alt="Full"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
          />
        </div>
      )}

      {/* TOP — HERO IMAGE / CAROUSEL */}
      <div className="w-full rounded-2xl overflow-hidden">
        {item.carousel && heroImages.length > 1 ? (
          <Slider {...sliderSettings}>
            {heroImages.map((src, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => openImage(src)}
              >
                <img
                  src={src}
                  alt={`${item.name}-hero-${index + 1}`}
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </Slider>
        ) : heroImages.length > 0 ? (
          <div
            className="cursor-pointer"
            onClick={() => openImage(heroImages[0])}
          >
            <img
              src={heroImages[0]}
              alt={item.name}
              className="w-full h-auto object-cover"
            />
          </div>
        ) : null}
      </div>

      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">{item.name}</h2>
      </div>

      {/* MIDDLE — Description + Divider + Tools */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
        {/* Explanation */}
        <p className="flex-1 text-slate-600 leading-relaxed">
          {item.description}
        </p>

        {/* Vertical line */}
        <div className="hidden md:block w-px self-stretch bg-slate-200" />

        {/* Tools list */}
        <div className="md:w-48 flex md:flex-col gap-2 md:items-end">
          {item.tools?.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full border border-slate-300 text-xs md:text-sm text-slate-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* BOTTOM — THREE STATIC IMAGES (NOT CAROUSEL) */}
      {bottomImages.length > 0 && (
        <>
          <div className="h-px bg-slate-200" />

          <div className="grid grid-cols-3 gap-4 h-40 md:h-48">
            {bottomImages.slice(0, 3).map((img, index) => (
              <div
                key={index}
                className="w-full h-full rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openImage(img)}
              >
                <img
                  src={img}
                  alt={`${item.name}-bottom-${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </>
      )}

      {/* Link */}
      {item.link && (
        <div className="pt-2 flex justify-end">
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-600 underline"
          >
            View full project →
          </a>
        </div>
      )}
    </div>
  );
};

export default PortfolioTile;
