
import Hero from "./Hero";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "./Hero.css";
import useScrollAnimation from "./useScrollAnimation";
import "./scrollAnimations.css";

const Master=()=>{
   useScrollAnimation();
    return(
        <div className="master">
               <Hero></Hero>
               <Aboutme></Aboutme>
               <Skills></Skills>
               <Projects></Projects>
               <Contact></Contact>
            </div>
    )
}
export default Master;
