import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    { id: "github", icon: <FaGithub />, url: "https://github.com/Leul-ab", className: "github" },
    { id: "linkedin", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/leul-a-0509a9279/", className: "linkedin" },
    { id: "gmail", icon: <FaEnvelope />, url: "mailto:leulabera321@gmail.com", className: "gmail" },
  ];

  return (
    <motion.div
      className="profile-social-links"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon ${link.className}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;