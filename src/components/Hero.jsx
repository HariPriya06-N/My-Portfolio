
import "./Hero.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import heroImg from "../assets/hero.png";

const Hero = () => {


  return (
    <>
      <nav>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Natukula Hari Priya</h1>
          <h2>Full Stack Developer | Java & React</h2>
          <p>Bringing logic and design together for impactful applications.</p>
          <div className="hero-buttons">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="res-view">View Resume</button>
            </a>
          </div>
          <div className="social-links1">
            <a href="https://github.com/HariPriya06-N" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/hari-priya-natukula/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} /> LinkedIn
            </a>
            <a href="mailto:your.natukulaharipriya@gmail.com">
              <FaEnvelope size={24} /> Email
            </a>
          </div>
        </div>

        <div className="anime">
          <img className="hero-img" src={heroImg} alt="Hero Image" />
        </div>
      </section>
    </>
  );
};

export default Hero;
