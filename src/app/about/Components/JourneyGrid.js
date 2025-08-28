'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  { title: 'Wellness Sanctuaries', img: 'https://media.cntraveler.com/photos/5d8cc30a64c98e0008826472/16:9/w_2560%2Cc_limit/Kamalaya-Koh-Samui-Wellness-Sanctuary_2019_Soma-night.jpg' },
  { title: 'Epic Odysseys', img: 'https://res.klook.com/image/upload/fl_lossy.progressive,c_fill,f_auto,w_750,q_85/v1730081363/hotel/ooxgkxvpk8cfcjmi3607.jpg' },
  { title: 'Tropical Hideaways', img: 'https://kamalaya.com/wp-content/uploads/2021/03/escape-to-kamalaya-02.jpg' },
  { title: 'Urban Discoveries', img: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/nyrchjwtvzlvlktoka6n/Forest%20Bathing%20Experience%20in%20Batangas%20by%20Shanti%20Wellness%20Sanctuary.jpg' },
  { title: 'Romantic Escapes', img: 'https://kamalaya.com/wp-content/uploads/2020/08/wellness-sanctuary-koh-samui-thailand.jpg' },
  { title: 'Cultural Immersions', img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/343751866.jpg?k=53d1992c8e7198a0fddc7b9af35106bbe0b0aed2cf35836221b1177a4002ef21&o=&hp=1' },
  { title: 'Wilderness Adventures', img: 'https://nandinibali.com/storage/images/page/hero_image/B0002506_cr.jpg' },
  { title: 'Featured Escapes', img: 'https://www.wellbeingescapes.com/images/hotel/1250x625/de49655e14ef67b1bd3bccccf4efadd0.jpg' }
];

export default function JourneyGrid({
  compact = false,
  parallaxSpeed = 0.12,
  maxParallax = 36
}) {
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const imgWrapRefs = useRef([]);

  // Parallax on scroll
  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined'
      ? window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      : false;

    const speed = prefersReduced ? 0 : parallaxSpeed;
    let raf = null;

    const update = () => {
      raf = null;
      const vpH = window.innerHeight;
      const vpCenter = vpH / 2;

      imgWrapRefs.current.forEach((el) => {
        if (!el) return;
        const host = el.parentElement;
        const rect = host.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;

        const distance = vpCenter - elCenter;
        const offset = Math.max(Math.min(distance * speed, maxParallax), -maxParallax);

        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [parallaxSpeed, maxParallax]);

  // GSAP Animations
  useEffect(() => {
    // Card reveal animation
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(card,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1 // Stagger the animation
        }
      );
    });

    // Image hover animation (using GSAP for more control)
    cardRefs.current.forEach((card) => {
      const img = card.querySelector('.parallaxInner img');
      if (img) {
        card.addEventListener('mouseenter', () => {
          gsap.to(img, { scale: 1.04, duration: 0.6, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' });
        });
      }
    });

  }, []);

  return (
    <div ref={gridRef} className={`grid ${compact ? 'compact' : ''}`}>
      {items.map((it, i) => (
        <Card
          key={it.title}
          index={i}
          title={it.title}
          img={it.img}
          setCardRef={(el) => (cardRefs.current[i] = el)}
          setImgWrapRef={(el) => (imgWrapRefs.current[i] = el)}
        />
      ))}

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          max-width: 1400px;
          margin: 50px auto;
        }
        .grid.compact {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1100px) {
          .grid, .grid.compact { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .grid, .grid.compact { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

function Card({ title, img, index, setCardRef, setImgWrapRef }) {
  return (
    <div ref={setCardRef} className="card">
      <div className="media">
        <div ref={setImgWrapRef} className="parallaxInner">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="shade" />
      </div>

      <div className="txt">
        <h4 className="title-serif">{title}</h4>
        <Link className="explore" href="/our-journeys">Explore →</Link>
      </div>

      <style jsx>{`
        .card {
          position: relative;
          overflow: hidden;
          border-radius: var(--radius);
          background: var(--card);
          border: 1px solid #ffffff12;
          box-shadow: var(--shadow-2);
          display: grid;
          grid-template-rows: 320px auto;
          /* Initial state for GSAP animation */
          opacity: 0;
          transform: translateY(50px);
        }

        .media {
          position: relative;
          overflow: hidden;
        }
        .parallaxInner {
          position: absolute;
          inset: 0;
          will-change: transform;
        }

        .shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.55));
          pointer-events: none;
        }

        .txt {
          padding: 16px 16px 18px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        h4 { font-size: 18px; margin: 0; }
        .explore { color: var(--brand); font-weight: 600; white-space: nowrap; }
      `}</style>
    </div>
  );
}