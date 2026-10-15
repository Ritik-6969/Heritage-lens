import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Award, 
  Search, 
  MapPin, 
  Camera, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  ShieldAlert,
  Play
} from 'lucide-react';

export const HeritageQuestTeaser: React.FC = () => {
  const { t, setActiveTab, userLevel, userXp, badges } = useApp();

  const questSteps = [
    { icon: Search, title: 'Find Clues', desc: 'Decode cryptic poetic inscriptions on fort bastions' },
    { icon: MapPin, title: 'Explore Locations', desc: 'Simulate GPS approach into archaeological quadrants' },
    { icon: Camera, title: 'Scan Objects', desc: 'Align ancient 11th-century stone carvings in HUD camera' },
    { icon: BookOpen, title: 'Unlock Stories', desc: 'Listen to authentic 45-second micro-narrations' },
    { icon: Sparkles, title: 'Earn Explorer XP', desc: 'Level up your badge ranks and unlock master mysteries' }
  ];

  return (
    <section className="section-spacing" style={{
      backgroundColor: '#FAF7F2',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        {/* Card Container with Cinematic Heritage Vibe */}
        <div style={{
          background: 'linear-gradient(135deg, #1C2420 0%, #121614 100%)',
          borderRadius: 'var(--radius-xl)',
          color: '#FAF7F2',
          padding: 'clamp(32px, 5vw, 64px)',
          border: '1px solid rgba(197, 160, 89, 0.3)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
          position: 'relative'
        }}>
          
          {/* Top Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            backgroundColor: 'rgba(197, 160, 89, 0.2)',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            color: 'var(--brand-gold-light)',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '20px'
          }}>
            <Award size={15} color="var(--brand-gold)" />
            <span>{t.questSection.tag}</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '48px'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontFamily: 'var(--font-serif)',
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '16px'
              }}>
                Don’t just visit history. <br />
                <span style={{ color: 'var(--brand-gold)' }}>Solve it.</span>
              </h2>

              <p style={{
                fontSize: '1.05rem',
                color: '#C2CCC5',
                lineHeight: 1.6,
                marginBottom: '28px'
              }}>
                {t.questSection.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveTab('quest')}
                  className="btn-gold"
                  style={{ padding: '14px 30px', fontSize: '1rem' }}
                >
                  <Play size={16} fill="#FFFFFF" />
                  <span>{t.questSection.ctaBtn}</span>
                </button>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  color: 'var(--brand-gold-light)'
                }}>
                  <Sparkles size={16} />
                  <span>Level {userLevel} • {userXp} XP</span>
                </div>
              </div>
            </div>

            {/* Gamification Trophy Showcase Preview */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '24px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-gold-light)', letterSpacing: '0.06em' }}>
                  {t.questSection.badgesTitle}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#A0ABA2' }}>
                  5/7 Mastered
                </span>
              </div>

              {/* Badges Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
                marginBottom: '20px'
              }}>
                {badges.slice(0, 4).map((badge) => (
                  <div
                    key={badge.id}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px',
                      padding: '12px 6px',
                      textAlign: 'center',
                      border: '1px solid rgba(197, 160, 89, 0.25)'
                    }}
                    title={badge.description}
                  >
                    <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>{badge.icon}</div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#FFFFFF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {badge.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Active Quest Card Preview */}
              <div style={{
                backgroundColor: 'rgba(200, 90, 50, 0.2)',
                border: '1px solid rgba(200, 90, 50, 0.4)',
                borderRadius: '12px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#FFAB91', fontWeight: 700, textTransform: 'uppercase' }}>
                    Active Quest #1 • Chunar Fort
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>
                    The Mystery of the Queen
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#C2CCC5' }}>
                    📍 120m away • ⭐ +100 XP
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('quest')}
                  style={{
                    backgroundColor: 'var(--brand-terracotta)',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}
                >
                  Play
                </button>
              </div>
            </div>
          </div>

          {/* 5 Core Steps Workflow */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            {questSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(197, 160, 89, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-gold)',
                    flexShrink: 0
                  }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '2px' }}>
                      {step.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#A0ABA2', lineHeight: 1.35 }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
