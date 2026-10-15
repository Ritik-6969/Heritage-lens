import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { destinationsData } from '../../data/destinationsData';
import { Destination, DestinationCategory, CrowdLevel } from '../../types';
import { InteractiveIndiaMap } from './InteractiveIndiaMap';
import { PlaceDetailsModal } from './PlaceDetailsModal';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Users, 
  IndianRupee, 
  Sparkles, 
  Compass, 
  SlidersHorizontal,
  Award,
  ArrowUpRight
} from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const { t, selectedDestination, setSelectedDestination, openDestinationDetails } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCrowd, setSelectedCrowd] = useState<string>('All');
  const [maxBudget, setMaxBudget] = useState<number>(1500);
  const [selectedState, setSelectedState] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories: string[] = ['All', 'Heritage', 'Culture', 'Art & Crafts', 'Food', 'Festivals', 'Nature'];
  const states = ['All', 'Uttar Pradesh', 'Madhya Pradesh', 'Assam', 'Gujarat', 'Andhra Pradesh', 'Odisha'];

  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((dest) => {
      const matchesSearch = 
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
      const matchesCrowd = selectedCrowd === 'All' || dest.crowdLevel === selectedCrowd;
      const matchesBudget = dest.estimatedVisitCost.min <= maxBudget;
      const matchesState = selectedState === 'All' || dest.state === selectedState;

      return matchesSearch && matchesCategory && matchesCrowd && matchesBudget && matchesState;
    });
  }, [searchQuery, activeCategory, selectedCrowd, maxBudget, selectedState]);

  const handleCardClick = (dest: Destination) => {
    setSelectedDestination(dest);
    setIsModalOpen(true);
  };

  const handleMapSelect = (dest: Destination) => {
    setSelectedDestination(dest);
    setIsModalOpen(true);
  };

  return (
    <div className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <div className="section-tag">
            <Compass size={14} />
            <span>Interactive Archaeological Atlas</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '10px' }}>
            Explore Hidden India
          </h1>
          <p className="section-subtitle" style={{ margin: 0 }}>
            Discover verified lesser-known heritage monuments, ancient cave shelters, and artisanal craft geographies across India.
          </p>
        </div>

        {/* Search and Main Filters Bar */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: '20px 24px',
          boxShadow: 'var(--shadow-sm)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '18px'
          }}>
            {/* Search Input */}
            <div style={{
              flex: '1 1 300px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--bg-surface-elevated)',
              padding: '10px 16px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-medium)'
            }}>
              <Search size={18} color="var(--brand-terracotta)" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search monuments, states, or crafts (e.g. Chunar, Orchha, Dholavira)..."
                style={{
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  width: '100%',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            {/* State Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Region:</span>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Crowd Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Crowd:</span>
              <select
                value={selectedCrowd}
                onChange={(e) => setSelectedCrowd(e.target.value)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="All">All Crowd Levels</option>
                <option value="Low">Low Crowd Only</option>
                <option value="Moderate">Moderate Crowd</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '4px'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.85rem',
                  fontWeight: activeCategory === cat ? 700 : 500,
                  backgroundColor: activeCategory === cat ? 'var(--charcoal-deep)' : 'var(--bg-surface-elevated)',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--charcoal-deep)',
                  border: `1px solid ${activeCategory === cat ? 'var(--charcoal-deep)' : 'var(--border-subtle)'}`,
                  whiteSpace: 'nowrap',
                  transition: 'var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Main Layout: Interactive Map (Left) + Destination Cards (Right) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(340px, 460px) 1fr',
          gap: '32px',
          alignItems: 'start'
        }} className="explore-grid-layout">
          
          {/* LEFT: Interactive India Map */}
          <div style={{ position: 'sticky', top: '96px' }}>
            <InteractiveIndiaMap
              selectedDestId={selectedDestination?.id || null}
              onSelectDestination={handleMapSelect}
            />

            {/* Quick Stat Pill */}
            <div style={{
              marginTop: '16px',
              padding: '12px 18px',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.82rem'
            }}>
              <span style={{ color: 'var(--text-secondary)' }}>Showing <strong>{filteredDestinations.length}</strong> verified locations</span>
              <span style={{ color: 'var(--brand-terracotta)', fontWeight: 700 }}>100% Authentic Heritage</span>
            </div>
          </div>

          {/* RIGHT: Destination Cards List */}
          <div>
            {filteredDestinations.length === 0 ? (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '60px 24px',
                textAlign: 'center',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🔍</div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                  No destinations match your filters
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  Try resetting the search query or selecting "All Categories".
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                    setSelectedCrowd('All');
                    setSelectedState('All');
                  }}
                  className="btn-primary"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                {filteredDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => handleCardClick(dest)}
                    className="card-heritage"
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: '#FFFFFF'
                    }}
                  >
                    {/* Card Media */}
                    <div style={{ height: '190px', position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={dest.image}
                        alt={dest.name}
                        onError={(e) => {
                          if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80') {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80';
                          }
                        }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        right: '10px',
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}>
                        <span style={{
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-pill)',
                          backgroundColor: 'rgba(22, 25, 23, 0.75)',
                          backdropFilter: 'blur(6px)',
                          color: '#FFFFFF',
                          fontSize: '0.7rem',
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
                            padding: '3px 8px',
                            borderRadius: 'var(--radius-pill)',
                            backgroundColor: 'rgba(200, 90, 50, 0.9)',
                            color: '#FFFFFF',
                            fontSize: '0.68rem',
                            fontWeight: 700
                          }}>
                            <Award size={11} /> Quest
                          </span>
                        )}
                      </div>

                      <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '10px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--charcoal-deep)'
                      }}>
                        <MapPin size={10} color="var(--brand-terracotta)" />
                        <span>{dest.state}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)' }}>
                          {dest.name}
                        </h3>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#B8860B' }}>⭐ {dest.rating}</span>
                      </div>

                      <div style={{ fontSize: '0.78rem', color: 'var(--brand-terracotta)', fontWeight: 600, marginBottom: '8px' }}>
                        {dest.location}
                      </div>

                      <p style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.45,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        marginBottom: '14px'
                      }}>
                        {dest.description}
                      </p>

                      {/* Travel Metrics */}
                      <div style={{
                        marginTop: 'auto',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        fontSize: '0.75rem'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--text-tertiary)' }}>Est. Visit Cost:</span>
                          <strong style={{ color: 'var(--charcoal-deep)' }}>₹{dest.estimatedVisitCost.min}–₹{dest.estimatedVisitCost.max}</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ color: 'var(--text-tertiary)' }}>Crowd Level:</span>
                          <span className={`badge-status ${dest.crowdLevel === 'Low' ? 'badge-low-crowd' : 'badge-moderate-crowd'}`} style={{ fontSize: '0.65rem' }}>
                            {dest.crowdLevel === 'Low' ? '🟢 Low' : '🟡 Moderate'}
                          </span>
                        </div>
                      </div>

                      {/* Explore Button */}
                      <button
                        style={{
                          marginTop: '14px',
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
                        <span>View Details</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Place Details Modal Popup */}
      {isModalOpen && (
        <PlaceDetailsModal
          destination={selectedDestination}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <style>{`
        @media (max-width: 980px) {
          .explore-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
