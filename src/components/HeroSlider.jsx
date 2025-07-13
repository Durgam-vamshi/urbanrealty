import React from "react";
import "../styles/HeroSlider.css";
import Navbar from "./Navbar";
function HeroSlider() {
  return (
    <div className="hero-section">
      <Navbar />
      <div className="content-container">
      <img
          src="https://urbanranch.irarealty.in/_next/static/media/urhmobile.b0919f50.webp"
          alt="Mobile Logo"
          width="104"
          height="54"
          className="img-fluid1"
        />
        <div className="left-content">
          <h1 className="hero-heading">
            4BHK
            Gated Villa
            <br />
            Community in
            <br />
            Adibatla
          </h1>
          <p className="descript-hero">Experience 19.5 acres of gated community living
            at <br /> Urban Ranch</p>
          <button
            className="btn fw-bold px-4 py-2 intro_btn"
            style={{
              color: "#f7c04a",
              backgroundColor: "white",
              borderWidth: "1px",
              borderColor: "#f7c04a",
            }}
          >
            Download Brochure
          </button>

          <div className="partners">
            <img
              src="https://urbanranch.irarealty.in/_next/static/media/logodesktop.91d50d06.webp"
              alt="Partner 1"
              className="partner-left"
            />
            <img
              src="https://urbanranch.irarealty.in/_next/static/media/irlogodesktop.fc9d9f16.webp"
              alt="Partner 2"
              className="partner-right"
            />
          </div>
        </div>
        <div className="form-card">
          <h2>Unlock Early Access</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Mobile Number" />
            </div>
            <input
              type="date"
              className="full-width"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
                if (!e.target.value) e.target.type = "text";
              }}
              placeholder="Select date" />
            <input type="email" placeholder="Email ID" className="full-width" />
            <button type="submit">Book a visit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
