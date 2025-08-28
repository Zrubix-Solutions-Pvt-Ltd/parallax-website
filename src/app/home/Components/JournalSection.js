import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const posts = [1, 2, 3].map((i) => ({
  id: i,
  title: `Inspiration #${i}`,
  excerpt: 'A short teaser about this experience or destination.',
  img: `https://goapropertyguru.com/wp-content/uploads/2023/09/wellness-travel2.jpg`,
}));

export default function JournalSection() {
  const postRefs = useRef([]);
  const imgRefs = useRef([]);

  // Parallax effect for images
  useEffect(() => {
    imgRefs.current.forEach((img, i) => {
      gsap.to(img, {
        y: -50, // Adjust this value for more or less parallax
        ease: 'none',
        scrollTrigger: {
          trigger: postRefs.current[i],
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, []);

  // GSAP animation for posts (fade in and slide up)
  useEffect(() => {
    postRefs.current.forEach((post, i) => {
      gsap.fromTo(post,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: post,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1 // Stagger the animation
        }
      );
    });
  }, []);

  return (
    <section className="section" id="journal">
      <div className="container">
        <div className="sec-head">
          <span className="pill">Journal</span>
          <h3 className="title-serif">Ideas to spark your next escape</h3>
        </div>

        <div className="journal">
          {posts.map((p, i) => (
            <article
              className="post"
              key={p.id}
              ref={(el) => (postRefs.current[i] = el)}
            >
              <div className="ph">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  ref={(el) => (imgRefs.current[i] = el)}
                />
                <div className="shade" />
              </div>
              <div className="meta">
                <h4 className="title-serif">{p.title}</h4>
                <p className="muted">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sec-head {
          max-width: 1400px;
          margin: 40px auto;
          text-align: center; /* Center the heading */
        }
        .sec-head h3 { margin: 10px 0 0; font-size: clamp(24px, 3vw, 34px); }

        .journal {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 1400px;
          margin: 50px auto;
        }
        .post {
          background: var(--card);
          border: 1px solid #ffffff12;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-2);
          /* Initial state for GSAP animation */
          opacity: 0;
          transform: translateY(50px);
        }
        .ph {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .ph :global(img) {
          will-change: transform; /* Optimize for parallax */
        }
        .shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.45));
          pointer-events: none;
        }
        .meta { padding: 14px; }
        .meta h4 { margin: 6px 0 6px; }

        @media (max-width: 1000px) { .journal { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .journal { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}