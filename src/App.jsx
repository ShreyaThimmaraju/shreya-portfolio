import "./App.css";

const projects = [
  {
    title: "Jaikisan – Farmer Market Application",
    type: "Manual Testing + Selenium Automation",
    description:
      "End-to-end QA project covering test scenarios, test cases, defect reporting and Selenium automation using Java, TestNG, Maven and POM.",
    tools:
      "Selenium | Java | TestNG | Maven | POM | Jenkins | ExtentReports",
    link:
      "https://github.com/ShreyaThimmaraju/Jaikisan-Farmer-Market-Application-Manual-Testing",
  },
  {
    title: "D-Cart Application",
    type: "Manual Testing – E-commerce",
    description:
      "Manual testing project covering e-commerce functionality, user flows, test cases, positive and negative scenarios and defect identification.",
    tools: "Manual Testing | Test Cases | Bug Reporting",
    link: "https://github.com/ShreyaThimmaraju/D-Cart-Manual-Testing",
  },
  {
    title: "Eazysch – School Management System",
    type: "Manual Testing – Web Application",
    description:
      "Testing of a school management web application by creating test scenarios, executing test cases and identifying application defects.",
    tools: "Manual Testing | Test Scenarios | Test Cases",
    link: "https://github.com/ShreyaThimmaraju/Eazysch-School-Management-System-Manual-Testing",
  },
  {
    title: "Event Management Application",
    type: "Manual Testing – Web Application",
    description:
      "Manual testing project covering event-related functionality, form validation, user flows and application behavior.",
    tools: "Manual Testing | Functional Testing | Bug Reporting",
    link: "https://github.com/ShreyaThimmaraju/Event-Management-Manual-Testing",
  },
  {
    title: "Get-In-Touch Contact Form",
    type: "Manual Testing – Form Validation",
    description:
      "Testing of contact form functionality including input validation, mandatory fields, valid and invalid data and error handling.",
    tools: "Manual Testing | Validation | Test Cases",
    link: "https://github.com/ShreyaThimmaraju/Get-In-Touch-Contact-Form-Manual-Testing",
  },
  {
    title: "Hotel Website",
    type: "Manual Testing – Hotel Booking",
    description:
      "Manual testing of hotel website functionality including navigation, booking flow, input fields and user interactions.",
    tools: "Manual Testing | Functional Testing | Regression Testing",
    link: "https://github.com/ShreyaThimmaraju/Hotel-Website-Manual-Testing",
  },
  {
    title: "Snake Game",
    type: "Manual Testing – Game Application",
    description:
      "Testing project focused on game functionality, controls, game rules, boundary conditions and different user scenarios.",
    tools: "Manual Testing | Functional Testing | Boundary Testing",
    link: "https://github.com/ShreyaThimmaraju/Snake-Game-Manual-Testing",
  },
  {
    title: "Todo App",
    type: "Manual Testing – Web Application",
    description:
      "Testing of Todo application functionality including adding, updating and managing tasks with positive and negative scenarios.",
    tools: "Manual Testing | Test Cases | Regression Testing",
    link: "https://github.com/ShreyaThimmaraju/Todo-App-Manual-Testing",
  },
  {
    title: "TV Maze Application",
    type: "Manual Testing – Web Application",
    description:
      "Manual testing project covering application navigation, search functionality, results and user interactions.",
    tools: "Manual Testing | Functional Testing | Test Scenarios",
    link: "https://github.com/ShreyaThimmaraju/TVMAZE-Manual-Testing",
  },
  {
    title: "uMap – Maps Application",
    type: "Manual Testing – Maps & Location",
    description:
      "Testing of map and location-related functionality including navigation, map interactions and different user scenarios.",
    tools: "Manual Testing | Functional Testing | Test Cases",
    link: "https://github.com/ShreyaThimmaraju/uMap-Maps-Application-Manual-Testing",
  },
];

const tools = [
  {
    icon: "🧪",
    name: "Manual Testing",
    description: "Functional, Regression, Smoke and Sanity Testing",
  },
  {
    icon: "🌐",
    name: "Selenium WebDriver",
    description: "Web application automation testing",
  },
  {
    icon: "☕",
    name: "Java",
    description: "Core Java programming for automation testing",
  },
  {
    icon: "📋",
    name: "TestNG",
    description: "Test execution and test organization",
  },
  {
    icon: "📦",
    name: "Maven",
    description: "Build and dependency management",
  },
  {
    icon: "🧩",
    name: "Page Object Model",
    description: "Reusable automation framework design",
  },
  {
    icon: "📊",
    name: "ExtentReports",
    description: "HTML automation test reporting",
  },
  {
    icon: "🔧",
    name: "Jenkins",
    description: "Automation execution through CI/CD",
  },
  {
    icon: "🚀",
    name: "Postman",
    description: "API request execution and validation",
  },
  {
    icon: "🗄️",
    name: "SQL / MySQL",
    description: "Database and data validation",
  },
  {
    icon: "🐙",
    name: "Git & GitHub",
    description: "Version control and project management",
  },
  {
    icon: "💻",
    name: "Eclipse",
    description: "Java and Selenium development",
  },
];

function App() {
  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="navbar">
        <h2 className="logo">Shreya T</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#testing">Testing</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* =========================
          HOME
      ========================= */}
      <section id="home" className="hero">

        {/* SOCIAL ICONS */}
        <div className="social-icons">

          {/* GitHub */}
          <a
            href="https://github.com/ShreyaThimmaraju"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.57.1.78-.25.78-.55v-2.13c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shreya-t-9726232a2/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.98H3.54v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"
              />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:shreyathimmarajuv@gmail.com"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
              />
            </svg>
          </a>

        </div>

        <div className="hero-content">

          <div className="availability-badge">
            🟢 Open to Opportunities
          </div>

          <p className="intro-text">
            Hello, I'm
          </p>

          <h1>
            Shreya T
          </h1>

          <h2>
            I'm a Software Tester
          </h2>

          <p className="hero-role">
            Manual Tester | QA Engineer | Automation Tester
          </p>

          <p className="hero-description">
            I am a passionate Software Testing professional with
            knowledge of Manual Testing and Automation Testing.
            I enjoy finding defects, designing test cases and
            helping deliver high-quality software.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Projects
            </a>

            <a
              href="/Shreya_T_Resume.pdf"
              download
              className="secondary-button"
            >
              Download Resume
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="/images/profile.jpg"
            alt="Shreya T"
          />

        </div>

      </section>

      {/* =========================
          ABOUT
      ========================= */}
      <section id="about" className="about-section">

        <div className="about-container">

          <div className="about-text">

            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              Software Testing Professional
            </h2>

            <h3>
              Hi, I'm Shreya T 👋
            </h3>

            <p>
              I am an MCA graduate and an aspiring Software
              Testing professional with a strong interest in
              Manual Testing and Automation Testing.
            </p>

            <p>
              I have hands-on project experience in creating
              test scenarios, writing and executing test cases,
              identifying defects and preparing bug reports.
              I also have experience with Selenium WebDriver,
              Java, TestNG, Maven and Page Object Model.
            </p>

            <p>
              I enjoy analyzing applications from a user's
              perspective, finding issues and continuously
              improving my testing skills.
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          SKILLS
      ========================= */}
      <section id="skills" className="skills-section">

        <p className="section-label">
          MY SKILLS
        </p>

        <h2>
          Skills & Expertise
        </h2>

        <div className="skills-container">

          <div className="skill-card">
            <div className="skill-icon">🧪</div>
            <h3>Manual Testing</h3>
            <p>
              Functional, Regression, Smoke and Sanity Testing.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">📝</div>
            <h3>Test Case Design</h3>
            <p>
              Test scenarios, positive and negative test cases.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🐞</div>
            <h3>Bug Reporting</h3>
            <p>
              Defect identification, severity, priority and reporting.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>Automation Testing</h3>
            <p>
              Selenium WebDriver automation using Java and TestNG.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>SQL</h3>
            <p>
              Basic SQL and database validation.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🔧</div>
            <h3>Version Control</h3>
            <p>
              Git and GitHub for project version management.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          TESTING KNOWLEDGE
      ========================= */}
      <section id="testing" className="testing-section">

        <p className="section-label">
          QA KNOWLEDGE
        </p>

        <h2>
          Testing Knowledge
        </h2>

        <div className="testing-container">

          <div className="testing-card">
            <h3>SDLC</h3>
            <p>
              Understanding of Software Development Life Cycle
              and software development activities.
            </p>
          </div>

          <div className="testing-card">
            <h3>STLC</h3>
            <p>
              Knowledge of Software Testing Life Cycle including
              planning, test design, execution and closure.
            </p>
          </div>

          <div className="testing-card">
            <h3>Defect Life Cycle</h3>
            <p>
              Understanding of defect identification, reporting,
              fixing, retesting and closure.
            </p>
          </div>

          <div className="testing-card">
            <h3>Test Design Techniques</h3>
            <p>
              Knowledge of Boundary Value Analysis and
              Equivalence Partitioning.
            </p>
          </div>

          <div className="testing-card">
            <h3>Functional Testing</h3>
            <p>
              Testing application functionality against
              expected requirements.
            </p>
          </div>

          <div className="testing-card">
            <h3>Agile Testing</h3>
            <p>
              Basic understanding of Agile, Scrum and testing
              activities during development cycles.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          TESTING PROCESS
      ========================= */}
      <section
        id="testing-process"
        className="testing-process-section"
      >

        <p className="section-label">
          HOW I TEST
        </p>

        <h2>
          My Testing Process
        </h2>

        <div className="testing-process-container">

          <div className="process-card">
            <div className="process-number">01</div>
            <h3>Requirement Analysis</h3>
            <p>
              Understand requirements and identify
              application functionality to be tested.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">02</div>
            <h3>Test Planning</h3>
            <p>
              Identify testing scope, approach,
              resources and test coverage.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">03</div>
            <h3>Test Case Design</h3>
            <p>
              Create test scenarios and detailed
              positive and negative test cases.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">04</div>
            <h3>Test Execution</h3>
            <p>
              Execute test cases and compare actual
              results with expected results.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">05</div>
            <h3>Defect Reporting</h3>
            <p>
              Report defects with proper steps,
              severity, priority and evidence.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">06</div>
            <h3>Retesting & Regression</h3>
            <p>
              Retest fixed defects and verify that
              existing functionality continues to work.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          TOOLS
      ========================= */}
      <section id="tools" className="tools-section">

        <p className="section-label">
          TECHNOLOGIES
        </p>

        <h2>
          Tools & Technologies
        </h2>

        <div className="tools-container">

          {tools.map((tool, index) => (
            <div className="tool-card" key={index}>

              <div className="tool-icon">
                {tool.icon}
              </div>

              <h3>
                {tool.name}
              </h3>

              <p>
                {tool.description}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* =========================
          WHAT I CAN DO
      ========================= */}
      <section
        id="what-i-can-do"
        className="what-i-can-do-section"
      >

        <p className="section-label">
          WHAT I CAN DO
        </p>

        <h2>
          QA & Testing Capabilities
        </h2>

        <div className="what-i-can-do-container">

          <div className="what-card">
            <h3>📝 Test Case Writing</h3>
            <p>
              Create clear and detailed test cases based
              on requirements and user scenarios.
            </p>
          </div>

          <div className="what-card">
            <h3>🔍 Test Execution</h3>
            <p>
              Execute test cases and compare actual results
              with expected results.
            </p>
          </div>

          <div className="what-card">
            <h3>🐞 Defect Reporting</h3>
            <p>
              Identify defects and report them with proper
              severity, priority and evidence.
            </p>
          </div>

          <div className="what-card">
            <h3>🔄 Regression Testing</h3>
            <p>
              Verify existing functionality after changes
              and defect fixes.
            </p>
          </div>

          <div className="what-card">
            <h3>🔥 Smoke Testing</h3>
            <p>
              Perform basic build verification before
              detailed testing.
            </p>
          </div>

          <div className="what-card">
            <h3>🤖 Automation</h3>
            <p>
              Create Selenium automation tests using
              Java, TestNG, Maven and POM.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          EDUCATION
      ========================= */}
      <section id="education" className="education-section">

        <p className="section-label">
          EDUCATION
        </p>

        <h2>
          Education & Certifications
        </h2>

        <div className="education-container">

          <div className="education-card">
            <h3>
              Master of Computer Applications
            </h3>

            <p className="education-place">
              Mount Carmel College,
              Bengaluru City University
            </p>

            <p>
              Graduated in 2023
            </p>

            <p>
              CGPA: 7.9
            </p>
          </div>

          <div className="education-card">
            <h3>
              Software Testing
            </h3>

            <p className="education-place">
              QSpiders
            </p>

            <p>
              Manual Testing, Core Java, Selenium WebDriver,
              TestNG, REST API Testing, Postman and SQL.
            </p>
          </div>

          <div className="education-card">
            <h3>
              Full Stack Java Development
            </h3>

            <p className="education-place">
              KodNest
            </p>

            <p>
              Java, HTML, CSS, JavaScript, Spring
              and Web Development.
            </p>
          </div>

          <div className="education-card">
            <h3>
              Java Certification
            </h3>

            <p className="education-place">
              Great Learning
            </p>

            <p>
              Java Programming Certification – 2025
            </p>
          </div>

          <div className="education-card">
            <h3>
              SQL Certification
            </h3>

            <p className="education-place">
              Great Learning
            </p>

            <p>
              SQL Certification – 2025
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          PROJECTS
      ========================= */}
      <section id="projects" className="projects-section">

        <p className="section-label">
          MY WORK
        </p>

        <h2>
          My Testing Projects
        </h2>

        <p className="projects-intro">
          Here are the software testing projects I have worked on,
          covering Manual Testing and Automation Testing.
        </p>

        <div className="projects-container">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              <div className="project-image">
                <span>
                  SOFTWARE
                  <br />
                  TESTING
                </span>
              </div>

              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>
                {project.title}
              </h3>

              <h4>
                {project.type}
              </h4>

              <p>
                {project.description}
              </p>

              <span className="project-tools">
                {project.tools}
              </span>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-button"
                >
                  View Project →
                </a>
              ) : (
                <span className="project-button disabled">
                  View Project →
                </span>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* =========================
          RESUME
      ========================= */}
      <section id="resume" className="resume-section">

        <p className="section-label">
          RESUME
        </p>

        <h2>
          My Resume
        </h2>

        <p>
          Interested in my profile? View or download my resume
          to learn more about my education, skills, testing
          knowledge and projects.
        </p>

        <div className="resume-buttons">

          <a
            href="/Shreya_T_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-view-btn"
          >
            👁️ View Resume
          </a>

          <a
            href="/Shreya_T_Resume.pdf"
            download
            className="resume-btn"
          >
            📄 Download Resume
          </a>

        </div>

      </section>

      {/* =========================
          WHY HIRE ME
      ========================= */}
      <section
        id="why-hire-me"
        className="why-hire-section"
      >

        <p className="section-label">
          WHY ME
        </p>

        <h2>
          Why Hire Me?
        </h2>

        <div className="why-hire-container">

          <div className="why-hire-card">
            <div className="why-hire-icon">🧪</div>
            <h3>Testing Knowledge</h3>
            <p>
              Good understanding of manual testing concepts,
              test cases, defect reporting and testing processes.
            </p>
          </div>

          <div className="why-hire-card">
            <div className="why-hire-icon">🔍</div>
            <h3>Attention to Detail</h3>
            <p>
              I carefully analyze requirements and application
              behavior to identify defects.
            </p>
          </div>

          <div className="why-hire-card">
            <div className="why-hire-icon">🤖</div>
            <h3>Automation Skills</h3>
            <p>
              Hands-on Selenium automation knowledge using
              Java, TestNG, Maven and POM.
            </p>
          </div>

          <div className="why-hire-card">
            <div className="why-hire-icon">📚</div>
            <h3>Quick Learner</h3>
            <p>
              I enjoy learning new technologies and adapting
              to new testing environments.
            </p>
          </div>

        </div>

      </section>

      {/* =========================
          CONTACT
      ========================= */}
      <section
        id="contact"
        className="contact-section"
      >

        <div className="section-heading">

          <span>
            GET IN TOUCH
          </span>

          <h2>
            Let's Connect
          </h2>

          <p>
            I'm open to Software Testing and QA opportunities.
            Feel free to connect with me.
          </p>

        </div>

        <div className="contact-container">

          <div className="contact-info">

            <h3>
              Contact Me
            </h3>

            <p>
              If you have an opportunity, project or
              testing-related discussion, feel free to reach out.
            </p>

            <div className="contact-item">
              <strong>
                📧 Email
              </strong>

              <a href="mailto:shreyathimmarajuv@gmail.com">
                shreyathimmarajuv@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <strong>
                💼 LinkedIn
              </strong>

              <a
                href="https://www.linkedin.com/in/shreya-t-9726232a2/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="contact-item">
              <strong>
                💻 GitHub
              </strong>

              <a
                href="https://github.com/ShreyaThimmaraju"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ShreyaThimmaraju
              </a>
            </div>

          </div>

          {/* WEB3FORMS CONTACT FORM */}
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
              name="subject"
              value="New Portfolio Contact Message"
            />

            <input
              type="hidden"
              name="from_name"
              value="Shreya T Portfolio"
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
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer className="footer">

        <p>
          © 2026 Shreya T. All Rights Reserved.
        </p>

        <div className="footer-links">

          <a
            href="https://www.linkedin.com/in/shreya-t-9726232a2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ShreyaThimmaraju"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="mailto:shreyathimmarajuv@gmail.com"
          >
            Email
          </a>

        </div>

      </footer>

      {/* =========================
          BACK TO TOP
      ========================= */}
      <a
        href="#home"
        className="back-to-top"
        aria-label="Back to top"
      >
        ↑
      </a>

    </div>
  );
}

export default App;