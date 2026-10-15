import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Wallet, 
  Building, 
  Bus, 
  CloudSun, 
  Users, 
  Calendar, 
  Sparkles, 
  ArrowRight,
  TrendingDown,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const SmartTravelBento: React.FC = () => {
  const { t, setActiveTab, generateTrip } = useApp();

  return (
    <section className="section-spacing" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Zap size={14} />
            <span>Integrated Travel Intelligence</span>
          </div>
          <h2 className="section-title">{t.smartTravel.title}</h2>
          <p className="section-subtitle">{t.smartTravel.subtitle}</p>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid-bento">
          
          {/* Bento Item 1: Smart Budget (Large Span) */}
          <div 
            onClick={() => {
              generateTrip({ budget: 5000 });
              setActiveTab('planner');
            }}
            className="card-heritage"
            style={{
              padding: '32px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFDF9 100%)'
            }}
          >
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: 'rgba(200, 90, 50, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-terracotta)',
                marginBottom: '20px'
              }}>
                <Wallet size={24} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)' }}>
                  {t.smartTravel.budgetTitle}
                </h3>
                <span className="badge-status badge-low-crowd" style={{ fontSize: '0.7rem' }}>
                  Live Calculator
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                {t.smartTravel.budgetDesc}
              </p>

              {/* Visual Budget Mini Bar */}
              <div style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '8px' }}>
                  <span style={{ fontWeight: 600 }}>Agra Cultural 2-Day (2 People)</span>
                  <strong style={{ color: 'var(--accent-green)' }}>₹3,950 / ₹5,000</strong>
                </div>
                <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#E0DCD3', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '25%', backgroundColor: '#C85A32' }} title="Hotel: ₹1,200" />
                  <div style={{ width: '20%', backgroundColor: '#C5A059' }} title="Food: ₹900" />
                  <div style={{ width: '18%', backgroundColor: '#4E7D96' }} title="Intercity: ₹800" />
                  <div style={{ width: '10%', backgroundColor: '#6C8E68' }} title="Local Transport: ₹400" />
                  <div style={{ width: '8%', backgroundColor: '#9E6E9B' }} title="Tickets: ₹350" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-tertiary)', marginTop: '6px' }}>
                  <span>Buffering: ₹1,050 remaining</span>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 700 }}>✓ Within Target</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand-terracotta)', fontWeight: 700, fontSize: '0.88rem' }}>
              <span>Simulate Custom Budget</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Bento Item 2: Hotel Recommendations */}
          <div 
            onClick={() => setActiveTab('planner')}
            className="card-heritage"
            style={{
              padding: '32px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: 'rgba(197, 160, 89, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-gold-dark)',
                marginBottom: '20px'
              }}>
                <Building size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                {t.smartTravel.hotelTitle}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                {t.smartTravel.hotelDesc}
              </p>

              {/* Mini Smart Insight Pill */}
              <div style={{
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#F7F1E3',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                fontSize: '0.8rem',
                color: '#7A5E1E',
                marginBottom: '16px',
                lineHeight: 1.4
              }}>
                💡 <strong>Smart Comparison:</strong> Hotel B costs ₹200 more per night but reduces daily auto-rickshaw fares by ₹250.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand-gold-dark)', fontWeight: 700, fontSize: '0.88rem' }}>
              <span>View Verified Stays</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Bento Item 3: Local Transport */}
          <div 
            onClick={() => setActiveTab('scamshield')}
            className="card-heritage"
            style={{
              padding: '32px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: 'rgba(46, 125, 50, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-green)',
                marginBottom: '20px'
              }}>
                <Bus size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                {t.smartTravel.transportTitle}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                {t.smartTravel.transportDesc}
              </p>

              {/* Reference Table Preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.78rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 8px', borderRadius: '6px', backgroundColor: 'var(--bg-surface-elevated)' }}>
                  <span>🛺 E-Rickshaw</span>
                  <strong>₹40 – ₹60</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 8px', borderRadius: '6px', backgroundColor: 'var(--bg-surface-elevated)' }}>
                  <span>🛺 Auto-Rickshaw</span>
                  <strong>₹80 – ₹120</strong>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.88rem', marginTop: '16px' }}>
              <span>Check Reference Fares</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Bento Item 4: Weather Intelligence */}
          <div 
            onClick={() => setActiveTab('planner')}
            className="card-heritage"
            style={{
              padding: '32px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: 'rgba(56, 142, 60, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2E7D32',
                marginBottom: '20px'
              }}>
                <CloudSun size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                {t.smartTravel.weatherTitle}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                {t.smartTravel.weatherDesc}
              </p>

              <div style={{
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#E8F5E9',
                border: '1px solid rgba(46, 125, 50, 0.2)',
                fontSize: '0.78rem',
                color: '#1B5E20'
              }}>
                🌦️ <strong>Adaptive Scheduling:</strong> Outdoor monument visits shifted to 7:00 AM if afternoon rain probability exceeds 30%.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#2E7D32', fontWeight: 700, fontSize: '0.88rem', marginTop: '16px' }}>
              <span>Open Weather Timeline</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Bento Item 5: Crowd Intelligence */}
          <div 
            onClick={() => setActiveTab('planner')}
            className="card-heritage"
            style={{
              padding: '32px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: 'rgba(237, 108, 2, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ED6C02',
                marginBottom: '20px'
              }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                {t.smartTravel.crowdTitle}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                {t.smartTravel.crowdDesc}
              </p>

              {/* Weekly Mini Bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '48px', marginBottom: '8px' }}>
                <div style={{ flex: 1, height: '30%', backgroundColor: '#A5D6A7', borderRadius: '4px' }} title="Mon: Low" />
                <div style={{ flex: 1, height: '25%', backgroundColor: '#4CAF50', borderRadius: '4px' }} title="Tue: Very Low (Best)" />
                <div style={{ flex: 1, height: '50%', backgroundColor: '#FFE082', borderRadius: '4px' }} title="Wed: Moderate" />
                <div style={{ flex: 1, height: '55%', backgroundColor: '#FFE082', borderRadius: '4px' }} title="Thu: Moderate" />
                <div style={{ flex: 1, height: '80%', backgroundColor: '#FFAB91', borderRadius: '4px' }} title="Fri: High" />
                <div style={{ flex: 1, height: '95%', backgroundColor: '#EF5350', borderRadius: '4px' }} title="Sat: Peak" />
                <div style={{ flex: 1, height: '85%', backgroundColor: '#EF5350', borderRadius: '4px' }} title="Sun: Peak" />
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                Recommended Window: <strong>Tuesday 7:00 AM – 10:00 AM</strong>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ED6C02', fontWeight: 700, fontSize: '0.88rem', marginTop: '16px' }}>
              <span>Inspect Weekly Predictor</span>
              <ArrowRight size={15} />
            </div>
          </div>

          {/* Bento Item 6: AI Itinerary */}
          <div 
            onClick={() => setActiveTab('ai')}
            className="card-heritage"
            style={{
              padding: '32px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, #FAF7F2 0%, #F5EDE0 100%)',
              border: '1.5px solid rgba(200, 90, 50, 0.25)'
            }}
          >
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #C85A32 0%, #9A3614 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                marginBottom: '20px'
              }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
                {t.smartTravel.itineraryTitle}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                {t.smartTravel.itineraryDesc}
              </p>

              <div style={{
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#FFFFFF',
                fontSize: '0.8rem',
                color: 'var(--charcoal-deep)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                💬 <em>"Modify my 2-day Agra trip because of rain"</em> → Instant dynamic rearrangement.
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand-terracotta)', fontWeight: 700, fontSize: '0.88rem', marginTop: '16px' }}>
              <span>Chat with Heritage AI</span>
              <ArrowRight size={15} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
