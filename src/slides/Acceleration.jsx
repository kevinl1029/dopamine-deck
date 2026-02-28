import { useState, useEffect } from 'react';

const timelineEvents = [
  {
    id: 'opus-45',
    date: 'Nov 24, 2025',
    label: 'Opus 4.5',
    position: 4,
    size: 22,
    headline: 'Claude Opus 4.5 Released',
    description: 'One of the most capable AI models ever built. Overnight, regular people can build real software by describing what they want. "Vibe coding" enters the lexicon.',
    impact: 'The barrier between idea and execution nearly disappears.',
    image: '/opus45-announce.jpg',
  },
  {
    id: 'epstein-act',
    date: 'Nov 19, 2025',
    label: 'Epstein Act',
    position: 12,
    size: 18,
    headline: 'Epstein Files Transparency Act Signed',
    description: 'Federal legislation mandating release of documents related to Jeffrey Epstein. The gate opens.',
    impact: null,
    image: '/epstein-act.jpg',
  },
  {
    id: 'epstein-release',
    date: 'Jan 30, 2026',
    label: '3.5M Pages',
    position: 30,
    size: 28,
    headline: 'DOJ Releases 3.5 Million Pages',
    description: 'Names. Connections. Decades of influence that operated in the dark, suddenly in the light. Congress reviewing unredacted files in secure facilities.',
    impact: 'The strings being pulled are now being named.',
    image: '/epstein-doj.png',
  },
  {
    id: 'legal-plugin',
    date: 'Feb 3, 2026',
    label: 'Legal Plugin',
    position: 65,
    size: 26,
    headline: 'Claude Legal Plugin',
    description: 'Anthropic unveils AI legal document review, risk flagging, NDA triage, compliance tracking.',
    impact: '$285 BILLION wiped in a single day. Thomson Reuters -18%. RELX -14%. Wolters Kluwer -13%.',
    image: '/legal-plugin.jpg',
  },
  {
    id: 'opus-46',
    date: 'Feb 5, 2026',
    label: 'Opus 4.6',
    position: 78,
    size: 30,
    headline: 'Claude Opus 4.6 — Agent Teams',
    description: '1 million token context. Can orchestrate entire teams of autonomous AI agents collaborating on complex projects.',
    impact: 'Cumulative selloff approaches $1 TRILLION. FactSet -10%. Fortune headline: "A trillion-dollar selloff."',
    image: '/opus45.png',
  },
  {
    id: 'code-security',
    date: 'Feb 20, 2026',
    label: 'Code Security',
    position: 88,
    size: 24,
    headline: 'Claude Code Security',
    description: 'AI-powered vulnerability detection. Found 500+ vulnerabilities in production codebases during testing. "Reasons about code like a human security researcher."',
    impact: 'Cybersecurity flash crash. CrowdStrike -8%. Cloudflare -8.1%. SailPoint -9.4%. Okta -9.2%.',
    image: '/code-security.jpg',
  },
  {
    id: 'cobol',
    date: 'Feb 23, 2026',
    label: 'COBOL Blog Post',
    position: 95,
    size: 28,
    headline: 'A Blog Post Crashes IBM',
    description: 'Anthropic publishes a blog post about modernizing COBOL with Claude Code. Not a product launch. Not a demo. A blog post about what the AI could do.',
    impact: 'IBM -13.2%. Worst day in 25 years. $31 billion erased. From a blog post.',
    image: '/ibm-cobol.jpg',
  },
  {
    id: 'dod',
    date: 'Feb 2026',
    label: 'DoD + War',
    position: 98,
    size: 36,
    headline: 'Killer Robots + War Imminent',
    description: 'Department of Defense demands access to AI models for autonomous weapons. Simultaneously: largest US military buildup in the Middle East since 2003. Two carrier groups. F-22s in Israel. Nuclear talks collapsed.',
    impact: '"War could be imminent." — Multiple outlets. The graph\'s highest amplitude nodes are overlapping.',
    image: '/military-buildup.jpg',
  },
];

export default function Acceleration({ step }) {
  const [scrollingUp, setScrollingUp] = useState(false);
  const activeEventIndex = Math.min(step - 1, timelineEvents.length - 1);

  // Step 0: intro text
  // Steps 1-9: each timeline event
  // Step 10: "stacking daily" + scroll up
  // Step 11: quiet aftermath

  useEffect(() => {
    if (step === timelineEvents.length + 2) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }
  }, [step]);

  if (step >= timelineEvents.length + 3) {
    // Post scroll-up: quiet
    return (
      <div className="fade-in-slow" style={{ textAlign: 'center' }}>
        <p className="body-text-subdued" style={{ textAlign: 'center' }}>
          The rate of change has outpaced our ability to even register the rate of change.
        </p>
        <p className="statement-text fade-in-delay-2" style={{ marginTop: '40px' }}>
          The graph isn't just running. It's <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>accelerating</em>.
          <br />And we're inside it.
        </p>
      </div>
    );
  }

  return (
    <div className={scrollingUp ? 'scroll-up-exit' : ''} style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', position: 'relative' }}>
      {/* Top Half: Descriptor Region */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 40px' }}>
        {/* Step 0: Intro */}
        {step === 0 && (
          <div className="fade-in" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <p className="section-label">Act III — The Acceleration</p>
            <p className="statement-text">
              That graph I just described?<br />
              It's <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>speeding up</em>.
            </p>
            <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', margin: '24px auto 0' }}>
              Think of the news as an audit of the graph. Every major event is a high-amplitude node.
              A moment where the graph produces something distinct enough that we all notice it.
            </p>
            <p className="mono-text fade-in-delay-3" style={{ marginTop: '16px' }}>
              Those nodes are appearing more frequently. And they're getting bigger.
            </p>
          </div>
        )}

        {/* Descriptor Details for Active Event */}
        {step >= 1 && step <= timelineEvents.length + 2 && activeEventIndex >= 0 && activeEventIndex < timelineEvents.length && (
          <div className="timeline-detail-row fade-in" key={timelineEvents[activeEventIndex].id}>
            <div className="timeline-detail" style={{ flex: 1, minWidth: 0 }}>
              <div className="date">{timelineEvents[activeEventIndex].date}</div>
              <h3>{timelineEvents[activeEventIndex].headline}</h3>
              <p>{timelineEvents[activeEventIndex].description}</p>
              {timelineEvents[activeEventIndex].impact && (
                <div className="stock-impact">{timelineEvents[activeEventIndex].impact}</div>
              )}
            </div>
            {timelineEvents[activeEventIndex].image && (
              <div className="timeline-image">
                <img
                  src={timelineEvents[activeEventIndex].image}
                  alt={timelineEvents[activeEventIndex].headline}
                />
              </div>
            )}
          </div>
        )}

        {/* Scroll-up trigger text */}
        {step >= timelineEvents.length + 1 && step <= timelineEvents.length + 2 && (
          <p className="body-text-subdued fade-in" style={{ textAlign: 'center', marginTop: '20px' }}>
            Now they're stacking daily, and we're just... taking it in. Scrolling past it.
          </p>
        )}
      </div>

      {/* Bottom Half: Timeline Region */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', minHeight: '300px' }}>
        {/* Steps 1+: Timeline */}
        {step >= 1 && step <= timelineEvents.length + 2 && (
          <div className="timeline-container fade-in">
            <div className="timeline-line" />

            {timelineEvents.map((event, i) => {
              const isVisible = i <= activeEventIndex;
              const isActive = i === activeEventIndex;
              // Visual compression effect: shake slightly if it's one of the stacked ones at the end
              const shouldShake = isActive && i >= 5;
              return (
                <div
                  key={event.id}
                  className={`timeline-node ${isVisible ? 'visible' : ''} ${isActive ? 'active-node' : ''} ${shouldShake ? 'stacking-shake' : ''}`}
                  style={{
                    left: `${event.position}%`,
                    width: `${event.size}px`,
                    height: `${event.size}px`,
                    background: isActive ? 'var(--accent-warm)' : isVisible ? 'rgba(232, 168, 76, 0.5)' : 'transparent',
                    zIndex: isActive ? 10 : isVisible ? i : 0
                  }}
                >
                  <span className="timeline-node-label" style={{ top: event.size + 8 }}>
                    {event.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
