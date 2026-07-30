import { useEffect, useState } from "react";

const OFFERS = [
  { route: "DEL → BOM", tag: "Early Bird", detail: "Up to 20% off, booked 30 days ahead" },
  { route: "BLR → MAA", tag: "Weekend Hop", detail: "Flat ₹500 off on Fri–Sun departures" },
  { route: "CCU → HYD", tag: "First Flight", detail: "10% off for new sign-ups" },
  { route: "GOI → PNQ", tag: "Monsoon Special", detail: "Fares from ₹1,999 all July" },
];

export default function OffersPopup() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 1800);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) return;
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % OFFERS.length);
        setVisible(true);
      }, 500);
    }, 6000);
    return () => clearInterval(cycle);
  }, [visible, dismissed]);

  if (dismissed) return null;

  const offer = OFFERS[index];

  return (
    <div className={`offer-stub ${visible ? "offer-stub--visible" : ""}`}>
      <button
        className="offer-stub__close"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss offer"
      >
        ×
      </button>
      <div className="offer-stub__tag">{offer.tag}</div>
      <div className="offer-stub__route">{offer.route}</div>
      <div className="offer-stub__detail">{offer.detail}</div>
      <div className="offer-stub__perf" aria-hidden="true" />
    </div>
  );
}
