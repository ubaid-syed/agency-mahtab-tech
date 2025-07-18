import React from 'react'
import SubServices from "../components/SubServices.jsx";
import ServicesProvide from "../components/ServicesProvide.jsx";

const Services = () => {
  return (
    <div>
        <SubServices />
         <ServicesProvide />
       
    </div>
  )
}

export default Services




// import React from "react";

// // Service data
// const services = [
//   {
//     title: "Residential Building and Renovation",
//     desc: "We specialize in custom new homes and renovations, delivering quality spaces with a modern approach.",
//     icon: (
//       <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
//         <rect x="6" y="14" width="20" height="12" rx="2" fill="#F7B267"/>
//         <path d="M4 16L16 6l12 10" stroke="#F7B267" strokeWidth="2" strokeLinejoin="round"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Renovation & Remodeling Services",
//     desc: "Upgrades & modern remodeling solutions for kitchens, baths, and spaces to boost livability.",
//     icon: (
//       <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
//         <rect x="8" y="8" width="16" height="16" rx="2" fill="#F7B267"/>
//         <path d="M8 16h16" stroke="#F7B267" strokeWidth="2"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Pre-Construction Planning Solutions",
//     desc: "Expert advice on site evaluation, budgeting, scheduling, and design for a smooth build.",
//     icon: (
//       <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
//         <circle cx="16" cy="16" r="12" fill="#F7B267"/>
//         <path d="M16 10v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Commercial Property Development Services",
//     desc: "From offices to retail, we deliver functional, efficient commercial spaces tailored to your needs.",
//     icon: (
//       <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
//         <rect x="6" y="10" width="20" height="14" rx="2" fill="#F7B267"/>
//         <rect x="12" y="18" width="8" height="6" rx="1" fill="#fff"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Interior Fit-Out Solutions",
//     desc: "Seamless interior solutions combine style and function for inspiring, productive spaces.",
//     icon: (
//       <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
//         <rect x="8" y="8" width="16" height="16" rx="2" fill="#F7B267"/>
//         <rect x="12" y="12" width="8" height="8" rx="1" fill="#fff"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Infrastructure and Road Construction",
//     desc: "We deliver robust, sustainable infrastructure projects from roads to utilities and more.",
//     icon: (
//       <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
//         <rect x="4" y="20" width="24" height="6" rx="2" fill="#F7B267"/>
//         <rect x="8" y="10" width="16" height="6" rx="2" fill="#F7B267" opacity="0.5"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Design and Build Services",
//     desc: "A seamless experience combining architecture, engineering, and construction under one roof.",
//     icon: (
//       <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
//         <polygon points="16,6 28,14 16,22 4,14" fill="#F7B267"/>
//         <rect x="10" y="18" width="12" height="6" rx="1" fill="#fff"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Project Management and Delivery",
//     desc: "Managing timelines, budgets, and quality for a hassle-free, on-time project handover.",
//     icon: (
//       <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
//         <rect x="6" y="8" width="20" height="16" rx="3" fill="#F7B267"/>
//         <path d="M10 16h12M16 12v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
//       </svg>
//     ),
//   },
//   {
//     title: "Steel Structure Fabrication Works",
//     desc: "Reliable, safe, and innovative steel structure solutions for commercial and industrial projects.",
//     icon: (
//       <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
//         <rect x="8" y="8" width="16" height="16" rx="2" fill="#F7B267"/>
//         <path d="M12 20l8-8M12 12l8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
//       </svg>
//     ),
//   },
// ];

// const ServicesProvide = () => {
//   return (
//     <section className="bg-[#fcfcfc] py-12 md:py-20">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 md:mb-16">
//           <div>
//             <div className="text-xs text-[#F7B267] font-semibold mb-2 uppercase tracking-wider">
//               Our Services
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#18181b] mb-2 leading-tight">
//               Comprehensive Building<br className="hidden md:block" /> Solutions
//             </h2>
//           </div>
//           <div className="max-w-xl mt-4 md:mt-0 md:ml-8 text-gray-700 text-base md:text-lg leading-relaxed">
//             At Mahtab, we offer end-to-end building services that cover every phase of your project—from initial planning and design to final construction and handover.
//           </div>
//         </div>
//         {/* Services Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, idx) => (
//             <div
//               key={service.title}
//               className="relative bg-white rounded-2xl shadow-sm border border-[#f3f3f3] px-6 py-8 flex flex-col min-h-[220px] transition-all hover:shadow-lg group"
//             >
//               {/* Icon */}
//               <div className="mb-4">
//                 <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f7b267]/10">
//                   {service.icon}
//                 </div>
//               </div>
//               {/* Title */}
//               <h3 className="text-lg font-semibold text-[#18181b] mb-2 leading-snug">
//                 {service.title}
//               </h3>
//               {/* Description */}
//               <p className="text-gray-600 text-sm mb-4 flex-1">
//                 {service.desc}
//               </p>
//               {/* Read More */}
//               <a
//                 href="#"
//                 className="text-[#F7B267] text-sm font-medium inline-flex items-center gap-1 group-hover:underline transition"
//               >
//                 Read More
//                 <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
//                   <path d="M6 4l4 4-4 4" stroke="#F7B267" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </a>
//               {/* Decorative hex corners (optional, for visual match) */}
//               <div className="absolute top-0 left-0 w-4 h-4 bg-[#fcfcfc] rounded-tl-2xl" />
//               <div className="absolute top-0 right-0 w-4 h-4 bg-[#fcfcfc] rounded-tr-2xl" />
//               <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#fcfcfc] rounded-bl-2xl" />
//               <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#fcfcfc] rounded-br-2xl" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesProvide;



// // // import { servicesData } from '../utils/services.js';
// // // import "./learnbutton.css"

// // // const ServicesProvide = () => {
// // //   return (
// // //     <div className="w-full border-b border-gray-200 pb-2 pt-4 px-2 md:px-8 flex flex-col gap-3 bg-white">
// // //       <div className="flex flex-col lg:flex-row items-start gap-3 mt-8 lg:mt-24 px-4 lg:px-0">
// // //         <div className="flex-shrink-0 lg:ml-[310px] mx-auto lg:mx-0">
// // //           <div className="bg-[#2A1852] rounded-md px-4 lg:px-6 py-2 flex items-center justify-center min-w-[120px]">
// // //             <span className="text-white font-semibold text-2xl lg:text-4xl">Services</span>
// // //           </div>
// // //         </div>
// // //         <div className="pt-1 lg:pt-0">
// // //           <p className="text-base lg:text-lg text-gray-700 leading-tight w-full lg:w-[40vw] text-center lg:text-left">
// // //             At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
// // //           </p>
// // //         </div>
// // //       </div>
// // //       <div className="lg:ml-[310px] mt-8 lg:mt-24 px-4 lg:px-0">
// // //         {/* First Row - 2 boxes */}
// // //         <div className="flex flex-col lg:flex-row gap-4 mb-4">
// // //           {servicesData.slice(0, 2).map((service, index) => (
// // //             <div key={index} className={`border border-black rounded-lg w-full lg:w-[600px] h-auto lg:h-[300px] min-h-[300px] flex flex-col justify-between p-4 shadow-sm relative overflow-hidden ${service.backgroundColor}`}>
// // //               {/* Top: Service Title */}
// // //               <div className="mb-4">
// // //                 <span className={`inline-block ${service.foregroundColor} ${service.textColor} font-semibold text-base lg:text-lg px-3 lg:px-4 py-2 rounded-md`}>
// // //                   {service.title}
// // //                 </span>
// // //               </div>
// // //               {/* Right: Service Image */}
// // //               <div className="absolute right-2 lg:right-6 top-8">
// // //                 <img
// // //                   src={service.image}
// // //                   alt={service.title}
// // //                   className="w-32 h-24 lg:w-64 lg:h-42 object-contain"
// // //                   draggable="false"
// // //                 />
// // //               </div>
// // //               {/* Description */}
// // //               <div className="mb-6">
// // //                 <p className="text-sm lg:text-base text-gray-600 leading-relaxed w-48 lg:w-64">
// // //                   {service.description}
// // //                 </p>
// // //               </div>
// // //               {/* Bottom Left: Learn More */}
// // //               <button className="learn-more">
// // //                 <span className="circle" aria-hidden="true">
// // //                   <span className="icon arrow"></span>
// // //                 </span>
// // //                 <span className="button-text">Learn More</span>
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>
        
// // //         {/* Second Row - 2 boxes */}
// // //         <div className="flex flex-col lg:flex-row gap-4 mb-4">
// // //           {servicesData.slice(2, 4).map((service, index) => (
// // //             <div key={index} className={`border border-black rounded-lg w-full lg:w-[600px] h-auto lg:h-[300px] min-h-[300px] flex flex-col justify-between p-4 shadow-sm relative overflow-hidden ${service.backgroundColor}`}>
// // //               {/* Top: Service Title */}
// // //               <div className="mb-4">
// // //                 <span className={`inline-block ${service.foregroundColor} ${service.textColor} font-semibold text-base lg:text-lg px-3 lg:px-4 py-2 rounded-md`}>
// // //                   {service.title}
// // //                 </span>
// // //               </div>
// // //               {/* Right: Service Image */}
// // //               <div className="absolute right-2 lg:right-6 top-8">
// // //                 <img
// // //                   src={service.image}
// // //                   alt={service.title}
// // //                   className="w-32 h-24 lg:w-64 lg:h-42 object-contain"
// // //                   draggable="false"
// // //                 />
// // //               </div>
// // //               {/* Description */}
// // //               <div className="mb-6">
// // //                 <p className="text-sm lg:text-base text-gray-600 leading-relaxed w-48 lg:w-64">
// // //                   {service.description}
// // //                 </p>
// // //               </div>
// // //               {/* Bottom Left: Learn More */}
// // //               <button className="learn-more">
// // //                 <span className="circle" aria-hidden="true">
// // //                   <span className="icon arrow"></span>
// // //                 </span>
// // //                 <span className="button-text">Learn More</span>
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>
        
// // //         {/* Third Row - 2 boxes */}
// // //         <div className="flex flex-col lg:flex-row gap-4">
// // //           {servicesData.slice(4, 6).map((service, index) => (
// // //             <div key={index} className={`border border-black rounded-lg w-full lg:w-[600px] h-auto lg:h-[300px] min-h-[300px] flex flex-col justify-between p-4 shadow-sm relative overflow-hidden ${service.backgroundColor}`}>
// // //               {/* Top: Service Title */}
// // //               <div className="mb-4">
// // //                 <span className={`inline-block ${service.foregroundColor} ${service.textColor} font-semibold text-base lg:text-lg px-3 lg:px-4 py-2 rounded-md`}>
// // //                   {service.title}
// // //                 </span>
// // //               </div>
// // //               {/* Right: Service Image */}
// // //               <div className="absolute right-2 lg:right-6 top-8">
// // //                 <img
// // //                   src={service.image}
// // //                   alt={service.title}
// // //                   className="w-32 h-24 lg:w-64 lg:h-42 object-contain"
// // //                   draggable="false"
// // //                 />
// // //               </div>
// // //               {/* Description */}
// // //               <div className="mb-6">
// // //                 <p className="text-sm lg:text-base text-gray-600 leading-relaxed w-48 lg:w-64">
// // //                   {service.description}
// // //                 </p>
// // //               </div>
// // //               {/* Bottom Left: Learn More */}
// // //               <button className="learn-more">
// // //                 <span className="circle" aria-hidden="true">
// // //                   <span className="icon arrow"></span>
// // //                 </span>
// // //                 <span className="button-text">Learn More</span>
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ServicesProvide;


// // import React, { useRef, useEffect } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const services = [
// //   {
// //     title: "UI/UX Design",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
// //     img: "https://i.ibb.co/6b6n6kF/uiux-mock.png", // Replace with your own image if needed
// //     featured: true,
// //   },
// //   {
// //     title: "Branding",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
// //   },
// //   {
// //     title: "Animation",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
// //   },
// //   {
// //     title: "3D Design",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
// //   },
// //   {
// //     title: "Graphic Design",
// //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
// //   },
// // ];

// // const arrowIcon = (
// //   <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
// //     <circle cx="14" cy="14" r="14" fill="#F3F5F7" />
// //     <path
// //       d="M12 9l4 4-4 4"
// //       stroke="#222"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // const featuredArrowIcon = (
// //   <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
// //     <circle cx="16" cy="16" r="16" fill="#A6C7A7" />
// //     <path
// //       d="M14 11l5 5-5 5"
// //       stroke="#fff"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // const ServicesProvide = () => {
// //   const containerRef = useRef(null);
// //   const rowRefs = useRef([]);
// //   const imgRef = useRef(null);
// //   const featuredArrowRef = useRef(null);

// //   useEffect(() => {
// //     // Animate heading
// //     gsap.fromTo(
// //       ".services-heading",
// //       { y: -40, opacity: 0 },
// //       { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
// //     );

// //     // Animate rows
// //     rowRefs.current.forEach((row, i) => {
// //       gsap.fromTo(
// //         row,
// //         { x: -40, opacity: 0 },
// //         {
// //           x: 0,
// //           opacity: 1,
// //           duration: 0.8,
// //           delay: 0.2 + i * 0.12,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: row,
// //             start: "top 90%",
// //             toggleActions: "play none none reverse",
// //           },
// //         }
// //       );
// //     });

// //     // Animate featured image
// //     if (imgRef.current) {
// //       gsap.fromTo(
// //         imgRef.current,
// //         { scale: 0.92, opacity: 0, y: 30 },
// //         {
// //           scale: 1,
// //           opacity: 1,
// //           y: 0,
// //           duration: 1,
// //           delay: 0.4,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: imgRef.current,
// //             start: "top 90%",
// //             toggleActions: "play none none reverse",
// //           },
// //         }
// //       );
// //     }

// //     // Animate featured arrow
// //     if (featuredArrowRef.current) {
// //       gsap.fromTo(
// //         featuredArrowRef.current,
// //         { scale: 0.7, opacity: 0 },
// //         {
// //           scale: 1,
// //           opacity: 1,
// //           duration: 0.7,
// //           delay: 0.7,
// //           ease: "back.out(1.7)",
// //           scrollTrigger: {
// //             trigger: featuredArrowRef.current,
// //             start: "top 95%",
// //             toggleActions: "play none none reverse",
// //           },
// //         }
// //       );
// //     }
// //   }, []);

// //   return (
// //     <div
// //       ref={containerRef}
// //       className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-10 md:py-16"
// //     >
// //       <h2 className="services-heading text-3xl md:text-4xl font-semibold text-black mb-8 md:mb-12">
// //         Our Services And Works
// //       </h2>
// //       <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
// //         {/* Service Rows */}
// //         {services.map((service, idx) => (
// //           <div
// //             key={service.title}
// //             ref={el => (rowRefs.current[idx] = el)}
// //             className={`relative flex flex-col md:flex-row items-start md:items-center px-4 md:px-8 py-5 border-b last:border-b-0 transition-all duration-300 group ${
// //               service.featured
// //                 ? "bg-[#F3F5F7] md:pr-40"
// //                 : "bg-white hover:bg-[#F8F9FA]"
// //             }`}
// //           >
// //             {/* Title */}
// //             <div className="w-full md:w-1/4 font-medium text-lg md:text-xl text-black mb-2 md:mb-0">
// //               {service.title}
// //             </div>
// //             {/* Description */}
// //             <div className="w-full md:w-2/3 text-gray-600 text-sm md:text-base leading-relaxed">
// //               {service.desc}
// //             </div>
// //             {/* Arrow or Featured */}
// //             {service.featured ? (
// //               <>
// //                 {/* Featured Image */}
// //                 <div
// //                   className="hidden md:block absolute right-24 top-1/2 -translate-y-1/2 z-10"
// //                   style={{ width: 160, height: 110 }}
// //                 >
// //                   <img
// //                     ref={imgRef}
// //                     src={service.img}
// //                     alt={service.title}
// //                     className="rounded-md shadow-lg w-full h-full object-contain"
// //                     draggable="false"
// //                   />
// //                 </div>
// //                 {/* Featured Arrow */}
// //                 <button
// //                   ref={featuredArrowRef}
// //                   className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#A6C7A7] rounded-full w-12 h-12 flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-110"
// //                   aria-label="Go"
// //                 >
// //                   <svg width="28" height="28" fill="none" viewBox="0 0 28 28">
// //                     <circle cx="14" cy="14" r="14" fill="#A6C7A7" />
// //                     <path
// //                       d="M12 9l4 4-4 4"
// //                       stroke="#fff"
// //                       strokeWidth="2"
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                     />
// //                   </svg>
// //                 </button>
// //               </>
// //             ) : (
// //               <button
// //                 className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-transparent rounded-full w-10 h-10 flex items-center justify-center transition-transform duration-200 hover:scale-110"
// //                 aria-label="Go"
// //               >
// //                 {arrowIcon}
// //               </button>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServicesProvide;

// // // https://dribbble.com/shots/23824933-Services-Section







