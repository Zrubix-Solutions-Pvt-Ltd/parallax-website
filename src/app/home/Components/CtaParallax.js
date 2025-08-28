'use client';


import ParallaxSection from './ParrllaxSection';

export default function CtaParallax() {
  return (
    <ParallaxSection
      image="https://www.wellbeingescapes.com/images/hotel/1250x625/de49655e14ef67b1bd3bccccf4efadd0.jpg"
      overlay="linear-gradient(180deg, rgba(0,0,0,0.3), rgba(10,10,10,0.8))"
      height="56vh"
      speed={0.28}
      align="center"
    >
      <div className="cta container">
        <h3 className="title-serif">We’re ready to design your journey.</h3>
        <div className="cta-row">
          <a className="btn" href="#contact">Let’s get started</a>
          <a className="btn secondary" href="mailto:hello@example.com">Email us</a>
        </div>
      </div>

      <style jsx>{`
        .cta { text-align: center; max-width : 1400px; margin : 40px auto ;}
        .cta h3 { margin: 0 0 14px; font-size: clamp(22px, 3vw, 36px); }
        .cta-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
      `}</style>
    </ParallaxSection>
  );
}