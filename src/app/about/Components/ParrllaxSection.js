'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ParallaxSection({
  image = 'https://nandinibali.com/storage/images/page/hero_image/B0002506_cr.jpg',
  overlay = 'linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.55))',
  height = '80vh',
  speed = 0.35,
  children,
  align = 'center', // 'center' | 'left' | 'right'
  priority = false
}) {
  const wrapRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = null;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const effectiveSpeed = prefersReducedMotion ? 0 : speed;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        if (!wrapRef.current) return;
        const rect = wrapRef.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const elTop = rect.top + scrollY;
        const y = (scrollY - elTop) * effectiveSpeed;
        setOffset(y);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <section ref={wrapRef} className={`px ${align}`} style={{ height }}>
      <div className="bg" style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="overlay" style={{ background: overlay }} />
      </div>

      <div className="content container">{children}</div>

      <style jsx>{`
        .px {
          position: relative;
          overflow: hidden;
          display: grid;
          align-items: center;
        }
        .px.left .content { justify-self: start;}
        .px.center .content { justify-self: center; text-align: center; max-width : 1400px; margin : 40px auto ;}
        .px.right .content { justify-self: end; text-align: right; }
        .bg {
          position: absolute;
          inset: -12% 0 -12% 0; /* larger for smoother parallax edges */
          will-change: transform;
          filter: saturate(105%) contrast(102%);
        }
        .overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .content {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </section>
  );
}