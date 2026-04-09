import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NIB Insurance API",
    description: "C#, .NET backend for managing insurance policies & claims.",
    image: "/nibinsurance.png",
    tools: ["C#", ".NET", "PostgreSQL", "JWT Auth", "Swagger"],
    github: "https://github.com/Leul-ab/NIB-Insurance",
  },
  
  {
    title: "Arifmenu API",
    description: "C#, .NET + Layered Architecture project with CQRS and JWT auth.",
    image: "/arifmenu.png",
    tools: [".NET", "Entity Framework", "PostgreSQL", "Swagger"],
    github: "https://github.com/Leul-ab/ArifMenu",
  },
  
  {
    title: "E-Commerce Backend",
    description: "Laravel + MySQL backend for managing products & orders.",
    image: "/projects/E-commerce.jpg",
    tools: ["Laravel", "MySQL", "JWT Auth"],
  },
  
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }} // Added a small lift effect on hover
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tools">
                {project.tools.map((tool, i) => (
                  <span key={i} className="tool-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
