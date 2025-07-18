import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../config/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const AboutContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="
        flex flex-col
        items-center
        justify-center
        px-4
        mt-20
        w-full
        z-[20]
        gap-10
        md:flex-row
        md:gap-0
        md:px-10
        md:mt-32
        lg:px-20
        lg:mt-40
      "
    >
      
      {/* Content first on small screens, left on md+ */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start max-w-xl order-1 md:order-none">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center py-[8px] px-[7px]  opacity-[0.9] w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[12px] sm:text-[13px] text-white">
           Mahtab-Tech Agency
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="
            flex flex-col gap-4 mt-4
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold text-white
            max-w-full
            w-auto h-auto
          "
        >
          <span>
          We
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Build  High{" "}
            </span>
            Performing Websites
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="
            text-base
            sm:text-lg
            text-gray-400
            my-4
            max-w-full
            md:max-w-[600px]
          "
        >
          Our Agency design and develop scalable, high-performing web platforms tailored to your business goals — from user-friendly interfaces to powerful backend systems.
        </motion.p>
        <div className="absolute bottom-8 left-20">
        <button className=" hidden md:block relative  text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              <a
                href="https://mahtabtech.com/meetmahtab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Meet Mahtab
              </a>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </div>
      </div>

      {/* SVG second on small screens, right on md+ */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="
          w-full
          flex
          justify-center
          items-center
          mb-8
          md:mb-0
          order-2 md:order-none
        "
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          className="
            w-48 h-48
            sm:w-72 sm:h-72
            md:w-[350px] md:h-[350px]
            lg:w-[400px] lg:h-[400px]
            xl:w-[500px] xl:h-[500px]
            2xl:w-[650px] 2xl:h-[650px]
            object-contain
          "
          width={650}
          height={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;