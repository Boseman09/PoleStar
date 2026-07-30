import { useState } from "react";
import airports from "../data/airports";

export default function AirportDetails() {
  const [active, setActive] = useState(null);

  return (
    <section className="details-section" id="airports">
      <div className="section-heading">
        <span className="section-eyebrow">Airport directory</span>
        <h2>Know before you fly</h2>
        <p>Click any airport to see its terminals, runways and full name.</p>
      </div>

      <div className="airport-grid">
        {airports.map((a) => {
          const isOpen = active === a.code;
          return (
            <button
              key={a.code}
              className={`airport-card ${isOpen ? "airport-card--open" : ""}`}
              onClick={() => setActive(isOpen ? null : a.code)}
              aria-expanded={isOpen}
            >
              <div className="airport-card__top">
                <span className="airport-card__code">{a.code}</span>
                <span className="airport-card__city">{a.city}</span>
              </div>

              {isOpen && (
                <div className="airport-card__body">
                  <p className="airport-card__name">{a.name}</p>
                  <div className="airport-card__stats">
                    <div>
                      <span>{a.terminals}</span>
                      <label>Terminal{a.terminals > 1 ? "s" : ""}</label>
                    </div>
                    <div>
                      <span>{a.runways}</span>
                      <label>Runway{a.runways > 1 ? "s" : ""}</label>
                    </div>
                  </div>
                  <p className="airport-card__state">{a.state}, India</p>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
