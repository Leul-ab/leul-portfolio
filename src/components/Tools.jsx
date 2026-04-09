import React from "react";


const languages = [
  { name: "C#", logo: "/icons/Csharp.svg" },
  { name: "JavaScript", logo: "/icons/JavaScript.svg" },
  { name: "PHP", logo: "/icons/PHP.svg" },
  { name: "Java", logo: "/icons/Java.svg" },
  { name: "C++", logo: "/icons/Cplus.svg" },
  { name: "HTML5", logo: "/icons/HTML5.svg" },
  { name: "CSS3", logo: "/icons/CSS3.svg" }
];

const tools = [
  { name: ".NET Core", logo: "/icons/NET.png" },
  { name: "Swagger", logo: "/icons/Swagger.svg" },
  { name: "JWT Auth", logo: "/icons/jwt.png" },
  { name: "PostgreSQL", logo: "/icons/PostgresSQL.svg" },
  { name: "MySQL", logo: "/icons/MySQL.svg" },
  { name: "React", logo: "/icons/React.svg" },
  { name: "GitHub", logo: "/icons/github.svg" },
  { name: "Git", logo: "/icons/Git.png" },
  { name: "Docker", logo: "/icons/Docker.png" },
  { name: "Visual Studio", logo: "/icons/mvs.png" }
];

const Tools = () => {
  return (
    <section id="tools" className="section">

      

      {/* Programming Languages */}
      <div className="tools-row">

        <h3>Programming Languages</h3>

        <div className="marquee fade">
          <div className="marquee-track scroll-left">

            {[...languages, ...languages].map((tool, index) => (
              <div className="tool-card" key={index}>
                <img src={tool.logo} alt={tool.name} className="tool-logo" />
                <p>{tool.name}</p>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Tools */}
      <div className="tools-row">

        <h3>Frameworks & Tools</h3>

        <div className="marquee fade">
          <div className="marquee-track scroll-right">

            {[...tools, ...tools].map((tool, index) => (
              <div className="tool-card" key={index}>
                <img src={tool.logo} alt={tool.name} className="tool-logo" />
                <p>{tool.name}</p>
              </div>
            ))}

          </div>
        </div>

      </div>

    </section>
  );
};

export default Tools;