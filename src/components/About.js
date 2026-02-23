import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
  id="about"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>    
      <h2>About Me</h2>
      <p>
        I am a CSE student passionate about Web Development, AI, and
        creating interactive software solutions. I enjoy working on real-world projects that make an impact.
      </p>
    </motion.section>
  );
};

export default About;