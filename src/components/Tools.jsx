import React from "react";
import { motion } from "framer-motion";

const languages = [
  { name: "C#", logo: "/icons/Csharp.svg" },
  { name: "JavaScript", logo: "/icons/JavaScript.svg" },
  { name: "PHP", logo: "/icons/PHP.svg" },
  { name: "Java", logo: "/icons/Java.svg" },
  { name: "C++", logo: "/icons/Cplus.svg" },

];

const tools = [
  { name: ".NET Core", logo: "/icons/NET.png" },
  { name: "Laravel", logo: "/icons/Laravel.svg", style: { transform: "scale(1.2)" } },
  { name: "Node.Js", logo: "/icons/Node.js.svg", style: { transform: "scale(1.2)" } },
  { name: "Swagger", logo: "/icons/Swagger.svg" },
  { name: "React", logo: "/icons/React.svg" },
  { name: "JWT Auth", logo: "/icons/jwt.png" },
  { name: "PostgreSQL", logo: "/icons/PostgresSQL.svg" },
  { name: "GitHub", logo: "/icons/github.svg" },
  { name: "Git", logo: "/icons/Git.png" },
  { name: "Docker", logo: "/icons/Docker.png" },
];

const BadgeRow = ({ items }) => (
  <div className="tools-badge-row">
    {items.map((item, index) => (
      <div className="tools-badge" key={index}>
        <img src={item.logo} alt={item.name} className="tools-badge-icon" style={item.style} />
        <span>{item.name}</span>
      </div>
    ))}
  </div>
);

const Tools = () => {
  return (
    <section id="tools" className="section">
      <div className="tools-wrapper">

        <div className="tools-group">
          <h3 className="tools-group-label">Languages</h3>
          <BadgeRow items={languages} />
        </div>

        <motion.div
          className="tools-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{ originX: 0.5 }}
        />

        <div className="tools-group">
          <h3 className="tools-group-label">Frameworks &amp; Tools</h3>
          <BadgeRow items={tools} />
        </div>

      </div>
    </section>
  );
};

export default Tools;