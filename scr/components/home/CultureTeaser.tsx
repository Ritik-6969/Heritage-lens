import React from 'react';
import { useApp } from '../../context/AppContext';
import { cultureData } from '../../data/cultureData';
import { Palette, Sparkles, ArrowRight, Heart } from 'lucide-react';

export const CultureTeaser: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <section className="section-spacing" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '42px'
        }}>
          <div>
            <div className="section-tag">
              <Palette size={14} />
              <span>Living Traditions & Indigenous Masters</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>
              Travel deeper. Support local.
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              Engage with GI-tagged craft lineages, ancestral weaving communities, and folk music repositories.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('culture')}
            className="btn-outline-terracotta"
          >
            <span>Explore All Cultural Traditions</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 4 Cultural Highlights Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {cultureData.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveTab('culture')}
              className="card-heritage"
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80') {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(22, 25, 23, 0.75)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  fontSize: '0.7rem',
                  fontWeight: 700
                }}>
                  {item.category}
                </div>
              </div>

              <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--brand-terracotta)', fontWeight: 700, marginBottom: '4px' }}>
                  📍 {item.region}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '8px', color: 'var(--charcoal-deep)' }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.45,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  marginBottom: '14px'
                }}>
                  {item.culturalStory}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {item.tags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.68rem',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      color: 'var(--charcoal-mid)',
                      fontWeight: 600
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
