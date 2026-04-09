import React from "react";
import { motion } from "framer-motion";

const Experiance = () => {
  const experiances = [
    {
      role: "Backend Developer Intern",
      company: "ArifPay",
      duration: "3 Months",
      description: "Worked on ArifMenu full backend API development using C#, .NET, PostgreSQL and Clean Architecture."
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
        whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView for consistency
        transition={{ duration: 1 }}
      >
        Experiance
      </motion.h2>

      <div className="experiance-container">
        {/* Photo section removed to focus on content */}
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
    </motion.section>
  );
};

export default Experiance;