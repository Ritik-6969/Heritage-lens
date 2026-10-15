import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { referenceFaresData, negotiationScripts } from '../../data/scamShieldData';
import { 
  ShieldAlert, 
  Mic, 
  Volume2, 
  VolumeX, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  Search, 
  Compass, 
  RotateCcw, 
  ArrowRight,
  Info
} from 'lucide-react';

export const ScamShieldPage: React.FC = () => {
  const { 
    scamDetectedState, 
    startScamShieldVoiceCheck, 
    resetScamShield, 
    submitScamReport, 
    playVoice, 
    stopVoice, 
    isSpeaking, 
    showToast, 
    t 
  } = useApp();

  const [searchCity, setSearchCity] = useState('');
  const [selectedScriptIndex, setSelectedScriptIndex] = useState(0);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);

  // Custom route calculator state
  const [customFrom, setCustomFrom] = useState('Taj Mahal');
  const [customTo, setCustomTo] = useState('Agra Fort');
  const [customAsked, setCustomAsked] = useState<number>(250);
  const [customService, setCustomService] = useState('Auto-rickshaw');

  const filteredFares = referenceFaresData.filter(f => 
    f.city.toLowerCase().includes(searchCity.toLowerCase()) ||
    f.fromLocation.toLowerCase().includes(searchCity.toLowerCase()) ||
    f.toLocation.toLowerCase().includes(searchCity.toLowerCase())
  );

  const activeScript = negotiationScripts[selectedScriptIndex] || negotiationScripts[0];

  const handleSpeakHindi = () => {
    playVoice(activeScript.hindiText, 'hi', 'hindi-neg');
    showToast('🎙️ Speaking Hindi negotiation phrase...', 'info');
  };

  const handleSpeakEnglish = () => {
    playVoice(activeScript.englishText, 'en', 'en-neg');
    showToast('🎙️ Speaking English negotiation phrase...', 'info');
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitScamReport({
      service: customService,
      from: customFrom,
      to: customTo,
      asked: customAsked,
      reference: 50
    });
    setReportSuccess(true);
  };

  return (
    <div className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header Tag */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            backgroundColor: 'rgba(211, 47, 47, 0.1)',
            border: '1px solid rgba(211, 47, 47, 0.3)',
            color: 'var(--alert-red)',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '12px'
          }}>
            <ShieldAlert size={15} />
            <span>Tourist Protection Suite</span>
          </div>

          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '10px' }}>
            ScamShield
          </h1>
          <p className="section-subtitle" style={{ margin: 0 }}>
            {t.scamShieldSection.title} Detect unfair pricing with location-aware telemetry and multilingual negotiation assistance.
          </p>
        </div>

        {/* Offline Status & Integrity Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '12px 20px',
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--accent-green)', fontWeight: 700 }}>
            <ShieldCheck size={16} />
            <span>🟢 {t.scamShieldSection.offlineBadge}</span>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}>
            {t.scamShieldSection.offlineSub}
          </div>
        </div>

        {/* MAIN VOICE SIMULATOR CARD */}
        <div style={{
          backgroundColor: 'var(--charcoal-deep)',
          borderRadius: 'var(--radius-xl)',
          color: '#FAF7F2',
          padding: 'clamp(24px, 4vw, 40px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: 'var(--shadow-lg)',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '28px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                Voice-Activated Price Checker
              </h2>
              <span style={{ fontSize: '0.82rem', color: '#A0ABA2' }}>
                Simulate listening to local driver conversation to verify reference rates.
              </span>
            </div>

            {scamDetectedState === 'idle' ? (
              <button
                onClick={startScamShieldVoiceCheck}
                className="btn-primary"
                style={{
                  backgroundColor: 'var(--brand-terracotta)',
                  padding: '12px 24px',
                  fontSize: '0.9rem'
                }}
              >
                <Mic size={18} />
                <span>🎙️ Start Price Check</span>
              </button>
            ) : (
              <button
                onClick={resetScamShield}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  fontSize: '0.82rem',
                  fontWeight: 600
                }}
              >
                <RotateCcw size={14} /> Reset Simulator
              </button>
            )}
          </div>

          {/* STATE 1: IDLE */}
          {scamDetectedState === 'idle' && (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(200, 90, 50, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'var(--brand-terracotta)'
              }}>
                <Mic size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '8px' }}>
                Ready to Verify Fare
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#A0ABA2', maxWidth: '520px', margin: '0 auto 24px' }}>
                Click "Start Price Check" to simulate real-time route identification from <strong>Taj Mahal</strong> to <strong>Agra Fort</strong>.
              </p>
              <button onClick={startScamShieldVoiceCheck} className="btn-primary">
                Simulate Driver Quote (₹250 Asked)
              </button>
            </div>
          )}

          {/* STATE 2: LISTENING */}
          {scamDetectedState === 'listening' && (
            <div style={{ textAlign: 'center', padding: '40px 20px', animation: 'fadeIn 0.3s ease' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(211, 47, 47, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                color: '#FF5252',
                animation: 'pulseGlow 1.5s infinite'
              }}>
                <Mic size={36} />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', marginBottom: '8px' }}>
                🎙️ Listening for local conversation...
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#A0ABA2', marginBottom: '20px' }}>
                Analyzing detected Hindi/English voice stream and extracting GPS route parameters...
              </p>

              {/* Sound Wave Animation */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                {[14, 28, 22, 36, 18, 30, 16, 24].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: '4px',
                      height: `${h}px`,
                      backgroundColor: '#FF5252',
                      borderRadius: '2px',
                      animation: 'waveOscillate 1s ease-in-out infinite alternate',
                      animationDelay: `${i * 0.12}s`
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STATE 3: OVERCHARGING DETECTED */}
          {scamDetectedState === 'detected' && (
            <div style={{ animation: 'fadeIn 0.4s ease' }}>
              {/* Alert Banner */}
              <div style={{
                backgroundColor: 'rgba(211, 47, 47, 0.18)',
                border: '2px solid #D32F2F',
                borderRadius: 'var(--radius-lg)',
                padding: '20px 24px',
                marginBottom: '28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}>
                <AlertTriangle size={28} color="#FF5252" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FF5252', marginBottom: '4px' }}>
                    ⚠️ {t.scamShieldSection.warningTitle}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#FFFFFF', margin: 0 }}>
                    {t.scamShieldSection.warningDesc} The standard reference fare is <strong>₹50</strong>, but the driver quoted <strong>₹250</strong> (400% higher).
                  </p>
                </div>
              </div>

              {/* Route & Pricing Comparison Breakdown */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '20px',
                marginBottom: '28px'
              }}>
                {/* Location Telemetry */}
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px'
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--brand-gold-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>
                    📍 DETECTED ROUTE TELEMETRY
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem' }}>
                    <div>
                      <span style={{ color: '#A0ABA2' }}>Origin: </span>
                      <strong>Taj Mahal (East Gate)</strong>
                    </div>
                    <div>
                      <span style={{ color: '#A0ABA2' }}>Destination: </span>
                      <strong>Agra Fort Ramparts</strong>
                    </div>
                    <div>
                      <span style={{ color: '#A0ABA2' }}>Vehicle: </span>
                      <span>🛺 Auto-rickshaw (Non-prepaid)</span>
                    </div>
                  </div>
                </div>

                {/* Fare Comparison Numbers */}
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: '#81C784', fontWeight: 700 }}>
                      STANDARD REFERENCE FARE
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#81C784' }}>
                      ₹50
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#A0ABA2' }}>
                      (Brackets: ₹40–₹60)
                    </span>
                  </div>

                  <div style={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.3)' }}>
                    VS
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: '#FF5252', fontWeight: 700 }}>
                      QUOTED ASKED FARE
                    </div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FF5252' }}>
                      ₹250
                    </div>
                    <span style={{ fontSize: '0.7rem', color: '#FF8A80', fontWeight: 700 }}>
                      +400% Discrepancy
                    </span>
                  </div>
                </div>
              </div>

              {/* BILINGUAL NEGOTIATION ASSISTANT */}
              <div style={{
                backgroundColor: 'rgba(200, 90, 50, 0.15)',
                border: '1.5px solid rgba(200, 90, 50, 0.4)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                marginBottom: '28px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Volume2 size={20} color="var(--brand-gold)" />
                    <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF' }}>
                      Multilingual Negotiation Assistant
                    </h4>
                  </div>

                  <span style={{ fontSize: '0.75rem', color: 'var(--brand-gold-light)', fontWeight: 600 }}>
                    Select scripted phrase:
                  </span>
                </div>

                {/* Script selector tabs */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {negotiationScripts.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedScriptIndex(idx)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: selectedScriptIndex === idx ? 'var(--brand-terracotta)' : 'rgba(255,255,255,0.08)',
                        color: '#FFFFFF',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                    >
                      {s.situation}
                    </button>
                  ))}
                </div>

                {/* Phrase Display Cards */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  {/* Hindi Card */}
                  <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--brand-gold-light)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                      🇮🇳 HINDI SCRIPT (NATIVE PHRASE)
                    </div>
                    <div style={{ fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 600, marginBottom: '6px', lineHeight: 1.4 }}>
                      "{activeScript.hindiText}"
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#A0ABA2', fontStyle: 'italic', marginBottom: '12px' }}>
                      Phonetic: {activeScript.hindiPhonetic}
                    </div>

                    <button
                      onClick={handleSpeakHindi}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'var(--brand-terracotta)',
                        color: '#FFFFFF',
                        fontSize: '0.82rem',
                        fontWeight: 700
                      }}
                    >
                      <Volume2 size={15} />
                      <span>🎙️ Speak Hindi for Me</span>
                    </button>
                  </div>

                  {/* English Card */}
                  <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--brand-gold-light)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px' }}>
                      🌐 ENGLISH SCRIPT
                    </div>
                    <div style={{ fontSize: '1.05rem', color: '#FFFFFF', fontWeight: 500, marginBottom: '22px', lineHeight: 1.4 }}>
                      "{activeScript.englishText}"
                    </div>

                    <button
                      onClick={handleSpeakEnglish}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        color: '#FFFFFF',
                        fontSize: '0.82rem',
                        fontWeight: 700
                      }}
                    >
                      <Volume2 size={15} />
                      <span>🎙️ Speak English for Me</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Report or Continue */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setReportModalOpen(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '12px 22px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'rgba(211, 47, 47, 0.85)',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    fontWeight: 700
                  }}
                >
                  <FileText size={16} />
                  <span>Report Overcharging Issue</span>
                </button>

                <button
                  onClick={resetScamShield}
                  className="btn-secondary"
                  style={{ padding: '12px 22px', fontSize: '0.88rem' }}
                >
                  <span>Continue Exploring</span>
                </button>
              </div>
            </div>
          )}

          {/* STATE 4: REPORTED */}
          {scamDetectedState === 'reported' && (
            <div style={{
              backgroundColor: 'rgba(46, 125, 50, 0.2)',
              border: '1.5px solid var(--accent-green)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              textAlign: 'center',
              animation: 'fadeIn 0.3s ease'
            }}>
              <CheckCircle2 size={36} color="#81C784" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '6px' }}>
                Report Submitted for Review
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#C2CCC5', maxWidth: '520px', margin: '0 auto 16px' }}>
                {t.scamShieldSection.reportSubmitted}
              </p>
              <button
                onClick={resetScamShield}
                className="btn-primary"
                style={{ padding: '8px 20px', fontSize: '0.85rem' }}
              >
                Done
              </button>
            </div>
          )}

        </div>

        {/* REFERENCE RATES INDEX TABLE ACROSS CITIES */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: '32px',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '24px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                Offline Verified Reference Rates Index
              </h3>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Verified municipal transport brackets to protect tourists across major heritage circuits.
              </span>
            </div>

            {/* City search filter */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--bg-surface-elevated)',
              padding: '8px 14px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--border-medium)'
            }}>
              <Search size={16} color="var(--brand-terracotta)" />
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Filter by city (e.g. Agra, Varanasi, Jaipur)..."
                style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredFares.map((fare) => (
              <div
                key={fare.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                      backgroundColor: 'var(--brand-terracotta-subtle)',
                      color: 'var(--brand-terracotta)',
                      fontSize: '0.7rem',
                      fontWeight: 800
                    }}>
                      {fare.city}
                    </span>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--charcoal-deep)' }}>
                      {fare.fromLocation} → {fare.toLocation}
                    </strong>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    🛺 {fare.service} • Source: {fare.sourceAuthority}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--charcoal-deep)' }}>
                    {fare.referenceFareRange}
                  </div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>
                    Verified Reference Fare
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Disclaimer */}
          <div style={{
            marginTop: '24px',
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: '#F7F4EE',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '8px'
          }}>
            <Info size={16} color="var(--brand-gold-dark)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>
              {t.scamShieldSection.disclaimer}
            </span>
          </div>
        </div>

      </div>

      {/* REPORT SUBMISSION MODAL */}
      {reportModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(22, 25, 23, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '32px',
            maxWidth: '540px',
            width: '100%',
            boxShadow: 'var(--shadow-lg)',
            animation: 'fadeIn 0.3s ease'
          }}>
            <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
              {t.scamShieldSection.reportTitle}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Help improve fair pricing index transparency for fellow cultural travelers.
            </p>

            <form onSubmit={handleReportSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--charcoal-deep)', display: 'block', marginBottom: '4px' }}>
                  Service Type:
                </label>
                <input
                  type="text"
                  value={customService}
                  onChange={(e) => setCustomService(e.target.value)}
                  style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-medium)' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--charcoal-deep)', display: 'block', marginBottom: '4px' }}>
                    Origin Location:
                  </label>
                  <input
                    type="text"
                    value={customFrom}
                    onChange={(e) => setCustomFrom(e.target.value)}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-medium)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--charcoal-deep)', display: 'block', marginBottom: '4px' }}>
                    Destination:
                  </label>
                  <input
                    type="text"
                    value={customTo}
                    onChange={(e) => setCustomTo(e.target.value)}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-medium)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--charcoal-deep)', display: 'block', marginBottom: '4px' }}>
                    Amount Asked (INR):
                  </label>
                  <input
                    type="number"
                    value={customAsked}
                    onChange={(e) => setCustomAsked(Number(e.target.value))}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-medium)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--charcoal-deep)', display: 'block', marginBottom: '4px' }}>
                    Reference Fare:
                  </label>
                  <input
                    type="text"
                    value="₹50 (Reference)"
                    disabled
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-surface-elevated)' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--charcoal-deep)', display: 'block', marginBottom: '4px' }}>
                  Evidence Source:
                </label>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', padding: '8px', backgroundColor: 'var(--bg-surface-elevated)', borderRadius: '6px' }}>
                  🎙️ Simulated voice audio snippet logged
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={() => setReportModalOpen(false)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.85rem'
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
