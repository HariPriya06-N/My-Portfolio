import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiSpringboot, SiMysql, SiNetlify, SiRailway } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const Skills = () => {
  return (
    <section className="skills animate-on-scroll" id="skills">

      <h2>Skills</h2>
      <div className="skills-grid">

        
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="icons">
            <div className="icon-box">
              <FaHtml5 color="#E34F26" title="HTML5" />
              <span>HTML5</span>
            </div>
            <div className="icon-box">
              <FaCss3Alt color="#1572B6" title="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="icon-box">
              <SiJavascript color="#F7DF1E" title="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="icon-box">
              <FaReact color="#61DBFB" title="React.js" />
              <span>React.js</span>
            </div>
          </div>
        </div>

        
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="icons">
            <div className="icon-box">
              <FaJava color="#f89820" title="Java" />
              <span>Java</span>
            </div>
            <div className="icon-box">
              <SiSpringboot color="#6DB33F" title={"Spring\nBoot"} />
              <span>Spring Boot</span>
            </div>
          </div>
        </div>

        
        <div className="skill-category">
          <h3>Databases</h3>
          <div className="icons">
            <div className="icon-box">
              <SiMysql color="#4479A1" title="MySQL" />
              <span>MySQL</span>
            </div>
          </div>
        </div>

        
        <div className="skill-category">
          <h3>Tools & Deployment</h3>
          <div className="icons">
            <div className="icon-box">
              <FaGitAlt color="#F05032" title="Git & GitHub" />
              <span>Git & GitHub</span>
            </div>
            <div className="icon-box">
              <SiNetlify color="#00C7B7" title="Netlify" />
              <span>Netlify</span>
            </div>
            <div className="icon-box">
              <SiRailway color="white" title="Railway" />
              <span>Railway</span>
            </div>
            <div className="icon-box">
              <BiLogoVisualStudio color="#0078d7" title="VS Code" />
              <span>VS Code</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
