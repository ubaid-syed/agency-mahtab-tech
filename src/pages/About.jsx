import AboutContent from "../modules/AboutContent.jsx";
import Testimonial from "../modules/Testimonial.jsx";
import Build from "../modules/Build";
import Encryption from "../modules/Encryption.jsx";
import Footer from "../modules/Footer";
import ContactMove from "../components/ContactMove/ContactMove";
// import MainCard from "../components/CardsAnimation/MainCard.jsx";
import StarsCanvas from "../components/StarBackground.jsx";

const About = () => {
  return (
    <>
      <div
        className="relative bg-[#030014] flex flex-col min-h-screen w-full overflow-hidden"
        id="about-me"
      >
        <video
          autoPlay
          muted
          loop
          className="
            rotate-180
            absolute
            top-[-340px]
            left-0
            z-[1]
            object-cover
            w-full
            h-full
            xs:top-[-180px]
            xs:h-[70vh]
            sm:top-[-200px]
            sm:h-[80vh]
            md:top-[-250px]
            md:h-[90vh]
            lg:top-[-280px]
            lg:h-full
            xl:top-[-300px]
            xl:h-full
            2xl:top-[-320px]
            2xl:h-full
          "
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        
        <div className="relative z-10 flex flex-1 w-full">
          <StarsCanvas />
          <AboutContent />
        </div>
      </div>
      
      <div className="relative z-10 w-full">
        {/* <MainCard /> */}
        <Encryption />
       
      </div>
    </>
  );
};

export default About;