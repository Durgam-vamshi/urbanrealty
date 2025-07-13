import React from 'react';
import "../styles/LocationAdvantages.css"

function LocationAdvantages() {
    return (
        <section className="location-section">
            <div className="location-container">
                <div className="location-image">
                    <img
                        src="https://urbanranch.irarealty.in/_next/static/media/ladesktop.5ce3d769.webp"
                        alt="Urban Ranch Map"
                    />
                </div>
                <div className="location-content">
                    <span className="location-tag">Location Advantages</span>

                    <h2 className="location-title desktop-title">
                        Close to What Matters. <br /> Away From What Doesn’t.
                    </h2>
                    <h2 className="location-title mobile-title">
                        Close to What Matters Away From What Doesn't
                    </h2>
                    <ul className="location-points">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-success me-2 flex-shrink-0" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path></svg>10-15 mins to TCS, Tata Aerospace, Adibatla SEZ
                        <br />
                        <br />
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-success me-2 flex-shrink-0" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path></svg>15-20 mins to Delhi Public School, Aga Khan Academy
                        <br />
                        <br />
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-success me-2 flex-shrink-0" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path></svg>10-15 mins to Wonderla & upcoming World Trade Center
                        <br />
                        <br />
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-success me-2 flex-shrink-0" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"></path></svg>25 mins to RGI Airport & ORR Exit 13
                    </ul>
                    <button className="location-btn">Why Adibatla?</button>
                </div>
            </div>

        </section>
    );
}

export default LocationAdvantages;
