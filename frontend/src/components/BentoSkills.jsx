import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
];

const BentoSkills = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ duration: 0.3 }}
          className="group p-6 rounded-2xl bg-[#112240] hover:bg-[#0f1e38] shadow-xl cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_#64ffda]"
        >
          <div className="text-4xl mb-4">{skill.icon}</div>
          <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-all">
            {skill.name}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

export default BentoSkills;
