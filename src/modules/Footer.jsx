// // import React, { useEffect, useRef } from "react";
// // import gsap from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Logo from "../components/Nav/Logo";
// // // import Button from "../components/global/Button";

// // const Footer = () => {
// //   const logoRef = useRef(null);

// //   useEffect(() => {
// //     let ctx = gsap.context(() => {
// //       gsap
// //         .timeline({
// //           scrollTrigger: {
// //             trigger: "footer",
// //             start: "top top",
// //             end: "top 40%",
// //             scrub: 2,
// //             // markers: true,
// //             onEnter: () => {
// //               document.body.setAttribute("theme", "black");
// //             },
// //             onEnterBack: () => {
// //               document.body.setAttribute("theme", "black");
// //             },
// //           },
// //         })
// //         .to(logoRef.current, {
// //           delay: -1,
// //           rotate: 0,
// //           bottom: window.innerWidth > 640 ? "-2rem" : "17.5rem",
// //           duration: 1,
// //           ease: "sine.inOut",
// //         })
// //         .from(".copyright_text", {
// //           delay: -1,
// //           opacity: 0,
// //           bottom: "-5rem",
// //           duration: 1,
// //           ease: "elastic.inOut",
// //         });
// //     });

// //     ScrollTrigger.refresh();

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <>
// //       <footer className="footer w-full h-[100vh] sm:h-[105vh] relative px-14 pt-10 bg-black overflow-hidden ">
// //         <div className="flex items-start w-full capitalize pt-10 justify-center">
// //           <ul className="flex items-start space-x-3 ">
// //             {["HOME", "ABOUT", "SERVICES", "PORTFOLIO", "CONTACT"].map(
// //               (item, index) => (
// //                 <li
// //                   key={index}
// //                   className="text-xl text-white cursor-pointer hover:text-[#F5F19C]"
// //                 >
// //                   {item}
// //                 </li>
// //               )
// //             )}
// //           </ul>

// //           {/*
// //           <div className="hidden sm:block">
// //             <p className="text-2xl pb-8 text-white font_neuemachina">
// //               Join our mailing list for <br />
// //               the latest updates.
// //             </p>
// //             <div className="flex items-center gap-6">
// //               <input
// //                 className="py-4 px-4 text-black placeholder:text-black w-64 outline-none"
// //                 type="text"
// //                 placeholder="Enter your email address..."
// //               />
// //               <Button
// //                 btnLayout={{ background: "#F5F19C" }}
// //                 title="subscribe"
// //                 borderColor="border-black"
// //               />
// //             </div>
// //           </div>

// //           <ul className="space-y-3">
// //             {["Insights", "Newsroom", "Resources", "Contact", "Careers"].map(
// //               (item, index) => (
// //                 <li
// //                   key={index}
// //                   className="text-xl text-white cursor-pointer hover:text-[#F5F19C]"
// //                 >
// //                   {item}
// //                 </li>
// //               )
// //             )}
// //           </ul> */}
// //         </div>
// //         <div className="flex justify-center items-center mt-2">
// //           <hr color="white" className="w-[50vw] h-1 text-white " />
// //         </div>
// //         {/* <div className="sm:hidden block mt-14">
// //           <p className="text-xl pb-8 text-white font_neuemachina text-center">
// //             Join our mailing list for <br />
// //             the latest updates.
// //           </p>
// //           <div className="flex flex-col items-center gap-6">
// //             <input
// //               className="py-4 px-4 text-black placeholder:text-black w-64 outline-none"
// //               type="text"
// //               placeholder="Enter your email address..."
// //             />
// //             <Button
// //               btnLayout={{ background: "#F5F19C" }}
// //               title="subscribe"
// //               borderColor="border-black"
// //             />
// //           </div>
// //         </div> */}

// //         <div
// //           ref={logoRef}
// //           className="absolute -bottom-20 sm:-bottom-full rotate-45 w-full left-0 px-14"
// //         >
// //           <Logo width="100%" height="100%" />
// //         </div>

// //         <div className="absolute left-0 bottom-0 w-full px-14 bg-black">
// //           <div className="flex flex-col sm:flex-row sm:justify-between justify-start sm:items-center border-t-2 py-10">
// //             <ul className="flex flex-col sm:flex-row sm:items-center justify-start gap-5 capitalize">
// //               {["privacy policy", "terms of use", "trust"].map(
// //                 (item, index) => (
// //                   <li
// //                     key={index}
// //                     className="text-sm text-white hover:text-[#F5F19C] underline underline-offset-4 hover:no-underline"
// //                   >
// //                     <span className="link link--metis">{item}</span>
// //                   </li>
// //                 )
// //               )}
// //             </ul>
// //             <p className="copyright_text text-white text-sm cursor-pointer sm:my-0 my-10 hover:text-[#F5F19C]">
// //               © {new Date().getFullYear()} Mahtab-Tech. All rights reserved.
// //             </p>
// //             <ul className="flex items-center gap-5">
// //               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
// //                 <i class="text-xl ri-facebook-circle-fill"></i>
// //               </li>
// //               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
// //                 <i class="text-xl ri-instagram-line"></i>
// //               </li>
// //               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
// //                 <i class="text-xl ri-twitter-x-line"></i>
// //               </li>
// //               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
// //                 <i class="text-xl ri-github-fill"></i>
// //               </li>
// //               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
// //                 <i class="text-xl ri-linkedin-box-fill"></i>
// //               </li>
// //               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
// //                 <i class="text-xl ri-youtube-fill"></i>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // };

// // export default Footer;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Logo from "../components/Nav/Logo";
// // import Button from "../components/global/Button";

// const Footer = () => {
//   const logoRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: "footer",
//             start: "top top",
//             end: "top 40%",
//             scrub: 2,
//             // markers: true,
//             onEnter: () => {
//               document.body.setAttribute("theme", "black");
//             },
//             onEnterBack: () => {
//               document.body.setAttribute("theme", "black");
//             },
//           },
//         })
//         .to(logoRef.current, {
//           delay: -1,
//           rotate: 0,
//           bottom: window.innerWidth > 640 ? "-2rem" : "17.5rem",
//           duration: 1,
//           ease: "sine.inOut",
//         })
//         .from(".copyright_text", {
//           delay: -1,
//           opacity: 0,
//           bottom: "-5rem",
//           duration: 1,
//           ease: "elastic.inOut",
//         });
//     });

//     ScrollTrigger.refresh();

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <footer className="footer w-full h-[100vh] sm:h-[105vh] relative px-14 pt-10 bg-black overflow-hidden ">
//         <div className="flex items-start w-full capitalize pt-10 justify-center">
//           <ul className="flex items-start space-x-3 ">
//             {["HOME", "ABOUT", "SERVICES", "PORTFOLIO", "CONTACT"].map(
//               (item, index) => (
//                 <li
//                   key={index}
//                   className="text-xl text-white cursor-pointer hover:text-[#F5F19C]"
//                 >
//                   {item}
//                 </li>
//               )
//             )}
//           </ul>

//           {/*
//           <div className="hidden sm:block">
//             <p className="text-2xl pb-8 text-white font_neuemachina">
//               Join our mailing list for <br />
//               the latest updates.
//             </p>
//             <div className="flex items-center gap-6">
//               <input
//                 className="py-4 px-4 text-black placeholder:text-black w-64 outline-none"
//                 type="text"
//                 placeholder="Enter your email address..."
//               />
//               <Button
//                 btnLayout={{ background: "#F5F19C" }}
//                 title="subscribe"
//                 borderColor="border-black"
//               />
//             </div>
//           </div>

//           <ul className="space-y-3">
//             {["Insights", "Newsroom", "Resources", "Contact", "Careers"].map(
//               (item, index) => (
//                 <li
//                   key={index}
//                   className="text-xl text-white cursor-pointer hover:text-[#F5F19C]"
//                 >
//                   {item}
//                 </li>
//               )
//             )}
//           </ul> */}
//         </div>
//         <div className="flex justify-center items-center mt-2">
//           <hr color="white" className="w-[50vw] h-1 text-white " />
//         </div>
//         {/* <div className="sm:hidden block mt-14">
//           <p className="text-xl pb-8 text-white font_neuemachina text-center">
//             Join our mailing list for <br />
//             the latest updates.
//           </p>
//           <div className="flex flex-col items-center gap-6">
//             <input
//               className="py-4 px-4 text-black placeholder:text-black w-64 outline-none"
//               type="text"
//               placeholder="Enter your email address..."
//             />
//             <Button
//               btnLayout={{ background: "#F5F19C" }}
//               title="subscribe"
//               borderColor="border-black"
//             />
//           </div>
//         </div> */}

// <div
//   ref={logoRef}
//   className="absolute -bottom-20 sm:-bottom-full rotate-45 w-full left-0 px-14"
// >
//   <Logo width="100%" height="100%" />
// </div>

//         <div className="absolute left-0 bottom-0 w-full px-14 bg-black">
//           <div className="flex flex-col sm:flex-row sm:justify-between justify-start sm:items-center border-t-2 py-10">
//             <ul className="flex flex-col sm:flex-row sm:items-center justify-start gap-5 capitalize">
//               {["privacy policy", "terms of use", "trust"].map(
//                 (item, index) => (
//                   <li
//                     key={index}
//                     className="text-sm text-white hover:text-[#F5F19C] underline underline-offset-4 hover:no-underline"
//                   >
//                     <span className="link link--metis">{item}</span>
//                   </li>
//                 )
//               )}
//             </ul>
//             <p className="copyright_text text-white text-sm cursor-pointer sm:my-0 my-10 hover:text-[#F5F19C]">
//               © {new Date().getFullYear()} Mahtab-Tech. All rights reserved.
//             </p>
//             <ul className="flex items-center gap-5">
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-facebook-circle-fill"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-instagram-line"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-twitter-x-line"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-github-fill"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-linkedin-box-fill"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-youtube-fill"></i>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-base font-normal"
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

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-8 md:px-12 py-8 md:py-12 font-sans animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-6 md:mb-0">
          <h2 className="text-2xl font-normal hover:scale-105 transition-transform duration-300">
            MahtabTech
          </h2>

          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              {[
                "Services",
                "Approach",
                "Benefits",
                "Our work",
                "FAQs",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <FlipLink href="#">{item}</FlipLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="text-sm leading-relaxed">
          <FlipLink href="mailto:contact@mahtabtech.com">
            contact@mahtabtech.com
          </FlipLink>
          <br />
          <span>Lahore, Pakistan</span>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <ul className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Use", "Trust & Safety"].map(
              (item, index) => (
                <li key={index}>
                  <FlipLink href="#">{item}</FlipLink>
                </li>
              )
            )}
          </ul>

          <p className="text-xs order-3 md:order-2 md:mr-32">
            © {new Date().getFullYear()} MahtabTech. All rights reserved.
          </p>

          <ul className="flex items-center gap-5 order-2 md:order-3">
            {[
              {
                icon: "ri-facebook-circle-fill",
                link: "https://facebook.com/mahtabtech",
              },
              {
                icon: "ri-instagram-line",
                link: "https://instagram.com/mahtabtech",
              },
              {
                icon: "ri-github-fill",
                link: "https://github.com/Mahtab-Syed",
              },
              {
                icon: "ri-linkedin-box-fill",
                link: "https://www.linkedin.com/in/mahtab-ahmad-8ba27734a/",
              },
            ].map((social, index) => (
              <li key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#a3a3a3] hover:text-[#fff] transition-duration-300"
                >
                  <i className={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
