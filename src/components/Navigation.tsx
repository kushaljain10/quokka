import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Navigation.css";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`navigation ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <div className="nav-logo" onClick={() => scrollToSection("hero")}>
          $QUOKKA 🙂
        </div>
        <div className="nav-links">
          <a onClick={() => scrollToSection("lore")}>Lore</a>
          <a onClick={() => scrollToSection("memes")}>Memes</a>
          {/* <a onClick={() => scrollToSection('ca')}>CA</a> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
