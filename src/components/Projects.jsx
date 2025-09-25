
import "./Projects.css";
const Projects = () => {
  const projectList = [
    {
      name: "E-Commerce Website",
      description: "A full-stack e-commerce web application with product management, cart, and checkout features.",
      techStack: "Java, Spring Boot, React.js, MySQL",
      link: "#", 
      caseStudyPath:"/CaseStudyEcommerce"
    },
    {
      name: "Expense Tracker",
      description: "A web application to track daily expenses, categorize spending, and visualize monthly budgets.",
      techStack: "Java, Spring Boot, React.js, MySQL",
      link: "#", 
      caseStudyPath:"/expense"
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio website to showcase skills and projects.",
      techStack: "React.js, HTML5, CSS3, Netlify",
      link: "https://hari-priya-portfolio1.netlify.app/",
      caseStudyPath:"/portfolio"
    },
    {
  name: "Fotogency (Group Project)",
  description: "A photography agency website built during Full Stack course. I designed the Home tab.",
  techStack: "HTML5, CSS3, JavaScript, Netlify",
  link: "https://tubular-marzipan-9a9e3e.netlify.app/",
  caseStudyPath: "/fotogency"
},

  ];

 

  return (
     <section className="projects animate-on-scroll" id="projects">

      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <div className="pro-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">Demo Live 
            </a>
              <a  href={project.caseStudyPath + ".html"} target="_blank" rel="noopener noreferrer">
                    Case Study
               </a>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
