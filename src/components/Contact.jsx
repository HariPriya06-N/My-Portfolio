import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
      <section className="contact animate-on-scroll" id="contact">

      <h2>Contact Me</h2>
      <p>If you want to discuss a project or just say hi, feel free to reach out!</p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      
      <div className="social-links">
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
    </section>
  );
};

export default Contact;
