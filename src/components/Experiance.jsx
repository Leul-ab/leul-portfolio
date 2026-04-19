import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiances = [
    {
      role: "Backend Developer Intern",
      company: "ArifPay",
      duration: "3 Months",
      description: "Worked on ArifMenu full backend API development using C#, .NET, PostgreSQL and Clean Architecture."
    }
  ];

  const education = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "St Mary's University", // Example institution
      duration: "2021 - 2026",
      description: "Focusing on Software Engineering, Backend Systems, and Database Management."
    }
  ];

  return (
    <motion.section
      id="experiance"
      className="section experiance-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="gradient-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        History
      </motion.h2>

      <div className="dual-container">
        {/* Left: Experience */}
        <div className="history-column">
          <h3 className="column-label">Experience</h3>
          <motion.ul className="experiance-list">
            {experiances.map((exp, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3>{exp.role}</h3>
                <p className="company">{exp.company} • {exp.duration}</p>
                <span>{exp.description}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* The Vertical Line */}
        <motion.div 
          className="vertical-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />

        {/* Right: Education */}
        <div className="history-column">
          <h3 className="column-label">Education</h3>
          <motion.ul className="experiance-list">
            {education.map((edu, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3>{edu.degree}</h3>
                <p className="company">{edu.institution} • {edu.duration}</p>
                <span>{edu.description}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;