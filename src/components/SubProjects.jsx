// import Spline from '@splinetool/react-spline'
// import React from 'react'

// const SubProjects = () => {
//   return (
//     <div>   <Spline scene="https://prod.spline.design/PmnXulmZpzrZAAfd/scene.splinecode" /></div>
//   )
// }

// export default SubProjects



// import Spline from '@splinetool/react-spline'

// const SubProjects = () => {
//   return (
//     <section className="relative bg-black min-h-screen w-full">
//       {/* 3D Visual */}
//       <div className="w-full h-screen max-lg:h-[80vh] max-md:h-[70vh] max-sm:h-[60vh]">
//         {/* <Spline scene="https://prod.spline.design/PmnXulmZpzrZAAfd/scene.splinecode"  /> */}
//         <Spline scene="https://prod.spline.design/PmnXulmZpzrZAAfd/scene.splinecode" />
//       </div>

//       {/* Top right paragraph */}
//       <div className="absolute top-28 right-4 sm:top-20 sm:right-6 md:top-28 md:right-8 lg:top-36 lg:right-12 xl:top-36 xl:right-16 2xl:top-44 2xl:right-20 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[450px] z-20">
//         <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300 text-center font-normal leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
//         As one of the leading Wordpress development companies worldwide, our excellence and growth are clearly reflected in our reputation for excellence and continuous growth.
//         </p>
//       </div>

//       {/* Bottom left: Main content */}
//       <div className="absolute bottom-20 left-4 right-4 md:bottom-8 md:left-8 md:right-8 lg:bottom-12 lg:left-12 lg:right-12 xl:bottom-16 xl:left-16 xl:right-16 2xl:bottom-20 2xl:left-20 2xl:right-20 transform z-10 max-w-2xl">
//         <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 md:mb-6 leading-tight">
//           Our Portfolio
//         </h1>
//         <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
//           Mahtab-Tech Agency delivers cutting-edge web solutions with precision and innovation. Our expert team of designers, developers, and strategists work seamlessly to transform your vision into powerful, scalable digital experiences that drive results.
//         </p>
//       </div>

//       {/* Bottom right: Spline button */}
//       <a
//         href="https://spline.design"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="absolute bottom-4 right-4 z-20"
//         style={{ textDecoration: "none" }}
//       >
//         <div className="flex items-center gap-2 px-3 py-1.5 bg-[#18181b] border border-[#333] rounded-lg shadow hover:bg-[#23232a] transition">
         
//           <span className="text-lg text-gray-200 font-medium">MAHTAB-TECH</span>
//         </div>
//       </a>
//     </section>
//   )
// }

// export default SubProjects



// // https://www.youtube.com/watch?v=TPF56BWiJY4&pp=ygUeYW5pbWF0ZWQgZ3NhcCBnYWxsZXJ5IHNlY3Rpb24g
// // https://www.youtube.com/watch?v=A8XwZF4OyCA&list=PLMx8Q-fDx3-HylBQfitDcoOMQTFbEjTae&index=33

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const SubProjects = () => {
//   const containerRef = useRef(null);
//   const imagesRef = useRef([]);
//   const mousePos = useRef({ x: 0, y: 0 });
//   const cacheMousePos = useRef({ x: 0, y: 0 });
//   const lastMousePos = useRef({ x: 0, y: 0 });
//   const imgPosition = useRef(0);
//   const zIndexVal = useRef(1);
//   const threshold = 100;
//   const animationRef = useRef(null);

//   // Helper functions
//   const MathUtils = {
//     lerp: (a, b, n) => (1 - n) * a + n * b,
//     distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
//   };

//   const getMousePos = (ev) => {
//     const pos = { x: 0, y: 0 };
//     if (ev.pageX || ev.pageY) {
//       pos.x = ev.pageX;
//       pos.y = ev.pageY;
//     } else if (ev.clientX || ev.clientY) {
//       const docEl = document.documentElement;
//       pos.x = ev.clientX + document.body.scrollLeft + docEl.scrollLeft;
//       pos.y = ev.clientY + document.body.scrollTop + docEl.scrollTop;
//     }
//     return pos;
//   };

//   const getMouseDistance = () => {
//     return MathUtils.distance(
//       mousePos.current.x, 
//       mousePos.current.y, 
//       lastMousePos.current.x, 
//       lastMousePos.current.y
//     );
//   };

//   const isImageActive = (imgElement) => {
//     return gsap.isTweening(imgElement) || imgElement.style.opacity !== '0';
//   };

//   const showNextImage = () => {
//     const img = imagesRef.current[imgPosition.current];
//     if (!img) return;

//     const rect = img.getBoundingClientRect();
    
//     // Kill any existing tweens
//     gsap.killTweensOf(img);

//     gsap.timeline()
//       .set(img, {
//         opacity: 1,
//         scale: 1,
//         zIndex: zIndexVal.current,
//         x: cacheMousePos.current.x - rect.width / 2,
//         y: cacheMousePos.current.y - rect.height / 2
//       })
//       .to(img, { 
//         duration: 0.9, 
//         ease: "expo.out", 
//         x: mousePos.current.x - rect.width / 2, 
//         y: mousePos.current.y - rect.height / 2 
//       })
//       .to(img, { 
//         duration: 1, 
//         ease: "power1.out", 
//         opacity: 0 
//       }, 0.4)
//       .to(img, { 
//         duration: 1, 
//         ease: "quint.out", 
//         scale: 0.1 
//       }, 0.4);
//   };

//   const render = () => {
//     const distance = getMouseDistance();
    
//     cacheMousePos.current.x = MathUtils.lerp(
//       cacheMousePos.current.x || mousePos.current.x, 
//       mousePos.current.x, 
//       0.1
//     );
//     cacheMousePos.current.y = MathUtils.lerp(
//       cacheMousePos.current.y || mousePos.current.y, 
//       mousePos.current.y, 
//       0.1
//     );

//     if (distance > threshold) {
//       showNextImage();
//       zIndexVal.current++;
//       imgPosition.current = (imgPosition.current < imagesRef.current.length - 1) 
//         ? imgPosition.current + 1 
//         : 0;
//       lastMousePos.current = { ...mousePos.current };
//     }

//     // Check if all images are inactive
//     const isIdle = imagesRef.current.every(img => !isImageActive(img));
//     if (isIdle && zIndexVal.current !== 1) {
//       zIndexVal.current = 1;
//     }

//     animationRef.current = requestAnimationFrame(render);
//   };

//   useEffect(() => {
//     const handleMouseMove = (ev) => {
//       mousePos.current = getMousePos(ev);
//     };

//     const handleResize = () => {
//       // Reset all images
//       imagesRef.current.forEach(img => {
//         gsap.set(img, { scale: 1, x: 0, y: 0, opacity: 0 });
//       });
//     };

//     // Initialize images
//     imagesRef.current.forEach(img => {
//       gsap.set(img, { scale: 1, x: 0, y: 0, opacity: 0 });
//     });

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('resize', handleResize);

//     // Start animation loop
//     animationRef.current = requestAnimationFrame(render);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, []);

//   const projectImages = [
//     "https://picsum.photos/id/100/450/600",
//     "https://picsum.photos/id/101/450/600", 
//     "https://picsum.photos/id/102/450/600",
//     "https://picsum.photos/id/103/450/600",
//     "https://picsum.photos/id/104/450/600",
//     "https://picsum.photos/id/106/450/600",
//     "https://picsum.photos/id/107/450/600",
//     "https://picsum.photos/id/108/450/600",
//     "https://picsum.photos/id/109/450/600"
//   ];

//   return (
//     <section className="relative bg-black min-h-screen w-full">
//       {/* Image Trail Container */}
//       <div 
//         ref={containerRef}
//         className="absolute inset-0 z-10"
//         style={{ isolation: 'isolate' }}
//       >
//         <div className="image-trail absolute inset-0">
//           {projectImages.map((src, index) => (
//             <img
//               key={index}
//               ref={el => imagesRef.current[index] = el}
//               className="image-trail-img absolute max-w-[200px] top-0 left-0 opacity-0 rounded-[10px]"
//               src={src}
//               alt={`Project ${index + 1}`}
//               style={{ willChange: 'transform' }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Hero Caption */}
//       <div className="absolute inset-0 flex items-center justify-center z-20">
//         <div className="hero-caption text-center">
//           <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase m-0 leading-tight">
//             Our Portfolio
//           </h1>
//           <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-normal mt-2.5 text-center max-w-5xl mx-auto">
//           As one of the leading Wordpress development companies worldwide, our excellence and growth are clearly reflected in our reputation for excellence and continuous growth.
//           </p>
//         </div>
//       </div>

//       {/* Bottom right: Spline button */}
//       <a
//         href="https://spline.design"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="absolute bottom-4 right-4 z-30"
//         style={{ textDecoration: "none" }}
//       >
//         <div className="flex items-center gap-2 px-3 py-1.5 bg-[#18181b] border border-[#333] rounded-lg shadow hover:bg-[#23232a] transition">
//           <span className="text-lg text-gray-200 font-medium">MAHTAB-TECH</span>
//         </div>
//       </a>
//     </section>
//   );
// };

// export default SubProjects;

// const leaders = [
//   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 1" },
//   { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop", alt: "Project 2" },
//   { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop", alt: "Project 3" },
//   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 4" },
//   { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop", alt: "Project 5" },
//   { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop", alt: "Project 6" },
//   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 7" },
//   { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop", alt: "Project 8" },
//   { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop", alt: "Project 9" },
//   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 10" },
//   { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop", alt: "Project 11" },
//   { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop", alt: "Project 12" },
//   { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 13" },
// ];

// // Absolute positions for each image to match the reference image layout
// const imagePositions = [
//   // row 1 (top)
//   { top: "590px", left: "-29%" },
//   { top: "210px", left: "-29%" },
//   { top: " 480px", left: "-11%" },
//   { top: "110px", left: "-11%" },
//   { top: "180px", left: "7%" },
//   { top: "120px", left: "24.7%" },
// //center
//   { top: "150px", left: "42%" },
//     // row 2 (bottom) - opposite direction to row 1
//     { top: "590px", left: "112.5%" },
//     { top: "210px", left: "112.5%" },
//     { top: " 480px", left: "95%" },
//     { top: "110px", left: "95%" },
//     { top: "180px", left: "77.5%" },
//     { top: "120px", left: "59.7%" },
// ];

// const SubProjects = () => {
//   return (
//     <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0D0B25] overflow-hidden py-20" style={{backgroundImage: "url('./joule-pattern.svg')"}}>
//       {/* Background subtle lines */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 z-0 pointer-events-none"
       
//       />
//       {/* Images in absolute positions */}
//       <div className="absolute w-full h-[500px] left-0 top-0 z-10 pointer-events-none select-none" style={{maxWidth: "1200px", margin: "0 auto", right: 0, left: 0}}>
//         {leaders.map((leader, idx) => (
//           <div
//             key={idx}
//             className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 absolute hover:scale-110 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
//             style={{
//               width: 190,
//               height: 350,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)",
//               ...imagePositions[idx],
//               animation: `float 3s ease-in-out infinite`,
//               animationDelay: `${idx * 0.2}s`,
//             }}
//           >
//             <img
//               src={leader.src}
//               alt={leader.alt}
//               className="object-cover w-full h-full hover:brightness-125 hover:contrast-110 hover:saturate-150 transition-all duration-500 ease-in-out transform hover:scale-105"
//               draggable={false}
//             />
//           </div>
//         ))}
//       </div>
//       {/* Centered Text */}
//       <div className="relative z-20 flex flex-col items-center text-center px-4" style={{marginTop: "500px"}}>
//         <span className="uppercase text-lg tracking-widest text-gray-300 mb-2">
//           Portfolio
//         </span>
//         <h2 className="text-8xl  font-bold text-white mb-2">
//           Our Portfolio Work
//         </h2>
//         <h3 className="text-xl md:text-2xl font-normal text-gray-300 mb-4">
//           from various industries
//         </h3>
//         <p className="text-gray-500 text-base md:text-lg mb-6 max-w-xl">
//         As one of the leading Wordpress development companies worldwide, our excellence and growth are clearly reflected in our reputation for excellence and continuous growth.
//         </p>
       
//       </div>

//       {/* CSS Animation Keyframes */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default SubProjects;








const leaders = [
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 1" },
    { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop", alt: "Project 2" },
    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop", alt: "Project 3" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 4" },
    { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop", alt: "Project 5" },
    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop", alt: "Project 6" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 7" },
    { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop", alt: "Project 8" },
    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop", alt: "Project 9" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 10" },
    { src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop", alt: "Project 11" },
    { src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=500&fit=crop", alt: "Project 12" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop", alt: "Project 13" },
  ];
  
  // Absolute positions for each image to match the reference image layout
  const imagePositions = [
    // row 1 (top)
    { top: "590px", left: "-29%" },
    { top: "210px", left: "-29%" },
    { top: " 480px", left: "-11%" },
    { top: "110px", left: "-11%" },
    { top: "180px", left: "7%" },
    { top: "120px", left: "24.7%" },
  //center
    { top: "150px", left: "42%" },
      // row 2 (bottom) - opposite direction to row 1
      { top: "590px", left: "112.5%" },
      { top: "210px", left: "112.5%" },
      { top: " 480px", left: "95%" },
      { top: "110px", left: "95%" },
      { top: "180px", left: "77.5%" },
      { top: "120px", left: "59.7%" },
  ];
  
  const SubProjects = () => {
    return (
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0D0B25] overflow-hidden py-20" style={{backgroundImage: "url('./joule-pattern.svg')"}}>
        {/* Background subtle lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
         
        />
        {/* Images in absolute positions */}
        <div className="absolute w-full h-[500px] left-0 top-0 z-10 pointer-events-none select-none" style={{maxWidth: "1200px", margin: "0 auto", right: 0, left: 0}}>
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 absolute hover:scale-110 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-2 transition-all duration-500 ease-in-out cursor-pointer"
              style={{
                width: 190,
                height: 350,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.07)",
                ...imagePositions[idx],
                animation: `float 3s ease-in-out infinite`,
                animationDelay: `${idx * 0.2}s`,
              }}
            >
              <img
                src={leader.src}
                alt={leader.alt}
                className="object-cover w-full h-full hover:brightness-125 hover:contrast-110 hover:saturate-150 transition-all duration-500 ease-in-out transform hover:scale-105"
                draggable={false}
              />
            </div>
          ))}
        </div>
        {/* Centered Text */}
        <div className="relative z-20 flex flex-col items-center text-center px-4" style={{marginTop: "500px"}}>
          <span className="uppercase text-lg tracking-widest text-gray-300 mb-2">
            Portfolio
          </span>
          <h2 className="text-8xl  font-bold text-white mb-2">
            Our Portfolio Work
          </h2>
          <h3 className="text-xl md:text-2xl font-normal text-gray-300 mb-4">
            from various industries
          </h3>
          <p className="text-gray-500 text-base md:text-lg mb-6 max-w-xl">
          As one of the leading Wordpress development companies worldwide, our excellence and growth are clearly reflected in our reputation for excellence and continuous growth.
          </p>
         
        </div>
  
        {/* CSS Animation Keyframes */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </section>
    );
  };
  
  export default SubProjects;
  