"use client"

import { useEffect, useState } from "react";

const Header = () => {
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    // Function to set active hash on hash change
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    // Initial setting of active hash
    handleHashChange();


    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (href: string) => activeHash === href;

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border bg-white/10 backdrop-blur border-white/15 rounded-full">
        <a href="#home" className={`nav-item ${isActive("#home") ? "nav-item-active" : ""}`}>Home</a>
        <a href="#projects" className={`nav-item ${isActive("#projects") ? "nav-item-active" : ""}`}>Project</a>
        <a href="#about" className={`nav-item ${isActive("#about") ? "nav-item-active" : ""}`}>About</a>
        <a href="#contact" className={`nav-item ${isActive("#contact") ? "nav-item-active" : ""}`}>Contact</a>
      </nav>
    </div>
  );
};

export default Header;
