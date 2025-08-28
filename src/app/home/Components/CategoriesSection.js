'use client';


import JourneyGrid from './JourneyGrid';

export default function CategoriesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="sec-head">
          <span className="pill">Our Journeys</span>
          <h3 className="title-serif">The world, your way.</h3>
        </div>
        <JourneyGrid />
      </div>

      <style jsx>{`
        .sec-head {  max-width : 1400px; margin : 40px auto ;}
        .sec-head h3 { margin: 10px 0 0; font-size: clamp(24px, 3vw, 34px); }
      `}</style>
    </section>
  );
}