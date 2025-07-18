// import React, { useEffect, useRef } from "react";
// import { CraftCards } from "../config/CraftCards";
// import Button from "../components/global/Button";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Craft = () => {
//   const craftRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       window.innerWidth > 640
//         ? gsap.set(".card", { width: "75%", color: "black" })
//         : gsap.set(".card", { width: "100%", color: "black" });

//       const tl = gsap.timeline({
//         ease: "power2",
//         scrollTrigger: {
//           trigger: craftRef.current,
//           start: "top 70%",
//           end: "bottom 150%",
//           scrub: 1.5,
//           // markers: true,
//           // onEnter: () => {
//           //   document.body.setAttribute("theme", "cyan");
//           // },
//           // onEnterBack: () => {
//           //   document.body.setAttribute("theme", "cyan");
//           // },
//         },
//       });

//       if (window.innerWidth > 640) {
//         (() => {
//           tl.from(".craft_heading h1", {
//             delay: 7,
//             y: 50,
//             scale: 1.13,
//             opacity: 0,
//             duration: 5,
//             stagger: 0.3,
//             rotateX: "-90deg",
//           })
//             .to(".craft .cards", {
//               transition: "all 3s linear",
//               delay: 2,
//               top: -100,
//             })
//             .to(".craft .cards .card", {
//               delay: 1.8,
//               width: "90%",
//               color: "#AEDEE0",
//               backgroundColor: "black",
//               transition: "all 1s linear",
//               stagger: 3,
//             });
//         })();
//       } else {
//         (() => {
//           tl.from(".craft_heading h1", {
//             delay: -5,
//             y: 50,
//             scale: 1.13,
//             opacity: 0,
//             duration: 1,
//             rotateX: "-90deg",
//           });
//         })();
//       }
//     }, craftRef);

//     ScrollTrigger.refresh();

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={craftRef}
//       className="craft w-full h-full relative flex justify-between items-start flex-col sm:flex-row gap-10 px-10 pt-28 pb-20 sm:pb-56"
//     >
//       <div
//         data-scroll
//         data-scroll-sticky
//         data-scroll-target=".craft"
//         className="l_text hidden sm:block sm:w-[40%] space-y-6 py-10"
//       >
//         <p>
//           Mahtab-tech is a custom WordPress website development and design
//           agency founded on the belief that technology can transform the digital
//           landscape to put businesses first. We bring innovation and creativity
//           to the center of web development, crafting user-centric websites that
//           enhance functionality, optimize performance, and drive engagement. Our
//           expertise simplifies complexity, accelerates growth, and improves
//           online presence with cutting-edge custom themes, plugins, and
//           responsive designs tailored to your brand's unique needs.
//         </p>
//         <div className="text-5xl font_neuemachina craft_heading sm:overflow-hidden">
//           <h1 className="font_neuemachina">Human-Centric</h1>
//           <h1 className="font_neuemachina">Health Software</h1>
//         </div>

//         <Button title="our solutions" borderColor="border_dark_cyan" />
//       </div>

//       <div className="sm:hidden block sm:w-[40%] space-y-6 py-10">
//         <p>
//           Mahtab-tech is a custom WordPress website development and design
//           agency founded on the belief that technology can transform the digital
//           landscape to put businesses first. We bring innovation and creativity
//           to the center of web development, crafting user-centric websites that
//           enhance functionality, optimize performance, and drive engagement.
//         </p>
//         <div className="text-5xl font_neuemachina craft_heading sm:overflow-hidden">
//           <h1 className="font_neuemachina">Human-Centric</h1>
//           <h1 className="font_neuemachina">Health Software</h1>
//         </div>

//         <Button title="our solutions" borderColor="border_dark_cyan" />
//       </div>

//       <div className="cards transition_cards sm:w-1/2 space-y-10 relative z-10 sm:mt-[100vh]">
//         {CraftCards.map((card) => (
//           <div
//             key={card.id}
//             className="card flex justify-between items-start mx-auto border border-white px-4 sm:px-10 py-6 transition_card"
//           >
//             <div className="card_l space-y-4">
//               <h2 className="text-xl font-bold capitalize">{card.title}</h2>
//               <p className="">{card.description}</p>
//             </div>
//             <div className="card_r">{card.icon}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Craft;

import React, { useEffect, useRef } from "react";
import { CraftCards } from "../config/CraftCards";
import Button from "../components/global/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Craft = () => {
  const craftRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isDesktop = window.innerWidth > 640;

      gsap.set(".card", { width: isDesktop ? "75%" : "100%", color: "black" });

      const tl = gsap.timeline({
        ease: "power2",
        scrollTrigger: {
          trigger: craftRef.current,
          start: "top 70%",
          end: "bottom 150%",
          scrub: 1.5,
        },
      });

      tl.from(".craft_heading h1", {
        y: 50,
        scale: 1.13,
        opacity: 0,
        duration: isDesktop ? 5 : 1,
        stagger: isDesktop ? 0.3 : 0,
        rotateX: "-90deg",
      });

      if (isDesktop) {
        tl.to(".craft .cards", { top: -100, duration: 3 }).to(
          ".craft .cards .card",
          {
            width: "90%",
            color: "#AEDEE0",
            backgroundColor: "black",
            stagger: 3,
            duration: 1,
          }
        );
      }
    }, craftRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={craftRef}
      className="craft w-full h-full relative flex justify-between items-start flex-col sm:flex-row gap-10 px-10 pt-28 pb-20 sm:pb-56"
    >
      {/* Left Section (Text + Button) */}
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target=".craft"
        className="l_text sm:w-[40%] space-y-6 py-10"
      >
        <p>
          Mahtab-tech is a custom WordPress website development and design
          agency founded on the belief that technology can transform the digital
          landscape to put businesses first. We bring innovation and creativity
          to the center of web development, crafting user-centric websites that
          enhance functionality, optimize performance, and drive engagement.
        </p>
        <div className="text-5xl font_neuemachina craft_heading sm:overflow-hidden">
          <h1 className="font_neuemachina">Human-Centric</h1>
          <h1 className="font_neuemachina">Health Software</h1>
        </div>
        <Button title="our solutions" borderColor="border_dark_cyan" />
      </div>

      {/* Cards Section */}
      <div className="cards transition_cards sm:w-1/2 space-y-10 relative z-10 sm:mt-[100vh]">
        {CraftCards.map((card) => (
          <div
            key={card.id}
            className="card flex justify-between items-start mx-auto border border-white px-4 sm:px-10 py-6 transition_card"
          >
            <div className="card_l space-y-4">
              <h2 className="text-xl font-bold capitalize">{card.title}</h2>
              <p>{card.description}</p>
            </div>
            <div className="card_r">{card.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Craft;
