import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "./Hero.css";
import useScrollAnimation from "./useScrollAnimation";
import "./scrollAnimations.css";

const Master = () => {
  useScrollAnimation();

  return (
    <div
      className="master"
      style={{
        backgroundImage: `url('/bgimage.png')`, // Make sure bgimage.png is in public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Master;
