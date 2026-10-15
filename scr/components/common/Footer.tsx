import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Heart, Sparkles, MapPin, Compass, Award, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, t } = useApp();

  return (
    <footer style={{
      backgroundColor: 'var(--charcoal-deep)',
      color: '#FAF7F2',
      padding: '70px 0 30px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Col 1: Brand & Philosophy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #C85A32 0%, #A33F19 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 21V10C4 6.5 8 3 12 3C16 3 20 6.5 20 10V21" />
                  <path d="M8 21V13C8 11 10 9 12 9C14 9 16 11 16 13V21" />
                </svg>
              </div>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#FFFFFF'
              }}>
                Heritage<span style={{ color: 'var(--brand-terracotta)' }}>Lens</span> India
              </span>
            </div>
            <p style={{
              fontSize: '0.88rem',
              color: '#A0ABA2',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}>
              "Discover India Beyond the Famous" — An intelligent cultural exploration platform helping travelers discover lesser-known monuments, navigate fair pricing, and support local living traditions.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              fontSize: '0.75rem',
              color: 'var(--brand-gold)'
            }}>
              <Sparkles size={13} />
              <span>Smart Tourism Prototype • August 2026</span>
            </div>
          </div>

          {/* Col 2: Exploration Modules */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--brand-gold-light)',
              marginBottom: '18px'
            }}>
              Core Platform
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button onClick={() => setActiveTab('explore')} style={{ color: '#D5DDD7', fontSize: '0.88rem' }}>
                  🏛️ Lesser-Known Destinations
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('planner')} style={{ color: '#D5DDD7', fontSize: '0.88rem' }}>
                  🧳 Smart Trip Planner
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('ai')} style={{ color: '#D5DDD7', fontSize: '0.88rem' }}>
                  🤖 HeritageLens AI Assistant
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('quest')} style={{ color: '#D5DDD7', fontSize: '0.88rem' }}>
                  🎮 Gamified Heritage Quests
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('scamshield')} style={{ color: '#D5DDD7', fontSize: '0.88rem' }}>
                  🛡️ ScamShield Price Verifier
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Cultural & Ethical Pillars */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--brand-gold-light)',
              marginBottom: '18px'
            }}>
              Ethical Heritage
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <button onClick={() => setActiveTab('culture')} style={{ color: '#D5DDD7', fontSize: '0.88rem' }}>
                  🎨 Traditional GI Artisan Guilds
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('responsible')} style={{ color: '#D5DDD7', fontSize: '0.88rem' }}>
                  🌿 Responsible Traveler Pledge
                </button>
              </li>
              <li>
                <span style={{ color: '#8E9991', fontSize: '0.85rem' }}>
                  📜 Verified Archival Documentation
                </span>
              </li>
              <li>
                <span style={{ color: '#8E9991', fontSize: '0.85rem' }}>
                  🔇 Zero Noise Monument Zones
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Archival Sources */}
          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--brand-gold-light)',
              marginBottom: '18px'
            }}>
              Verified Sources Index
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#A0ABA2', marginBottom: '12px' }}>
              Content synthesized from authoritative cultural repositories:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem', color: '#C2CCC5' }}>
              <span>• Archaeological Survey of India (ASI)</span>
              <span>• Ministry of Tourism, Govt of India</span>
              <span>• UNESCO World Heritage Centre</span>
              <span>• Sangeet Natak Akademi</span>
              <span>• National Crafts Museum & Hastkala Akademi</span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div style={{
          paddingTop: '28px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: '#8E9991'
        }}>
          <div>
            © 2026 HeritageLens India. Frontend Hackathon Prototype.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Privacy & Ethics</span>
            <span>•</span>
            <span>Reference Fare Disclaimer</span>
            <span>•</span>
            <span>Made with <Heart size={13} color="var(--brand-terracotta)" style={{ display: 'inline', verticalAlign: 'middle' }} /> for Indian Heritage</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
