import React, { useState } from 'react';
import { Destination } from '../../types';
import { destinationsData } from '../../data/destinationsData';
import { MapPin } from 'lucide-react';

interface InteractiveIndiaMapProps {
  selectedDestId: string | null;
  onSelectDestination: (dest: Destination) => void;
}

export const InteractiveIndiaMap: React.FC<InteractiveIndiaMapProps> = ({
  selectedDestId,
  onSelectDestination
}) => {
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);

  // Map coordinates relative projection percentages onto India Map frame
  const pinCoordinates: { [key: string]: { x: number; y: number; icon: string; color: string } } = {
    'chunar-fort': { x: 58, y: 44, icon: '🏛️', color: '#C85A32' },
    'orchha': { x: 50, y: 44, icon: '🏛️', color: '#C85A32' },
    'meenakshi-temple': { x: 48, y: 88, icon: '🏛️', color: '#C85A32' },
    'mandu': { x: 44, y: 53, icon: '🏛️', color: '#C85A32' },
    'majuli': { x: 86, y: 38, icon: '🎭', color: '#6A1B9A' },
    'dholavira': { x: 28, y: 48, icon: '🏛️', color: '#C85A32' },
    'lepakshi': { x: 48, y: 78, icon: '🏛️', color: '#C85A32' },
    'bhimbetka': { x: 48, y: 50, icon: '🎨', color: '#2E7D32' },
    'konark': { x: 68, y: 58, icon: '🏛️', color: '#C85A32' },
    'agra-cultural': { x: 49, y: 38, icon: '🏛️', color: '#C85A32' }
  };

  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#F3EDE2',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-medium)',
      padding: '24px',
      overflow: 'hidden',
      minHeight: '480px',
      boxShadow: 'var(--shadow-sm)'
    }}>
      {/* Map Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '14px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPin size={16} color="var(--brand-terracotta)" />
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--charcoal-deep)' }}>
            Interactive Heritage Map of India
          </span>
        </div>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
          Click markers to view details
        </span>
      </div>

      {/* Stylized SVG Map Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Artistic India Map Silhouette */}
        <svg
          viewBox="0 0 500 550"
          style={{
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.06))'
          }}
        >
          {/* Subtle Decorative Grid Lines */}
          <line x1="50" y1="150" x2="450" y2="150" stroke="#E4DCD0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="280" x2="450" y2="280" stroke="#E4DCD0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="50" y1="410" x2="450" y2="410" stroke="#E4DCD0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="180" y1="50" x2="180" y2="500" stroke="#E4DCD0" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="320" y1="50" x2="320" y2="500" stroke="#E4DCD0" strokeWidth="1" strokeDasharray="4 4" />

          {/* India Boundary Path Approximation */}
          <path
            d="M 190 60
               Q 230 40, 260 70
               Q 280 110, 310 130
               L 330 140
               Q 360 140, 420 160
               Q 460 170, 440 210
               Q 410 230, 370 210
               Q 340 230, 350 280
               Q 360 320, 310 370
               Q 260 450, 240 510
               Q 220 520, 215 500
               Q 180 430, 160 360
               Q 140 310, 150 250
               Q 110 260, 90 280
               Q 70 260, 100 220
               Q 120 180, 160 150
               Z"
            fill="#FAF7F2"
            stroke="#D0C5B4"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* River Ganges Flow */}
          <path
            d="M 230 150 Q 280 190, 350 240 Q 370 260, 360 300"
            fill="none"
            stroke="#B5D0E8"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* River Narmada Flow */}
          <path
            d="M 140 270 Q 210 265, 270 275"
            fill="none"
            stroke="#B5D0E8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Dynamic Map Pins for Destinations */}
        {destinationsData.map((dest) => {
          const pin = pinCoordinates[dest.id] || { x: 50, y: 50, icon: '🏛️', color: '#C85A32' };
          const isSelected = selectedDestId === dest.id;

          return (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              onMouseEnter={() => setHoveredDest(dest)}
              onMouseLeave={() => setHoveredDest(null)}
              style={{
                position: 'absolute',
                left: `${pin.x}%`,
                top: `${pin.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: isSelected ? 30 : 20,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Pulse Ring for Selected/Active Quest */}
              {(isSelected || dest.hasActiveQuest) && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    left: '-6px',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '2px solid var(--brand-terracotta)',
                    animation: 'pulseGlow 2s infinite',
                    pointerEvents: 'none'
                  }}
                />
              )}

              {/* Pin Button */}
              <div
                style={{
                  width: isSelected ? '34px' : '28px',
                  height: isSelected ? '34px' : '28px',
                  borderRadius: '50%',
                  backgroundColor: isSelected ? 'var(--brand-terracotta)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : '#161917',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  border: `2px solid ${isSelected ? '#FFFFFF' : 'var(--brand-terracotta)'}`,
                  fontSize: isSelected ? '1rem' : '0.85rem',
                  transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.2s ease'
                }}
              >
                {pin.icon}
              </div>

              {/* Marker Label */}
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                  marginTop: '4px',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  backgroundColor: isSelected ? 'var(--charcoal-deep)' : 'rgba(255, 255, 255, 0.9)',
                  color: isSelected ? '#FFFFFF' : 'var(--charcoal-deep)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  boxShadow: 'var(--shadow-sm)',
                  pointerEvents: 'none'
                }}
              >
                {dest.name}
              </div>
            </div>
          );
        })}

        {/* Hover / Tooltip Card Preview */}
        {hoveredDest && (
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              right: '12px',
              backgroundColor: 'rgba(22, 25, 23, 0.94)',
              backdropFilter: 'blur(12px)',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-md)',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              zIndex: 40,
              fontSize: '0.8rem',
              animation: 'fadeIn 0.2s ease-out'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={hoveredDest.image}
                alt={hoveredDest.name}
                onError={(e) => {
                  if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80') {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80';
                  }
                }}
                style={{ width: '42px', height: '42px', borderRadius: '6px', objectFit: 'cover' }}
              />
              <div>
                <strong style={{ color: 'var(--brand-gold-light)', display: 'block', fontSize: '0.88rem' }}>
                  {hoveredDest.name} ({hoveredDest.state})
                </strong>
                <span style={{ fontSize: '0.72rem', color: '#D5DDD7' }}>
                  {hoveredDest.tagline}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <span className="badge-status badge-low-crowd" style={{ fontSize: '0.68rem' }}>
                🟢 {hoveredDest.crowdLevel}
              </span>
              <span style={{ fontWeight: 700, color: 'var(--brand-gold)' }}>
                ₹{hoveredDest.estimatedVisitCost.min}–₹{hoveredDest.estimatedVisitCost.max}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Map Legend */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        flexWrap: 'wrap',
        marginTop: '10px',
        paddingTop: '10px',
        borderTop: '1px solid var(--border-subtle)',
        fontSize: '0.72rem',
        color: 'var(--text-secondary)'
      }}>
        <span>🏛️ Heritage Forts & Temples</span>
        <span>🎨 Art & Prehistoric Sites</span>
        <span>🎭 Cultural Monasteries</span>
        <span>🍛 Heritage Food Trails</span>
      </div>
    </div>
  );
};
