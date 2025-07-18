import React from "react";

const HeroLine = ({ title, src, alt, id, width }) => {
  if (id == 15) {
    // console.log(title, src, width);
  }

  return (
    <>
      <div
        data-number={id}
        className="hero_row_elem flex items-center gap-3 sm:gap-7"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font_neuemachina">
          {title}
        </h1>
        <div className="img_div w-[2rem] h-[2rem] sm:w-[2.5rem] sm:h-[2.5rem] md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem] rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={src}
            alt={alt}
          />
        </div>
      </div>
    </>
  );
};

export default HeroLine;
