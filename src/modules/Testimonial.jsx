import React, { useRef, useEffect } from "react";
import "./testimonial.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content:
      "Syed is an excellent developer. So far, he has been very intelligent, effective and reliable. We trust him with our multi-store and multi-site development work. Highly recommend.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "My experience was absolutely amazing with Syed. He is very fast and has great communication. Also does fantastic work. highly recommend!!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Product Manager",
    content:
      "We are extremely satisfied with Syed's work and would hire him again for future projects without hesitation. He is a highly skilled and reliable Webflow developer whom we can warmly recommend to anyone looking for precise implementation and top-notch results.Thank you, Syed, for your outstanding work!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "James Rodriguez",
    role: "Creative Director",
    content:
      "Outstanding creativity and professionalism. They truly understand how to deliver exceptional results while maintaining clear communication.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "CEO",
    content:
      "Quick response, got it solved fast, trust worthy, great communication. I loved working with this guy & he was trust worthy. 10 out of 10! Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "David Park",
    role: "UX Designer",
    content:
      "I worked with Syed for a second time and still was very happy with his work. He delivered a very good job just in time and kept me updatet all the time.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "David Park",
    role: "UX Designer",
    content:
      "I was the best experience. The work was done super quickly and everything I asked for has been done! Will definitely suggest to everyone.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "David Park",
    role: "UX Designer",
    content:
      "Syed worked quickly and was able to complete my project perfectly. He made sure he understood everything prior to beginning starting the project and was very careful to touch every detail of the task.I would recommend Syed to anyone needing a web developer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const CustomTestimonialCard = ({ testimonial }) => (
  <div className="custom-card" key={testimonial.name}>
    <div className="custom-profile">
      <img src={testimonial.image} alt={testimonial.name} />
      <div>
        <div className="custom-name">{testimonial.name}</div>
        <div className="custom-role">{testimonial.role}</div>
      </div>
    </div>
    <div className="custom-content">{testimonial.content}</div>
  </div>
);

const CustomTestimonialsColumn = ({ testimonials }) => {
  return (
    <div className="custom-column">
      <div className="custom-testimonials">
        {testimonials.map((testimonial) => (
          <CustomTestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
};

const CustomTestimonials = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const text = new SplitType(headingRef.current, { types: "chars" });
    gsap.fromTo(
      text.chars,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.05,
        fontFamily: "NeueMachina-Regular",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const shuffled1 = [...testimonialsData, ...testimonialsData].sort(
    () => Math.random() - 0.5
  );
  const shuffled2 = [...testimonialsData, ...testimonialsData].sort(
    () => Math.random() - 0.5
  );
  const shuffled3 = [...testimonialsData, ...testimonialsData].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="custom-testimonials-section">
      <h2 ref={headingRef} className="custom-title font_neuemachina">
      A Track Record of Excellence with 1000+ Happy Clients
      </h2>
      <div className="custom-testimonials-container">
        <CustomTestimonialsColumn testimonials={shuffled1} />
        <CustomTestimonialsColumn testimonials={shuffled2} />
        <CustomTestimonialsColumn testimonials={shuffled3} />
      </div>
    </div>
  );
};

export default CustomTestimonials;
