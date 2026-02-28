import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function TokenVis({ visible }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 800;
    const height = 150;
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const tokens = ['The', 'next', 'word', 'is', 'predicted', 'by', 'every', 'word', 'before', 'it'];
    const spacing = width / (tokens.length + 1);

    tokens.forEach((token, i) => {
      const g = svg.append('g')
        .attr('transform', `translate(${spacing * (i + 1)}, 120)`)
        .style('opacity', 0);

      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('fill', i === tokens.length - 1 ? '#e8a84c' : '#888')
        .attr('font-family', "'JetBrains Mono', monospace")
        .attr('font-size', '14px')
        .text(token);

      if (i > 0) {
        for (let j = 0; j < i; j++) {
          const startX = spacing * (j + 1);
          const endX = spacing * (i + 1) - 5;
          const distance = endX - startX;

          const controlY = 100 - Math.min(distance * 0.25, 80);
          const startY = 105;
          const endY = 105;

          const pathData = `M ${startX} ${startY} Q ${startX + distance / 2} ${controlY} ${endX} ${endY}`;

          const path = svg.append('path')
            .attr('d', pathData)
            .attr('fill', 'none')
            .attr('stroke', '#4c8ce8')
            .attr('stroke-width', 1)
            .style('opacity', 0);

          const pathNode = path.node();
          const totalLength = pathNode ? pathNode.getTotalLength() : 0;

          if (totalLength > 0) {
            path
              .attr('stroke-dasharray', totalLength + ' ' + totalLength)
              .attr('stroke-dashoffset', totalLength)
              .transition()
              .delay(i * 500)
              .duration(800)
              .ease(d3.easeCubicOut)
              .style('opacity', i === tokens.length - 1 ? 0.3 : 0.15)
              .attr('stroke-dashoffset', 0);
          } else {
            path.transition()
              .delay(i * 500)
              .duration(800)
              .style('opacity', i === tokens.length - 1 ? 0.3 : 0.15);
          }
        }
      }

      g.transition()
        .delay(i * 500)
        .duration(800)
        .style('opacity', 1);
    });
  }, [visible]);

  return <svg ref={ref} style={{ width: '100%', maxWidth: '800px', height: '150px', overflow: 'visible' }} />;
}

function GraphVis({ visible, expanded, litUp }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const svg = d3.select(ref.current);

    if (!expanded) {
      svg.selectAll('*').remove();
    }

    const width = 800;
    const height = 500;

    if (!expanded) {
      svg.attr('viewBox', `0 0 ${width} ${height}`);
    }

    const tokens = ['The', 'next', 'word', 'is', 'predicted', 'by', 'every', 'word', 'before', 'it'];
    const nodeCount = expanded ? 200 : tokens.length + 15;

    const centerX = width / 2;
    const centerY = height / 2;
    const spacing = width / (tokens.length + 1);

    let nodesData;
    let edgesData = [];

    if (!expanded) {
      nodesData = Array.from({ length: nodeCount }, (_, i) => {
        const isBase = i < tokens.length;
        return {
          id: i,
          isBase,
          label: isBase ? tokens[i] : null,
          x: isBase ? spacing * (i + 1) : centerX + (Math.random() - 0.5) * 200,
          y: isBase ? (height / 2 - 100) : centerY + (Math.random() - 0.5) * 150,
          r: isBase ? 5 : 3,
          color: isBase ? (i === tokens.length - 1 ? '#e8a84c' : '#4c8ce8') : '#555'
        };
      });

      for (let i = 0; i < tokens.length - 1; i++) {
        edgesData.push({ source: i, target: i + 1, isBasePath: true });
      }

      nodesData.forEach((node, i) => {
        if (!node.isBase) {
          edgesData.push({
            source: Math.floor(Math.random() * tokens.length),
            target: i,
            isBasePath: false
          });
        }
      });
    } else {
      const existingNodes = svg.selectAll('circle.node').data();

      if (existingNodes && existingNodes.length > 0) {
        nodesData = existingNodes.map(d => ({ ...d }));

        for (let i = existingNodes.length; i < nodeCount; i++) {
          nodesData.push({
            id: i,
            isBase: false,
            x: centerX + (Math.random() - 0.5) * width * 0.9,
            y: centerY + (Math.random() - 0.5) * height * 0.9,
            r: 2 + Math.random() * 2,
            color: '#333'
          });
        }

        const existingEdges = svg.selectAll('line.edge').data().map(d => ({
          source: typeof d.source === 'object' ? d.source.id : d.source,
          target: typeof d.target === 'object' ? d.target.id : d.target,
          isBasePath: d.isBasePath
        }));
        edgesData = [...existingEdges];

        for (let i = existingNodes.length; i < nodeCount; i++) {
          const connections = 2 + Math.floor(Math.random() * 2);
          for (let c = 0; c < connections; c++) {
            edgesData.push({
              source: i,
              target: Math.floor(Math.random() * i)
            });
          }
        }
      } else {
        nodesData = Array.from({ length: nodeCount }, (_, i) => ({
          id: i,
          isBase: i < tokens.length,
          x: centerX + (Math.random() - 0.5) * width * 0.9,
          y: centerY + (Math.random() - 0.5) * height * 0.9,
          r: i < tokens.length ? 5 : 2 + Math.random() * 2,
          color: i < tokens.length ? (i === tokens.length - 1 ? '#e8a84c' : '#4c8ce8') : '#333'
        }));

        for (let i = 0; i < tokens.length - 1; i++) {
          edgesData.push({ source: i, target: i + 1, isBasePath: true });
        }

        nodesData.forEach((node, i) => {
          if (i >= tokens.length) {
            const connections = 2 + Math.floor(Math.random() * 2);
            for (let c = 0; c < connections; c++) {
              edgesData.push({
                source: i,
                target: Math.floor(Math.random() * i)
              });
            }
          }
        });
      }
    }

    const simulation = d3.forceSimulation(nodesData)
      .force("link", d3.forceLink(edgesData).id(d => d.id).distance(expanded ? 40 : 30))
      .force("charge", d3.forceManyBody().strength(expanded ? -15 : -30))
      .force("collide", d3.forceCollide().radius(d => d.r + 2))
      .force("center", d3.forceCenter(centerX, centerY))
      .alpha(1)
      .alphaDecay(0.05);

    const link = svg.selectAll('line.edge')
      .data(edgesData)
      .join(
        enter => enter.append('line')
          .attr('class', 'edge')
          .attr('stroke', d => d.isBasePath ? '#4c8ce8' : '#222')
          .attr('stroke-width', d => d.isBasePath ? 1.5 : 0.5)
          .style('opacity', 0)
          .call(enter => enter.transition()
            .delay((_, i) => expanded ? i * 2 : i * 20)
            .duration(800)
            .style('opacity', d => d.isBasePath ? 0.6 : 0.2)),
        update => update,
        exit => exit.remove()
      );

    const node = svg.selectAll('g.node-group')
      .data(nodesData, d => d.id)
      .join(
        enter => {
          const g = enter.append('g').attr('class', 'node-group');

          g.append('circle')
            .attr('class', 'node')
            .attr('r', 0)
            .attr('fill', d => d.color)
            .style('opacity', d => d.isBase ? 1 : 0.7)
            .call(circle => circle.transition()
              .delay((_, i) => expanded ? (i - 30) * 5 : i * 50)
              .duration(expanded ? 400 : 800)
              .attr('r', d => d.r));

          g.filter(d => d.isBase && !expanded)
            .append('text')
            .attr('dy', -10)
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px')
            .attr('font-family', "'JetBrains Mono', monospace")
            .attr('fill', '#888')
            .text(d => d.label)
            .style('opacity', 0)
            .call(text => text.transition()
              .delay((_, i) => i * 150)
              .duration(1000)
              .style('opacity', 1));

          return g;
        },
        update => {
          if (expanded) {
            update.select('text').transition().duration(500).style('opacity', 0).remove();
          }
          return update;
        },
        exit => exit.remove()
      );

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node
        .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    return () => simulation.stop();
  }, [visible, expanded]);

  useEffect(() => {
    if (!ref.current || !expanded) return;
    const svg = d3.select(ref.current);

    if (litUp) {
      svg.selectAll('circle.node')
        .transition()
        .duration(800)
        .delay(() => Math.random() * 500)
        .attr('fill', d => {
          if (!d.isBase) {
            const colors = ['#e8a84c', '#4c8ce8', '#e85c5c', '#5ce8a8', '#b388ff'];
            return colors[d.id % colors.length];
          }
          return d.color;
        })
        .style('opacity', d => d.isBase ? 1 : 0.9)
        .attr('r', d => d.isBase ? d.r : d.r * 1.5);

      svg.selectAll('line.edge')
        .transition()
        .duration(800)
        .delay(() => Math.random() * 500)
        .style('opacity', d => d.isBasePath ? 0.6 : 0.4)
        .attr('stroke', d => d.isBasePath ? '#4c8ce8' : '#555');
    } else {
      svg.selectAll('circle.node')
        .transition()
        .duration(500)
        .attr('fill', d => d.color)
        .style('opacity', d => d.isBase ? 1 : 0.7)
        .attr('r', d => d.r);

      svg.selectAll('line.edge')
        .transition()
        .duration(500)
        .style('opacity', d => d.isBasePath ? 0.6 : 0.2)
        .attr('stroke', d => d.isBasePath ? '#4c8ce8' : '#222');
    }
  }, [litUp, expanded]);

  return <svg ref={ref} style={{ width: '100%', maxWidth: '800px', height: '500px', overflow: 'visible' }} />;
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

      {/* Step 2 & 3: Expanded graph */}
      {(step === 2 || step === 3) && (
        <div className="fade-in" style={{ textAlign: 'center', width: '100%' }}>
          <p className="body-text" style={{ textAlign: 'center', marginBottom: '16px' }}>
            {step === 2 ? (
              <>
                A deterministic graph where <em style={{ color: 'var(--accent-warm)' }}>everything</em> is the next token<br />
                being predicted by everything that preceded it.
              </>
            ) : (
              <>
                So many other lines, so many other outputs happening at the exact same time.
              </>
            )}
          </p>
          <GraphVis visible={true} expanded={true} litUp={step === 3} />
          <p className="body-text fade-in-delay-2" style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.85rem' }}>
            Your mood. The weather. A market crash. A revolution. All outputs of the graph.
          </p>
        </div>
      )}

      {/* Step 4: Free will */}
      {step === 4 && (
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <p className="body-text-subdued" style={{ textAlign: 'center' }}>
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
