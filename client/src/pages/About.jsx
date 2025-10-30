import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Grid for content and image */}
        <div className="about-grid">
          {/* Feature List */}
          <div className="about-features">
            <h1 className="about-title">Why Choose Us?</h1> {/* Heading moved here */}
            <div className="about-feature">
              <h3 className="about-feature-title">Expertise</h3>
              <p className="about-feature-description">
                Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
              </p>
            </div>

            <div className="about-feature">
              <h3 className="about-feature-title">Customization</h3>
              <p className="about-feature-description">
                We understand that every business is unique. That’s why we create solutions that are tailored to your specific needs and goals.
              </p>
            </div>

            <div className="about-feature">
              <h3 className="about-feature-title">Customer-Centric Approach</h3>
              <p className="about-feature-description">
                We prioritize your satisfaction and provide top-notch support to address your IT concerns.
              </p>
            </div>

            <div className="about-feature">
              <h3 className="about-feature-title">Affordability</h3>
              <p className="about-feature-description">
                We offer competitive pricing without compromising on the quality of our services.
              </p>
            </div>

            <div className="about-feature">
              <h3 className="about-feature-title">Reliability</h3>
              <p className="about-feature-description">
                Count on us to be there when you need us. We’re committed to ensuring your IT environment is reliable and available 24/7.
              </p>
            </div>
          </div>

          {/* Image Section with Animation */}
          <div className="about-image">
            <img
              src="/images/about.png" // Update this path to your image
              alt="Why Choose Us"
              className="about-image-content"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="about-cta">
          <button className="about-cta-button primary">Connect Now</button>
          <button className="about-cta-button secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;