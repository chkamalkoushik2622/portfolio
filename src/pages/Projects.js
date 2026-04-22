import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>Built using React and deployed on GitHub Pages</p>
        <a href="https://github.com/chkamalkoushik2622/portfolio">View Code</a>
      </div>

      <div className="project-card">
        <h3>Student Prediction System</h3>
        <p>Machine learning model to predict student performance</p>
        <a href="https://github.com/chkamalkoushik2622/project2">View Code</a>
      </div>
    </div>
  );
}

export default Projects;