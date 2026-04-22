import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="title">Sai Kamal Koushik</h1>
        <p className="subtitle">AI & Web Developer</p>

        <section>
          <h2>About Me</h2>
          <p>
            I am passionate about Artificial Intelligence and Web Development,
            focused on building real-world impactful applications.
          </p>
        </section>

        <section>
          <h2>Research Interests</h2>
          <p>Machine Learning • Artificial Intelligence • Data Science</p>
        </section>

        <section>
          <h2>Personal Details</h2>
          <p><strong>Phone:</strong> 7674083545</p>
          <p><strong>Email:</strong> se23uari027@mahindrauniversity.edu.in</p>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="skills">
            <span>React</span>
            <span>Python</span>
            <span>Java</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;