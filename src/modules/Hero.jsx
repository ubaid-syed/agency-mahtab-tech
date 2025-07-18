// import React, { useEffect, useRef } from "react";
// import Video from "../components/Hero/Video";
// import HeroOverlay from "../components/Hero/HeroOverlay";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { splitText2 } from "../utils/splitText";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const headerRef = useRef(null);
//   const heroSubtitleRef = useRef(null);

//   useEffect(() => {
//     const subtitleElement = heroSubtitleRef.current;
//     if (subtitleElement) {
//       splitText2(
//         "We build big ideas. \n Software. Apps. Tools. \n For real people. Real \n lives.",
//         subtitleElement
//       );
//       return () => {
//         subtitleElement.innerHTML = "";
//       };
//     }
//   }, []);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial setup
//       gsap.set(".hero_rows", { scale: 20 });

//       // Animate subtitle spans
//       const spans = gsap.utils.toArray("span", heroSubtitleRef.current);
//       gsap.from(spans, {
//         opacity: 0,
//         x: -10,
//         delay: 1,
//         stagger: 0.03,
//         duration: 0.1,
//         ease: "power2",
//       });

//       // Main timeline animation
//       const tl = gsap.timeline({
//         ease: "power2",
//         scrollTrigger: {
//           trigger: headerRef.current,
//           start: "top top",
//           end: "250%",
//           scrub: 1,
//           pin: true,
//           onEnter: () => document.body.setAttribute("theme", "black"),
//           onEnterBack: () => document.body.setAttribute("theme", "black"),
//         },
//       });

//       // Animation sequence
//       tl.to(
//         ".vid_cont",
//         {
//           "--clip": "3%",
//         },
//         "a"
//       )
//         .to(
//           ".hero_rows",
//           {
//             scale: 1,
//             translateY: "-33%",
//           },
//           "a"
//         )
//         .from(
//           ".hero_overlay_title h3 span",
//           {
//             opacity: 0,
//             stagger: 0.01,
//             delay: -0.01,
//           },
//           "a"
//         )
//         .to(".vid_cont", {
//           opacity: 0,
//           display: "none",
//           delay: -0.6,
//         })
//         .to(
//           ".hero_row_lft",
//           {
//             translateX: window.innerWidth > 640 ? "20%" : "40%",
//             duration: 3,
//             ease: "power4",
//             stagger: 0.08,
//           },
//           "b"
//         )
//         .to(
//           ".hero_row_rgt",
//           {
//             translateX: window.innerWidth > 640 ? "-40%" : "-80%",
//             duration: 3,
//             ease: "power4",
//             stagger: 0.08,
//           },
//           "b"
//         )
//         .to(
//           ".hero_subtitle",
//           {
//             opacity: 0,
//             duration: 1,
//             delay: 2,
//           },
//           "b"
//         );

//       ScrollTrigger.refresh();
//     }, headerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <header
//       id="hero__section"
//       ref={headerRef}
//       className="w-full h-screen relative"
//     >
//       <Video />
//       <section>
//         <div className="absolute sm:bottom-10 bottom-20 z-20 left-10 text-white">
//           <p ref={heroSubtitleRef} className="hero_subtitle"></p>
//         </div>
//       </section>
//       <HeroOverlay />
//     </header>
//   );
// };

// export default Hero;
import React, { useEffect, useRef } from "react";
import Video from "../components/Hero/Video";
import HeroOverlay from "../components/Hero/HeroOverlay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitText2 } from "../utils/splitText";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headerRef = useRef(null);
  const heroSubtitleRef = useRef(null);

  useEffect(() => {
    const subtitleElement = heroSubtitleRef.current;
    if (subtitleElement) {
      splitText2(
        "We build big ideas. \n Software. Apps. Tools. \n For real people. Real \n lives.",
        subtitleElement
      );
      return () => {
        subtitleElement.innerHTML = "";
      };
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(".hero_rows", { scale: 20 });
      gsap.set(".hero_subtitle", { color: "#000000" }); // Set initial black color

      // Animate subtitle spans
      const spans = gsap.utils.toArray("span", heroSubtitleRef.current);
      gsap.from(spans, {
        opacity: 0,
        x: -10,
        delay: 1,
        stagger: 0.03,
        duration: 0.1,
        ease: "power2",
      });

      // Main timeline animation
      const tl = gsap.timeline({
        ease: "power2",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "250%",
          scrub: 1,
          pin: true,
          onEnter: () => document.body.setAttribute("theme", "black"),
          onEnterBack: () => document.body.setAttribute("theme", "black"),
        },
      });

      // Animation sequence
      tl.to(
        ".vid_cont",
        {
          "--clip": "3%",
        },
        "a"
      )
        .to(
          ".hero_rows",
          {
            scale: 1,
            translateY: "-33%",
          },
          "a"
        )
        .to(
          ".hero_subtitle",
          {
            color: "#ffffff", // Change to white on scroll
            duration: 0.5,
          },
          "a"
        )
        .from(
          ".hero_overlay_title h3 span",
          {
            opacity: 0,
            stagger: 0.01,
            delay: -0.01,
          },
          "a"
        )
        .to(".vid_cont", {
          opacity: 0,
          display: "none",
          delay: -0.6,
        })
        .to(
          ".hero_row_lft",
          {
            translateX: window.innerWidth > 640 ? "20%" : "40%",
            duration: 3,
            ease: "power4",
            stagger: 0.08,
          },
          "b"
        )
        .to(
          ".hero_row_rgt",
          {
            translateX: window.innerWidth > 640 ? "-40%" : "-80%",
            duration: 3,
            ease: "power4",
            stagger: 0.08,
          },
          "b"
        )
        .to(
          ".hero_subtitle",
          {
            opacity: 0,
            duration: 1,
            delay: 2,
          },
          "b"
        );

      ScrollTrigger.refresh();
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      id="hero__section"
      ref={headerRef}
      className="w-full h-screen relative"
    >
      <Video />
      <section>
        <div className="absolute sm:bottom-10 bottom-20 z-20 left-10 text-white">
          <p ref={heroSubtitleRef} className="hero_subtitle"></p>
        </div>
      </section>
      <HeroOverlay />
    </header>
  );
};

export default Hero;
