export default function Opening({ step }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', width: '100%' }}>
      {/* Step 0: The question */}
      {step >= 0 && (
        <h1 className="hero-text fade-in">
          Why are we here tonight?
        </h1>
      )}

      {/* Step 1: The explanation */}
      {step >= 1 && (
        <p className="body-text fade-in-up" style={{ textAlign: 'center' }}>
          This concept — friends getting together to present on random topics — started as a trend on Instagram.
          Within <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>48 hours</em>, I had it sent to me from <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>three different group chats</em>.
        </p>
      )}

      {/* Step 2: Screenshots placeholder */}
      {step >= 2 && (
        <div className="fade-in-up" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="screenshot-placeholder" style={{ maxWidth: '220px', aspectRatio: '9/16' }}>
            <span>Group Chat 1</span>
          </div>
          <div className="screenshot-placeholder" style={{ maxWidth: '220px', aspectRatio: '9/16' }}>
            <span>Group Chat 2</span>
          </div>
          <div className="screenshot-placeholder" style={{ maxWidth: '220px', aspectRatio: '9/16' }}>
            <span>Group Chat 3</span>
          </div>
        </div>
      )}

      {/* Step 3: Instagram posts */}
      {step >= 3 && (
        <div className="fade-in-up" style={{ textAlign: 'center' }}>
          <p className="mono-text" style={{ marginBottom: '12px' }}>Different creators. Same concept. Same week.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <div className="screenshot-placeholder" style={{ maxWidth: '200px', aspectRatio: '1' }}>
              <span>IG Post 1</span>
            </div>
            <div className="screenshot-placeholder" style={{ maxWidth: '200px', aspectRatio: '1' }}>
              <span>IG Post 2</span>
            </div>
          </div>
        </div>
      )}

      {/* Step 4: The punchline */}
      {step >= 4 && (
        <p className="statement-text fade-in-up">
          We didn't choose PPT Night.<br />
          <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>PPT Night chose us.</em>
        </p>
      )}

      {/* Step 5: Algorithm bridge */}
      {step >= 5 && (
        <div className="fade-in-slow" style={{ marginTop: '20px', textAlign: 'center' }}>
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
