const CLOUDS = [
  { top: "8%", scale: 1.4, duration: 55, delay: 0, opacity: 0.9 },
  { top: "18%", scale: 0.9, duration: 40, delay: -12, opacity: 0.75 },
  { top: "30%", scale: 1.1, duration: 65, delay: -30, opacity: 0.85 },
  { top: "5%", scale: 0.7, duration: 35, delay: -8, opacity: 0.6 },
  { top: "45%", scale: 1.3, duration: 70, delay: -45, opacity: 0.7 },
  { top: "60%", scale: 0.85, duration: 48, delay: -20, opacity: 0.55 },
];

function Cloud({ top, scale, duration, delay, opacity }) {
  return (
    <div
      className="cloud"
      style={{
        top,
        opacity,
        transform: `scale(${scale})`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      <span className="cloud-lobe cloud-lobe--a" />
      <span className="cloud-lobe cloud-lobe--b" />
      <span className="cloud-lobe cloud-lobe--c" />
      <span className="cloud-lobe cloud-lobe--d" />
    </div>
  );
}

export default function Clouds() {
  return (
    <div className="cloud-layer" aria-hidden="true">
      {CLOUDS.map((c, i) => (
        <Cloud key={i} {...c} />
      ))}
    </div>
  );
}
