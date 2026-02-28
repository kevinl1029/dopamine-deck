import { useState, useEffect } from 'react';

export default function AbundanceTrap({ step }) {
  const [glitched, setGlitched] = useState(false);

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setGlitched(true), 1500);
      return () => clearTimeout(timer);
    }
    setGlitched(false);
  }, [step]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', width: '100%' }}>
      {/* Step 0: The optimistic pitch */}
      {step === 0 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="section-label">Act IV — The Abundance Trap</p>
          <div style={{
            background: 'linear-gradient(135deg, #1a3a5c 0%, #0d2137 100%)',
            borderRadius: '16px',
            padding: '60px 48px',
            maxWidth: '700px',
            width: '100%',
          }}>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 300,
              color: '#fff',
              letterSpacing: '-0.01em',
            }}>
              The Age of <span style={{ color: '#4c8ce8' }}>Abundance</span>
            </p>
            <p className="fade-in-delay-1" style={{
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '16px',
            }}>
              Infinite content. Infinite productivity. Personalized everything.
            </p>
          </div>
          <p className="body-text fade-in-delay-3" style={{ textAlign: 'center', marginTop: '32px' }}>
            Every tech leader, every investor, every TED talk is selling you this story.
          </p>
        </div>
      )}

      {/* Step 1: The crack */}
      {step === 1 && (
        <div className={`fade-in ${glitched ? 'glitch-persistent' : ''}`} style={{ textAlign: 'center' }}>
          <p className="statement-text">
            But here's what nobody's talking about.
          </p>
          <div className="fade-in-delay-2" style={{ marginTop: '32px' }}>
            <p className="body-text" style={{ textAlign: 'center' }}>
              <span style={{ color: 'var(--accent-warm)' }}>Dopamine</span> doesn't fire when you <em>get</em> something.
            </p>
            <p className="statement-text fade-in-delay-3" style={{ marginTop: '16px' }}>
              It fires when you <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>want</em> something.
            </p>
          </div>
        </div>
      )}

      {/* Step 2: The gap */}
      {step === 2 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center' }}>
            It lives in the gap between desire and fulfillment.
          </p>
          <p className="statement-text fade-in-delay-1" style={{ marginTop: '32px' }}>
            Collapse that gap — make everything instantly satisfied —<br />
            and the system <span style={{ color: 'var(--accent-danger)' }}>shuts down</span>.
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '24px' }}>
            The same way nicotine floods dopamine receptors until the brain
            stops producing reward on its own. Except this isn't one drug
            hitting one receptor. It's every human need being saturated simultaneously.
          </p>
        </div>
      )}

      {/* Step 3: Longevity */}
      {step === 3 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center' }}>
            And it goes deeper than content and productivity.
          </p>
          <p className="statement-text fade-in-delay-1" style={{ marginTop: '24px' }}>
            We are on the verge of solving <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>mortality itself</em>.
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '24px' }}>
            Researchers like David Sinclair at Harvard are working on age reversal —
            treating aging as a disease. The breakthroughs are accelerating
            on the same curve as everything else.
          </p>
        </div>
      )}

      {/* Step 4: Maslow's checked */}
      {step === 4 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center' }}>
            AI handles your productivity, creativity, entertainment, connection.
            Medicine extends your life indefinitely. Food scarcity, solved. Safety, optimized.
          </p>
          <div className="fade-in-delay-1" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '32px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
          }}>
            {['Self-actualization', 'Esteem', 'Love & Belonging', 'Safety', 'Physiological'].map((level, i) => (
              <div key={level} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                justifyContent: 'center',
                opacity: 0,
                animation: 'fadeIn 0.4s ease forwards',
                animationDelay: `${i * 0.2}s`,
              }}>
                <span style={{ color: 'var(--accent-green)' }}>✓</span>
                <span style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>{level}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 5: Now what? */}
      {step === 5 && (
        <div className="fade-in-slow" style={{ textAlign: 'center' }}>
          <h2 className="hero-text">Now what?</h2>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '32px' }}>
            Every framework for human meaning was built on the assumption that time runs out.
            That you have to strive because the alternative is death.
          </p>
          <p className="mic-drop fade-in-delay-3" style={{ marginTop: '40px' }}>
            Close every gap — including the final one —<br />
            and you don't get paradise.<br /><br />
            You get a species with nothing left to reach for.
          </p>
        </div>
      )}
    </div>
  );
}
