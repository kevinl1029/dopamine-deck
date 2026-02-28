export default function Opening({ step }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', width: '100%', height: '100%', justifyContent: 'center' }}>
      {/* Step 0: The question */}
      {step === 0 && (
        <h1 className="hero-text fade-in">
          Why are we here today?
        </h1>
      )}

      {/* Step 1: The explanation */}
      {step === 1 && (
        <p className="body-text fade-in-up" style={{ textAlign: 'center' }}>
          This concept — friends getting together to present on random topics — started as a trend on Instagram.
          Within <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>48 hours</em>, I had it sent to me from <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>two different group chats</em>.
        </p>
      )}

      {/* Step 2: Insta2 - larger */}
      {step === 2 && (
        <div className="fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <img 
            src="/Insta2.png" 
            alt="Instagram screenshot"
            style={{ maxHeight: '75vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '12px' }}
          />
        </div>
      )}

      {/* Step 3: Different creators + Insta1 */}
      {step === 3 && (
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '24px' }}>
          <p className="mono-text">Different creators. Same concept. Same week.</p>
          <img 
            src="/Insta1.png" 
            alt="Instagram post"
            style={{ maxHeight: '65vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '12px' }}
          />
        </div>
      )}

      {/* Step 4: Different group chat + Groupme */}
      {step === 4 && (
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '24px' }}>
          <p className="mono-text">Different group chat.</p>
          <img 
            src="/Groupme.png" 
            alt="Groupme screenshot"
            style={{ maxHeight: '65vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '12px' }}
          />
        </div>
      )}

      {/* Step 5: The punchline */}
      {step === 5 && (
        <p className="statement-text fade-in">
          We didn't choose PPT Night.<br />
          <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>PPT Night chose us.</em>
        </p>
      )}

      {/* Step 6: Algorithm bridge */}
      {step === 6 && (
        <div className="fade-in-slow" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
            An <span className="mono-text">algorithm</span> decided this format was trending.
            It surfaced it to creators. Distribution systems pushed it across your feeds.
          </p>
          <p className="mono-text fade-in-delay-2" style={{ marginTop: '24px', fontSize: '1rem' }}>
            Keep that word in mind: algorithm.
          </p>
        </div>
      )}
    </div>
  );
}
