import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

// Add more images if needed for richer content
const images = [
  {
    src: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/d0bb7841-8ba9-404d-bf11-9b01ecd11699",
    alt: "SpoiledChild WooCommerce website on laptop",
  },
  {
    src: "/Portfolios_page-0015.jpg",
    alt: "Interactive product display",
  },
  {
    src: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/565610f8-1d81-4181-b623-fb7bfd4bf6e8",
    alt: "Custom JavaScript features",
  },
  {
   
    src: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/4542334f-a9b8-4935-a2dd-468478800f02",
    alt: "Mobile responsive view",
  },
  {
    src: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/8d8b30b1-63eb-4105-a314-651795edb8ac",
    alt: "Client Testimonial",
  },
];

const skills = [
  "WordPress Theme",
  "JavaScript",
  "GSAP",
  "Elementor",
  "Plugin Customization",
  "Performance Optimization",
  "UX/UI Design",
  "Responsive Design",
  "API Integration",
];

const links = [
  { text: "Live Site", link: "https://spoiledchild.com" },
  { text: "Case Study", link: "https://www.behance.net/gallery/your-case-study" },
];

const highlights = [
  {
    title: "Lightning Fast Performance",
    desc: "Optimized for speed with advanced caching, lazy loading, and minimalistic code, ensuring a seamless shopping experience.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#7C3AED" />
        <path d="M16 8v10h6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Custom Product Animations",
    desc: "Engaging GSAP-powered animations for product reveals, hover effects, and smooth transitions throughout the site.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#06B6D4" />
        <path d="M10 16c2-4 10-4 12 0-2 4-10 4-12 0z" stroke="#fff" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Mobile-First Experience",
    desc: "Designed and tested for flawless usability on all devices, with touch-friendly navigation and adaptive layouts.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#F59E42" />
        <rect x="10" y="8" width="12" height="16" rx="2" stroke="#fff" strokeWidth="2.5" />
        <circle cx="16" cy="22" r="1" fill="#fff" />
      </svg>
    ),
  },
];

// Popup Modal Component
const ImagePopup = ({ open, image, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open || !image) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
      style={{ animation: "fadeIn .2s" }}
    >
      <div
        className="relative max-w-full max-h-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="rounded-2xl shadow-2xl bg-white"
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            objectFit: "contain",
            display: "block",
          }}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to { opacity: 1 }
        }
      `}</style>
    </div>
  );
};

const ProjectId1 = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const mainImgRef = useRef(null);
  const detailsRef = useRef(null);
  const imgRefs = [useRef(null), useRef(null), useRef(null)];
  const highlightsRef = useRef(null);

  // Popup state
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (img) => {
    setPopupImage(img);
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
    setPopupImage(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP animations
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power3.out" }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      mainImgRef.current,
      { opacity: 0, y: 40, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, delay: 0.45, ease: "power3.out" }
    );
    gsap.fromTo(
      detailsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.6, ease: "power3.out" }
    );
    imgRefs.forEach((ref, i) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          delay: 0.75 + i * 0.15,
          ease: "power3.out",
        }
      );
    });
    if (highlightsRef.current) {
      gsap.fromTo(
        highlightsRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <>
      <ImagePopup open={popupOpen} image={popupImage} onClose={closePopup} />
      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-indigo-100 flex flex-col items-center py-12 px-4 md:px-0"
      >
        {/* Title */}
        <h1
          ref={titleRef}
          className="mt-20 text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight text-center"
          style={{ letterSpacing: "-0.03em" }}
        >
          SpoiledChild Product Website
        </h1>
        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl text-indigo-700 mb-10 text-center max-w-2xl mx-auto font-medium"
        >
          Seamless WooCommerce shopping, advanced interactivity, and dynamic product experiences for a modern eCommerce brand.
        </p>

        {/* Main Image */}
        <div
          ref={mainImgRef}
          className="w-full flex justify-center mb-12"
          style={{ willChange: "transform" }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-300 hover:shadow-indigo-300 bg-white max-w-6xl w-full border border-indigo-100">
            <img
              src={images[0].src}
              alt={images[0].alt}
              width={1400}
              height={1100}
              className="w-full object-cover aspect-[16/10] transition-transform duration-300 hover:scale-105"
              style={{ cursor: "pointer", maxHeight: "1100px" }}
              onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.02, duration: 0.3 })}
              onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
              onClick={() => openPopup(images[0])}
            />
          </div>
        </div>

        {/* Highlights Section */}
        <section className="w-full max-w-5xl mb-14">
          {/* Section Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-900 tracking-tight mb-2">
              Project Highlights
            </h2>
            <p className="text-lg text-indigo-600 max-w-2xl mx-auto font-medium">
              Key features and innovations that set this project apart.
            </p>
          </div>
          <div
            ref={highlightsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="relative group flex flex-col items-center bg-gradient-to-br from-white via-indigo-50 to-indigo-100 rounded-3xl shadow-xl p-8 text-center border border-indigo-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{
                  boxShadow:
                    "0 4px 24px 0 rgba(80, 112, 255, 0.08), 0 1.5px 6px 0 rgba(80, 112, 255, 0.04)",
                }}
              >
                {/* Decorative accent circle */}
                <span className="absolute -top-6 -right-6 w-16 h-16 bg-indigo-100 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></span>
                {/* Icon with gradient ring */}
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full shadow-md group-hover:scale-105 transition-transform duration-300">
                  <span className="text-indigo-700 text-3xl">{h.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2 drop-shadow-sm group-hover:text-indigo-700 transition-colors duration-200">
                  {h.title}
                </h3>
                <p className="text-gray-600 text-base font-medium leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Details */}
        <div
          ref={detailsRef}
          className="w-full max-w-5xl flex flex-col md:flex-row gap-10 items-stretch bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-14 border border-indigo-100"
        >
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                Project Overview
              </h2>
              <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
                <span className="font-semibold text-indigo-700">SpoiledChild</span> is a next-generation eCommerce platform designed for a modern beauty brand. The website leverages <span className="font-semibold">WooCommerce</span> for robust product management and secure transactions, while custom JavaScript and GSAP animations deliver a visually stunning, interactive experience.
                <br /><br />
                <span className="font-semibold text-indigo-700">Key Features:</span>
                <ul className="list-disc pl-6 mt-2 mb-2 text-base text-gray-700 space-y-1">
                  <li>Dynamic product carousels and interactive galleries for immersive browsing.</li>
                  <li>Personalized recommendations and upsell modules powered by custom scripts.</li>
                  <li>Advanced filtering and search for effortless product discovery.</li>
                  <li>Mobile-first layouts with touch-optimized navigation and fast load times.</li>
                  <li>Integrated blog and content sections to boost SEO and brand engagement.</li>
                  <li>Accessibility best practices for an inclusive user experience.</li>
                </ul>
                <br />
                <span className="text-sm text-gray-500">Published on Nov 12, 2024</span>
              </p>
            </div>
            <div>
              <div className="mb-4">
                <span className="block text-gray-500 font-medium mb-1">Skills & Deliverables:</span>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <span className="block text-gray-500 font-medium mb-1">Links:</span>
                <ul className="flex flex-wrap gap-3">
                  {links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-700 hover:underline font-semibold"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Right Side Image - Make it full height and wider */}
          <div className="flex-1 flex flex-col justify-center items-center h-full min-h-[600px]">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="rounded-2xl shadow-lg object-cover w-full h-full max-w-[420px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[600px] 2xl:max-w-[700px] mb-4 border border-indigo-100"
                style={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "3/4",
                  display: "block",
                  objectFit: "cover",
                  minWidth: "0",
                  minHeight: "600px",
                  maxHeight: "100vh"
                }}
                onClick={() => openPopup(images[1])}
                style={{ 
                  width: "100%",
                  height: "100%",
                  aspectRatio: "3/4",
                  display: "block",
                  objectFit: "cover",
                  minWidth: "0",
                  minHeight: "600px",
                  maxHeight: "100vh",
                  cursor: "pointer"
                }}
                title="Click to enlarge"
              />
              <span className="text-gray-500 text-sm text-center">{images[1].alt}</span>
            </div>
          </div>
        </div>

        {/* Modern Images Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {[2, 3 ,4].map((idx, i) => (
            <div
              key={images[idx].alt}
              ref={imgRefs[i]}
              className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col justify-between transition-shadow duration-300 hover:shadow-indigo-300 border border-indigo-100"
              style={{ willChange: "transform" }}
            >
              <img
                src={images[idx].src}
                alt={images[idx].alt}
                width={600}
                height={450}
                className="w-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
                style={{ cursor: "pointer", minHeight: "320px", maxHeight: "450px" }}
                onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.04, duration: 0.3 })}
                onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
                onClick={() => openPopup(images[idx])}
                title="Click to enlarge"
              />
              <div className="p-4">
                <p className="text-gray-700 text-base font-medium text-center">{images[idx].alt}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Add extra space at the bottom to ensure full scroll */}
        <div style={{ height: "8rem" }} />
      </div>
    </>
  );
};

export default ProjectId1;
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// const images = [
//   {
//     src: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/d0bb7841-8ba9-404d-bf11-9b01ecd11699",
//     alt: "SpoiledChild WooCommerce website on laptop",
//   },
//   {
//     src: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/4542334f-a9b8-4935-a2dd-468478800f02",
//     alt: "Interactive product display",
//   },
//   {
//     src: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/565610f8-1d81-4181-b623-fb7bfd4bf6e8",
//     alt: "Custom JavaScript features",
//   },
//   {
//     src: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/565610f8-1d81-4181-b623-fb7bfd4bf6e8",
//     alt: "Mobile responsive view",
//   },
// ];

// const skills = [
//   "WordPress Theme",
//   "JavaScript",
//   "GSAP",
//   "Elementor",
//   "Plugin Customization",
// ];

// const links = [
//   { text: "Live Site", link: "https://spoiledchild.com" },
// ];

// const ProjectId1 = () => {
//   const containerRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const mainImgRef = useRef(null);
//   const detailsRef = useRef(null);
//   const imgRefs = [useRef(null), useRef(null), useRef(null)];

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     // GSAP animations
//     gsap.fromTo(
//       titleRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power3.out" }
//     );
//     gsap.fromTo(
//       subtitleRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: "power3.out" }
//     );
//     gsap.fromTo(
//       mainImgRef.current,
//       { opacity: 0, y: 40, scale: 0.98 },
//       { opacity: 1, y: 0, scale: 1, duration: 0.9, delay: 0.45, ease: "power3.out" }
//     );
//     gsap.fromTo(
//       detailsRef.current,
//       { opacity: 0, y: 40 },
//       { opacity: 1, y: 0, duration: 0.7, delay: 0.6, ease: "power3.out" }
//     );
//     imgRefs.forEach((ref, i) => {
//       gsap.fromTo(
//         ref.current,
//         { opacity: 0, y: 40, scale: 0.98 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.9,
//           delay: 0.75 + i * 0.15,
//           ease: "power3.out",
//         }
//       );
//     });
//   }, []);

//   // Modern, sleek, and properly aligned images grid
//   return (
//     <div
//       ref={containerRef}
//       className="min-h-screen bg-white flex flex-col items-center py-12 px-4 md:px-0"
//     >
//       {/* Title */}
//       <h1
//         ref={titleRef}
//         className="mt-20 text-3xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight"
//         style={{ letterSpacing: "-0.02em" }}
//       >
//         SpoiledChild Product Website
//       </h1>
//       {/* Subtitle */}
//       <p
//         ref={subtitleRef}
//         className="text-base md:text-lg text-gray-500 mb-8"
//       >
//         Seamless WooCommerce shopping, advanced interactivity, and dynamic product experiences for a modern eCommerce brand.
//       </p>

//       {/* Main Image */}
//       <div
//         ref={mainImgRef}
//         className="w-full flex justify-center mb-10"
//         style={{ willChange: "transform" }}
//       >
//         <div className="rounded-2xl overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl bg-white max-w-4xl w-full">
//           <img
//             src={images[0].src}
//             alt={images[0].alt}
//             className="w-full object-cover aspect-video transition-transform duration-300 hover:scale-105"
//             style={{ cursor: "pointer" }}
//             onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.02, duration: 0.3 })}
//             onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
//           />
//         </div>
//       </div>

//       {/* Project Details */}
//       <div
//         ref={detailsRef}
//         className="w-full max-w-2xl mt-2 flex flex-col md:flex-row gap-8 items-start"
//       >
//         <div className="flex-1" />
//         <div className="flex-[2]">
//           <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
//             Project Overview
//           </h2>
//           <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
//             Created a sleek, product-focused website for <span className="font-semibold">SpoiledChild</span> using WooCommerce for seamless transactions and intuitive shopping. Enhanced user engagement with advanced animations, interactive hover effects, and dynamic product displays. Integrated custom JavaScript functionalities for personalized experiences and interactive features. Designed with full responsiveness, ensuring optimal user experience across devices. This project successfully combined aesthetic appeal with functional excellence to drive sales and engagement.
//             <br />
//             <br />
//             <span className="text-sm text-gray-500">Published on Nov 12, 2024</span>
//           </p>
//           <div className="mb-4">
//             <span className="block text-gray-500 font-medium mb-1">Skills & Deliverables:</span>
//             <ul className="flex flex-wrap gap-2">
//               {skills.map((skill) => (
//                 <li
//                   key={skill}
//                   className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
//                 >
//                   {skill}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="mb-4">
//             <span className="block text-gray-500 font-medium mb-1">Links:</span>
//             <ul className="flex flex-wrap gap-3">
//               {links.map((link) => (
//                 <li key={link.text}>
//                   <a
//                     href={link.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-indigo-700 hover:underline font-semibold"
//                   >
//                     {link.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Modern Images Grid */}
//       <div className="w-full max-w-5xl mt-14 grid grid-cols-1 md:grid-cols-3 gap-8" style={{ border: "none", boxShadow: "none" }}>
//         {[1, 2, 3].map((idx, i) => (
//           <div
//             key={images[idx].alt}
//             ref={imgRefs[i]}
//             className="rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl"
//             style={{ willChange: "transform", border: "none", boxShadow: "none" }}
//           >
//             <img
//               src={images[idx].src}
//               alt={images[idx].alt}
//               className="w-full object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
//               style={{ cursor: "pointer", border: "none", boxShadow: "none" }}
//               onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.04, duration: 0.3 })}
//               onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
//             />
//             <div className="p-4">
//               <p className="text-gray-700 text-base font-medium text-center">{images[idx].alt}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Add extra space at the bottom to ensure full scroll */}
//       <div style={{ height: "8rem" }} />
//     </div>
//   );
// };

// export default ProjectId1;
