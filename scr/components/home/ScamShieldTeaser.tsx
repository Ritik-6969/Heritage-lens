import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldAlert, Mic, AlertTriangle, ArrowRight, Volume2, ShieldCheck } from 'lucide-react';

export const ScamShieldTeaser: React.FC = () => {
  const { t, setActiveTab, startScamShieldVoiceCheck } = useApp();

  const handleTryScamShield = () => {
    setActiveTab('scamshield');
    startScamShieldVoiceCheck();
  };

  return (
    <section className="section-spacing" style={{
      backgroundColor: 'var(--charcoal-deep)',
      color: '#FAF7F2',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle warning glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200, 90, 50, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Column: Copy & Value Proposition */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              backgroundColor: 'rgba(211, 47, 47, 0.15)',
              border: '1px solid rgba(211, 47, 47, 0.3)',
              color: '#FF8A80',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              <ShieldAlert size={15} />
              <span>{t.scamShieldSection.tag}</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'var(--font-serif)',
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '18px'
            }}>
              {t.scamShieldSection.title}
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: '#D5DDD7',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}>
              {t.scamShieldSection.description}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={handleTryScamShield}
                className="btn-primary"
                style={{
                  backgroundColor: 'var(--brand-terracotta)',
                  padding: '14px 28px',
                  fontSize: '0.98rem'
                }}
              >
                <Mic size={18} />
                <span>{t.scamShieldSection.ctaBtn}</span>
              </button>

              <button
                onClick={() => setActiveTab('scamshield')}
                style={{
                  color: 'var(--brand-gold-light)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 600,
                  fontSize: '0.92rem'
                }}
              >
                <span>Browse Offline City Reference Fares</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Offline Badge Note */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginTop: '24px',
              fontSize: '0.78rem',
              color: '#A0ABA2'
            }}>
              <ShieldCheck size={14} color="#81C784" />
              <span>{t.scamShieldSection.offlineSub}</span>
            </div>
          </div>

          {/* Right Column: Interactive ScamShield Simulation Card */}
          <div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '28px',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)'
            }}>
              {/* Card Header with Waveform */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '18px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(211, 47, 47, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF5252'
                  }}>
                    <Mic size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF' }}>
                      ScamShield Voice Engine
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#81C784' }}>
                      🟢 Taj Mahal → Agra Fort Detection
                    </div>
                  </div>
                </div>

                {/* Animated Sound Waveform Bars */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  {[12, 24, 18, 28, 14, 22, 10].map((h, i) => (
                    <div
                      key={i}
                      style={{
                        width: '3px',
                        height: `${h}px`,
                        backgroundColor: '#FF5252',
                        borderRadius: '2px',
                        animation: 'waveOscillate 1.2s ease-in-out infinite alternate',
                        animationDelay: `${i * 0.15}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Detected Fare Metrics */}
              <div style={{
                backgroundColor: 'rgba(211, 47, 47, 0.1)',
                border: '1.5px solid rgba(211, 47, 47, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FF5252', fontWeight: 800, fontSize: '0.82rem', marginBottom: '10px' }}>
                  <AlertTriangle size={16} />
                  <span>⚠️ POSSIBLE OVERCHARGING DETECTED</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85rem' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.72rem', color: '#A0ABA2' }}>Reference Fare:</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#81C784' }}>₹50</div>
                  </div>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '10px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.72rem', color: '#A0ABA2' }}>Asked Fare:</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FF5252' }}>₹250 <span style={{ fontSize: '0.75rem', color: '#FF8A80' }}>(+400%)</span></div>
                  </div>
                </div>
              </div>

              {/* Multilingual Negotiation Pill */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                borderRadius: 'var(--radius-md)',
                padding: '14px',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--brand-gold-light)', fontWeight: 700, marginBottom: '4px' }}>
                  HINDI NEGOTIATION ASSISTANT:
                </div>
                <div style={{ fontSize: '0.9rem', color: '#FFFFFF', fontStyle: 'italic' }}>
                  "भैया, इस रास्ते का सामान्य किराया ₹50 है। क्या आप ₹50 में चलेंगे?"
                </div>
              </div>

              <button
                onClick={handleTryScamShield}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Volume2 size={16} />
                <span>Launch Live Speech Simulator</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
