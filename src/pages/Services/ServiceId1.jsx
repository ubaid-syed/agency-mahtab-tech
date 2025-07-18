import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

// Example work data (replace with your real data)
const workData = [
  {
    id: 1,
    title: "Stellar Portfolio",
    details: {
      summary: "A modern, animated portfolio for a creative agency.",
      description:
        "This project features a smooth horizontal slider, animated transitions, and a Three.js background effect. Built for performance and aesthetics.",
    },
    roles: ["Frontend", "Animation", "UI/UX"],
    links: [
      { text: "Live Site", link: "https://example.com" },
      { text: "GitHub", link: "https://github.com" },
    ],
    cover:
      "https://preview--pixel-perfect-genesis-wp.lovable.app/assets/hero-illustration-Dex7gIuI.jpg",
  },
  {
    id: 1,
    title: "Stellar ",
    details: {
      summary: "A modern, animated portfolio for a creative agency.",
      description:
        "This project features a smooth horizontal slider, animated transitions, and a Three.js background effect. Built for performance and aesthetics.",
    },
    roles: ["Frontend", "Animation", "UI/UX"],
    links: [
      { text: "Live Site", link: "https://example.com" },
      { text: "GitHub", link: "https://github.com" },
    ],
    cover:
      "https://preview--pixel-perfect-genesis-wp.lovable.app/assets/hero-illustration-Dex7gIuI.jpg",
  },
  {
    id: 1,
    title: " Portfolio",
    details: {
      summary: "A modern, animated portfolio for a creative agency.",
      description:
        "This project features a smooth horizontal slider, animated transitions, and a Three.js background effect. Built for performance and aesthetics.",
    },
    roles: ["Frontend", "Animation", "UI/UX"],
    links: [
      { text: "Live Site", link: "https://example.com" },
      { text: "GitHub", link: "https://github.com" },
    ],
    cover:
      "https://preview--pixel-perfect-genesis-wp.lovable.app/assets/hero-illustration-Dex7gIuI.jpg",
  },
  {
    id: 1,
    title: "Stellar Portfolio",
    details: {
      summary: "A modern, animated portfolio for a creative agency.",
      description:
        "This project features a smooth horizontal slider, animated transitions, and a Three.js background effect. Built for performance and aesthetics.",
    },
    roles: ["Frontend", "Animation", "UI/UX"],
    links: [
      { text: "Live Site", link: "https://example.com" },
      { text: "GitHub", link: "https://github.com" },
    ],
    cover:
      "https://preview--pixel-perfect-genesis-wp.lovable.app/assets/hero-illustration-Dex7gIuI.jpg",
  },
  {
    id: 1,
    title: "Stellar Portfolio",
    details: {
      summary: "A modern, animated portfolio for a creative agency.",
      description:
        "This project features a smooth horizontal slider, animated transitions, and a Three.js background effect. Built for performance and aesthetics.",
    },
    roles: ["Frontend", "Animation", "UI/UX"],
    links: [
      { text: "Live Site", link: "https://example.com" },
      { text: "GitHub", link: "https://github.com" },
    ],
    cover:
      "https://preview--pixel-perfect-genesis-wp.lovable.app/assets/hero-illustration-Dex7gIuI.jpg",
  },
  {
    id: 1,
    title: "Stellar Portfolio",
    details: {
      summary: "A modern, animated portfolio for a creative agency.",
      description:
        "This project features a smooth horizontal slider, animated transitions, and a Three.js background effect. Built for performance and aesthetics.",
    },
    roles: ["Frontend", "Animation", "UI/UX"],
    links: [
      { text: "Live Site", link: "https://example.com" },
      { text: "GitHub", link: "https://github.com" },
    ],
    cover:
      "https://preview--pixel-perfect-genesis-wp.lovable.app/assets/hero-illustration-Dex7gIuI.jpg",
  },
  {
    id: 2,
    title: "E-Commerce Redesign",
    details: {
      summary: "A scalable, fast e-commerce platform.",
      description:
        "Complete redesign with a focus on speed, scalability, and mobile-first experience. Includes custom animations and interactive product displays.",
    },
    roles: ["Frontend", "Backend", "Performance"],
    links: [{ text: "Live Site", link: "https://shop.com" }],
    cover: "/assets/imgs/work-back/2/cover.jpg",
  },
  // Add more items as needed
];

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

function getScreenSize(width) {
  if (width < breakpoints.sm) return "xs";
  if (width < breakpoints.md) return "sm";
  if (width < breakpoints.lg) return "md";
  if (width < breakpoints.xl) return "lg";
  if (width < breakpoints["2xl"]) return "xl";
  return "2xl";
}

const responsiveValues = {
  // These values are used for width, height, font, etc. for each breakpoint
  listItem: {
    xs: { width: "95vw", height: "32vh", margin: "2vw 0", borderRadius: "4vw" },
    sm: { width: "90vw", height: "36vh", margin: "2vw 0", borderRadius: "3vw" },
    md: { width: "80vw", height: "40vh", margin: "2vw 0", borderRadius: "2vw" },
    lg: { width: "30vw", height: "50vh", margin: "0 3vw", borderRadius: "1.5vw" },
    xl: { width: "23vw", height: "55vh", margin: "0 3vw", borderRadius: "1.2vw" },
    "2xl": { width: "20vw", height: "60vh", margin: "0 2vw", borderRadius: "1vw" },
  },
  activeListItem: {
    xs: { width: "98vw", height: "38vh", margin: "2vw 0", borderRadius: "4vw" },
    sm: { width: "95vw", height: "42vh", margin: "2vw 0", borderRadius: "3vw" },
    md: { width: "90vw", height: "48vh", margin: "2vw 0", borderRadius: "2vw" },
    lg: { width: "50vw", height: "60vh", margin: "0 8vw 0 5vw", borderRadius: "1.5vw" },
    xl: { width: "50vw", height: "60vh", margin: "0 16vw 0 10vw", borderRadius: "1.2vw" },
    "2xl": { width: "50vw", height: "60vh", margin: "0 16vw 0 10vw", borderRadius: "1vw" },
  },
  detailsPanel: {
    xs: { padding: "0 2vw" },
    sm: { padding: "0 2vw" },
    md: { padding: "0 4vw" },
    lg: { padding: "0 8vw" },
    xl: { padding: "0 14vw" },
    "2xl": { padding: "0 16vw" },
  },
  titleFont: {
    xs: "7vw",
    sm: "8vw",
    md: "7vw",
    lg: "3vw",
    xl: "2.5vw",
    "2xl": "2vw",
  },
  detailsTitleFont: {
    xs: "12vw",
    sm: "10vw",
    md: "8vw",
    lg: "7vw",
    xl: "7vw",
    "2xl": "6vw",
  },
  buttonFont: {
    xs: "3vw",
    sm: "2.5vw",
    md: "2vw",
    lg: "1.3vw",
    xl: "1.1vw",
    "2xl": "1vw",
  },
  indexFont: {
    xs: "3vw",
    sm: "2.5vw",
    md: "2vw",
    lg: "1vw",
    xl: "1vw",
    "2xl": "0.9vw",
  },
  summaryFont: {
    xs: "2.5vw",
    sm: "2vw",
    md: "1.7vw",
    lg: "1.3vw",
    xl: "1.1vw",
    "2xl": "1vw",
  },
  closeFont: {
    xs: "7vw",
    sm: "6vw",
    md: "5vw",
    lg: "3vw",
    xl: "2.5vw",
    "2xl": "2vw",
  },
};

const ServiceId1 = () => {
  const workContainer = useRef(null);
  const container = useRef(null);
  const listContainer = useRef(null);
  const workItems = useRef([]);
  const images = useRef([]);
  const [currentActive, setCurrentActive] = useState(-1);
  const [breakTitleWords, setBreakTitleWords] = useState(false);
  const [screenSize, setScreenSize] = useState(getScreenSize(typeof window !== "undefined" ? window.innerWidth : 1920));
  const [workScrollActive, setWorkScrollActive] = useState(false);

  // Slider state
  const slider = useRef({
    currentMouseX: 0,
    initialMouseX: 0,
    currentPosition: 0,
    targetPosition: 0,
    initialPosition: 0,
    offsetSpeed: 5000,
    lerpSpeed: 0.1,
    animating: false,
  });

  // Responsive handler
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Animate in the work list
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
        },
      }
    );

    // Animate each work item
    workItems.current.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 + i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Slider drag logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!workScrollActive) return;
      slider.current.currentMouseX = e.clientX;
      const diff =
        (slider.current.currentMouseX - slider.current.initialMouseX) * -1;
      slider.current.targetPosition = Math.round(
        slider.current.initialPosition -
          (slider.current.offsetSpeed * (diff / document.body.clientWidth))
      );
    };

    const handleMouseUp = () => {
      setWorkScrollActive(false);
    };

    if (workScrollActive) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [workScrollActive]);

  // Animate slider
  useEffect(() => {
    let raf;
    const animate = () => {
      if (currentActive < 0 && listContainer.current) {
        let endPoint =
          listContainer.current.offsetWidth - document.body.clientWidth;
        if (endPoint < 0) endPoint = listContainer.current.offsetWidth;
        if (slider.current.targetPosition > 0) slider.current.targetPosition = 0;
        if (slider.current.targetPosition <= endPoint * -1)
          slider.current.targetPosition = -endPoint;
      }
      slider.current.currentPosition = lerp(
        slider.current.currentPosition,
        slider.current.targetPosition,
        slider.current.lerpSpeed
      );
      if (listContainer.current) {
        listContainer.current.style.transform = `translate3d(${
          Math.round(slider.current.currentPosition * 100) / 100
        }px, 0px, 0px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [currentActive]);

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  // Slider drag handlers
  const onHold = (e) => {
    e.preventDefault();
    if (
      currentActive >= 0 ||
      workScrollActive ||
      e.target.classList.contains("button")
    )
      return;
    slider.current.initialMouseX = e.clientX;
    slider.current.currentMouseX = e.clientX;
    setWorkScrollActive(true);
    if (listContainer.current) {
      const style = window.getComputedStyle(listContainer.current);
      const matrix = new window.WebKitCSSMatrix(style.transform);
      slider.current.initialPosition = matrix.m41;
    }
  };

  // Toggle active work item
  const toggleActiveItem = (i) => {
    setCurrentActive((prev) => (prev === i ? -1 : i));
    setTimeout(() => setBreakTitleWords(true), 100);
    if (i >= 0 && workItems.current[i] && listContainer.current) {
      slider.current.targetPosition =
        -(
          workItems.current[i].offsetLeft -
          window.innerWidth / 4 +
          window.innerWidth / 10
        );
    }
  };

  // Animate details panel in
  useEffect(() => {
    if (currentActive !== -1) {
      gsap.fromTo(
        ".details-container",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [currentActive]);

  // Responsive helpers
  const getListItemStyle = (active = false) => {
    const bp = screenSize;
    const values = active
      ? responsiveValues.activeListItem[bp]
      : responsiveValues.listItem[bp];
    return {
      height: values.height,
      width: values.width,
      margin: values.margin,
      borderRadius: values.borderRadius,
      transition:
        "width 0.7s cubic-bezier(0.25, 1, 0.5, 1), height 0.7s cubic-bezier(0.25, 1, 0.5, 1), margin 0.8s cubic-bezier(0.25, 1, 0.5, 1), border-radius 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
      minWidth: 0,
      minHeight: 0,
      boxSizing: "border-box",
      display: "inline-flex",
      justifyContent: "flex-end",
      overflow: "hidden",
      position: "relative",
    };
  };

  const getDetailsPanelStyle = () => {
    const bp = screenSize;
    return {
      padding: responsiveValues.detailsPanel[bp].padding,
      boxShadow: "0 0 0 100vmax rgba(16,16,20,0.98)",
    };
  };

  const getTitleFont = () => responsiveValues.titleFont[screenSize];
  const getDetailsTitleFont = () => responsiveValues.detailsTitleFont[screenSize];
  const getButtonFont = () => responsiveValues.buttonFont[screenSize];
  const getIndexFont = () => responsiveValues.indexFont[screenSize];
  const getSummaryFont = () => responsiveValues.summaryFont[screenSize];
  const getCloseFont = () => responsiveValues.closeFont[screenSize];

  // Responsive flex direction for list
  const isMobile = screenSize === "xs" || screenSize === "sm" || screenSize === "md";
  const listFlexDirection = isMobile ? "column" : "row";
  const listHeight = isMobile ? "auto" : "75vh";

  return (
    <div
      id="content-container"
      ref={workContainer}
      className="relative min-h-screen bg-[#101014] text-[#eaeaf7] overflow-x-hidden"
      style={{ marginTop: "30vh" }}
    >
      <div
        ref={container}
        role="listbox"
        tabIndex={0}
        onMouseDown={onHold}
        onMouseUp={() => setWorkScrollActive(false)}
        onMouseLeave={() => setWorkScrollActive(false)}
        className={`transition-opacity duration-500`}
        style={{
          cursor: currentActive >= 0 ? "default" : "grab",
        }}
      >
        <div>
          <ul
            ref={listContainer}
            className={`flex items-center min-w-min transition-opacity duration-500 ${
              workScrollActive ? "opacity-100" : ""
            } ${
              currentActive >= 0 ? "opacity-20 pointer-events-none" : "opacity-100"
            }`}
            style={{
              flexDirection: listFlexDirection,
              height: listHeight,
              width: "100%",
              padding: 0,
              margin: 0,
              listStyle: "none",
              boxSizing: "border-box",
            }}
          >
            {workData.map((item, i) => {
              const isActive = currentActive === i;
              const isDimmed = currentActive !== i && currentActive >= 0;
              return (
                <li key={item.id} style={{ display: "flex" }}>
                  <div
                    ref={(el) => (workItems.current[i] = el)}
                    className={`relative shadow-lg transition-all duration-700 bg-[#18181e] border border-[#23233b] ${
                      isActive ? "bg-[#23233b] shadow-2xl" : ""
                    } ${isDimmed ? "opacity-50" : ""}`}
                    style={getListItemStyle(isActive)}
                  >
                    <div
                      className="overflow-hidden h-full z-[1] relative"
                      style={{
                        width: "85%",
                        marginRight: "15%",
                        boxShadow: "3px 9px 18px rgba(0,0,0,0.2)",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      <img
                        ref={(el) => (images.current[i] = el)}
                        src={item.cover}
                        alt={item.title + " Background"}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          height: "110%",
                          width: "110%",
                          objectFit: "cover",
                          transform: "translate(-50%, -50%)",
                          opacity: 0.5,
                          userSelect: "none",
                          pointerEvents: "none",
                        }}
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                      />
                    </div>
                    <div
                      className={`absolute z-20 text-right transition-opacity duration-300`}
                      style={{
                        top: isMobile ? "2vw" : "6vh",
                        right: 0,
                        opacity: currentActive >= 0 || workScrollActive ? 0 : 1,
                        fontSize: getIndexFont(),
                        letterSpacing: "0.1vw",
                        fontFamily: "inherit",
                        textTransform: "uppercase",
                        transition: "opacity 0.3s",
                      }}
                    >
                      <p>{i + 1 < 10 ? `0${i + 1}` : i + 1}</p>
                    </div>
                    <div
                      className={`absolute right-0 z-20 text-right flex flex-col justify-end transition-opacity duration-300`}
                      style={{
                        bottom: isMobile ? "2vw" : "10vh",
                        opacity: currentActive >= 0 || workScrollActive ? 0 : 1,
                        width: isMobile
                          ? "calc(70vw - 10vh)"
                          : "calc(55vw - 10vh)",
                        maxWidth: "90vw",
                        minWidth: 0,
                        paddingRight: isMobile ? "2vw" : "0",
                        transition: "opacity 0.3s",
                      }}
                    >
                      <h1
                        className="font-sans font-normal lowercase"
                        style={{
                          fontSize: getTitleFont(),
                          letterSpacing: "0.1vw",
                          lineHeight: "110%",
                          wordWrap: "break-word",
                          whiteSpace: "normal",
                        }}
                      >
                        <span>{item.title}</span>
                      </h1>
                      <button
                        className="uppercase font-semibold rounded-[0.5vw] px-5 py-2 bg-[#101014] text-white transition-colors duration-200 hover:bg-[#101030] hover:text-[#6e6eff] cursor-pointer"
                        style={{
                          fontSize: getButtonFont(),
                          letterSpacing: "0.1vw",
                          marginTop: screenSize === "xs" || screenSize === "sm" ? "2vw" : "2vh",
                        }}
                        onClick={() => toggleActiveItem(i)}
                      >
                        view
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Details Panel */}
        {currentActive !== -1 && (
          <div
            className="details-container absolute left-0 top-0 h-full w-full flex flex-row justify-between box-border z-10 bg-[rgba(16,16,20,0.98)] animate-fadeInDetails"
            style={getDetailsPanelStyle()}
          >
            <div className="relative flex flex-col justify-between flex-1 text-left">
              <div>
                <div className="inline-flex flex-row items-center justify-start relative">
                  <div
                    className="relative font-sans"
                    style={{
                      fontSize: getIndexFont(),
                    }}
                  >
                    {currentActive < 9
                      ? `0${currentActive + 1}`
                      : currentActive + 1}
                  </div>
                  <span
                    className="inline-block bg-white h-[1.5px]"
                    style={{
                      width: "300%",
                      margin: "0 10%",
                      height: "1.5px",
                      background: "#fff",
                      display: "inline-block",
                    }}
                  ></span>
                  <h6
                    className="relative font-sans uppercase font-normal"
                    style={{
                      fontSize: getSummaryFont(),
                    }}
                  >
                    {workData[currentActive].details.summary}
                  </h6>
                </div>
              </div>
              <div
                className={`relative flex ${
                  isMobile
                    ? "flex-col items-start justify-start"
                    : "flex-row items-center justify-between"
                }`}
                style={{
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  justifyContent: isMobile ? "flex-start" : "space-between",
                  position: "relative",
                  gap: isMobile ? "2vw" : "2vw",
                }}
              >
                <h1
                  className={`font-sans font-normal lowercase`}
                  style={{
                    position: "relative",
                    fontSize: getDetailsTitleFont(),
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    lineHeight: "100%",
                    display: breakTitleWords ? "inline-block" : "block",
                    maxWidth: breakTitleWords ? "min-content" : "unset",
                  }}
                >
                  {workData[currentActive].title}
                </h1>
                <button
                  className="interactive"
                  style={{
                    position: isMobile ? "absolute" : "static",
                    top: isMobile ? 0 : undefined,
                    right: isMobile ? 0 : undefined,
                  }}
                  onClick={() => {
                    setCurrentActive(-1);
                    setTimeout(() => setBreakTitleWords(false), 100);
                  }}
                >
                  <div
                    className="cursor-pointer"
                    style={{
                      fontSize: getCloseFont(),
                    }}
                  >
                    &times;
                  </div>
                </button>
              </div>
              <div
                className={`flex gap-5 ${
                  isMobile
                    ? "flex-col justify-start items-start gap-[1vh]"
                    : "flex-row justify-between items-center gap-[5vh]"
                }`}
                style={{
                  flexDirection: isMobile ? "column" : "row",
                  justifyContent: isMobile ? "flex-start" : "space-between",
                  alignItems: isMobile ? "flex-start" : "center",
                  gap: isMobile ? "2vw" : "5vh",
                }}
              >
                <div className="flex-1 basis-0" style={{ minWidth: 0 }}>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: getSummaryFont(),
                      width: isMobile ? "100%" : "65%",
                      wordBreak: "break-word",
                    }}
                  >
                    {workData[currentActive].details.description}
                  </p>
                </div>
                <div className="flex flex-col items-center flex-1 basis-0" style={{ minWidth: 0 }}>
                  <p
                    className="font-sans uppercase font-normal"
                    style={{
                      lineHeight: "270%",
                      letterSpacing: "0.5vh",
                      fontSize: getSummaryFont(),
                    }}
                  >
                    Role
                  </p>
                  <ul className="flex flex-col list-none" style={{ padding: 0, margin: 0 }}>
                    {workData[currentActive].roles.map((role, idx) => (
                      <li
                        key={role}
                        className="font-sans uppercase font-normal"
                        style={{
                          fontSize: getSummaryFont(),
                          lineHeight: "160%",
                        }}
                      >
                        {"+ " + role}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative flex flex-col flex-1 basis-0 gap-[2vh] ${
                    isMobile ? "items-start my-[2vh]" : "items-end"
                  }`}
                  style={{
                    alignItems: isMobile ? "flex-start" : "flex-end",
                    margin: isMobile ? "2vw 0" : 0,
                    minWidth: 0,
                  }}
                >
                  {workData[currentActive].links.map((link) => (
                    <a
                      key={link.link}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase font-semibold rounded-[0.5vw] px-5 py-2 bg-gradient-to-r from-[#6e6eff] to-[#ff6ec4] text-white transition-colors duration-200 hover:bg-white hover:text-[#6e6eff] no-underline"
                      style={{
                        fontSize: getButtonFont(),
                        letterSpacing: "0.2vw",
                        lineHeight: "160%",
                        marginBottom: "0.5vh",
                        textDecoration: "none",
                        display: "inline-block",
                        marginTop: "0.5vw",
                      }}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Tailwind animation for fadeInDetails and extra responsive styles */}
      <style>
        {`
        @keyframes fadeInDetails {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeInDetails {
          animation: fadeInDetails 0.7s cubic-bezier(0.25, 1, 0.5, 1);
        }
        @media (max-width: 480px) {
          .details-container { padding: 0 2vw !important; }
        }
        @media (max-width: 768px) {
          .details-container { padding: 0 4vw !important; }
        }
        @media (max-width: 1024px) {
          .details-container { padding: 0 8vw !important; }
        }
        @media (max-width: 1280px) {
          .details-container { padding: 0 14vw !important; }
        }
        @media (max-width: 1536px) {
          .details-container { padding: 0 16vw !important; }
        }
        `}
      </style>
    </div>
  );
};

export default ServiceId1;
