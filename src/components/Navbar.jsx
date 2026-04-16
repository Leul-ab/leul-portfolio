import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("profile");
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });

  const ulRef = useRef(null);
  const navItems = ["profile", "experiance", "tools", "projects"];

  /* =========================
      Intersection Observer Logic (Same as before)
  ========================= */
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* =========================
      Underline Logic
  ========================= */
  useEffect(() => {
    const updateUnderline = () => {
      if (!ulRef.current) return;

      const activeIndex = navItems.indexOf(active);
      // We explicitly exclude the CV button from being underlined
      const navLinks = ulRef.current.querySelectorAll("li:not(.cv-btn)");

      if (activeIndex !== -1 && navLinks[activeIndex]) {
        const activeLink = navLinks[activeIndex];
        const rect = activeLink.getBoundingClientRect();
        const parentRect = ulRef.current.getBoundingClientRect();

        setUnderlineProps({
          left: rect.left - parentRect.left,
          width: rect.width
        });
      }
    };

    const timeoutId = setTimeout(updateUnderline, 30);
    window.addEventListener("resize", updateUnderline);
    return () => {
      window.removeEventListener("resize", updateUnderline);
      clearTimeout(timeoutId);
    };
  }, [active]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <ul ref={ulRef}>
        {navItems.map((id) => (
          <motion.li
            key={id}
            whileHover={{ scale: 1.1 }}
            className={active === id ? "active" : ""}
            onClick={() => scrollToSection(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </motion.li>
        ))}

        {/* Repurposed Button */}
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cv-btn"
          onClick={() => window.open("/LEUL_ABERA_CV.pdf", "_blank")}
        >
          View CV
        </motion.li>

        <motion.div
          className="navbar-underline"
          animate={{
            left: underlineProps.left,
            width: underlineProps.width
          }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
