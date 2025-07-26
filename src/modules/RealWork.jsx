import React, { useEffect, useRef, useState } from "react";
import Slide1 from "../components/RealWork/Slide1";
import Slide2 from "../components/RealWork/Slide2";
import Slide3 from "../components/RealWork/Slide3";
import Slide4 from "../components/RealWork/Slide4";
import Button from "../components/global/Button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const RealWork = () => {
  const workRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let slides = gsap.utils.toArray(".slide");

      let scrollTween = gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: workRef.current,
          // end: '+=3500',
          start: window.innerWidth > 640 ? "top 15%" : "top top",
          // end: () => "+=" + window.innerWidth * (slides.length - 1),
          end: () => "+=" + window.innerWidth * (slides.length - 1),
          scrub: 1,
          pin: true,
          // markers: true,
          // onEnter: () => {
          //   document.body.setAttribute("theme", "black");
          // },
          // onEnterBack: () => {
          //   document.body.setAttribute("theme", "black");
          // },
        },
      });

      (() => {
        gsap.from(".slide1_heading h1", {
          y: 50,
          scale: 1.13,
          opacity: 0,
          stagger: 0.01,
          rotateX: "-90deg",
          scrollTrigger: {
            trigger: ".slide1_heading",
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 20%",
            // markers: true,
          },
        });

        gsap.to(".slide2_elem2", {
          x: -70,
          scrollTrigger: {
            trigger: ".slide2_elem2",
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 20%",
            // markers: true,
            scrub: 5,
          },
        });

        gsap.from(".slide2_elem3", {
          x: -70,
          scrollTrigger: {
            trigger: ".slide2_elem3",
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 20%",
            // markers: true,
            scrub: 5,
          },
        });

        gsap.to(".slide2_elem4", {
          x: 70,
          scrollTrigger: {
            trigger: ".slide2_elem4",
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 20%",
            // markers: true,
            scrub: 5,
          },
        });

        gsap.to(".slide3_elem1", {
          x: 150,
          scrollTrigger: {
            trigger: ".slide2_elem4",
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 20%",
            // markers: true,
            scrub: 5,
          },
        });

        gsap.to(".slide3_elem2", {
          x: 195,
          scrollTrigger: {
            trigger: ".slide2_elem4",
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 20%",
            // markers: true,
            scrub: 5,
          },
        });

        gsap.to(".slide4_elem1", {
          x: window.innerWidth > 640 ? -100 : -300,
          scrollTrigger: {
            trigger: ".slide4_elem1",
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 20%",
            // markers: true,
            scrub: 5,
          },
        });

        gsap.to(".slide4_elem2", {
          x: window.innerWidth > 640 ? -50 : -600,
          scrollTrigger: {
            trigger: ".slide4_elem2",
            containerAnimation: scrollTween,
            start: "left 80%",
            end: "left 20%",
            // markers: true,
            scrub: 5,
          },
        });
      })();

      ScrollTrigger.refresh();
    }, workRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      // id="real__work__section"
      ref={workRef}
      className="real_work w-full relative h-full"
    >
      <div className="slides flex flex-nowrap w-[300%] sm:w-full h-full">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
      </div>
      <div className="absolute bottom-14 left-14">
        <button class=" hidden md:block relative  text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span class="relative">
              <a
                href="https://mahtabtech.com/meetmahtab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meet Mahtab
              </a>
            </span>
          </span>
          <span
            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </div>
    </section>
  );
};

export default RealWork;
// import React, { useEffect, useRef, useState } from "react";
// import Slide1 from "../components/RealWork/Slide1";
// import Slide2 from "../components/RealWork/Slide2";
// import Slide3 from "../components/RealWork/Slide3";
// import Slide4 from "../components/RealWork/Slide4";
// import Button from "../components/global/Button";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const RealWork = () => {
//   const workRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       let slides = gsap.utils.toArray(".slide");

//       let scrollTween = gsap.to(slides, {
//         xPercent: -100 * (slides.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: workRef.current,
//           // end: '+=3500',
//           start: window.innerWidth > 640 ? "top 15%" : "top top",
//           // end: () => "+=" + window.innerWidth * (slides.length - 1),
//           end: () => "+=" + window.innerWidth * (slides.length - 1),
//           scrub: 1,
//           pin: true,
//           // markers: true,
//           // onEnter: () => {
//           //   document.body.setAttribute("theme", "black");
//           // },
//           // onEnterBack: () => {
//           //   document.body.setAttribute("theme", "black");
//           // },
//         },
//       });

//       (() => {
//         gsap.from(".slide1_heading h1", {
//           y: 50,
//           scale: 1.13,
//           opacity: 0,
//           stagger: 0.01,
//           rotateX: "-90deg",
//           scrollTrigger: {
//             trigger: ".slide1_heading",
//             containerAnimation: scrollTween,
//             start: "left 80%",
//             end: "left 20%",
//             // markers: true,
//           },
//         });

//         gsap.to(".slide2_elem2", {
//           x: -70,
//           scrollTrigger: {
//             trigger: ".slide2_elem2",
//             containerAnimation: scrollTween,
//             start: "left 80%",
//             end: "left 20%",
//             // markers: true,
//             scrub: 5,
//           },
//         });

//         gsap.from(".slide2_elem3", {
//           x: -70,
//           scrollTrigger: {
//             trigger: ".slide2_elem3",
//             containerAnimation: scrollTween,
//             start: "left 80%",
//             end: "left 20%",
//             // markers: true,
//             scrub: 5,
//           },
//         });

//         gsap.to(".slide2_elem4", {
//           x: 70,
//           scrollTrigger: {
//             trigger: ".slide2_elem4",
//             containerAnimation: scrollTween,
//             start: "left 80%",
//             end: "left 20%",
//             // markers: true,
//             scrub: 5,
//           },
//         });

//         gsap.to(".slide3_elem1", {
//           x: 150,
//           scrollTrigger: {
//             trigger: ".slide2_elem4",
//             containerAnimation: scrollTween,
//             start: "left 80%",
//             end: "left 20%",
//             // markers: true,
//             scrub: 5,
//           },
//         });

//         gsap.to(".slide3_elem2", {
//           x: 195,
//           scrollTrigger: {
//             trigger: ".slide2_elem4",
//             containerAnimation: scrollTween,
//             start: "left 80%",
//             end: "left 20%",
//             // markers: true,
//             scrub: 5,
//           },
//         });

//         gsap.to(".slide4_elem1", {
//           x: window.innerWidth > 640 ? -100 : -300,
//           scrollTrigger: {
//             trigger: ".slide4_elem1",
//             containerAnimation: scrollTween,
//             start: "left 80%",
//             end: "left 20%",
//             // markers: true,
//             scrub: 5,
//           },
//         });

//         gsap.to(".slide4_elem2", {
//           x: window.innerWidth > 640 ? -50 : -600,
//           scrollTrigger: {
//             trigger: ".slide4_elem2",
//             containerAnimation: scrollTween,
//             start: "left 80%",
//             end: "left 20%",
//             // markers: true,
//             scrub: 5,
//           },
//         });
//       })();

//       ScrollTrigger.refresh();
//     }, workRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       // id="real__work__section"
//       ref={workRef}
//       className="real_work w-full relative h-full bg-red-700"
//     >
//       <div className="slides flex overflow-hidden flex-nowrap w-[300%] sm:w-full h-full">
//         <Slide1 />
//         <Slide2 />
//         <Slide3 />
//         <Slide4 />
//       </div>
//       <div className="absolute bottom-14 left-14">
//         <button class=" hidden md:block relative  text-lg group">
//           <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//             <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//             <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//             <span class="relative">
//               <a
//                 href="https://mahtabtech.com/meetmahtab/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Meet Mahtab
//               </a>
//             </span>
//           </span>
//           <span
//             class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//             data-rounded="rounded-lg"
//           ></span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default RealWork;
