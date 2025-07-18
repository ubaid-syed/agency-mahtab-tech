// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import Button from "../components/global/Button";

// gsap.registerPlugin(ScrollTrigger);

// const faqs = [
//   {
//     question: "How does Webflow differ from a custom development process?",
//     answer:
//       "Webflow is a platform that enables users to create code using a visual interface. It offers its own hosting, CMS, and integrations for creating JavaScript animations. Although it is a no-code tool, it provides all the necessary resources to create and integrate custom code, bringing everything together.",
//   },
//   {
//     question:
//       "Do you offer just the development services for an already completed design on our end?",
//     answer:
//       "Absolutely. We are happy to assist you with the development of your design. Feel free to send us a link to your design in advance through our contact form.",
//   },
//   {
//     question: "How long does it take to complete a project?",
//     answer:
//       "The typical time frame for designing and developing a website can vary between 2 to 12 weeks.",
//   },
//   {
//     question: "How about copywriting?",
//     answer:
//       "We are offering copywriting services that cover different content needs such as writing texts, website copies, slogans, taglines, etc.",
//   },
// ];

// const Build = () => {
//   const titleRef = useRef(null);
//   const [openIndexes, setOpenIndexes] = useState([]);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.from(titleRef.current, {
//         opacity: 0,
//         y: -200,
//         duration: 1,
//         ease: "elastic.inOut",
//         scrollTrigger: {
//           trigger: ".build",
//           start: "top 40%",
//           end: "center 60%",
//           scrub: 1,
//           onEnter: () => document.body.setAttribute("theme", "white"),
//           onEnterBack: () => document.body.setAttribute("theme", "white"),
//         },
//       });
//     });

//     ScrollTrigger.refresh();

//     return () => ctx.revert();
//   }, []);

//   const toggleFAQ = (index) => {
//     setOpenIndexes((prevIndexes) =>
//       prevIndexes.includes(index)
//         ? prevIndexes.filter((i) => i !== index)
//         : [...prevIndexes, index]
//     );
//   };

//   return (
//     <section className="build w-full relative flex flex-col sm:flex-row justify-between items-center bg-white sm:px-14 py-20 mt-24">
//       <div>
//         <h2 ref={titleRef} className="text-5xl font_neuemachina">
//           Frequently <br /> asked questions. <br />
//         </h2>
//         <div className="mt-10">
//           <Button
//             btnLayout={{ background: "#000", color: "#F5F19C" }}
//             title="let's go"
//             borderColor="border-black"
//           />
//         </div>
//       </div>

//       <div className="w-full max-w-lg mt-10 space-y-4">
//         {faqs.map((faq, index) => {
//           const isOpen = openIndexes.includes(index);
//           return (
//             <motion.div
//               key={index}
//               onClick={() => toggleFAQ(index)}
//               className={`cursor-pointer border transition-all duration-300 ${
//                 isOpen ? "border-black shadow-lg" : "border-gray-300"
//               } rounded-lg overflow-hidden`}
//             >
//               <motion.div className="w-full text-left px-6 py-4 bg-white hover:bg-gray-100 flex justify-between items-center">
//                 <span className="text-lg font-semibold">{faq.question}</span>
//               </motion.div>

//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{
//                   height: isOpen ? "auto" : 0,
//                   opacity: isOpen ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="px-6 py-3 bg-white"
//               >
//                 <p>{faq.answer}</p>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Build;

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Button from "../components/global/Button";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What is WordPress and why should I use it for my website?",
    answer:
      "WordPress is a powerful, open-source content management system (CMS) that allows you to easily create, manage, and update websites without needing advanced coding skills. It's highly customizable, SEO-friendly, and powers over 40% of all websites on the internet.",
  },
  {
    question: "Can you customize my WordPress site to match my brand?",
    answer:
      "Absolutely! We specialize in custom WordPress development, including theme customization, plugin integration, and bespoke design to ensure your website perfectly reflects your brand identity.",
  },
  {
    question: "Is WordPress secure for my business website?",
    answer:
      "Yes, WordPress is secure when properly maintained. We follow best practices for security, including regular updates, strong passwords, and security plugins to protect your site from threats.",
  },
  {
    question: "Will my WordPress website be mobile-friendly and fast?",
    answer:
      "Definitely. We build all WordPress sites to be fully responsive and optimized for speed, ensuring a seamless experience for your visitors on any device.",
  },
];

const Build = () => {
  const titleRef = useRef(null);
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".build",
          start: "top 60%",
          end: "center 70%",
          scrub: 1,
          onEnter: () => document.body.setAttribute("theme", "white"),
          onEnterBack: () => document.body.setAttribute("theme", "white"),
        },
      });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className="build w-full relative flex flex-col sm:flex-row justify-center items-center bg-white px-6 sm:px-14 py-16 sm:py-24 mt-16 sm:mt-24">
      <div className="w-full sm:w-1/2 text-center sm:text-left">
        <h2
          ref={titleRef}
          className="text-3xl sm:text-5xl font_neuemachina leading-tight"
        >
          Frequently <br /> asked questions.
        </h2>
        <div className="mt-8 sm:mt-10 flex justify-center sm:justify-start">
          {/* <Button
            btnLayout={{ background: "#000", color: "#F5F19C" }}
            title="Let's go"
            borderColor="border-black"
          /> */}
          {/* <button class=" relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">Button</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button> */}
        </div>
      </div>

      <div className="w-full sm:w-1/2 max-w-lg mt-10 sm:mt-0 space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <motion.div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`cursor-pointer border transition-all duration-300 ${
                isOpen ? "border-black shadow-lg" : "border-gray-300"
              } rounded-lg overflow-hidden bg-white`}
            >
              <motion.div className="w-full text-left px-6 py-4 flex justify-between items-center">
                <span className="text-base sm:text-lg font-semibold">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold"
                >
                  {isOpen ? "−" : "+"}
                </motion.span>
              </motion.div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="px-6 py-3 text-sm sm:text-base"
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Build;
