import React, { useEffect } from 'react';
import { Code2, Users, Briefcase, Clock } from 'lucide-react';
import './Home.css';

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-text hidden-element">
            <div className="company-name">
              <span className="letter">T</span>
              <span className="letter">e</span>
              <span className="letter">c</span>
              <span className="letter">h</span>
              <span className="letter">S</span>
              <span className="letter">o</span>
              <span className="letter">l</span>
              <span className="letter">v</span>
              <span className="letter">e</span>
              <span className="letter">X</span>
            </div>
            <div className="glowing-line"></div>
            <p className="company-tagline">We are the World Best IT Company</p>
            <h1 className="hero-title gradient-text">
              Welcome to TechSolveX
            </h1>
            <p className="hero-description">
              Are you ready to take your business to the next level with cutting-edge
              IT solutions? Look no further! At StackBlitz, we specialize in
              providing innovative IT services and solutions tailored to meet your
              unique needs.
            </p>
            <div className="button-group">
              <button className="primary-button pulse">
                Connect Now
              </button>
              <button className="secondary-button glow-on-hover">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image hidden-element">
            <div className="image-container">
              <img
                src="./images/home.png"
                alt="IT Services"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section hidden-element">
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <Briefcase size={32} />
                </div>
                <h2 className="stat-number counter">50+</h2>
                <p className="stat-label">Registered Companies</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Users size={32} />
                </div>
                <h2 className="stat-number counter">100,00+</h2>
                <p className="stat-label">Happy Clients</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Code2 size={32} />
                </div>
                <h2 className="stat-number counter">500+</h2>
                <p className="stat-label">Well Known Developers</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <Clock size={32} />
                </div>
                <h2 className="stat-number counter">24/7</h2>
                <p className="stat-label">Service</p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="get-started-section hidden-element">
          <div className="get-started-container">
            <div className="get-started-content">
              <div className="get-started-image">
                <img
                  src="./images/design.png"
                  alt="Get Started Illustration"
                  className="illustration"
                />
              </div>
              <div className="get-started-text">
                <h2 className="section-title">
                  We are here to help you
                  <span className="gradient-text"> Get Started Today</span>
                </h2>
                <p className="section-description">
                  Ready to take the first step towards a more efficient and secure IT
                  infrastructure? Contact us today for a free consultation and let's discuss
                  how TechSolveX can help your business thrive in the digital age.
                </p>
                <div className="button-group">
                  <button className="primary-button pulse">
                    Contact Now
                  </button>
                  <button className="secondary-button glow-on-hover">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;