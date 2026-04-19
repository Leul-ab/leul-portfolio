import React from "react";
import "./App.css";
import SocialLinks from "./components/SocialLinks";
import Profile from "./components/Profile";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Experiance from "./components/Experiance";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import { motion } from "framer-motion";

function App(){
  return(
    <div className="app-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source rel="preload" src="/projects/space-bg.webm" type="video/webm" />
      </video>

      {/* Floating Particles */}
      <ParticlesBackground />
      


      {/* Navbar */}
      <Navbar />
      <SocialLinks />
      {/* Sections */}
      <div className="overlay">
        <Profile />
        <Experiance />
        <Tools />
        <Projects />
        
        <Footer />
      </div>
    </div>
  );
}

export default App;