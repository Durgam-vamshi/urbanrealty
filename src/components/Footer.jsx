import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="mobile-res">
              <div>
                <img
                  src="https://urbanranch.irarealty.in/_next/static/media/urflogomobile.88c02773.webp"
                  alt="Urban Ranch Logo"
                  className="footer-logo"
                />

                <div className="footer-partners">
                  <img
                    src="https://urbanranch.irarealty.in/_next/static/media/logofmobile.6f3922a8.webp"
                    alt="IRA"
                    className="ira-Img"
                  />
                  <img
                    src="https://urbanranch.irarealty.in/_next/static/media/ihlogomobile.111736a5.webp"
                    alt="IronHorse"
                  />
                </div>
              </div>
              <hr />
              <div className="footer-top-right">
                <div className=" mobile-cta">
                  <h5>Talk to our sales expert</h5>
                  <button className="sales-btn">Click Here</button>
                </div>
                <div className="footer-address mobile">
                  <h4>Address:</h4>
                  <i className="fas fa-map-marker-alt"></i>

                  {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg> */}

                  4-49/2, Besides Anvaya Conventions Road, Financial District,
                  Vattinagulapally, Hyderabad - 500 032, Telangana
                </div>
                <div className="contact-item">
                  <h4>Phone:</h4>
                  <i className="fas fa-phone-alt"></i>+91 9121 777 777
                </div>
                <div className="contact-item">
                  <h4>Email:</h4>
                  <i className="fas fa-envelope"></i> info@irarealty.in
                </div>
                <div className="footer-social-mobile">
                  <h5>Social Media</h5>
                  <ul>
                    <li>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#">Whatsapp</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-links links-mobile">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#floor-plans">Floor Plans</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="/privacy-policy" target="_blank" rel="noreferrer">
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <p className="footer-disclaimer">
                This is purely a conceptual presentation and not a legal
                offering. The promoters reserve the right to make changes in
                elevation, specifications, and plans as deemed fit.
              </p>
              <div className="footer-bottom">
                <p>©2025 IRAREALTY</p>
              </div>
            </div>

            <div className="footer-desktop">
              <div className="footer-address desktop">
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
          </div>

          <div className="footer-right">
            <div className="footer-columns">
              <div className="footer-links">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#floor-plans">Floor Plans</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/privacy-policy" target="_blank" rel="noreferrer">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-social">
                <h5>Social Media</h5>
                <ul>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#">Whatsapp</a>
                  </li>
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

        <div className="footer-bottom footer-bottom-desktop">
          <p>©2025 IRAREALTY</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
