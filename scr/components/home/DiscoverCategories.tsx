import React from 'react';
import { useApp } from '../../context/AppContext';
import { Landmark, Palette, Theater, Sparkles, Utensils, Trees } from 'lucide-react';

export const DiscoverCategories: React.FC = () => {
  const { t, setActiveTab } = useApp();

  const categories = [
    {
      id: 'heritage',
      title: t.categories.heritage,
      icon: Landmark,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYtcTgxiwuaMv2gQWnqT8-25YWv3PnRa2Bzsotc4tdA&s=10',
      count: '45+ Forts & Caves',
      tag: 'Ancient Architecture'
    },
    {
      id: 'crafts',
      title: t.categories.crafts,
      icon: Palette,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3SgH_NMLHNwIU8m7KuceM9nymHSmQkpVbJ9FJD0qAQ&s=10',
      count: '32 GI Guilds',
      tag: 'Handicrafts & Art'
    },
    {
      id: 'culture',
      title: t.categories.culture,
      icon: Theater,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1S3YpK9xy2IDwOB_VgkNSDJMCfxT_oIm4-s7Y_mAJg&s=10',
      count: '28 Living Traditions',
      tag: 'Music & Monasteries'
    },
    {
      id: 'festivals',
      title: t.categories.festivals,
      icon: Sparkles,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6663xjzUxtZxTh8lr8S_O0aFKgxlD6T1Irp0iYp2Dw&s=10',
      count: '18 Folk Melas',
      tag: 'Sacred Celebrations'
    },
    {
      id: 'food',
      title: t.categories.food,
      icon: Utensils,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwblbNNpafqsV3AcmYbiuGkBVnBzP_cpRormOnPfjkQ&s=10',
      count: '40+ Regional Feasts',
      tag: 'Heritage Recipes'
    },
    {
      id: 'nature',
      title: t.categories.nature,
      icon: Trees,
      // Authentic sacred Indian river & forested plateau landscape
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNqeEjuDS4BmJ1XfDNHv1exUGaaMoHVFrnVtSqfpHCQ&s=10',
      count: '20+ Eco Rivers & Hills',
      tag: 'Sacred Landscapes'
    }
  ];

  return (
    <section className="section-spacing" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Curated Heritage Verticals</span>
          </div>
          <h2 className="section-title">{t.categories.title}</h2>
          <p className="section-subtitle">{t.categories.subtitle}</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveTab('explore')}
                style={{
                  position: 'relative',
                  height: '240px',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition-normal)'
                }}
                className="category-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  onError={(e) => {
                    if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80') {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80';
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  className="cat-img"
                />
                
                {/* Gradient scrim */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(22,25,23,0.85) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px',
                  color: '#FFFFFF'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {cat.tag}
                    </span>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(200, 90, 50, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF'
                    }}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <div>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontFamily: 'var(--font-serif)',
                      color: '#FFFFFF',
                      marginBottom: '4px'
                    }}>
                      {cat.title}
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: '#E0DCD3' }}>
                      {cat.count}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
