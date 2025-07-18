// import React from "react";

// const SubServices = () => {
//   return (
//     <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
//       <div className="container">
//         <div className="relative z-2 max-w-2xl mx-auto text-center">
//           <div className="caption small-2 uppercase text-p3 mb-2">
//             Video Editing
//           </div>
//           <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
//             Amazingly Simple
//           </h1>
//           <p className="max-w-2xl mx-auto mb-14 body-1 max-md:mb-10">
//             We designed XORA AI Video Editor to be easy to use, quick to learn, and surprisingly powerful.
//           </p>
//         </div>
//         <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1230px] pointer-events-none hero-img_res">
//           <img
//             src="/hero.png"
//             className="size-1230 max-lg:h-auto"
//             alt="hero"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SubServices;

import Spline from '@splinetool/react-spline'

const SubServices = () => {
  return (
    <section className="relative bg-black min-h-screen w-full">
      {/* 3D Visual */}
      <div className="w-full h-screen">
        <Spline scene="https://prod.spline.design/M1pc3ITletKh4-fI/scene.splinecode" />
      </div>

      {/* Top right paragraph */}
      <div className="absolute top-28 right-4 sm:top-20 sm:right-6 md:top-28 md:right-8 lg:top-36 lg:right-12 xl:top-36 xl:right-16 2xl:top-44 2xl:right-20 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[450px] z-20">
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300 text-center font-normal leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
        Mahtab-Tech Agency delivers cutting-edge web solutions with precision and innovation. Our expert team of designers, developers, and strategists work seamlessly to transform your vision into powerful, scalable digital experiences that drive results.
        </p>
      </div>

      {/* Bottom left: Main content */}
      <div className="absolute bottom-20 left-4 right-4 md:bottom-8 md:left-8 md:right-8 lg:bottom-12 lg:left-12 lg:right-12 xl:bottom-16 xl:left-16 xl:right-16 2xl:bottom-20 2xl:left-20 2xl:right-20 transform z-10 max-w-2xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 md:mb-6 leading-tight">
          Our Services
        </h1>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          Mahtab-Tech Agency delivers cutting-edge web solutions with precision and innovation. Our expert team of designers, developers, and strategists work seamlessly to transform your vision into powerful, scalable digital experiences that drive results.
        </p>
      </div>

      {/* Bottom right: Spline button */}
      <a
        href="https://spline.design"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 z-20"
        style={{ textDecoration: "none" }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#18181b] border border-[#333] rounded-lg shadow hover:bg-[#23232a] transition">
         
          <span className="text-lg text-gray-200 font-medium">MAHTAB-TECH</span>
        </div>
      </a>
    </section>
  )
}

export default SubServices