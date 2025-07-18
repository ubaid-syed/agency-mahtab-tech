// // // // // import React, { useState, useEffect } from "react";
// // // // // import { motion, AnimatePresence } from "framer-motion";

// // // // // const Navbar = () => {
// // // // //   const [isVisible, setIsVisible] = useState(true);
// // // // //   const [lastScrollY, setLastScrollY] = useState(0);
// // // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       const currentScrollY = window.scrollY;

// // // // //       if (currentScrollY < lastScrollY) {
// // // // //         // User scrolled up → Show navbar
// // // // //         setIsVisible(true);
// // // // //       } else if (currentScrollY > lastScrollY) {
// // // // //         // User scrolled down → Hide navbar
// // // // //         setIsVisible(false);
// // // // //       }

// // // // //       setLastScrollY(currentScrollY);
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, [lastScrollY]);

// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ y: 0 }}
// // // // //       animate={{ y: isVisible ? 0 : "-100%" }}
// // // // //       transition={{ duration: 0.3, ease: "easeInOut" }}
// // // // //       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
// // // // //     >
// // // // //       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
// // // // //         {/* Logo */}
// // // // //         <div className="text-black text-lg font-bold">Mahtab Tech</div>

// // // // //         {/* Desktop Navigation */}
// // // // //         <nav className="hidden md:flex space-x-6">
// // // // //           <a href="#" className="text-black text-md">
// // // // //             Home
// // // // //           </a>
// // // // //           <a href="#" className="text-black text-md">
// // // // //             About
// // // // //           </a>
// // // // //           <a href="#" className="text-black text-md">
// // // // //             Services
// // // // //           </a>
// // // // //           <a href="#" className="text-black text-md">
// // // // //             Portfolio
// // // // //           </a>
// // // // //           <a href="#" className="text-black text-md">
// // // // //             Contact
// // // // //           </a>
// // // // //         </nav>

// // // // //         {/* Get Started Button */}
// // // // //         <button className="hidden md:block bg-white text-black px-4 py-2 rounded-lg font-semibold">
// // // // //           Get Started
// // // // //         </button>

// // // // //         {/* Hamburger Icon */}
// // // // //         <div
// // // // //           className="md:hidden text-black text-2xl cursor-pointer"
// // // // //           onClick={() => setMenuOpen(!menuOpen)}
// // // // //         >
// // // // //           ☰
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Menu */}
// // // // //       <AnimatePresence>
// // // // //         {menuOpen && (
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: -20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             exit={{ opacity: 0, y: -20 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             className="fixed top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center space-y-4"
// // // // //           >
// // // // //             <a href="#" className="text-black text-md">
// // // // //               Home
// // // // //             </a>
// // // // //             <a href="#" className="text-black text-md">
// // // // //               About
// // // // //             </a>
// // // // //             <a href="#" className="text-black text-md">
// // // // //               Services
// // // // //             </a>
// // // // //             <a href="#" className="text-black text-md">
// // // // //               Portfolio
// // // // //             </a>
// // // // //             <a href="#" className="text-black text-md">
// // // // //               Contact
// // // // //             </a>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // import React, { useState, useEffect } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";

// // // // const Navbar = () => {
// // // //   const [isVisible, setIsVisible] = useState(true);
// // // //   const [lastScrollY, setLastScrollY] = useState(0);
// // // //   const [menuOpen, setMenuOpen] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       const currentScrollY = window.scrollY;

// // // //       if (currentScrollY > lastScrollY) {
// // // //         // Scroll down → Hide navbar
// // // //         setIsVisible(false);
// // // //       } else {
// // // //         // Scroll up → Show navbar
// // // //         setIsVisible(true);
// // // //       }

// // // //       setLastScrollY(currentScrollY);
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, [lastScrollY]);

// // // //   return (
// // // //     <motion.div
// // // //       initial={{ y: 0 }}
// // // //       animate={{ y: isVisible ? 0 : "-100%" }}
// // // //       transition={{ duration: 0.5, ease: "easeInOut" }}
// // // //       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
// // // //     >
// // // //       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
// // // //         {/* Logo */}
// // // //         <div className="text-black text-lg font-bold">Mahtab Tech</div>

// // // //         {/* Desktop Navigation */}
// // // //         <nav className="hidden md:flex space-x-6">
// // // //           <a href="#" className="text-black text-md">
// // // //             Home
// // // //           </a>
// // // //           <a href="#" className="text-black text-md">
// // // //             About
// // // //           </a>
// // // //           <a href="#" className="text-black text-md">
// // // //             Services
// // // //           </a>
// // // //           <a href="#" className="text-black text-md">
// // // //             Portfolio
// // // //           </a>
// // // //           <a href="#" className="text-black text-md">
// // // //             Contact
// // // //           </a>
// // // //         </nav>

// // // //         {/* Get Started Button */}
// // // //         <button className="hidden md:block bg-black  text-white px-4 py-2 rounded-lg font-semibold">
// // // //           Get Started
// // // //         </button>

// // // //         {/* Hamburger Icon */}
// // // //         <div
// // // //           className="md:hidden text-black text-2xl cursor-pointer"
// // // //           onClick={() => setMenuOpen(!menuOpen)}
// // // //         >
// // // //           ☰
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       <AnimatePresence>
// // // //         {menuOpen && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: -20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             exit={{ opacity: 0, y: -20 }}
// // // //             transition={{ duration: 0.3 }}
// // // //             className="fixed top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center space-y-4"
// // // //           >
// // // //             <a href="#" className="text-black text-md">
// // // //               Home
// // // //             </a>
// // // //             <a href="#" className="text-black text-md">
// // // //               About
// // // //             </a>
// // // //             <a href="#" className="text-black text-md">
// // // //               Services
// // // //             </a>
// // // //             <a href="#" className="text-black text-md">
// // // //               Portfolio
// // // //             </a>
// // // //             <a href="#" className="text-black text-md">
// // // //               Contact
// // // //             </a>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // export default Navbar;

// // // // // Navbar hides immediately when scrolling down and appears smoothly when scrolling up.

// // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // import gsap from 'gsap';
// // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // import Logo from './Logo';

// // // // // const Navbar = () => {

// // // // //     const menuRef = useRef(null);
// // // // //     let flag = true;

// // // // //     const handleMenuToggle = () => {

// // // // //         if (flag) {
// // // // //             menuRef.current.classList.add('menu_active');
// // // // //             gsap.to('.nav_line', {
// // // // //                 width: '100%',
// // // // //                 duration: 0.5,
// // // // //                 ease: 'power3.inOut',
// // // // //                 opacity: 1,
// // // // //                 delay: 0.35,
// // // // //             });
// // // // //             gsap.to('.mobile .logo svg path', {
// // // // //                 fill: 'white',
// // // // //             });
// // // // //             gsap.to('.mobile i', {
// // // // //                 color: 'white',
// // // // //             });
// // // // //             flag = false;
// // // // //         } else {
// // // // //             menuRef.current.classList.remove('menu_active');
// // // // //             gsap.to('.nav_line', {
// // // // //                 width: 0,
// // // // //                 duration: 0.5,
// // // // //                 ease: 'power3.inOut',
// // // // //                 opacity: 1,
// // // // //             });
// // // // //             if (document.body.getAttribute('theme') != 'black') {
// // // // //                 gsap.to('.mobile .logo svg path', {
// // // // //                     fill: 'black',
// // // // //                 });
// // // // //                 gsap.to('.mobile i', {
// // // // //                     color: 'black',
// // // // //                 });
// // // // //             }
// // // // //             flag = true;
// // // // //         }

// // // // //     };

// // // // //     // useEffect(() => {
// // // // //     //     gsap.registerPlugin(ScrollTrigger);

// // // // //     //     let ctx = gsap.context(() => {
// // // // //     //         gsap.from("nav ul li", {
// // // // //     //             delay: 2.3,
// // // // //     //             duration: 1,
// // // // //     //             opacity: 0,
// // // // //     //             stagger: 0.3,
// // // // //     //             x: -100,
// // // // //     //         });

// // // // //     //         gsap.from('nav .logo', {
// // // // //     //             delay: 2,
// // // // //     //             opacity: 0,
// // // // //     //             y: -200,
// // // // //     //             duration: 2.4,
// // // // //     //             ease: 'elastic.inOut',
// // // // //     //         });
// // // // //     //     });

// // // // //     //     ScrollTrigger.refresh();

// // // // //     //     return () => ctx.revert();
// // // // //     // }, []);

// // // // //     return (
// // // // //         <>
// // // // //             <nav className='navbar w-full fixed z-50 top-0 left-0 px-8 sm:px-14 py-6 sm:py-3'>

// // // // //                 <div className="sm:flex items-center justify-between hidden">
// // // // //                     <div className='logo'>
// // // // //                         <Logo width='40%' height='40%' />
// // // // //                     </div>
// // // // //                     <ul className='flex items-center gap-6'>
// // // // //                         {
// // // // //                             ['solutions', 'about', 'insights', 'team', 'careers'].map((item, index) => {
// // // // //                                 return <li className='capitalize' key={index}>{item}</li>
// // // // //                             })
// // // // //                         }
// // // // //                         <button className='btn_org bg_org px-2 py-1.5 rounded'>
// // // // //                             <span>Contact Us</span>
// // // // //                         </button>
// // // // //                     </ul>
// // // // //                 </div>

// // // // //                 <div className="mobile sm:hidden flex items-center justify-between relative">
// // // // //                     <div className='logo relative z-[70]'>
// // // // //                         <Logo width='50%' height='50%' />
// // // // //                     </div>
// // // // //                     <button onClick={handleMenuToggle} type='button' className='text-4xl transition_all relative z-[70]'>
// // // // //                         <i className='ri-menu-line'></i>
// // // // //                     </button>
// // // // //                     <div className='nav_line z-[70] fixed top-20 opacity-0 left-0 w-0 h-[1.25px] bg-white' />
// // // // //                 </div>

// // // // //                 <div ref={menuRef} className='fixed mobile_menu transition_all h-screen w-full top-[-150%] left-0 bg-black z-40 flex flex-col items-center justify-center'>
// // // // //                     <ul className='flex flex-col items-center gap-6'>
// // // // //                         {
// // // // //                             ['solutions', 'about', 'insights', 'team', 'careers'].map((item, index) => {
// // // // //                                 return <li className='capitalize text-white' key={index}>{item}</li>
// // // // //                             })
// // // // //                         }
// // // // //                         <button className='btn_org bg_org px-2 py-1.5 rounded'>
// // // // //                             <span>Contact Us</span>
// // // // //                         </button>
// // // // //                     </ul>
// // // // //                 </div>

// // // // //             </nav>
// // // // //         </>
// // // // //     );
// // // // // };

// // // // // export default Navbar;

// // // import React, { useState, useEffect } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // const Navbar = () => {
// // //   const [isVisible, setIsVisible] = useState(true);
// // //   const [lastScrollY, setLastScrollY] = useState(0);
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const currentScrollY = window.scrollY;
// // //       setIsVisible(currentScrollY < lastScrollY);
// // //       setLastScrollY(currentScrollY);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, [lastScrollY]);

// // //   return (
// // //     <motion.div
// // //       initial={{ y: 0 }}
// // //       animate={{ y: isVisible ? 0 : "-100%" }}
// // //       transition={{ duration: 0.5, ease: "easeInOut" }}
// // //       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
// // //     >
// // //       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
// // //         {/* Logo */}
// // //         <div className="text-black text-lg font-bold">Mahtab Tech</div>

// // //         {/* Desktop Navigation */}
// // //         <nav className="hidden md:flex space-x-6">
// // //           {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
// // //             <a
// // //               key={item}
// // //               href="#"
// // //               className="text-black text-md hover:text-gray-600 transition"
// // //             >
// // //               {item}
// // //             </a>
// // //           ))}
// // //         </nav>

// // //         {/* Get Started Button */}
// // //         <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
// // //           Get Started
// // //         </button>

// // //         {/* Hamburger Icon */}
// // //         <div
// // //           className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
// // //           onClick={() => setMenuOpen(!menuOpen)}
// // //         >
// // //           <motion.div
// // //             animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
// // //             className="w-6 h-1 bg-black rounded-md transition-all"
// // //           />
// // //           <motion.div
// // //             animate={{ opacity: menuOpen ? 0 : 1 }}
// // //             className="w-6 h-1 bg-black rounded-md transition-all"
// // //           />
// // //           <motion.div
// // //             animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
// // //             className="w-6 h-1 bg-black rounded-md transition-all"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       <AnimatePresence>
// // //         {menuOpen && (
// // //           <motion.div
// // //             initial={{ opacity: 0, y: -20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             exit={{ opacity: 0, y: -20 }}
// // //             transition={{ duration: 0.3 }}
// // //             className="fixed top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center space-y-4 border-t"
// // //           >
// // //             {["Home", "About", "Services", "Portfolio", "Contact"].map(
// // //               (item) => (
// // //                 <a
// // //                   key={item}
// // //                   href="#"
// // //                   className="text-black text-md hover:text-gray-600 transition"
// // //                 >
// // //                   {item}
// // //                 </a>
// // //               )
// // //             )}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </motion.div>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";

// // const Navbar = () => {
// //   const [isVisible, setIsVisible] = useState(true);
// //   const [lastScrollY, setLastScrollY] = useState(0);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;
// //       setIsVisible(currentScrollY < lastScrollY);
// //       setLastScrollY(currentScrollY);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [lastScrollY]);

// //   return (
// //     <motion.div
// //       initial={{ y: 0 }}
// //       animate={{ y: isVisible ? 0 : "-100%" }}
// //       transition={{ duration: 0.5, ease: "easeInOut" }}
// //       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
// //     >
// //       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
// //         {/* Logo */}
// //         <div className="text-black text-lg font-bold">Mahtab Tech</div>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:flex space-x-6">
// //           {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
// //             <a
// //               key={item}
// //               href="#"
// //               className="text-black text-md hover:text-gray-600 transition"
// //             >
// //               {item}
// //             </a>
// //           ))}
// //         </nav>

// //         {/* Get Started Button */}
// //         <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
// //           Get Started
// //         </button>

// //         {/* Hamburger Icon */}
// //         <div
// //           className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //         >
// //           <motion.div
// //             animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
// //             className="w-6 h-1 bg-black rounded-md transition-all"
// //           />
// //           <motion.div
// //             animate={{ opacity: menuOpen ? 0 : 1 }}
// //             className="w-6 h-1 bg-black rounded-md transition-all"
// //           />
// //           <motion.div
// //             animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
// //             className="w-6 h-1 bg-black rounded-md transition-all"
// //           />
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {menuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, x: "-100%" }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: "-100%" }}
// //             transition={{ duration: 0.5 }}
// //             className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6"
// //           >
// //             {["Home", "About", "Services", "Portfolio", "Contact"].map(
// //               (item, index) => (
// //                 <motion.a
// //                   key={item}
// //                   href="#"
// //                   className="text-3xl font-semibold tracking-wider hover:text-gray-400 transition-all"
// //                   initial={{ opacity: 0, y: -20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: index * 0.1, duration: 0.3 }}
// //                 >
// //                   {item}
// //                 </motion.a>
// //               )
// //             )}

// //             <motion.button
// //               className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.5, duration: 0.3 }}
// //             >
// //               Get Started
// //             </motion.button>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.div>
// //   );
// // };

// // export default Navbar;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "./Navbar.css";

// const DURATION = 0.25;
// const STAGGER = 0.025;

// const FlipLink = ({ children, href }) => {
//   return (
//     <motion.a
//       initial="initial"
//       whileHover="hovered"
//       href={href}
//       className="relative block overflow-hidden whitespace-nowrap text-lg font-normal"
//     >
//       <div>
//         {children.split("").map((l, i) => (
//           <motion.span
//             variants={{
//               initial: { y: 0 },
//               hovered: { y: "-100%" },
//             }}
//             transition={{
//               duration: DURATION,
//               ease: "easeInOut",
//               delay: STAGGER * i,
//             }}
//             className="inline-block"
//             key={i}
//           >
//             {l}
//           </motion.span>
//         ))}
//       </div>
//       <div className="absolute inset-0">
//         {children.split("").map((l, i) => (
//           <motion.span
//             variants={{
//               initial: { y: "100%" },
//               hovered: { y: 0 },
//             }}
//             transition={{
//               duration: DURATION,
//               ease: "easeInOut",
//               delay: STAGGER * i,
//             }}
//             className="inline-block"
//             key={i}
//           >
//             {l}
//           </motion.span>
//         ))}
//       </div>
//     </motion.a>
//   );
// };

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY < lastScrollY);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <motion.div
//       initial={{ y: 0 }}
//       animate={{ y: isVisible ? 0 : "-100%" }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
//     >
//       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-black text-xl font-normal">Mahtab-Tech</div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           {[
//             "Services",
//             "Approach",
//             "Benefits",
//             "Our work",
//             "FAQs",
//             "Contact",
//           ].map((item) => (
//             <FlipLink key={item} href="#">
//               {item}
//             </FlipLink>
//           ))}
//         </nav>

//         {/* Get Started Button */}
//         <button className="hidden md:block bubbles">
//           <span className="text">Get Started</span>
//         </button>

//         {/* Hamburger Icon */}
//         <div
//           className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <motion.div
//             animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//           <motion.div
//             animate={{ opacity: menuOpen ? 0 : 1 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//           <motion.div
//             animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "-100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "-100%" }}
//             transition={{ duration: 0.5 }}
//             className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6"
//           >
//             <div
//               className="absolute top-9 right-6 cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             >
//               <motion.div
//                 animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//               <motion.div
//                 animate={{ opacity: menuOpen ? 0 : 1 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//               <motion.div
//                 animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//             </div>

//             {/* Menu Items */}
//             {[
//               "Services",
//               "Approach",
//               "Benefits",
//               "Our work",
//               "FAQs",
//               "Contact",
//             ].map((item, index) => (
//               <FlipLink
//                 key={item}
//                 href="#"
//                 className="text-3xl font-normal tracking-wider"
//               >
//                 {item}
//               </FlipLink>
//             ))}

//             <motion.button
//               className="relative inline-block text-lg group"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.3 }}
//             >
//               <span className="relative z-10 block px-5 py-3 overflow-hidden font-normal leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//                 <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//                 <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//                 <span className="relative">Get Started</span>
//               </span>
//               <span
//                 className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//                 data-rounded="rounded-lg"
//               ></span>
//             </motion.button>

//             {/* Social Icons */}
//             <div className="absolute bottom-10 left-10 flex gap-6">
//               <a
//                 href="https://github.com/Mahtab-Syed"
//                 className="text-2xl text-gray-800 hover:text-gray-600"
//                 target="_blank"
//               >
//                 <i className="ri-github-fill"></i>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/mahtab-ahmad-8ba27734a/"
//                 className="text-2xl text-gray-800 hover:text-gray-600"
//                 target="_blank"
//               >
//                 <i className="ri-linkedin-box-fill"></i>
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY < lastScrollY);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <motion.div
//       initial={{ y: 0 }}
//       animate={{ y: isVisible ? 0 : "-100%" }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
//     >
//       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-black text-lg font-bold">Mahtab Tech</div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="text-black text-md hover:text-gray-600 transition"
//             >
//               {item}
//             </a>
//           ))}
//         </nav>

//         {/* Get Started Button */}
//         {/* <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
//           Get Started
//         </button> */}
//         {/* <div class="border w-full h-40 flex items-center justify-center"> */}
//         <button class=" hidden md:block relative  text-lg group">
//           <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//             <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//             <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//             <span class="relative">Button</span>
//           </span>
//           <span
//             class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//             data-rounded="rounded-lg"
//           ></span>
//         </button>
//         {/* </div> */}

//         {/* Hamburger Icon */}
//         <div
//           className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <motion.div
//             animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//           <motion.div
//             animate={{ opacity: menuOpen ? 0 : 1 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//           <motion.div
//             animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "-100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "-100%" }}
//             transition={{ duration: 0.5 }}
//             className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6"
//           >
//             <div
//               className="absolute top-9 right-6 cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             >
//               <motion.div
//                 animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//               <motion.div
//                 animate={{ opacity: menuOpen ? 0 : 1 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//               <motion.div
//                 animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//             </div>

//             {/* Menu Items */}
//             {["Home", "About", "Services", "Portfolio", "Contact"].map(
//               (item, index) => (
//                 <motion.a
//                   key={item}
//                   href="#"
//                   className="text-3xl font-semibold tracking-wider hover:text-gray-400 transition-all"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.3 }}
//                 >
//                   {item}
//                 </motion.a>
//               )
//             )}

//             <motion.button
//               className="relative inline-block text-lg group"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.3 }}
//             >
//               <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//                 <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//                 <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//                 <span class="relative">Button</span>
//               </span>
//               <span
//                 class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//                 data-rounded="rounded-lg"
//               ></span>
//             </motion.button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY < lastScrollY);
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <motion.div
//       initial={{ y: 0 }}
//       animate={{ y: isVisible ? 0 : "-100%" }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//       className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
//     >
//       <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-black text-xl font-bold">Mahtab-Tech</div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-6">
//           {[
//             "Services",
//             "Approach",
//             "Benefits",
//             "Our work",
//             "FAQs",
//             "Contact",
//           ].map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="text-black text-md hover:text-gray-600 transition"
//             >
//               {item}
//             </a>
//           ))}
//         </nav>

//         {/* Get Started Button */}
//         {/* <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition">
//           Get Started
//         </button> */}
//         {/* <div class="border w-full h-40 flex items-center justify-center"> */}
//         <button className="hidden md:block relative text-sm px-8 py-3 border-2 border-black rounded-full uppercase text-black bg-transparent font-bold cursor-pointer overflow-hidden group transition-all duration-500 hover:text-white hover:border-transparent hover:scale-105">
//           <span className="relative z-10">Get Started</span>
//           <span className="absolute inset-0 bg-gradient-to-r from-black via-gray-500 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
//           <span className="absolute -inset-1 bg-gradient-to-r from-black via-gray-500 to-white rounded-full blur opacity-0 group-hover:opacity-75 transition-all duration-500 group-hover:blur-md"></span>
//           <span className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-black via-gray-500 to-white opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
//           <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-black via-gray-500 to-white -z-10"></span>
//         </button>
//         {/* </div> */}

//         {/* Hamburger Icon */}
//         <div
//           className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <motion.div
//             animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//           <motion.div
//             animate={{ opacity: menuOpen ? 0 : 1 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//           <motion.div
//             animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
//             className="w-6 h-1 bg-black rounded-md transition-all"
//           />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: "-100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "-100%" }}
//             transition={{ duration: 0.5 }}
//             className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6"
//           >
//             <div
//               className="absolute top-9 right-6 cursor-pointer"
//               onClick={() => setMenuOpen(false)}
//             >
//               <motion.div
//                 animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//               <motion.div
//                 animate={{ opacity: menuOpen ? 0 : 1 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//               <motion.div
//                 animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
//                 className="w-6 h-1 bg-black rounded-md transition-all"
//               />
//             </div>

//             {/* Menu Items */}
//             {[
//               "Services",
//               "Approach",
//               "Benefits",
//               "Our work",
//               "FAQs",
//               "Contact",
//             ].map((item, index) => (
//               <motion.a
//                 key={item}
//                 href="#"
//                 className="text-3xl font-semibold tracking-wider hover:text-gray-400 transition-all"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, duration: 0.3 }}
//               >
//                 {item}
//               </motion.a>
//             ))}

//             <motion.button
//               className="relative inline-block text-lg group"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5, duration: 0.3 }}
//             >
//               <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//                 <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//                 <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//                 <span class="relative">Get Started</span>
//               </span>
//               <span
//                 class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//                 data-rounded="rounded-lg"
//               ></span>
//             </motion.button>

//             {/* Social Icons */}
//             <div className="absolute bottom-10 left-10 flex gap-6">
//               <a
//                 href="https://github.com/Mahtab-Syed"
//                 className="text-2xl text-gray-800 hover:text-gray-600"
//                 target="_blank"
//               >
//                 <i className="ri-github-fill"></i>
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/mahtab-ahmad-8ba27734a/"
//                 className="text-2xl text-gray-800 hover:text-gray-600"
//                 target="_blank"
//               >
//                 <i className="ri-linkedin-box-fill"></i>
//               </a>
//               {/* <a
//                 href="#"
//                 className="text-2xl text-gray-800 hover:text-gray-600"
//               >
//                 <i className="ri-global-fill"></i>
//               </a> */}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Navbar;




//real one
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-lg font-normal"
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full flex justify-center fixed top-0 left-0 z-50 p-4"
    >
      <div className="w-full max-w-6xl backdrop-blur-md bg-white/75 border border-white/20 rounded-2xl shadow-lg p-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-xl font-normal">Mahtab-Tech</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            "Services",
            "Approach",
            "Benefits",
            "Our work",
            "FAQs",
            "Contact",
          ].map((item) => (
            <FlipLink key={item} href="#">
              {item}
            </FlipLink>
          ))}
        </nav>

        {/* Get Started Button */}
        <button className="hidden md:block bubbles">
          <span className="text">Get Started</span>
        </button>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer flex flex-col items-center justify-center gap-1 w-8 h-8 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="w-6 h-1 bg-black rounded-md transition-all"
          />
          <motion.div
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="w-6 h-1 bg-black rounded-md transition-all"
          />
          <motion.div
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="w-6 h-1 bg-black rounded-md transition-all"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col items-center justify-center space-y-6"
          >
            <div
              className="absolute top-9 right-6 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                className="w-6 h-1 bg-black rounded-md transition-all"
              />
              <motion.div
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="w-6 h-1 bg-black rounded-md transition-all"
              />
              <motion.div
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                className="w-6 h-1 bg-black rounded-md transition-all"
              />
            </div>

            {/* Menu Items */}
            {[
              "Services",
              "Approach",
              "Benefits",
              "Our work",
              "FAQs",
              "Contact",
            ].map((item, index) => (
              <FlipLink
                key={item}
                href="#"
                className="text-3xl font-normal tracking-wider"
              >
                {item}
              </FlipLink>
            ))}

            <motion.button
              className="relative inline-block text-lg group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-normal leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative ">Get Started</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </motion.button>

            {/* Social Icons */}
            <div className="absolute bottom-10 left-10 flex gap-6">
              <a
                href="https://github.com/Mahtab-Syed"
                className="text-2xl text-gray-800 hover:text-gray-600"
                target="_blank"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mahtab-ahmad-8ba27734a/"
                className="text-2xl text-gray-800 hover:text-gray-600"
                target="_blank"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;






// import React, { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("#home");

//   const navLinks = [
//     { href: "#home", label: "Home" },

//     { href: "#services", label: "Services" },
//     { href: "#approach", label: "Approach" },
//     { href: "#portfolio", label: "Our work" },
    
//   ];

//   const navVariants = {
//     hidden: {
//       opacity: 0,
//       y: -25,
//       transition: { type: "spring", stiffness: 300, damping: 30 },
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 80, delay: 0.2 },
//     },
//   };

//   // Custom colors
//   const activeBgColor = "#0D263A";
//   const getInTouchBg = "#000000";
//   const getInTouchText = "#ffffff";
//   const hoverNavBg = "rgba(13,38,58,0.08)";

//   return (
//     <div className="w-full flex justify-center fixed top-5 left-0 z-50 pointer-events-none">
//       <motion.nav
//         variants={navVariants}
//         initial="hidden"
//         animate="show"
//         layout
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//         className={`pointer-events-auto bg-white/80 backdrop-blur-xl border border-gray-200/75 shadow-xl
//           ${
//             isMenuOpen
//               ? "w-[90vw] max-w-lg rounded-2xl"
//               : "rounded-full"
//           }`}
//         style={{
//           // Center horizontally
//           // left: "10%",
//           transform: "translateX(-50%)",
//           position: "relative",
//         }}
//       >
//         <motion.div
//           layout="position"
//           className="flex items-center justify-between p-3"
//         >
//           {/* Logo */}
//           <a href="#home" className="flex items-center gap-2 cursor-pointer flex-shrink-0 group">
//             <img
//               src="/Grad BH Fnl-2.png"
//               alt="Mahtab"
//               className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
//             />
//           </a>

//           {/* Navigation Links - Desktop */}
//           <div className="hidden md:flex items-center gap-2 mx-4">
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setActiveLink(link.href)}
//                 className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative overflow-hidden
//                   ${
//                     activeLink === link.href
//                       ? "text-white"
//                       : "text-gray-700 hover:text-[#0D263A]"
//                   }`}
//                 style={{
//                   zIndex: 1,
//                   fontWeight: activeLink === link.href ? 700 : 500,
//                   letterSpacing: activeLink === link.href ? "0.02em" : "0",
//                   boxShadow: activeLink === link.href ? "0 2px 16px 0 rgba(13,38,58,0.10)" : "none",
//                 }}
//               >
//                 {activeLink === link.href && (
//                   <motion.div
//                     layoutId="active-pill"
//                     className="absolute inset-0"
//                     style={{
//                       background: activeBgColor,
//                       borderRadius: 9999,
//                       zIndex: 0,
//                     }}
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                   />
//                 )}
//                 <span className="relative z-10">{link.label}</span>
//                 {/* Animated underline on hover */}
//                 <span
//                   className="absolute left-1/2 -bottom-1 w-0 h-[3px] bg-[#C7F380] rounded-full transition-all duration-300 group-hover:w-3/4"
//                   style={{
//                     transform: "translateX(-50%)",
//                     opacity: activeLink === link.href ? 1 : 0.5,
//                   }}
//                 ></span>
//               </a>
//             ))}
//           </div>

//           {/* CTA Button & Mobile Menu Button */}
//           <div className="flex items-center gap-2">
//             <a
//               href="#newsletter"
//               className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md border border-transparent"
//               style={{
//                 background: getInTouchBg,
//                 color: getInTouchText,
//                 boxShadow: "0 2px 16px 0 rgba(199,243,128,0.15)",
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.background = "#e6ffb7";
//                 e.currentTarget.style.color = "#0D263A";
//                 e.currentTarget.style.boxShadow = "0 4px 24px 0 rgba(199,243,128,0.25)";
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.background = getInTouchBg;
//                 e.currentTarget.style.color = getInTouchText;
//                 e.currentTarget.style.boxShadow = "0 2px 16px 0 rgba(199,243,128,0.15)";
//               }}
//             >
//               Get in touch
//             </a>
//             <button
//               className="md:hidden p-2 rounded-full transition-colors duration-200 hover:bg-[#C7F380]/30 focus:outline-none focus:ring-2 focus:ring-[#C7F380]"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//             >
//               {isMenuOpen ? (
//                 <HiX className="h-6 w-6 text-[#0D263A] transition-transform duration-200 hover:scale-110" />
//               ) : (
//                 <HiMenu className="h-6 w-6 text-[#0D263A] transition-transform duration-200 hover:scale-110" />
//               )}
//             </button>
//           </div>
//         </motion.div>

//         {/* Mobile Menu Content */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className="md:hidden overflow-hidden"
//             >
//               <div className="flex flex-col items-center gap-2 px-3 pb-4 pt-2 border-t border-gray-200/75">
//                 {navLinks.map((link) => (
//                   <a
//                     key={link.href}
//                     href={link.href}
//                     onClick={() => {
//                       setActiveLink(link.href);
//                       setIsMenuOpen(false);
//                     }}
//                     className={`w-full text-center block text-base font-semibold py-3 rounded-lg transition-all duration-300 relative
//                       ${
//                         activeLink === link.href
//                           ? ""
//                           : "hover:bg-[#C7F380]/20 hover:text-[#0D263A]"
//                       }`}
//                     style={{
//                       background: activeLink === link.href ? "#0D263A" : "transparent",
//                       color: activeLink === link.href ? "#fff" : "#0D263A",
//                       boxShadow: activeLink === link.href ? "0 2px 16px 0 rgba(13,38,58,0.10)" : "none",
//                     }}
//                   >
//                     <span className="relative z-10">{link.label}</span>
//                     {activeLink === link.href && (
//                       <motion.div
//                         layoutId="mobile-active-pill"
//                         className="absolute inset-0"
//                         style={{
//                           background: "#0D263A",
//                           borderRadius: 12,
//                           zIndex: 0,
//                           opacity: 0.95,
//                         }}
//                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                       />
//                     )}
//                   </a>
//                 ))}
//                 <a
//                   href="#newsletter"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="w-full mt-2 text-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md border border-transparent"
//                   style={{
//                     background: getInTouchBg,
//                     color: getInTouchText,
//                     boxShadow: "0 2px 16px 0 rgba(199,243,128,0.15)",
//                   }}
//                   onMouseEnter={e => {
//                     e.currentTarget.style.background = "#e6ffb7";
//                     e.currentTarget.style.color = "#0D263A";
//                     e.currentTarget.style.boxShadow = "0 4px 24px 0 rgba(199,243,128,0.25)";
//                   }}
//                   onMouseLeave={e => {
//                     e.currentTarget.style.background = getInTouchBg;
//                     e.currentTarget.style.color = getInTouchText;
//                     e.currentTarget.style.boxShadow = "0 2px 16px 0 rgba(199,243,128,0.15)";
//                   }}
//                 >
//                   Get in touch
//                 </a>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </div>
//   );
// };

// export default Navbar;