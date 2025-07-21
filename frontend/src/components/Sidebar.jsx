import { FaBars, FaTimes, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import meImage from "../assets/me.jpg"; // Make sure it's inside src/assets/me.jpg

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { id: "#about", name: "About" },
    { id: "#skills", name: "Skills" },
    { id: "#projects", name: "Projects" },
    { id: "#education", name: "Education" },
    { id: "#contact", name: "Contact" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-[40%] bg-bgLight h-screen sticky top-0 justify-between py-12">
        <div className="flex flex-col items-center">
          <img
            src={meImage}
            alt="Srinivasulu"
            className="w-24 h-24 rounded-full border-4 border-[#FFD700] mb-4"
          />
          <h1 className="text-3xl font-bold text-[#FFD700] font-mono mb-2">
            Srinivasulu
          </h1>
          <TypeAnimation
            sequence={[
              "Curious Coder",
              2000,
              "Aspiring Full Stack Developer",
              2000,
              "Logic Lover",
              2000,
              "Problem Solver",
              2000,
              "Tech Explorer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[#00BFFF] text-lg mb-10"
          />
          <nav className="flex flex-col gap-6 font-mono text-textMuted text-lg">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                className="hover:text-[#FFD700] transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://www.instagram.com/sachusrinivasulu/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#FFD700] hover:text-pink-500" size={24} />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#FFD700] hover:text-blue-500" size={24} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-[#FFD700] hover:text-white" size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        {menuOpen ? (
          <FaTimes
            onClick={() => setMenuOpen(false)}
            size={24}
            className="text-[#FFD700]"
          />
        ) : (
          <FaBars
            onClick={() => setMenuOpen(true)}
            size={24}
            className="text-[#FFD700]"
          />
        )}
      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-bgLight p-6 z-40 flex flex-col justify-between">
          <div>
            <nav className="flex flex-col gap-6 text-textMuted font-mono">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  className="hover:text-[#FFD700] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <a href="https://www.instagram.com/sachusrinivasulu/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#FFD700] hover:text-pink-500" size={24} />
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#FFD700] hover:text-blue-500" size={24} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-[#FFD700] hover:text-white" size={24} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
