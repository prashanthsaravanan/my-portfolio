import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
  id="about"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2>Contact Me</h2>
  <div className="contact-box">
    <p>📧 prashanth@example.com</p>
    <p>💼 linkedin.com/in/prashanth</p>
    <p>💻 github.com/prashanth</p>
  </div>
</motion.section>
  );
};

export default Contact;