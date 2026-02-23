import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";



const projects = [
  {
    name: "SafePathAI",
    description: "AI-Powered Route Recommender based on congestion & risk.",
    tech: "Python, Flask, ML, Google Maps API",
    image: "/images/safepathai.png",  // put image in public/images
    link: "#",
  },
  {
    name: "Portfolio Website",
    description: "Interactive portfolio built with React.js.",
    tech: "React, CSS, Bootstrap",
    image: "/images/portfolio.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={1500}
          >
            <div className="project-card">
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />

              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Tech:</strong> {project.tech}</p>

              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;