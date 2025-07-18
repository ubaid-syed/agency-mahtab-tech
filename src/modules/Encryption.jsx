import { motion } from "framer-motion";
import { slideInFromTop } from "../config/motion";

const Encryption = () => {
  return (
    <div className="flex flex-col relative bg-[#030014] text-white items-center justify-center min-h-screen w-full h-full overflow-hidden">
      {/* Top Title */}
      <div className="absolute w-auto h-auto top-4 sm:top-8 md:top-12 z-[5] px-4">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      {/* Center Lock Animation */}
      <div className="flex flex-col items-center justify-center absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <img
            src="/LockTop.png"
            alt="Lock top"
            className="w-8 sm:w-10 md:w-12 lg:w-[50px] translate-y-2 sm:translate-y-3 md:translate-y-4 lg:translate-y-5 transition-all duration-200 group-hover:translate-y-6 sm:group-hover:translate-y-8 md:group-hover:translate-y-10 lg:group-hover:translate-y-11"
          />
          <img
            src="/LockMain.png"
            alt="Lock Main"
            className="z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[70px] lg:h-[70px]"
          />
        </div>

        {/* Encryption Badge */}
        <div className="Welcome-box px-3 sm:px-4 md:px-[15px] py-1 sm:py-2 md:py-[4px] z-[20] border my-4 sm:my-6 md:my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-xs sm:text-sm md:text-[12px]">Encryption</h1>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute z-[20] bottom-4 sm:bottom-6 md:bottom-8 px-2 sm:px-3 md:px-[5px]">
        <div className="cursive text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium text-center text-gray-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          Secure your data with end-to-end encryption
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full flex items-start justify-center absolute inset-0">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="../../encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
