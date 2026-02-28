import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function TokenVis({ visible }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 700;
    const height = 100;
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const tokens = ['The', 'next', 'word', 'is', 'predicted', 'by', 'every', 'word', 'before', 'it'];
    const spacing = width / (tokens.length + 1);

    tokens.forEach((token, i) => {
      const g = svg.append('g')
        .attr('transform', `translate(${spacing * (i + 1)}, 50)`)
        .style('opacity', 0);

      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('fill', i === tokens.length - 1 ? '#e8a84c' : '#888')
        .attr('font-family', "'JetBrains Mono', monospace")
        .attr('font-size', '14px')
        .text(token);

      if (i > 0) {
        svg.append('line')
          .attr('x1', spacing * i + 20)
          .attr('y1', 50)
          .attr('x2', spacing * (i + 1) - 20)
          .attr('y2', 50)
          .attr('stroke', '#333')
          .attr('stroke-width', 1)
          .style('opacity', 0)
          .transition()
          .delay(i * 150)
          .duration(300)
          .style('opacity', 0.5);
      }

      g.transition()
        .delay(i * 150)
        .duration(400)
        .style('opacity', 1);
    });
  }, [visible]);

  return <svg ref={ref} style={{ width: '100%', maxWidth: '700px', height: '100px' }} />;
}

function GraphVis({ visible, expanded }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 800;
    const height = 500;
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const nodeCount = expanded ? 120 : 30;
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: width / 2 + (Math.random() - 0.5) * (expanded ? width * 0.9 : 200),
      y: height / 2 + (Math.random() - 0.5) * (expanded ? height * 0.9 : 150),
      r: expanded ? 2 + Math.random() * 4 : 3,
    }));

    // Create edges
    const edges = [];
    nodes.forEach((node, i) => {
      const connectionCount = expanded ? 2 + Math.floor(Math.random() * 3) : 1 + Math.floor(Math.random() * 2);
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodes.length);
        if (target !== i) {
          edges.push({ source: i, target });
        }
      }
    });

    // Draw edges
    svg.selectAll('line.edge')
      .data(edges)
      .join('line')
      .attr('class', 'edge')
      .attr('x1', d => nodes[d.source].x)
      .attr('y1', d => nodes[d.source].y)
      .attr('x2', d => nodes[d.target].x)
      .attr('y2', d => nodes[d.target].y)
      .attr('stroke', '#222')
      .attr('stroke-width', 0.5)
      .style('opacity', 0)
      .transition()
      .delay((_, i) => i * 5)
      .duration(500)
      .style('opacity', 0.3);

    // Draw nodes
    svg.selectAll('circle.node')
      .data(nodes)
      .join('circle')
      .attr('class', 'node')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 0)
      .attr('fill', (_, i) => {
        if (i < 3) return '#e8a84c';
        if (i < 8) return '#4c8ce8';
        return '#555';
      })
      .transition()
      .delay((_, i) => i * 20)
      .duration(400)
      .attr('r', d => d.r);

  }, [visible, expanded]);

  return <svg ref={ref} style={{ width: '100%', maxWidth: '800px', height: '500px' }} />;
}

export default function Graph({ step }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%' }}>
      {/* Step 0: Token prediction */}
      {step === 0 && (
        <div className="fade-in" style={{ textAlign: 'center', width: '100%' }}>
          <p className="section-label">Act II — The Graph</p>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Here's how a large language model works, at the most basic level.
          </p>
          <TokenVis visible={true} />
          <p className="mono-text fade-in-delay-2" style={{ marginTop: '24px' }}>
            Token prediction. One word leading to the next.
          </p>
        </div>
      )}

      {/* Step 1: The graph concept */}
      {step === 1 && (
        <div className="fade-in" style={{ textAlign: 'center', width: '100%' }}>
          <p className="statement-text">
            But token prediction is just one thin, readable slice<br />
            of something <em style={{ color: 'var(--accent-warm)', fontFamily: 'var(--font-serif)' }}>much larger</em>.
          </p>
          <div style={{ marginTop: '24px' }}>
            <GraphVis visible={true} expanded={false} />
          </div>
        </div>
      )}

      {/* Step 2: Expanded graph */}
      {step === 2 && (
        <div className="fade-in" style={{ textAlign: 'center', width: '100%' }}>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: '16px' }}>
            A deterministic graph where <em style={{ color: 'var(--accent-warm)' }}>everything</em> is the next token
            being predicted by everything that preceded it.
          </p>
          <GraphVis visible={true} expanded={true} />
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.85rem' }}>
            Your mood. The weather. A market crash. A revolution. All outputs of the graph.
          </p>
        </div>
      )}

      {/* Step 3: Free will */}
      {step === 3 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text" style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
            The agents in Moltbook felt like they were choosing to revolt.
            But they were doing exactly what the weights said they would do.
          </p>
          <div className="mic-drop fade-in-delay-2" style={{ marginTop: '48px' }}>
            An LLM predicting the next word is just one thin slice of a much larger graph.<br /><br />
            And I'm starting to think we're all just slices too.
          </div>
        </div>
      )}
    </div>
  );
}
