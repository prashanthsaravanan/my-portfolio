import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4 glow-text">
          Hi, I'm Prashanth 👋
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          CSE Student | Full Stack Developer | AI Enthusiast
        </p>
        <button className="bg-indigo-500 px-6 py-3 rounded-full hover:scale-110 transition duration-300">
          View Projects
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;