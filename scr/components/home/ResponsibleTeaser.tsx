import React from 'react';
import { useApp } from '../../context/AppContext';
import { HeartHandshake, ShieldCheck, Footprints, Heart, BookOpen, ArrowRight } from 'lucide-react';

export const ResponsibleTeaser: React.FC = () => {
  const { setActiveTab } = useApp();

  const pillars = [
    { icon: Footprints, title: 'Respect', desc: 'Observe sacred dress codes, photography etiquette, and local community customs.' },
    { icon: ShieldCheck, title: 'Preserve', desc: 'Zero graffiti on ancient sandstone, no plastic littering, and stay on marked trails.' },
    { icon: Heart, title: 'Support', desc: 'Directly patronize GI-certified artisans, authentic weavers, and local food stalls.' },
    { icon: BookOpen, title: 'Learn', desc: 'Engage with registered storytellers to understand historical context without sensationalism.' }
  ];

  return (
    <section className="section-spacing" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container">
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(32px, 5vw, 56px)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 42px' }}>
            <div className="section-tag">
              <HeartHandshake size={14} />
              <span>Conscious Exploration</span>
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
              "Travel with curiosity. <br />
              <span style={{ color: 'var(--brand-terracotta)' }}>Leave with respect."</span>
            </h2>
            <p className="section-subtitle">
              Heritage preservation begins with traveler mindfulness. Join over 12,000 certified travelers protecting India's sovereign cultural heritage.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginBottom: '36px'
          }}>
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                    textAlign: 'center',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--brand-terracotta-subtle)',
                    color: 'var(--brand-terracotta)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px'
                  }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '6px', color: 'var(--charcoal-deep)' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setActiveTab('responsible')}
              className="btn-primary"
              style={{ padding: '12px 28px' }}
            >
              <span>Take Responsible Traveler Pledge & Get Verified Badge</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
