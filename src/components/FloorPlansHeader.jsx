import React from 'react';
function FloorPlansHeader() {
    return (
        <div className="floorplans-header">
            <p className="fp-heading text-dark" style={{ fontWeight: 600, lineHeight: '1.2', marginBottom: '0.5rem' }}>Spacious by Design. Smart <br /> by Default.</p>
            <p className="fp-subheading">Choose from East &amp; West-facing villas:</p>
            <button className="fp-download" style={{ width: '40vw ' }}>Download Floor Plans</button>
        </div>
    );
}

export default FloorPlansHeader;



