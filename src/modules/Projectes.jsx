// import { useState } from "react";
// import Project from "../components/Projectess";
// import { myProjects } from "../constants";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// const Projectes = () => {
//   const [preview, setPreview] = useState(null);

//   // Mouse position for preview image
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { damping: 20, stiffness: 150 });
//   const springY = useSpring(y, { damping: 20, stiffness: 150 });

//   const handleMouseMove = (e) => {
//     // Offset the preview image slightly from the cursor
//     x.set(e.clientX + 24);
//     y.set(e.clientY + 24);
//   };

//   return (
//     <section
//       onMouseMove={handleMouseMove}
//       className="relative c-space section-spacing"
//     >
//       <h2 className="text-heading mb-4">My Selected Projects</h2>
//       <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-8 mb-12 h-[2px] w-full" />
//       <div className="flex flex-col gap-10">
//         {myProjects.map((project) => (
//           <Project key={project.id} {...project} setPreview={setPreview} />
//         ))}
//       </div>
//       {preview && (
//         <motion.img
//           src={preview}
//           alt="Project Preview"
//           className="fixed top-0 left-0 z-50 object-cover h-56 w-80 rounded-xl shadow-2xl border-2 border-white/10 pointer-events-none transition-all duration-200"
//           style={{ x: springX, y: springY }}
//         />
//       )}
//     </section>
//   );
// };

// export default Projectes;

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin only once
if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

// 20 Modern Project Cards Data with skills and description
const projects = [
  // ... (same as before, omitted for brevity)
  {
    id: 1,
    title: "Nova Digital Branding",
    subtitle: "Brand Identity, Web Design",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["Figma", "Photoshop", "Branding", "React"],
    description: "A bold digital branding project for Nova, blending modern web design with a strong visual identity to elevate their online presence."
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    subtitle: "UI/UX, Development",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2023",
    skills: ["Next.js", "TailwindCSS", "UX Research", "Stripe"],
    description: "A seamless e-commerce platform focused on conversion and delightful user experience, featuring custom animations and secure payments."
  },
  {
    id: 3,
    title: "Luxury Real Estate",
    subtitle: "Web, Animation",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["GSAP", "Three.js", "UI Animation", "SEO"],
    description: "Immersive real estate showcase with 3D tours and smooth scroll animations, designed for high-end property marketing."
  },
  {
    id: 4,
    title: "Fashion Editorial",
    subtitle: "Art Direction, Web",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2022",
    skills: ["Art Direction", "Sass", "React", "Photography"],
    description: "A visually striking editorial site for a fashion brand, combining creative layouts with editorial storytelling."
  },
  {
    id: 5,
    title: "Crypto Dashboard",
    subtitle: "Fintech, Dashboard UI",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["React", "D3.js", "WebSockets", "TypeScript"],
    description: "A real-time crypto dashboard with live charts, analytics, and a modern dark UI for fintech enthusiasts."
  },
  {
    id: 6,
    title: "Travel App Concept",
    subtitle: "Mobile, Product Design",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2023",
    skills: ["Flutter", "UX Design", "Firebase", "Prototyping"],
    description: "A mobile-first travel app concept with intuitive navigation and beautiful destination imagery."
  },
  {
    id: 7,
    title: "Portfolio Website",
    subtitle: "Personal, Animation",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["React", "Framer Motion", "Vercel", "SCSS"],
    description: "A personal portfolio with interactive animations and a clean, modern aesthetic to showcase creative work."
  },
  {
    id: 8,
    title: "Restaurant Branding",
    subtitle: "Brand, Web, Print",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2022",
    skills: ["Branding", "Illustrator", "Webflow", "Print Design"],
    description: "A full branding suite for a modern restaurant, including web, print, and digital assets."
  },
  {
    id: 9,
    title: "Fitness App UI",
    subtitle: "Mobile, Health",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["React Native", "UX", "API Integration", "HealthKit"],
    description: "A fitness app UI with personalized dashboards, workout tracking, and health data integration."
  },
  {
    id: 10,
    title: "SaaS Landing Page",
    subtitle: "Web, SaaS, Marketing",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2023",
    skills: ["Next.js", "A/B Testing", "Copywriting", "SEO"],
    description: "A high-converting SaaS landing page with modern gradients, micro-interactions, and optimized CTAs."
  },
  {
    id: 11,
    title: "Event Platform",
    subtitle: "Web, Ticketing",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["Node.js", "React", "Stripe", "Responsive Design"],
    description: "A scalable event platform for ticketing and event management, featuring real-time updates and mobile-first design."
  },
  {
    id: 12,
    title: "AI Startup",
    subtitle: "Brand, Web, AI",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["AI", "Python", "React", "Branding"],
    description: "A futuristic web presence for an AI startup, blending branding with interactive AI demos."
  },
  {
    id: 13,
    title: "Music Streaming UI",
    subtitle: "App, Entertainment",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2022",
    skills: ["React Native", "UX", "Animations", "Spotify API"],
    description: "A music streaming app UI with smooth transitions, playlist management, and real-time playback."
  },
  {
    id: 14,
    title: "Education Platform",
    subtitle: "Web, E-Learning",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["React", "Firebase", "Gamification", "Accessibility"],
    description: "An e-learning platform with gamified progress, accessibility features, and engaging course layouts."
  },
  {
    id: 15,
    title: "NFT Marketplace",
    subtitle: "Web3, Crypto",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2023",
    skills: ["Web3.js", "Solidity", "React", "Blockchain"],
    description: "A next-gen NFT marketplace with wallet integration, live auctions, and a futuristic UI."
  },
  {
    id: 16,
    title: "Minimal Blog",
    subtitle: "Web, Content",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["Next.js", "MDX", "SEO", "Minimal Design"],
    description: "A minimal blog platform with beautiful typography, dark/light mode, and blazing fast performance."
  },
  {
    id: 17,
    title: "Startup Agency",
    subtitle: "Brand, Web, Animation",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["Branding", "GSAP", "React", "Storytelling"],
    description: "A creative agency site with animated storytelling, bold branding, and interactive case studies."
  },
  {
    id: 18,
    title: "Photography Portfolio",
    subtitle: "Web, Gallery",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2022",
    skills: ["Gallery", "Lightbox", "React", "Photography"],
    description: "A portfolio for a photographer, featuring a dynamic gallery, fullscreen lightbox, and subtle hover effects."
  },
  {
    id: 19,
    title: "Finance Dashboard",
    subtitle: "Fintech, Analytics",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2024",
    skills: ["React", "Chart.js", "API", "Dark Mode"],
    description: "A finance dashboard with real-time analytics, customizable widgets, and a modern dark theme."
  },
  {
    id: 20,
    title: "Modern Agency Site",
    subtitle: "Web, Creative",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
    link: "#",
    year: "2023",
    skills: ["React", "GSAP", "UI Design", "Branding"],
    description: "A creative agency website with bold gradients, animated transitions, and a focus on visual storytelling."
  },
];

const INITIAL_VISIBLE = 6;

const Projectes = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const loadMoreBtnRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  // Clean up all ScrollTriggers on unmount to prevent scroll conflicts
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  useEffect(() => {
    // Kill previous triggers to avoid stacking and lag
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Section Title Animation
    gsap.fromTo(
      sectionRef.current.querySelector(".modern-title"),
      { y: 80, opacity: 0, filter: "blur(12px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.1,
        ease: "power4.out",
        delay: 0.1,
      }
    );

    // Cards Animation (Staggered, 3D pop, fade, scale)
    gsap.fromTo(
      cardsRef.current.slice(0, visibleCount),
      { y: 60, opacity: 0, scale: 0.97, rotateY: 6 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        overwrite: "auto",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax image effect (lighter, less laggy)
    cardsRef.current.slice(0, visibleCount).forEach((card) => {
      if (!card) return;
      const img = card.querySelector(".modern-img");
      gsap.to(img, {
        y: -30,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 0.3,
          // markers: true,
        },
        overwrite: "auto",
      });
    });

    // Animate Load More button
    if (loadMoreBtnRef.current) {
      gsap.fromTo(
        loadMoreBtnRef.current,
        { y: 32, opacity: 0, scale: 0.97, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    }

    // Refresh ScrollTrigger after DOM changes
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Clean up triggers on every re-run
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, projects.length));
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 px-4 md:px-10 bg-[#0a0a0f] overflow-x-hidden overflow-y-visible modern-section"
      style={{
        background:
          "radial-gradient(ellipse at 60% 0%, #23233b 0%, #0a0a0f 100%)",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* Section Title */}
      <div className="modern-title mb-16 flex flex-col items-center">
        <h2 className="text-[clamp(2.8rem,7vw,6rem)] font-black tracking-tight text-white leading-[1.05] drop-shadow-2xl modern-gradient-text">
          <span className="bg-gradient-to-r from-[#6e6eff] via-[#fff] to-[#ff6ec4] bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#6e6eff] via-[#fff] to-[#ff6ec4] rounded-full mt-4 shadow-lg" />
        <p className="mt-4 text-lg md:text-2xl text-[#b0b0d0] font-medium text-center max-w-2xl">
          Discover a curated collection of <span className="text-[#6e6eff] font-semibold">{projects.length}</span> modern, creative, and fully animated projects. Each project is crafted with the latest technologies and a passion for beautiful, functional design. Explore the skills, tools, and stories behind every build.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 modern-projects-list will-change-transform">
        {projects.slice(0, visibleCount).map((project, idx) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            ref={el => (cardsRef.current[idx] = el)}
            className="group modern-card relative flex flex-col bg-gradient-to-br from-[#18182b]/90 via-[#23233b]/80 to-[#18182b]/90 rounded-3xl shadow-2xl overflow-hidden border border-white/10 hover:border-[#6e6eff] transition-all duration-500 cursor-pointer hover:scale-[1.025] hover:shadow-[0_8px_32px_0_rgba(110,110,255,0.18)] will-change-transform"
            style={{
              boxShadow: "0 4px 32px 0 rgba(110,110,255,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
              backdropFilter: "blur(8px)",
              transition: "transform 0.5s cubic-bezier(.22,1,.36,1), box-shadow 0.5s cubic-bezier(.22,1,.36,1)",
            }}
          >
            {/* Image with animated border and hover effect */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-3xl modern-img-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="modern-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] group-hover:rotate-[-1.5deg] rounded-t-3xl will-change-transform"
                draggable={false}
                loading="lazy"
                style={{
                  transition: "transform 0.7s cubic-bezier(.22,1,.36,1)",
                }}
              />
              {/* Year badge */}
              <span className="absolute top-4 right-4 bg-gradient-to-r from-[#6e6eff] to-[#ff6ec4] text-white text-xs px-3 py-1 rounded-full font-semibold tracking-widest shadow-lg backdrop-blur-md border border-white/10">
                {project.year}
              </span>
              {/* Animated gradient border */}
              <div className="absolute inset-0 pointer-events-none rounded-t-3xl border-2 border-transparent group-hover:border-[#6e6eff] transition-all duration-500" />
              {/* Glow effect */}
              <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-700"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 0%, #6e6eff 0%, transparent 80%)",
                }}
              />
            </div>
            {/* Textual content */}
            <div className="flex-1 flex flex-col justify-between px-6 py-6">
              <div>
                <h3 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold text-white mb-2 leading-tight modern-card-title group-hover:text-[#6e6eff] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-[#b0b0d0] font-medium mb-2 modern-card-subtitle">
                  {project.subtitle}
                </p>
                <p className="text-sm text-[#a0a0c0] mb-4 modern-card-desc">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#23233b] to-[#18182b] text-[#6e6eff] border border-[#6e6eff]/20 shadow-sm hover:bg-[#6e6eff]/10 transition-all duration-200"
                    >
                      <svg className="w-3 h-3 mr-1 text-[#ff6ec4]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="4" /></svg>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-[#ff6ec4] font-semibold text-base tracking-wide modern-card-link group-hover:underline mt-2 transition-all duration-200">
                View Project
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block">
                  <path d="M5 11h12M13 7l4 4-4 4" />
                </svg>
              </span>
            </div>
            {/* Animated floating gradient blob */}
            <div className="pointer-events-none absolute -z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 0%, #ff6ec4 0%, transparent 80%)",
              }}
            />
          </a>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < projects.length && (
        <div className="flex justify-center mt-16">
          <button
            ref={loadMoreBtnRef}
            onClick={handleLoadMore}
            className="relative px-8 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-[#6e6eff] via-[#fff] to-[#ff6ec4] text-[#18182b] shadow-xl hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(255,110,196,0.25)] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#6e6eff]/40"
            style={{
              letterSpacing: "0.04em",
              boxShadow: "0 4px 32px 0 rgba(255,110,196,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.10)",
              willChange: "transform",
            }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#6e6eff] animate-bounce" fill="currentColor" viewBox="0 0 20 20"><path d="M10 4v8m0 0l-4-4m4 4l4-4" stroke="#6e6eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Load More
            </span>
            <span className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full blur-2xl opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 0%, #ff6ec4 0%, transparent 80%)",
              }}
            />
          </button>
        </div>
      )}

      {/* Subtle noise overlay for depth */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-30"
        style={{
          background:
            "url('https://grainy-gradients.vercel.app/noise.svg') repeat",
          mixBlendMode: "soft-light",
          pointerEvents: "none",
        }}
      />
      {/* Animated floating gradient background */}
      <div
        className="pointer-events-none absolute -z-30 left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[60vw] max-w-[1200px] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(circle at 60% 0%, #6e6eff 0%, #ff6ec4 100%)",
        }}
      />
    </section>
  );
};

export default Projectes;
