import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TripPlannerInput, DestinationCategory } from '../../types';
import { destinationsData } from '../../data/destinationsData';
import { 
  MapPin, 
  Users, 
  Calendar, 
  IndianRupee, 
  Heart, 
  Building, 
  Bus, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2
} from 'lucide-react';

export const SmartPlannerWizard: React.FC = () => {
  const { plannerInput, setPlannerInput, generateTrip, t } = useApp();
  const [currentStep, setCurrentStep] = useState<number>(1);

  const interestOptions: DestinationCategory[] = [
    'Heritage',
    'Culture',
    'Art & Crafts',
    'Food',
    'Festivals',
    'Nature'
  ];

  const stayOptions: { key: 'Budget' | 'Comfort' | 'Premium'; label: string; desc: string; price: string }[] = [
    { key: 'Budget', label: 'Budget Stay', desc: 'Homestays, heritage havelis & eco lodges', price: '₹500–₹800/night' },
    { key: 'Comfort', label: 'Comfort Heritage', desc: 'Courtyard boutique hotels with curated dining', price: '₹800–₹1,500/night' },
    { key: 'Premium', label: 'Royal Experiential', desc: 'Palace suites & premium river retreats', price: '₹1,500+/night' }
  ];

  const transportOptions: { key: 'Public Transport' | 'Taxi' | 'Mixed' | 'Walking Friendly'; label: string; desc: string }[] = [
    { key: 'Public Transport', label: 'Public & E-Rickshaws', desc: 'Eco-friendly and highly economical' },
    { key: 'Mixed', label: 'Mixed Smart Travel', desc: 'Auto for short hops + walking for lanes' },
    { key: 'Walking Friendly', label: 'Walking & Heritage Trail', desc: 'Scenic pedestrian routes' },
    { key: 'Taxi', label: 'Private AC Cab', desc: 'Direct point-to-point comfort' }
  ];

  const toggleInterest = (interest: DestinationCategory) => {
    setPlannerInput(prev => {
      const exists = prev.interests.includes(interest);
      const updated = exists 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updated.length ? updated : ['Heritage'] };
    });
  };

  const handleGenerate = () => {
    generateTrip();
  };

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 'var(--radius-xl)',
      padding: '32px',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)',
      marginBottom: '40px'
    }}>
      {/* Wizard Step Progress Tracker */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '28px',
        position: 'relative'
      }}>
        {[1, 2, 3, 4, 5, 6, 7].map((step) => (
          <div
            key={step}
            onClick={() => setCurrentStep(step)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              zIndex: 2
            }}
          >
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: currentStep === step 
                ? 'var(--brand-terracotta)' 
                : currentStep > step 
                  ? 'var(--accent-green)' 
                  : 'var(--bg-surface-elevated)',
              color: currentStep >= step ? '#FFFFFF' : 'var(--text-tertiary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.85rem',
              border: `2px solid ${currentStep === step ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`,
              transition: 'var(--transition-fast)'
            }}>
              {currentStep > step ? '✓' : step}
            </div>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: currentStep === step ? 700 : 500,
              color: currentStep === step ? 'var(--brand-terracotta)' : 'var(--text-tertiary)',
              marginTop: '4px',
              display: 'none'
            }} className="step-label-mobile">
              Step {step}
            </span>
          </div>
        ))}

        {/* Step Connector Line */}
        <div style={{
          position: 'absolute',
          top: '18px',
          left: '20px',
          right: '20px',
          height: '2px',
          backgroundColor: '#EAE5DB',
          zIndex: 1
        }} />
      </div>

      {/* Dynamic Step Content */}
      <div style={{ minHeight: '260px' }}>
        
        {/* STEP 1: Destination */}
        {currentStep === 1 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <MapPin size={20} color="var(--brand-terracotta)" />
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                Step 01: Select Your Cultural Destination
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Choose a verified historical circuit or enter your custom city.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '12px'
            }}>
              {destinationsData.slice(0, 6).map((dest) => {
                const isSelected = plannerInput.destination.toLowerCase().includes(dest.name.toLowerCase()) || dest.name.toLowerCase().includes(plannerInput.destination.toLowerCase());
                return (
                  <div
                    key={dest.id}
                    onClick={() => setPlannerInput(prev => ({ ...prev, destination: dest.name }))}
                    style={{
                      padding: '10px',
                      borderRadius: 'var(--radius-md)',
                      border: `1.5px solid ${isSelected ? 'var(--brand-terracotta)' : 'var(--border-medium)'}`,
                      backgroundColor: isSelected ? 'var(--brand-terracotta-subtle)' : '#FFFFFF',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <img
                      src={dest.image}
                      alt={dest.name}
                      onError={(e) => {
                        if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80') {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80';
                        }
                      }}
                      style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--charcoal-deep)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {dest.name}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {dest.location}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Travelers */}
        {currentStep === 2 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Users size={20} color="var(--brand-terracotta)" />
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                Step 02: Number of Travelers
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              We scale hotel room occupancy and local auto/rickshaw sharing parameters.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[1, 2, 3, 4, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => setPlannerInput(prev => ({ ...prev, travelers: num }))}
                  style={{
                    flex: '1 1 100px',
                    padding: '24px 16px',
                    borderRadius: 'var(--radius-lg)',
                    border: `2px solid ${plannerInput.travelers === num ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`,
                    backgroundColor: plannerInput.travelers === num ? 'var(--brand-terracotta-subtle)' : '#FFFFFF',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: plannerInput.travelers === num ? 'var(--brand-terracotta)' : 'var(--charcoal-deep)' }}>
                    {num}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {num === 1 ? 'Solo Traveler' : num === 2 ? 'Pair / Couple' : `${num} Travelers`}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Duration */}
        {currentStep === 3 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Calendar size={20} color="var(--brand-terracotta)" />
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                Step 03: Trip Duration
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              How many days would you like to explore?
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[1, 2, 3, 5].map((days) => (
                <button
                  key={days}
                  onClick={() => setPlannerInput(prev => ({ ...prev, durationDays: days }))}
                  style={{
                    flex: '1 1 120px',
                    padding: '24px 16px',
                    borderRadius: 'var(--radius-lg)',
                    border: `2px solid ${plannerInput.durationDays === days ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`,
                    backgroundColor: plannerInput.durationDays === days ? 'var(--brand-terracotta-subtle)' : '#FFFFFF',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: plannerInput.durationDays === days ? 'var(--brand-terracotta)' : 'var(--charcoal-deep)' }}>
                    {days} {days === 1 ? 'Day' : 'Days'}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {days === 1 ? 'Day Trip' : days === 2 ? 'Weekend Immersion' : 'Extended Circuit'}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Budget */}
        {currentStep === 4 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <IndianRupee size={20} color="var(--brand-terracotta)" />
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                Step 04: Total Budget Target (INR)
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Set your target wallet ceiling. We ensure zero overspending.
            </p>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Selected Target Budget:</span>
                <strong style={{ fontSize: '1.6rem', color: 'var(--brand-terracotta)' }}>₹{plannerInput.budget.toLocaleString()}</strong>
              </div>
              <input
                type="range"
                min="2000"
                max="25000"
                step="500"
                value={plannerInput.budget}
                onChange={(e) => setPlannerInput(prev => ({ ...prev, budget: Number(e.target.value) }))}
                style={{ width: '100%', height: '8px', accentColor: 'var(--brand-terracotta)', cursor: 'pointer' }}
              />
            </div>

            {/* Quick Preset Buttons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[3000, 5000, 8000, 12000, 20000].map((b) => (
                <button
                  key={b}
                  onClick={() => setPlannerInput(prev => ({ ...prev, budget: b }))}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid var(--border-medium)',
                    backgroundColor: plannerInput.budget === b ? 'var(--charcoal-deep)' : 'var(--bg-surface-elevated)',
                    color: plannerInput.budget === b ? '#FFFFFF' : 'var(--charcoal-deep)',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}
                >
                  ₹{b.toLocaleString()}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: Interests */}
        {currentStep === 5 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Heart size={20} color="var(--brand-terracotta)" />
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                Step 05: Your Cultural Interests
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Select one or more experiences to tailor the itinerary activities.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              {interestOptions.map((opt) => {
                const isSelected = plannerInput.interests.includes(opt);
                return (
                  <div
                    key={opt}
                    onClick={() => toggleInterest(opt)}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-md)',
                      border: `1.5px solid ${isSelected ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`,
                      backgroundColor: isSelected ? 'var(--brand-terracotta-subtle)' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <CheckCircle2 size={18} color={isSelected ? 'var(--brand-terracotta)' : '#C0C7C2'} />
                    <span style={{ fontSize: '0.9rem', fontWeight: isSelected ? 700 : 500, color: 'var(--charcoal-deep)' }}>
                      {opt}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: Stay Preference */}
        {currentStep === 6 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Building size={20} color="var(--brand-terracotta)" />
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                Step 06: Accommodation Style
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Select your comfort bracket. All suggestions are verified prototype recommendations.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {stayOptions.map((st) => (
                <div
                  key={st.key}
                  onClick={() => setPlannerInput(prev => ({ ...prev, stayPreference: st.key }))}
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-lg)',
                    border: `2px solid ${plannerInput.stayPreference === st.key ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`,
                    backgroundColor: plannerInput.stayPreference === st.key ? 'var(--brand-terracotta-subtle)' : '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--charcoal-deep)' }}>
                      {st.label}
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-gold-dark)' }}>
                      {st.price}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 7: Transport Preference */}
        {currentStep === 7 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Bus size={20} color="var(--brand-terracotta)" />
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)' }}>
                Step 07: Mobility & Transport Style
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              How do you prefer moving between heritage clusters?
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
              {transportOptions.map((tr) => (
                <div
                  key={tr.key}
                  onClick={() => setPlannerInput(prev => ({ ...prev, transportPreference: tr.key }))}
                  style={{
                    padding: '18px',
                    borderRadius: 'var(--radius-lg)',
                    border: `2px solid ${plannerInput.transportPreference === tr.key ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`,
                    backgroundColor: plannerInput.transportPreference === tr.key ? 'var(--brand-terracotta-subtle)' : '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-deep)', marginBottom: '4px' }}>
                    {tr.label}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                    {tr.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Navigation Buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '28px',
        paddingTop: '20px',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <button
          onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
          disabled={currentStep === 1}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 18px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border-medium)',
            backgroundColor: '#FFFFFF',
            fontSize: '0.88rem',
            fontWeight: 600,
            color: currentStep === 1 ? 'var(--text-tertiary)' : 'var(--charcoal-deep)',
            cursor: currentStep === 1 ? 'not-allowed' : 'pointer'
          }}
        >
          <ChevronLeft size={16} /> Back
        </button>

        {currentStep < 7 ? (
          <button
            onClick={() => setCurrentStep(prev => Math.min(7, prev + 1))}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '0.88rem' }}
          >
            <span>Next Step</span>
            <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={handleGenerate}
            className="btn-gold"
            style={{ padding: '12px 28px', fontSize: '0.95rem' }}
          >
            <Sparkles size={16} />
            <span>Generate Smart Trip</span>
          </button>
        )}
      </div>
    </div>
  );
};
