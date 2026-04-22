import "./Home.css";
<img src="/profile.jpg" alt="profile" className="profile" />

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>My Portfolio</h1>

        <img src="/profile.jpg" alt="profile" className="profile" />

        <h2>About Me</h2>
        <p>
          I am a student passionate about AI, Web Development and building real-world applications.
        </p>

        <h2>Research Interests</h2>
        <p>Machine Learning, Artificial Intelligence, Data Science</p>

        <h2>Personal Details</h2>
        <ul>
          <li>Name: Kamal Koushik</li>
          <li>Phone: 1234567890</li>
          <li>Email: your@email.com</li>
        </ul>

        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>Python</span>
          <span>Java</span>
        </div>
      </div>
    </div>
  );
}

export default Home;