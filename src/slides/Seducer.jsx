export default function Seducer({ step }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      width: '100%',
      transition: 'all 1s ease',
    }}>
      {/* Step 0: Satan intro */}
      {step === 0 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center' }}>
            In Western theology, there's a figure whose entire role is <em style={{ color: 'var(--accent-danger)', fontFamily: 'var(--font-serif)' }}>seduction</em>.
          </p>
          <p className="body-text fade-in-delay-1" style={{ textAlign: 'center', marginTop: '16px' }}>
            The devil. Satan. Lucifer. The tempter.
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '16px' }}>
            And the way the tempter works isn't through force.
            It's through <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>reward</em>.
            Through offering something that satisfies a desire
            you didn't even know you had.
          </p>
        </div>
      )}
    </div>
  );
}
