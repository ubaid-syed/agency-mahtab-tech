import React from "react";

// Card data (replace with your real data as needed)
const cards = [
  {
    title: "Our Mission",
    description:
      "Empowering businesses with innovative digital solutions, blending creativity and technology for impactful results.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="18" fill="#7C3AED" />
        <path d="M18 10v16M10 18h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Our Vision",
    description:
      "To be a global leader in digital transformation, delivering seamless user experiences and future-ready solutions.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="18" fill="#06B6D4" />
        <path d="M12 18c2-4 10-4 12 0-2 4-10 4-12 0z" stroke="#fff" strokeWidth="2.5" />
        <circle cx="18" cy="18" r="2" fill="#fff" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Our Values",
    description:
      "Integrity, innovation, and collaboration drive us to deliver excellence and build lasting partnerships.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="18" fill="#F59E42" />
        <path
          d="M18 24l-6-6a4 4 0 115.66-5.66L18 13.34l.34-.34a4 4 0 115.66 5.66l-6 6z"
          stroke="#fff"
          strokeWidth="2.5"
          fill="none"
        />
      </svg>
    ),
    color: "from-orange-400 to-amber-500",
  },
  {
    title: "Why Choose Us",
    description:
      "Cutting-edge design, transparent process, and a passionate team dedicated to your success.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="18" fill="#10B981" />
        <path
          d="M12 19l4 4 8-8"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    color: "from-emerald-500 to-teal-400",
  },
];

const MainCard = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 bg-gradient-to-br from-[#18122B] to-[#393053] min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
          About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Us</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-medium">
          We are a team of passionate creators, developers, and strategists dedicated to building digital experiences that inspire and deliver results.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`
              group bg-gradient-to-br ${card.color} rounded-2xl shadow-xl
              p-8 flex flex-col items-center transition-transform duration-300
              hover:scale-105 hover:shadow-2xl hover:-translate-y-2
              border border-white/10 backdrop-blur-md
            `}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(60,60,80,0.15) 100%)",
            }}
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-sm">{card.title}</h3>
            <p className="text-gray-100 text-base font-medium text-center">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="relative z-10 mt-14">
        <a
          href="/contact-us"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold text-lg shadow-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default MainCard;



// import Card from "./Card.jsx"
// import "./Card.css"
// export default function MainCard() {
//   return (
//     <>
//       <div className="containerres">
//         <div className="maincontainer">
//         <section className="hero">
//           <h1>
//             Keep scrolling to <br /> reveal the cards
//           </h1>
//         </section>
//         <section className="cardses">
//           {[...Array(4)].map((_, index) => (
//             <Card
//               key={index}
//               id={`card-${index + 1}`}
//               frontSrc="../../../back.png"
//               frontAlt="Card Image"
//               backText="Your card details appear here"
//             />
//           ))}
//         </section>
//         <section className="footer">
//         <h1>
//             Keep scrolling to <br /> reveal the cards
//           </h1>
//         </section>
//         </div>
//       </div>
//     </>
//   );
// }
