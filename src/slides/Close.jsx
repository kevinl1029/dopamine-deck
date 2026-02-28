export default function Close({ step }) {
  // Hexagram 42: Wind over Thunder (Yi / Increase)
  // Bottom to top: Thunder (Zhen) = broken, broken, solid | Wind (Xun) = solid, solid, broken
  // From bottom: solid, broken, broken, solid, solid, broken
  // Actually: Thunder bottom = yang, yin, yin (bottom to top: solid, broken, broken)
  // Wind top = yin, yang, yang (bottom to top: broken, solid, solid)
  // Full hexagram bottom to top: solid, broken, broken, broken, solid, solid

  const lines = [
    { type: 'solid' },   // line 1 (bottom)
    { type: 'broken' },  // line 2
    { type: 'broken' },  // line 3
    { type: 'broken' },  // line 4
    { type: 'solid' },   // line 5
    { type: 'solid' },   // line 6 (top)
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      width: '100%',
    }}>
      {/* Step 0: Western → Eastern transition */}
      {step === 0 && (
        <div className="fade-in-slow" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            I just asked you a question framed in Western theology.
            Good versus evil. The moral binary.
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '24px' }}>
            But that's one framework. And it's not the only one.
          </p>
        </div>
      )}

      {/* Step 1: I Ching intro */}
      {step === 1 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center' }}>
            A few weeks ago, I picked up a book I hadn't opened in years.
          </p>
          <p className="statement-text fade-in-delay-1" style={{ marginTop: '24px' }}>
            The <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>I Ching</em>.
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '16px' }}>
            Arguably the oldest text in Chinese civilization.
            Dating back roughly three thousand years, to the Western Zhou dynasty.
            One of the oldest pieces of written human thought that still survives.
          </p>
        </div>
      )}

      {/* Step 2: The hexagram */}
      {step === 2 && (
        <div className="fade-in-slow" style={{ textAlign: 'center' }}>
          <p className="mono-text" style={{ marginBottom: '8px', fontSize: '0.7rem' }}>Hexagram 42 — Wind over Thunder</p>
          <p className="section-label" style={{ marginBottom: '32px' }}>益 Increase</p>

          <div className="hexagram">
            {[...lines].reverse().map((line, i) => (
              <div
                key={i}
                className={`hexagram-line ${line.type === 'broken' ? 'broken' : ''}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>

          <p className="quote-text fade-in-delay-4" style={{ marginTop: '48px' }}>
            "It furthers one to cross the great water."
          </p>
        </div>
      )}

      {/* Step 3: The close */}
      {step === 3 && (
        <div className="fade-in-slow" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            The I Ching doesn't deal in good and evil.
            It deals in movement. In change.
            In the relationship between forces.
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '32px' }}>
            The Western framework asked me a question I can't answer:
            am I the seducer or the healer?
          </p>
          <p className="mic-drop fade-in-delay-3" style={{ marginTop: '40px' }}>
            And then the oldest text I've ever held<br />
            told me to cross the water.
          </p>
        </div>
      )}

      {/* Step 4: Final */}
      {step === 4 && (
        <div className="fade-in-slow" style={{ textAlign: 'center' }}>
          <p className="hero-text" style={{ fontFamily: 'var(--font-serif)', fontWeight: 400 }}>
            Make of that what you will.
          </p>
        </div>
      )}
    </div>
  );
}
