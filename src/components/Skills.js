import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  // const skills = ["Java", "Python", "C++", "React", "HTML/CSS", "JS"];
  return (
    <motion.section
  id="about"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2>Skills</h2>
  <div className="skills-grid">
    {["Java", "Python", "C++", "React", "HTML/CSS", "JavaScript"].map((skill, index) => (
      <div key={index} className="skill-card">
        {skill}
      </div>
    ))}
  </div>
</motion.section>
  );
};

export default Skills;