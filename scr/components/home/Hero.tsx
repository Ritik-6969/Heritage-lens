import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Sparkles, MapPin, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, setActiveTab, openDestinationDetails, generateTrip } = useApp();
  const [searchValue, setSearchValue] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // 5 Iconic Indian Heritage Background Slides (Rotate every 5 seconds)
  const heroSlides = [
    {
      id: 'chunar-fort',
      title: 'Chunar Fort',
      location: 'Mirzapur, Uttar Pradesh',
      rating: '4.7',
      crowd: 'Low Crowd',
      image: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=2000&q=85',
      badge: 'Ganges Citadel'
    },
    {
      id: 'orchha',
      title: 'Orchha Cenotaphs',
      location: 'Niwari, Madhya Pradesh',
      rating: '4.8',
      crowd: 'Low Crowd',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2000&q=85',
      badge: 'Bundela Kingdom'
    },
    {
      id: 'konark',
      title: 'Konark Sun Temple',
      location: 'Puri, Odisha',
      rating: '4.8',
      crowd: 'Moderate',
      image: 'https://images.unsplash.com/photo-1600100397608-f010f443b745?auto=format&fit=crop&w=2000&q=85',
      badge: '13th C. Sun Chariot'
    },
    {
      id: 'mandu',
      title: 'Mandu Jahaz Mahal',
      location: 'Dhar, Madhya Pradesh',
      rating: '4.8',
      crowd: 'Low Crowd',
      image: 'https://images.unsplash.com/photo-1609137144822-2633f8d3840b?auto=format&fit=crop&w=2000&q=85',
      badge: 'Floating Water Palace'
    },
    {
      id: 'majuli',
      title: 'Majuli River Island',
      location: 'Brahmaputra Basin, Assam',
      rating: '4.9',
      crowd: 'Low Crowd',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2000&q=85',
      badge: 'Living Monastic Satras'
    }
  ];

  // 5-Second Automatic Image Slideshow Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const activeSlideData = heroSlides[currentSlide];

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion);
    if (suggestion.toLowerCase().includes('agra')) {
      generateTrip({ destination: 'Agra Heritage & Craft Circuit', budget: 5000 });
      setActiveTab('planner');
    } else if (suggestion.toLowerCase().includes('quest')) {
      setActiveTab('quest');
    } else {
      setActiveTab('explore');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    if (searchValue.toLowerCase().includes('agra') || searchValue.toLowerCase().includes('plan')) {
      generateTrip({ destination: searchValue });
      setActiveTab('planner');
    } else {
      setActiveTab('explore');
    }
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '86vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 0 70px',
      overflow: 'hidden'
    }}>
      {/* Background Crossfading Hero Images */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            opacity: currentSlide === idx ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            zIndex: 1,
            transform: currentSlide === idx ? 'scale(1.03)' : 'scale(1)',
            transitionDuration: '5s'
          }}
        />
      ))}

      {/* Layered Gradient Scrim */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(22, 25, 23, 0.4) 0%, rgba(22, 25, 23, 0.72) 65%, rgba(22, 25, 23, 0.95) 100%)',
        zIndex: 2
      }} />

      {/* Subtle Pattern Texture Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.25,
        zIndex: 3
      }} />

      {/* Main Hero Foreground Content */}
      <div className="container" style={{ position: 'relative', zIndex: 4, textAlign: 'center', maxWidth: '880px' }}>
        
        {/* Top Tag Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: 'var(--radius-pill)',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          color: '#FAF7F2',
          fontSize: '0.82rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}>
          <Sparkles size={14} color="var(--brand-gold)" />
          <span>Smart Heritage Tourism • SIH 2026 Prototype</span>
        </div>

        {/* Hero Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)',
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#FFFFFF',
          marginBottom: '20px',
          textShadow: '0 4px 24px rgba(0, 0, 0, 0.6)'
        }}>
          {t.hero.headingPart1} <br />
          <span style={{
            background: 'linear-gradient(90deg, #F9D976 0%, #E99A48 50%, #E06C42 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t.hero.headingPart2}
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#FAF7F2',
          lineHeight: 1.6,
          maxWidth: '680px',
          margin: '0 auto 36px',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          opacity: 0.95
        }}>
          {t.hero.subheading}
        </p>

        {/* Primary Interactive Search Bar */}
        <form onSubmit={handleSearchSubmit} style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-pill)',
          padding: '8px 8px 8px 24px',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35)',
          maxWidth: '660px',
          margin: '0 auto 24px',
          border: '1px solid rgba(255, 255, 255, 0.6)',
          position: 'relative'
        }}>
          <Search size={20} color="var(--brand-terracotta)" style={{ flexShrink: 0, marginRight: '12px' }} />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t.hero.searchPlaceholder}
            style={{
              border: 'none',
              outline: 'none',
              width: '100%',
              fontSize: '0.95rem',
              color: 'var(--charcoal-deep)',
              backgroundColor: 'transparent'
            }}
          />
          <button
            type="submit"
            className="btn-primary"
            style={{
              padding: '12px 24px',
              fontSize: '0.9rem',
              borderRadius: 'var(--radius-pill)',
              flexShrink: 0
            }}
          >
            <span>Explore</span>
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Quick Suggestion Chips */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          fontSize: '0.82rem',
          color: '#E0DCD3',
          marginBottom: '36px'
        }}>
          <span style={{ fontWeight: 600 }}>{t.hero.suggestionsTitle}</span>
          {t.hero.suggestions.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FAF7F2',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-terracotta)';
                e.currentTarget.style.borderColor = 'var(--brand-terracotta)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Slideshow Progress Dots */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '10px'
        }}>
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: currentSlide === idx ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: currentSlide === idx ? 'var(--brand-gold)' : 'rgba(255, 255, 255, 0.35)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              title={slide.title}
            />
          ))}
        </div>

        {/* Floating Active Landmark Snippet Card */}
        <div
          onClick={() => {
            openDestinationDetails(activeSlideData.id);
            setActiveTab('explore');
          }}
          style={{
            position: 'absolute',
            bottom: '-10px',
            right: '24px',
            maxWidth: '300px',
            padding: '14px 18px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(22, 25, 23, 0.08)',
            boxShadow: 'var(--shadow-lg)',
            cursor: 'pointer',
            transition: 'var(--transition-normal)',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            zIndex: 10
          }}
          className="floating-hero-card"
        >
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '12px',
            overflow: 'hidden',
            flexShrink: 0
          }}>
            <img 
              src={activeSlideData.image} 
              alt={activeSlideData.title} 
              onError={(e) => {
                if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80') {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80';
                }
              }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--brand-terracotta)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <MapPin size={11} />
              <span>{activeSlideData.badge}</span>
            </div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-deep)' }}>
              {activeSlideData.title}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              {activeSlideData.location}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#B8860B' }}>⭐ {activeSlideData.rating}</span>
              <span className="badge-status badge-low-crowd" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
                🟢 {activeSlideData.crowd}
              </span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .floating-hero-card {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
