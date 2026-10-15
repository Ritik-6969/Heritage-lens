import React, { useState } from 'react';
import { Destination } from '../../types';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  MapPin, 
  Clock, 
  Users, 
  CloudSun, 
  Bus, 
  Building, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Bot, 
  Calendar,
  IndianRupee,
  Share2,
  Bookmark,
  CheckCircle2,
  Info,
  Images,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface PlaceDetailsModalProps {
  destination: Destination | null;
  onClose: () => void;
}

export const PlaceDetailsModal: React.FC<PlaceDetailsModalProps> = ({
  destination,
  onClose
}) => {
  const { t, setActiveTab, generateTrip, setActiveQuest, sendAIMessage, showToast } = useApp();
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  if (!destination) return null;

  const allImages = [
    destination.image,
    ...(destination.galleryImages || [])
  ].filter((img, idx, arr) => arr.indexOf(img) === idx); // unique list

  const handlePlanVisit = () => {
    generateTrip({
      destination: destination.name,
      budget: 5000
    });
    onClose();
    setActiveTab('planner');
  };

  const handleStartQuest = () => {
    onClose();
    setActiveTab('quest');
  };

  const handleAskAI = () => {
    sendAIMessage(`Tell me more about the architecture and hidden legends of ${destination.name}`);
    onClose();
    setActiveTab('ai');
  };

  const handlePrevImage = () => {
    setActiveGalleryIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveGalleryIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(22, 25, 23, 0.75)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-xl)',
        maxWidth: '960px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.3)',
        animation: 'fadeIn 0.3s ease-out'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 20,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--charcoal-deep)',
            boxShadow: 'var(--shadow-md)',
            cursor: 'pointer'
          }}
          aria-label="Close destination details"
        >
          <X size={20} />
        </button>

        {/* Hero Image Banner with Gallery Navigation */}
        <div style={{ position: 'relative', height: '360px', overflow: 'hidden', backgroundColor: '#161917' }}>
          <img
            src={allImages[activeGalleryIndex] || destination.image}
            alt={destination.name}
            onError={(e) => {
              if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80') {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80';
              }
            }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease' }}
          />

          {/* Navigation Arrows if multiple photos */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer'
                }}
                title="Previous photo"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNextImage}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  cursor: 'pointer'
                }}
                title="Next photo"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Photo Count Badge */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'rgba(22, 25, 23, 0.75)',
            backdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            fontSize: '0.72rem',
            fontWeight: 700
          }}>
            <Images size={13} />
            <span>Photo {activeGalleryIndex + 1} of {allImages.length}</span>
          </div>

          {/* Hero Scrim */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(22,25,23,0.88) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '32px',
            color: '#FFFFFF',
            pointerEvents: 'none'
          }}>
            {/* Category and Status Badges */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
              <span style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--brand-terracotta)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                {destination.category}
              </span>
              <span style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.78rem',
                fontWeight: 600
              }}>
                Lesser Known
              </span>
              <span style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                fontSize: '0.78rem',
                fontWeight: 600
              }}>
                Cultural Heritage
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontFamily: 'var(--font-serif)',
              color: '#FFFFFF',
              marginBottom: '6px'
            }}>
              {destination.name}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.92rem', color: '#D5DDD7' }}>
              <MapPin size={15} color="var(--brand-terracotta)" />
              <span>{destination.location}</span>
              <span>•</span>
              <span style={{ color: 'var(--brand-gold-light)', fontWeight: 700 }}>⭐ {destination.rating} ({destination.reviewsCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* GALLERY THUMBNAILS BAR */}
        {allImages.length > 1 && (
          <div style={{
            display: 'flex',
            gap: '8px',
            padding: '12px 24px',
            backgroundColor: '#F5F2EB',
            overflowX: 'auto',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            {allImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveGalleryIndex(idx)}
                style={{
                  width: '64px',
                  height: '46px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeGalleryIndex === idx ? '2px solid var(--brand-terracotta)' : '2px solid transparent',
                  opacity: activeGalleryIndex === idx ? 1 : 0.65,
                  flexShrink: 0,
                  transition: 'var(--transition-fast)'
                }}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onError={(e) => {
                    if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80') {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80';
                    }
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Modal Main Content */}
        <div style={{ padding: '32px' }}>
          
          {/* Quick Action Top Toolbar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={handlePlanVisit}
                className="btn-primary"
                style={{ padding: '10px 22px', fontSize: '0.9rem' }}
              >
                <Calendar size={16} />
                <span>{t.details.planVisitBtn}</span>
              </button>

              <button
                onClick={handleStartQuest}
                className="btn-gold"
                style={{ padding: '10px 22px', fontSize: '0.9rem' }}
              >
                <Award size={16} />
                <span>{t.details.startQuestBtn}</span>
              </button>

              <button
                onClick={handleAskAI}
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                <Bot size={16} color="var(--brand-terracotta)" />
                <span>{t.details.askAIBtn}</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => showToast('📌 Destination bookmarked to your explorer profile!', 'success')}
                style={{
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <Bookmark size={14} /> Bookmark
              </button>
              <button
                onClick={() => showToast('🔗 Shareable link copied to clipboard!', 'info')}
                style={{
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: 'pointer',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px'
          }}>
            {/* Left Column: Historical Narrative & Folklore */}
            <div>
              {/* Historical Legacy */}
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--charcoal-deep)',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>📜</span> {t.details.history}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {destination.history}
                </p>
              </div>

              {/* Architectural Marvel */}
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--charcoal-deep)',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>🏛️</span> {t.details.architecture}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {destination.architecture}
                </p>
              </div>

              {/* Local Story & Folklore */}
              <div style={{
                backgroundColor: 'var(--brand-terracotta-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                border: '1px solid rgba(200, 90, 50, 0.2)',
                marginBottom: '28px'
              }}>
                <h4 style={{
                  fontSize: '1rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--brand-terracotta)',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>📖</span> {t.details.localStory}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#5A3525', lineHeight: 1.6, fontStyle: 'italic' }}>
                  "{destination.localStory}"
                </p>
              </div>

              {/* Signature Experiences List */}
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--charcoal-deep)',
                  marginBottom: '12px'
                }}>
                  ✨ {t.details.thingsToExperience}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {destination.thingsToExperience.map((exp, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--brand-terracotta)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Travel Intelligence Dashboard & Verified Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Travel Intelligence Card */}
              <div style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                border: '1px solid var(--border-medium)'
              }}>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontFamily: 'var(--font-serif)',
                  color: 'var(--charcoal-deep)',
                  marginBottom: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Sparkles size={18} color="var(--brand-terracotta)" />
                  <span>{t.details.travelIntelligence}</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem' }}>
                  {/* Estimated Cost */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <IndianRupee size={15} /> Estimated Visit Cost:
                    </span>
                    <strong style={{ fontSize: '1rem', color: 'var(--charcoal-deep)' }}>
                      ₹{destination.estimatedVisitCost.min} – ₹{destination.estimatedVisitCost.max}
                    </strong>
                  </div>

                  {/* Crowd Level */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Users size={15} /> Estimated Crowd:
                    </span>
                    <span className="badge-status badge-low-crowd">
                      🟢 {destination.crowdLevel} Crowd
                    </span>
                  </div>

                  {/* Best Time */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={15} /> Best Time Window:
                    </span>
                    <strong style={{ color: 'var(--charcoal-deep)' }}>
                      {destination.bestTime}
                    </strong>
                  </div>

                  {/* Weather */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CloudSun size={15} /> Weather:
                    </span>
                    <strong style={{ color: 'var(--charcoal-deep)' }}>
                      {destination.weather.temp}°C • {destination.weather.condition}
                    </strong>
                  </div>

                  {/* Local Transport */}
                  <div style={{ paddingBottom: '10px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <Bus size={15} /> Local Reference Transport:
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.8rem' }}>
                      {destination.transport.slice(0, 2).map((tr, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>{tr.mode}:</span>
                          <strong>{tr.fareRange}</strong>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nearby Stay with Photo */}
                  <div>
                    <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                      <Building size={15} /> Recommended Nearby Stay:
                    </div>
                    {destination.nearbyHotels.slice(0, 1).map((h) => (
                      <div key={h.id} style={{ display: 'flex', gap: '10px', backgroundColor: '#FFFFFF', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-subtle)', alignItems: 'center' }}>
                        {h.image && (
                          <img
                            src={h.image}
                            alt={h.name}
                            onError={(e) => {
                              if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80') {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80';
                              }
                            }}
                            style={{ width: '50px', height: '50px', borderRadius: '6px', objectFit: 'cover' }}
                          />
                        )}
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.82rem' }}>{h.name}</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', marginTop: '2px', fontSize: '0.75rem' }}>
                            <span>₹{h.pricePerNight}/night • {h.distance}</span>
                            <span style={{ color: '#B8860B', fontWeight: 700 }}>⭐ {h.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Information Box */}
              <div style={{
                backgroundColor: '#EEF2F6',
                borderRadius: 'var(--radius-lg)',
                padding: '20px',
                border: '1px solid rgba(40, 53, 147, 0.15)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <ShieldCheck size={18} color="#283593" />
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1A237E' }}>
                    {t.details.verifiedBadge}
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', color: '#37474F', marginBottom: '12px' }}>
                  {t.details.sourcesLabel}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.78rem', color: '#455A64', marginBottom: '12px' }}>
                  {destination.sources.map((src, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>✓</span> <span>{src}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ fontSize: '0.72rem', color: '#78909C', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '8px' }}>
                  {t.details.lastUpdated} • Verified Archaeological & Cultural Record
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
