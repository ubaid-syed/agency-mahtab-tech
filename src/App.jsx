import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./modules/Hero";
import Navbar from "./components/Nav/Navbar";
import useLocomotive from "./hooks/useLocomotive";
import RealWork from "./modules/RealWork";
import Team from "./modules/Team";
import About from "./modules/About";
import Insights from "./modules/Insights";
import Build from "./modules/Build";
import Footer from "./modules/Footer";
import Preloader from "./components/preloader/Preloader";
import Testimonial from "./modules/Testimonial";
import Projects from "./modules/Projects";
import ContactMove from "./components/ContactMove/ContactMove";
import Abouts from "./pages/About";
import OurServices from "./pages/Services.jsx";
import OurProjects from "./pages/Projectss.jsx";
import ServiceId1 from "./pages/Services/ServiceId1.jsx";
// import Projectes from "./modules/Projectes"; // Not used yet, for future pages

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.body.appendChild(script);
  });
}

// Home page sections as a single component
const Home = () => (
  <>
    <Hero />
    <RealWork />
    <Insights />
    <Team />
    <Projects />
    {/* <Projectes /> */}
    <About />
    <Testimonial />
  </>
);

// Layout component to wrap all pages with shared sections
const PageLayout = ({ children }) => (
  <>
    {children}
    <Testimonial />
    <div className="relative z-10">
      <Build />
      <ContactMove />
      <Footer />
    </div>
  </>
);

const App = () => {
  useLocomotive(true); // Disable locomotive scroll

  useEffect(() => {
    const scriptSrc = "./plugin.js";

    setTimeout(() => {
      loadScript(scriptSrc)
        .then(() => {
          console.log("Plugin script loaded successfully.");
        })
        .catch((error) => {
          console.error("Error loading the plugin script:", error);
        });
    }, 5000);

    return () => {
      const script = document.querySelector(`script[src="${scriptSrc}"]`);
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Preloader />
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <PageLayout>
                  <Hero />
                  <RealWork />
                  <Insights />
                  <Team />
                  <Projects />
                  {/* <Projectes /> */}
                  <About />
                </PageLayout>
              }
            />
            <Route
              path="/about"
              element={
                <PageLayout>
                  <Abouts />
                </PageLayout>
              }
            />
            <Route
              path="/services"
              element={
                <PageLayout>
                  <OurServices />
                </PageLayout>
              }
            />
            <Route
              path="/serviceid1"
              element={
                <PageLayout>
                  < ServiceId1 />
                </PageLayout>
              }
            />
            <Route
              path="/projects"
              element={
                <PageLayout>
                  <OurProjects />
                </PageLayout>
              }
            />
            {/* 
              Add new pages below as needed, for example:
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              etc.
            */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
