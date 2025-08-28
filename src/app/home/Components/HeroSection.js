'use client';


import Link from 'next/link';
import ParallaxSection from './ParrllaxSection';

export default function HeroSection() {
  return (
    <ParallaxSection
      image="https://media.licdn.com/dms/image/v2/C4D12AQGLMrX9fuCANA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1610446726882?e=2147483647&v=beta&t=S3_yVc3TVpCMNHSG5DhPRn8rgDC0h__IcBGKI4CTaaY"
      overlay="linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(10,10,10,0.70) 100%)"
      height="92vh"
      speed={0.25}
      align="center"
      priority
    >
      <div className="hero">
        <span className="pill">Start your journey</span>
        <h1 className="title-serif headline">How does your world look?</h1>
        <p className="sub">
          Bespoke travel experiences crafted with care, creativity, and an eye for detail.
        </p>
        <div className="cta-row">
          <Link className="btn" href="/our-journeys">Let&apos;s Explore</Link>
          <a className="btn secondary" href="#about">More About Us</a>
        </div>
      </div>

      <style jsx>{`
        .hero { max-width: 900px; margin: 0 auto; }
        .headline { font-size: clamp(36px, 6vw, 72px); margin: 14px 0 8px; }
        .sub { margin: 10px 0 24px; color: var(--muted); font-size: clamp(16px, 2vw, 18px); }
        .cta-row { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
      `}</style>
    </ParallaxSection>
  );
}