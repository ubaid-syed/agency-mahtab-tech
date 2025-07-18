// // // // // // // // // import React from "react";
// // // // // // // // // import "./Projects.css"; // Assuming you want to add your styles in Projects.css or any other CSS file
// // // // // // // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // // // // // // const Projects = () => {
// // // // // // // // //   const companies = [
// // // // // // // // //     {
// // // // // // // // //       name: "Trust & Co.",
// // // // // // // // //       description:
// // // // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // // // //       imageUrl:
// // // // // // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // // //       tags: ["branding", "packaging"],
// // // // // // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Tonic",
// // // // // // // // //       description:
// // // // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // // // //       imageUrl:
// // // // // // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // // //       tags: ["branding", "marketing"],
// // // // // // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       name: "Shower Gel",
// // // // // // // // //       description:
// // // // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // // // //       imageUrl:
// // // // // // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // // //       tags: ["branding", "packaging", "marketing"],
// // // // // // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // // // // // //     },
// // // // // // // // //   ];

// // // // // // // // //   return (
// // // // // // // // //     <section className="trusted-companies">
// // // // // // // // //       <h2>
// // // // // // // // //         leading companies
// // // // // // // // //         <br />
// // // // // // // // //         have trusted us
// // // // // // // // //       </h2>
// // // // // // // // //       <div className="trusted-companies__container">
// // // // // // // // //         {companies.map((company, index) => (
// // // // // // // // //           <div className="trusted-companies__card" key={index}>
// // // // // // // // //             <div
// // // // // // // // //               className="trusted-companies__card-inner"
// // // // // // // // //               style={{ "--clr": "#fff" }}
// // // // // // // // //             >
// // // // // // // // //               <div className="trusted-companies__box">
// // // // // // // // //                 <div className="trusted-companies__imgBox">
// // // // // // // // //                   <img src={company.imageUrl} alt={company.name} />
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="trusted-companies__icon">
// // // // // // // // //                   <a href="#" className="trusted-companies__iconBox">
// // // // // // // // //                     <span className="material-symbols-outlined">
// // // // // // // // //                       <FiArrowUpRight />
// // // // // // // // //                     </span>
// // // // // // // // //                   </a>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="trusted-companies__content">
// // // // // // // // //               <h3>{company.name}</h3>
// // // // // // // // //               <p>{company.description}</p>
// // // // // // // // //               <ul>
// // // // // // // // //                 {company.tags.map((tag, idx) => (
// // // // // // // // //                   <li
// // // // // // // // //                     key={idx}
// // // // // // // // //                     style={{ "--clr-tag": company.tagColors[idx] }}
// // // // // // // // //                     className={`trusted-companies__tag ${tag}`}
// // // // // // // // //                   >
// // // // // // // // //                     {tag}
// // // // // // // // //                   </li>
// // // // // // // // //                 ))}
// // // // // // // // //               </ul>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Projects;

// // // // // // // // import React, { useState } from "react";
// // // // // // // // import "./Projects.css"; // Assuming you want to add your styles in Projects.css or any other CSS file
// // // // // // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // // // // // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // // // // // // // const Projects = () => {
// // // // // // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // // // // // //   const companies = [
// // // // // // // //     {
// // // // // // // //       name: "Trust & Co.",
// // // // // // // //       description:
// // // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // // //       imageUrl:
// // // // // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       tags: ["branding", "packaging"],
// // // // // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Tonic",
// // // // // // // //       description:
// // // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // // //       imageUrl:
// // // // // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       tags: ["branding", "marketing"],
// // // // // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       name: "Shower Gel",
// // // // // // // //       description:
// // // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // // //       imageUrl:
// // // // // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // // //       tags: ["branding", "packaging", "marketing"],
// // // // // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // // // // //     },
// // // // // // // //   ];

// // // // // // // //   // Function to move to the previous project
// // // // // // // //   const prevProject = () => {
// // // // // // // //     setCurrentIndex((prevIndex) =>
// // // // // // // //       prevIndex === 0 ? companies.length - 1 : prevIndex - 1
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   // Function to move to the next project
// // // // // // // //   const nextProject = () => {
// // // // // // // //     setCurrentIndex((prevIndex) =>
// // // // // // // //       prevIndex === companies.length - 1 ? 0 : prevIndex + 1
// // // // // // // //     );
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section className="trusted-companies">
// // // // // // // //       <h2>
// // // // // // // //         leading companies
// // // // // // // //         <br />
// // // // // // // //         have trusted us
// // // // // // // //       </h2>
// // // // // // // //       <div className="trusted-companies__container">
// // // // // // // //         <div className="carousel">
// // // // // // // //           <div
// // // // // // // //             className="carousel__wrapper"
// // // // // // // //             style={{
// // // // // // // //               transform: `translateX(-${currentIndex * 100}%)`,
// // // // // // // //               transition: "transform 0.5s ease-in-out",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {companies.map((company, index) => (
// // // // // // // //               <div className="trusted-companies__card" key={index}>
// // // // // // // //                 <div
// // // // // // // //                   className="trusted-companies__card-inner"
// // // // // // // //                   style={{ "--clr": "#fff" }}
// // // // // // // //                 >
// // // // // // // //                   <div className="trusted-companies__box">
// // // // // // // //                     <div className="trusted-companies__imgBox">
// // // // // // // //                       <img src={company.imageUrl} alt={company.name} />
// // // // // // // //                     </div>
// // // // // // // //                     <div className="trusted-companies__icon">
// // // // // // // //                       <a href="#" className="trusted-companies__iconBox">
// // // // // // // //                         <span className="material-symbols-outlined">
// // // // // // // //                           <FiArrowUpRight />
// // // // // // // //                         </span>
// // // // // // // //                       </a>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="trusted-companies__content">
// // // // // // // //                   <h3>{company.name}</h3>
// // // // // // // //                   <p>{company.description}</p>
// // // // // // // //                   <ul>
// // // // // // // //                     {company.tags.map((tag, idx) => (
// // // // // // // //                       <li
// // // // // // // //                         key={idx}
// // // // // // // //                         style={{ "--clr-tag": company.tagColors[idx] }}
// // // // // // // //                         className={`trusted-companies__tag ${tag}`}
// // // // // // // //                       >
// // // // // // // //                         {tag}
// // // // // // // //                       </li>
// // // // // // // //                     ))}
// // // // // // // //                   </ul>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //           {/* Carousel arrows */}
// // // // // // // //           <div className="carousel__arrow carousel__arrow--left" onClick={prevProject}>
// // // // // // // //             <FaArrowLeft />
// // // // // // // //           </div>
// // // // // // // //           <div className="carousel__arrow carousel__arrow--right" onClick={nextProject}>
// // // // // // // //             <FaArrowRight />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Projects;

// // // // // // // import React, { useState } from "react";
// // // // // // // import "./Projects.css";
// // // // // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // // // // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // // // // // // const Projects = () => {
// // // // // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // // // // //   const companies = [
// // // // // // //     {
// // // // // // //       name: "Trust & Co.",
// // // // // // //       description:
// // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // //       imageUrl:
// // // // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       tags: ["branding", "packaging"],
// // // // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Tonic",
// // // // // // //       description:
// // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // //       imageUrl:
// // // // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       tags: ["branding", "marketing"],
// // // // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // // // //     },
// // // // // // //     {
// // // // // // //       name: "Shower Gel",
// // // // // // //       description:
// // // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // // //       imageUrl:
// // // // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // // //       tags: ["branding", "packaging", "marketing"],
// // // // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   // Function to move to the previous project
// // // // // // //   const prevProject = () => {
// // // // // // //     setCurrentIndex((prevIndex) =>
// // // // // // //       prevIndex === 0 ? companies.length - 3 : prevIndex - 1
// // // // // // //     );
// // // // // // //   };

// // // // // // //   // Function to move to the next project
// // // // // // //   const nextProject = () => {
// // // // // // //     setCurrentIndex((prevIndex) =>
// // // // // // //       prevIndex === companies.length - 3 ? 0 : prevIndex + 1
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <section className="trusted-companies">
// // // // // // //       <h2>
// // // // // // //         leading companies
// // // // // // //         <br />
// // // // // // //         have trusted us
// // // // // // //       </h2>
// // // // // // //       {/* Arrows outside the carousel */}
// // // // // // //       <div className="carousel__arrows">
// // // // // // //         <div
// // // // // // //           className="carousel__arrow carousel__arrow--left"
// // // // // // //           onClick={prevProject}
// // // // // // //         >
// // // // // // //           <FaArrowLeft />
// // // // // // //         </div>
// // // // // // //         <div
// // // // // // //           className="carousel__arrow carousel__arrow--right"
// // // // // // //           onClick={nextProject}
// // // // // // //         >
// // // // // // //           <FaArrowRight />
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div className="trusted-companies__container">
// // // // // // //         <div className="carousel">
// // // // // // //           <div
// // // // // // //             className="carousel__wrapper"
// // // // // // //             style={{
// // // // // // //               transform: `translateX(-${currentIndex * (100 / 3)}%)`, // Show 3 items at once
// // // // // // //               transition: "transform 0.5s ease-in-out",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             {companies.map((company, index) => (
// // // // // // //               <div className="trusted-companies__card" key={index}>
// // // // // // //                 <div
// // // // // // //                   className="trusted-companies__card-inner"
// // // // // // //                   style={{ "--clr": "#fff" }}
// // // // // // //                 >
// // // // // // //                   <div className="trusted-companies__box">
// // // // // // //                     <div className="trusted-companies__imgBox">
// // // // // // //                       <img src={company.imageUrl} alt={company.name} />
// // // // // // //                     </div>
// // // // // // //                     <div className="trusted-companies__icon">
// // // // // // //                       <a href="#" className="trusted-companies__iconBox">
// // // // // // //                         <span className="material-symbols-outlined">
// // // // // // //                           <FiArrowUpRight />
// // // // // // //                         </span>
// // // // // // //                       </a>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //                 <div className="trusted-companies__content">
// // // // // // //                   <h3>{company.name}</h3>
// // // // // // //                   <p>{company.description}</p>
// // // // // // //                   <ul>
// // // // // // //                     {company.tags.map((tag, idx) => (
// // // // // // //                       <li
// // // // // // //                         key={idx}
// // // // // // //                         style={{ "--clr-tag": company.tagColors[idx] }}
// // // // // // //                         className={`trusted-companies__tag ${tag}`}
// // // // // // //                       >
// // // // // // //                         {tag}
// // // // // // //                       </li>
// // // // // // //                     ))}
// // // // // // //                   </ul>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Projects;

// // // // // // import React, { useState } from "react";
// // // // // // import "./Projects.css";
// // // // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // // // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // // // // // const Projects = () => {
// // // // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // // // //   const companies = [
// // // // // //     {
// // // // // //       name: "Trust & Co.",
// // // // // //       description:
// // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // //       imageUrl:
// // // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       tags: ["branding", "packaging"],
// // // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Tonic",
// // // // // //       description:
// // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // //       imageUrl:
// // // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       tags: ["branding", "marketing"],
// // // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Shower Gel",
// // // // // //       description:
// // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // //       imageUrl:
// // // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       tags: ["branding", "packaging", "marketing"],
// // // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Trust & Co.",
// // // // // //       description:
// // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // //       imageUrl:
// // // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       tags: ["branding", "packaging"],
// // // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Tonic",
// // // // // //       description:
// // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // //       imageUrl:
// // // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       tags: ["branding", "marketing"],
// // // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Shower Gel",
// // // // // //       description:
// // // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // // //       imageUrl:
// // // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // // //       tags: ["branding", "packaging", "marketing"],
// // // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // // //     },
// // // // // //   ];

// // // // // //   // Function to move to the previous project
// // // // // //   const prevProject = () => {
// // // // // //     setCurrentIndex((prevIndex) =>
// // // // // //       prevIndex === 0 ? companies.length - 3 : prevIndex - 1
// // // // // //     );
// // // // // //   };

// // // // // //   // Function to move to the next project
// // // // // //   const nextProject = () => {
// // // // // //     setCurrentIndex((prevIndex) =>
// // // // // //       prevIndex === companies.length - 3 ? 0 : prevIndex + 1
// // // // // //     );
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="trusted-companies">
// // // // // //       <h2>
// // // // // //         leading companies
// // // // // //         <br />
// // // // // //         have trusted us
// // // // // //       </h2>

// // // // // //       {/* Arrows positioned outside the carousel */}
// // // // // //       <div className="carousel__arrows">
// // // // // //         <div
// // // // // //           className="carousel__arrow carousel__arrow--left"
// // // // // //           onClick={prevProject}
// // // // // //         >
// // // // // //           <FaArrowLeft />
// // // // // //         </div>
// // // // // //         <div
// // // // // //           className="carousel__arrow carousel__arrow--right"
// // // // // //           onClick={nextProject}
// // // // // //         >
// // // // // //           <FaArrowRight />
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="trusted-companies__container">
// // // // // //         <div className="carousel">
// // // // // //           <div
// // // // // //             className="carousel__wrapper"
// // // // // //             style={{
// // // // // //               transform: `translateX(-${(currentIndex * 100) / 3}%)`, // Show 3 items at once
// // // // // //               transition: "transform 0.5s ease-in-out",
// // // // // //             }}
// // // // // //           >
// // // // // //             {companies.map((company, index) => (
// // // // // //               <div className="trusted-companies__card" key={index}>
// // // // // //                 <div
// // // // // //                   className="trusted-companies__card-inner"
// // // // // //                   style={{ "--clr": "#fff" }}
// // // // // //                 >
// // // // // //                   <div className="trusted-companies__box">
// // // // // //                     <div className="trusted-companies__imgBox">
// // // // // //                       <img src={company.imageUrl} alt={company.name} />
// // // // // //                     </div>
// // // // // //                     <div className="trusted-companies__icon">
// // // // // //                       <a href="#" className="trusted-companies__iconBox">
// // // // // //                         <span className="material-symbols-outlined">
// // // // // //                           <FiArrowUpRight />
// // // // // //                         </span>
// // // // // //                       </a>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <div className="trusted-companies__content">
// // // // // //                   <h3>{company.name}</h3>
// // // // // //                   <p>{company.description}</p>
// // // // // //                   <ul>
// // // // // //                     {company.tags.map((tag, idx) => (
// // // // // //                       <li
// // // // // //                         key={idx}
// // // // // //                         style={{ "--clr-tag": company.tagColors[idx] }}
// // // // // //                         className={`trusted-companies__tag ${tag}`}
// // // // // //                       >
// // // // // //                         {tag}
// // // // // //                       </li>
// // // // // //                     ))}
// // // // // //                   </ul>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Projects;

// // // // // // // .trusted-companies {
// // // // // // //   padding-block: min(20vh, 2rem);
// // // // // // //   width: calc(min(76.5rem, 90%));
// // // // // // //   margin-inline: auto;
// // // // // // //   color: #111;

// // // // // // //   h2 {
// // // // // // //     text-transform: capitalize;
// // // // // // //     letter-spacing: 0.025em;
// // // // // // //     font-size: clamp(2rem, 1.8125rem + 0.75vw, 2.6rem);
// // // // // // //   }

// // // // // // //   a {
// // // // // // //     display: inline-block;
// // // // // // //     text-decoration: none;
// // // // // // //   }

// // // // // // //   .trusted-companies__container {
// // // // // // //     margin-top: 5em;
// // // // // // //     display: grid;
// // // // // // //     grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
// // // // // // //     gap: 2rem;

// // // // // // //     .trusted-companies__card {
// // // // // // //       &:nth-child(1) .trusted-companies__box .trusted-companies__icon .trusted-companies__iconBox {
// // // // // // //         background: #d3b19a;
// // // // // // //       }
// // // // // // //       &:nth-child(2) .trusted-companies__box .trusted-companies__icon .trusted-companies__iconBox {
// // // // // // //         background: #70b3b1;
// // // // // // //       }
// // // // // // //       &:nth-child(3) .trusted-companies__box .trusted-companies__icon .trusted-companies__iconBox {
// // // // // // //         background: #d05fa2;
// // // // // // //       }

// // // // // // //       ul {
// // // // // // //         margin: 0;
// // // // // // //         padding: 0;
// // // // // // //         list-style-type: none;
// // // // // // //         display: flex;
// // // // // // //         align-items: center;
// // // // // // //         flex-wrap: wrap;
// // // // // // //         gap: 0.625rem;

// // // // // // //         li {
// // // // // // //           text-transform: uppercase;
// // // // // // //           background: var(--clr-tag);
// // // // // // //           color: #282828;
// // // // // // //           font-weight: 700;
// // // // // // //           font-size: 0.8rem;
// // // // // // //           padding: 0.375rem 0.625rem;
// // // // // // //           border-radius: 0.188rem;
// // // // // // //         }

// // // // // // //         .trusted-companies__tag.branding {
// // // // // // //           color: darken(#d3b19a, 40%);
// // // // // // //         }

// // // // // // //         .trusted-companies__tag.packaging {
// // // // // // //           color: darken(#70b3b1, 40%);
// // // // // // //         }

// // // // // // //         .trusted-companies__tag.marketing {
// // // // // // //           color: darken(#d05fa2, 40%);
// // // // // // //         }
// // // // // // //       }

// // // // // // //       .trusted-companies__content {
// // // // // // //         padding: 0.938rem 0.625rem;

// // // // // // //         h3 {
// // // // // // //           text-transform: capitalize;
// // // // // // //           font-size: clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem);
// // // // // // //         }

// // // // // // //         p {
// // // // // // //           margin: 0.625rem 0 1.25rem;
// // // // // // //           color: #565656;
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }

// // // // // // //     .trusted-companies__card-inner {
// // // // // // //       position: relative;
// // // // // // //       width: inherit;
// // // // // // //       height: 18.75rem;
// // // // // // //       background: var(--clr);
// // // // // // //       border-radius: 1.25rem;
// // // // // // //       border-bottom-right-radius: 0;
// // // // // // //       overflow: hidden;

// // // // // // //       .trusted-companies__box {
// // // // // // //         width: 100%;
// // // // // // //         height: 100%;
// // // // // // //         background: #000;
// // // // // // //         border-radius: 1.25rem;
// // // // // // //         overflow: hidden;

// // // // // // //         .trusted-companies__imgBox {
// // // // // // //           position: absolute;
// // // // // // //           inset: 0;

// // // // // // //           img {
// // // // // // //             width: 100%;
// // // // // // //             height: 100%;
// // // // // // //             object-fit: cover;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         .trusted-companies__icon {
// // // // // // //           position: absolute;
// // // // // // //           bottom: -0.375rem;
// // // // // // //           right: -0.375rem;
// // // // // // //           width: 6rem;
// // // // // // //           height: 6rem;
// // // // // // //           background: var(--clr);
// // // // // // //           border-top-left-radius: 50%;

// // // // // // //           &:hover .trusted-companies__iconBox {
// // // // // // //             transform: scale(1.1);
// // // // // // //           }

// // // // // // //           &::before {
// // // // // // //             position: absolute;
// // // // // // //             content: "";
// // // // // // //             bottom: 0.375rem;
// // // // // // //             left: -1.25rem;
// // // // // // //             background: transparent;
// // // // // // //             width: 1.25rem;
// // // // // // //             height: 1.25rem;
// // // // // // //             border-bottom-right-radius: 1.25rem;
// // // // // // //             box-shadow: 0.313rem 0.313rem 0 0.313rem rgb(255, 255, 255);
// // // // // // //           }

// // // // // // //           &::after {
// // // // // // //             position: absolute;
// // // // // // //             content: "";
// // // // // // //             top: -1.25rem;
// // // // // // //             right: 0.375rem;
// // // // // // //             background: transparent;
// // // // // // //             width: 1.25rem;
// // // // // // //             height: 1.25rem;
// // // // // // //             border-bottom-right-radius: 1.25rem;
// // // // // // //             box-shadow: 0.313rem 0.313rem 0 0.313rem var(--clr);
// // // // // // //           }

// // // // // // //           .trusted-companies__iconBox {
// // // // // // //             position: absolute;
// // // // // // //             inset: 0.625rem;
// // // // // // //             background: #282828;
// // // // // // //             border-radius: 50%;
// // // // // // //             display: flex;
// // // // // // //             justify-content: center;
// // // // // // //             align-items: center;
// // // // // // //             transition: 0.3s;

// // // // // // //             span {
// // // // // // //               color: #fff;
// // // // // // //               font-size: 1.5rem;
// // // // // // //             }
// // // // // // //           }
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }
// // // // // // // }

// // // // // // // .trusted-companies__container {
// // // // // // //   position: relative;
// // // // // // //   overflow: hidden;
// // // // // // // }

// // // // // // // /* Wrapper for the carousel to slide */
// // // // // // // .carousel__wrapper {
// // // // // // //   display: flex;
// // // // // // //   transition: transform 0.5s ease-in-out;
// // // // // // // }

// // // // // // // /* Styling for each project card */
// // // // // // // .trusted-companies__card {
// // // // // // //   min-width: 100%;
// // // // // // //   transition: all 0.5s ease;
// // // // // // // }

// // // // // // // /* Arrow buttons styling */
// // // // // // // .carousel__arrow {
// // // // // // //   position: absolute;
// // // // // // //   top: 50%;
// // // // // // //   transform: translateY(-50%);
// // // // // // //   background-color: rgba(0, 0, 0, 0.5);
// // // // // // //   color: white;
// // // // // // //   padding: 10px;
// // // // // // //   border-radius: 50%;
// // // // // // //   font-size: 24px;
// // // // // // //   cursor: pointer;
// // // // // // //   z-index: 10;
// // // // // // //   transition: background-color 0.3s ease;
// // // // // // // }

// // // // // // // .carousel__arrow:hover {
// // // // // // //   background-color: rgba(0, 0, 0, 0.7);
// // // // // // // }

// // // // // // // /* Left and right arrows positions */
// // // // // // // .carousel__arrow--left {
// // // // // // //   left: 10px;
// // // // // // // }

// // // // // // // .carousel__arrow--right {
// // // // // // //   right: 10px;
// // // // // // // }

// // // // // // // /* Project card content */
// // // // // // // .trusted-companies__card-inner {
// // // // // // //   position: relative;
// // // // // // // }

// // // // // // // /* Add a transition effect to the image box */
// // // // // // // .trusted-companies__imgBox img {
// // // // // // //   width: 100%;
// // // // // // //   height: 100%;
// // // // // // //   object-fit: cover;
// // // // // // // }

// // // // // // // /* Content styling */
// // // // // // // .trusted-companies__content {
// // // // // // //   padding: 20px;
// // // // // // //   background-color: #fff;
// // // // // // // }

// // // // // // // .trusted-companies__content h3 {
// // // // // // //   font-size: clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem);
// // // // // // // }

// // // // // // // .trusted-companies__content p {
// // // // // // //   margin: 10px 0;
// // // // // // //   color: #565656;
// // // // // // // }

// // // // // // // .trusted-companies__tag {
// // // // // // //   display: inline-block;
// // // // // // //   padding: 5px 10px;
// // // // // // //   margin: 5px 0;
// // // // // // //   border-radius: 5px;
// // // // // // //   color: white;
// // // // // // //   font-size: 14px;
// // // // // // // }

// // // // // // // /* Arrows container positioned above the carousel */
// // // // // // // .carousel__arrows {
// // // // // // //   display: flex;
// // // // // // //   justify-content: space-between;
// // // // // // //   position: relative;
// // // // // // //   z-index: 10;
// // // // // // //   margin-bottom: 20px;
// // // // // // // }

// // // // // // // /* Arrow button styles */
// // // // // // // .carousel__arrow {
// // // // // // //   background-color: rgba(0, 0, 0, 0.6);
// // // // // // //   color: white;
// // // // // // //   padding: 10px;
// // // // // // //   border-radius: 50%;
// // // // // // //   cursor: pointer;
// // // // // // //   transition: background-color 0.3s ease;
// // // // // // //   font-size: 24px;
// // // // // // // }

// // // // // // // .carousel__arrow:hover {
// // // // // // //   background-color: rgba(0, 0, 0, 0.8);
// // // // // // // }

// // // // // // // /* Left arrow position */
// // // // // // // .carousel__arrow--left {
// // // // // // //   margin-left: 10px;
// // // // // // // }

// // // // // // // /* Right arrow position */
// // // // // // // .carousel__arrow--right {
// // // // // // //   margin-right: 10px;
// // // // // // // }

// // // // // // // /* Carousel container */
// // // // // // // .trusted-companies__container {
// // // // // // //   position: relative;
// // // // // // //   overflow: hidden; /* Hide the overflowing cards */
// // // // // // // }

// // // // // // // /* Carousel wrapper to handle sliding effect */
// // // // // // // .carousel__wrapper {
// // // // // // //   display: flex;
// // // // // // //   transition: transform 0.5s ease-in-out;
// // // // // // // }

// // // // // // // /* Styling for each project card */
// // // // // // // .trusted-companies__card {
// // // // // // //   min-width: 33.33%; /* Show 3 cards at once */
// // // // // // //   transition: all 0.5s ease;
// // // // // // //   padding: 10px;
// // // // // // //   box-sizing: border-box;
// // // // // // // }

// // // // // // // /* Styling for the card inner content */
// // // // // // // .trusted-companies__card-inner {
// // // // // // //   position: relative;
// // // // // // // }

// // // // // // // /* Add transition effect to the image box */
// // // // // // // .trusted-companies__imgBox img {
// // // // // // //   width: 100%;
// // // // // // //   height: 100%;
// // // // // // //   object-fit: cover;
// // // // // // // }

// // // // // // // /* Content styling */
// // // // // // // .trusted-companies__content {
// // // // // // //   padding: 20px;
// // // // // // //   background-color: #fff;
// // // // // // // }

// // // // // // // .trusted-companies__content h3 {
// // // // // // //   font-size: clamp(1.5rem, 1.3909rem + 0.4364vw, 1.8rem);
// // // // // // // }

// // // // // // // .trusted-companies__content p {
// // // // // // //   margin: 10px 0;
// // // // // // //   color: #565656;
// // // // // // // }

// // // // // // // /* Tag colors and other styles for tags */
// // // // // // // .trusted-companies__tag {
// // // // // // //   display: inline-block;
// // // // // // //   padding: 5px 10px;
// // // // // // //   margin: 5px 0;
// // // // // // //   border-radius: 5px;
// // // // // // //   color: white;
// // // // // // //   font-size: 14px;
// // // // // // // }

// // // // // import React, { useState } from "react";
// // // // // import "./Projects.css";
// // // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // // // // const Projects = () => {
// // // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // // //   const companies = [
// // // // //     {
// // // // //       name: "Trust & Co.",
// // // // //       description:
// // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // //       imageUrl:
// // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       tags: ["branding", "packaging"],
// // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // //     },
// // // // //     {
// // // // //       name: "Tonic",
// // // // //       description:
// // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // //       imageUrl:
// // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       tags: ["branding", "marketing"],
// // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // //     },
// // // // //     {
// // // // //       name: "Shower Gel",
// // // // //       description:
// // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // //       imageUrl:
// // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       tags: ["branding", "packaging", "marketing"],
// // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // //     },
// // // // //     {
// // // // //       name: "Trust & Co.",
// // // // //       description:
// // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // //       imageUrl:
// // // // //         "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       tags: ["branding", "packaging"],
// // // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // // //     },
// // // // //     {
// // // // //       name: "Tonic",
// // // // //       description:
// // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // //       imageUrl:
// // // // //         "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       tags: ["branding", "marketing"],
// // // // //       tagColors: ["#d3b19a", "#d05fa2"],
// // // // //     },
// // // // //     {
// // // // //       name: "Shower Gel",
// // // // //       description:
// // // // //         "Fill out the form and the algorithm will offer the right team of experts",
// // // // //       imageUrl:
// // // // //         "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// // // // //       tags: ["branding", "packaging", "marketing"],
// // // // //       tagColors: ["#d3b19a", "#70b3b1", "#d05fa2"],
// // // // //     },
// // // // //   ];

// // // // //   // Function to move to the previous project
// // // // //   const prevProject = () => {
// // // // //     setCurrentIndex((prevIndex) =>
// // // // //       prevIndex === 0 ? companies.length - 1 : prevIndex - 1
// // // // //     );
// // // // //   };

// // // // //   // Function to move to the next project
// // // // //   const nextProject = () => {
// // // // //     setCurrentIndex((prevIndex) =>
// // // // //       prevIndex === companies.length - 1 ? 0 : prevIndex + 1
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <section className="trusted-companies">
// // // // //       <h2>
// // // // //         leading companies
// // // // //         <br />
// // // // //         have trusted us
// // // // //       </h2>

// // // // //       {/* Arrows positioned outside the carousel */}
// // // // //       <div className="carousel__arrows">
// // // // //         <div
// // // // //           className="carousel__arrow carousel__arrow--left"
// // // // //           onClick={prevProject}
// // // // //         >
// // // // //           <FaArrowLeft />
// // // // //         </div>
// // // // //         <div
// // // // //           className="carousel__arrow carousel__arrow--right"
// // // // //           onClick={nextProject}
// // // // //         >
// // // // //           <FaArrowRight />
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="trusted-companies__container">
// // // // //         <div className="carousel">
// // // // //           <div
// // // // //             className="carousel__wrapper"
// // // // //             style={{
// // // // //               transform: `translateX(-${currentIndex * 100}%)`, // Change 100% for each project
// // // // //               transition: "transform 0.5s ease-in-out",
// // // // //             }}
// // // // //           >
// // // // //             {companies.map((company, index) => (
// // // // //               <div className="trusted-companies__card" key={index}>
// // // // //                 <div
// // // // //                   className="trusted-companies__card-inner"
// // // // //                   style={{ "--clr": "#fff" }}
// // // // //                 >
// // // // //                   <div className="trusted-companies__box">
// // // // //                     <div className="trusted-companies__imgBox">
// // // // //                       <img src={company.imageUrl} alt={company.name} />
// // // // //                     </div>
// // // // //                     <div className="trusted-companies__icon">
// // // // //                       <a href="#" className="trusted-companies__iconBox">
// // // // //                         <span className="material-symbols-outlined">
// // // // //                           <FiArrowUpRight />
// // // // //                         </span>
// // // // //                       </a>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <div className="trusted-companies__content">
// // // // //                   <h3>{company.name}</h3>
// // // // //                   <p>{company.description}</p>
// // // // //                   <ul>
// // // // //                     {company.tags.map((tag, idx) => (
// // // // //                       <li
// // // // //                         key={idx}
// // // // //                         style={{ "--clr-tag": company.tagColors[idx] }}
// // // // //                         className={`trusted-companies__tag ${tag}`}
// // // // //                       >
// // // // //                         {tag}
// // // // //                       </li>
// // // // //                     ))}
// // // // //                   </ul>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Projects;

// // // // import React, { useState } from "react";
// // // // import "./Projects.css";
// // // // import { FiArrowUpRight } from "react-icons/fi";
// // // // import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // // // const Projects = () => {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // //   const companies = [
// // // //     {
// // // //       name: "Digital Marketing Agency Website",
// // // //       description:
// // // //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// // // //       imageUrl:
// // // //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// // // //       tags: ["branding", "packaging"],
// // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // //     },
// // // //     {
// // // //       name: "Digital Marketing Agency Website",
// // // //       description:
// // // //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// // // //       imageUrl:
// // // //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// // // //       tags: ["branding", "packaging"],
// // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // //     },
// // // //     {
// // // //       name: "Digital Marketing Agency Website",
// // // //       description:
// // // //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// // // //       imageUrl:
// // // //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// // // //       tags: ["branding", "packaging"],
// // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // //     },
// // // //     {
// // // //       name: "Digital Marketing Agency Website",
// // // //       description:
// // // //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// // // //       imageUrl:
// // // //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// // // //       tags: ["branding", "packaging"],
// // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // //     },
// // // //     {
// // // //       name: "Digital Marketing Agency Website",
// // // //       description:
// // // //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// // // //       imageUrl:
// // // //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// // // //       tags: ["branding", "packaging"],
// // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // //     },
// // // //     {
// // // //       name: "Digital Marketing Agency Website",
// // // //       description:
// // // //         "Developed a clean, user-friendly website for Vekstloop, highlighting their SEO, Google Ads, and social media marketing services.",
// // // //       imageUrl:
// // // //         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// // // //       tags: ["branding", "packaging"],
// // // //       tagColors: ["#d3b19a", "#70b3b1"],
// // // //     },
// // // //   ];

// // // //   // // Function to move to the previous project
// // // //   // const prevProject = () => {
// // // //   //   setCurrentIndex((prevIndex) =>
// // // //   //     prevIndex === 0 ? companies.length - 1 : prevIndex - 1
// // // //   //   );
// // // //   // };

// // // //   // // Function to move to the next project
// // // //   // const nextProject = () => {
// // // //   //   setCurrentIndex((prevIndex) =>
// // // //   //     prevIndex === companies.length - 1 ? 0 : prevIndex + 1
// // // //   //   );
// // // //   // };

// // // //   // Function to move to the previous project
// // // //   const prevProject = () => {
// // // //     setCurrentIndex((prevIndex) =>
// // // //       prevIndex === 0 ? companies.length - 3 : prevIndex - 1
// // // //     );
// // // //   };

// // // //   // Function to move to the next project
// // // //   const nextProject = () => {
// // // //     setCurrentIndex((prevIndex) =>
// // // //       prevIndex === companies.length - 3 ? 0 : prevIndex + 1
// // // //     );
// // // //   };

// // // //   return (
// // // //     <section className="trusted-companies">
// // // //       <h2>
// // // //         leading companies
// // // //         <br />
// // // //         have trusted us
// // // //       </h2>

// // // //       {/* Arrows positioned outside the carousel */}
// // // //       <div className="carousel__arrows">
// // // //         <div
// // // //           className="carousel__arrow carousel__arrow--left"
// // // //           onClick={prevProject}
// // // //         >
// // // //           <FaArrowLeft />
// // // //         </div>
// // // //         <div
// // // //           className="carousel__arrow carousel__arrow--right"
// // // //           onClick={nextProject}
// // // //         >
// // // //           <FaArrowRight />
// // // //         </div>
// // // //       </div>

// // // //       <div className="trusted-companies__container">
// // // //         <div className="carousel">
// // // //           <div
// // // //             className="carousel__wrapper"
// // // //             style={{
// // // //               transform: `translateX(-${currentIndex * 100}%)`, // Adjust to 100% per project
// // // //               transition: "transform 0.5s ease-in-out",
// // // //             }}
// // // //           >
// // // //             {companies.map((company, index) => (
// // // //               <div className="trusted-companies__card" key={index}>
// // // //                 <div
// // // //                   className="trusted-companies__card-inner"
// // // //                   style={{ "--clr": "#fff" }}
// // // //                 >
// // // //                   <div className="trusted-companies__box">
// // // //                     <div className="trusted-companies__imgBox">
// // // //                       <img src={company.imageUrl} alt={company.name} />
// // // //                     </div>
// // // //                     <div className="trusted-companies__icon">
// // // //                       <a href="#" className="trusted-companies__iconBox">
// // // //                         <span className="material-symbols-outlined">
// // // //                           <FiArrowUpRight />
// // // //                         </span>
// // // //                       </a>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="trusted-companies__content">
// // // //                   <h3>{company.name}</h3>
// // // //                   <p>{company.description}</p>
// // // //                   <ul>
// // // //                     {company.tags.map((tag, idx) => (
// // // //                       <li
// // // //                         key={idx}
// // // //                         style={{ "--clr-tag": company.tagColors[idx] }}
// // // //                         className={`trusted-companies__tag ${tag}`}
// // // //                       >
// // // //                         {tag}
// // // //                       </li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Projects;

// // // import React, { useState, useEffect } from "react";
// // // import "./Projects.css";
// // // // Sample projects data
// // // const projects = [
// // //   {
// // //     id: "1",
// // //     title: "BlissCamp",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project1/600/400",
// // //     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
// // //     description: "A website for Tourists and Travellers",
// // //     links: {
// // //       live: "https://nk2552003.github.io/BlissCampIndia/",
// // //       github: "https://github.com/NK2552003/BlissCampIndia",
// // //       codepen: "https://github.com/NK2552003/BlissCampIndia",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "2",
// // //     title: "lil' me",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project2/600/400",
// // //     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
// // //     description: "An animated moving boy using pure CSS, HTML & JS",
// // //     links: {
// // //       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //       github: "https://github.com/NK2552003/lil-me-male-version-",
// // //       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   // Add all other projects here
// // // ];

// // // const project = ["All", "App Development", "Web Development"];

// // // const Projects = () => {
// // //   const [selectedCategory, setSelectedCategory] = useState("All");

// // //   useEffect(() => {
// // //     // Placeholder for any side effects when category changes, if necessary
// // //   }, [selectedCategory]);

// // //   const filterProjects = () => {
// // //     return project.filter(
// // //       (project) =>
// // //         selectedCategory === "All" || project.category === selectedCategory
// // //     );
// // //   };

// // //   const playVideo = (video) => {
// // //     const playPromise = video.play();
// // //     if (playPromise !== undefined) {
// // //       playPromise.catch((error) => {
// // //         console.error("Error playing video:", error);
// // //       });
// // //     }
// // //   };

// // //   const pauseVideo = (video) => {
// // //     video.pause();
// // //     video.currentTime = 0; // Optionally reset to the beginning
// // //   };

// // //   return (
// // //     <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
// // //       {/* Filter Buttons */}
// // //       <div
// // //         id="portfolio-filter-buttons"
// // //         className="portfolio-mb-8 portfolio-flex portfolio-flex-wrap portfolio-gap-4"
// // //       >
// // //         {categories.map((category) => (
// // //           <button
// // //             key={category}
// // //             onClick={() => setSelectedCategory(category)}
// // //             className={
// // //               selectedCategory === category
// // //                 ? "portfolio-bg-white portfolio-text-black filterBtn"
// // //                 : "portfolio-text-white portfolio-text-white-80 filterBtn2"
// // //             }
// // //           >
// // //             {category}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Projects Grid */}
// // //       <div
// // //         id="portfolio-projects-grid"
// // //         className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
// // //       >
// // //         {filterProjects().map((project) => (
// // //           <div
// // //             key={project.id}
// // //             className="portfolio-group relative overflow-hidden"
// // //           >
// // //             <div className="portfolio-media-wrapper relative">
// // //               <img
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
// // //               />
// // //               <video
// // //                 src={project.video}
// // //                 autoplay
// // //                 muted
// // //                 loop
// // //                 className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
// // //                 style={{ opacity: 0 }}
// // //               ></video>
// // //               <div className="portfolio-overlay-blur"></div>
// // //             </div>

// // //             <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
// // //             <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
// // //               <p className="portfolio-progress">{project.progress}</p>
// // //               <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">
// // //                 {project.title}
// // //               </h3>
// // //               <p className="portfolio-description">{project.description}</p>
// // //               <div className="portfolio-links mt-4">
// // //                 <a
// // //                   href={project.links.live}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">
// // //                     <svg
// // //                       width="24px"
// // //                       height="24px"
// // //                       viewBox="0 0 24.00 24.00"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       stroke="#000000"
// // //                       strokeWidth="0.00024"
// // //                     >
// // //                       {/* Your SVG Content Here */}
// // //                     </svg>
// // //                   </button>
// // //                 </a>
// // //                 <a
// // //                   href={project.links.github}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">{/* Your GitHub SVG */}</button>
// // //                 </a>
// // //                 <a
// // //                   href={project.links.codepen}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">{/* Your Codepen SVG */}</button>
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             {/* Touch or Mouse Events */}
// // //             <div
// // //               className="portfolio-media-wrapper relative"
// // //               onTouchStart={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onTouchEnd={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //               onMouseEnter={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onMouseLeave={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Projects;

// // // import React, { useState, useEffect } from "react";
// // // import "./Projects.css";

// // // // Sample projects data
// // // const projects = [
// // //   {
// // //     id: "1",
// // //     title: "BlissCamp",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project1/600/400",
// // //     video: "https://youtu.be/l5ONgt-v9WI",
// // //     description: "A website for Tourists and Travellers",
// // //     links: {
// // //       live: "https://nk2552003.github.io/BlissCampIndia/",
// // //       github: "https://github.com/NK2552003/BlissCampIndia",
// // //       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "2",
// // //     title: "lil' me",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project2/600/400",
// // //     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
// // //     description: "An animated moving boy using pure CSS, HTML & JS",
// // //     links: {
// // //       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //       github: "https://github.com/NK2552003/lil-me-male-version-",
// // //       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "1",
// // //     title: "BlissCamp",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project1/600/400",
// // //     video: "https://youtu.be/l5ONgt-v9WI",
// // //     description: "A website for Tourists and Travellers",
// // //     links: {
// // //       live: "https://nk2552003.github.io/BlissCampIndia/",
// // //       github: "https://github.com/NK2552003/BlissCampIndia",
// // //       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "2",
// // //     title: "lil' me",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project2/600/400",
// // //     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
// // //     description: "An animated moving boy using pure CSS, HTML & JS",
// // //     links: {
// // //       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //       github: "https://github.com/NK2552003/lil-me-male-version-",
// // //       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "1",
// // //     title: "BlissCamp",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project1/600/400",
// // //     video: "https://youtu.be/l5ONgt-v9WI",
// // //     description: "A website for Tourists and Travellers",
// // //     links: {
// // //       live: "https://nk2552003.github.io/BlissCampIndia/",
// // //       github: "https://github.com/NK2552003/BlissCampIndia",
// // //       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "2",
// // //     title: "lil' me",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project2/600/400",
// // //     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
// // //     description: "An animated moving boy using pure CSS, HTML & JS",
// // //     links: {
// // //       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //       github: "https://github.com/NK2552003/lil-me-male-version-",
// // //       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "1",
// // //     title: "BlissCamp",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project1/600/400",
// // //     video: "https://youtu.be/l5ONgt-v9WI",
// // //     description: "A website for Tourists and Travellers",
// // //     links: {
// // //       live: "https://nk2552003.github.io/BlissCampIndia/",
// // //       github: "https://github.com/NK2552003/BlissCampIndia",
// // //       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "2",
// // //     title: "lil' me",
// // //     category: "Web Development",
// // //     image: "https://picsum.photos/seed/project2/600/400",
// // //     video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
// // //     description: "An animated moving boy using pure CSS, HTML & JS",
// // //     links: {
// // //       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //       github: "https://github.com/NK2552003/lil-me-male-version-",
// // //       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   // Add all other projects here
// // // ];

// // // const categories = ["All", "App Development", "Web Development"];

// // // const Projects = () => {
// // //   const [selectedCategory, setSelectedCategory] = useState("All");

// // //   // Function to filter projects by category
// // //   const filterProjects = () => {
// // //     return selectedCategory === "All"
// // //       ? projects
// // //       : projects.filter((project) => project.category === selectedCategory);
// // //   };

// // //   const playVideo = (video) => {
// // //     const playPromise = video.play();
// // //     if (playPromise !== undefined) {
// // //       playPromise.catch((error) => {
// // //         console.error("Error playing video:", error);
// // //       });
// // //     }
// // //   };

// // //   const pauseVideo = (video) => {
// // //     video.pause();
// // //     video.currentTime = 0; // Optionally reset to the beginning
// // //   };

// // //   return (
// // //     <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
// // //       {/* Filter Buttons */}
// // //       <div
// // //         id="portfolio-filter-buttons"
// // //         className="portfolio-mb-8 portfolio-flex portfolio-flex-wrap portfolio-gap-4"
// // //       >
// // //         {categories.map((category) => (
// // //           <button
// // //             key={category}
// // //             onClick={() => setSelectedCategory(category)}
// // //             className={
// // //               selectedCategory === category
// // //                 ? "portfolio-bg-white portfolio-text-black filterBtn"
// // //                 : "portfolio-text-white portfolio-text-white-80 filterBtn2"
// // //             }
// // //           >
// // //             {category}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Projects Grid */}
// // //       <div
// // //         id="portfolio-projects-grid"
// // //         className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
// // //       >
// // //         {filterProjects().map((project) => (
// // //           <div
// // //             key={project.id}
// // //             className="portfolio-group relative overflow-hidden"
// // //           >
// // //             <div className="portfolio-media-wrapper relative">
// // //               <img
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
// // //               />
// // //               <video
// // //                 id={`video-${project.id}`}
// // //                 src={project.video}
// // //                 autoPlay
// // //                 muted
// // //                 loop
// // //                 className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
// // //                 style={{ opacity: 0 }}
// // //               ></video>
// // //               <div className="portfolio-overlay-blur"></div>
// // //             </div>

// // //             <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
// // //             <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
// // //               <p className="portfolio-progress">{project.progress}</p>
// // //               <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">
// // //                 {project.title}
// // //               </h3>
// // //               <p className="portfolio-description">{project.description}</p>
// // //               <div className="portfolio-links mt-4">
// // //                 <a
// // //                   href={project.links.live}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">
// // //                     <svg
// // //                       width="24px"
// // //                       height="24px"
// // //                       viewBox="0 0 24.00 24.00"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       stroke="#000000"
// // //                       stroke-width="0.00024000000000000003"
// // //                     >
// // //                       <g id="SVGRepo_bgCarrier" stroke-width="0" />

// // //                       <g
// // //                         id="SVGRepo_tracerCarrier"
// // //                         stroke-linecap="round"
// // //                         stroke-linejoin="round"
// // //                       />

// // //                       <g id="SVGRepo_iconCarrier">
// // //                         {" "}
// // //                         <g opacity="0.5">
// // //                           {" "}
// // //                           <path
// // //                             fill-rule="evenodd"
// // //                             clip-rule="evenodd"
// // //                             d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z"
// // //                             fill="#fafafa"
// // //                           />{" "}
// // //                         </g>{" "}
// // //                         <path
// // //                           d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
// // //                           fill="#fafafa"
// // //                         />{" "}
// // //                       </g>
// // //                     </svg>
// // //                   </button>
// // //                 </a>
// // //                 <a
// // //                   href={project.links.github}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">
// // //                     <svg
// // //                       width="24"
// // //                       height="24"
// // //                       viewBox="0 0 24 24"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                     >
// // //                       <path
// // //                         d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
// // //                         fill="white"
// // //                       ></path>
// // //                     </svg>
// // //                   </button>
// // //                 </a>
// // //                 {/* <a
// // //                   href={project.links.codepen}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button"></button>
// // //                 </a> */}
// // //               </div>
// // //             </div>

// // //             {/* Touch or Mouse Events */}
// // //             <div
// // //               className="portfolio-media-wrapper relative"
// // //               onTouchStart={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onTouchEnd={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //               onMouseEnter={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onMouseLeave={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Projects;

// // // import React, { useState, useEffect } from "react";
// // // import "./Projects.css";

// // // // Sample projects data
// // // const projects = [
// // //   {
// // //     id: "1",
// // //     title: "Digital Marketing Agency Website",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// // //     // video: "https://youtu.be/l5ONgt-v9WI",
// // //     description:
// // //       "Created a user-friendly website for Vekstloop showcasing SEO, Google Ads, and social media services, with dynamic content, interactive tools, and customer testimonials. Implemented responsive design, SEO best practices, and custom plugins to enhance engagement and user experience.",
// // //     links: {
// // //       live: "https://nk2552003.github.io/BlissCampIndia/",
// // //       github: "https://github.com/NK2552003/BlissCampIndia",
// // //       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "2",
// // //     title: "Interactive Website for Studio",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/a7110546-6546-4543-abed-17f4d84fcfad",
// // //     // video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
// // //     description:
// // //       "Developed a custom WordPress site for Skylight Studios, featuring interactive animations, custom JavaScript, and sections highlighting venues, services, and brand collaborations. Integrated newsletter subscription, contact options, and social media to boost digital presence and brand appeal.",
// // //     links: {
// // //       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //       github: "https://github.com/NK2552003/lil-me-male-version-",
// // //       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "3",
// // //     title: "Medical SPA Website",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/11e05738-113c-477f-8abd-babb5390dc18",
// // //     // video: "https://youtu.be/l5ONgt-v9WI",
// // //     description:
// // //       "Developed a user-friendly website for Ola Aesthetics, showcasing skincare services, Ola Signature Services, and client care content with seamless booking options. Included a blog, consultation call-to-action, and focus on inclusivity to position Ola as a trusted clinic for personalized skincare treatments.",
// // //     links: {
// // //       live: "https://nk2552003.github.io/BlissCampIndia/",
// // //       github: "https://github.com/NK2552003/BlissCampIndia",
// // //       codepen: "https://codepen.io/NK2552003/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "4",
// // //     title: "Investment Company website",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/3ccd3bff-741f-4f7f-9db8-50f467772cba",
// // //     // video: "https://www.nitish.fun/Assets/Project_Assets/Videos/v_1.mp4",
// // //     description:
// // //       "Developed a sleek, user-friendly smart investment platform with seamless registration, demo account, trading tools, and educational resources. Integrated custom plugins, responsive design, and strong security measures for a reliable, user-centric investing experience.",
// // //     links: {
// // //       live: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //       github: "https://github.com/NK2552003/lil-me-male-version-",
// // //       codepen: "https://codepen.io/rlaqxvbr-the-bashful/pen/MYgpywe",
// // //     },
// // //     progress: "Completed",
// // //   },
// // // ];

// // // const categories = ["All", "App Development", "Web Development"];

// // // const Projects = () => {
// // //   const [selectedCategory, setSelectedCategory] = useState("All");
// // //   const [visibleProjects, setVisibleProjects] = useState(4);

// // //   // Function to filter projects by category
// // //   const filterProjects = () => {
// // //     const filtered =
// // //       selectedCategory === "All"
// // //         ? projects
// // //         : projects.filter((project) => project.category === selectedCategory);
// // //     return filtered.slice(0, visibleProjects);
// // //   };

// // //   const playVideo = (video) => {
// // //     const playPromise = video.play();
// // //     if (playPromise !== undefined) {
// // //       playPromise.catch((error) => {
// // //         console.error("Error playing video:", error);
// // //       });
// // //     }
// // //   };

// // //   const pauseVideo = (video) => {
// // //     video.pause();
// // //     video.currentTime = 0;
// // //   };

// // //   const filteredProjects = filterProjects();

// // //   return (
// // //     <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
// // //       {/* Filter Buttons */}
// // //       <div
// // //         id="portfolio-filter-buttons"
// // //         className="portfolio-mb-8 portfolio-flex portfolio-flex-wrap portfolio-gap-4"
// // //       >
// // //         {categories.map((category) => (
// // //           <button
// // //             key={category}
// // //             onClick={() => setSelectedCategory(category)}
// // //             className={
// // //               selectedCategory === category
// // //                 ? "portfolio-bg-white portfolio-text-black filterBtn"
// // //                 : "portfolio-text-white portfolio-text-white-80 filterBtn2"
// // //             }
// // //           >
// // //             {category}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Projects Grid */}
// // //       <div
// // //         id="portfolio-projects-grid"
// // //         className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
// // //       >
// // //         {filteredProjects.map((project) => (
// // //           <div
// // //             key={project.id}
// // //             className="portfolio-group relative overflow-hidden"
// // //           >
// // //             <div className="portfolio-media-wrapper relative">
// // //               <img
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
// // //               />
// // //               <img
// // //                 id={`video-${project.id}`}
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
// // //                 style={{ opacity: 100 }}
// // //               ></img>
// // //               <div className="portfolio-overlay-blur"></div>
// // //             </div>

// // //             <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
// // //             <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
// // //               <p className="portfolio-progress">{project.progress}</p>
// // //               <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">
// // //                 {project.title}
// // //               </h3>
// // //               <p className="portfolio-description">{project.description}</p>
// // //               <div className="portfolio-links mt-4">
// // //                 <a
// // //                   href={project.links.live}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">
// // //                     <svg
// // //                       width="24px"
// // //                       height="24px"
// // //                       viewBox="0 0 24.00 24.00"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       stroke="#000000"
// // //                       stroke-width="0.00024000000000000003"
// // //                     >
// // //                       <g id="SVGRepo_bgCarrier" stroke-width="0" />

// // //                       <g
// // //                         id="SVGRepo_tracerCarrier"
// // //                         stroke-linecap="round"
// // //                         stroke-linejoin="round"
// // //                       />

// // //                       <g id="SVGRepo_iconCarrier">
// // //                         {" "}
// // //                         <g opacity="0.5">
// // //                           {" "}
// // //                           <path
// // //                             fill-rule="evenodd"
// // //                             clip-rule="evenodd"
// // //                             d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z"
// // //                             fill="#fafafa"
// // //                           />{" "}
// // //                         </g>{" "}
// // //                         <path
// // //                           d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
// // //                           fill="#fafafa"
// // //                         />{" "}
// // //                       </g>
// // //                     </svg>
// // //                   </button>
// // //                 </a>
// // //                 <a
// // //                   href={project.links.github}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">
// // //                     <svg
// // //                       width="24"
// // //                       height="24"
// // //                       viewBox="0 0 24 24"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                     >
// // //                       <path
// // //                         d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
// // //                         fill="white"
// // //                       ></path>
// // //                     </svg>
// // //                   </button>
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             {/* Touch or Mouse Events */}
// // //             <div
// // //               className="portfolio-media-wrapper relative"
// // //               onTouchStart={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onTouchEnd={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //               onMouseEnter={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onMouseLeave={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Visit Portfolio Button */}
// // //       <div className="flex justify-center mt-8">
// // //         <button class=" relative inline-block text-lg group">
// // //           <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
// // //             <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
// // //             <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
// // //             <span class="relative">Visit Our Portfolio</span>
// // //           </span>
// // //           <span
// // //             class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
// // //             data-rounded="rounded-lg"
// // //           ></span>
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Projects;
// // // import React, { useState, useEffect, useRef } from "react";
// // // import "./Projects.css";
// // // import gsap from "gsap";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // import SplitType from "split-type";

// // // gsap.registerPlugin(ScrollTrigger);

// // // // Sample projects data
// // // const projects = [
// // //   {
// // //     id: "1",
// // //     title: "Digital Marketing Agency Website",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// // //     // video: "https://youtu.be/l5ONgt-v9WI",
// // //     description:
// // //       "Created a user-friendly website for Vekstloop showcasing SEO, Google Ads, and social media services, with dynamic content, interactive tools, and customer testimonials. Implemented responsive design, SEO best practices, and custom plugins to enhance engagement and user experience.",
// // //     links: {
// // //       live: "https://www.vekstloop.no/",
// // //       // github: "https://github.com/NK2552003/BlissCampIndia",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "2",
// // //     title: "Interactive Website for Studio",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/a7110546-6546-4543-abed-17f4d84fcfad",

// // //     description:
// // //       "Developed a custom WordPress site for Skylight Studios, featuring interactive animations, custom JavaScript, and sections highlighting venues, services, and brand collaborations. Integrated newsletter subscription, contact options, and social media to boost digital presence and brand appeal.",
// // //     links: {
// // //       live: "https://byskylight.com/",
// // //       // github: "https://github.com/NK2552003/lil-me-male-version-",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "3",
// // //     title: "Medical SPA Website",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/11e05738-113c-477f-8abd-babb5390dc18",

// // //     description:
// // //       "Developed a user-friendly website for Ola Aesthetics, showcasing skincare services, Ola Signature Services, and client care content with seamless booking options. Included a blog, consultation call-to-action, and focus on inclusivity to position Ola as a trusted clinic for personalized skincare treatments.",
// // //     links: {
// // //       live: "https://olaaestheticsla.com/",
// // //       // github: "https://github.com/NK2552003/BlissCampIndia",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "4",
// // //     title: "Investment Company website",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/3ccd3bff-741f-4f7f-9db8-50f467772cba",
// // //     description:
// // //       "Developed a sleek, user-friendly smart investment platform with seamless registration, demo account, trading tools, and educational resources. Integrated custom plugins, responsive design, and strong security measures for a reliable, user-centric investing experience.",
// // //     links: {
// // //       live: "https://binarium.com/",
// // //       // github: "https://github.com/NK2552003/lil-me-male-version-",
// // //     },
// // //     progress: "Completed",
// // //   },
// // // ];

// // // const Projects = () => {
// // //   const [visibleProjects, setVisibleProjects] = useState(4);
// // //   const headingRef = useRef(null);

// // //   useEffect(() => {
// // //     // Only run animations if screen width is above 768px (tablet/desktop)
// // //     const isMobile = window.innerWidth < 768;

// // //     if (!isMobile) {
// // //       const text = new SplitType(headingRef.current, { types: "chars" });
// // //       gsap.fromTo(
// // //         text.chars,
// // //         {
// // //           opacity: 0,
// // //           y: 100,
// // //         },
// // //         {
// // //           opacity: 1,
// // //           y: 0,
// // //           stagger: 0.05,
// // //           duration: 1,
// // //           ease: "power4.out",
// // //           fontFamily: "NeueMachina-Regular",
// // //           scrollTrigger: {
// // //             trigger: headingRef.current,
// // //             start: "top 80%",
// // //             end: "top 20%",
// // //             toggleActions: "play none none reverse",
// // //           },
// // //         }
// // //       );
// // //     }
// // //   }, []);

// // //   const playVideo = (video) => {
// // //     const playPromise = video.play();
// // //     if (playPromise !== undefined) {
// // //       playPromise.catch((error) => {
// // //         console.error("Error playing video:", error);
// // //       });
// // //     }
// // //   };

// // //   const pauseVideo = (video) => {
// // //     video.pause();
// // //     video.currentTime = 0;
// // //   };

// // //   return (
// // //     <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
// // //       {/* Heading */}
// // //       <h2
// // //         ref={headingRef}
// // //         className="text-4xl sm:text-5xl  md:text-6xl lg:text-5xl text-center text-white mb-8"
// // //       >
// // //         Our Projects
// // //       </h2>

// // //       {/* Projects Grid */}
// // //       <div
// // //         id="portfolio-projects-grid"
// // //         className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
// // //       >
// // //         {projects.map((project) => (
// // //           <div
// // //             key={project.id}
// // //             className="portfolio-group relative overflow-hidden"
// // //           >
// // //             <div className="portfolio-media-wrapper relative">
// // //               <img
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
// // //               />
// // //               <img
// // //                 id={`video-${project.id}`}
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
// // //                 style={{ opacity: 100 }}
// // //               ></img>
// // //               <div className="portfolio-overlay-blur"></div>
// // //             </div>

// // //             <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
// // //             <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
// // //               <p className="portfolio-progress">{project.progress}</p>
// // //               <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">
// // //                 {project.title}
// // //               </h3>
// // //               <p className="portfolio-description">{project.description}</p>
// // //               <div className="portfolio-links mt-4">
// // //                 <a
// // //                   href={project.links.live}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">
// // //                     <svg
// // //                       width="24px"
// // //                       height="24px"
// // //                       viewBox="0 0 24.00 24.00"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       stroke="#000000"
// // //                       stroke-width="0.00024000000000000003"
// // //                     >
// // //                       <g id="SVGRepo_bgCarrier" stroke-width="0" />
// // //                       <g
// // //                         id="SVGRepo_tracerCarrier"
// // //                         stroke-linecap="round"
// // //                         stroke-linejoin="round"
// // //                       />
// // //                       <g id="SVGRepo_iconCarrier">
// // //                         {" "}
// // //                         <g opacity="0.5">
// // //                           {" "}
// // //                           <path
// // //                             fill-rule="evenodd"
// // //                             clip-rule="evenodd"
// // //                             d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z"
// // //                             fill="#fafafa"
// // //                           />{" "}
// // //                         </g>{" "}
// // //                         <path
// // //                           d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
// // //                           fill="#fafafa"
// // //                         />{" "}
// // //                       </g>
// // //                     </svg>
// // //                   </button>
// // //                 </a>
// // //                 {/* <a
// // //                   href={project.links.github}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">
// // //                     <svg
// // //                       width="24"
// // //                       height="24"
// // //                       viewBox="0 0 24 24"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                     >
// // //                       <path
// // //                         d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
// // //                         fill="white"
// // //                       ></path>
// // //                     </svg>
// // //                   </button>
// // //                 </a> */}
// // //               </div>
// // //             </div>

// // //             {/* Touch or Mouse Events */}
// // //             <div
// // //               className="portfolio-media-wrapper relative"
// // //               onTouchStart={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onTouchEnd={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //               onMouseEnter={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onMouseLeave={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Visit Portfolio Button */}
// // //       <div className="flex justify-center mt-8">
// // //         <button class=" relative inline-block text-lg group">
// // //           <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
// // //             <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
// // //             <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
// // //             <span class="relative">Visit more Projects</span>
// // //           </span>
// // //           <span
// // //             class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
// // //             data-rounded="rounded-lg"
// // //           ></span>
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Projects;

// // // import React, { useState, useEffect, useRef } from "react";
// // // import "./Projects.css";
// // // import gsap from "gsap";
// // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // import SplitType from "split-type";

// // // gsap.registerPlugin(ScrollTrigger);

// // // // Sample projects data
// // // const projects = [
// // //   {
// // //     id: "1",
// // //     title: "Digital Marketing Agency Website",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
// // //     // video: "https://youtu.be/l5ONgt-v9WI",
// // //     description:
// // //       "Created a user-friendly website for Vekstloop showcasing SEO, Google Ads, and social media services, with dynamic content, interactive tools, and customer testimonials. Implemented responsive design, SEO best practices, and custom plugins to enhance engagement and user experience.",
// // //     links: {
// // //       live: "https://www.vekstloop.no/",
// // //       // github: "https://github.com/NK2552003/BlissCampIndia",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "2",
// // //     title: "Interactive Website for Studio",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/a7110546-6546-4543-abed-17f4d84fcfad",

// // //     description:
// // //       "Developed a custom WordPress site for Skylight Studios, featuring interactive animations, custom JavaScript, and sections highlighting venues, services, and brand collaborations. Integrated newsletter subscription, contact options, and social media to boost digital presence and brand appeal.",
// // //     links: {
// // //       live: "https://byskylight.com/",
// // //       // github: "https://github.com/NK2552003/lil-me-male-version-",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "3",
// // //     title: "Medical SPA Website",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/11e05738-113c-477f-8abd-babb5390dc18",

// // //     description:
// // //       "Developed a user-friendly website for Ola Aesthetics, showcasing skincare services, Ola Signature Services, and client care content with seamless booking options. Included a blog, consultation call-to-action, and focus on inclusivity to position Ola as a trusted clinic for personalized skincare treatments.",
// // //     links: {
// // //       live: "https://olaaestheticsla.com/",
// // //       // github: "https://github.com/NK2552003/BlissCampIndia",
// // //     },
// // //     progress: "Completed",
// // //   },
// // //   {
// // //     id: "4",
// // //     title: "Investment Company website",
// // //     category: "Web Development",
// // //     image:
// // //       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/3ccd3bff-741f-4f7f-9db8-50f467772cba",
// // //     description:
// // //       "Developed a sleek, user-friendly smart investment platform with seamless registration, demo account, trading tools, and educational resources. Integrated custom plugins, responsive design, and strong security measures for a reliable, user-centric investing experience.",
// // //     links: {
// // //       live: "https://binarium.com/",
// // //       // github: "https://github.com/NK2552003/lil-me-male-version-",
// // //     },
// // //     progress: "Completed",
// // //   },
// // // ];

// // // const Projects = () => {
// // //   const [visibleProjects, setVisibleProjects] = useState(4);
// // //   const headingRef = useRef(null);

// // //   useEffect(() => {
// // //     // Only run animations if screen width is above 768px (tablet/desktop)
// // //     const isMobile = window.innerWidth < 768;

// // //     if (!isMobile) {
// // //       const text = new SplitType(headingRef.current, { types: "chars" });
// // //       gsap.fromTo(
// // //         text.chars,
// // //         {
// // //           opacity: 0,
// // //           y: 100,
// // //         },
// // //         {
// // //           opacity: 1,
// // //           y: 0,
// // //           stagger: 0.05,
// // //           duration: 1,
// // //           ease: "power4.out",
// // //           fontFamily: "NeueMachina-Regular",
// // //           scrollTrigger: {
// // //             trigger: headingRef.current,
// // //             start: "top 80%",
// // //             end: "top 20%",
// // //             toggleActions: "play none none reverse",
// // //           },
// // //         }
// // //       );
// // //     }
// // //   }, []);

// // //   const playVideo = (video) => {
// // //     const playPromise = video.play();
// // //     if (playPromise !== undefined) {
// // //       playPromise.catch((error) => {
// // //         console.error("Error playing video:", error);
// // //       });
// // //     }
// // //   };

// // //   const pauseVideo = (video) => {
// // //     video.pause();
// // //     video.currentTime = 0;
// // //   };

// // //   return (
// // //     <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
// // //       {/* Heading */}
// // //       <h2
// // //         ref={headingRef}
// // //         className="text-4xl sm:text-5xl  md:text-6xl lg:text-5xl text-center text-white mb-8"
// // //       >
// // //         Our Projects
// // //       </h2>

// // //       {/* Projects Grid */}
// // //       <div
// // //         id="portfolio-projects-grid"
// // //         className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
// // //       >
// // //         {projects.map((project) => (
// // //           <div
// // //             key={project.id}
// // //             className="portfolio-group relative overflow-hidden"
// // //           >
// // //             <div className="portfolio-media-wrapper relative">
// // //               <img
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 className="portfolio-image portfolio-aspect-3-2 portfolio-object-cover"
// // //               />
// // //               <img
// // //                 id={`video-${project.id}`}
// // //                 src={project.image}
// // //                 alt={project.title}
// // //                 className="portfolio-video portfolio-aspect-3-2 portfolio-object-cover"
// // //                 style={{ opacity: 100 }}
// // //               ></img>
// // //               <div className="portfolio-overlay-blur"></div>
// // //             </div>

// // //             <div className="portfolio-overlay portfolio-absolute portfolio-inset-0 portfolio-bg-gradient-to-t"></div>
// // //             <div className="portfolio-absolute portfolio-bottom-0 portfolio-p-4">
// // //               <p className="portfolio-progress">{project.progress}</p>
// // //               <h3 className="portfolio-text-xl portfolio-font-semibold portfolio-text-white">
// // //                 {project.title}
// // //               </h3>
// // //               <p className="portfolio-description">{project.description}</p>
// // //               <div className="portfolio-links mt-4">
// // //                 <a
// // //                   href={project.links.live}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">
// // //                     <svg
// // //                       width="24px"
// // //                       height="24px"
// // //                       viewBox="0 0 24.00 24.00"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       stroke="#000000"
// // //                       stroke-width="0.00024000000000000003"
// // //                     >
// // //                       <g id="SVGRepo_bgCarrier" stroke-width="0" />
// // //                       <g
// // //                         id="SVGRepo_tracerCarrier"
// // //                         stroke-linecap="round"
// // //                         stroke-linejoin="round"
// // //                       />
// // //                       <g id="SVGRepo_iconCarrier">
// // //                         {" "}
// // //                         <g opacity="0.5">
// // //                           {" "}
// // //                           <path
// // //                             fill-rule="evenodd"
// // //                             clip-rule="evenodd"
// // //                             d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z"
// // //                             fill="#fafafa"
// // //                           />{" "}
// // //                         </g>{" "}
// // //                         <path
// // //                           d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
// // //                           fill="#fafafa"
// // //                         />{" "}
// // //                       </g>
// // //                     </svg>
// // //                   </button>
// // //                 </a>
// // //                 {/* <a
// // //                   href={project.links.github}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="portfolio-btn"
// // //                 >
// // //                   <button className="button">
// // //                     <svg
// // //                       width="24"
// // //                       height="24"
// // //                       viewBox="0 0 24 24"
// // //                       fill="none"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                     >
// // //                       <path
// // //                         d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
// // //                         fill="white"
// // //                       ></path>
// // //                     </svg>
// // //                   </button>
// // //                 </a> */}
// // //               </div>
// // //             </div>

// // //             {/* Touch or Mouse Events */}
// // //             <div
// // //               className="portfolio-media-wrapper relative"
// // //               onTouchStart={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onTouchEnd={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //               onMouseEnter={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 1;
// // //                   playVideo(video);
// // //                 }
// // //               }}
// // //               onMouseLeave={() => {
// // //                 const video = document.querySelector(`#video-${project.id}`);
// // //                 if (video) {
// // //                   video.style.opacity = 0;
// // //                   pauseVideo(video);
// // //                 }
// // //               }}
// // //             />
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Visit Portfolio Button */}
// // //       <div className="flex justify-center mt-8">
// // //         <button class=" relative inline-block text-lg group">
// // //           <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
// // //             <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
// // //             <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
// // //             <span class="relative">Visit more Projects</span>
// // //           </span>
// // //           <span
// // //             class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
// // //             data-rounded="rounded-lg"
// // //           ></span>
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Projects;
// import React, { useState, useEffect, useRef } from "react";
// import "./Projects.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SplitType from "split-type";

// gsap.registerPlugin(ScrollTrigger);

// // Sample projects data
// const projects = [
//   {
//     id: "1", 
//     title: "Digital Marketing Agency Website",
//     category: "Web Development",
//     image: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
//     description: "Created a user-friendly website for Vekstloop showcasing SEO, Google Ads, and social media services, with dynamic content, interactive tools, and customer testimonials. Implemented responsive design, SEO best practices, and custom plugins to enhance engagement and user experience.",
//     links: {
//       live: "https://www.vekstloop.no/",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "2",
//     title: "Interactive Website for Studio",
//     category: "Web Development", 
//     image: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/a7110546-6546-4543-abed-17f4d84fcfad",
//     description: "Developed a custom WordPress site for Skylight Studios, featuring interactive animations, custom JavaScript, and sections highlighting venues, services, and brand collaborations. Integrated newsletter subscription, contact options, and social media to boost digital presence and brand appeal.",
//     links: {
//       live: "https://byskylight.com/",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "3",
//     title: "Medical SPA Website",
//     category: "Web Development",
//     image: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/11e05738-113c-477f-8abd-babb5390dc18",
//     description: "Developed a user-friendly website for Ola Aesthetics, showcasing skincare services, Ola Signature Services, and client care content with seamless booking options. Included a blog, consultation call-to-action, and focus on inclusivity to position Ola as a trusted clinic for personalized skincare treatments.",
//     links: {
//       live: "https://olaaestheticsla.com/",
//     },
//     progress: "Completed",
//   },
//   {
//     id: "4",
//     title: "Investment Company website",
//     category: "Web Development",
//     image: "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/3ccd3bff-741f-4f7f-9db8-50f467772cba",
//     description: "Developed a sleek, user-friendly smart investment platform with seamless registration, demo account, trading tools, and educational resources. Integrated custom plugins, responsive design, and strong security measures for a reliable, user-centric investing experience.",
//     links: {
//       live: "https://binarium.com/",
//     },
//     progress: "Completed",
//   },
// ];

// const Projects = () => {
//   const [visibleProjects, setVisibleProjects] = useState(4);
//   const headingRef = useRef(null);

//   useEffect(() => {
//     const isMobile = window.innerWidth < 768;

//     if (!isMobile) {
//       const text = new SplitType(headingRef.current, { types: "chars" });
//       gsap.fromTo(
//         text.chars,
//         {
//           opacity: 0,
//           y: 100,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.05,
//           duration: 1,
//           ease: "power4.out",
//           fontFamily: "NeueMachina-Regular",
//           scrollTrigger: {
//             trigger: headingRef.current,
//             start: "top 80%",
//             end: "top 20%",
//             toggleActions: "play none none reverse",
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <div className="portfolio-min-h-screen portfolio-bg-black portfolio-p-8">
//       <h2
//         ref={headingRef}
//         className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl text-center text-white mb-8"
//       >
//         Our Projects
//       </h2>

//       <div
//         id="portfolio-projects-grid"
//         className="portfolio-grid portfolio-gap-6 portfolio-sm-grid-cols-2 portfolio-lg-grid-cols-3"
//       >
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="portfolio-group relative overflow-hidden cursor-pointer"
//           >
//             {/* Image Container */}
//             <div className="portfolio-media-wrapper relative">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-300"
//               />
//             </div>

//             {/* Content Overlay - Initially Hidden */}
//             <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-end p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
//               <p className="text-sm text-gray-300">{project.progress}</p>
//               <h3 className="text-xl font-semibold text-white mt-2">{project.title}</h3>
//               <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              
//               <div className="mt-4">
//                 <a
//                   href={project.links.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block"
//                 >
//                   <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors">
//                     Visit Site
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <button className="relative inline-block text-lg group">
//           <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//             <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//             <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//             <span className="relative">Visit more Projects</span>
//           </span>
//           <span
//             className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//             data-rounded="rounded-lg"
//           ></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Projects;







// import React from "react";
// import Spline from "@splinetool/react-spline";


// const Projects = () => {
//   return (
//     <div
//       className="w-full min-h-[350px] md:min-h-[400px] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-b from-[#3a2172] to-black relative overflow-hidden"
//       style={{
//         background: "linear-gradient(180deg, #3a2172 0%, #000 100%)",
//       }}
//     >
//       {/* Left: Text Content */}
//       <div className="flex-1 z-10">
//         <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
//           Building Fast<br />Reliable Results
//         </h1>
//         <p className="text-sm md:text-base text-gray-200 max-w-md">
//           I deliver robust, production-ready websites and web apps with speed and precision. Every project is backed by clean code, clear communication, and a commitment to getting it done, on time, every time.
//         </p>
//       </div>

//       {/* Right: 3D/Abstract Sphere */}
//       <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 z-10 relative">
        
//           <Spline scene="https://prod.spline.design/vzPPo-IVeY5GIKxl/scene.splinecode" />
       
//       </div>
//     </div>
//   );
// };

// export default Projects;






// import React from "react";
// import Spline from "@splinetool/react-spline";

// const Projects = () => {
//   return (
//     <div
//       className="w-full min-h-screen flex items-center justify-center px-6 md:px-16 py-12 bg-gradient-to-b from-[#3a2172] to-black relative overflow-hidden"
//       style={{
//         background: "radial-gradient(ellipse at top , #3a2172 0%, #000 80%)",
//       }}
//     >
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
//         {/* Left: Text Content */}
//         <div className="flex-1 z-10 max-w-2xl text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             Building Fast<br />Reliable Results
//           </h1>
//           <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0">
//             I deliver robust, production-ready websites and web apps with speed and precision. Every project is backed by clean code, clear communication, and a commitment to getting it done, on time, every time.
//           </p>
//         </div>

//         {/* Right: 3D/Abstract Sphere */}
//         <div className="flex-1 flex items-center justify-center z-10 relative h-[500px]">
//           <Spline scene="https://prod.spline.design/vzPPo-IVeY5GIKxl/scene.splinecode" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
// import { FaEye } from "react-icons/fa";

// const Projects = () => {
//   const sliderRef = useRef(null);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const scrollSlider = (direction) => {
//     if (sliderRef.current) {
//       const scrollAmount = window.innerWidth < 768 ? 250 + 16 : 300 + 24; // Responsive card width + gap
//       sliderRef.current.scrollBy({
//         left: direction * scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const projects = [
//     {
//       id: 1,
//       title: "Snow Mountain",
//       description: "Capturing the serenity of snow-capped mountains.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/9f7a0336-db3d-4b29-94be-43ac2a56fb00",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/snow-mountain",
//     },
//     {
//       id: 2,
//       title: "Ocean Abstract",
//       description: "Exploring the abstract beauty of ocean waves.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/2035a958-a303-46fb-84fc-9b13ec422eb0",
//       tags: ["Photography", "Abstract"],
//       liveUrl: "https://example.com/ocean-abstract",
//     },
//     {
//       id: 3,
//       title: "Dancing Dunes",
//       description:
//         "Capturing the beauty of sand dunes through artistic lensmanship.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
//       tags: ["Photography", "Art Direction"],
//       liveUrl: "https://example.com/dancing-dunes",
//     },
//     {
//       id: 4,
//       title: "Coast",
//       description: "Embracing the rugged beauty of coastal landscapes.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/cd7e0882-c7c8-4e2e-8b0c-cd5ccfb72a12",
//       tags: ["Photography", "Coastal"],
//       liveUrl: "https://example.com/coast",
//     },
//     {
//       id: 5,
//       title: "Forest",
//       description: "Discovering the tranquility of forest paths.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/forest",
//     },
//   ];

//   return (
//     <div className="bg-[#f2f2f2] min-h-screen pt-12 sm:pt-16 md:pt-20">
//       <section className="text-center px-4 sm:px-6 md:px-8 mb-8 sm:mb-12">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2 font-bold">My Works</h1>
//         <p className="max-w-[600px] mx-auto text-sm sm:text-base text-[#666] px-4">
//           Witness the beauty of nature through our lens, as we showcase stunning
//           landscapes that evoke wonder and appreciation for the environment.
//         </p>
//       </section>

//       <section className="relative px-4 sm:px-6 md:px-8">
//         <button
//           className="absolute left-2 sm:left-4 md:left-[100px] top-[-80px] sm:top-[-90px] md:top-[-100px] bg-white border-none shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center cursor-pointer hover:bg-[#eee] transition-colors z-10"
//           onClick={() => scrollSlider(-1)}
//         >
//           <HiArrowLongLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//         </button>
//         <button
//           className="absolute right-2 sm:right-4 md:right-[100px] top-[-80px] sm:top-[-90px] md:top-[-100px] bg-white border-none shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center cursor-pointer hover:bg-[#eee] transition-colors z-10"
//           onClick={() => scrollSlider(1)}
//         >
//           <HiArrowLongRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </button>

//         <div
//           ref={sliderRef}
//           className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               className="flex-none w-[250px] sm:w-[280px] md:w-[300px] h-[350px] sm:h-[380px] md:h-[420px] rounded-[20px] overflow-hidden relative snap-start transition-all duration-300 hover:-translate-y-1.5 shadow-lg"
//               whileHover={{ scale: 1.02 }}
//               onMouseEnter={() => setHoveredCard(project.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-300"
//               />

//               {/* Content overlay */}
//               <div
//                 className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 ${
//                   hoveredCard === project.id ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-white"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Live preview button */}
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-300"
//                 >
//                   <FaEye className="text-base sm:text-lg" />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;




// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
// import { GoArrowDownRight } from "react-icons/go";
// import SplitType from "split-type";
// import { gsap } from "gsap";

// const Projects = () => {
//   const sliderRef = useRef(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
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
//         fontFamily: "NeueMachina-Regular",
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   const scrollSlider = (direction) => {
//     if (sliderRef.current) {
//       const scrollAmount = window.innerWidth < 768 ? 250 + 16 : 300 + 24;
//       sliderRef.current.scrollBy({
//         left: direction * scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const projects = [
//     {
//       id: 1,
//       title: "Snow Mountain",
//       description: "Capturing the serenity of snow-capped mountains.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/9f7a0336-db3d-4b29-94be-43ac2a56fb00",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/snow-mountain",
//     },
//     {
//       id: 2,
//       title: "Ocean Abstract",
//       description: "Exploring the abstract beauty of ocean waves.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/2035a958-a303-46fb-84fc-9b13ec422eb0",
//       tags: ["Photography", "Abstract"],
//       liveUrl: "https://example.com/ocean-abstract",
//     },
//     {
//       id: 3,
//       title: "Dancing Dunes",
//       description:
//         "Capturing the beauty of sand dunes through artistic lensmanship.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
//       tags: ["Photography", "Art Direction"],
//       liveUrl: "https://example.com/dancing-dunes",
//     },
//     {
//       id: 4,
//       title: "Coast",
//       description: "Embracing the rugged beauty of coastal landscapes.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/cd7e0882-c7c8-4e2e-8b0c-cd5ccfb72a12",
//       tags: ["Photography", "Coastal"],
//       liveUrl: "https://example.com/coast",
//     },
//     {
//       id: 5,
//       title: "Forest",
//       description: "Discovering the tranquility of forest paths.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/forest",
//     },
//     {
//       id: 6,
//       title: "Forest",
//       description: "Discovering the tranquility of forest paths.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/forest",
//     },
//     {
//       id: 7,
//       title: "Forest",
//       description: "Discovering the tranquility of forest paths.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/forest",
//     },
//   ];

//   return (
//     <div className="bg-[#f2f2f2] min-h-screen pt-12 sm:pt-16 md:pt-20">
//       <section className="text-center px-4 sm:px-6 md:px-8 mb-8 sm:mb-12">
//         <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl mb-2 font-bold">
//           My Works
//         </h1>
//         <p className="max-w-[600px] mx-auto text-sm sm:text-base text-[#666] px-4">
//           Witness the beauty of nature through our lens, as we showcase stunning
//           landscapes that evoke wonder and appreciation for the environment.
//         </p>
//       </section>

//       <section className="relative px-4 sm:px-6 md:px-8">
//         <button
//           className="absolute left-2 sm:left-4 md:left-[100px] top-[-80px] sm:top-[-90px] md:top-[-100px] bg-white border-none shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center cursor-pointer hover:bg-[#eee] transition-colors z-10"
//           onClick={() => scrollSlider(-1)}
//         >
//           <HiArrowLongLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//         </button>
//         <button
//           className="absolute right-2 sm:right-4 md:right-[100px] top-[-80px] sm:top-[-90px] md:top-[-100px] bg-white border-none shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center cursor-pointer hover:bg-[#eee] transition-colors z-10"
//           onClick={() => scrollSlider(1)}
//         >
//           <HiArrowLongRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </button>

//         <div
//           ref={sliderRef}
//           className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               className="flex-none w-[250px] sm:w-[280px] md:w-[300px] h-[350px] sm:h-[380px] md:h-[420px] rounded-[20px] overflow-hidden relative snap-start transition-all duration-300 hover:-translate-y-1.5 shadow-lg"
//               whileHover={{ scale: 1.02 }}
//               onMouseEnter={() => setHoveredCard(project.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-300"
//               />

//               {/* Content overlay */}
//               <div
//                 className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 ${
//                   hoveredCard === project.id ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-white"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Live preview button */}
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-300"
//                 >
//                   <GoArrowDownRight className="text-base sm:text-lg"/>
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;



// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
// import { GoArrowDownRight } from "react-icons/go";
// import SplitType from "split-type";
// import { gsap } from "gsap";

// const Projects = () => {
//   const sliderRef = useRef(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
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
//         fontFamily: "NeueMachina-Regular",
//         scrollTrigger: {
//           trigger: headingRef.current,
//           start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   const scrollSlider = (direction) => {
//     if (sliderRef.current) {
//       const scrollAmount = window.innerWidth < 768 ? 250 + 16 : 300 + 24;
//       sliderRef.current.scrollBy({
//         left: direction * scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const projects = [
//     {
//       id: 1,
//       title: "Snow Mountain",
//       description: "Capturing the serenity of snow-capped mountains.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/9f7a0336-db3d-4b29-94be-43ac2a56fb00",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/snow-mountain",
//     },
//     {
//       id: 2,
//       title: "Ocean Abstract",
//       description: "Exploring the abstract beauty of ocean waves.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/2035a958-a303-46fb-84fc-9b13ec422eb0",
//       tags: ["Photography", "Abstract"],
//       liveUrl: "https://example.com/ocean-abstract",
//     },
//     {
//       id: 3,
//       title: "Dancing Dunes",
//       description:
//         "Capturing the beauty of sand dunes through artistic lensmanship.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
//       tags: ["Photography", "Art Direction"],
//       liveUrl: "https://example.com/dancing-dunes",
//     },
//     {
//       id: 4,
//       title: "Coast",
//       description: "Embracing the rugged beauty of coastal landscapes.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/cd7e0882-c7c8-4e2e-8b0c-cd5ccfb72a12",
//       tags: ["Photography", "Coastal"],
//       liveUrl: "https://example.com/coast",
//     },
//     {
//       id: 5,
//       title: "Forest",
//       description: "Discovering the tranquility of forest paths.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/forest",
//     },
//     {
//       id: 6,
//       title: "Forest",
//       description: "Discovering the tranquility of forest paths.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/forest",
//     },
//     {
//       id: 7,
//       title: "Forest",
//       description: "Discovering the tranquility of forest paths.",
//       image:
//         "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//       tags: ["Photography", "Nature"],
//       liveUrl: "https://example.com/forest",
//     },
//   ];

//   return (
//     <div className="bg-[#f2f2f2] min-h-screen pt-12 sm:pt-16 md:pt-20">
//       <section className="text-center px-4 sm:px-6 md:px-8 mb-8 sm:mb-12">
//         <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl mb-2 font-bold">
//           My Works
//         </h1>
//         <p className="max-w-[600px] mx-auto text-sm sm:text-base text-[#666] px-4">
//           Witness the beauty of nature through our lens, as we showcase stunning
//           landscapes that evoke wonder and appreciation for the environment.
//         </p>
//       </section>

//       <section className="relative px-4 sm:px-6 md:px-8">
//         <button
//           className="absolute left-2 sm:left-4 md:left-[100px] top-[-80px] sm:top-[-90px] md:top-[-100px] bg-white border-none shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center cursor-pointer hover:bg-[#eee] transition-colors z-10"
//           onClick={() => scrollSlider(-1)}
//         >
//           <HiArrowLongLeft className="w-4 h-4 sm:w-5 sm:h-5" />
//         </button>
//         <button
//           className="absolute right-2 sm:right-4 md:right-[100px] top-[-80px] sm:top-[-90px] md:top-[-100px] bg-white border-none shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center cursor-pointer hover:bg-[#eee] transition-colors z-10"
//           onClick={() => scrollSlider(1)}
//         >
//           <HiArrowLongRight className="w-4 h-4 sm:w-5 sm:h-5" />
//         </button>

//         <div
//           ref={sliderRef}
//           className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               className="flex-none w-[250px] sm:w-[280px] md:w-[300px] h-[350px] sm:h-[380px] md:h-[420px] rounded-[20px] overflow-hidden relative snap-start transition-all duration-300 hover:-translate-y-1.5 shadow-lg"
//               whileHover={{ scale: 1.02 }}
//               onMouseEnter={() => setHoveredCard(project.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-300"
//               />

//               {/* Content overlay */}
//               <div
//                 className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 ${
//                   hoveredCard === project.id ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
//                   {project.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-white"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Live preview button */}
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-300"
//                 >
//                   <GoArrowDownRight className="text-base sm:text-lg"/>
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;

import React, { useRef, useEffect, useState } from "react";
import { GoArrowDownRight, GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SplitType from "split-type";
import { gsap } from "gsap";

const projects = [
  {
    id: 1,
    title: "Multiple - Portfolio Website",
    description: "A modern portfolio website for showcasing multiple projects, featuring interactive galleries, smooth animations, and responsive design. Built for creative professionals to highlight their work and attract new clients.",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/9f7a0336-db3d-4b29-94be-43ac2a56fb00",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    liveUrl: "https://multiple-portfolio.com",
  },
  {
    id: 2,
    title: "Ecommerce Store - ShopEase",
    description: "A full-featured ecommerce website with product listings, shopping cart, secure checkout, and admin dashboard. Designed for seamless user experience and easy product management.",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/2035a958-a303-46fb-84fc-9b13ec422eb0",
    tags: ["Next.js", "Redux", "Stripe API", "Tailwind CSS", "Node.js"],
    liveUrl: "https://shopease.com",
  },
  {
    id: 3,
    title: "Blog Platform - WriteHub",
    description:
      "A scalable blogging platform allowing users to create, edit, and share articles. Features include markdown support, comments, and user authentication.",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
    tags: ["React.js", "Express.js", "MongoDB", "JWT Auth", "Styled Components"],
    liveUrl: "https://writehub.com",
  },
  {
    id: 4,
    title: "Landing Page - SaaSify",
    description: "A high-converting landing page for a SaaS product, optimized for lead generation with custom forms, testimonials, and analytics integration.",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/cd7e0882-c7c8-4e2e-8b0c-cd5ccfb72a12",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "Netlify Forms"],
    liveUrl: "https://saasify.com",
  },
  {
    id: 5,
    title: "Restaurant Website - Foodies",
    description: "A visually appealing website for a restaurant, including menu display, online reservation, and Google Maps integration for location.",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
    tags: ["Vue.js", "Vuetify", "Firebase", "Google Maps API"],
    liveUrl: "https://foodies-restaurant.com",
  },
  {
    id: 6,
    title: "Educational Platform - Learnify",
    description: "An online learning platform with video courses, quizzes, and progress tracking. Built for scalability and ease of use for both students and instructors.",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
    tags: ["React.js", "Firebase", "Material UI", "Chart.js"],
    liveUrl: "https://learnify.com",
  },
  {
    id: 7,
    title: "Travel Agency Website - Wanderlust",
    description: "A travel agency website with destination galleries, booking forms, and customer reviews. Designed for easy navigation and beautiful presentation.",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
    tags: ["Next.js", "Tailwind CSS", "Swiper.js", "EmailJS"],
    liveUrl: "https://wanderlust-travel.com",
  },
];

const Projects = () => {
  const headingRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
  }, []);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Swiper's onSlideChange event handler
  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const realIndex = swiperRef.current.swiper.realIndex;
      setActiveIndex(realIndex);
    }
  };

  return (
    <div className="bg-[#f2f2f2] min-h-screen pt-12 sm:pt-16 md:pt-20">
      <section className="text-center px-4 sm:px-6 md:px-8 mb-8 sm:mb-12">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl mb-2 font-bold"
        >
          Our Portfolio
        </h1>
        <p className="max-w-[600px] mx-auto text-sm sm:text-base text-[#666] px-4">
          As a trusted leader in WordPress development, our success is defined by client satisfaction, technical excellence, and a commitment to continuous growth.
        </p>
      </section>

      <section className="relative px-2 sm:px-6 md:px-8">
        <div className="relative max-w-5xl mx-auto">
          <button
            onClick={handlePrev}
            className="custom-swiper-button-prev bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition
              absolute left-[-4.5rem] top-1/2 -translate-y-1/2 z-30 border border-gray-200"
            style={{
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            tabIndex={0}
            aria-label="Previous"
          >
            <GoArrowLeft className="text-2xl text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="custom-swiper-button-next bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition
              absolute right-[-4.5rem] top-1/2 -translate-y-1/2 z-30 border border-gray-200"
            style={{
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            tabIndex={0}
            aria-label="Next"
          >
            <GoArrowRight className="text-2xl text-gray-700" />
          </button>
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="tranding-slider"
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => {
              // Set initial active index on mount
              setActiveIndex(swiper.realIndex);
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide
                key={project.id}
                className="tranding-slide !w-[250px] sm:!w-[280px] md:!w-[300px] !h-[350px] sm:!h-[380px] md:!h-[420px] rounded-[20px] overflow-hidden relative shadow-lg group"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="tranding-slide-img relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 ${
                    activeIndex === idx || hoveredIndex === idx
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                  style={{ borderRadius: "20px" }}
                >
                  {/* Project heading and paragraph at the top */}
                  <div className="mb-auto">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3">
                      {project.description}
                    </p>
                  </div>
                  {/* Language name instead of tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-300"
                  >
                    <GoArrowDownRight className="text-base sm:text-lg" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Projects;



// import React, { useRef, useEffect, useState } from "react";
// import { GoArrowDownRight, GoArrowLeft, GoArrowRight } from "react-icons/go";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import SplitType from "split-type";
// import { gsap } from "gsap";

// const projects = [
//   {
//     id: 1,
//     title: "Snow Mountain",
//     description: "Capturing the serenity of snow-capped mountains.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/9f7a0336-db3d-4b29-94be-43ac2a56fb00",
//     tags: ["Photography", "Nature"],
//     liveUrl: "https://example.com/snow-mountain",
//     
//   },
//   {
//     id: 2,
//     title: "Ocean Abstract",
//     description: "Exploring the abstract beauty of ocean waves.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/2035a958-a303-46fb-84fc-9b13ec422eb0",
//     tags: ["Photography", "Abstract"],
//     liveUrl: "https://example.com/ocean-abstract",
//     
//   },
//   {
//     id: 3,
//     title: "Dancing Dunes",
//     description:
//       "Capturing the beauty of sand dunes through artistic lensmanship.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
//     tags: ["Photography", "Art Direction"],
//     liveUrl: "https://example.com/dancing-dunes",
//     
//   },
//   {
//     id: 4,
//     title: "Coast",
//     description: "Embracing the rugged beauty of coastal landscapes.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/cd7e0882-c7c8-4e2e-8b0c-cd5ccfb72a12",
//     tags: ["Photography", "Coastal"],
//     liveUrl: "https://example.com/coast",
//     
//   },
//   {
//     id: 5,
//     title: "Forest",
//     description: "Discovering the tranquility of forest paths.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//     tags: ["Photography", "Nature"],
//     liveUrl: "https://example.com/forest",
//     
//   },
//   {
//     id: 6,
//     title: "Forest",
//     description: "Discovering the tranquility of forest paths.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//     tags: ["Photography", "Nature"],
//     liveUrl: "https://example.com/forest",
//     
//   },
//   {
//     id: 7,
//     title: "Forest",
//     description: "Discovering the tranquility of forest paths.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//     tags: ["Photography", "Nature"],
//     liveUrl: "https://example.com/forest",
//     
//   },
// ];
// const Projects = () => {
//   const headingRef = useRef(null);
//   const [hovered, setHovered] = useState(null);
//   const swiperRef = useRef(null);

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
//   }, []);

//   const handlePrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   const handleNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//     }
//   };

//   return (
//     <div className="bg-[#f2f2f2] min-h-screen pt-12 sm:pt-16 md:pt-20">
//       <section className="text-center px-4 sm:px-6 md:px-8 mb-8 sm:mb-12">
//         <h1
//           ref={headingRef}
//           className="text-3xl sm:text-4xl md:text-5xl mb-2 font-bold"
//         >
//           My Works
//         </h1>
//         <p className="max-w-[600px] mx-auto text-sm sm:text-base text-[#666] px-4">
//           Witness the beauty of nature through our lens, as we showcase stunning
//           landscapes that evoke wonder and appreciation for the environment.
//         </p>
//       </section>

//       <section className="relative px-4 sm:px-6 md:px-8">
//         <div className="relative max-w-5xl mx-auto">
//           <button
//             onClick={handlePrev}
//             className="custom-swiper-button-prev bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition
//               absolute left-[-4.5rem] top-1/2 -translate-y-1/2 z-30 border border-gray-200"
//             style={{
//               boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             tabIndex={0}
//             aria-label="Previous"
//           >
//           <GoArrowLeft className=" text-2xl text-gray-700" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="custom-swiper-button-next bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition
//               absolute right-[-4.5rem] top-1/2 -translate-y-1/2 z-30 border border-gray-200"
//             style={{
//               boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             tabIndex={0}
//             aria-label="Next"
//           >
            
//             <GoArrowRight className=" text-2xl text-gray-700" />
//           </button>
//           <Swiper
//             ref={swiperRef}
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView={"auto"}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 2.5,
//               slideShadows: false,
//             }}
//             modules={[EffectCoverflow]}
//             className="tranding-slider"
//           >
//             {projects.map((project) => (
//               <SwiperSlide
//                 key={project.id}
//                 className="tranding-slide !w-[250px] sm:!w-[280px] md:!w-[300px] !h-[350px] sm:!h-[380px] md:!h-[420px] rounded-[20px] overflow-hidden relative shadow-lg group"
//                 onMouseEnter={() => setHovered(project.id)}
//                 onMouseLeave={() => setHovered(null)}
//                 style={{
//                   background: "#fff",
//                   borderRadius: "20px",
//                   overflow: "hidden",
//                   position: "relative",
//                 }}
//               >
//                 <div className="tranding-slide-img relative w-full h-full">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                     style={{ borderRadius: "20px" }}
//                   />
//                 </div>
//                 <div
//                   className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 ${
//                     hovered === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
//                   }`}
//                   style={{ borderRadius: "20px" }}
//                 >
//                   <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
//                     {project.title}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-white"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-1 mb-2">
//                     <span className="text-white text-sm font-semibold">{project.rating}</span>
//                     <div className="flex text-yellow-400 text-xs">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill={i < Math.round(project.rating) ? "currentColor" : "none"}
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           className="w-4 h-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={1}
//                             d="M12 17.25l-6.172 3.245 1.179-6.873L2 9.755l6.914-1.004L12 2.25l3.086 6.501L22 9.755l-5.007 4.867 1.179 6.873z"
//                           />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-300"
//                   >
//                     <GoArrowDownRight className="text-base sm:text-lg" />
//                   </a>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;


//final 

// import React, { useRef, useEffect, useState } from "react";
// import { GoArrowDownRight, GoArrowLeft, GoArrowRight } from "react-icons/go";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import SplitType from "split-type";
// import { gsap } from "gsap";

// // Add sound effect for slider
// const slideSound = new Audio('/sounds/slide.mp3'); // Add your sound file in public/sounds folder

// const projects = [
//   {
//     id: 1,
//     title: "Snow Mountain",
//     description: "Capturing the serenity of snow-capped mountains.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/9f7a0336-db3d-4b29-94be-43ac2a56fb00",
//     tags: ["Photography", "Nature"],
//     liveUrl: "https://example.com/snow-mountain",
//     
//   },
//   {
//     id: 2,
//     title: "Ocean Abstract",
//     description: "Exploring the abstract beauty of ocean waves.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/2035a958-a303-46fb-84fc-9b13ec422eb0",
//     tags: ["Photography", "Abstract"],
//     liveUrl: "https://example.com/ocean-abstract",
//     
//   },
//   {
//     id: 3,
//     title: "Dancing Dunes",
//     description:
//       "Capturing the beauty of sand dunes through artistic lensmanship.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/0782cea7-2bab-4d7b-afd5-37888503ff47",
//     tags: ["Photography", "Art Direction"],
//     liveUrl: "https://example.com/dancing-dunes",
//     
//   },
//   {
//     id: 4,
//     title: "Coast",
//     description: "Embracing the rugged beauty of coastal landscapes.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/cd7e0882-c7c8-4e2e-8b0c-cd5ccfb72a12",
//     tags: ["Photography", "Coastal"],
//     liveUrl: "https://example.com/coast",
//     
//   },
//   {
//     id: 5,
//     title: "Forest",
//     description: "Discovering the tranquility of forest paths.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//     tags: ["Photography", "Nature"],
//     liveUrl: "https://example.com/forest",
//     
//   },
//   {
//     id: 6,
//     title: "Forest",
//     description: "Discovering the tranquility of forest paths.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//     tags: ["Photography", "Nature"],
//     liveUrl: "https://example.com/forest",
//     
//   },
//   {
//     id: 7,
//     title: "Forest",
//     description: "Discovering the tranquility of forest paths.",
//     image:
//       "https://www.upwork.com/att/download/portfolio/persons/uid/946092877566349312/profile/projects/files/e17f8230-e218-445c-9eeb-3688c6d8cb44",
//     tags: ["Photography", "Nature"],
//     liveUrl: "https://example.com/forest",
//     
//   },
// ];

// const Projects = () => {
//   const headingRef = useRef(null);
//   const [hovered, setHovered] = useState(null);
//   const swiperRef = useRef(null);

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
//   }, []);

//   const playSlideSound = () => {
//     slideSound.currentTime = 0;
//     slideSound.play().catch(err => console.log('Audio play failed:', err));
//   };

//   const handlePrev = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slidePrev();
//       playSlideSound();
//     }
//   };

//   const handleNext = () => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideNext();
//       playSlideSound();
//     }
//   };

//   return (
//     <div className="bg-[#f2f2f2] min-h-screen pt-12 sm:pt-16 md:pt-20">
//       <section className="text-center px-4 sm:px-6 md:px-8 mb-8 sm:mb-12">
//         <h1
//           ref={headingRef}
//           className="text-3xl sm:text-4xl md:text-5xl mb-2 font-bold"
//         >
//          Our Portfolio
//         </h1>
//         <p className="max-w-[600px] mx-auto text-sm sm:text-base text-[#666] px-4">
//         As a trusted leader in WordPress development, our success is defined by client satisfaction, technical excellence, and a commitment to continuous growth.
//         </p>
//       </section>

//       <section className="relative px-4 sm:px-6 md:px-8">
//         <div className="relative max-w-5xl mx-auto">
//           <button
//             onClick={handlePrev}
//             className="custom-swiper-button-prev bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition
//               absolute left-[-4.5rem] top-1/2 -translate-y-1/2 z-30 border border-gray-200"
//             style={{
//               boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             tabIndex={0}
//             aria-label="Previous"
//           >
//             <GoArrowLeft className="text-2xl text-gray-700" />
//           </button>
//           <button
//             onClick={handleNext}
//             className="custom-swiper-button-next bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition
//               absolute right-[-4.5rem] top-1/2 -translate-y-1/2 z-30 border border-gray-200"
//             style={{
//               boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//             tabIndex={0}
//             aria-label="Next"
//           >
//             <GoArrowRight className="text-2xl text-gray-700" />
//           </button>
//           <Swiper
//             ref={swiperRef}
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView={"auto"}
//             onSlideChange={() => playSlideSound()}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 2.5,
//               slideShadows: false,
//             }}
//             modules={[EffectCoverflow]}
//             className="tranding-slider"
//           >
//             {projects.map((project) => (
//               <SwiperSlide
//                 key={project.id}
//                 className="tranding-slide !w-[250px] sm:!w-[280px] md:!w-[300px] !h-[350px] sm:!h-[380px] md:!h-[420px] rounded-[20px] overflow-hidden relative shadow-lg group"
//                 onMouseEnter={() => setHovered(project.id)}
//                 onMouseLeave={() => setHovered(null)}
//                 style={{
//                   background: "#fff",
//                   borderRadius: "20px",
//                   overflow: "hidden",
//                   position: "relative",
//                 }}
//               >
//                 <div className="tranding-slide-img relative w-full h-full">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                     style={{ borderRadius: "20px" }}
//                   />
//                 </div>
//                 <div
//                   className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 ${
//                     hovered === project.id ? "opacity-100" : "opacity-0 pointer-events-none"
//                   }`}
//                   style={{ borderRadius: "20px" }}
//                 >
//                   <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">
//                     {project.title}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-gray-200 mb-2 sm:mb-3">
//                     {project.description}
//                   </p>
//                   <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="bg-white/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-white"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-1 mb-2">
//                     <span className="text-white text-sm font-semibold">{project.rating}</span>
//                     <div className="flex text-yellow-400 text-xs">
//                       {[...Array(5)].map((_, i) => (
//                         <svg
//                           key={i}
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill={i < Math.round(project.rating) ? "currentColor" : "none"}
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           className="w-4 h-4"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={1}
//                             d="M12 17.25l-6.172 3.245 1.179-6.873L2 9.755l6.914-1.004L12 2.25l3.086 6.501L22 9.755l-5.007 4.867 1.179 6.873z"
//                           />
//                         </svg>
//                       ))}
//                     </div>
//                   </div>
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-300"
//                   >
//                     <GoArrowDownRight className="text-base sm:text-lg" />
//                   </a>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Projects;