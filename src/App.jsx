import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Jaikisan – Farmer Market Application",
    type: "Manual + Selenium Automation",
    image: "/images/jaikisan.png",
    link: "https://github.com/ShreyaThimmaraju/Jaikisan-Farmer-Market-Application-Manual-Testing",
    demo: "https://jaikisan.app/",
  },
  {
    number: "02",
    title: "D-Cart Application",
    type: "Manual Testing – E-commerce",
    image: "/images/dcart.png",
    link: "https://github.com/ShreyaThimmaraju/D-Cart-Manual-Testing",
  },
  {
    number: "03",
    title: "Eazysch – School Management System",
    type: "Manual Testing – Web Application",
    image: "/images/eazysch.png",
    link: "https://github.com/ShreyaThimmaraju/Eazysch-School-Management-System-Manual-Testing",
  },
  {
    number: "04",
    title: "Event Management Application",
    type: "Manual Testing – Web Application",
    image: "/images/event-management.png",
    link: "https://github.com/ShreyaThimmaraju/Event-Management-Manual-Testing",
  },
  {
    number: "05",
    title: "Get-In-Touch Contact Form",
    type: "Manual Testing – Form Validation",
    image: "/images/get-in-touch.png",
    link: "https://github.com/ShreyaThimmaraju/Get-In-Touch-Contact-Form-Manual-Testing",
  },
  {
    number: "06",
    title: "Hotel Website",
    type: "Manual Testing – Hotel Booking",
    image: "/images/hotel.png",
    link: "https://github.com/ShreyaThimmaraju/Hotel-Website-Manual-Testing",
  },
  {
    number: "07",
    title: "Snake Game",
    type: "Manual Testing – Game Application",
    image: "/images/snake-game.png",
    link: "https://github.com/ShreyaThimmaraju/Snake-Game-Manual-Testing",
  },
  {
    number: "08",
    title: "Todo App",
    type: "Manual Testing – Web Application",
    image: "/images/todo.png",
    link: "https://github.com/ShreyaThimmaraju/Todo-App-Manual-Testing",
  },
  {
    number: "09",
    title: "TV Maze Application",
    type: "Manual Testing – Web Application",
    image: "/images/tvmaze.png",
    link: "https://github.com/ShreyaThimmaraju/TVMAZE-Manual-Testing",
  },
  {
    number: "10",
    title: "uMap – Maps Application",
    type: "Manual Testing – Maps & Location",
    image: "/images/umap.png",
    link: "https://github.com/ShreyaThimmaraju/uMap-Maps-Application-Manual-Testing",
  },
];

const skills = [
  {
    title: "Manual Testing",
    text: "Test scenarios, test case design, execution, defect reporting and validation.",
  },
  {
    title: "Automation Testing",
    text: "Selenium WebDriver automation using Java, TestNG, Maven and Page Object Model.",
  },
  {
    title: "API Testing",
    text: "REST API testing using Postman with request, response and validation checks.",
  },
  {
    title: "Database Testing",
    text: "Basic SQL and MySQL knowledge for application data validation.",
  },
];

const testingKnowledge = [
  {
    title: "Functional Testing",
    text: "Validating application functionality against business and functional requirements.",
  },
  {
    title: "Regression Testing",
    text: "Ensuring existing functionality continues to work after application changes.",
  },
  {
    title: "Smoke Testing",
    text: "Quick verification of critical application functionality before detailed testing.",
  },
  {
    title: "Sanity Testing",
    text: "Focused testing to verify specific changes or fixes are working correctly.",
  },
  {
    title: "Boundary Value Analysis",
    text: "Testing values at, below and above valid input boundaries.",
  },
  {
    title: "Equivalence Partitioning",
    text: "Dividing input data into valid and invalid classes to create effective test cases.",
  },
];

const testingProcess = [
  {
    number: "01",
    title: "Requirement Analysis",
    text: "Understand requirements and identify testable features.",
  },
  {
    number: "02",
    title: "Test Planning",
    text: "Define testing approach, scope, resources and priorities.",
  },
  {
    number: "03",
    title: "Test Case Design",
    text: "Create clear test scenarios and detailed test cases.",
  },
  {
    number: "04",
    title: "Test Execution",
    text: "Execute test cases and compare actual results with expected results.",
  },
  {
    number: "05",
    title: "Defect Reporting",
    text: "Report defects with proper steps, severity and priority.",
  },
  {
    number: "06",
    title: "Retesting & Regression",
    text: "Verify fixes and ensure existing features remain stable.",
  },
];

const tools = [
  {
    name: "Selenium",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
  },
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "TestNG",
    badge: "T",
    className: "testng-badge",
  },
  {
    name: "Maven",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
  },
  {
    name: "Page Object Model",
    badge: "POM",
    className: "purple-badge",
  },
  {
    name: "Jenkins",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  },
  {
    name: "Postman",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Eclipse",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
  },
];

const capabilities = [
  {
    title: "Test Case Design",
    text: "Create structured test cases using practical test design techniques.",
  },
  {
    title: "Defect Identification",
    text: "Identify, document and communicate defects clearly with useful evidence.",
  },
  {
    title: "Automation",
    text: "Build maintainable Selenium automation using Java, TestNG and POM.",
  },
  {
    title: "Quality Mindset",
    text: "Focus on usability, reliability and delivering quality software.",
  },
];

const whyHire = [
  {
    number: "01",
    title: "Strong Testing Foundation",
    text: "Good understanding of software testing concepts and processes.",
  },
  {
    number: "02",
    title: "Hands-on Projects",
    text: "Practical experience testing multiple real-world style web applications.",
  },
  {
    number: "03",
    title: "Automation Knowledge",
    text: "Familiar with Selenium, Java, TestNG, Maven and Page Object Model.",
  },
  {
    number: "04",
    title: "Quick Learner",
    text: "Ready to learn new tools, technologies and testing practices.",
  },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.1c-3.19.69-3.86-1.35-3.86-1.35-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.14c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46C23.21 24 24 .77 24 1.72V22.28C24 23.23 23.21 24 22.23 24Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm0 4-8 5-8-5V7l8 5 8-5v1Z" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5c-5 0-9.27 3.11-11 7 1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4 5 11h4v9h6v-9h4l-7-7Z" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            Shreya<span>T</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#testing" onClick={closeMenu}>Testing</a>
            <a href="#tools" onClick={closeMenu}>Tools</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#resume" onClick={closeMenu}>Resume</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      {/* SOCIAL SIDEBAR */}
<div className="social-sidebar">

  <a
    href="https://www.linkedin.com/in/shreya-t-9726232a2/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="social-item linkedin"
  >
    <LinkedInIcon />
    <span>LinkedIn</span>
  </a>

  <a
    href="https://github.com/ShreyaThimmaraju"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="social-item github"
  >
    <GitHubIcon />
    <span>GitHub</span>
  </a>

  <a
    href="mailto:shreyathimmarajuv@gmail.com"
    aria-label="Email"
    className="social-item email"
  >
    <EmailIcon />
    <span>Email</span>
  </a>

</div>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="eyebrow">WELCOME TO MY PORTFOLIO</div>

            <h1>
              Shreya<span>T</span>
            </h1>

            <h2>
              I’m a <span>Software Tester</span>
            </h2>

            <h3>Manual Tester | QA Engineer | Automation Tester</h3>

            <p className="hero-description">
              Passionate about software quality, finding defects and
              delivering reliable applications through effective testing.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-ring">
              <img
                src="/images/profile.jpg"
                alt="Shreya T"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">ABOUT ME</div>
            <h2>Quality-focused Software Tester</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am Shreya T, an MCA graduate with a strong interest in
                Software Testing and Quality Assurance.
              </p>

              <p>
                I have hands-on knowledge of Manual Testing, Selenium
                WebDriver, Java, TestNG, Maven, SQL, REST API Testing and
                Git/GitHub.
              </p>

              <p>
                I enjoy understanding requirements, creating effective test
                cases, identifying defects and ensuring that applications
                work as expected.
              </p>

              <p>
                My goal is to begin my career as a Software Tester / QA
                Engineer and contribute to delivering reliable and
                user-friendly software.
              </p>
            </div>

            <div className="about-card">
              <div className="about-item">
                <span>Education</span>
                <strong>MCA – Mount Carmel College</strong>
              </div>

              <div className="about-item">
                <span>Specialization</span>
                <strong>Software Testing & QA</strong>
              </div>

              <div className="about-item">
                <span>Location</span>
                <strong>Bangalore, Karnataka</strong>
              </div>

              <div className="about-item last">
                <span>Career Goal</span>
                <strong>QA Engineer / Software Tester</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">SKILLS</div>
            <h2>Testing Skills</h2>
          </div>

          <div className="card-grid four">
            {skills.map((skill) => (
              <div className="info-card" key={skill.title}>
                <div className="card-dot"></div>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTING KNOWLEDGE */}
      <section id="testing" className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">TESTING KNOWLEDGE</div>
            <h2>Core Testing Concepts</h2>
          </div>

          <div className="card-grid three">
            {testingKnowledge.map((item) => (
              <div className="info-card compact" key={item.title}>
                <div className="card-number">✓</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">TESTING PROCESS</div>
            <h2>How I Approach Testing</h2>
          </div>

          <div className="process-grid">
            {testingProcess.map((item) => (
              <div className="process-card" key={item.number}>
                <div className="process-number">{item.number}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">TOOLS & TECHNOLOGIES</div>
            <h2>My Testing Toolkit</h2>
          </div>

          <div className="tools-grid">
            {tools.map((tool) => (
              <div className="tool-card" key={tool.name}>
                {tool.image ? (
                  <img src={tool.image} alt={tool.name} />
                ) : (
                  <div className={`tool-badge ${tool.className}`}>
                    {tool.badge}
                  </div>
                )}

                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-alt projects-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">PROJECTS</div>
            <h2>Testing Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />

                  <div className="project-overlay">
                    <div className="project-actions">
                      <a
                        href={project.demo || project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action"
                        aria-label={`View ${project.title}`}
                        title="View Project"
                      >
                        <EyeIcon />
                      </a>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-action"
                        aria-label={`GitHub ${project.title}`}
                        title="GitHub Repository"
                      >
                        <GitHubIcon />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-number">{project.number}</div>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">WHAT I CAN DO</div>
            <h2>QA Capabilities</h2>
          </div>

          <div className="card-grid four">
            {capabilities.map((item) => (
              <div className="info-card" key={item.title}>
                <div className="capability-icon">+</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="section section-alt">
        <div className="container">
          <div className="resume-card">
            <div>
              <div className="section-label">MY RESUME</div>
              <h2>Ready to work on quality software.</h2>
              <p>
                Explore my resume to learn more about my education, skills,
                training and testing projects.
              </p>
            </div>

            <a
              href="/Shreya_T_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* WHY HIRE */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">WHY HIRE ME</div>
            <h2>What I Bring</h2>
          </div>

          <div className="card-grid four">
            {whyHire.map((item) => (
              <div className="why-card" key={item.number}>
                <div className="why-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">GET IN TOUCH</div>
            <h2>Let's Connect</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Have a testing opportunity?</h3>

              <p>
                I am interested in Software Testing, QA Engineer and
                Automation Testing opportunities. Feel free to contact me.
              </p>

              <div className="contact-links">
                <a href="mailto:shreyathimmarajuv@gmail.com">
                  <EmailIcon />
                  <span>shreyathimmarajuv@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shreya-t-9726232a2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/ShreyaThimmaraju"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="a5a83efd-da5e-4c54-92cc-66e7b23b1e9b"
              />

              <input
                type="hidden"
                name="from_name"
                value="Shreya T Portfolio"
              />

              <input
                type="hidden"
                name="subject"
                value="New Portfolio Contact Message"
              />

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="message_subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>

              <button type="submit" className="primary-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Shreya T. All rights reserved.
          </p>

          <p>Software Tester | QA Engineer</p>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <a href="#home" className="back-to-top" aria-label="Back to top">
        <ArrowUpIcon />
      </a>
    </div>
  );
}

export default App;