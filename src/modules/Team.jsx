// // import React, { useState, useEffect, useRef } from "react";
// // import { motion } from "framer-motion";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import SplitType from "split-type";

// // gsap.registerPlugin(ScrollTrigger);

// // const teamSteps = [
// //   {
// //     id: 1,
// //     title: "Discovery Design",
// //     description:
// //       "Getting to know your business case and planning the optimal approach to best fit your desired timeframe and budget.",
// //     skills: ["UI/UX", "Branding", "Web Dev", "SEO", "Marketing"],
// //   },
// //   {
// //     id: 2,
// //     title: "Development",
// //     description:
// //       "Building your digital product using the latest technologies to ensure performance, scalability, and user satisfaction.",
// //     skills: ["React.js", "Tailwind", "GSAP", "WordPress", "Shopify"],
// //   },
// //   {
// //     id: 3,
// //     title: "Testing & QA",
// //     description:
// //       "Ensuring quality with rigorous testing and debugging to deliver a flawless and efficient product.",
// //     skills: ["Automation", "Manual Testing", "Performance", "Security"],
// //   },
// //   {
// //     id: 4,
// //     title: "Deployment & Maintenance",
// //     description:
// //       "Deploying your product seamlessly and providing ongoing support to maintain peak performance.",
// //     skills: ["DevOps", "Cloud Hosting", "Maintenance", "SEO Audits"],
// //   },
// // ];

// // const Team = () => {
// //   const [activeIndex, setActiveIndex] = useState(0);
// //   const containerRef = useRef(null);
// //   const cardRefs = useRef([]);

// //   const headingRef = useRef(null);
// //   useEffect(() => {
// //     // Split text into letters
// //     const text = new SplitType(headingRef.current, { types: "chars" });

// //     // Animate each letter
// //     gsap.fromTo(
// //       text.chars,
// //       { opacity: 0, y: 30 },
// //       {
// //         opacity: 1,
// //         y: 0,
// //         duration: 0.6,
// //         ease: "power3.out",
// //         stagger: 0.05,
// //         scrollTrigger: {
// //           trigger: headingRef.current,
// //           start: "top 80%",
// //           toggleActions: "play none none reverse",
// //         },
// //       }
// //     );
// //     const cards = cardRefs.current;

// //     cards.forEach((card, index) => {
// //       ScrollTrigger.create({
// //         trigger: card,
// //         start: "top center",
// //         end: "bottom center",
// //         onEnter: () => setActiveIndex(index),
// //         onEnterBack: () => setActiveIndex(index),
// //       });
// //     });
// //   }, []);

// //   return (
// //     <div className="relative bg-black text-white px-36 py-10">
// //       {/* Outer Wrapper - Makes sure the section is tall enough */}
// //       <div className="flex relative">
// //         {/* Left Sticky Title Section */}
// //         <div className="w-1/3 h-screen sticky top-32 flex items-start">
// //           <h2
// //             ref={headingRef}
// //             className="text-3xl sm:text-5xl font_neuemachina leading-tight"
// //           >
// //             Our Approch
// //           </h2>
// //         </div>

// //         {/* Right Side - Animated Cards */}
// //         <div className="w-2/3 flex flex-col gap-16" ref={containerRef}>
// //           {teamSteps.map((step, index) => (
// //             <motion.div
// //               key={step.id}
// //               ref={(el) => (cardRefs.current[index] = el)}
// //               initial={{ opacity: 0, y: 50 }}
// //               animate={{
// //                 opacity: activeIndex === index ? 1 : 0.5,
// //                 y: activeIndex === index ? 0 : 20,
// //               }}
// //               transition={{ duration: 0.5 }}
// //               // className={`border w-[45vw] min-h-[300px] rounded-xl p-6 flex flex-col justify-between text-white transition-all duration-500 ${
// //               //   activeIndex === index
// //               //     ? "border-[#001A5F] shadow-lg shadow-purple-500/30"
// //               //     : "border-gray-500"
// //               // }`}
// //               className={`border w-[45vw] min-h-[300px] rounded-xl p-6 flex flex-col justify-between text-white transition-all duration-500 ${
// //                 activeIndex === index
// //                   ? "border-[#001A5F] shadow-[-7px_-7px_20px_-5px_#001A5F]"
// //                   : "border-gray-500 shadow-[-7px_-10px_20px_-5px_rgba(107,114,128,0.2)]"
// //               }`}
// //             >
// //               {/* Top Section */}
// //               <div className="flex items-center justify-between">
// //                 <h1 className="text-2xl font-bold">{`0${index + 1}`}</h1>
// //                 <svg
// //                   className={`w-6 h-6 transition-colors duration-500 ${
// //                     activeIndex === index ? "text-[#001A5F]" : "text-gray-500"
// //                   }`}
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 >
// //                   <circle cx="12" cy="12" r="10"></circle>
// //                   <line x1="12" y1="8" x2="12" y2="16"></line>
// //                   <line x1="8" y1="12" x2="16" y2="12"></line>
// //                 </svg>
// //               </div>

// //               {/* Bottom Section */}
// //               <div className="space-y-3">
// //                 <h2 className="text-xl font-akro tracking-wide">
// //                   {step.title}
// //                 </h2>
// //                 <p className="text-sm text-gray-300 font-akro tracking-wide">
// //                   {step.description}
// //                 </p>

// //                 {/* Horizontal Line */}
// //                 <div className="flex justify-center">
// //                   <hr className="w-full border-t-2 mt-2 transition-all duration-500" />
// //                 </div>

// //                 {/* Skills List */}
// //                 <div className="flex gap-4 text-gray-400 text-sm font-akro tracking-wide uppercase mt-2">
// //                   {step.skills.map((skill, i) => (
// //                     <span key={i}>{skill}</span>
// //                   ))}
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Team;

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger);

// const teamSteps = [
//   {
//     id: 1,
//     title: "Discovery Design",
//     description:
//       "Getting to know your business case and planning the optimal approach to best fit your desired timeframe and budget.",
//     skills: ["UI/UX", "Branding", "Web Dev", "SEO", "Marketing"],
//   },
//   {
//     id: 2,
//     title: "Development",
//     description:
//       "Building your digital product using the latest technologies to ensure performance, scalability, and user satisfaction.",
//     skills: ["React.js", "Tailwind", "GSAP", "WordPress", "Shopify"],
//   },
//   {
//     id: 3,
//     title: "Testing & QA",
//     description:
//       "Ensuring quality with rigorous testing and debugging to deliver a flawless and efficient product.",
//     skills: ["Automation", "Manual Testing", "Performance", "Security"],
//   },
//   {
//     id: 4,
//     title: "Deployment & Maintenance",
//     description:
//       "Deploying your product seamlessly and providing ongoing support to maintain peak performance.",
//     skills: ["DevOps", "Cloud Hosting", "Maintenance", "SEO Audits"],
//   },
// ];

// const Team = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const headingRef = useRef(null);

//   useEffect(() => {
//     const text = new SplitType(headingRef.current, { types: "chars" });
//     gsap.fromTo(
//       text.chars,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         ease: "power3.out",
//         stagger: 0.05,
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     const cards = cardRefs.current;
//     cards.forEach((card, index) => {
//       ScrollTrigger.create({
//         trigger: card,
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => setActiveIndex(index),
//         onEnterBack: () => setActiveIndex(index),
//       });
//     });
//   }, []);

//   return (
//     <div className="relative bg-black text-white px-6 md:px-12 lg:px-36 py-10">
//       <div className="flex flex-col lg:flex-row relative">
//         <div className="lg:w-1/3 h-auto lg:h-screen sticky top-16 flex items-start lg:items-center">
//           <h2
//             ref={headingRef}
//             className="text-3xl sm:text-4xl md:text-5xl font_neuemachina leading-tight"
//           >
//             Our Approach
//           </h2>
//         </div>

//         <div
//           className="lg:w-2/3 flex flex-col gap-8 lg:gap-16 mt-8 lg:mt-0"
//           ref={containerRef}
//         >
//           {teamSteps.map((step, index) => (
//             <motion.div
//               key={step.id}
//               ref={(el) => (cardRefs.current[index] = el)}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{
//                 opacity: activeIndex === index ? 1 : 0.5,
//                 y: activeIndex === index ? 0 : 20,
//               }}
//               transition={{ duration: 0.5 }}
//               className={`border w-full lg:w-[45vw] min-h-[250px] md:min-h-[300px] rounded-xl p-4 md:p-6 flex flex-col justify-between text-white transition-all duration-500 ${
//                 activeIndex === index
//                   ? "border-[#001A5F] shadow-[-7px_-7px_20px_-5px_#001A5F]"
//                   : "border-gray-500 shadow-[-7px_-10px_20px_-5px_rgba(107,114,128,0.2)]"
//               }`}
//             >
//               <div className="flex items-center justify-between">
//                 <h1 className="text-xl md:text-2xl font-bold">{`0${
//                   index + 1
//                 }`}</h1>
//                 <svg
//                   className={`w-5 md:w-6 h-5 md:h-6 transition-colors duration-500 ${
//                     activeIndex === index ? "text-[#001A5F]" : "text-gray-500"
//                   }`}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <circle cx="12" cy="12" r="10"></circle>
//                   <line x1="12" y1="8" x2="12" y2="16"></line>
//                   <line x1="8" y1="12" x2="16" y2="12"></line>
//                 </svg>
//               </div>
//               <div className="space-y-3">
//                 <h2 className="text-lg md:text-xl font-akro tracking-wide">
//                   {step.title}
//                 </h2>
//                 <p className="text-sm text-gray-300 font-akro tracking-wide">
//                   {step.description}
//                 </p>
//                 <div className="flex justify-center">
//                   <hr className="w-full border-t-2 mt-2 transition-all duration-500" />
//                 </div>
//                 <div className="flex flex-wrap gap-2 text-gray-400 text-xs md:text-sm font-akro tracking-wide uppercase mt-2">
//                   {step.skills.map((skill, i) => (
//                     <span key={i} className="px-2 py-1 bg-gray-800 rounded-md">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const teamSteps = [
  {
    id: 1,
    svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/660572a0eb3a7adbd1a04980_Frame.svg",
    title: "Discovery ",
    description:
      "Getting to know your business case and planning the optimal approach to best fit your desired timeframe and budget.",
    skills: [],
  },
  {
    id: 2,
    svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/6605745e5b4a0824e818dda2_Frame%20(1).svg",
    title: "Design",
    description:
      "Going through a comprehensive UX/UI, incl. research, wireframing, design system and concept tailored to your business and target audience.",
    skills: ["Figma", "Adobe CS", "Spline", "Blender"],
  },
  {
    id: 3,
    svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/6605790966fbd5f9931144c4_Frame%20(3).svg",
    title: "Development",
    description:
      "Implementing designs seamlessly and with pixel-perfect accuracy & creatively tweaking the flow to match the design concept.",
    skills: ["WordPress", "Webflow", "Shopify", "Wix", "Javascript", "GSAP"],
  },
  {
    id: 4,
    svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/66057edeeb884e2adfbf0393_Frame%20(5).svg",
    title: "Integrations & QA",
    description:
      "Incorporating automations and third-party tool integrations to ensure quality assurance of the entire project.",
    skills: [
      "Wized",
      "Memberstack",
      "Xano",
      "Make",
      "Zapier",
      "Airtable",
      "Stripe",
    ],
  },
  {
    id: 5,
    svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/660589747f11857d24507ecd_Frame%20(7).svg",
    title: "Launch",
    description:
      "Finishing your project strong with a seamless go-live. Painless and smooth.",
    skills: [],
  },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const headingRef = useRef(null);
  const maskRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const text = new SplitType(headingRef.current, { types: "chars" });
    gsap.fromTo(
      text.chars,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
        fontFamily: "NeueMachina-Regular",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
    cardRefs.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    // Sticky heading with GSAP pinning - only for large screens
    let pinTrigger;
    if (sectionRef.current && headingRef.current && window.innerWidth >= 1024) {
      pinTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 30%", // Changed from "top top" to start a bit lower
        end: () => `bottom top+=340`, // Reduced from 40 to 20 to end even earlier
        pin: headingRef.current,
        pinSpacing: false,
        scrub: false,
        // markers: true,
      });
    }

    const handleMouseMove = (e) => {
      if (maskRef.current) {
        const rect = maskRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        maskRef.current.style.setProperty("--x", `${x}px`);
        maskRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (pinTrigger) pinTrigger.kill();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-black text-white px-6 md:px-12 lg:px-48 py-16"
    >
      <div className="absolute inset-0 bg-[url('https://media-hosting.imagekit.io//b5c2b1e63b7941dd/Grid%20design%20(1).svg?Expires=1836595791&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y7i~Sp4HxriUzLRS-wAhNc6Wpu2Bs8TCwWpwshqL65aBivuCcIBZ4Ev4tW~9jiGrT4MTwS~GXXeiSiDS0Cm7HsrVJMVKtTbyG0W~B6WqZ2fl1nVHUGb7o2K-mnIbu3q~Bkgwftv0IR7FESD62~UzwxlEIvgPdQIYHl28nfQn~dMQh0MZXCotp19ozlbjc~~B0m3HeqiVaJG4B5Vbx1y-aYb6k6nz83Rtj3UME8YWwo~5Uag8zkfiTtoUJbpPWKjRxZgKB2DDC3r2sI~4tXCtWMrJk-NM8SFZHkX~yB08S41Zmj561zW2DsNfIJayUQp-alKIMAJbe2KoZOZCZh2nDA__')] bg-contain bg-center opacity-100" />
      <div
        ref={maskRef}
        className="absolute inset-0 bg-black"
        style={{
          maskImage:
            "radial-gradient(circle 350px at var(--x, 50%) var(--y, 50%), transparent, black 70%)",
          WebkitMaskImage:
            "radial-gradient(circle 350px at var(--x, 50%) var(--y, 50%), transparent, black 70%)",
        }}
      />
      <div className="flex flex-col lg:flex-row relative lg:gap-20">
        <div className="lg:w-1/2 h-auto flex items-start ">
          <h2
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font_neuemachina leading-tight lg:-ml-32  md:w-[30rem] lg:w-[30rem] "
            style={{ willChange: "transform" }}
          >
            Our Approach
          </h2>
        </div>

        <div
          className="lg:w-2/3 flex flex-col gap-12 mt-8 lg:mt-0"
          ref={containerRef}
        >
          {teamSteps.map((step, index) => (
            <motion.div
              key={step.id}
              ref={(el) => (cardRefs.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0.6,
                y: activeIndex === index ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className={`border w-full lg:w-[50vw] min-h-[280px] md:min-h-[320px] rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 shadow-lg hover:shadow-2xl ${
                activeIndex === index
                  ? "border-[#001A5F] bg-opacity-90"
                  : "border-gray-600 bg-opacity-70"
              }`}
            >
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-bold">{`0${
                  index + 1
                }`}</h1>
                <div>
                  <img
                    src={step.svgs}
                    className={`transition-all duration-500 ${
                      activeIndex === index ? " grayscale-0 " : " grayscale"
                    }`}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  {step.title}
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.description}
                </p>
                <div className="w-full border-t-2 mt-2" />
                <div className="flex flex-wrap gap-3 text-gray-400 text-sm uppercase">
                  {step.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger);

// const teamSteps = [
//   {
//     id: 1,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/660572a0eb3a7adbd1a04980_Frame.svg",
//     title: "Discovery Design",
//     description:
//       "Getting to know your business case and planning the optimal approach to best fit your desired timeframe and budget.",
//     skills: [],
//   },
//   {
//     id: 2,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/6605745e5b4a0824e818dda2_Frame%20(1).svg",
//     title: "Development",
//     description:
//       "Building your digital product using the latest technologies to ensure performance, scalability, and user satisfaction.",
//     skills: ["React.js", "Tailwind", "GSAP", "WordPress", "Shopify"],
//   },
//   {
//     id: 3,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/6605790966fbd5f9931144c4_Frame%20(3).svg",
//     title: "Testing & QA",
//     description:
//       "Ensuring quality with rigorous testing and debugging to deliver a flawless and efficient product.",
//     skills: ["Automation", "Manual Testing", "Performance", "Security"],
//   },
//   {
//     id: 4,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/66057edeeb884e2adfbf0393_Frame%20(5).svg",
//     title: "Deployment & Maintenance",
//     description:
//       "Deploying your product seamlessly and providing ongoing support to maintain peak performance.",
//     skills: ["DevOps", "Cloud Hosting", "Maintenance", "SEO Audits"],
//   },
//   {
//     id: 5,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/660589747f11857d24507ecd_Frame%20(7).svg",
//     title: "Launch",
//     description:
//       "Finishing your project strong with a seamless go-live. Painless and smooth.",
//     skills: [],
//   },
// ];

// const Team = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const headingRef = useRef(null);

//   useEffect(() => {
//     const text = new SplitType(headingRef.current, { types: "chars" });
//     gsap.fromTo(
//       text.chars,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         ease: "power3.out",
//         stagger: 0.05,
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     cardRefs.current.forEach((card, index) => {
//       ScrollTrigger.create({
//         trigger: card,
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => setActiveIndex(index),
//         onEnterBack: () => setActiveIndex(index),
//       });
//     });
//   }, []);

//   return (
//     <div className="relative grid bg-black text-white px-6 md:px-12 lg:px-48 py-16">
//       <div className="flex flex-col lg:flex-row relative lg:gap-20">
//         <div className="lg:w-1/3 h-auto lg:h-screen sticky top-20 flex items-start ">
//           <h2
//             ref={headingRef}
//             className="text-4xl sm:text-5xl  md:text-6xl lg:text-5xl font_neuemachina leading-tight lg:-ml-36"
//           >
//             Our Approach
//           </h2>
//         </div>

//         <div
//           className="lg:w-2/3 flex flex-col gap-12 mt-8 lg:mt-0"
//           ref={containerRef}
//         >
//           {teamSteps.map((step, index) => (
//             <motion.div
//               key={step.id}
//               ref={(el) => (cardRefs.current[index] = el)}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{
//                 opacity: activeIndex === index ? 1 : 0.6,
//                 y: activeIndex === index ? 0 : 20,
//               }}
//               transition={{ duration: 0.5 }}
//               className={`border w-full lg:w-[50vw] min-h-[280px] md:min-h-[320px] rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 shadow-lg hover:shadow-2xl ${
//                 activeIndex === index
//                   ? "border-[#001A5F] bg-opacity-90"
//                   : "border-gray-600 bg-opacity-70"
//               }`}
//             >
//               <div className="flex items-center justify-between">
//                 <h1 className="text-2xl md:text-3xl font-bold">{`0${
//                   index + 1
//                 }`}</h1>
//                 <div>
//                   <img
//                     src={step.svgs}
//                     className={`transition-all duration-500 ${
//                       activeIndex === index ? " grayscale-0 " : " grayscale"
//                     }`}
//                   />
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <h2 className="text-xl md:text-2xl font-semibold">
//                   {step.title}
//                 </h2>
//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   {step.description}
//                 </p>
//                 <div className="w-full border-t-2 mt-2" />
//                 <div className="flex flex-wrap gap-3 text-gray-400 text-sm uppercase">
//                   {step.skills.map((skill, i) => (
//                     <span key={i} className="px-3 py-1 bg-gray-800 rounded-lg">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;




// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger);

// const teamSteps = [
//   {
//     id: 1,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/660572a0eb3a7adbd1a04980_Frame.svg",
//     title: "Discovery ",
//     description:
//       "Getting to know your business case and planning the optimal approach to best fit your desired timeframe and budget.",
//     skills: [],
//   },
//   {
//     id: 2,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/6605745e5b4a0824e818dda2_Frame%20(1).svg",
//     title: "Design",
//     description:
//       "Going through a comprehensive UX/UI, incl. research, wireframing, design system and concept tailored to your business and target audience.",
//     skills: ["Figma", "Adobe CS", "Spline", "Blender"],
//   },
//   {
//     id: 3,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/6605790966fbd5f9931144c4_Frame%20(3).svg",
//     title: "Development",
//     description:
//       "Implementing designs seamlessly and with pixel-perfect accuracy & creatively tweaking the flow to match the design concept.",
//     skills: ["WordPress", "Webflow", "Shopify", "Wix", "Javascript", "GSAP"],
//   },
//   {
//     id: 4,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/66057edeeb884e2adfbf0393_Frame%20(5).svg",
//     title: "Integrations & QA",
//     description:
//       "Incorporating automations and third-party tool integrations to ensure quality assurance of the entire project.",
//     skills: [
//       "Wized",
//       "Memberstack",
//       "Xano",
//       "Make",
//       "Zapier",
//       "Airtable",
//       "Stripe",
//     ],
//   },
//   {
//     id: 5,
//     svgs: "https://cdn.prod.website-files.com/659e31f41269f42141b25976/660589747f11857d24507ecd_Frame%20(7).svg",
//     title: "Launch",
//     description:
//       "Finishing your project strong with a seamless go-live. Painless and smooth.",
//     skills: [],
//   },
// ];

// const Team = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const headingRef = useRef(null);
//   const maskRef = useRef(null);

//   useEffect(() => {
//     const text = new SplitType(headingRef.current, { types: "chars" });
//     gsap.fromTo(
//       text.chars,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         ease: "power3.out",
//         stagger: 0.05,
//         fontFamily: "NeueMachina-Regular",
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//     cardRefs.current.forEach((card, index) => {
//       ScrollTrigger.create({
//         trigger: card,
//         start: "top center",
//         end: "bottom center",
//         onEnter: () => setActiveIndex(index),
//         onEnterBack: () => setActiveIndex(index),
//       });
//     });

//     const handleMouseMove = (e) => {
//       if (maskRef.current) {
//         const rect = maskRef.current.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         maskRef.current.style.setProperty("--x", `${x}px`);
//         maskRef.current.style.setProperty("--y", `${y}px`);
//       }
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     return () => document.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="relative  bg-black text-white px-6 md:px-12 lg:px-48 py-16">
//       <div className="absolute inset-0 bg-[url('https://media-hosting.imagekit.io//b5c2b1e63b7941dd/Grid%20design%20(1).svg?Expires=1836595791&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y7i~Sp4HxriUzLRS-wAhNc6Wpu2Bs8TCwWpwshqL65aBivuCcIBZ4Ev4tW~9jiGrT4MTwS~GXXeiSiDS0Cm7HsrVJMVKtTbyG0W~B6WqZ2fl1nVHUGb7o2K-mnIbu3q~Bkgwftv0IR7FESD62~UzwxlEIvgPdQIYHl28nfQn~dMQh0MZXCotp19ozlbjc~~B0m3HeqiVaJG4B5Vbx1y-aYb6k6nz83Rtj3UME8YWwo~5Uag8zkfiTtoUJbpPWKjRxZgKB2DDC3r2sI~4tXCtWMrJk-NM8SFZHkX~yB08S41Zmj561zW2DsNfIJayUQp-alKIMAJbe2KoZOZCZh2nDA__')] bg-contain bg-center opacity-100" />
//       <div
//         ref={maskRef}
//         className="absolute inset-0 bg-black"
//         style={{
//           maskImage:
//             "radial-gradient(circle 350px at var(--x, 50%) var(--y, 50%), transparent, black 70%)",
//           WebkitMaskImage:
//             "radial-gradient(circle 350px at var(--x, 50%) var(--y, 50%), transparent, black 70%)",
//         }}
//       />
//       <div className="flex flex-col lg:flex-row relative lg:gap-20">
//         <div className="lg:w-1/3 h-auto lg:h-screen sticky top-20 flex items-start ">
//           <h2
//             ref={headingRef}
//             className="text-4xl sm:text-5xl  md:text-6xl lg:text-5xl font_neuemachina leading-tight lg:-ml-36"
//           >
//             Our Approach
//           </h2>
//         </div>

//         <div
//           className="lg:w-2/3 flex flex-col gap-12 mt-8 lg:mt-0"
//           ref={containerRef}
//         >
//           {teamSteps.map((step, index) => (
//             <motion.div
//               key={step.id}
//               ref={(el) => (cardRefs.current[index] = el)}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{
//                 opacity: activeIndex === index ? 1 : 0.6,
//                 y: activeIndex === index ? 0 : 20,
//               }}
//               transition={{ duration: 0.5 }}
//               className={`border w-full lg:w-[50vw] min-h-[280px] md:min-h-[320px] rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 shadow-lg hover:shadow-2xl ${
//                 activeIndex === index
//                   ? "border-[#001A5F] bg-opacity-90"
//                   : "border-gray-600 bg-opacity-70"
//               }`}
//             >
//               <div className="flex items-center justify-between">
//                 <h1 className="text-2xl md:text-3xl font-bold">{`0${
//                   index + 1
//                 }`}</h1>
//                 <div>
//                   <img
//                     src={step.svgs}
//                     className={`transition-all duration-500 ${
//                       activeIndex === index ? " grayscale-0 " : " grayscale"
//                     }`}
//                   />
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <h2 className="text-xl md:text-2xl font-semibold">
//                   {step.title}
//                 </h2>
//                 <p className="text-sm text-gray-300 leading-relaxed">
//                   {step.description}
//                 </p>
//                 <div className="w-full border-t-2 mt-2" />
//                 <div className="flex flex-wrap gap-3 text-gray-400 text-sm uppercase">
//                   {step.skills.map((skill, i) => (
//                     <span key={i} className="px-3 py-1 bg-gray-800 rounded-lg">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Team;