import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  const socialLinks = [
    { id: "github", icon: <FaGithub />, url: "https://github.com/Leul-ab", className: "github" },
    { id: "linkedin", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/leul-a-0509a9279/", className: "linkedin" },
    { id: "gmail", icon: <FaEnvelope />, url: "mailto:leulabera321@gmail.com", className: "gmail" },
  ];

  return (
    <>
      {/* --- MAIN PROFILE SECTION --- */}
      <motion.section
        id="profile"
        className="section profile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Profile Image */}
        {/* <motion.div
          className="profile-image-container floating-subtitle"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <img 
            src="/my-profile.JPG" 
            alt="Leul Abera" 
            className="profile-profile-pic" 
          />
        </motion.div> */}

        {/* Name / Title */}
        <motion.h1
          className="profile-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hi, I'M LEUL ABERA
        </motion.h1>

        {/* Roles */}
        <motion.p
          className="profile-subtitle floating-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Backend Developer | API Designer | Database Specialist
        </motion.p>

        {/* Bio Description */}
        <motion.p
  className="profile-description"
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.8 }}
  style={{ lineHeight: '1.8', letterSpacing: '0.5px' }} // Added for readability
>
  High-performance Backend Developer specializing in building robust, scalable systems 
  with <span style={{ color: '#00ffd5', fontWeight: 'bold' }}>.NET 8/9/10</span>. 
  I design secure, production-ready APIs using <span style={{ color: '#ff00cc', fontWeight: 'bold' }}>Clean Architecture </span> 
  and PostgreSQL, ensuring long-term maintainability and seamless integration.
</motion.p>
      </motion.section>
    </>
  );
};

export default Profile;