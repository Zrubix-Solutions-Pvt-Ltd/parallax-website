'use client';


import ParallaxSection from './ParrllaxSection';

export default function ProcessParallax() {
  return (
    <ParallaxSection
      image="https://cf.bstatic.com/xdata/images/hotel/max1024x768/343751866.jpg?k=53d1992c8e7198a0fddc7b9af35106bbe0b0aed2cf35836221b1177a4002ef21&o=&hp=1"
      overlay="linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55))"
      height="70vh"
      speed={0.35}
      align="center"
    >
      <div className="container" id="process">
        <div className="process">
          <div className="step">
            <span className="stnum">Step 1</span>
            <h4 className="title-serif">Let’s Connect</h4>
            <p>We learn your vision, style, and must-haves to tailor the journey to you.</p>
          </div>
          <div className="step">
            <span className="stnum">Step 2</span>
            <h4 className="title-serif">Bespoke Planning</h4>
            <p>We curate a thoughtful itinerary and walk you through every detail.</p>
          </div>
          <div className="step">
            <span className="stnum">Step 3</span>
            <h4 className="title-serif">Your Eloura</h4>
            <p>Travel effortlessly with support on hand—so you can truly be present.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .process {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          background: #00000040;
          border: 1px solid #ffffff24;
          border-radius: var(--radius);
          padding: 100px;
        }
        .step {
          background: #101012b0;
          border: 1px solid #ffffff18;
          border-radius: 12px;
          padding: 70px;
        }
        .stnum {
          color: var(--accent);
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 12px;
        }

        @media (max-width: 1000px) {
          .process { grid-template-columns: 1fr; }
        }
      `}</style>
    </ParallaxSection>
  );
}