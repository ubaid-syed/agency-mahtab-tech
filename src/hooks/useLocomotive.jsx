// import { useGSAP } from "@gsap/react";
// import LocomotiveScroll from "locomotive-scroll";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import {
//   faviconBlack,
//   faviconSalmon,
//   faviconSky,
//   faviconWhite,
// } from "../config/favicon";
// import { useEffect, useState, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const useLocomotive = (start) => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   console.log("🚀 ~ useLocomotive ~ currentIndex:", currentIndex);

//   const locoScrollRef = useRef(null);

//   useGSAP(() => {
//     if (!start) return;

//     const scrollEl = document.querySelector("main");

//     locoScrollRef.current = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       touchMultiplier: 5,
//       tablet: { smooth: true },
//       smartphone: { smooth: true },
//     });

//     locoScrollRef.current.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(scrollEl, {
//       scrollTop(value) {
//         if (locoScrollRef.current) {
//           return arguments.length
//             ? locoScrollRef.current.scrollTo(value, {
//                 duration: 0,
//                 disableLerp: true,
//               })
//             : locoScrollRef.current.scroll.instance.scroll.y;
//         }
//         return null;
//       },
//       scrollLeft(value) {
//         if (locoScrollRef.current) {
//           return arguments.length
//             ? locoScrollRef.current.scrollTo(value, {
//                 duration: 0,
//                 disableLerp: true,
//               })
//             : locoScrollRef.current.scroll.instance.scroll.x;
//         }
//         return null;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: scrollEl.style.transform ? "transform" : "fixed",
//     });

//     const lsUpdate = () => {
//       if (locoScrollRef.current) {
//         locoScrollRef.current.update();
//       }
//     };

//     ScrollTrigger.defaults({ scroller: scrollEl });

//     ScrollTrigger.defaults({
//       scroller:
//         document.documentElement.classList.contains("has-scroll-smooth") &&
//         scrollEl,
//     });

//     ScrollTrigger.addEventListener("refresh", lsUpdate);
//     ScrollTrigger.refresh();

//     const favicon = document.querySelector(".favicon");

//     const sections = [
//       { id: "hero__section", favicon: faviconBlack },
//       { id: "craft__sky__section", favicon: faviconSky },
//       { id: "real__work__section", favicon: faviconSalmon },
//       { id: "team__section", favicon: faviconWhite },
//     ];

//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.17,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const section = sections.find((sec) => sec.id === entry.target.id);
//           if (section) {
//             favicon.href = section.favicon;
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     sections.forEach((section) => {
//       const element = document.getElementById(section.id);
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     return () => {
//       locoScrollRef.current.destroy();
//       ScrollTrigger.removeEventListener("refresh", lsUpdate);
//       observer.disconnect();
//     };
//   }, [start]);

//   useEffect(() => {
//     const pages = [
//       "#hero__section",
//       "#craft__sky__section",
//       "#real__work__section",
//       "#team__section",
//     ];

//     const handleClick = () => {
//       if (!locoScrollRef.current) return;
//       // console.log("🚀 ~ handleClick ~ currentIndex:", currentIndex);
//       // console.log(pages[currentIndex]);
//       locoScrollRef.current.scrollTo(`${pages[currentIndex]}`, {
//         duration: 1,
//         easing: [0.42, 0, 0.58, 1],
//       });
//       setCurrentIndex((prevIndex) => {
//         if (prevIndex < pages.length - 1) {
//           return prevIndex + 1;
//         } else {
//           return 0;
//         }
//       });
//     };

//     // const btnDown = document.querySelector('.btn_down');
//     // btnDown.addEventListener('click', handleClick);

//     // return () => {
//     //     btnDown.removeEventListener('click', handleClick);
//     // };
//   }, [currentIndex]);
// };

// export default useLocomotive;

// import { useGSAP } from "@gsap/react";
// import LocomotiveScroll from "locomotive-scroll";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import {
//   faviconBlack,
//   faviconSalmon,
//   faviconSky,
//   faviconWhite,
// } from "../config/favicon";
// import { useEffect, useState, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const useLocomotive = (start) => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const locoScrollRef = useRef(null);

//   useGSAP(() => {
//     if (!start) return;

//     // Get main scroll container
//     const scrollEl = document.querySelector("main");

//     // Initialize Locomotive Scroll with responsive settings
//     locoScrollRef.current = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       multiplier: 1,
//       touchMultiplier: 2.5,
//       lerp: 0.08,
//       tablet: {
//         smooth: true,
//         breakpoint: 1024,
//         multiplier: 0.9,
//       },
//       smartphone: {
//         smooth: true,
//         breakpoint: 768,
//         multiplier: 0.8,
//       },
//       reloadOnContextChange: true,
//       resetNativeScroll: true,
//     });

//     // Update ScrollTrigger on scroll
//     locoScrollRef.current.on("scroll", ScrollTrigger.update);

//     // Setup ScrollTrigger proxy
//     ScrollTrigger.scrollerProxy(scrollEl, {
//       scrollTop(value) {
//         if (locoScrollRef.current) {
//           return arguments.length
//             ? locoScrollRef.current.scrollTo(value, {
//                 duration: 0,
//                 disableLerp: true,
//               })
//             : locoScrollRef.current.scroll.instance.scroll.y;
//         }
//         return null;
//       },
//       scrollLeft(value) {
//         if (locoScrollRef.current) {
//           return arguments.length
//             ? locoScrollRef.current.scrollTo(value, {
//                 duration: 0,
//                 disableLerp: true,
//               })
//             : locoScrollRef.current.scroll.instance.scroll.x;
//         }
//         return null;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: scrollEl.style.transform ? "transform" : "fixed",
//     });

//     // Update Locomotive Scroll
//     const lsUpdate = () => {
//       if (locoScrollRef.current) {
//         locoScrollRef.current.update();
//       }
//     };

//     // Set ScrollTrigger defaults
//     ScrollTrigger.defaults({
//       scroller: scrollEl,
//       markers: false,
//     });

//     ScrollTrigger.addEventListener("refresh", lsUpdate);
//     ScrollTrigger.refresh();

//     // Favicon handling
//     const favicon = document.querySelector(".favicon");

//     const sections = [
//       { id: "hero__section", favicon: faviconBlack },
//       { id: "craft__sky__section", favicon: faviconSky },
//       { id: "real__work__section", favicon: faviconSalmon },
//       { id: "team__section", favicon: faviconWhite },
//     ];

//     // Intersection Observer for section detection
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: [0.15, 0.5, 0.85], // Multiple thresholds for better accuracy
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
//           const section = sections.find((sec) => sec.id === entry.target.id);
//           if (section && favicon) {
//             favicon.href = section.favicon;
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     sections.forEach((section) => {
//       const element = document.getElementById(section.id);
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     // Handle resize events
//     const handleResize = () => {
//       if (locoScrollRef.current) {
//         locoScrollRef.current.update();
//         ScrollTrigger.refresh();
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       if (locoScrollRef.current) {
//         locoScrollRef.current.destroy();
//       }
//       ScrollTrigger.removeEventListener("refresh", lsUpdate);
//       observer.disconnect();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [start]);

//   useEffect(() => {
//     const pages = [
//       "#hero__section",
//       "#craft__sky__section",
//       "#real__work__section",
//       "#team__section",
//     ];

//     const handleClick = () => {
//       if (!locoScrollRef.current) return;

//       locoScrollRef.current.scrollTo(pages[currentIndex], {
//         duration: 1.5,
//         easing: [0.25, 0.1, 0.25, 1.0],
//         offset: -50,
//       });

//       setCurrentIndex((prevIndex) =>
//         prevIndex < pages.length - 1 ? prevIndex + 1 : 0
//       );
//     };

//     const btnDown = document.querySelector(".btn_down");
//     if (btnDown) {
//       btnDown.addEventListener("click", handleClick);
//       return () => btnDown.removeEventListener("click", handleClick);
//     }
//   }, [currentIndex]);

//   return locoScrollRef.current;
// };

// export default useLocomotive;
// import { useGSAP } from "@gsap/react";
// import LocomotiveScroll from "locomotive-scroll";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import {
//   faviconBlack,
//   faviconSalmon,
//   faviconSky,
//   faviconWhite,
// } from "../config/favicon";
// import { useEffect, useState, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const useLocomotive = (start) => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const locoScrollRef = useRef(null);

//   useGSAP(() => {
//     if (!start) return;

//     // Get main scroll container
//     const scrollEl = document.querySelector("main");

//     // Initialize Locomotive Scroll with optimized mobile settings
//     locoScrollRef.current = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       multiplier: 1,
//       touchMultiplier: 2,
//       lerp: 0.05,
//       tablet: {
//         smooth: true,
//         breakpoint: 1024,
//         multiplier: 1,
//         touchMultiplier: 2,
//       },
//       smartphone: {
//         smooth: true,
//         breakpoint: 768,
//         multiplier: 1,
//         touchMultiplier: 2,
//       },
//       reloadOnContextChange: true,
//       resetNativeScroll: false,
//     });

//     // Update ScrollTrigger on scroll
//     locoScrollRef.current.on("scroll", ScrollTrigger.update);

//     // Setup ScrollTrigger proxy with improved mobile handling
//     ScrollTrigger.scrollerProxy(scrollEl, {
//       scrollTop(value) {
//         if (locoScrollRef.current) {
//           return arguments.length
//             ? locoScrollRef.current.scrollTo(value, {
//                 duration: 0,
//                 disableLerp: true,
//               })
//             : locoScrollRef.current.scroll.instance.scroll.y;
//         }
//         return null;
//       },
//       scrollLeft(value) {
//         if (locoScrollRef.current) {
//           return arguments.length
//             ? locoScrollRef.current.scrollTo(value, {
//                 duration: 0,
//                 disableLerp: true,
//               })
//             : locoScrollRef.current.scroll.instance.scroll.x;
//         }
//         return null;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: scrollEl.style.transform ? "transform" : "fixed",
//     });

//     // Update Locomotive Scroll
//     const lsUpdate = () => {
//       if (locoScrollRef.current) {
//         locoScrollRef.current.update();
//       }
//     };

//     // Set ScrollTrigger defaults
//     ScrollTrigger.defaults({
//       scroller: scrollEl,
//       markers: false,
//     });

//     ScrollTrigger.addEventListener("refresh", lsUpdate);
//     ScrollTrigger.refresh();

//     // Favicon handling
//     const favicon = document.querySelector(".favicon");

//     const sections = [
//       { id: "hero__section", favicon: faviconBlack },
//       { id: "craft__sky__section", favicon: faviconSky },
//       { id: "real__work__section", favicon: faviconSalmon },
//       { id: "team__section", favicon: faviconWhite },
//     ];

//     // Intersection Observer with optimized thresholds
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: [0.2, 0.5, 0.8],
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
//           const section = sections.find((sec) => sec.id === entry.target.id);
//           if (section && favicon) {
//             favicon.href = section.favicon;
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     sections.forEach((section) => {
//       const element = document.getElementById(section.id);
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     // Enhanced resize handler
//     const handleResize = () => {
//       if (locoScrollRef.current) {
//         setTimeout(() => {
//           locoScrollRef.current.update();
//           ScrollTrigger.refresh();
//         }, 100);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       if (locoScrollRef.current) {
//         locoScrollRef.current.destroy();
//       }
//       ScrollTrigger.removeEventListener("refresh", lsUpdate);
//       observer.disconnect();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [start]);

//   useEffect(() => {
//     const pages = [
//       "#hero__section",
//       "#craft__sky__section",
//       "#real__work__section",
//       "#team__section",
//     ];

//     const handleClick = () => {
//       if (!locoScrollRef.current) return;

//       locoScrollRef.current.scrollTo(pages[currentIndex], {
//         duration: 1.5,
//         easing: [0.25, 0.1, 0.25, 1.0],
//         offset: -50,
//       });

//       setCurrentIndex((prevIndex) =>
//         prevIndex < pages.length - 1 ? prevIndex + 1 : 0
//       );
//     };

//     const btnDown = document.querySelector(".btn_down");
//     if (btnDown) {
//       btnDown.addEventListener("click", handleClick);
//       return () => btnDown.removeEventListener("click", handleClick);
//     }
//   }, [currentIndex]);

//   return locoScrollRef.current;
// };

// export default useLocomotive;
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  faviconBlack,
  faviconSalmon,
  faviconSky,
  faviconWhite,
} from "../config/favicon";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const useLocomotive = (start) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const locoScrollRef = useRef(null);

  useGSAP(() => {
    if (!start) return;

    // Get main scroll container
    const scrollEl = document.querySelector("main");
    if (!scrollEl) return;

    // Destroy previous instance if exists (for route changes)
    if (locoScrollRef.current) {
      try {
        locoScrollRef.current.destroy();
      } catch (e) {}
      locoScrollRef.current = null;
    }

    // Initialize Locomotive Scroll
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      touchMultiplier: 2,
      lerp: 0.05,
      tablet: {
        smooth: true,
        breakpoint: 1024,
        multiplier: 1,
        touchMultiplier: 2,
      },
      smartphone: {
        smooth: true,
        breakpoint: 768,
        multiplier: 1,
        touchMultiplier: 2,
      },
      reloadOnContextChange: true,
      resetNativeScroll: true,
    });

    // Update ScrollTrigger on scroll
    locoScrollRef.current.on("scroll", ScrollTrigger.update);

    // Setup ScrollTrigger proxy
    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScrollRef.current) {
          if (arguments.length) {
            locoScrollRef.current.scrollTo(value, { duration: 0, disableLerp: true });
          }
          return locoScrollRef.current.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScrollRef.current) {
          if (arguments.length) {
            locoScrollRef.current.scrollTo(value, { duration: 0, disableLerp: true });
          }
          return locoScrollRef.current.scroll.instance.scroll.x;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    // Update Locomotive Scroll on refresh
    const lsUpdate = () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.update();
      }
    };

    ScrollTrigger.defaults({
      scroller: scrollEl,
      markers: false,
    });

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    // Favicon handling
    const favicon = document.querySelector(".favicon");
    const sections = [
      { id: "hero__section", favicon: faviconBlack },
      { id: "craft__sky__section", favicon: faviconSky },
      { id: "real__work__section", favicon: faviconSalmon },
      { id: "team__section", favicon: faviconWhite },
    ];

    // Intersection Observer for favicon
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0.2, 0.5, 0.8],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const section = sections.find((sec) => sec.id === entry.target.id);
          if (section && favicon) {
            favicon.href = section.favicon;
          }
        }
      });
    };

    const observer = new window.IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Resize handler
    const handleResize = () => {
      if (locoScrollRef.current) {
        const currentScroll = locoScrollRef.current.scroll.instance.scroll.y;
        setTimeout(() => {
          locoScrollRef.current.update();
          ScrollTrigger.refresh();
          locoScrollRef.current.scrollTo(currentScroll, {
            duration: 0,
            disableLerp: true,
          });
        }, 100);
      }
    };

    window.addEventListener("resize", handleResize);

    // Fix: Update Locomotive on route/page change
    const handleRouteChange = () => {
      setTimeout(() => {
        if (locoScrollRef.current) {
          locoScrollRef.current.update();
          ScrollTrigger.refresh();
        }
      }, 100);
    };
    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("pushstate", handleRouteChange);
    window.addEventListener("replacestate", handleRouteChange);

    // Cleanup
    return () => {
      if (locoScrollRef.current) {
        try {
          locoScrollRef.current.destroy();
        } catch (e) {}
        locoScrollRef.current = null;
      }
      ScrollTrigger.removeEventListener("refresh", lsUpdate);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("pushstate", handleRouteChange);
      window.removeEventListener("replacestate", handleRouteChange);
    };
  }, [start]);

  // Fix: Update Locomotive on route change (React Router)
  useEffect(() => {
    if (!start) return;
    setTimeout(() => {
      if (locoScrollRef.current) {
        locoScrollRef.current.update();
        ScrollTrigger.refresh();
      }
    }, 100);
  }, [start]);

  // Down button scroll
  useEffect(() => {
    const pages = [
      "#hero__section",
      "#craft__sky__section",
      "#real__work__section",
      "#team__section",
    ];

    const handleClick = () => {
      if (!locoScrollRef.current) return;

      locoScrollRef.current.scrollTo(pages[currentIndex], {
        duration: 1.5,
        easing: [0.25, 0.1, 0.25, 1.0],
        offset: -50,
      });

      setCurrentIndex((prevIndex) =>
        prevIndex < pages.length - 1 ? prevIndex + 1 : 0
      );
    };

    const btnDown = document.querySelector(".btn_down");
    if (btnDown) {
      btnDown.addEventListener("click", handleClick);
      return () => btnDown.removeEventListener("click", handleClick);
    }
  }, [currentIndex]);

  return locoScrollRef.current;
};

export default useLocomotive;
// import { useGSAP } from "@gsap/react";
// import LocomotiveScroll from "locomotive-scroll";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import {
//   faviconBlack,
//   faviconSalmon,
//   faviconSky,
//   faviconWhite,
// } from "../config/favicon";
// import { useEffect, useState, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// const useLocomotive = (start) => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const locoScrollRef = useRef(null);

//   useGSAP(() => {
//     if (!start) return;

//     // Get main scroll container
//     const scrollEl = document.querySelector("main");

//     // Initialize Locomotive Scroll with optimized mobile settings
//     locoScrollRef.current = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       multiplier: 1,
//       touchMultiplier: 2,
//       lerp: 0.05,
//       tablet: {
//         smooth: true,
//         breakpoint: 1024,
//         multiplier: 1,
//         touchMultiplier: 2,
//       },
//       smartphone: {
//         smooth: true,
//         breakpoint: 768,
//         multiplier: 1,
//         touchMultiplier: 2,
//       },
//       reloadOnContextChange: true,
//       resetNativeScroll: true, // Changed to true to fix scroll reset issues
//     });

//     // Update ScrollTrigger on scroll
//     locoScrollRef.current.on("scroll", ScrollTrigger.update);

//     // Setup ScrollTrigger proxy with improved mobile handling
//     ScrollTrigger.scrollerProxy(scrollEl, {
//       scrollTop(value) {
//         if (locoScrollRef.current) {
//           return arguments.length
//             ? locoScrollRef.current.scrollTo(value, {
//                 duration: 0,
//                 disableLerp: true,
//               })
//             : locoScrollRef.current.scroll.instance.scroll.y;
//         }
//         return null;
//       },
//       scrollLeft(value) {
//         if (locoScrollRef.current) {
//           return arguments.length
//             ? locoScrollRef.current.scrollTo(value, {
//                 duration: 0,
//                 disableLerp: true,
//               })
//             : locoScrollRef.current.scroll.instance.scroll.x;
//         }
//         return null;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       pinType: scrollEl.style.transform ? "transform" : "fixed",
//     });

//     // Update Locomotive Scroll
//     const lsUpdate = () => {
//       if (locoScrollRef.current) {
//         locoScrollRef.current.update();
//       }
//     };

//     // Set ScrollTrigger defaults
//     ScrollTrigger.defaults({
//       scroller: scrollEl,
//       markers: false,
//     });

//     ScrollTrigger.addEventListener("refresh", lsUpdate);
//     ScrollTrigger.refresh();

//     // Favicon handling
//     const favicon = document.querySelector(".favicon");

//     const sections = [
//       { id: "hero__section", favicon: faviconBlack },
//       { id: "craft__sky__section", favicon: faviconSky },
//       { id: "real__work__section", favicon: faviconSalmon },
//       { id: "team__section", favicon: faviconWhite },
//     ];

//     // Intersection Observer with optimized thresholds
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: [0.2, 0.5, 0.8],
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
//           const section = sections.find((sec) => sec.id === entry.target.id);
//           if (section && favicon) {
//             favicon.href = section.favicon;
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     sections.forEach((section) => {
//       const element = document.getElementById(section.id);
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     // Enhanced resize handler with scroll position restoration
//     const handleResize = () => {
//       if (locoScrollRef.current) {
//         const currentScroll = locoScrollRef.current.scroll.instance.scroll.y;
//         setTimeout(() => {
//           locoScrollRef.current.update();
//           ScrollTrigger.refresh();
//           locoScrollRef.current.scrollTo(currentScroll, {
//             duration: 0,
//             disableLerp: true
//           });
//         }, 100);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       if (locoScrollRef.current) {
//         locoScrollRef.current.destroy();
//       }
//       ScrollTrigger.removeEventListener("refresh", lsUpdate);
//       observer.disconnect();
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [start]);

//   useEffect(() => {
//     const pages = [
//       "#hero__section",
//       "#craft__sky__section",
//       "#real__work__section",
//       "#team__section",
//     ];

//     const handleClick = () => {
//       if (!locoScrollRef.current) return;

//       locoScrollRef.current.scrollTo(pages[currentIndex], {
//         duration: 1.5,
//         easing: [0.25, 0.1, 0.25, 1.0],
//         offset: -50,
//       });

//       setCurrentIndex((prevIndex) =>
//         prevIndex < pages.length - 1 ? prevIndex + 1 : 0
//       );
//     };

//     const btnDown = document.querySelector(".btn_down");
//     if (btnDown) {
//       btnDown.addEventListener("click", handleClick);
//       return () => btnDown.removeEventListener("click", handleClick);
//     }
//   }, [currentIndex]);

//   return locoScrollRef.current;
// };

// export default useLocomotive;
