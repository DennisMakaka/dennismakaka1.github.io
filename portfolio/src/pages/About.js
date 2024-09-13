import React from 'react';
import './About.css'; // Import page-specific styling if needed

const About = () => {
  return (
    <div className="about-page">
      {/* Introduction Section */}
      <section className="intro-section">
        <h1>About Me</h1>
        <p>
          Hello! I'm Dennis Makaka, a dedicated full-stack developer with a passion for both coding and basketball. My journey into technology began with a fascination for how software can solve complex problems and improve everyday experiences. My background as a semi-pro basketball player and coach has instilled in me a strong sense of discipline, teamwork, and perseverance—qualities that I bring to every coding project.
        </p>
        <p>
          I’m currently focused on expanding my expertise in modern web technologies and enhancing my skills in both front-end and back-end development. This portfolio serves as a testament to my growth as a developer and provides a comprehensive overview of my work, including significant projects and technical achievements.
        </p>
      </section>

      {/* Professional Background Section */}
      <section className="professional-background">
        <h2>My Professional Journey</h2>
        <p>
          My career in technology began with a foundation in both front-end and back-end development. Over the years, I have had the opportunity to work on diverse projects ranging from dynamic websites to complex systems. One of my notable projects includes a comprehensive student sports management system, which involved designing and implementing features for registration, event management, and performance tracking.
        </p>
        <p>
          In addition to my technical skills, my experience as a basketball coach and mentor has significantly influenced my approach to problem-solving and project management. The skills I developed on the court—such as strategic thinking, teamwork, and leadership—translate seamlessly into my work as a developer. I am committed to continuous learning and regularly pursue additional courses to stay abreast of industry trends and best practices.
        </p>
        <p>
          This commitment is reflected in my work, where I strive to deliver high-quality solutions that meet both technical requirements and user needs. My portfolio includes detailed case studies of significant projects, offering insights into my development process, problem-solving strategies, and the impact of my work.
        </p>
      </section>

      {/* Personal Story Section */}
      <section className="personal-story">
        <h2>A Journey Beyond Code</h2>
        <p>
          My path into coding has been shaped by a lifelong passion for technology and a desire to make a meaningful impact. Growing up, I was captivated by the potential of technology to drive change and solve problems. This interest led me to explore various aspects of programming and software development, culminating in the creation of this portfolio.
        </p>
        <p>
          My time as a semi-pro basketball player taught me valuable lessons in discipline, teamwork, and resilience—traits that I apply to my coding projects. The experience of working with a team and striving for excellence on the court parallels the collaborative and iterative nature of software development.
        </p>
        <p>
          My role as a peer motivational speaker and counselor at EmpowerED has further fueled my drive to create impactful solutions. Witnessing the transformative power of empowerment and guidance has inspired me to approach my projects with the same commitment to making a difference. This portfolio is not just a showcase of my technical skills but also a reflection of my personal journey and values.
        </p>
        <p>
          In every project, I channel the same energy and enthusiasm that I have for basketball. Each line of code and each feature implemented represents a step forward in my journey of growth and innovation. My goal is to use technology to inspire and make a positive impact, just as I do through my coaching and motivational work.
        </p>
      </section>

      {/* Project Overview Section */}
      <section className="project-overview">
        <h2>About This Portfolio Project</h2>
        <p>
          "The Coding Odyssey of Dennis Makaka" is designed to be a comprehensive showcase of my skills and accomplishments as a developer. This portfolio is intended to provide a detailed and engaging overview of my work, demonstrating my technical proficiency and design sensibilities. The project serves as a platform for potential employers, collaborators, and enthusiasts to explore my work and understand my approach to software development.
        </p>
        <h3>Project Objectives</h3>
        <ul>
          <li><strong>Showcase Skills:</strong> The portfolio highlights my proficiency in various technologies including React, Node.js, and CSS. It features detailed case studies of key projects, offering insights into my problem-solving methods and development approach.</li>
          <li><strong>Design Excellence:</strong> The design focuses on creating a modern, responsive experience that is both visually appealing and user-friendly. Emphasis is placed on clean aesthetics and functional layouts to ensure an intuitive navigation experience.</li>
          <li><strong>Continuous Improvement:</strong> This project is a living document of my continuous learning journey. It includes updates, blog posts, and new projects, reflecting my commitment to staying current with industry trends and advancing my skills.</li>
        </ul>
        <h3>Key Features</h3>
        <ul>
          <li><strong>Interactive Elements:</strong> The portfolio features interactive components such as a blog section with recent posts, a detailed project showcase, and a responsive layout that adapts to various screen sizes.</li>
          <li><strong>Personal Touch:</strong> Each section of the portfolio is crafted to provide insights into my personal and professional life, showcasing not just my technical abilities but also my journey, values, and aspirations.</li>
          <li><strong>Future Enhancements:</strong> Plans for future updates include adding interactive demos of my projects, client testimonials, and a more comprehensive blog section. I aim to continuously enhance the portfolio to reflect my evolving skills and experiences.</li>
        </ul>
        <p>
          This portfolio is more than a display of my work—it's a reflection of my growth, dedication, and passion for technology. I hope it serves as an engaging and informative resource for those interested in my work and provides a clear representation of my capabilities and ambitions.
        </p>
      </section>

      {/* Values and Goals Section */}
      <section className="values-goals">
        <h2>What Drives Me</h2>
        <p>
          My core values revolve around a commitment to excellence, continuous learning, and a genuine desire to make a positive impact. I am motivated by the challenge of solving complex problems and creating innovative solutions that improve people's lives. My goal is to leverage my skills and experience to develop applications that are not only technically sound but also meaningful and impactful.
        </p>
        <p>
          I believe in the power of technology to drive change and make a difference. Whether through developing cutting-edge software or mentoring and inspiring others, I strive to contribute to projects that push the boundaries of what is possible and create value for users and stakeholders alike.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>
          I would love to connect with you! If you're interested in collaborating on a project, have questions, or just want to network, please feel free to reach out. You can connect with me on <a href="https://www.linkedin.com/in/dennis-makaka" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/DennisMakaka" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
        <p>
          For direct inquiries, you can email me at <a href="mailto:dennismakaka@outlook.com">dennismakaka@outlook.com</a> or contact me via WhatsApp at <a href="https://wa.me/254799066347" target="_blank" rel="noopener noreferrer">+254 799 066 347</a>. I look forward to hearing from you and exploring potential opportunities for collaboration and growth.
        </p>
      </section>
    </div>
  );
};

export default About;
