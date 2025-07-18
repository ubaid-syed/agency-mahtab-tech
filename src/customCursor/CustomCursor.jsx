import React, { useEffect, useRef } from "react";
import "./style.css";

const CustomCursor = () => {
  const circlesRef = useRef([]);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    animateCircles();
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const animateCircles = () => {
    let x = coords.current.x;
    let y = coords.current.y;

    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${
          (circlesRef.current.length - index) / circlesRef.current.length
        })`;

        const nextCircle =
          circlesRef.current[index + 1] || circlesRef.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

        circle.x = x;
        circle.y = y;
      }
    });
    requestAnimationFrame(animateCircles);
  };

  return (
    <>
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="circle"
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </>
  );
};

export default CustomCursor;
