import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SmartPlannerWizard } from './SmartPlannerWizard';
import { 
  Wallet, 
  Building, 
  Bus, 
  CloudSun, 
  Users, 
  Clock, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Share2, 
  Bookmark, 
  Bot, 
  IndianRupee,
  ShieldCheck,
  TrendingDown,
  Info
} from 'lucide-react';

export const SmartPlannerPage: React.FC = () => {
  const { 
    generatedTrip, 
    plannerInput, 
    generateTrip, 
    setActiveTab, 
    sendAIMessage, 
    showToast, 
    t 
  } = useApp();

  const [saved, setSaved] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState<string>('h10');

  if (!generatedTrip) {
    return (
      <div className="section-spacing container">
        <SmartPlannerWizard />
      </div>
    );
  }

  const { budgetBreakdown, destinationDetails, itinerary, hotels, transport, weatherAlert, crowdSummary } = generatedTrip;

  const handleSaveItinerary = () => {
    setSaved(true);
    showToast('💾 Itinerary saved to your offline travel vault!', 'success');
  };

  const handleShareTrip = () => {
    showToast('🔗 Shareable trip link copied to clipboard!', 'info');
  };

  const handleModifyWithAI = () => {
    sendAIMessage(`Please modify my 2-day itinerary for ${destinationDetails.name} to add more local handicraft workshops.`);
    setActiveTab('ai');
  };

  return (
    <div className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Page Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>AI Multi-Dimensional Optimization</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '10px' }}>
            {t.planner.title}
          </h1>
          <p className="section-subtitle" style={{ margin: 0 }}>
            {t.planner.subtitle}
          </p>
        </div>

        {/* Top 7-Step Interactive Wizard */}
        <SmartPlannerWizard />

        {/* RESULTS DASHBOARD */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          
          {/* Destination Preview Banner Card */}
          <div style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'stretch'
          }}>
            <div style={{ flex: '1 1 320px', minHeight: '180px', position: 'relative' }}>
              <img
                src={destinationDetails.image}
                alt={destinationDetails.name}
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
                backgroundColor: 'rgba(22, 25, 23, 0.75)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                fontSize: '0.72rem',
                fontWeight: 700
              }}>
                📍 {destinationDetails.state}
              </div>
            </div>

            <div style={{ flex: '2 1 360px', padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="badge-status badge-low-crowd" style={{ fontSize: '0.72rem' }}>
                  🟢 {destinationDetails.crowdLevel} Crowd
                </span>
                <span style={{ fontSize: '0.8rem', color: '#B8860B', fontWeight: 700 }}>
                  ⭐ {destinationDetails.rating} Rating
                </span>
              </div>
              <h2 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)', marginBottom: '4px' }}>
                {destinationDetails.name}
              </h2>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.45 }}>
                {destinationDetails.tagline}
              </p>
            </div>
          </div>

          {/* 1. SMART BUDGET BREAKDOWN CARD */}
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
              gap: '12px',
              marginBottom: '24px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(200, 90, 50, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-terracotta)'
                }}>
                  <Wallet size={22} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)' }}>
                    {t.planner.budgetBreakdownTitle}
                  </h2>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    Target Budget: ₹{budgetBreakdown.budget.toLocaleString()} • {plannerInput.travelers} Travelers • {plannerInput.durationDays} Days
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: budgetBreakdown.status === 'within' ? 'var(--accent-green-bg)' : 'var(--alert-red-bg)',
                color: budgetBreakdown.status === 'within' ? 'var(--accent-green)' : 'var(--alert-red)',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}>
                <CheckCircle2 size={16} />
                <span>{budgetBreakdown.status === 'within' ? t.planner.budgetNotice : t.planner.budgetOverNotice}</span>
              </div>
            </div>

            {/* Visual Multi-Segment Bar */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                height: '14px',
                borderRadius: '7px',
                backgroundColor: '#EAE5DC',
                overflow: 'hidden',
                display: 'flex',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <div style={{ width: '22%', backgroundColor: '#4E7D96' }} title="Intercity Travel: ₹800" />
                <div style={{ width: '28%', backgroundColor: '#C85A32' }} title="Hotel: ₹1,200" />
                <div style={{ width: '22%', backgroundColor: '#C5A059' }} title="Food: ₹900" />
                <div style={{ width: '10%', backgroundColor: '#6C8E68' }} title="Local Transport: ₹400" />
                <div style={{ width: '9%', backgroundColor: '#9E6E9B' }} title="Tickets: ₹350" />
                <div style={{ width: '9%', backgroundColor: '#D89E68' }} title="Miscellaneous: ₹300" />
              </div>
            </div>

            {/* 6 Category Tiles */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'var(--bg-surface-elevated)', borderLeft: '4px solid #4E7D96' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>🚆 Intercity Travel</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>₹{budgetBreakdown.intercityTravel}</div>
              </div>
              <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'var(--bg-surface-elevated)', borderLeft: '4px solid #C85A32' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>🏨 Hotel Stay</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>₹{budgetBreakdown.hotel}</div>
              </div>
              <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'var(--bg-surface-elevated)', borderLeft: '4px solid #C5A059' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>🍛 Food & Dining</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>₹{budgetBreakdown.food}</div>
              </div>
              <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'var(--bg-surface-elevated)', borderLeft: '4px solid #6C8E68' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>🚌 Local Transport</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>₹{budgetBreakdown.localTransport}</div>
              </div>
              <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'var(--bg-surface-elevated)', borderLeft: '4px solid #9E6E9B' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>🎟️ Monument Tickets</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>₹{budgetBreakdown.tickets}</div>
              </div>
              <div style={{ padding: '12px', borderRadius: '10px', backgroundColor: 'var(--bg-surface-elevated)', borderLeft: '4px solid #D89E68' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>🛍️ Misc Buffer</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>₹{budgetBreakdown.miscellaneous}</div>
              </div>
            </div>

            {/* Total vs Remaining Footer */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.9rem'
            }}>
              <div>
                <span style={{ color: 'var(--text-secondary)' }}>{t.planner.totalEst}: </span>
                <strong style={{ fontSize: '1.2rem', color: 'var(--charcoal-deep)' }}>₹{budgetBreakdown.totalEstimated.toLocaleString()}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-secondary)' }}>{t.planner.budgetRemaining}: </span>
                <strong style={{ fontSize: '1.2rem', color: 'var(--accent-green)' }}>+₹{budgetBreakdown.remaining.toLocaleString()}</strong>
              </div>
            </div>
          </div>

          {/* 2. WEATHER & CROWD TELEMETRY ROW */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            
            {/* Weather Intelligence Dashboard */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '28px',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(56, 142, 60, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2E7D32'
                }}>
                  <CloudSun size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
                  Weather Intelligence
                </h3>
              </div>

              {/* Live Temp Badge */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--charcoal-deep)' }}>
                  {destinationDetails.weather.temp}°C
                </span>
                <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  {destinationDetails.weather.condition}
                </span>
              </div>

              {/* Weather Stats Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-surface-elevated)',
                marginBottom: '16px',
                fontSize: '0.78rem'
              }}>
                <div>
                  <div style={{ color: 'var(--text-tertiary)' }}>Rain Prob:</div>
                  <strong style={{ color: '#1976D2' }}>{destinationDetails.weather.rainProb}%</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--text-tertiary)' }}>Humidity:</div>
                  <strong>{destinationDetails.weather.humidity}%</strong>
                </div>
                <div>
                  <div style={{ color: 'var(--text-tertiary)' }}>Wind:</div>
                  <strong>{destinationDetails.weather.windSpeed} km/h</strong>
                </div>
              </div>

              {/* Weather Alert Banner */}
              <div style={{
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#E8F5E9',
                border: '1px solid rgba(46, 125, 50, 0.25)',
                fontSize: '0.8rem',
                color: '#1B5E20',
                lineHeight: 1.4
              }}>
                🌦️ <strong>Weather Alert:</strong> {weatherAlert}
              </div>
            </div>

            {/* Crowd Intelligence Dashboard */}
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '28px',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(237, 108, 2, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ED6C02'
                }}>
                  <Users size={20} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)' }}>
                  {t.planner.crowdSectionTitle}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Today’s Status:</span>
                <span className="badge-status badge-low-crowd">
                  🟢 Low Crowd (Optimal)
                </span>
              </div>

              {/* 7-Day Crowd Forecast Bars */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '8px',
                height: '70px',
                marginBottom: '14px',
                padding: '0 4px'
              }}>
                {[
                  { day: 'Mon', height: '30%', color: '#81C784', level: 'Low' },
                  { day: 'Tue', height: '25%', color: '#4CAF50', level: 'Very Low (Best)' },
                  { day: 'Wed', height: '45%', color: '#FFE082', level: 'Moderate' },
                  { day: 'Thu', height: '50%', color: '#FFE082', level: 'Moderate' },
                  { day: 'Fri', height: '75%', color: '#FFB74D', level: 'High' },
                  { day: 'Sat', height: '95%', color: '#EF5350', level: 'Peak' },
                  { day: 'Sun', height: '90%', color: '#EF5350', level: 'Peak' }
                ].map((item, idx) => (
                  <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <div
                      style={{
                        width: '100%',
                        height: item.height,
                        backgroundColor: item.color,
                        borderRadius: '4px 4px 0 0'
                      }}
                      title={`${item.day}: ${item.level}`}
                    />
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>

              {/* Recommended Visiting Window Note */}
              <div style={{
                padding: '12px 14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#FFF8E1',
                border: '1px solid rgba(245, 127, 23, 0.25)',
                fontSize: '0.8rem',
                color: '#7A5E1E',
                lineHeight: 1.4
              }}>
                👥 <strong>Recommended Visiting Time:</strong> Tuesday, 7:00 AM – 10:00 AM (Estimated lowest queue density).
              </div>
            </div>

          </div>

          {/* 3. HOTEL RECOMMENDATIONS & SMART COMPARISON */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '32px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Building size={22} color="var(--brand-terracotta)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                  {t.planner.hotelSectionTitle}
                </h3>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                Prototype Verified Stays • Not a live booking portal
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}>
              {hotels.map((hotel) => {
                const isSelected = selectedHotelId === hotel.id;
                return (
                  <div
                    key={hotel.id}
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      border: `2px solid ${isSelected ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`,
                      backgroundColor: isSelected ? 'var(--brand-terracotta-subtle)' : '#FFFFFF',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <div style={{ height: '140px', position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        onError={(e) => {
                          if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80') {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80';
                          }
                        }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {hotel.bestValueTag && (
                        <div style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-pill)',
                          backgroundColor: 'var(--brand-gold)',
                          color: '#FFFFFF',
                          fontSize: '0.7rem',
                          fontWeight: 700
                        }}>
                          Best Value Pick
                        </div>
                      )}
                    </div>

                    <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--charcoal-deep)' }}>
                          {hotel.name}
                        </h4>
                        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#B8860B' }}>
                          ⭐ {hotel.rating}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                        📍 {hotel.distance}
                      </div>

                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--brand-terracotta)', marginBottom: '10px' }}>
                        ₹{hotel.pricePerNight} <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>/ night</span>
                      </div>

                      {/* Smart Comparison Insight */}
                      {hotel.smartComparisonTip && (
                        <div style={{
                          padding: '8px 10px',
                          borderRadius: '6px',
                          backgroundColor: '#F7F1E3',
                          border: '1px solid rgba(197, 160, 89, 0.3)',
                          fontSize: '0.74rem',
                          color: '#7A5E1E',
                          marginBottom: '12px',
                          lineHeight: 1.35
                        }}>
                          💡 <strong>Smart Tip:</strong> {hotel.smartComparisonTip}
                        </div>
                      )}

                      <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
                        <button
                          onClick={() => {
                            setSelectedHotelId(hotel.id);
                            showToast(`Selected ${hotel.name} for your itinerary!`, 'success');
                          }}
                          style={{
                            flex: 1,
                            padding: '8px',
                            borderRadius: 'var(--radius-pill)',
                            backgroundColor: isSelected ? 'var(--brand-terracotta)' : 'var(--bg-surface-elevated)',
                            color: isSelected ? '#FFFFFF' : 'var(--charcoal-deep)',
                            border: '1px solid var(--border-medium)',
                            fontSize: '0.8rem',
                            fontWeight: 700
                          }}
                        >
                          {isSelected ? '✓ Selected Stay' : 'Select Stay'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 4. LOCAL TRANSPORT COMPARISON TABLE */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '32px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Bus size={22} color="var(--brand-terracotta)" />
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                  {t.planner.transportSectionTitle}
                </h3>
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'var(--accent-green-bg)',
                color: 'var(--accent-green)',
                fontSize: '0.72rem',
                fontWeight: 700
              }}>
                <ShieldCheck size={13} />
                <span>Reference Fare Index • Last Updated: August 2026</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {transport.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--charcoal-deep)', display: 'block' }}>
                      {item.mode}
                    </strong>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      ⏱️ {item.duration} {item.notes && `• ${item.notes}`}
                    </span>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-terracotta)' }}>
                      {item.fareRange}
                    </span>
                    <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-tertiary)' }}>
                      Estimated local fare
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. DAY-BY-DAY SMART VERTICAL TIMELINE */}
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
              marginBottom: '32px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-subtle)'
            }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)' }}>
                  {t.planner.itineraryTitle}
                </h3>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Customized for {destinationDetails.name} • 2 Days / 2 Travelers
                </span>
              </div>

              {/* Action Buttons: Save, Share, Modify with AI */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                  onClick={handleSaveItinerary}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: saved ? 'var(--accent-green-bg)' : 'var(--bg-surface-elevated)',
                    color: saved ? 'var(--accent-green)' : 'var(--charcoal-deep)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  <Bookmark size={15} />
                  <span>{saved ? '✓ Saved' : t.planner.saveTrip}</span>
                </button>

                <button
                  onClick={handleShareTrip}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    color: 'var(--charcoal-deep)',
                    border: '1px solid var(--border-medium)',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  <Share2 size={15} />
                  <span>{t.planner.shareTrip}</span>
                </button>

                <button
                  onClick={handleModifyWithAI}
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  <Bot size={15} />
                  <span>{t.planner.modifyWithAI}</span>
                </button>
              </div>
            </div>

            {/* Itinerary Days Loop */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {itinerary.map((day) => (
                <div key={day.dayNumber}>
                  {/* Day Header Pill */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: 'var(--radius-pill)',
                    backgroundColor: 'var(--charcoal-deep)',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    marginBottom: '20px'
                  }}>
                    <span>DAY {day.dayNumber}:</span>
                    <span style={{ color: 'var(--brand-gold-light)', fontWeight: 500 }}>{day.theme}</span>
                  </div>

                  {/* Vertical Timeline Items */}
                  <div style={{
                    position: 'relative',
                    paddingLeft: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                  }}>
                    {/* Vertical Connector Line */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      bottom: '12px',
                      left: '11px',
                      width: '2px',
                      backgroundColor: '#EAE5DB'
                    }} />

                    {day.activities.map((act, actIdx) => (
                      <div
                        key={actIdx}
                        style={{
                          position: 'relative',
                          backgroundColor: 'var(--bg-surface-elevated)',
                          borderRadius: 'var(--radius-md)',
                          padding: '18px 20px',
                          border: '1px solid var(--border-subtle)'
                        }}
                      >
                        {/* Timeline Pin Node */}
                        <div style={{
                          position: 'absolute',
                          top: '20px',
                          left: '-26px',
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--brand-terracotta)',
                          border: '2px solid #FFFFFF',
                          boxShadow: '0 0 0 2px var(--brand-terracotta)'
                        }} />

                        {/* Top Meta Line: Time & Crowd Badge */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--brand-terracotta)', fontWeight: 700, fontSize: '0.85rem' }}>
                            <Clock size={14} />
                            <span>{act.time}</span>
                            <span style={{ color: 'var(--text-tertiary)' }}>({act.duration})</span>
                          </div>

                          <span className={`badge-status ${act.crowdLevel === 'Low' ? 'badge-low-crowd' : 'badge-moderate-crowd'}`}>
                            {act.crowdLevel === 'Low' ? '🟢 Low Crowd' : '🟡 Moderate'}
                          </span>
                        </div>

                        {/* Activity Title */}
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--charcoal-deep)', marginBottom: '4px' }}>
                          {act.title}
                        </h4>

                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                          📍 {act.location} {act.notes && `• ${act.notes}`}
                        </div>

                        {/* Cost & Weather Suitability Pills */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          flexWrap: 'wrap',
                          fontSize: '0.75rem',
                          borderTop: '1px solid rgba(0,0,0,0.06)',
                          paddingTop: '8px'
                        }}>
                          <span style={{ color: 'var(--charcoal-deep)', fontWeight: 700 }}>
                            💰 Cost: {act.cost === 0 ? 'Free' : `₹${act.cost}`}
                          </span>
                          <span style={{ color: '#2E7D32' }}>
                            🌦️ {act.weatherSuitability}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
