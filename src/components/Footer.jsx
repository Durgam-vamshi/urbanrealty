import React from 'react';
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img
              src="https://urbanranch.irarealty.in/_next/static/media/urflogomobile.88c02773.webp"
              alt="Urban Ranch Logo"
              className="footer-logo"
            />
            <div className="footer-partners">
              <img
                src="https://urbanranch.irarealty.in/_next/static/media/logofmobile.6f3922a8.webp"
                alt="IRA"
              />
              <img
                src="https://urbanranch.irarealty.in/_next/static/media/ihlogomobile.111736a5.webp"
                alt="IronHorse"
              />
            </div>
            <div className="footer-address">
              <i className="fas fa-map-marker-alt"></i>
              4-49/2, Besides Anvaya Conventions Road, Financial District,
              Vattinagulapally, Hyderabad - 500 032, Telangana
            </div>

            <div className="footer-contact-info">
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i> +91 9121 777 777
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i> info@irarealty.in
              </div>
            </div>

          </div>

          <div className="footer-right">
            <div className="footer-columns">
              <div className="footer-links">
                <h5>Quick Links</h5>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#floor-plans">Floor Plans</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                  <li><a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="footer-social">
                <h5>Social Media</h5>
                <ul>
                  <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                  <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                  <li><a href="#">Whatsapp</a></li>
                </ul>
              </div>
              <div className="footer-cta">
                <h5>Talk to our sales expert</h5>
                <button className="sales-btn">Click Here</button>
              </div>
            </div>
            <p className="footer-disclaimer">
              This is purely a conceptual presentation and not a legal offering.
              The promoters reserve the right to make changes in elevation,
              specifications, and plans as deemed fit.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2025 IRAREALTY</p>
        </div>
      </footer>

      {/* mobile version       */}
      <div>
              <div className="footer-top container">
        <div className="footer-content">
          {/* Left Section */}
          <div className="footer-left">
            <img
              src="/_next/static/media/urflogomobile.88c02773.webp"
              alt="Urban Ranch"
              className="footer-logo"
            />
            <div className="footer-logos">
              <img
                src="/_next/static/media/logofmobile.6f3922a8.webp"
                alt="ira"
              />
              <img
                src="/_next/static/media/ihlogomobile.111736a5.webp"
                alt="IRONHORSE"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <h5 className="footer-title">Talk to our sales expert</h5>
            <button className="footer-cta">Click Here</button>

            <div className="footer-info">
              <p><strong>Address:</strong><br />
                4-49/2, Besides Anvaya Conventions Road,<br />
                Financial District, Vattinagulapally,<br />
                Hyderabad - 500 032, Telangana
              </p>
              <p><strong>Phone:</strong> +91 8001 345 345</p>
              <p><strong>Email:</strong> info@irarealty.in</p>

              <div className="footer-social">
                <strong>Social Media :</strong><br />
                <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="footer-nav">
        <a href="#home">Home</a>
        <a href="#floor-plans">Floor Plans</a>
        <a href="#contact">Contact Us</a>
        <a href="https://irarealty.in/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
      </div>

      {/* Disclaimer */}
      <div className="footer-disclaimer">
        <p>
          This is purely a conceptual presentation and not a legal offering. The promoters reserve the right
          to make changes in elevation, specifications, and plans as deemed fit.
        </p>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>©2025 IRAREALTY</p>
      </div>

      </div>

      
    </div>

  );
}

export default Footer;
