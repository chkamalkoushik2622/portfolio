import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="main">

      {/* HERO */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Kamal Koushik</h1>
        <p>AI & Web Developer</p>
      </motion.section>

      {/* ABOUT */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>
          Passionate about AI and Web Development. I build modern applications
          with clean UI and powerful backend logic.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>Python</span>
          <span>Java</span>
          <span>Machine Learning</span>
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section 
        className="section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact</h2>
        <p>Email: your@email.com</p>
        <p>Phone: 1234567890</p>
      </motion.section>

    </div>
  );
}

export default Home;