import React, { useEffect, useRef } from "react";
import {
  Code2,
  Palette,
  ShoppingCart,
  AlertTriangle,
  Settings,
  Wrench,
  ArrowRight,
  Globe,
  FileImage,
  Blocks,
  Zap,
  Shield,
  Languages,
  Puzzle,
} from "lucide-react";
import gsap from "gsap";

// Intersection Observer hook for reveal-on-scroll (repeat animation every time)
function useRevealOnScroll(refs, options = {}) {
  useEffect(() => {
    if (!refs.current || !refs.current.length) return;
    const elements = refs.current;
    // Set initial state for all elements
    elements.forEach((el) => {
      if (el) {
        gsap.set(el, { opacity: 0, y: 60, scale: 0.96 });
      }
    });

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              delay: (Array.from(elements).indexOf(el) % 3) * 0.08,
            });
          } else {
            // Reset animation when out of view
            gsap.to(el, {
              opacity: 0,
              y: 60,
              scale: 0.96,
              duration: 0.5,
              ease: "power3.in",
              delay: 0,
            });
          }
        });
      },
      {
        threshold: 0.18,
        ...options,
      }
    );
    elements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [refs, options]);
}

// Enhanced Card and Button components with animation/interactivity
const Card = React.forwardRef(({ children, className = "", style, onMouseMove, onMouseLeave }, ref) => (
  <div
    ref={ref}
    className={`rounded-3xl bg-[#18181e] border border-[#23233b] shadow-2xl overflow-hidden relative group ${className}`}
    style={{
      ...style,
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
      minHeight: "370px",
      maxWidth: "430px",
      width: "100%",
      transition: "transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s",
      cursor: "pointer",
      willChange: "transform",
    }}
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
  >
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
      style={{
        background: "radial-gradient(circle at 60% 40%, #913FF1 0%, #18181e 80%)",
        mixBlendMode: "screen"
      }}
    />
    {children}
  </div>
));

const CardContent = ({ children, className = "" }) => (
  <div className={`flex flex-col items-center p-10 z-10 relative ${className}`}>{children}</div>
);

const Button = ({ children, className = "", ...props }) => (
  <button
    className={`relative group bg-gradient-to-tr from-[#913FF1] to-[#5B2EFF] text-white font-semibold rounded-xl px-8 py-3 mt-4 shadow-md transition-all duration-200 hover:shadow-2xl hover:scale-[1.06] focus:outline-none ${className}`}
    style={{ WebkitTapHighlightColor: "transparent", overflow: "hidden" }}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    {/* Sleek subtle overlay on hover */}
    <span
      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/10"
    ></span>
    {/* Animated ripple effect */}
    <span className="absolute left-1/2 top-1/2 w-0 h-0 group-active:w-32 group-active:h-32 group-active:opacity-30 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300"></span>
  </button>
);

const services = [
  {
    id: 1,
    title: "WordPress Design & Development",
    description:
      "Providing professional WordPress design and development services for years, you can rely on us to create an effective website for your business.",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "WordPress Theme & Plugin Customizations",
    description:
      "For businesses, the importance of speed, security, third-party integrations, search engine optimization, and flexibility is paramount.",
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "WooCommerce Development",
    description:
      "Our WordPress-based ecommerce solutions and services will assist you in excelling in today's competitive digital marketplace.",
    icon: ShoppingCart,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "WordPress Troubleshooting & Fixation",
    description:
      "Whatever the problem, we can solve it, be it a contact form error, a visual problem, malware issues, or the dreaded 'WordPress white screen of death.'",
    icon: AlertTriangle,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 5,
    title: "WordPress Maintenance",
    description:
      "The WordPress website maintenance process consists of checking your website regularly for errors and ensuring it is updated and relevant.",
    icon: Settings,
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 6,
    title: "Custom WordPress Development",
    description:
      "Our custom WordPress development process involves designing, and developing a website that fits your business needs.",
    icon: Wrench,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 7,
    title: "Web Design",
    description:
      "A robust web design makes the website visually appealing and can deliver an unmatched user experience.",
    icon: Globe,
    color: "from-teal-500 to-blue-500",
  },
  {
    id: 8,
    title: "WordPress Migration",
    description:
      "The WordPress website maintenance process consists of checking your website regularly for errors and ensuring it is updated and relevant.",
    icon: ArrowRight,
    color: "from-violet-500 to-purple-500",
  },
  
];

// Main component
const ServicesProvide = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

  // Animate heading and subheading on mount
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: "power2.out" }
    );
  }, []);

  // Reveal cards on scroll (repeat animation every time)
  useRevealOnScroll(cardsRef);

  // Card tilt effect (increased tilt)
  const handleCardMouseMove = (idx) => (e) => {
    const card = cardsRef.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Increase the multiplier for more tilt (was 8, now 16)
    const rotateX = (-y / (rect.height / 2)) * 16;
    const rotateY = (x / (rect.width / 2)) * 16;
    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.06, // slightly more pop
      boxShadow: "0 16px 64px 0 rgba(145,63,241,0.22)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCardMouseLeave = (idx) => () => {
    const card = cardsRef.current[idx];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: "0 8px 40px 0 rgba(110,110,255,0.18)",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      className="py-16 px-1 md:px-4 bg-black text-[#ffffff] relative"
      style={{ backgroundImage: "url('./joule-pattern.svg')" }}
    >
      {/* Animated floating gradient blobs for extra sleekness */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 z-0 opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle at 30% 30%, #913FF1 0%, #18181e 80%)"
        }}
      />
      <div className="pointer-events-none absolute -bottom-32 right-0 w-96 h-96 z-0 opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle at 70% 70%, #5B2EFF 0%, #18181e 80%)"
        }}
      />
      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-[2.8rem] md:text-[4.5rem] font-extrabold text-center leading-tight mb-2 tracking-tight text-white bg-clip-text text-transparent drop-shadow-lg"
        >
          What We Do For <span className="text-[#913FF1]">Customers?</span>
        </h1>
        {/* Subheading */}
        <h2
          ref={subheadingRef}
          className="text-[1.3rem] md:text-[1.5rem] font-medium text-center text-[#e0e0ff] mb-10 max-w-6xl mx-auto"
        >
          Our company provides full-stack WordPress development with an agile methodology. We have a team of dedicated designers, developers, and service agents that work around the clock to deliver complex projects on time. We provide the following services.
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 justify-center items-stretch px-0 md:px-2">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                ref={el => (cardsRef.current[idx] = el)}
                className="hover:shadow-[0_12px_48px_0_rgba(145,63,241,0.18)] hover:-translate-y-2 transition-all duration-300"
                onMouseMove={handleCardMouseMove(idx)}
                onMouseLeave={handleCardMouseLeave(idx)}
              >
                <CardContent>
                  <div
                    className={`mb-6 rounded-full p-5 bg-gradient-to-tr bg-[#913FF1] flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110`}
                    style={{
                      boxShadow: "0 4px 32px 0 rgba(145,63,241,0.18)",
                      transition: "transform 0.3s cubic-bezier(.4,2,.6,1)",
                    }}
                  >
                    <Icon size={48} className="text-white drop-shadow-lg animate-pulse-slow" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center text-white drop-shadow-md">{service.title}</h3>
                  <p className="text-lg md:text-xl text-[#b0b0d0] mb-6 text-center">{service.description}</p>
                  <Button
                    className="mx-auto w-fit group"
                    tabIndex={0}
                  >
                    <span className="flex items-center gap-2">
                      Learn More
                      <svg
                        className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      {/* Extra styles for animation and card margin */}
      <style>{`
        @media (max-width: 640px) {
          .text-[2.8rem] { font-size: 2.1rem !important; }
          .text-[1.3rem] { font-size: 1.05rem !important; }
        }
        @media (min-width: 641px) and (max-width: 1023px) {
          .text-[2.8rem] { font-size: 2.5rem !important; }
          .text-[1.3rem] { font-size: 1.15rem !important; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { filter: drop-shadow(0 0 0 #fff); }
          50% { filter: drop-shadow(0 0 12px #fff); }
        }
      `}</style>
    </section>
  );
};

export default ServicesProvide;
