import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "ArifPay",
    duration: "3 Months",
    description: "Worked on ArifMenu full backend API development using C#, .NET, PostgreSQL and Clean Architecture.",
    tags: ["C#", ".NET", "PostgreSQL", "Clean Architecture"],
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "St Mary's University",
    duration: "2021 – 2026",
    description: "Focusing on Software Engineering, Backend Systems, and Database Management.",
    tags: ["Software Engineering", "Databases", "Systems"],
  },
  {
    degree: "Computer hardware maintainance",
    duration: "3 months",
    description: "It was 3 months of intensive training in computer hardware and maintainance.",
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const HistoryItem = ({ title, subtitle, duration, description, tags, index }) => (
  <motion.li
    className="history-item"
    custom={index}
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <span className="history-bullet" />
    <div className="history-item-body">
      <h3 className="history-item-title">{title}</h3>
      <p className="history-item-meta">
        <span className="history-item-org">{subtitle}</span>
        <span className="history-item-dot">·</span>
        <span className="history-item-duration">{duration}</span>
      </p>
      <p className="history-item-desc">{description}</p>
      {tags && (
        <div className="history-card-tags">
          {tags.map((tag, i) => (
            <span className="history-tag" key={i}>{tag}</span>
          ))}
        </div>
      )}
    </div>
  </motion.li>
);

const Experience = () => {
  return (
    <motion.section
      id="experiance"
      className="section experiance-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="gradient-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        History
      </motion.h2>

      <div className="dual-container">

        {/* Left — Experience */}
        <div className="history-column">
          <p className="column-label">Experience</p>
          <ul className="history-list">
            {experiences.map((exp, i) => (
              <HistoryItem
                key={i}
                index={i}
                title={exp.role}
                subtitle={exp.company}
                duration={exp.duration}
                description={exp.description}
                tags={exp.tags}
              />
            ))}
          </ul>
        </div>

        {/* Vertical line — desktop */}
        <motion.div
          className="vertical-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />

        {/* Horizontal line — mobile only */}
        <motion.div
          className="exp-mobile-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{ originX: 0.5 }}
        />

        {/* Right — Education */}
        <div className="history-column">
          <p className="column-label">Education</p>
          <ul className="history-list">
            {education.map((edu, i) => (
              <HistoryItem
                key={i}
                index={i}
                title={edu.degree}
                subtitle={edu.institution}
                duration={edu.duration}
                description={edu.description}
                tags={edu.tags}
              />
            ))}
          </ul>
        </div>

      </div>
    </motion.section>
  );
};

export default Experience;