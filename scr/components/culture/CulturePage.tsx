import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { cultureData } from '../../data/cultureData';
import { CultureItem } from '../../types';
import { 
  Palette, 
  Theater, 
  Utensils, 
  Sparkles, 
  Heart, 
  MapPin, 
  ArrowUpRight, 
  X,
  Compass,
  CheckCircle2
} from 'lucide-react';

export const CulturePage: React.FC = () => {
  const { t } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<CultureItem | null>(null);

  const categories = ['All', 'Handicrafts', 'Traditional Art', 'Music & Dance', 'Local Food'];

  const filteredItems = selectedCategory === 'All' 
    ? cultureData 
    : cultureData.filter(item => item.category === selectedCategory);

  return (
    <div className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <div className="section-tag">
            <Palette size={14} />
            <span>Living Traditions & Indigenous Guilds</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '8px' }}>
            {t.culture.title}
          </h1>
          <p className="section-subtitle" style={{ margin: 0 }}>
            {t.culture.subtitle}
          </p>
        </div>

        {/* Category Pills */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '8px',
          marginBottom: '32px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.85rem',
                fontWeight: selectedCategory === cat ? 700 : 500,
                backgroundColor: selectedCategory === cat ? 'var(--charcoal-deep)' : '#FFFFFF',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--charcoal-deep)',
                border: `1px solid ${selectedCategory === cat ? 'var(--charcoal-deep)' : 'var(--border-medium)'}`,
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Culture Magazine Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="card-heritage"
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF'
              }}
            >
              {/* Media */}
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
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
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(22, 25, 23, 0.75)',
                  backdropFilter: 'blur(6px)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 700
                }}>
                  {item.category}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--brand-terracotta)', fontWeight: 700, marginBottom: '6px' }}>
                  📍 {item.region}
                </div>

                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)', marginBottom: '8px' }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  marginBottom: '16px'
                }}>
                  {item.culturalStory}
                </p>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  {item.tags.map((tag, i) => (
                    <span key={i} style={{
                      fontSize: '0.68rem',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      backgroundColor: 'var(--bg-surface-elevated)',
                      color: 'var(--charcoal-mid)',
                      fontWeight: 600
                    }}>
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--charcoal-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Explore Lineage & Stories</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Craft Detail Modal */}
      {activeItem && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(22, 25, 23, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: 'var(--shadow-lg)',
            animation: 'fadeIn 0.3s ease'
          }}>
            <button
              onClick={() => setActiveItem(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ height: '260px', position: 'relative' }}>
              <img
                src={activeItem.image}
                alt={activeItem.title}
                onError={(e) => {
                  if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80') {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80';
                  }
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '28px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--brand-terracotta)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                📍 {activeItem.region} • {activeItem.category}
              </div>

              <h2 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)', marginBottom: '16px' }}>
                {activeItem.title}
              </h2>

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-deep)', marginBottom: '6px' }}>
                  Ancestral Origins & Technique
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {activeItem.culturalStory}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                border: '1px solid var(--border-subtle)',
                marginBottom: '24px'
              }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-deep)', marginBottom: '4px' }}>
                  📜 Cultural & Geographical Significance
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {activeItem.significance}
                </p>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setActiveItem(null)}
                  className="btn-primary"
                  style={{ padding: '8px 24px', fontSize: '0.85rem' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
