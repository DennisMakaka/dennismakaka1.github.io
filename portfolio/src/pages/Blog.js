import React from 'react';
import './Blog.css'; // Import page-specific styling if needed

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Introduction Section */}
      <section className="intro-section">
        <div className="banner-image">
          <img src="/path/to/your/banner-image.jpg" alt="Project Banner" />
        </div>
        <div className="intro-content">
          <h1>Welcome to The Coding Odyssey of Dennis Makaka</h1>
          <p>
            This project serves as a comprehensive showcase of various coding techniques and projects I’ve worked on. The main objective is to present a professional portfolio that highlights key features, design principles, and practical applications of my coding skills.
          </p>
          <p>
            I am working on this project solo. The timeline spans several months, focusing on creating a visually appealing and functional portfolio. My personal focus has been on ensuring a modern UI/UX design and implementing responsive design principles.
          </p>
          <p>
            This portfolio is created for potential employers, collaborators, and anyone interested in seeing a detailed presentation of my work.
          </p>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="personal-story">
        <h2>My Journey and Inspiration</h2>
        <p>
          My journey into the world of coding is deeply intertwined with my personal experiences and passions. Growing up, I was always fascinated by technology and its potential to solve real-world problems. However, my path wasn’t always linear. I spent years as a semi-pro basketball player and coach, where I learned the importance of discipline, teamwork, and perseverance—values that now guide my approach to coding.
        </p>
        <p>
          A significant turning point came when I decided to combine my love for technology with my desire to make a meaningful impact. Through my role as a peer motivator and counselor at EmpowerED, I’ve seen firsthand the transformative power of empowerment and guidance. This experience inspired me to create a project that not only showcases my technical skills but also reflects my commitment to personal growth and empowerment.
        </p>
        <p>
          Just as in basketball where every play counts, in coding, every line of code contributes to the overall success of the project. I’ve channeled the same energy and enthusiasm I have for basketball into this portfolio. It’s not just about demonstrating my abilities; it’s about telling a story of growth, resilience, and innovation.
        </p>
        <p>
          My passion for coaching and motivating others has been a driving force behind this project. Whether it’s on the court or through lines of code, I aim to inspire and make a difference. I hope this portfolio will not only showcase my technical skills but also serve as a testament to the journey of growth and transformation that has defined my career.
        </p>
      </section>

      {/* Blog Content Section */}
      <section className="blog-content">
        <header className="blog-header">
          <h2>Recent Posts</h2>
          <p>Insights, tutorials, and updates from the world of coding.</p>
        </header>
        <div className="posts">
          {/* Example blog posts */}
          <article className="blog-post">
            <img src="/path/to/project-showcase-image.jpg" alt="Project Showcase" className="post-image"/>
            <h3>Understanding React Hooks</h3>
            <time dateTime="2024-09-10">September 10, 2024</time>
            <p>
              React Hooks provide a way to use state and other React features without writing a class. Learn about the benefits and practical uses of Hooks in modern React development.
            </p>
            <a href="/blog/understanding-react-hooks" className="read-more">Read More</a>
          </article>
          <article className="blog-post">
            <img src="/path/to/ui-ux-image.jpg" alt="Modern UI/UX" className="post-image"/>
            <h3>Getting Started with Node.js</h3>
            <time dateTime="2024-08-22">August 22, 2024</time>
            <p>
              Node.js is a powerful JavaScript runtime for building server-side applications. Discover how to get started with Node.js and explore its core features.
            </p>
            <a href="/blog/getting-started-with-nodejs" className="read-more">Read More</a>
          </article>
          <article className="blog-post">
            <img src="/path/to/responsive-design-image.jpg" alt="Responsive Design" className="post-image"/>
            <h3>CSS Grid Layout: A Beginner's Guide</h3>
            <time dateTime="2024-07-15">July 15, 2024</time>
            <p>
              CSS Grid Layout simplifies creating complex, responsive grid-based designs. This guide covers the basics and practical applications of CSS Grid.
            </p>
            <a href="/blog/css-grid-layout-guide" className="read-more">Read More</a>
          </article>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="blog-footer">
        <p>&copy; {new Date().getFullYear()} Dennis Makaka. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
