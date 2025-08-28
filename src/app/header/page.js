'use client';


import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`hdr ${scrolled ? 'scrolled' : ''}`}>
      <div className="container inner">
        <Link href="/" className="brand">
          <span className="mark">E</span>
          <span className="word">loura Journeys</span>
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`}>
          
          <a href="#process" className="link">Our Process</a>
          <a href="#journal" className="link">Journal</a>
          <a href="#contact" className="link">Contact</a>
        </nav>

        <button className="burger" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <style jsx>{`
        .hdr {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          transition: background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease;
          background: transparent;
          border-bottom: 1px solid transparent;
          
        }
        .hdr.scrolled {
          backdrop-filter: saturate(140%) blur(10px);
          background: rgba(10,10,10,0.6);
          border-bottom: 1px solid #ffffff14;
        }
        .inner {
          height: 74px;
          display: flex;
          align-items: center;
              gap: 500px;
          justify-content: space-around;
        }
        .brand {
        //   display: inline-flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          letter-spacing: 0.4px;
        }
        .mark {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--brand), #f3d59b);
          color: #c7b6b6ff;
          font-weight: 900;
        }
        .word {
          font-family: "Playfair Display", serif;
          font-size: 18px;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 22px;
        }
        .link {
          color: var(--muted);
          font-weight: 500;
          transition: color 0.2s ease, opacity 0.2s ease;
        }
        .link:hover { color: var(--text); }
        .cta { margin-left: 8px; }

        .burger {
          display: none;
          background: none;
          border: 0;
          width: 38px; height: 38px;
          gap: 5px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .burger span {
          display: block;
          width: 22px; height: 2px;
          background: var(--text);
          border-radius: 2px;
        }

        @media (max-width: 920px) {
          .nav {
            position: fixed;
            top: 74px; right: 16px; left: 16px;
            background: #0f0f10f2;
            border: 1px solid #ffffff1a;
            border-radius: 14px;
            box-shadow: var(--shadow-1);
            padding: 16px;
            display: none;
            flex-direction: column;
            gap: 12px;
          }
          .nav.open { display: flex; }
          .burger { display: inline-flex; }
          .cta { width: 100%; justify-content: center; }
        }
      `}</style>
    </header>
  );
}