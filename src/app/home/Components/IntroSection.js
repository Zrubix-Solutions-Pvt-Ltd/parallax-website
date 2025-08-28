export default function IntroSection() {
  return (
    <section className="section" id="about">
      <div className="container intro">
        <div className="intro-left">
          <h2 className="title-serif">Exquisite journeys. Personally crafted.</h2>
          <p>
            We design seamless, inspiring itineraries that reflect your taste and tempo—so you can
            be fully present in the places that move you.
          </p>
        </div>
        <div className="intro-right cardish">
          <div className="kpi">
            <div className="num title-serif">65+</div>
            <div className="txt">Years of combined expertise</div>
          </div>
          <div className="kpi">
            <div className="num title-serif">100%</div>
            <div className="txt">Bespoke, never one-size-fits-all</div>
          </div>
          <div className="kpi">
            <div className="num title-serif">24/7</div>
            <div className="txt">Concierge support while you travel</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .intro {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
          align-items: start;
          max-width : 1400px;
          margin : 60px auto ;
        }
        .intro-left h2 { margin: 0 0 10px; font-size: clamp(26px, 3vw, 40px); }
        .intro-left p { color: var(--muted); }
        .cardish {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          background: #ffffff08;
          border: 1px solid #ffffff12;
          border-radius: var(--radius);
          padding: 14px;
        }
        .kpi {
          background: #0f0f10c0;
          border: 1px solid #ffffff12;
          border-radius: 12px;
          padding: 14px;
          box-shadow: var(--shadow-2);
        }
        .kpi .num { font-size: 24px; }
        .kpi .txt { color: var(--muted); }

        @media (max-width: 1000px) {
          .intro { grid-template-columns: 1fr; }
          .cardish { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}