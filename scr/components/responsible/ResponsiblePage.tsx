import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  HeartHandshake, 
  ShieldCheck, 
  CheckSquare, 
  Square, 
  Award, 
  Sparkles, 
  Camera, 
  Trash2, 
  ShoppingBag, 
  Users, 
  BookOpen, 
  Download,
  Share2,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ResponsiblePage: React.FC = () => {
  const { t, unlockBadge, addXp, showToast } = useApp();
  
  const [pledges, setPledges] = useState<{ [key: string]: boolean }>({
    customs: true,
    photo: true,
    litter: true,
    sandstone: true,
    community: true,
    crafts: true,
    guides: true
  });

  const [travelerName, setTravelerName] = useState('Shyam Explorer');
  const [certificateIssued, setCertificateIssued] = useState(false);

  const togglePledge = (key: string) => {
    setPledges(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allPledged = Object.values(pledges).every(Boolean);

  const handleSignPledge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!travelerName.trim()) {
      showToast('Please enter your name for the certification.', 'warning');
      return;
    }
    setCertificateIssued(true);
    addXp(50);
    unlockBadge('culture-seeker');
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    showToast('📜 Certified Responsible Traveler credential issued! +50 XP earned.', 'success');
  };

  return (
    <div className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div className="section-tag">
            <HeartHandshake size={14} />
            <span>Sustainable Heritage Custodianship</span>
          </div>

          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.15 }}>
            "Travel with curiosity. <br />
            <span style={{ color: 'var(--brand-terracotta)' }}>Leave with respect."</span>
          </h1>

          <p className="section-subtitle">
            {t.responsible.subtitle}
          </p>
        </div>

        {/* 3 CORE PILLARS GRID WITH IMAGES */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          marginBottom: '48px'
        }}>
          
          {/* 1. BEFORE YOU VISIT */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80"
                alt="Heritage Architecture Etiquette"
                onError={(e) => {
                  if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80') {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80';
                  }
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(200, 90, 50, 0.9)',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 700
              }}>
                Step 1: Preparation
              </div>
            </div>

            <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)', marginBottom: '8px' }}>
                {t.responsible.beforeVisit}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Preparation lays the foundation for respectful cultural engagement.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--brand-terracotta)', fontWeight: 700 }}>•</span>
                  <span><strong>Learn Local Customs:</strong> Understand sacred hours, head coverings, and temple dress etiquette.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--brand-terracotta)', fontWeight: 700 }}>•</span>
                  <span><strong>Check Photography Rules:</strong> Never use flash on 16th-century mineral ceiling frescoes.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--brand-terracotta)', fontWeight: 700 }}>•</span>
                  <span><strong>Understand Sacred Geometry:</strong> Walk clockwise around Buddhist stupas and sanctum mandapas.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. WHILE VISITING */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-UyVtFUP9L_y5yv9RnqyTQcEhUhodc2spIh0VeOjlyDQhEMTot3i4Z3J&s=10"
                alt="Preserving Natural and Sandstone Corridors"
                onError={(e) => {
                  if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80') {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';
                  }
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(46, 125, 50, 0.9)',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 700
              }}>
                Step 2: Preservation
              </div>
            </div>

            <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)', marginBottom: '8px' }}>
                {t.responsible.whileVisiting}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Ensure zero physical impact on fragile sandstone and ecosystem corridors.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 700 }}>•</span>
                  <span><strong>Zero Graffiti:</strong> Never carve names or touch ancient porous sandstone carvings.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 700 }}>•</span>
                  <span><strong>Zero Plastic Litter:</strong> Carry reusable flasks; leave no synthetic waste on river bluffs.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 700 }}>•</span>
                  <span><strong>Acoustic Decorum:</strong> Maintain peaceful silence in meditation halls and monastic Namghars.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. SUPPORT LOCAL */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdmpCrIu9YCK-gyqNHtQhQ79GhMuhRevwA0V0POE4DA&s=10"
                alt="Support Local Artisan Lineages"
                onError={(e) => {
                  if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80') {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80';
                  }
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(197, 160, 89, 0.9)',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 700
              }}>
                Step 3: Empowerment
              </div>
            </div>

            <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)', marginBottom: '8px' }}>
                {t.responsible.supportLocal}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Empower indigenous craft families and direct village cooperatives.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--brand-gold-dark)', fontWeight: 700 }}>•</span>
                  <span><strong>Buy GI Crafts Directly:</strong> Purchase authentic carpets, pottery, and Rogan art from makers.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--brand-gold-dark)', fontWeight: 700 }}>•</span>
                  <span><strong>Hire ASI-Certified Storytellers:</strong> Support local heritage guides over unverified touts.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--brand-gold-dark)', fontWeight: 700 }}>•</span>
                  <span><strong>Patronize Local Flavors:</strong> Savor indigenous regional recipes in family-run heritage eateries.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* INTERACTIVE RESPONSIBLE TRAVELER PLEDGE CARD */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(28px, 4vw, 48px)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-md)',
          maxWidth: '840px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)', marginBottom: '6px' }}>
              {t.responsible.pledgeTitle}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              {t.responsible.pledgeDesc}
            </p>
          </div>

          {!certificateIssued ? (
            <form onSubmit={handleSignPledge}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <div
                  onClick={() => togglePledge('sandstone')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: pledges.sandstone ? 'var(--brand-terracotta-subtle)' : 'var(--bg-surface-elevated)',
                    cursor: 'pointer',
                    border: `1px solid ${pledges.sandstone ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`
                  }}
                >
                  {pledges.sandstone ? <CheckSquare size={20} color="var(--brand-terracotta)" /> : <Square size={20} color="#9E9E9E" />}
                  <span style={{ fontSize: '0.9rem', color: 'var(--charcoal-deep)', fontWeight: pledges.sandstone ? 600 : 400 }}>
                    I pledge never to deface, touch, or scratch ancient sandstone and mural surfaces.
                  </span>
                </div>

                <div
                  onClick={() => togglePledge('litter')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: pledges.litter ? 'var(--brand-terracotta-subtle)' : 'var(--bg-surface-elevated)',
                    cursor: 'pointer',
                    border: `1px solid ${pledges.litter ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`
                  }}
                >
                  {pledges.litter ? <CheckSquare size={20} color="var(--brand-terracotta)" /> : <Square size={20} color="#9E9E9E" />}
                  <span style={{ fontSize: '0.9rem', color: 'var(--charcoal-deep)', fontWeight: pledges.litter ? 600 : 400 }}>
                    I pledge to maintain a strict zero-plastic footprint in river and forest monument corridors.
                  </span>
                </div>

                <div
                  onClick={() => togglePledge('crafts')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: pledges.crafts ? 'var(--brand-terracotta-subtle)' : 'var(--bg-surface-elevated)',
                    cursor: 'pointer',
                    border: `1px solid ${pledges.crafts ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`
                  }}
                >
                  {pledges.crafts ? <CheckSquare size={20} color="var(--brand-terracotta)" /> : <Square size={20} color="#9E9E9E" />}
                  <span style={{ fontSize: '0.9rem', color: 'var(--charcoal-deep)', fontWeight: pledges.crafts ? 600 : 400 }}>
                    I pledge to support local GI-certified artisans and traditional community livelihoods.
                  </span>
                </div>

                <div
                  onClick={() => togglePledge('guides')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: pledges.guides ? 'var(--brand-terracotta-subtle)' : 'var(--bg-surface-elevated)',
                    cursor: 'pointer',
                    border: `1px solid ${pledges.guides ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`
                  }}
                >
                  {pledges.guides ? <CheckSquare size={20} color="var(--brand-terracotta)" /> : <Square size={20} color="#9E9E9E" />}
                  <span style={{ fontSize: '0.9rem', color: 'var(--charcoal-deep)', fontWeight: pledges.guides ? 600 : 400 }}>
                    I pledge to engage certified local heritage storytellers and honor spiritual sanctum etiquette.
                  </span>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <input
                  type="text"
                  value={travelerName}
                  onChange={(e) => setTravelerName(e.target.value)}
                  placeholder="Enter your full name for certificate..."
                  style={{
                    padding: '12px 18px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1.5px solid var(--border-medium)',
                    fontSize: '0.95rem',
                    minWidth: '280px',
                    outline: 'none'
                  }}
                />

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '12px 28px', fontSize: '0.95rem' }}
                >
                  <Award size={18} />
                  <span>{t.responsible.pledgeBtn}</span>
                </button>
              </div>
            </form>
          ) : (
            /* Digital Certificate Card */
            <div style={{
              background: 'linear-gradient(135deg, #1C2420 0%, #121614 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              color: '#FFFFFF',
              border: '2px solid var(--brand-gold)',
              boxShadow: '0 12px 36px rgba(0,0,0,0.3)',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(197, 160, 89, 0.2)',
                color: 'var(--brand-gold)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                <Sparkles size={14} />
                <span>Official Digital Credential • SIH 2026</span>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: 'var(--brand-gold-light)', marginBottom: '8px' }}>
                Certificate of Responsible Exploration
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#A0ABA2', marginBottom: '20px' }}>
                This is to certify that
              </p>

              <div style={{
                fontSize: '1.6rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: '#FFFFFF',
                textDecoration: 'underline',
                textDecorationColor: 'var(--brand-gold)',
                marginBottom: '20px'
              }}>
                {travelerName}
              </div>

              <p style={{ fontSize: '0.85rem', color: '#D5DDD7', maxWidth: '520px', margin: '0 auto 24px', lineHeight: 1.5 }}>
                has formally undertaken the Sustainable Custodianship Pledge to preserve India's living cultural monuments, support indigenous artisans, and minimize ecological footprint.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => showToast('📥 Certificate saved to your explorer credentials!', 'success')}
                  className="btn-gold"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  <Download size={15} />
                  <span>Download Credential</span>
                </button>
                <button
                  onClick={() => showToast('🔗 Shareable badge link copied!', 'info')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: '#FFFFFF',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  <Share2 size={15} />
                  <span>Share Verification</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
