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
      {/* Step 0: The shift */}
      {step === 0 && (
        <div className="fade-in-slow" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            But I want to sit with something uncomfortable for a second.
          </p>
        </div>
      )}

      {/* Step 1: Satan intro */}
      {step === 1 && (
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

      {/* Step 2: The connection */}
      {step === 2 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center' }}>
            Now think about what I just described.
          </p>
          <p className="body-text fade-in-delay-1" style={{ textAlign: 'center', marginTop: '16px' }}>
            I'm building a product that intentionally hacks the human reward system.
            Engineering Reward Prediction Error. Calibrating what your brain expects and receives.
            Using <em style={{ color: 'var(--accent-danger)' }}>seduction mechanics</em>. <em style={{ color: 'var(--accent-danger)' }}>Dopamine mechanics</em>.
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '16px' }}>
            The exact same levers that every addictive product has ever used.
          </p>
          <p className="mono-text fade-in-delay-3" style={{ marginTop: '24px' }}>
            I'm just pointing them in the other direction. Or at least, I believe I am.
          </p>
        </div>
      )}

      {/* Step 3: The question */}
      {step === 3 && (
        <div className="fade-in-slow" style={{ textAlign: 'center' }}>
          <p className="mic-drop">
            Does the intention matter?
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '32px' }}>
            If you're using the tools of the seducer — hacking the same reward pathways,
            exploiting the same prediction errors, engineering the same behavioral loops —
          </p>
          <p className="statement-text fade-in-delay-3" style={{ marginTop: '24px' }}>
            are you the antidote?<br />
            Or are you just the devil who thinks<br />
            he's doing God's work?
          </p>
        </div>
      )}

      {/* Step 4: The gap */}
      {step === 4 && (
        <div className="fade-in-slow" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            I don't have a clean answer to that. I'm not sure there is one.
          </p>
          <p className="body-text fade-in-delay-3" style={{ textAlign: 'center', marginTop: '40px' }}>
            What I do know is that nobody else is building in this space.
            The people who understand dopamine mechanics are using them to keep you scrolling.
            And the people who want to help you are building meditation apps
            that don't engage with the actual neuroscience.
          </p>
          <p className="mic-drop fade-in-delay-4" style={{ marginTop: '40px' }}>
            Someone has to walk into that gap.<br />
            Even if walking into it means becoming<br />
            something you're not sure you should be.
          </p>
        </div>
      )}
    </div>
  );
}
