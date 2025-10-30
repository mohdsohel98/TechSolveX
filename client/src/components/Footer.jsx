import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Globe, Code, Users, MessageCircle } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">
              <span className="gradient-text">StackBlitz</span>
            </h3>
            <p className="company-description">
              Empowering businesses with cutting-edge technology solutions.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Globe size={14} /> <a href="#">About Us</a></li>
              <li><Code size={14} /> <a href="#">Services</a></li>
              <li><Users size={14} /> <a href="#">Team</a></li>
              <li><MessageCircle size={14} /> <a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={14} />
                <span>123 Tech Street, Digital Valley</span>
              </li>
              <li>
                <Phone size={14} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={14} />
                <span>info@stackblitz.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p>Stay updated with our latest news.</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            © 2024 StackBlitz. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;