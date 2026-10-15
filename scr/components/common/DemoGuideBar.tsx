import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

export const DemoGuideBar: React.FC = () => {
  const { demoStep, goToDemoStep } = useApp();
  const [collapsed, setCollapsed] = useState(false);

  const demoSteps = [
    { num: 1, title: 'Home & Hero', desc: 'Cinematic Hero, Live Search & Bento Grid' },
    { num: 2, title: 'Explore & India Map', desc: 'Interactive Map & Multi-category Filters' },
    { num: 3, title: 'Chunar Fort Details', desc: 'Verified Heritage & Travel Intelligence' },
    { num: 4, title: 'Start Heritage Quest', desc: 'Gamified GPS Quest with 120m Clue' },
    { num: 5, title: 'GPS Arrival Trigger', desc: 'Simulate Arrival in Archaeological Zone' },
    { num: 6, title: 'Camera Object Scan', desc: 'HUD Carving Recognition Laser Scan' },
    { num: 7, title: 'Quest XP & Micro-Story', desc: '+100 XP Fanfare & 45s Audio Narration' },
    { num: 8, title: 'Plan Trip (Agra ₹5000)', desc: 'Smart Budget, Hotels, Crowd & Itinerary' },
    { num: 9, title: 'AI Guide Weather Alert', desc: 'Itinerary Modification for Rain' },
    { num: 10, title: 'ScamShield Price Alert', desc: 'Voice Detection: ₹250 Asked vs ₹50 Standard' },
    { num: 11, title: 'Hindi Speech Negotiation', desc: 'Live Text-to-Speech Voice Assistance' },
    { num: 12, title: 'Living Culture & Crafts', desc: 'Artisans, Bhadohi Carpets & Madhubani' },
    { num: 13, title: 'Responsible Tourism', desc: 'Conscious Travel Pledge & Credential' }
  ];

  const current = demoSteps.find(s => s.num === demoStep) || demoSteps[0];

  const handleNext = () => {
    if (demoStep < demoSteps.length) {
      goToDemoStep(demoStep + 1);
    }
  };

  const handlePrev = () => {
    if (demoStep > 1) {
      goToDemoStep(demoStep - 1);
    }
  };

  return (
    <aside 
      aria-label="Hackathon Demo Tour Controller"
      style={{
        position: 'fixed',
        bottom: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999,
        width: 'calc(100% - 24px)',
        maxWidth: '900px',
        backgroundColor: 'rgba(22, 25, 23, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
        color: '#FAF7F2',
        transition: 'all 0.3s ease',
        overflow: 'hidden'
      }}
      className="demo-tour-panel"
    >
      {/* Header Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        borderBottom: collapsed ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(200, 90, 50, 0.15)',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'var(--brand-terracotta)',
            color: '#FFFFFF',
            padding: '3px 8px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.7rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            flexShrink: 0
          }}>
            <Sparkles size={11} /> DEMO TOUR
          </span>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            color: 'var(--brand-gold-light)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            Step {demoStep}/{demoSteps.length}: <strong style={{ color: '#FFFFFF' }}>{current.title}</strong>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          <button
            onClick={() => goToDemoStep(1)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: 600
            }}
            title="Reset to Step 1"
          >
            <RotateCcw size={11} /> Reset
          </button>

          <button
            onClick={() => setCollapsed(!collapsed)}
            style={{
              padding: '4px 6px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center'
            }}
            title={collapsed ? "Expand Demo Tour" : "Collapse Demo Tour"}
            aria-label={collapsed ? "Expand Demo Tour" : "Collapse Demo Tour"}
          >
            {collapsed ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>
      </div>

      {/* Expanded Controls */}
      {!collapsed && (
        <div style={{
          padding: '10px 16px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{ minWidth: '240px', flex: '1 1 auto' }}>
            <div style={{ fontSize: '0.78rem', color: '#D5DDD7', marginBottom: '6px' }}>
              {current.desc}
            </div>
            {/* Step pills */}
            <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap' }}>
              {demoSteps.map(s => (
                <button
                  key={s.num}
                  onClick={() => goToDemoStep(s.num)}
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    backgroundColor: s.num === demoStep 
                      ? 'var(--brand-terracotta)' 
                      : s.num < demoStep 
                        ? 'rgba(197, 160, 89, 0.4)' 
                        : 'rgba(255,255,255,0.1)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'var(--transition-fast)'
                  }}
                  title={`Step ${s.num}: ${s.title}`}
                >
                  {s.num}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
            <button
              onClick={handlePrev}
              disabled={demoStep === 1}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: demoStep === 1 ? 'rgba(255,255,255,0.3)' : '#FFFFFF',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: demoStep === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              <ChevronLeft size={13} /> Back
            </button>

            <button
              onClick={handleNext}
              disabled={demoStep === demoSteps.length}
              className="btn-primary"
              style={{
                padding: '6px 14px',
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>Next ({demoStep < demoSteps.length ? demoSteps[demoStep].title : 'Done'})</span>
              <ChevronRight size={13} />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
