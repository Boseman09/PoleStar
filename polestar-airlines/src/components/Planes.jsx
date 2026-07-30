const FLIGHTS = [
  { type: "takeoff", left: "8%", delay: 0, duration: 9 },
  { type: "landing", left: "70%", delay: 4.5, duration: 9 },
  { type: "takeoff", left: "40%", delay: 9, duration: 9 },
  { type: "landing", left: "18%", delay: 13.5, duration: 9 },
  { type: "takeoff", left: "62%", delay: 18, duration: 9 },
];

function PlaneIcon() {
  return (
    <svg viewBox="0 0 64 64" width="34" height="34">
      <path
        d="M32 2 L36 22 L58 32 L58 37 L36 31 L34 48 L44 55 L44 59 L32 55 L20 59 L20 55 L30 48 L28 31 L6 37 L6 32 L28 22 Z"
        fill="var(--white)"
        stroke="var(--navy)"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function Planes() {
  return (
    <div className="plane-layer" aria-hidden="true">
      {FLIGHTS.map((f, i) => (
        <div
          key={i}
          className={`plane plane--${f.type}`}
          style={{
            left: f.left,
            animationDelay: `${f.delay}s`,
            animationDuration: `${f.duration}s`,
          }}
        >
          <PlaneIcon />
        </div>
      ))}
    </div>
  );
}
