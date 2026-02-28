export default function Progress({ current, total, onDotClick }) {
  return (
    <div className="progress">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`progress-dot ${i === current ? 'active' : ''}`}
          onClick={() => onDotClick(i)}
        />
      ))}
    </div>
  );
}
