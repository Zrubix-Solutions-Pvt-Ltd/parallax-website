'use client';

export default function Footer() {
  return (
    <footer className="ft" id="contact">
      <div className="container">
        <div className="top">
          <div className="brand">
            <div className="mark">E</div>
            <div>
              <div className="name title-serif">Eloura Journeys</div>
              <div className="muted">Tailored Worldwide Luxury Experiences</div>
            </div>
          </div>
          <div className="actions">
            <a className="pill" href="mailto:hello@example.com">Email</a>
            <a className="pill" href="tel:+44123456789">Call</a>
          </div>
        </div>

        <div className="grid">
          <div>
            <h5>Our Story</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#journal">Journal</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Our Journeys</h5>
            <ul>
              <li><a href="/our-journeys">Wellness Sanctuaries</a></li>
              <li><a href="/our-journeys">Cultural Immersions</a></li>
              <li><a href="/our-journeys">Tropical Hideaways</a></li>
              <li><a href="/our-journeys">Wilderness Adventures</a></li>
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li>38 Thistle Street</li>
              <li>Edinburgh • EH2 1EN</li>
              <li className="muted">© Your Brand • Privacy • Terms</li>
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li>38 Thistle Street</li>
              <li>Edinburgh • EH2 1EN</li>
              <li className="muted">© Your Brand • Privacy • Terms</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ft {
          padding: 60px 0 80px;
          background: #0a0a0a;
          border-top: 1px solid #ffffff10;
          margin-top: 80px;
          max-width : 1400px;
          margin : 40px auto ; 
        }
        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-bottom: 22px;
          border-bottom: 1px dashed #ffffff15;
          margin-bottom: 26px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .mark {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--brand), #f3d59b);
          color: #151515;
          display: grid; place-items: center;
          font-weight: 900;
        }
        .name { font-size: 20px; }
        .muted { color: var(--muted); }
        .actions { display: flex; gap: 10px; }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 20px;
        }
        h5 {
          margin: 10px 0 12px;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--muted);
        }
        ul { list-style: none; padding: 0; margin: 0; }
        li { padding: 6px 0; color: #d9d9de; }
        a:hover { color: var(--brand); }

        @media (max-width: 900px) {
          .top { flex-direction: column; align-items: flex-start; }
          .grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}