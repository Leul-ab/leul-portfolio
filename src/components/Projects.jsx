import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NIB Insurance API",
    description: "C#, .NET backend for managing insurance policies & claims.",
    image: "/projects/nibinsurance.webp",
    tools: ["C#", ".NET", "PostgreSQL", "JWT Auth", "Swagger", "React"],
    github: "https://github.com/Leul-ab/NIB-Insurance",
    demo: "https://nib-insurance-1.onrender.com",
  },

  {
    title: "Arifmenu API",
    description: "C#, .NET + Layered Architecture project with CQRS and JWT auth.",
    image: "/projects/arifmenu.webp",
    tools: [".NET", "Entity Framework", "PostgreSQL", "Swagger"],
    github: "https://github.com/Leul-ab/ArifMenu",
  },

  {
    title: "Spendly API",
    description: "Node.js, express.js backend API project for personal finance management",
    image: "/projects/E-commerce.webp",
    tools: ["Node.js", "Express.js", "PostgreSQL", "JWT Auth", "Prisma"],
    github: "https://github.com/Leul-ab/SpendlyAPI",
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
            </a>

            <div className="project-tools">
              {project.tools.map((tool, i) => (
                <span key={i} className="tool-badge">
                  {tool}
                </span>
              ))}
            </div>

            {project.demo && (
              <div className="project-actions">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                  </svg>
                  Demo API
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
