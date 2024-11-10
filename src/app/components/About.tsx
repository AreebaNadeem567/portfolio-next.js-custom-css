import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
  }, []);

  return (
    <div id="about">
      <section className="about-section">
        <div className="about-container">

          {/* About Box 1: Introduction */}
          <div className="about-box">
            <div className="about-content">
              <h1 className="about-title">About Me</h1>
              <p className="about-text">
                Hi, I&apos;m Areeba Nadeem, a passionate web developer from Karachi, currently studying BS Economics at Karachi University. 
                I specialize in HTML, CSS, TypeScript, and Next.js, building responsive and engaging websites.
                My focus is on mastering Next.js to deliver high-quality solutions. 
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;