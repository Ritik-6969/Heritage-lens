import React from 'react';
import { useApp } from '../../context/AppContext';
import { destinationsData } from '../../data/destinationsData';
import { MapPin, Clock, Users, ArrowUpRight, Award, Compass, IndianRupee } from 'lucide-react';

import { handleImageError } from '../../utils/imageFallback';

export const FeaturedDestinations: React.FC = () => {
  const { t, openDestinationDetails, setActiveTab } = useApp();

  const handleCardClick = (destId: string) => {
    openDestinationDetails(destId);
    setActiveTab('explore');
  };

  return (
    <section className="section-spacing" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '48px'
        }}>
          <div>
            <div className="section-tag">
              <Compass size={14} />
              <span>Verified Lesser-Known Landmarks</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>
              {t.featured.title}
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              {t.featured.subtitle}
            </p>
          </div>

          <button
            onClick={() => setActiveTab('explore')}
            className="btn-outline-terracotta"
          >
            <span>View All Destinations on India Map</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* 8 Featured Destinations Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {destinationsData.slice(0, 8).map((dest) => (
            <div
              key={dest.id}
              onClick={() => handleCardClick(dest.id)}
              className="card-heritage"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                backgroundColor: 'var(--bg-surface)'
              }}
            >
              {/* Card Image with Badges */}
              <div style={{
                position: 'relative',
                height: '210px',
                overflow: 'hidden'
              }}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  onError={(e) => handleImageError(e)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="dest-img"
                />

                {/* Top Badges */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  right: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(22, 25, 23, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}>
                    {dest.category}
                  </span>

                  {dest.hasActiveQuest && (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 8px',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'rgba(200, 90, 50, 0.9)',
                      color: '#FFFFFF',
                      fontSize: '0.7rem',
                      fontWeight: 700
                    }}>
                      <Award size={12} />
                      <span>Quest</span>
                    </span>
                  )}
                </div>

                {/* Bottom Scrim with State Tag */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--charcoal-deep)'
                }}>
                  <MapPin size={11} color="var(--brand-terracotta)" />
                  <span>{dest.state}</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--charcoal-deep)'
                  }}>
                    {dest.name}
                  </h3>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#B8860B' }}>
                    ⭐ {dest.rating}
                  </span>
                </div>

                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '16px',
                  lineHeight: 1.45,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {dest.description}
                </p>

                {/* Metadata Pills: Cost, Crowd, Best Time */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '0.78rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <IndianRupee size={12} /> {t.featured.costLabel}:
                    </span>
                    <strong style={{ color: 'var(--charcoal-deep)' }}>
                      ₹{dest.estimatedVisitCost.min}–₹{dest.estimatedVisitCost.max}
                    </strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Users size={12} /> {t.featured.crowdLabel}:
                    </span>
                    <span className={`badge-status ${dest.crowdLevel === 'Low' ? 'badge-low-crowd' : 'badge-moderate-crowd'}`}>
                      {dest.crowdLevel === 'Low' ? '🟢 Low Crowd' : '🟡 Moderate'}
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--text-tertiary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {t.featured.bestTimeLabel}:
                    </span>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {dest.bestTime}
                    </span>
                  </div>
                </div>

                {/* Explore Button */}
                <button
                  style={{
                    marginTop: '16px',
                    width: '100%',
                    padding: '9px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--charcoal-deep)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'var(--transition-fast)'
                  }}
                  className="dest-explore-btn"
                >
                  <span>{t.featured.exploreBtn}</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .card-heritage:hover .dest-img {
          transform: scale(1.05);
        }
        .card-heritage:hover .dest-explore-btn {
          background-color: var(--brand-terracotta);
          color: #FFFFFF;
          border-color: var(--brand-terracotta);
        }
      `}</style>
    </section>
  );
};
