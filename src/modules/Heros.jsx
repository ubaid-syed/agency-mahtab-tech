// // // import { useEffect, useRef } from "react";
// // // import Spline from "@splinetool/react-spline";
// // // import PropTypes from "prop-types";

// // // // Simple fade-in and slide-up animation using Tailwind and a bit of JS
// // // const useAnimateOnView = (ref, delay = 0) => {
// // //   useEffect(() => {
// // //     const node = ref.current;
// // //     if (!node) return;
// // //     node.style.opacity = 0;
// // //     node.style.transform = "translateY(40px)";
// // //     node.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

// // //     const handle = () => {
// // //       node.style.opacity = 1;
// // //       node.style.transform = "translateY(0)";
// // //     };

// // //     // Intersection Observer for animation on view
// // //     const observer = new window.IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           handle();
// // //           observer.disconnect();
// // //         }
// // //       },
// // //       { threshold: 0.2 }
// // //     );
// // //     observer.observe(node);

// // //     return () => observer.disconnect();
// // //   }, [ref, delay]);
// // // };

// // // const AnimatedText = ({ as: Tag = "div", children, delay = 0, className = "" }) => {
// // //   const ref = useRef();
// // //   useAnimateOnView(ref, delay);
// // //   return (
// // //     <Tag ref={ref} className={className}>
// // //       {children}
// // //     </Tag>
// // //   );
// // // };

// // // // PropTypes for AnimatedText component
// // // AnimatedText.propTypes = {
// // //   as: PropTypes.elementType,
// // //   children: PropTypes.node.isRequired,
// // //   delay: PropTypes.number,
// // //   className: PropTypes.string,
// // // };

// // // const Heros = () => {
// // //   return (
// // //     <div
// // //       className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-gradient-to-b from-[#3a2172] to-black relative overflow-hidden"
// // //       style={{
// // //         background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
// // //       }}
// // //     >
// // //       {/* Decorative blurred gradient shapes for modern look */}
// // //       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
// // //       <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-fuchsia-600 opacity-20 rounded-full blur-3xl pointer-events-none z-0" />

// // //       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 relative z-10">
// // //         {/* Text Content */}
// // //         <div className="flex-1 w-full max-w-2xl text-center md:text-left px-4 sm:px-6 md:px-0">
// // //           <AnimatedText
// // //             as="h1"
// // //             delay={100}
// // //             className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-lg"
// // //           >
// // //             <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
// // //               Innovating With Purpose,
// // //             </span>
// // //             <br />
// // //             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x">
// // //               Delivering With Precision
// // //             </span>
// // //           </AnimatedText>
// // //           <AnimatedText
// // //             as="p"
// // //             delay={350}
// // //             className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0 mt-2 animate-fade-in"
// // //           >
// // //             Mahtab Tech delivers high-performance WordPress solutions tailored for modern businesses.
// // //             <br className="hidden sm:block" />
// // //             Through innovative design, advanced development, and strategic insight, we craft digital experiences that reflect your brand and drive real growth. We equip businesses with future-ready solutions built to lead in a rapidly evolving digital world.
// // //           </AnimatedText>
// // //         </div>

// // //         {/* 3D/Abstract Sphere */}
// // //         <div className="flex-1 flex items-center justify-center z-10 relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
// // //           <div className="absolute inset-0 pointer-events-none animate-pulse-slow blur-2xl opacity-10 bg-gradient-to-tr from-fuchsia-800 via-purple-800 to-blue-800 rounded-full" />
// // //           <Spline scene="https://prod.spline.design/vzPPo-IVeY5GIKxl/scene.splinecode" />
// // //         </div>
// // //       </div>

// // //       {/* Keyframes for gradient animation */}
// // //       <style>{`
// // //         @keyframes gradient-x {
// // //           0%, 100% { background-position: 0% 50%; }
// // //           50% { background-position: 100% 50%; }
// // //         }
// // //         .animate-gradient-x {
// // //           background-size: 200% 200%;
// // //           animation: gradient-x 4s ease-in-out infinite;
// // //         }
// // //         @keyframes fade-in {
// // //           from { opacity: 0; }
// // //           to { opacity: 1; }
// // //         }
// // //         .animate-fade-in {
// // //           animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
// // //         }
// // //         @keyframes pulse-slow {
// // //           0%, 100% { opacity: 0.3; }
// // //           50% { opacity: 0.5; }
// // //         }
// // //         .animate-pulse-slow {
// // //           animation: pulse-slow 6s ease-in-out infinite;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default Heros;



// // // import { useEffect, useRef } from "react";
// // // // import Spline from "@splinetool/react-spline";
// // // import PropTypes from "prop-types";
// // // import { Canvas } from "@react-three/fiber";
// // // import { Planet } from "../animationhero/Planet.jsx";
// // // import { Environment, Float, Lightformer } from "@react-three/drei";
// // // import { useMediaQuery } from "react-responsive";
// // // import AnimatedHeaderSection from "../animationhero/AnimatedHeaderSection.jsx";

// // // // Simple fade-in and slide-up animation using Tailwind and a bit of JS
// // // const useAnimateOnView = (ref, delay = 0) => {
// // //   useEffect(() => {
// // //     const node = ref.current;
// // //     if (!node) return;
// // //     node.style.opacity = 0;
// // //     node.style.transform = "translateY(40px)";
// // //     node.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

// // //     const handle = () => {
// // //       node.style.opacity = 1;
// // //       node.style.transform = "translateY(0)";
// // //     };

// // //     // Intersection Observer for animation on view
// // //     const observer = new window.IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           handle();
// // //           observer.disconnect();
// // //         }
// // //       },
// // //       { threshold: 0.2 }
// // //     );
// // //     observer.observe(node);

// // //     return () => observer.disconnect();
// // //   }, [ref, delay]);
// // // };

// // // const AnimatedText = ({ as: Tag = "div", children, delay = 0, className = "" }) => {
// // //   const ref = useRef();
// // //   useAnimateOnView(ref, delay);
// // //   return (
// // //     <Tag ref={ref} className={className}>
// // //       {children}
// // //     </Tag>
// // //   );
// // // };

// // // // PropTypes for AnimatedText component
// // // AnimatedText.propTypes = {
// // //   as: PropTypes.elementType,
// // //   children: PropTypes.node.isRequired,
// // //   delay: PropTypes.number,
// // //   className: PropTypes.string,
// // // };

// // // const Heros = () => {
// // //     const isMobile = useMediaQuery({ maxWidth: 853 });
  
// // //   const heroText = `I help growing brands and startups gain an
// // // unfair advantage through premium
// // // results driven webs/apps`;
// // //   return (
// // //     // <div
// // //     //   className="w-full min-h-screen flex  px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-white relative overflow-hidden"
// // //     //   style={{
// // //     //     // background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
// // //     //   }}
// // //     // >
// // //             <div className="w-full flex px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 flex-col  justify-end min-h-screen relative overflow-hidden">
// // //       <AnimatedHeaderSection
// // //         subTitle="Not Just a Website, A Digital Journey"
// // //         title="MAHTAB-TECH"
// // //         text={heroText}
// // //         textColor="text-black"
// // //       />
      
// // //       <figure
// // //         className="absolute inset-0 -z-50 bg-[#E5E5E0]"
// // //         style={{ width: "100vw", height: "100vh" }}
// // //       >
// // //         <Canvas
// // //           shadows
// // //           camera={{ 
// // //             position: [0, 0, -10], 
// // //             fov: 17.5, 
// // //             near: 1, 
// // //             far: 20 
// // //           }}
// // //         >
// // //           <ambientLight intensity={0.5} />
          
// // //           <Float speed={0.5}>
// // //             <Planet scale={isMobile ? 0.7 : 1} />
// // //           </Float>
          
// // //           <Environment resolution={256}>
// // //             <group rotation={[-Math.PI / 3, 4, 1]}>
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[0, 5, -9]}
// // //                 scale={10}
// // //               />
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[0, 3, 1]}
// // //                 scale={10}
// // //               />
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[-5, -1, -1]}
// // //                 scale={10}
// // //               />
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[10, 1, 0]}
// // //                 scale={16}
// // //               />
// // //             </group>
// // //           </Environment>
// // //         </Canvas>
// // //       </figure>
// // //     </div>
// // //     // </div>
// // //   );
// // // };

// // // export default Heros;




// // // // import React, { useEffect, useRef } from "react";
// // // // import Spline from "@splinetool/react-spline";

// // // // // Animate on view logic
// // // // const useAnimateOnView = (ref, delay = 0) => {
// // // //   useEffect(() => {
// // // //     const node = ref.current;
// // // //     if (!node) return;
// // // //     node.style.opacity = 0;
// // // //     node.style.transform = "translateY(40px)";
// // // //     node.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

// // // //     const handle = () => {
// // // //       node.style.opacity = 1;
// // // //       node.style.transform = "translateY(0)";
// // // //     };

// // // //     const observer = new window.IntersectionObserver(
// // // //       ([entry]) => {
// // // //         if (entry.isIntersecting) {
// // // //           handle();
// // // //           observer.disconnect();
// // // //         }
// // // //       },
// // // //       { threshold: 0.2 }
// // // //     );
// // // //     observer.observe(node);

// // // //     return () => observer.disconnect();
// // // //   }, [ref, delay]);
// // // // };

// // // // const AnimatedText = ({ as: Tag = "div", children, delay = 0, className = "" }) => {
// // // //   const ref = useRef();
// // // //   useAnimateOnView(ref, delay);
// // // //   return (
// // // //     <Tag ref={ref} className={className}>
// // // //       {children}
// // // //     </Tag>
// // // //   );
// // // // };

// // // // const Heros = () => {
// // // //   // Remove the Spline watermark
// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       const watermark = document.querySelector(".spline-watermark");
// // // //       if (watermark) {
// // // //         watermark.remove();
// // // //         clearInterval(interval);
// // // //       }
// // // //     }, 200); // Retry every 200ms until it's found
// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   return (
// // // //     <div
// // // //       className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-gradient-to-b from-[#3a2172] to-black relative overflow-hidden"
// // // //       style={{
// // // //         background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
// // // //       }}
// // // //     >
// // // //       {/* Decorative blurred gradient shapes */}
// // // //       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
// // // //       <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-fuchsia-600 opacity-20 rounded-full blur-3xl pointer-events-none z-0" />

// // // //       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 relative z-10">
// // // //         {/* Text Content */}
// // // //         <div className="flex-1 w-full max-w-2xl text-center md:text-left px-4 sm:px-6 md:px-0">
// // // //           <AnimatedText
// // // //             as="h1"
// // // //             delay={100}
// // // //             className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-lg"
// // // //           >
// // // //             <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
// // // //               Innovating With Purpose,
// // // //             </span>
// // // //             <br />
// // // //             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x">
// // // //               Delivering With Precision
// // // //             </span>
// // // //           </AnimatedText>
// // // //           <AnimatedText
// // // //             as="p"
// // // //             delay={350}
// // // //             className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0 mt-2 animate-fade-in"
// // // //           >
// // // //             Mahtab Tech delivers high-performance WordPress solutions tailored for modern businesses.
// // // //             <br className="hidden sm:block" />
// // // //             Through innovative design, advanced development, and strategic insight, we craft digital experiences that reflect your brand and drive real growth. We equip businesses with future-ready solutions built to lead in a rapidly evolving digital world.
// // // //           </AnimatedText>
// // // //         </div>

// // // //         {/* 3D Spline Model */}
// // // //         <div className="flex-1 flex items-center justify-center z-10 relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
// // // //           <div className="absolute inset-0 pointer-events-none animate-pulse-slow blur-2xl opacity-10 bg-gradient-to-tr from-fuchsia-800 via-purple-800 to-blue-800 rounded-full" />
// // // //           {/* <Spline scene="https://prod.spline.design/vzPPo-IVeY5GIKxl/scene.splinecode" /> */}
// // // //           <Spline scene="https://prod.spline.design/vzPPo-IVeY5GIKxl/scene.splinecode" />

// // // //         </div>
// // // //       </div>

// // // //       {/* Animations */}
// // // //       <style>{`
// // // //         @keyframes gradient-x {
// // // //           0%, 100% { background-position: 0% 50%; }
// // // //           50% { background-position: 100% 50%; }
// // // //         }
// // // //         .animate-gradient-x {
// // // //           background-size: 200% 200%;
// // // //           animation: gradient-x 4s ease-in-out infinite;
// // // //         }
// // // //         @keyframes fade-in {
// // // //           from { opacity: 0; }
// // // //           to { opacity: 1; }
// // // //         }
// // // //         .animate-fade-in {
// // // //           animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
// // // //         }
// // // //         @keyframes pulse-slow {
// // // //           0%, 100% { opacity: 0.3; }
// // // //           50% { opacity: 0.5; }
// // // //         }
// // // //         .animate-pulse-slow {
// // // //           animation: pulse-slow 6s ease-in-out infinite;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Heros;

// // // import React from "react";
// // // import { Canvas } from "@react-three/fiber";
// // // import { Planet } from "../animationhero/Planet.jsx";
// // // import { Environment, Float, Lightformer } from "@react-three/drei";
// // // import { useMediaQuery } from "react-responsive";
// // // import AnimatedHeaderSection from "../animationhero/AnimatedHeaderSection.jsx";

// // // const Heros = () => {
// // //   const isMobile = useMediaQuery({ maxWidth: 853 });
  
// // //   const heroText = `I help growing brands and startups gain an
// // // unfair advantage through premium
// // // results driven webs/apps`;

// // //   return (
// // //     <div id="home" className="flex flex-col justify-end min-h-screen relative">
// // //       <AnimatedHeaderSection
// // //         subTitle="404 No Bugs Found"
// // //         title="Ali Sanati"
// // //         text={heroText}
// // //         textColor="text-black"
// // //       />
      
// // //       <figure
// // //         className="absolute inset-0 -z-50"
// // //         style={{ width: "100vw", height: "100vh" }}
// // //       >
// // //         <Canvas
// // //           shadows
// // //           camera={{ 
// // //             position: [0, 0, -10], 
// // //             fov: 17.5, 
// // //             near: 1, 
// // //             far: 20 
// // //           }}
// // //         >
// // //           <ambientLight intensity={0.5} />
          
// // //           <Float speed={0.5}>
// // //             <Planet scale={isMobile ? 0.7 : 1} />
// // //           </Float>
          
// // //           <Environment resolution={256}>
// // //             <group rotation={[-Math.PI / 3, 4, 1]}>
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[0, 5, -9]}
// // //                 scale={10}
// // //               />
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[0, 3, 1]}
// // //                 scale={10}
// // //               />
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[-5, -1, -1]}
// // //                 scale={10}
// // //               />
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[10, 1, 0]}
// // //                 scale={16}
// // //               />
// // //             </group>
// // //           </Environment>
// // //         </Canvas>
// // //       </figure>
// // //     </div>
// // //   );
// // // };

// // // export default Heros;



// // //final



// // // import { useEffect, useRef } from "react";
// // // // import Spline from "@splinetool/react-spline";
// // // import PropTypes from "prop-types";
// // // import { Canvas } from "@react-three/fiber";
// // // import { Planet } from "../animationhero/Planet.jsx";
// // // import { Environment, Float, Lightformer } from "@react-three/drei";
// // // import { useMediaQuery } from "react-responsive";
// // // import AnimatedHeaderSection from "../animationhero/AnimatedHeaderSection.jsx";

// // // // Simple fade-in and slide-up animation using Tailwind and a bit of JS
// // // const useAnimateOnView = (ref, delay = 0) => {
// // //   useEffect(() => {
// // //     const node = ref.current;
// // //     if (!node) return;
// // //     node.style.opacity = 0;
// // //     node.style.transform = "translateY(40px)";
// // //     node.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

// // //     const handle = () => {
// // //       node.style.opacity = 1;
// // //       node.style.transform = "translateY(0)";
// // //     };

// // //     // Intersection Observer for animation on view
// // //     const observer = new window.IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           handle();
// // //           observer.disconnect();
// // //         }
// // //       },
// // //       { threshold: 0.2 }
// // //     );
// // //     observer.observe(node);

// // //     return () => observer.disconnect();
// // //   }, [ref, delay]);
// // // };

// // // const AnimatedText = ({ as: Tag = "div", children, delay = 0, className = "" }) => {
// // //   const ref = useRef();
// // //   useAnimateOnView(ref, delay);
// // //   return (
// // //     <Tag ref={ref} className={className}>
// // //       {children}
// // //     </Tag>
// // //   );
// // // };

// // // // PropTypes for AnimatedText component
// // // AnimatedText.propTypes = {
// // //   as: PropTypes.elementType,
// // //   children: PropTypes.node.isRequired,
// // //   delay: PropTypes.number,
// // //   className: PropTypes.string,
// // // };

// // // const Heros = () => {
// // //     const isMobile = useMediaQuery({ maxWidth: 853 });
  
// // //   const heroText = `I help growing brands and startups gain an
// // // unfair advantage through premium
// // // results driven webs/apps`;
// // //   return (
// // //     // <div
// // //     //   className="w-full min-h-screen flex  px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-white relative overflow-hidden"
// // //     //   style={{
// // //     //     // background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
// // //     //   }}
// // //     // >
// // //             <div className="w-full flex px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 flex-col  justify-end min-h-screen relative overflow-hidden">
// // //       <AnimatedHeaderSection
// // //         subTitle="Not Just a Website, A Digital Journey"
// // //         title="MAHTAB-TECH"
// // //         text={heroText}
// // //         textColor="text-black"
// // //       />
      
// // //       <figure
// // //         className="absolute inset-0 -z-50 bg-[#E5E5E0]"
// // //         style={{ width: "100vw", height: "100vh" }}
// // //       >
// // //         <Canvas
// // //           shadows
// // //           camera={{ 
// // //             position: [0, 0, -10], 
// // //             fov: 17.5, 
// // //             near: 1, 
// // //             far: 20 
// // //           }}
// // //         >
// // //           <ambientLight intensity={0.5} />
          
// // //           <Float speed={0.5}>
// // //             <Planet scale={isMobile ? 0.7 : 1} />
// // //           </Float>
          
// // //           <Environment resolution={256}>
// // //             <group rotation={[-Math.PI / 3, 4, 1]}>
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[0, 5, -9]}
// // //                 scale={10}
// // //               />
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[0, 3, 1]}
// // //                 scale={10}
// // //               />
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[-5, -1, -1]}
// // //                 scale={10}
// // //               />
// // //               <Lightformer
// // //                 form="circle"
// // //                 intensity={2}
// // //                 position={[10, 1, 0]}
// // //                 scale={16}
// // //               />
// // //             </group>
// // //           </Environment>
// // //         </Canvas>
// // //       </figure>
// // //     </div>
// // //     // </div>
// // //   );
// // // };

// // // export default Heros;
// // import Spline from '@splinetool/react-spline';

// // export default function App() {
// //   return (
// //     <Spline scene="https://prod.spline.design/xtNqwuV3cF7zPgWL/scene.splinecode" />
// //   );
// // }







// // import { useEffect, useRef } from "react";
// // import Spline from "@splinetool/react-spline";
// // import PropTypes from "prop-types";

// // // Simple fade-in and slide-up animation using Tailwind and a bit of JS
// // const useAnimateOnView = (ref, delay = 0) => {
// //   useEffect(() => {
// //     const node = ref.current;
// //     if (!node) return;
// //     node.style.opacity = 0;
// //     node.style.transform = "translateY(40px)";
// //     node.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

// //     const handle = () => {
// //       node.style.opacity = 1;
// //       node.style.transform = "translateY(0)";
// //     };

// //     // Intersection Observer for animation on view
// //     const observer = new window.IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           handle();
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold: 0.2 }
// //     );
// //     observer.observe(node);

// //     return () => observer.disconnect();
// //   }, [ref, delay]);
// // };

// // const AnimatedText = ({ as: Tag = "div", children, delay = 0, className = "" }) => {
// //   const ref = useRef();
// //   useAnimateOnView(ref, delay);
// //   return (
// //     <Tag ref={ref} className={className}>
// //       {children}
// //     </Tag>
// //   );
// // };

// // // PropTypes for AnimatedText component
// // AnimatedText.propTypes = {
// //   as: PropTypes.elementType,
// //   children: PropTypes.node.isRequired,
// //   delay: PropTypes.number,
// //   className: PropTypes.string,
// // };

// // const Heros = () => {
// //   return (
// //     <div
// //       className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-gradient-to-b from-[#3a2172] to-black relative overflow-hidden"
// //       style={{
// //         background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
// //       }}
// //     >
// //       {/* Decorative blurred gradient shapes for modern look */}
// //       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
// //       <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-fuchsia-600 opacity-20 rounded-full blur-3xl pointer-events-none z-0" />

// //       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 relative z-10">
// //         {/* Text Content */}
// //         <div className="flex-1 w-full max-w-2xl text-center md:text-left px-4 sm:px-6 md:px-0">
// //           <AnimatedText
// //             as="h1"
// //             delay={100}
// //             className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-lg"
// //           >
// //             <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
// //               Innovating With Purpose,
// //             </span>
// //             <br />
// //             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x">
// //               Delivering With Precision
// //             </span>
// //           </AnimatedText>
// //           <AnimatedText
// //             as="p"
// //             delay={350}
// //             className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0 mt-2 animate-fade-in"
// //           >
// //             Mahtab Tech delivers high-performance WordPress solutions tailored for modern businesses.
// //             <br className="hidden sm:block" />
// //             Through innovative design, advanced development, and strategic insight, we craft digital experiences that reflect your brand and drive real growth. We equip businesses with future-ready solutions built to lead in a rapidly evolving digital world.
// //           </AnimatedText>
// //         </div>

// //         {/* 3D/Abstract Sphere */}
// //         <div className="flex-1 flex items-center justify-center z-10 relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
// //           <div className="absolute inset-0 pointer-events-none animate-pulse-slow blur-2xl opacity-10 bg-gradient-to-tr from-fuchsia-800 via-purple-800 to-blue-800 rounded-full" />
// //           <Spline scene="https://prod.spline.design/vzPPo-IVeY5GIKxl/scene.splinecode" />
// //         </div>
// //       </div>

// //       {/* Keyframes for gradient animation */}
// //       <style>{`
// //         @keyframes gradient-x {
// //           0%, 100% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //         }
// //         .animate-gradient-x {
// //           background-size: 200% 200%;
// //           animation: gradient-x 4s ease-in-out infinite;
// //         }
// //         @keyframes fade-in {
// //           from { opacity: 0; }
// //           to { opacity: 1; }
// //         }
// //         .animate-fade-in {
// //           animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
// //         }
// //         @keyframes pulse-slow {
// //           0%, 100% { opacity: 0.3; }
// //           50% { opacity: 0.5; }
// //         }
// //         .animate-pulse-slow {
// //           animation: pulse-slow 6s ease-in-out infinite;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Heros;



// // import { useEffect, useRef } from "react";
// // // import Spline from "@splinetool/react-spline";
// // import PropTypes from "prop-types";
// // import { Canvas } from "@react-three/fiber";
// // import { Planet } from "../animationhero/Planet.jsx";
// // import { Environment, Float, Lightformer } from "@react-three/drei";
// // import { useMediaQuery } from "react-responsive";
// // import AnimatedHeaderSection from "../animationhero/AnimatedHeaderSection.jsx";

// // // Simple fade-in and slide-up animation using Tailwind and a bit of JS
// // const useAnimateOnView = (ref, delay = 0) => {
// //   useEffect(() => {
// //     const node = ref.current;
// //     if (!node) return;
// //     node.style.opacity = 0;
// //     node.style.transform = "translateY(40px)";
// //     node.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

// //     const handle = () => {
// //       node.style.opacity = 1;
// //       node.style.transform = "translateY(0)";
// //     };

// //     // Intersection Observer for animation on view
// //     const observer = new window.IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           handle();
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold: 0.2 }
// //     );
// //     observer.observe(node);

// //     return () => observer.disconnect();
// //   }, [ref, delay]);
// // };

// // const AnimatedText = ({ as: Tag = "div", children, delay = 0, className = "" }) => {
// //   const ref = useRef();
// //   useAnimateOnView(ref, delay);
// //   return (
// //     <Tag ref={ref} className={className}>
// //       {children}
// //     </Tag>
// //   );
// // };

// // // PropTypes for AnimatedText component
// // AnimatedText.propTypes = {
// //   as: PropTypes.elementType,
// //   children: PropTypes.node.isRequired,
// //   delay: PropTypes.number,
// //   className: PropTypes.string,
// // };

// // const Heros = () => {
// //     const isMobile = useMediaQuery({ maxWidth: 853 });
  
// //   const heroText = `I help growing brands and startups gain an
// // unfair advantage through premium
// // results driven webs/apps`;
// //   return (
// //     // <div
// //     //   className="w-full min-h-screen flex  px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-white relative overflow-hidden"
// //     //   style={{
// //     //     // background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
// //     //   }}
// //     // >
// //             <div className="w-full flex px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 flex-col  justify-end min-h-screen relative overflow-hidden">
// //       <AnimatedHeaderSection
// //         subTitle="Not Just a Website, A Digital Journey"
// //         title="MAHTAB-TECH"
// //         text={heroText}
// //         textColor="text-black"
// //       />
      
// //       <figure
// //         className="absolute inset-0 -z-50 bg-[#E5E5E0]"
// //         style={{ width: "100vw", height: "100vh" }}
// //       >
// //         <Canvas
// //           shadows
// //           camera={{ 
// //             position: [0, 0, -10], 
// //             fov: 17.5, 
// //             near: 1, 
// //             far: 20 
// //           }}
// //         >
// //           <ambientLight intensity={0.5} />
          
// //           <Float speed={0.5}>
// //             <Planet scale={isMobile ? 0.7 : 1} />
// //           </Float>
          
// //           <Environment resolution={256}>
// //             <group rotation={[-Math.PI / 3, 4, 1]}>
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[0, 5, -9]}
// //                 scale={10}
// //               />
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[0, 3, 1]}
// //                 scale={10}
// //               />
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[-5, -1, -1]}
// //                 scale={10}
// //               />
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[10, 1, 0]}
// //                 scale={16}
// //               />
// //             </group>
// //           </Environment>
// //         </Canvas>
// //       </figure>
// //     </div>
// //     // </div>
// //   );
// // };

// // export default Heros;




// // // import React, { useEffect, useRef } from "react";
// // // import Spline from "@splinetool/react-spline";

// // // // Animate on view logic
// // // const useAnimateOnView = (ref, delay = 0) => {
// // //   useEffect(() => {
// // //     const node = ref.current;
// // //     if (!node) return;
// // //     node.style.opacity = 0;
// // //     node.style.transform = "translateY(40px)";
// // //     node.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

// // //     const handle = () => {
// // //       node.style.opacity = 1;
// // //       node.style.transform = "translateY(0)";
// // //     };

// // //     const observer = new window.IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           handle();
// // //           observer.disconnect();
// // //         }
// // //       },
// // //       { threshold: 0.2 }
// // //     );
// // //     observer.observe(node);

// // //     return () => observer.disconnect();
// // //   }, [ref, delay]);
// // // };

// // // const AnimatedText = ({ as: Tag = "div", children, delay = 0, className = "" }) => {
// // //   const ref = useRef();
// // //   useAnimateOnView(ref, delay);
// // //   return (
// // //     <Tag ref={ref} className={className}>
// // //       {children}
// // //     </Tag>
// // //   );
// // // };

// // // const Heros = () => {
// // //   // Remove the Spline watermark
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       const watermark = document.querySelector(".spline-watermark");
// // //       if (watermark) {
// // //         watermark.remove();
// // //         clearInterval(interval);
// // //       }
// // //     }, 200); // Retry every 200ms until it's found
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div
// // //       className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-gradient-to-b from-[#3a2172] to-black relative overflow-hidden"
// // //       style={{
// // //         background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
// // //       }}
// // //     >
// // //       {/* Decorative blurred gradient shapes */}
// // //       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-700 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
// // //       <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-fuchsia-600 opacity-20 rounded-full blur-3xl pointer-events-none z-0" />

// // //       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 relative z-10">
// // //         {/* Text Content */}
// // //         <div className="flex-1 w-full max-w-2xl text-center md:text-left px-4 sm:px-6 md:px-0">
// // //           <AnimatedText
// // //             as="h1"
// // //             delay={100}
// // //             className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight drop-shadow-lg"
// // //           >
// // //             <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
// // //               Innovating With Purpose,
// // //             </span>
// // //             <br />
// // //             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-gradient-x">
// // //               Delivering With Precision
// // //             </span>
// // //           </AnimatedText>
// // //           <AnimatedText
// // //             as="p"
// // //             delay={350}
// // //             className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0 mt-2 animate-fade-in"
// // //           >
// // //             Mahtab Tech delivers high-performance WordPress solutions tailored for modern businesses.
// // //             <br className="hidden sm:block" />
// // //             Through innovative design, advanced development, and strategic insight, we craft digital experiences that reflect your brand and drive real growth. We equip businesses with future-ready solutions built to lead in a rapidly evolving digital world.
// // //           </AnimatedText>
// // //         </div>

// // //         {/* 3D Spline Model */}
// // //         <div className="flex-1 flex items-center justify-center z-10 relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
// // //           <div className="absolute inset-0 pointer-events-none animate-pulse-slow blur-2xl opacity-10 bg-gradient-to-tr from-fuchsia-800 via-purple-800 to-blue-800 rounded-full" />
// // //           {/* <Spline scene="https://prod.spline.design/vzPPo-IVeY5GIKxl/scene.splinecode" /> */}
// // //           <Spline scene="https://prod.spline.design/vzPPo-IVeY5GIKxl/scene.splinecode" />

// // //         </div>
// // //       </div>

// // //       {/* Animations */}
// // //       <style>{`
// // //         @keyframes gradient-x {
// // //           0%, 100% { background-position: 0% 50%; }
// // //           50% { background-position: 100% 50%; }
// // //         }
// // //         .animate-gradient-x {
// // //           background-size: 200% 200%;
// // //           animation: gradient-x 4s ease-in-out infinite;
// // //         }
// // //         @keyframes fade-in {
// // //           from { opacity: 0; }
// // //           to { opacity: 1; }
// // //         }
// // //         .animate-fade-in {
// // //           animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
// // //         }
// // //         @keyframes pulse-slow {
// // //           0%, 100% { opacity: 0.3; }
// // //           50% { opacity: 0.5; }
// // //         }
// // //         .animate-pulse-slow {
// // //           animation: pulse-slow 6s ease-in-out infinite;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default Heros;

// // import React from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { Planet } from "../animationhero/Planet.jsx";
// // import { Environment, Float, Lightformer } from "@react-three/drei";
// // import { useMediaQuery } from "react-responsive";
// // import AnimatedHeaderSection from "../animationhero/AnimatedHeaderSection.jsx";

// // const Heros = () => {
// //   const isMobile = useMediaQuery({ maxWidth: 853 });
  
// //   const heroText = `I help growing brands and startups gain an
// // unfair advantage through premium
// // results driven webs/apps`;

// //   return (
// //     <div id="home" className="flex flex-col justify-end min-h-screen relative">
// //       <AnimatedHeaderSection
// //         subTitle="404 No Bugs Found"
// //         title="Ali Sanati"
// //         text={heroText}
// //         textColor="text-black"
// //       />
      
// //       <figure
// //         className="absolute inset-0 -z-50"
// //         style={{ width: "100vw", height: "100vh" }}
// //       >
// //         <Canvas
// //           shadows
// //           camera={{ 
// //             position: [0, 0, -10], 
// //             fov: 17.5, 
// //             near: 1, 
// //             far: 20 
// //           }}
// //         >
// //           <ambientLight intensity={0.5} />
          
// //           <Float speed={0.5}>
// //             <Planet scale={isMobile ? 0.7 : 1} />
// //           </Float>
          
// //           <Environment resolution={256}>
// //             <group rotation={[-Math.PI / 3, 4, 1]}>
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[0, 5, -9]}
// //                 scale={10}
// //               />
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[0, 3, 1]}
// //                 scale={10}
// //               />
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[-5, -1, -1]}
// //                 scale={10}
// //               />
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[10, 1, 0]}
// //                 scale={16}
// //               />
// //             </group>
// //           </Environment>
// //         </Canvas>
// //       </figure>
// //     </div>
// //   );
// // };

// // export default Heros;



// //final



// // import { useEffect, useRef } from "react";
// // // import Spline from "@splinetool/react-spline";
// // import PropTypes from "prop-types";
// // import { Canvas } from "@react-three/fiber";
// // import { Planet } from "../animationhero/Planet.jsx";
// // import { Environment, Float, Lightformer } from "@react-three/drei";
// // import { useMediaQuery } from "react-responsive";
// // import AnimatedHeaderSection from "../animationhero/AnimatedHeaderSection.jsx";

// // // Simple fade-in and slide-up animation using Tailwind and a bit of JS
// // const useAnimateOnView = (ref, delay = 0) => {
// //   useEffect(() => {
// //     const node = ref.current;
// //     if (!node) return;
// //     node.style.opacity = 0;
// //     node.style.transform = "translateY(40px)";
// //     node.style.transition = `opacity 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.8s cubic-bezier(0.4,0,0.2,1) ${delay}ms`;

// //     const handle = () => {
// //       node.style.opacity = 1;
// //       node.style.transform = "translateY(0)";
// //     };

// //     // Intersection Observer for animation on view
// //     const observer = new window.IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           handle();
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold: 0.2 }
// //     );
// //     observer.observe(node);

// //     return () => observer.disconnect();
// //   }, [ref, delay]);
// // };

// // const AnimatedText = ({ as: Tag = "div", children, delay = 0, className = "" }) => {
// //   const ref = useRef();
// //   useAnimateOnView(ref, delay);
// //   return (
// //     <Tag ref={ref} className={className}>
// //       {children}
// //     </Tag>
// //   );
// // };

// // // PropTypes for AnimatedText component
// // AnimatedText.propTypes = {
// //   as: PropTypes.elementType,
// //   children: PropTypes.node.isRequired,
// //   delay: PropTypes.number,
// //   className: PropTypes.string,
// // };

// // const Heros = () => {
// //     const isMobile = useMediaQuery({ maxWidth: 853 });
  
// //   const heroText = `I help growing brands and startups gain an
// // unfair advantage through premium
// // results driven webs/apps`;
// //   return (
// //     // <div
// //     //   className="w-full min-h-screen flex  px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-white relative overflow-hidden"
// //     //   style={{
// //     //     // background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
// //     //   }}
// //     // >
// //             <div className="w-full flex px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 flex-col  justify-end min-h-screen relative overflow-hidden">
// //       <AnimatedHeaderSection
// //         subTitle="Not Just a Website, A Digital Journey"
// //         title="MAHTAB-TECH"
// //         text={heroText}
// //         textColor="text-black"
// //       />
      
// //       <figure
// //         className="absolute inset-0 -z-50 bg-[#E5E5E0]"
// //         style={{ width: "100vw", height: "100vh" }}
// //       >
// //         <Canvas
// //           shadows
// //           camera={{ 
// //             position: [0, 0, -10], 
// //             fov: 17.5, 
// //             near: 1, 
// //             far: 20 
// //           }}
// //         >
// //           <ambientLight intensity={0.5} />
          
// //           <Float speed={0.5}>
// //             <Planet scale={isMobile ? 0.7 : 1} />
// //           </Float>
          
// //           <Environment resolution={256}>
// //             <group rotation={[-Math.PI / 3, 4, 1]}>
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[0, 5, -9]}
// //                 scale={10}
// //               />
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[0, 3, 1]}
// //                 scale={10}
// //               />
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[-5, -1, -1]}
// //                 scale={10}
// //               />
// //               <Lightformer
// //                 form="circle"
// //                 intensity={2}
// //                 position={[10, 1, 0]}
// //                 scale={16}
// //               />
// //             </group>
// //           </Environment>
// //         </Canvas>
// //       </figure>
// //     </div>
// //     // </div>
// //   );
// // };

// // export default Heros;



// // import Spline from '@splinetool/react-spline';
// // import { useEffect, useRef } from 'react';

// // // Modern, animated, looping text component
// // function AnimatedTextLoop() {
// //   const words = [
// //     "Innovate.",
// //     "Create.",
// //     "Transform.",
// //     "Elevate.",
// //     "Inspire."
// //   ];
// //   const ref = useRef();
// //   let idx = 0;

// //   useEffect(() => {
// //     const el = ref.current;
// //     let timeout;
// //     function animateText() {
// //       el.classList.remove('fade-in');
// //       void el.offsetWidth; // trigger reflow
// //       el.classList.add('fade-in');
// //       el.textContent = words[idx];
// //       idx = (idx + 1) % words.length;
// //       timeout = setTimeout(animateText, 1800);
// //     }
// //     animateText();
// //     return () => clearTimeout(timeout);
// //     // eslint-disable-next-line
// //   }, []);

// //   return (
// //     <span
// //       ref={ref}
// //       className="animated-text-loop"
// //       style={{
// //         fontSize: '2.8rem',
// //         fontWeight: 700,
// //         letterSpacing: '0.04em',
// //         color: 'white',
// //         textShadow: '0 4px 32px #a7a7ff, 0 1.5px 0 #fff',
// //         display: 'inline-block',
// //         minHeight: '3.5rem',
// //         transition: 'color 0.4s cubic-bezier(.4,2,.6,1)',
// //         filter: 'drop-shadow(0 0 16px #a7a7ff88)'
// //       }}
// //     >
// //       {words[0]}
// //     </span>
// //   );
// // }

// // export default function Heros() {
// //   return (
// //     <div
// //       style={{
// //         background: 'radial-gradient(ellipse at center, #181824 0%, #000 100%)',
// //         width: '100vw',
// //         height: '100vh',
// //         position: 'relative',
// //         overflow: 'hidden',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         flexDirection: 'column'
// //       }}
// //     >
// //       {/* Animated Text Loop - Top Center */}
// //       <div
// //         style={{
// //           position: 'absolute',
// //           top: '6%',
// //           left: '50%',
// //           transform: 'translateX(-50%)',
// //           zIndex: 10,
// //           background: 'rgba(24,24,36,0.7)',
// //           borderRadius: '2rem',
// //           padding: '0.7rem 2.5rem',
// //           boxShadow: '0 4px 32px #a7a7ff33, 0 1.5px 0 #fff1',
// //           backdropFilter: 'blur(8px)',
// //           border: '1.5px solid #a7a7ff33'
// //         }}
// //       >
// //         <AnimatedTextLoop />
// //       </div>

// //       {/* Spline 3D Visual */}
// //       <div
// //         style={{
// //           width: 'min(700px, 80vw)',
// //           height: 'min(700px, 60vw)',
// //           maxWidth: '100vw',
// //           maxHeight: '70vh',
// //           margin: '0 auto',
// //           zIndex: 2,
// //           borderRadius: '50%',
// //           overflow: 'hidden',
// //           boxShadow: '0 0 64px #a7a7ff44'
// //         }}
// //       >
// //         <Spline scene="https://prod.spline.design/8-yTK77UZsOKltlS/scene.splinecode" />
// //       </div>

// //       {/* Animated Text Loop - Bottom Left */}
// //       <div
// //         style={{
// //           position: 'absolute',
// //           bottom: '4%',
// //           left: '5%',
// //           zIndex: 10,
// //           background: 'rgba(24,24,36,0.7)',
// //           borderRadius: '2rem',
// //           padding: '0.6rem 2rem',
// //           boxShadow: '0 4px 32px #a7a7ff33, 0 1.5px 0 #fff1',
// //           backdropFilter: 'blur(8px)',
// //           border: '1.5px solid #a7a7ff33'
// //         }}
// //       >
// //         <AnimatedTextLoop />
// //       </div>

// //       {/* Animated Text Loop - Bottom Right */}
// //       <div
// //         style={{
// //           position: 'absolute',
// //           bottom: '4%',
// //           right: '5%',
// //           zIndex: 10,
// //           background: 'rgba(24,24,36,0.7)',
// //           borderRadius: '2rem',
// //           padding: '0.6rem 2rem',
// //           boxShadow: '0 4px 32px #a7a7ff33, 0 1.5px 0 #fff1',
// //           backdropFilter: 'blur(8px)',
// //           border: '1.5px solid #a7a7ff33'
// //         }}
// //       >
// //         <AnimatedTextLoop />
// //       </div>
// //     </div>
// //   );
// // }

//  {/* import Spline from '@splinetool/react-spline';

// export default function Heros() {
//   return (
//     // <Spline scene="https://prod.spline.design/PmnXulmZpzrZAAfd/scene.splinecode" />
//     // <Spline scene="https://prod.spline.design/RtUiZMI4JZU3qNig/scene.splinecode" />
//     // <Spline scene="https://prod.spline.design/OkBZfRkqiTTaZbQe/scene.splinecode" />
//     // <Spline 
//     //   scene="https://prod.spline.design/RtUiZMI4JZU3qNig/scene.splinecode" 
//     //   style={{ pointerEvents: "none" }}
//     // />
//     <div style={{ background: 'black', width: '100%', height: '100%' }}>
//       <Spline scene="https://prod.spline.design/8-yTK77UZsOKltlS/scene.splinecode" />
//     </div>
//   );
// } */}
// import React from "react";
// import Spline from "@splinetool/react-spline";

// // AnimatedWord: fade-in and slide-up for each word/letter
// const AnimatedWord = ({ children, delay = 0, style = {} }) => (
//   <span
//     style={{
//       display: "inline-block",
//       opacity: 0,
//       transform: "translateY(30px)",
//       animation: `fadeInUp 0.8s cubic-bezier(.77,0,.18,1) forwards`,
//       animationDelay: `${delay}s`,
//       willChange: "opacity, transform",
//       marginRight: "0.45em", // Increased spacing between words
//       ...style,
//     }}
//   >
//     {children}
//     <style>
//       {`
//         @keyframes fadeInUp {
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}
//     </style>
//   </span>
// );

// const headlineLines = [
//   [
//     { text: "DESIGN", delay: 0.1 },
//     // { text: "IGN", delay: 0.2 },
//     { text: "THAT", delay: 0.3 },
//   ],
//   [{ text: "ELEVATES", delay: 0.4 }],
//   [{ text: "YOUR", delay: 0.5 }],
//   [
//     { text: "DIGITAL", delay: 0.6 },
//     { text: "PRESENCE", delay: 0.7 },
//   ],
// ];

// function Heros() {
//   return (
//     <div
//       style={{
//         position: "relative",
//         width: "100vw",
//         minHeight: "100vh",
//         background: "linear-gradient(120deg, #f8f8ff 0%, #e7e7ff 100%)",
//         overflow: "hidden",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         fontFamily: "'Inter', 'Arial', sans-serif",
//       }}
//     >
//       {/* Main Headline */}
//       <div className="flex flex-col items-center justify-center w-full px-4 sm:px-0">
//         <h1
//           className="text-center font-extrabold tracking-tight leading-tight"
//           style={{
//             fontSize: "clamp(2.5rem, 8vw, 7rem)",
//             lineHeight: 1.05,
//             letterSpacing: "-0.04em",
//             color: "#18181b",
//             marginBottom: "1.5rem",
//             marginTop: "0",
//             textShadow: "0 4px 32px rgba(80,80,120,0.08)",
//           }}
//         >
//           {/* Animated headline using AnimatedWord */}
//           <span>
//             {headlineLines[0].map((word, i) => (
//               <AnimatedWord
//                 key={i}
//                 delay={word.delay}
//                 // Remove marginRight for last word in the line
//                 style={i === headlineLines[0].length - 1 ? { marginRight: 0 } : {}}
//               >
//                 {word.text}
//               </AnimatedWord>
//             ))}
//           </span>
//           <br />
//           <span>
//             {headlineLines[1].map((word, i) => (
//               <AnimatedWord
//                 key={i}
//                 delay={word.delay}
//                 style={i === headlineLines[1].length - 1 ? { marginRight: 0 } : {}}
//               >
//                 {word.text}
//               </AnimatedWord>
//             ))}
//             <span
//               style={{
//                 display: "inline-block",
//                 verticalAlign: "middle",
//                 margin: "0 0.5rem",
//                 width: "3.5rem",
//                 height: "3.5rem",
//                 minWidth: "300px",
//                 minHeight: "300px",
//                 borderRadius: "50%",
//                 overflow: "hidden",
//                 boxShadow: "0 2px 16px rgba(127,95,255,0.12)",
//               }}
//             >
//               <Spline scene="https://prod.spline.design/8-yTK77UZsOKltlS/scene.splinecode" />
//             </span>
//           </span>
//           <span style={{ marginLeft: "0.5rem" }}>
//             {headlineLines[2].map((word, i) => (
//               <AnimatedWord
//                 key={i}
//                 delay={word.delay}
//                 style={i === headlineLines[2].length - 1 ? { marginRight: 0 } : {}}
//               >
//                 {word.text}
//               </AnimatedWord>
//             ))}
//           </span>
//           <br />
//           <span>
//             {headlineLines[3].map((word, i) => (
//               <AnimatedWord
//                 key={i}
//                 delay={word.delay}
//                 style={i === headlineLines[3].length - 1 ? { marginRight: 0 } : {}}
//               >
//                 {word.text}
//               </AnimatedWord>
//             ))}
//           </span>
//         </h1>
//         <p
//           className="mt-4 text-lg sm:text-xl text-zinc-500 max-w-2xl text-center"
//           style={{
//             fontWeight: 500,
//             letterSpacing: "0.01em",
//           }}
//         >
//           We craft visually stunning, interactive digital experiences that help your brand stand out and thrive in the modern world.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Heros;




import Spline from '@splinetool/react-spline';

const Heros = () => {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 bg-gradient-to-b from-[#3a2172] to-black relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
      }}
    >
      {/* 3D Background */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          width: "100vw",
          height: "95vh",
         marginTop:"10vh",
        }}
      >
        <Spline scene="https://prod.spline.design/zJApkIfTLQiZqhcz/scene.splinecode" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center -mt-56">
        <h1
          className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight mb-4 animate-fade-in"
          style={{ fontFamily: "NeueMachina-Regular" }}
        >
          MAHTAB-TECH
        </h1>
        <p className="mt-2 text-lg sm:text-2xl text-zinc-200 max-w-2xl font-medium animate-fade-in delay-150">
          We design and build modern, immersive user interfaces that captivate, engage, and empower your audience.
        </p>
        <div className="fixed bottom-4 right-3 z-20">
          <button
            className="relative px-8 py-3 rounded-full font-bold text-lg text-white shadow-lg overflow-hidden transition-all duration-300 group hover:scale-105 focus:outline-none"
            style={{
              letterSpacing: "0.08em",
              fontFamily: "NeueMachina-Regular",
              backgroundColor: "#18181b", // black background
              border: "2px solid #a259ff", // purple border
              color: "#fff",
            }}
          >
            <span className="relative z-10">MAHTAB-TECH</span>
            {/* Animated background overlay */}
            <span
              className="absolute inset-0 z-0 transition-all duration-500 ease-out bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 group-hover:blur-sm"
              style={{
                filter: "blur(12px)",
              }}
            ></span>
            {/* Animated border */}
            <span
              className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white transition-all duration-300 pointer-events-none"
            ></span>
            {/* Ripple effect */}
            <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-white/20 rounded-full opacity-0 group-active:opacity-100 group-active:w-32 group-active:h-32 transition-all duration-500 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></span>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Heros