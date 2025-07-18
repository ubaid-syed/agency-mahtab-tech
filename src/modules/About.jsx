// // // // // import React from "react";

// // // // // const About = () => {
// // // // //   return (
// // // // //     <div className="h-screen w-full">
// // // // //       <div className="flex-col gap-16">
// // // // //         <div className="flex justify-around">
// // // // //           <div className="w-60 h-auto border border-white">
// // // // //             <h1>davix</h1>
// // // // //             <img src="" />
// // // // //             <p>testimonials comments client </p>
// // // // //           </div>
// // // // //           <div className="w-60 h-auto border border-white">
// // // // //             <h1>davix</h1>
// // // // //             <img src="" />
// // // // //             <p>testimonials comments client </p>
// // // // //           </div>
// // // // //           <div className="w-60 h-auto border border-white">
// // // // //             <h1>davix</h1>
// // // // //             <img src="" />
// // // // //             <p>testimonials comments client </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default About;

// // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // import gsap from 'gsap';
// // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // // // // const About = () => {

// // // // // //     const aboutRef = useRef(null);

// // // // // //     useEffect(() => {

// // // // // //         let ctx = gsap.context(() => {

// // // // // //             let clutter = '';
// // // // // //             aboutRef.current.textContent.split('').forEach((char) => {
// // // // // //                 clutter += `<span>${char}</span>`
// // // // // //             })
// // // // // //             aboutRef.current.innerHTML = clutter;

// // // // // //             let spans = gsap.utils.toArray('span', aboutRef.current);

// // // // // //             gsap.to(spans, {
// // // // // //                 color: 'black',
// // // // // //                 stagger: 0.5,
// // // // // //                 duration: 1,
// // // // // //                 ease: 'power2',
// // // // // //                 scrollTrigger: {
// // // // // //                     trigger: aboutRef.current,
// // // // // //                     start: 'top 50%',
// // // // // //                     end: 'bottom 70%',
// // // // // //                     scrub: 1,
// // // // // //                     // markers: true,
// // // // // //                 }
// // // // // //             });

// // // // // //         }, aboutRef);

// // // // // //         ScrollTrigger.refresh();

// // // // // //         return () => ctx.revert();
// // // // // //     }, []);

// // // // // //     return (
// // // // // //         <>
// // // // // //             <section className="about w-full h-full relative">
// // // // // //                 <div className="w-[95%] sm:w-[90%] mx-auto my-10">
// // // // // //                     <h2 className='mb-10 text-5xl font_neuemachina text-center'>About Us</h2>
// // // // // //                     <p ref={aboutRef} className='about_text text-black/10 text-[2rem] sm:text-[2.6rem] leading-[1.5] pb-10 sm:text-left text-center'>Working with Significo and their recommendation service has been a game-changer for our occupational prevention efforts. Our customers are extremely satisfied with the tool's impressive technical capabilities and data-driven approach. But what truly sets it apart is the intuitive and modern user experience it offers, making it a breeze for our clients to navigate. By leveraging this service, our customers have successfully tackled presenteeism and absenteeism.</p>
// // // // // //                 </div>
// // // // // //             </section>
// // // // // //         </>
// // // // // //     )
// // // // // // }

// // // // // // export default About
// // // // import React from "react";
// // // // import { motion } from "framer-motion";

// // // // const testimonials = Array.from({ length: 40 }, (_, i) => ({
// // // //   id: i,
// // // //   name: `Client ${i + 1}`,
// // // //   comment: "This service is amazing! Highly recommend.",
// // // //   img: "https://via.placeholder.com/150", // Replace with actual images
// // // // }));

// // // // const InfiniteScroll = () => {
// // // //   return (
// // // //     <div className="h-screen w-full overflow-hidden flex items-center justify-center bg-gray-900 text-white">
// // // //       <div className="relative w-full h-full flex flex-wrap justify-center items-center gap-6 overflow-hidden">
// // // //         <motion.div
// // // //           className="flex flex-wrap gap-6"
// // // //           initial={{ y: 0 }}
// // // //           animate={{ y: "-100%" }}
// // // //           transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
// // // //         >
// // // //           {[...testimonials, ...testimonials].map((testimonial, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className="p-4 border border-gray-700 rounded-lg shadow-lg bg-gray-800"
// // // //               style={{
// // // //                 width: `${Math.random() * (150 - 100) + 100}px`, // Varying widths
// // // //                 height: `${Math.random() * (220 - 150) + 150}px`, // Varying heights
// // // //               }}
// // // //             >
// // // //               <img
// // // //                 src={testimonial.img}
// // // //                 alt={testimonial.name}
// // // //                 className="w-12 h-12 rounded-full mb-2"
// // // //               />
// // // //               <h3 className="text-lg font-semibold">{testimonial.name}</h3>
// // // //               <p className="text-sm">{testimonial.comment}</p>
// // // //             </div>
// // // //           ))}
// // // //         </motion.div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default InfiniteScroll;

// import React from "react";

// const About = () => {
//   return (
//     <div
//       id="abc"
//       // style={{ backgroundColor: "red" }}
//       className="text-center  relative flex  flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-white min-h-[500px] rounded-3xl mt-24 w-full  "
//     >
//       <h1 className="text-4xl md:text-5xl -mt-18 lg:text-6xl font-sans font-normal leading-tight">
//         Give no-code a yes-mode.
//       </h1>
//       <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:gap-6 lg:gap-8">
//         <button className="relative bg-transparent border-2  rounded-full w-36 h-10 text-white font-light text-base md:text-lg transition-all duration-300 hover:border-transparent hover:w-40 group overflow-hidden hover:text-black border-white">
//           <span className="relative z-10 flex items-center justify-center gap-1">
//             LET'S TALK
//           </span>
//           <span className="absolute inset-0 bg-gradient-to-r from-pink-300 via-blue-100 to-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div
//       id="abc"
//       // style={{ backgroundColor: "red" }}
//       className="text-center  relative flex  flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-white min-h-[500px] rounded-3xl mt-24 w-full  "
//     >
//       <h1 className="text-4xl md:text-5xl -mt-18 lg:text-6xl font-sans font-normal leading-tight">
//         Give no-code a yes-mode.
//       </h1>
//       <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:gap-6 lg:gap-8">
//         <button className="relative bg-transparent border-2  rounded-full w-36 h-10 text-white font-light text-base md:text-lg transition-all duration-300 hover:border-transparent hover:w-40 group overflow-hidden hover:text-black border-white">
//           <span className="relative z-10 flex items-center justify-center gap-1">
//             LET'S TALK
//           </span>
//           <span className="absolute inset-0 bg-gradient-to-r from-pink-300 via-blue-100 to-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default About;

// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";

// // // const About = () => {
// // //   const [hoverPosition, setHoverPosition] = useState({ x: -100, y: -100 });

// // //   const handleMouseMove = (e) => {
// // //     setHoverPosition({ x: e.clientX, y: e.clientY });
// // //   };

// // //   return (
// // //     <div
// // //       className="relative w-full h-screen bg-black overflow-hidden"
// // //       onMouseMove={handleMouseMove}
// // //     >
// // //       {/* Grid */}
// // //       <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1 opacity-10">
// // //         {[...Array(100)].map((_, index) => (
// // //           <div key={index} className="border border-gray-700"></div>
// // //         ))}
// // //       </div>

// // //       {/* Hover effect */}
// // //       <motion.div
// // //         className="absolute bg-white opacity-50 w-40 h-40 rounded-full"
// // //         style={{ top: hoverPosition.y - 80, left: hoverPosition.x - 80 }}
// // //         animate={{ opacity: [0, 1, 0.5] }}
// // //         transition={{ duration: 0.3 }}
// // //       />

// // //       {/* Content */}
// // //       <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
// // //         Hover to Reveal Content
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default About;

// // // import React, { useState } from "react";
// // // import { motion } from "framer-motion";

// // // const gridSize = 10; // 10x10 grid

// // // const About = () => {
// // //   // const [hoveredIndex, setHoveredIndex] = useState(null);

// // //   return (
// // //     <div className="relative w-full h-screen bg-black flex">
// // //       {/* Grid */}
// // //       <div className="grid grid-cols-10 grid-rows-10 gap-1 w-full h-screen">
// // //         {[...Array(gridSize * gridSize)].map((_, index) => (
// // //           <motion.div
// // //             key={index}
// // //             className="w-40 h-40 flex border border-gray-700 text-white text-sm opacity-1"
// // //             // animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
// // //             transition={{ duration: 0.3 }}
// // //           >
// // //             {/* Content {index + 1} */}
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default About;

// // import React from "react";
// // import "./About.css";

// // const hexagonRows = 20; // Number of rows of hexagons
// // const hexagonsPerRow = 16; // Number of hexagons in each row

// // const About = () => {
// //   const renderHexagons = () => {
// //     let hexagons = [];
// //     for (let i = 0; i < hexagonRows; i++) {
// //       let rowHexagons = [];
// //       for (let j = 0; j < hexagonsPerRow; j++) {
// //         rowHexagons.push(<div key={`${i}-${j}`} className="hexagon"></div>);
// //       }
// //       hexagons.push(
// //         <div key={i} className="hexagon-row">
// //           {rowHexagons}
// //         </div>
// //       );
// //     }
// //     return hexagons;
// //   };

// //   return <div className="container">{renderHexagons()}</div>;
// // };

// // export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div className="py-10 bg-gray-100 sm:py-16 lg:py-24">
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div className="max-w-2xl mx-auto text-center">
//           <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
//             Contact us
//           </h2>
//           <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//             sint. Velit officia consequat duis.
//           </p>
//         </div>

//         <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
//           <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
//             <div className="overflow-hidden bg-white rounded-xl">
//               <div className="p-6">
//                 <svg
//                   className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1"
//                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                   />
//                 </svg>
//                 <p className="mt-6 text-lg font-medium text-gray-900">
//                   +1-316-555-0116
//                 </p>
//                 <p className="mt-1 text-lg font-medium text-gray-900">
//                   +1-446-526-0117
//                 </p>
//               </div>
//             </div>

//             <div className="overflow-hidden bg-white rounded-xl">
//               <div className="p-6">
//                 <svg
//                   className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1"
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 <p className="mt-6 text-lg font-medium text-gray-900">
//                   contact@example.com
//                 </p>
//                 <p className="mt-1 text-lg font-medium text-gray-900">
//                   hr@example.com
//                 </p>
//               </div>
//             </div>

//             <div className="overflow-hidden bg-white rounded-xl">
//               <div className="p-6">
//                 <svg
//                   className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1"
//                     d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1"
//                     d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                 </svg>
//                 <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">
//                   8502 Preston Rd. Ingle, Maine 98380, USA
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 overflow-hidden bg-white rounded-xl">
//             <div className="px-6 py-12 sm:p-12">
//               <h3 className="text-3xl font-semibold text-center text-gray-900">
//                 Send us a message
//               </h3>

//               <form action="#" method="POST" className="mt-14">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
//                   <div>
//                     <label
//                       htmlFor=""
//                       className="text-base font-medium text-gray-900"
//                     >
//                       Your name
//                     </label>
//                     <div className="mt-2.5 relative">
//                       <input
//                         type="text"
//                         placeholder="Enter your full name"
//                         className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor=""
//                       className="text-base font-medium text-gray-900"
//                     >
//                       Email address
//                     </label>
//                     <div className="mt-2.5 relative">
//                       <input
//                         type="email"
//                         placeholder="Enter your full name"
//                         className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor=""
//                       className="text-base font-medium text-gray-900"
//                     >
//                       Phone number
//                     </label>
//                     <div className="mt-2.5 relative">
//                       <input
//                         type="tel"
//                         placeholder="Enter your full name"
//                         className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor=""
//                       className="text-base font-medium text-gray-900"
//                     >
//                       Company name
//                     </label>
//                     <div className="mt-2.5 relative">
//                       <input
//                         type="text"
//                         placeholder="Enter your full name"
//                         className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
//                       />
//                     </div>
//                   </div>

//                   <div className="sm:col-span-2">
//                     <label
//                       htmlFor=""
//                       className="text-base font-medium text-gray-900"
//                     >
//                       Message
//                     </label>
//                     <div className="mt-2.5 relative">
//                       <textarea
//                         placeholder=""
//                         className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
//                         rows="4"
//                       ></textarea>
//                     </div>
//                   </div>

//                   <div className="sm:col-span-2">
//                     <button
//                       type="submit"
//                       className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
//                     >
//                       Send
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div
//       id="abc"
//       // style={{ backgroundColor: "red" }}
//       className="text-center  relative flex  flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-white min-h-[500px] rounded-3xl mt-24 w-full  "
//     >
//       <h1 className="text-4xl md:text-5xl -mt-18 lg:text-6xl font-sans font-normal leading-tight">
//         Give no-code a yes-mode.
//       </h1>
//       <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:gap-6 lg:gap-8">
//         <button className="relative bg-transparent border-2  rounded-full w-36 h-10 text-white font-light text-base md:text-lg transition-all duration-300 hover:border-transparent hover:w-40 group overflow-hidden hover:text-black border-white">
//           <span className="relative z-10 flex items-center justify-center gap-1">
//             LET'S TALK
//           </span>
//           <span className="absolute inset-0 bg-gradient-to-r from-pink-300 via-blue-100 to-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default About;

 import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="abc"
      className="text-center relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 text-white min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-3xl mt-12 sm:mt-16 md:mt-20 lg:mt-24 w-full"
    >
      <div className="relative w-full">
        <div className="absolute top-[80%] -translate-y-1/2 left-1/2 -translate-x-1/2 mt-10 sm:mt-12 md:mt-14 lg:mt-16">
          <img
            className="img_rotate w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
            src="./Preloader SVG.svg"
            alt=""
          />
        </div>
        <div className="absolute top-[80%] -translate-y-1/2 left-1/2 -translate-x-1/2 mt-10 sm:mt-12 md:mt-14 lg:mt-16 border border-white rounded-full p-4 sm:p-5 md:p-6 lg:p-7">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            viewBox="0 0 32 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 0.703124C16 9.53968 8.83656 16.7031 0 16.7031"
              stroke="white"
              strokeWidth="2"
            ></path>
            <path
              d="M16 0.703124C16 9.53968 23.1634 16.7031 32 16.7031"
              stroke="white"
              strokeWidth="2"
            ></path>
            <path
              d="M16 0.703125L16 37.2746"
              stroke="white"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-normal leading-tight -mt-12 sm:-mt-14 md:-mt-16 lg:-mt-18 px-4 sm:px-6 md:px-8">
        Give no-code a yes-mode.
      </h1>
    </div>
  );
};

export default About;