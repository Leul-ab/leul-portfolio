import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Leul-ab" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/leul-a-0509a9279/" },
    { icon: <FaEnvelope />, url: "mailto:leulabera321@gmail.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer-socials">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Leul Abera. All rights reserved.</p>
    </footer>

  );
};

export default Footer;
