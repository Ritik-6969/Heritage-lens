import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { questsData, teamMembers } from '../../data/questsData';
import { Quest, Badge } from '../../types';
import { 
  Award, 
  Sparkles, 
  MapPin, 
  Camera, 
  Play, 
  Pause, 
  Volume2, 
  CheckCircle2, 
  Lock, 
  Download, 
  Users, 
  HelpCircle, 
  ShieldCheck, 
  RotateCcw,
  Compass,
  ArrowRight,
  Eye
} from 'lucide-react';

export const HeritageQuestPage: React.FC = () => {
  const { 
    userLevel, 
    userXp, 
    badges, 
    activeQuest, 
    setActiveQuest, 
    gpsDistance, 
    gpsReached, 
    simulateGpsApproach, 
    cameraScanning, 
    cameraVerified, 
    runCameraScan, 
    questCompleted, 
    completeActiveQuest, 
    puzzleSolved, 
    solvePuzzle, 
    playVoice, 
    stopVoice, 
    isSpeaking, 
    showToast, 
    t 
  } = useApp();

  const [scannerOpen, setScannerOpen] = useState(false);
  const [puzzleSelectedOption, setPuzzleSelectedOption] = useState<string>('');
  const [offlineDownloaded, setOfflineDownloaded] = useState(true);
  const [activeLang, setActiveLang] = useState<'en' | 'hi'>('en');
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  const handleSelectQuest = (q: Quest) => {
    if (!q.isUnlocked) {
      showToast('🔒 This quest is locked. Complete previous mysteries to unlock!', 'warning');
      return;
    }
    setActiveQuest(q);
    showToast(`🎯 Switched active quest to: ${q.title}`, 'info');
  };

  const handleOpenScanner = () => {
    setScannerOpen(true);
  };

  const handleScanAction = () => {
    runCameraScan();
    setTimeout(() => {
      setScannerOpen(false);
      completeActiveQuest();
    }, 2400);
  };

  const handleListenStory = () => {
    if (isSpeaking) {
      stopVoice();
    } else {
      const textToSpeak = activeLang === 'hi' 
        ? activeQuest.microStory.narrationTextHi 
        : activeQuest.microStory.narrationText;
      playVoice(textToSpeak, activeLang, 'micro-story');
      showToast(`🎧 Playing 45-second micro-story in ${activeLang === 'hi' ? 'Hindi' : 'English'}...`, 'info');
    }
  };

  const handlePuzzleSubmit = () => {
    if (!puzzleSelectedOption) {
      showToast('Please select one of the symbols first.', 'warning');
      return;
    }
    const option = activeQuest.nextPuzzle.options.find(o => o.id === puzzleSelectedOption);
    if (option) {
      solvePuzzle(option.isCorrect);
    }
  };

  return (
    <div className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="section-tag" style={{ backgroundColor: 'rgba(197, 160, 89, 0.15)', color: 'var(--brand-gold-dark)' }}>
            <Award size={14} color="var(--brand-gold)" />
            <span>Gamified Archaeological Mystery Platform</span>
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '8px' }}>
            Heritage Quest
          </h1>
          <p className="section-subtitle" style={{ margin: 0 }}>
            "Don’t just visit history. Solve it." Discover location-based riddles, scan artifacts, and earn explorer credentials.
          </p>
        </div>

        {/* TOP STATUS BAR: Level, XP Progress Bar, Badges, Offline & Team Mode */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: '28px 32px',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '36px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '20px'
          }}>
            {/* User Level and Avatar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.6rem',
                color: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(184, 134, 11, 0.35)'
              }}>
                🧭
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)' }}>
                    Level {userLevel} Heritage Hunter
                  </h3>
                  <span className="badge-status badge-gold" style={{ fontSize: '0.72rem' }}>
                    Rank #12 in Region
                  </span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Total XP Earned: <strong style={{ color: 'var(--brand-terracotta)' }}>{userXp} XP</strong> (Next Level at {userLevel * 200} XP)
                </div>
              </div>
            </div>

            {/* Actions: Team Mode & Offline Mode */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setTeamModalOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.82rem',
                  fontWeight: 600
                }}
              >
                <Users size={15} color="var(--brand-terracotta)" />
                <span>Play with Friends</span>
              </button>

              <button
                onClick={() => {
                  setOfflineDownloaded(true);
                  showToast('📥 Quest package & 3D models stored offline!', 'success');
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--accent-green-bg)',
                  color: 'var(--accent-green)',
                  border: '1px solid rgba(46, 125, 50, 0.2)',
                  fontSize: '0.82rem',
                  fontWeight: 700
                }}
              >
                <Download size={14} />
                <span>🟢 {t.questSection.downloadedBadge}</span>
              </button>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              <span>Explorer Progression</span>
              <span>{userXp % 200} / 200 XP to Level {userLevel + 1}</span>
            </div>
            <div style={{ height: '10px', borderRadius: '5px', backgroundColor: '#EAE5DB', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${((userXp % 200) / 200) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #C85A32 0%, #D4AF37 100%)',
                  borderRadius: '5px',
                  transition: 'width 0.5s ease'
                }}
              />
            </div>
          </div>

          {/* Badges Grid */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.06em', marginBottom: '12px' }}>
              Explorer Badges
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '10px'
            }}>
              {badges.map((badge) => (
                <div
                  key={badge.id}
                  style={{
                    padding: '10px 8px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: badge.unlocked ? 'var(--bg-surface-elevated)' : 'rgba(0,0,0,0.02)',
                    border: `1px solid ${badge.unlocked ? 'rgba(197, 160, 89, 0.4)' : 'rgba(0,0,0,0.06)'}`,
                    textAlign: 'center',
                    opacity: badge.unlocked ? 1 : 0.45
                  }}
                  title={badge.description}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '2px' }}>{badge.icon}</div>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--charcoal-deep)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {badge.name}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: badge.unlocked ? 'var(--accent-green)' : 'var(--text-tertiary)' }}>
                    {badge.unlocked ? '✓ Unlocked' : '🔒 Locked'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2-COLUMN MAIN ACTIVE QUEST VIEW */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 380px) 1fr',
          gap: '32px',
          alignItems: 'start'
        }} className="quest-grid-layout">
          
          {/* LEFT: Nearby Quests List */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '24px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>
              {t.questSection.nearbyTitle}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {questsData.map((q) => {
                const isCurrent = activeQuest.id === q.id;
                return (
                  <div
                    key={q.id}
                    onClick={() => handleSelectQuest(q)}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-lg)',
                      border: `2px solid ${isCurrent ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`,
                      backgroundColor: isCurrent ? 'var(--brand-terracotta-subtle)' : '#FFFFFF',
                      cursor: q.isUnlocked ? 'pointer' : 'not-allowed',
                      opacity: q.isUnlocked ? 1 : 0.6,
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '10px'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-terracotta)' }}>
                        📍 {q.destinationName}
                      </div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--charcoal-deep)', marginBottom: '4px' }}>
                        {q.title}
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                        <span>📍 {q.initialDistanceMeters}m away</span>
                        <span>•</span>
                        <span style={{ color: 'var(--brand-gold-dark)', fontWeight: 700 }}>⭐ +{q.xpReward} XP</span>
                      </div>
                    </div>

                    <div>
                      {q.isUnlocked ? (
                        <span style={{
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-pill)',
                          backgroundColor: isCurrent ? 'var(--brand-terracotta)' : 'var(--bg-surface-elevated)',
                          color: isCurrent ? '#FFFFFF' : 'var(--charcoal-deep)',
                          fontSize: '0.7rem',
                          fontWeight: 700
                        }}>
                          {isCurrent ? 'Active' : 'Play'}
                        </span>
                      ) : (
                        <Lock size={16} color="var(--text-tertiary)" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Active Quest Interaction Console */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '32px',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            
            {/* Quest Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-subtle)',
              marginBottom: '24px'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-terracotta)', letterSpacing: '0.06em' }}>
                  🏛️ ACTIVE QUEST #1 • {activeQuest.destinationName}
                </span>
                <h2 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)' }}>
                  {activeQuest.title}
                </h2>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {activeQuest.subtitle}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--brand-gold-dark)' }}>
                    +{activeQuest.xpReward} XP
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                    ⏱️ ~{activeQuest.estimatedMinutes} mins
                  </span>
                </div>
              </div>
            </div>

            {/* STEP 1: HISTORICAL CLUE & GPS STATE */}
            <div style={{
              backgroundColor: 'var(--bg-surface-elevated)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              marginBottom: '24px',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--brand-terracotta)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                {t.questSection.clueLabel}
              </div>

              <div style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)', marginBottom: '8px', lineHeight: 1.4 }}>
                "{activeQuest.clue.text}"
              </div>

              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '18px' }}>
                💡 <strong>Architectural Hint:</strong> {activeQuest.clue.hint}
              </div>

              {/* GPS Proximity Telemetry */}
              <div style={{
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: gpsReached ? 'var(--accent-green-bg)' : '#FFEBEE',
                border: `1.5px solid ${gpsReached ? 'var(--accent-green)' : '#EF5350'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={22} color={gpsReached ? 'var(--accent-green)' : '#D32F2F'} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: gpsReached ? 'var(--accent-green)' : '#D32F2F' }}>
                      {gpsReached ? t.questSection.gpsReached : `🔴 You are ${gpsDistance}m away from the quadrant`}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {gpsReached ? t.questSection.gpsSubtitle : 'Walk closer or simulate GPS approach to unlock camera scan.'}
                    </span>
                  </div>
                </div>

                {!gpsReached ? (
                  <button
                    onClick={simulateGpsApproach}
                    className="btn-primary"
                    style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                  >
                    <Compass size={15} />
                    <span>{t.questSection.openMapBtn}</span>
                  </button>
                ) : (
                  <button
                    onClick={handleOpenScanner}
                    className="btn-gold"
                    style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                  >
                    <Camera size={15} />
                    <span>{t.questSection.scanObjectBtn}</span>
                  </button>
                )}
              </div>
            </div>

            {/* STEP 2: UNLOCKED MICRO-STORY (AFTER SCAN OR COMPLETION) */}
            {(questCompleted || cameraVerified) && (
              <div style={{
                backgroundColor: '#FAF7F2',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                border: '1.5px solid rgba(197, 160, 89, 0.4)',
                marginBottom: '24px',
                animation: 'fadeIn 0.4s ease'
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
                    <Sparkles size={18} color="var(--brand-gold)" />
                    <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)' }}>
                      🔓 {t.questSection.secretStoryUnlocked}: {activeQuest.microStory.title}
                    </h3>
                  </div>

                  {/* Language Toggle */}
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => setActiveLang('en')}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: activeLang === 'en' ? 'var(--charcoal-deep)' : 'var(--bg-surface-elevated)',
                        color: activeLang === 'en' ? '#FFFFFF' : 'var(--charcoal-deep)',
                        fontSize: '0.72rem',
                        fontWeight: 700
                      }}
                    >
                      English
                    </button>
                    <button
                      onClick={() => setActiveLang('hi')}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        backgroundColor: activeLang === 'hi' ? 'var(--charcoal-deep)' : 'var(--bg-surface-elevated)',
                        color: activeLang === 'hi' ? '#FFFFFF' : 'var(--charcoal-deep)',
                        fontSize: '0.72rem',
                        fontWeight: 700
                      }}
                    >
                      हिन्दी
                    </button>
                  </div>
                </div>

                {/* Micro Story Text */}
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--charcoal-deep)',
                  lineHeight: 1.65,
                  marginBottom: '18px',
                  fontStyle: 'italic',
                  paddingLeft: '16px',
                  borderLeft: '3px solid var(--brand-gold)'
                }}>
                  "{activeLang === 'hi' ? activeQuest.microStory.narrationTextHi : activeQuest.microStory.narrationText}"
                </p>

                {/* Audio Player Toolbar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={handleListenStory}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--brand-terracotta)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {isSpeaking ? <Pause size={18} /> : <Play size={18} fill="#FFFFFF" />}
                    </button>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--charcoal-deep)' }}>
                        {isSpeaking ? 'Narrating Authentic Story...' : t.questSection.listenAudio}
                      </div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
                        Bilingual Web Speech Synthesizer • 45s Duration
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-green)', fontWeight: 700 }}>
                    ✓ Historical Record Verified
                  </div>
                </div>

                {/* Verified Citation */}
                <div style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}>
                  📜 Verified Cultural Archive Source: {activeQuest.microStory.verifiedSource}
                </div>
              </div>
            )}

            {/* STEP 3: NEXT ARCHITECTURAL PUZZLE */}
            {(questCompleted || cameraVerified) && (
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                border: '1px solid var(--border-medium)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <HelpCircle size={18} color="var(--brand-terracotta)" />
                  <h4 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-serif)', color: 'var(--charcoal-deep)' }}>
                    🧩 Next Cultural Puzzle (+50 XP)
                  </h4>
                </div>

                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--charcoal-deep)', marginBottom: '16px' }}>
                  {activeLang === 'hi' ? activeQuest.nextPuzzle.questionHi : activeQuest.nextPuzzle.question}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {activeQuest.nextPuzzle.options.map((opt) => (
                    <label
                      key={opt.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-md)',
                        border: `1.5px solid ${puzzleSelectedOption === opt.id ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`,
                        backgroundColor: puzzleSelectedOption === opt.id ? 'var(--brand-terracotta-subtle)' : 'var(--bg-surface-elevated)',
                        cursor: puzzleSolved ? 'default' : 'pointer',
                        fontSize: '0.88rem'
                      }}
                    >
                      <input
                        type="radio"
                        name="puzzleOption"
                        value={opt.id}
                        checked={puzzleSelectedOption === opt.id}
                        onChange={() => setPuzzleSelectedOption(opt.id)}
                        disabled={puzzleSolved}
                        style={{ accentColor: 'var(--brand-terracotta)' }}
                      />
                      <span>{activeLang === 'hi' ? opt.textHi : opt.text}</span>
                    </label>
                  ))}
                </div>

                {!puzzleSolved ? (
                  <button
                    onClick={handlePuzzleSubmit}
                    className="btn-primary"
                    style={{ padding: '10px 24px', fontSize: '0.88rem' }}
                  >
                    <span>{t.questSection.submitAnswer}</span>
                    <ArrowRight size={15} />
                  </button>
                ) : (
                  <div style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-green-bg)',
                    color: 'var(--accent-green)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <CheckCircle2 size={18} />
                    <span>{t.questSection.correctTitle} You earned +50 XP and unlocked the Level 4 Master Explorer credential!</span>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* CAMERA SCANNER SIMULATOR HUD MODAL */}
      {scannerOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            maxWidth: '520px',
            width: '100%',
            backgroundColor: '#161917',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '2px solid rgba(200, 90, 50, 0.6)',
            boxShadow: '0 0 50px rgba(200, 90, 50, 0.3)',
            animation: 'fadeIn 0.3s ease'
          }}>
            {/* Viewfinder Top Bar */}
            <div style={{
              padding: '16px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#FFFFFF',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700 }}>
                <Camera size={16} color="var(--brand-terracotta)" />
                <span>AR ARTIFACT SCANNER</span>
              </div>
              <button onClick={() => setScannerOpen(false)} style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>
                ✕
              </button>
            </div>

            {/* Camera Viewport Frame with Reticle & Laser */}
            <div style={{
              position: 'relative',
              height: '320px',
              backgroundColor: '#000000',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={activeQuest.clue.targetImage}
                alt="Target Carving"
                onError={(e) => {
                  if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1600100397608-f010f443b745?auto=format&fit=crop&w=600&q=80') {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1600100397608-f010f443b745?auto=format&fit=crop&w=600&q=80';
                  }
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
              />

              {/* Viewfinder Target Reticle Frame */}
              <div style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                border: '2px dashed rgba(200, 90, 50, 0.8)',
                borderRadius: '16px',
                boxShadow: '0 0 0 1000px rgba(0, 0, 0, 0.45)',
                pointerEvents: 'none'
              }}>
                {/* 4 Corner Crosshairs */}
                <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '20px', height: '20px', borderTop: '4px solid var(--brand-gold)', borderLeft: '4px solid var(--brand-gold)' }} />
                <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '20px', height: '20px', borderTop: '4px solid var(--brand-gold)', borderRight: '4px solid var(--brand-gold)' }} />
                <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '20px', height: '20px', borderBottom: '4px solid var(--brand-gold)', borderLeft: '4px solid var(--brand-gold)' }} />
                <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '20px', height: '20px', borderBottom: '4px solid var(--brand-gold)', borderRight: '4px solid var(--brand-gold)' }} />
              </div>

              {/* Laser Scanning Line */}
              {cameraScanning && (
                <div style={{
                  position: 'absolute',
                  left: '10%',
                  right: '10%',
                  height: '3px',
                  backgroundColor: '#FF5252',
                  boxShadow: '0 0 12px #FF5252, 0 0 24px #FF5252',
                  animation: 'scanLaser 1.8s infinite ease-in-out',
                  zIndex: 20
                }} />
              )}

              {/* Status Message Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                color: '#FFFFFF',
                fontSize: '0.78rem',
                fontWeight: 600
              }}>
                {cameraScanning ? '🔍 Deciphering Sandstone Mineral Matrix...' : t.questSection.scanInstructions}
              </div>
            </div>

            {/* Viewfinder Controls */}
            <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#161917' }}>
              <button
                onClick={handleScanAction}
                disabled={cameraScanning}
                className="btn-gold"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '0.95rem'
                }}
              >
                <Camera size={18} />
                <span>{cameraScanning ? 'Analyzing Archaeological Signature...' : t.questSection.scanBtn}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TEAM LEADERBOARD MODAL */}
      {teamModalOpen && (
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
            maxWidth: '480px',
            width: '100%',
            boxShadow: 'var(--shadow-lg)',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>
                👥 Team Explorer Leaderboard
              </h3>
              <button onClick={() => setTeamModalOpen(false)} style={{ fontSize: '1.2rem' }}>✕</button>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Combined team exploration pool for Mirzapur & Vindhya Heritage Circuit.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {teamMembers.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: idx === 0 ? 'var(--brand-terracotta-subtle)' : 'var(--bg-surface-elevated)',
                    border: `1px solid ${idx === 0 ? 'var(--brand-terracotta)' : 'var(--border-subtle)'}`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>{m.avatar}</span>
                    <div>
                      <strong style={{ fontSize: '0.92rem', color: 'var(--charcoal-deep)' }}>{m.name}</strong>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', display: 'block' }}>{m.role}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--brand-terracotta)' }}>
                    {m.xp} XP
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: '#FAF7F2',
              textAlign: 'center',
              border: '1px solid var(--border-subtle)'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Combined Team Expedition XP: </span>
              <strong style={{ fontSize: '1.2rem', color: 'var(--charcoal-deep)' }}>1,800 XP</strong>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .quest-grid-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
