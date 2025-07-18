// import React, { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { MdOutlineAttachEmail } from "react-icons/md";
// import "./contact.css";

// const ContactMove = () => {
//   const buttonRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const button = buttonRef.current;

//     const handleMouseEnter = () => {
//       setIsHovered(true);
//       gsap.to(button, {
//         duration: 0.5,
//         scale: 1.2,
//         ease: "power2.out",
//         transformOrigin: "center center",
//       });
//     };

//     const handleMouseLeave = () => {
//       setIsHovered(false);
//       gsap.to(button, {
//         duration: 0.5,
//         scale: 1,
//         x: 0, // Reset position when the mouse leaves
//         y: 0,
//         ease: "power2.out",
//         transformOrigin: "center center",
//       });
//     };

//     const handleMouseMove = (e) => {
//       if (isHovered) {
//         const buttonRect = button.getBoundingClientRect();
//         const buttonCenterX = buttonRect.left + buttonRect.width / 2;
//         const buttonCenterY = buttonRect.top + buttonRect.height / 2;
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;

//         const deltaX = (mouseX - buttonCenterX) / 30; // Adjust sensitivity
//         const deltaY = (mouseY - buttonCenterY) / 30; // Adjust sensitivity

//         gsap.to(button, {
//           duration: 0.2,
//           x: deltaX,
//           y: deltaY,
//           ease: "power2.out",
//         });
//       }
//     };

//     button.addEventListener("mouseenter", handleMouseEnter);
//     button.addEventListener("mouseleave", handleMouseLeave);
//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       button.removeEventListener("mouseenter", handleMouseEnter);
//       button.removeEventListener("mouseleave", handleMouseLeave);
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [isHovered]);

//   return (
//     <div className="contact-move relative p-14 bg-[#1A1B1D]">
//       <div className="scrolling-text text-white">
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//       </div>
//       <button
//         ref={buttonRef}
//         className="w-32 h-32 bg-white border border-black text-black rounded-full absolute top-11 left-[42.5vw] flex justify-center items-center"
//       >
//         <MdOutlineAttachEmail size={40} />
//       </button>
//     </div>
//   );
// };

// export default ContactMove;

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { MdOutlineAttachEmail } from "react-icons/md";
import "./contact.css";

const ContactMove = () => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(button, {
        duration: 0.5,
        scale: 1.2,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(button, {
        duration: 0.5,
        scale: 1,
        x: 0, // Reset position when the mouse leaves
        y: 0,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    };

    const handleMouseMove = (e) => {
      if (isHovered) {
        const buttonRect = button.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const deltaX = (mouseX - buttonCenterX) / 30; // Adjust sensitivity
        const deltaY = (mouseY - buttonCenterY) / 30; // Adjust sensitivity

        gsap.to(button, {
          duration: 0.2,
          x: deltaX,
          y: deltaY,
          ease: "power2.out",
        });
      }
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div className="contact-move relative p-14 bg-[#000] rounded-tl-3xl rounded-tr-3xl">
      <div className="scrolling-text text-white">
        <h1>Let's talk — Contact us —</h1>
        <h1>Let's talk — Contact us —</h1>
        <h1>Let's talk — Contact us —</h1>
        <h1>Let's talk — Contact us —</h1>
        <h1>Let's talk — Contact us —</h1>
        <h1>Let's talk — Contact us —</h1>
        <h1>Let's talk — Contact us —</h1>
        <h1>Let's talk — Contact us —</h1>
        <h1>Let's talk — Contact us —</h1>
      </div>
      <div className="flex justify-center items-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          ref={buttonRef}
          className="contact-button w-24 h-24 md:w-32 md:h-32 bg-white border border-black text-black rounded-full flex justify-center items-center"
        >
          <MdOutlineAttachEmail className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </div>
    </div>
  );
};

export default ContactMove;
