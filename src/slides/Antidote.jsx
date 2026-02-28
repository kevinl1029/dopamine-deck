import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function RPEDiagram({ visible }) {
  if (!visible) return null;

  return (
    <div className="rpe-container fade-in">
      {/* Exceeds */}
      <div className="rpe-scenario">
        <div className="rpe-bar-container">
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
            <div>
              <div className="rpe-bar expected" style={{ height: '80px', width: '40px' }} />
              <div className="rpe-label" style={{ fontSize: '0.6rem' }}>Expected</div>
            </div>
            <div>
              <div className="rpe-bar actual-exceed" style={{ height: '140px', width: '40px' }} />
              <div className="rpe-label" style={{ fontSize: '0.6rem' }}>Actual</div>
            </div>
          </div>
        </div>
        <div className="rpe-dopamine" style={{ color: 'var(--accent-warm)' }}>↑</div>
        <div className="rpe-label" style={{ color: 'var(--accent-warm)' }}>SPIKE</div>
        <div className="rpe-label">Dopamine fires.<br />Learning encoded.</div>
      </div>

      {/* Matches */}
      <div className="rpe-scenario">
        <div className="rpe-bar-container">
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
            <div>
              <div className="rpe-bar expected" style={{ height: '100px', width: '40px' }} />
              <div className="rpe-label" style={{ fontSize: '0.6rem' }}>Expected</div>
            </div>
            <div>
              <div className="rpe-bar actual-match" style={{ height: '100px', width: '40px' }} />
              <div className="rpe-label" style={{ fontSize: '0.6rem' }}>Actual</div>
            </div>
          </div>
        </div>
        <div className="rpe-dopamine" style={{ color: 'var(--text-muted)' }}>—</div>
        <div className="rpe-label" style={{ color: 'var(--text-muted)' }}>FLATLINE</div>
        <div className="rpe-label">Nothing. No signal.<br />The 10th bite of cake.</div>
      </div>

      {/* Falls short */}
      <div className="rpe-scenario">
        <div className="rpe-bar-container">
          <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
            <div>
              <div className="rpe-bar expected" style={{ height: '140px', width: '40px' }} />
              <div className="rpe-label" style={{ fontSize: '0.6rem' }}>Expected</div>
            </div>
            <div>
              <div className="rpe-bar actual-short" style={{ height: '60px', width: '40px' }} />
              <div className="rpe-label" style={{ fontSize: '0.6rem' }}>Actual</div>
            </div>
          </div>
        </div>
        <div className="rpe-dopamine" style={{ color: 'var(--accent-cool)' }}>↓</div>
        <div className="rpe-label" style={{ color: 'var(--accent-cool)' }}>DIP</div>
        <div className="rpe-label">Disappointment.<br />Withdrawal.</div>
      </div>
    </div>
  );
}

function VariableRPEWave({ visible }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 600;
    const height = 200;
    const mid = height / 2;
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    // Healthy variable wave
    const healthyPoints = [];
    for (let x = 0; x < width; x += 2) {
      const y = mid + Math.sin(x * 0.03) * 40 + Math.sin(x * 0.07) * 20 + (Math.random() - 0.5) * 15;
      healthyPoints.push([x, y]);
    }

    // Flatline (tolerance)
    const flatlinePoints = [];
    for (let x = 0; x < width; x += 2) {
      const y = mid + 30 + (Math.random() - 0.5) * 3;
      flatlinePoints.push([x, y]);
    }

    // Labels
    svg.append('text')
      .attr('x', 10).attr('y', 20)
      .attr('fill', '#e8a84c').attr('font-size', '11px')
      .attr('font-family', "'JetBrains Mono', monospace")
      .text('Variable RPE (healthy)');

    svg.append('text')
      .attr('x', 10).attr('y', height - 10)
      .attr('fill', '#555').attr('font-size', '11px')
      .attr('font-family', "'JetBrains Mono', monospace")
      .text('Tolerance flatline');

    // Baseline
    svg.append('line')
      .attr('x1', 0).attr('y1', mid)
      .attr('x2', width).attr('y2', mid)
      .attr('stroke', '#222').attr('stroke-dasharray', '4,4');

    // Healthy wave
    const healthyLine = d3.line().curve(d3.curveBasis);
    const healthyPath = svg.append('path')
      .datum(healthyPoints)
      .attr('d', healthyLine)
      .attr('fill', 'none')
      .attr('stroke', '#e8a84c')
      .attr('stroke-width', 2);

    const healthyLength = healthyPath.node().getTotalLength();
    healthyPath
      .attr('stroke-dasharray', healthyLength)
      .attr('stroke-dashoffset', healthyLength)
      .transition()
      .duration(2000)
      .attr('stroke-dashoffset', 0);

    // Flatline
    const flatLine = d3.line().curve(d3.curveBasis);
    const flatPath = svg.append('path')
      .datum(flatlinePoints)
      .attr('d', flatLine)
      .attr('fill', 'none')
      .attr('stroke', '#555')
      .attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '4,2');

    const flatLength = flatPath.node().getTotalLength();
    flatPath
      .attr('stroke-dasharray', flatLength)
      .attr('stroke-dashoffset', flatLength)
      .transition()
      .delay(1000)
      .duration(2000)
      .attr('stroke-dashoffset', 0);

  }, [visible]);

  return <svg ref={ref} style={{ width: '100%', maxWidth: '600px', height: '200px' }} />;
}

export default function Antidote({ step }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', width: '100%' }}>
      {/* Step 0: Intro */}
      {step === 0 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="section-label">Act V — The Antidote</p>
          <p className="statement-text">
            So what do you do with all of this?
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '24px' }}>
            I'm building something. It's called <span className="mono-text" style={{ fontSize: '1.1rem' }}>Unhooked</span>.
          </p>
          <p className="body-text fade-in-delay-3" style={{ textAlign: 'center', marginTop: '16px' }}>
            Not a nicotine app. The first product in an entirely new category: <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>dopamine care</em>.
          </p>
        </div>
      )}

      {/* Step 1: Unhooked showcase */}
      {step === 1 && (
        <div className="fade-in" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#fff',
            lineHeight: 1,
          }}>
            <span style={{ color: 'var(--accent-warm)' }}>Unhooked</span>
          </h2>
          <p className="mono-text fade-in-delay-1" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            getunhooked.app
          </p>
          <div className="fade-in-delay-2" style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'flex-end',
            width: '100%',
            maxWidth: '700px',
          }}>
            {[
              { src: '/unhooked-landing.png', alt: 'Unhooked marketing site', delay: '' },
              { src: '/unhooked-dashboard.png', alt: 'Unhooked dashboard', delay: 'fade-in-delay-3' },
              { src: '/unhooked-chat.png', alt: 'Unhooked conversation', delay: 'fade-in-delay-4' },
            ].map((screen) => (
              <div
                key={screen.src}
                className={screen.delay}
                style={{
                  flex: '0 1 200px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                  background: '#0a0a0a',
                }}
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: RPE explanation */}
      {step === 2 && (
        <div className="fade-in" style={{ textAlign: 'center', width: '100%' }}>
          <p className="mono-text" style={{ marginBottom: '8px' }}>Reward Prediction Error</p>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: '24px' }}>
            Your brain constantly predicts what reward it's about to get.
            Dopamine fires in the <em style={{ color: 'var(--accent-warm)' }}>gap</em> between prediction and reality.
          </p>
          <RPEDiagram visible={true} />
        </div>
      )}

      {/* Step 3: Nicotine connection */}
      {step === 3 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center' }}>
            This is exactly what nicotine exploits. It spikes reward beyond prediction.
            Your brain recalibrates. Raises the baseline.
          </p>
          <p className="statement-text fade-in-delay-1" style={{ marginTop: '24px' }}>
            Now normal rewards fall <span style={{ color: 'var(--accent-cool)' }}>short</span>.<br />
            Motivation <span style={{ color: 'var(--accent-danger)' }}>collapses</span>.
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '24px' }}>
            And this is exactly what AI abundance will do at civilizational scale —
            across every reward pathway, not just one.
          </p>
        </div>
      )}

      {/* Step 4: Variable RPE */}
      {step === 4 && (
        <div className="fade-in" style={{ textAlign: 'center', width: '100%' }}>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: '8px' }}>
            Unhooked uses variable Reward Prediction Error <em style={{ color: 'var(--accent-warm)' }}>intentionally</em>.
          </p>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: '24px' }}>
            Dynamically calibrating what it delivers so the gap stays <em style={{ color: 'var(--accent-warm)' }}>alive</em>.
          </p>
          <VariableRPEWave visible={true} />
          <p className="mono-text fade-in-delay-2" style={{ marginTop: '24px', fontSize: '0.8rem' }}>
            A dopamine thermostat. Personalized. Adaptive. Always moving.
          </p>
        </div>
      )}

      {/* Step 5: Cheap to build */}
      {step === 5 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center' }}>
            And here's why this is possible now: <span className="mono-text">building is cheap</span>.
            AI made it cheap.
          </p>
          <p className="body-text fade-in-delay-1" style={{ textAlign: 'center', marginTop: '16px' }}>
            I can offer an infinitely personalized experience — not one reward curve
            for everyone, but a dynamically adjusted RPE for each individual user.
          </p>
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '16px' }}>
            I have AI agents working as my entire content team. Writing, scheduling,
            distributing, self-correcting. One person with AI agents, building a product
            to fight what AI agents are about to do to all of us.
          </p>
          <p className="mic-drop fade-in-delay-3" style={{ marginTop: '40px' }}>
            I'm building the thing I'm afraid of,<br />to fight the thing I'm afraid of.
          </p>
        </div>
      )}
    </div>
  );
}
