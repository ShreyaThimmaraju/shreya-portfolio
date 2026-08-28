import "./App.css";

function App() {
  return (
    <div>
      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="navbar">
        <h2 className="logo">Shreya T</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#objective">Objective</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#testing">Testing</a></li>
          <li><a href="#testing-process">Testing Process</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#what-i-can-do">What I Can Do</a></li>
          <li><a href="#workflow">Workflow</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#career">Career</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#why-hire-me">Why Hire Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* =========================
          HOME
      ========================= */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="availability-badge">
            🟢 Open to Opportunities
          </div>

          <p className="intro-text">Hello, I'm</p>

          <h1>Shreya T</h1>

          <h2>Software Tester</h2>

          <p className="hero-description">
            I am a passionate software testing enthusiast
            looking for an opportunity to start my career
            in the IT industry.
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
            <h2>About Me</h2>

            <h3>Hi, I'm Shreya T 👋</h3>

            <p>
              I am an MCA graduate and an aspiring software
              professional passionate about technology,
              software testing, and creating user-friendly
              digital experiences.
            </p>

            <p>
              I have knowledge of Java, HTML, CSS,
              JavaScript, SQL and software testing.
              I enjoy learning new technologies and
              developing projects that solve real-world
              problems.
            </p>

            <p>
              I am looking for an opportunity where I can
              apply my skills, gain practical experience,
              and grow professionally.
            </p>

            <div className="resume-buttons">
              <a
                href="/Shreya_T_Resume.pdf"
                download
                className="resume-btn"
              >
                📄 Download Resume
              </a>

              <a
                href="/Shreya_T_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-view-btn"
              >
                👁️ View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CAREER OBJECTIVE
      ========================= */}
      <section
        id="objective"
        className="objective-section"
      >
        <div className="objective-container">
          <h2>Career Objective</h2>

          <p>
            To begin my career as a Software Tester where I
            can apply my knowledge of manual testing, test
            case design, defect reporting, and software
            testing concepts to contribute to delivering
            high-quality software.
          </p>

          <p>
            I am eager to learn new technologies, improve my
            testing skills, and grow as a professional while
            contributing positively to the organization.
          </p>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================= */}
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>🧪 Software Testing</h3>
            <p>
              Manual Testing, Functional Testing,
              Regression Testing, Smoke Testing,
              Sanity Testing
            </p>
          </div>

          <div className="skill-card">
            <h3>📝 Test Cases</h3>
            <p>
              Test Scenario Creation, Test Case Writing,
              Test Case Execution and Defect Reporting
            </p>
          </div>

          <div className="skill-card">
            <h3>🐞 Bug Tracking</h3>
            <p>
              Bug Identification, Bug Reporting,
              Severity, Priority and Defect Life Cycle
            </p>
          </div>

          <div className="skill-card">
            <h3>💻 Programming</h3>
            <p>
              Java, Python, HTML, CSS and JavaScript
            </p>
          </div>

          <div className="skill-card">
            <h3>🗄️ Database</h3>
            <p>
              SQL and Basic Database Concepts
            </p>
          </div>

          <div className="skill-card">
            <h3>🛠️ Tools</h3>
            <p>
              Git, GitHub, VS Code, Eclipse
              and Test Management Tools
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          TESTING KNOWLEDGE
      ========================= */}
      <section id="testing" className="testing-section">
        <h2>Testing Knowledge</h2>

        <div className="testing-container">
          <div className="testing-card">
            <h3>SDLC</h3>
            <p>
              Understanding of Software Development
              Life Cycle and different development models.
            </p>
          </div>

          <div className="testing-card">
            <h3>STLC</h3>
            <p>
              Knowledge of Software Testing Life Cycle
              including test planning, test execution
              and closure.
            </p>
          </div>

          <div className="testing-card">
            <h3>Defect Life Cycle</h3>
            <p>
              Understanding of defect identification,
              reporting, assignment, fixing,
              retesting and closure.
            </p>
          </div>

          <div className="testing-card">
            <h3>Test Design Techniques</h3>
            <p>
              Knowledge of Boundary Value Analysis
              and Equivalence Partitioning.
            </p>
          </div>

          <div className="testing-card">
            <h3>Functional Testing</h3>
            <p>
              Experience with functional, regression,
              smoke and sanity testing concepts.
            </p>
          </div>

          <div className="testing-card">
            <h3>Agile Methodology</h3>
            <p>
              Basic understanding of Agile development,
              Scrum and testing activities in sprints.
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
        <h2>My Testing Process</h2>

        <div className="testing-process-container">
          <div className="process-card">
            <div className="process-number">1</div>
            <h3>Requirement Analysis</h3>
            <p>
              Understand the requirements and identify
              what needs to be tested.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">2</div>
            <h3>Test Planning</h3>
            <p>
              Identify testing scope, test approach,
              resources and timelines.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">3</div>
            <h3>Test Case Design</h3>
            <p>
              Create test scenarios and test cases
              based on the requirements.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">4</div>
            <h3>Test Execution</h3>
            <p>
              Execute test cases and compare actual
              results with expected results.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">5</div>
            <h3>Defect Reporting</h3>
            <p>
              Report identified defects with proper
              steps, severity and priority.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">6</div>
            <h3>Retesting & Regression</h3>
            <p>
              Retest fixed defects and perform
              regression testing.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          TOOLS
      ========================= */}
      <section id="tools" className="tools-section">
        <h2>Testing Tools</h2>

        <div className="tools-container">
          <div className="tool-card">
            <div className="tool-icon">🧪</div>
            <h3>Selenium</h3>
            <p>
              Basic knowledge of Selenium WebDriver
              for web application testing.
            </p>
          </div>

          <div className="tool-card">
            <div className="tool-icon">📋</div>
            <h3>TestNG</h3>
            <p>
              Basic knowledge of TestNG for organizing
              and executing automated test cases.
            </p>
          </div>

          <div className="tool-card">
            <div className="tool-icon">🐞</div>
            <h3>Bug Tracking</h3>
            <p>
              Knowledge of defect reporting,
              severity, priority and defect life cycle.
            </p>
          </div>

          <div className="tool-card">
            <div className="tool-icon">🔧</div>
            <h3>Git & GitHub</h3>
            <p>
              Basic knowledge of Git and GitHub
              for source code management.
            </p>
          </div>

          <div className="tool-card">
            <div className="tool-icon">💻</div>
            <h3>Eclipse</h3>
            <p>
              Used Eclipse for Java programming
              and testing practice.
            </p>
          </div>

          <div className="tool-card">
            <div className="tool-icon">📝</div>
            <h3>Postman</h3>
            <p>
              Basic knowledge of Postman for API
              request execution and validation.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT I CAN DO
      ========================= */}
      <section
        id="what-i-can-do"
        className="what-i-can-do-section"
      >
        <h2>What I Can Do</h2>

        <div className="what-i-can-do-container">
          <div className="what-card">
            <h3>📝 Test Case Writing</h3>
            <p>
              Create clear and detailed test cases
              based on requirements and user scenarios.
            </p>
          </div>

          <div className="what-card">
            <h3>🔍 Test Execution</h3>
            <p>
              Execute test cases, compare actual results
              with expected results and identify failures.
            </p>
          </div>

          <div className="what-card">
            <h3>🐞 Defect Reporting</h3>
            <p>
              Identify defects and report them with
              proper steps, severity and priority.
            </p>
          </div>

          <div className="what-card">
            <h3>🔄 Regression Testing</h3>
            <p>
              Perform regression testing to verify
              existing functionality.
            </p>
          </div>

          <div className="what-card">
            <h3>🔥 Smoke Testing</h3>
            <p>
              Perform basic checks to verify whether
              a build is stable for detailed testing.
            </p>
          </div>

          <div className="what-card">
            <h3>📊 Test Scenarios</h3>
            <p>
              Create test scenarios covering positive,
              negative and real-world conditions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          WORKFLOW
      ========================= */}
      <section id="workflow" className="workflow-section">
        <h2>My Testing Workflow</h2>

        <div className="workflow-container">
          <div className="workflow-step">
            <div className="workflow-number">1</div>
            <h3>Understand Requirements</h3>
            <p>
              Understand application requirements
              and identify what needs to be tested.
            </p>
          </div>

          <div className="workflow-step">
            <div className="workflow-number">2</div>
            <h3>Create Test Scenarios</h3>
            <p>
              Prepare test scenarios covering
              important application functionality.
            </p>
          </div>

          <div className="workflow-step">
            <div className="workflow-number">3</div>
            <h3>Write Test Cases</h3>
            <p>
              Create positive and negative test cases
              with clear steps and expected results.
            </p>
          </div>

          <div className="workflow-step">
            <div className="workflow-number">4</div>
            <h3>Execute Tests</h3>
            <p>
              Execute test cases and compare actual
              results with expected results.
            </p>
          </div>

          <div className="workflow-step">
            <div className="workflow-number">5</div>
            <h3>Report Defects</h3>
            <p>
              Report identified defects with proper
              severity, priority and evidence.
            </p>
          </div>

          <div className="workflow-step">
            <div className="workflow-number">6</div>
            <h3>Retest & Regression</h3>
            <p>
              Retest fixed defects and perform
              regression testing.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          EDUCATION
      ========================= */}
      <section id="education" className="education-section">
        <h2>Education & Certifications</h2>

        <div className="education-container">
          <div className="education-card">
            <h3>
              Master of Computer Applications (MCA)
            </h3>

            <p className="education-place">
              Mount Carmel College,
              Bengaluru City University
            </p>

            <p>Graduated in 2023</p>
            <p>CGPA: 7.9</p>
          </div>

          <div className="education-card">
            <h3>Software Testing</h3>

            <p className="education-place">
              QSpiders
            </p>

            <p>
              Manual Testing, Test Cases,
              Bug Tracking, Selenium WebDriver,
              TestNG and Testing Concepts
            </p>
          </div>

          <div className="education-card">
            <h3>Full Stack Java Development</h3>

            <p className="education-place">
              KodNest
            </p>

            <p>
              Java, HTML, CSS, JavaScript,
              Spring and Web Development
            </p>
          </div>

          <div className="education-card">
            <h3>Java Certification</h3>

            <p className="education-place">
              Great Learning
            </p>

            <p>
              Java Programming Certification — 2025
            </p>
          </div>

          <div className="education-card">
            <h3>SQL Certification</h3>

            <p className="education-place">
              Great Learning
            </p>

            <p>
              SQL Certification — 2025
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CAREER
      ========================= */}
      <section id="career" className="career-section">
        <h2>Career</h2>

        <div className="career-container">
          <p>
            I am looking for an opportunity to start
            my career as a Software Tester in a
            growth-oriented organization.
          </p>

          <p>
            My goal is to apply my testing knowledge,
            gain real-world experience and continuously
            improve my technical and professional skills.
          </p>
        </div>
      </section>

      {/* =========================
          RESUME
      ========================= */}
      <section id="resume" className="resume-section">
        <h2>My Resume</h2>

        <p>
          Interested in my profile? Download my resume
          to learn more about my education, skills,
          projects and software testing knowledge.
        </p>

        <a
          href="/Shreya_T_Resume.pdf"
          download
          className="resume-download-button"
        >
          📄 Download My Resume
        </a>
      </section>

      {/* =========================
          WHY HIRE ME
      ========================= */}
      <section
        id="why-hire-me"
        className="why-hire-section"
      >
        <h2>Why Hire Me?</h2>

        <div className="why-hire-container">
          <div className="why-hire-card">
            <div className="why-hire-icon">🧪</div>

            <h3>Testing Knowledge</h3>

            <p>
              Good understanding of manual testing
              concepts, test cases, defect reporting
              and testing processes.
            </p>
          </div>

          <div className="why-hire-card">
            <div className="why-hire-icon">🔍</div>

            <h3>Attention to Detail</h3>

            <p>
              I carefully analyze requirements and
              user behavior to identify defects.
            </p>
          </div>

          <div className="why-hire-card">
            <div className="why-hire-icon">📚</div>

            <h3>Quick Learner</h3>

            <p>
              I enjoy learning new technologies and
              adapting quickly to new environments.
            </p>
          </div>

          <div className="why-hire-card">
            <div className="why-hire-icon">💡</div>

            <h3>Problem Solving</h3>

            <p>
              I approach problems logically and work
              towards finding practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          PROJECTS
      ========================= */}
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>Drowsiness Detection System</h3>

            <p>
              A Python and OpenCV based project
              that detects driver drowsiness and
              helps improve road safety.
            </p>

            <span>
              Python | OpenCV
            </span>

            <a
              href="https://github.com/ShreyaThimmaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Easy School Management System</h3>

            <p>
              A web-based application designed
              to manage school-related information
              and simplify administrative activities.
            </p>

            <span>
              Java | Spring | HTML | CSS
            </span>

            <a
              href="https://github.com/ShreyaThimmaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>IoT Floor Cleaning Mop</h3>

            <p>
              An IoT-based project designed to
              assist with floor cleaning using
              automation and electronic components.
            </p>

            <span>
              IoT | Electronics
            </span>

            <a
              href="https://github.com/ShreyaThimmaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View on GitHub
            </a>
          </div>

          <div className="project-card">
            <h3>Crop Recommendation System</h3>

            <p>
              A project that recommends suitable
              crops based on agricultural and
              environmental parameters.
            </p>

            <span>
              Python | Machine Learning
            </span>

            <a
              href="https://github.com/ShreyaThimmaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View on GitHub
            </a>
          </div>

        </div>
      </section>

      {/* =========================
          CONTACT
      ========================= */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>

        <p>
          I'm open to new opportunities and would love
          to connect.
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:shreyathimmarajuv@gmail.com"
            className="contact-button"
          >
            📧 Email
          </a>

          <a
            href="https://www.linkedin.com/in/shreya-t-9726232a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/ShreyaThimmaraju"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            💻 GitHub
          </a>
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

          <a href="mailto:shreyathimmarajuv@gmail.com">
            Email
          </a>
        </div>
      </footer>

      {/* =========================
          BACK TO TOP
      ========================= */}
      <a href="#home" className="back-to-top">
        ↑
      </a>
    </div>
  );
}

export default App;