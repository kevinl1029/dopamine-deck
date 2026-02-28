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

      {/* Step 2: Dopamine — the word + molecule */}
      {step === 2 && (
        <div className="fade-in" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--accent-warm)',
            lineHeight: 1,
          }}>
            Dopamine
          </h2>
          {/* Stylized dopamine molecular structure */}
          <svg width="280" height="160" viewBox="0 0 280 160" fill="none" style={{ opacity: 0.7 }}>
            {/* Benzene ring */}
            <polygon points="60,60 85,46 110,60 110,88 85,102 60,88" stroke="var(--accent-warm)" strokeWidth="2" fill="none" opacity="0.8" />
            {/* Double bonds in ring */}
            <line x1="64" y1="62" x2="64" y2="86" stroke="var(--accent-warm)" strokeWidth="1.5" opacity="0.4" />
            <line x1="87" y1="48" x2="108" y2="61" stroke="var(--accent-warm)" strokeWidth="1.5" opacity="0.4" />
            <line x1="87" y1="100" x2="108" y2="87" stroke="var(--accent-warm)" strokeWidth="1.5" opacity="0.4" />
            {/* Hydroxyl groups (catechol) */}
            <line x1="60" y1="60" x2="35" y2="48" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            <circle cx="28" cy="44" r="10" stroke="var(--accent-warm)" strokeWidth="1.5" fill="none" opacity="0.5" />
            <text x="28" y="48" textAnchor="middle" fill="var(--accent-warm)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">OH</text>
            <line x1="60" y1="88" x2="35" y2="100" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            <circle cx="28" cy="104" r="10" stroke="var(--accent-warm)" strokeWidth="1.5" fill="none" opacity="0.5" />
            <text x="28" y="108" textAnchor="middle" fill="var(--accent-warm)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">OH</text>
            {/* Ethylamine side chain */}
            <line x1="110" y1="88" x2="145" y2="102" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            <line x1="145" y1="102" x2="180" y2="88" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            <line x1="180" y1="88" x2="215" y2="102" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            {/* Amine group */}
            <circle cx="228" cy="102" r="14" stroke="var(--accent-warm)" strokeWidth="1.5" fill="none" opacity="0.5" />
            <text x="228" y="107" textAnchor="middle" fill="var(--accent-warm)" fontSize="12" fontFamily="var(--font-mono)" opacity="0.7">NH₂</text>
            {/* Node dots at vertices */}
            {[[60,60],[85,46],[110,60],[110,88],[85,102],[60,88],[145,102],[180,88]].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="var(--accent-warm)" opacity="0.6" />
            ))}
          </svg>
        </div>
      )}

      {/* Step 3: Dopamine + subtitle reveal */}
      {step === 3 && (
        <div className="fade-in" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--accent-warm)',
            lineHeight: 1,
          }}>
            Dopamine
          </h2>
          {/* Molecule stays but smaller / more subtle */}
          <svg width="200" height="110" viewBox="0 0 280 160" fill="none" style={{ opacity: 0.35 }}>
            <polygon points="60,60 85,46 110,60 110,88 85,102 60,88" stroke="var(--accent-warm)" strokeWidth="2" fill="none" opacity="0.8" />
            <line x1="64" y1="62" x2="64" y2="86" stroke="var(--accent-warm)" strokeWidth="1.5" opacity="0.4" />
            <line x1="87" y1="48" x2="108" y2="61" stroke="var(--accent-warm)" strokeWidth="1.5" opacity="0.4" />
            <line x1="87" y1="100" x2="108" y2="87" stroke="var(--accent-warm)" strokeWidth="1.5" opacity="0.4" />
            <line x1="60" y1="60" x2="35" y2="48" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            <text x="28" y="48" textAnchor="middle" fill="var(--accent-warm)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">OH</text>
            <line x1="60" y1="88" x2="35" y2="100" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            <text x="28" y="108" textAnchor="middle" fill="var(--accent-warm)" fontSize="11" fontFamily="var(--font-mono)" opacity="0.7">OH</text>
            <line x1="110" y1="88" x2="145" y2="102" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            <line x1="145" y1="102" x2="180" y2="88" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            <line x1="180" y1="88" x2="215" y2="102" stroke="var(--accent-warm)" strokeWidth="2" opacity="0.6" />
            <text x="228" y="107" textAnchor="middle" fill="var(--accent-warm)" fontSize="12" fontFamily="var(--font-mono)" opacity="0.7">NH₂</text>
            {[[60,60],[85,46],[110,60],[110,88],[85,102],[60,88],[145,102],[180,88]].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r="3" fill="var(--accent-warm)" opacity="0.6" />
            ))}
          </svg>
          <p className="fade-in-up" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
            fontStyle: 'italic',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            lineHeight: 1.6,
          }}>
            It lives in the gap between desire and fulfillment.
          </p>
        </div>
      )}

      {/* Step 4: The collapse */}
      {step === 4 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="statement-text">
            Collapse that gap — make everything instantly satisfied —<br />
            and the system <span style={{ color: 'var(--accent-danger)' }}>shuts down</span>.
          </p>
          <p className="body-text fade-in-delay-1" style={{ textAlign: 'center', marginTop: '24px' }}>
            The same way nicotine floods dopamine receptors until the brain
            stops producing reward on its own. Except this isn't one drug
            hitting one receptor. It's every human need being saturated simultaneously.
          </p>
        </div>
      )}

      {/* Step 5: Longevity */}
      {step === 5 && (
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

      {/* Step 6: Maslow's checked */}
      {step === 6 && (
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

      {/* Step 7: Now what? */}
      {step === 7 && (
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
