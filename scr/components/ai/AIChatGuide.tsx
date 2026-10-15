import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Bot, 
  Send, 
  Mic, 
  Sparkles, 
  MapPin, 
  Wallet, 
  Building, 
  CloudSun, 
  Users, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const AIChatGuide: React.FC = () => {
  const { aiMessages, sendAIMessage, t, openDestinationDetails, setActiveTab } = useApp();
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const presetChips = [
    'Plan a ₹5000 trip to Agra for 2 people',
    'Modify my itinerary because of rain',
    'Find hidden places near Chunar Fort',
    'Best time to visit Orchha without crowds',
    'Find a verified budget hotel near Mandu',
    'Tell me the folklore of the 28-pillar Sonwa Mandap'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [aiMessages]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;
    sendAIMessage(inputText);
    setInputText('');
  };

  const handleChipClick = (chip: string) => {
    sendAIMessage(chip);
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      try {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-IN';
        setIsListening(true);

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputText(transcript);
          setIsListening(false);
        };

        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);
        recognition.start();
        return;
      } catch (e) {
        console.warn('Speech recognition start failed, using fallback simulation:', e);
      }
    }

    // Fallback simulation if browser blocks microphone permissions
    setIsListening(true);
    setTimeout(() => {
      setInputText('I have ₹5000 and 2 days. Plan a cultural trip to Agra.');
      setIsListening(false);
    }, 1800);
  };

  return (
    <div className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: 'var(--radius-pill)',
            backgroundColor: 'var(--brand-terracotta-subtle)',
            color: 'var(--brand-terracotta)',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '12px'
          }}>
            <Bot size={16} />
            <span>Context-Aware Cultural Intelligence</span>
          </div>

          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '8px' }}>
            {t.aiGuide.title}
          </h1>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t.aiGuide.subtitle}
          </p>
        </div>

        {/* Chat Console Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-md)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '620px'
        }}>
          
          {/* Chat Messages Log */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}>
            {aiMessages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: isUser ? 'row-reverse' : 'row',
                    alignItems: 'flex-start',
                    gap: '12px',
                    animation: 'fadeIn 0.3s ease'
                  }}
                >
                  {/* Avatar */}
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: isUser ? 'var(--charcoal-deep)' : 'var(--brand-terracotta)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}>
                    {isUser ? 'You' : <Bot size={18} />}
                  </div>

                  {/* Message Bubble */}
                  <div style={{ maxWidth: '80%' }}>
                    <div style={{
                      padding: '14px 18px',
                      borderRadius: isUser ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
                      backgroundColor: isUser ? 'var(--charcoal-deep)' : 'var(--bg-surface-elevated)',
                      color: isUser ? '#FFFFFF' : 'var(--charcoal-deep)',
                      fontSize: '0.92rem',
                      lineHeight: 1.5,
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      {msg.text}
                    </div>

                    {/* EMBEDDED DYNAMIC RICH CARDS */}
                    {msg.embeddedCard && (
                      <div style={{ marginTop: '12px' }}>
                        
                        {/* 1. Budget Card */}
                        {msg.embeddedCard.type === 'budget' && (
                          <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: 'var(--radius-lg)',
                            padding: '16px',
                            border: '1.5px solid rgba(200, 90, 50, 0.3)',
                            boxShadow: 'var(--shadow-sm)'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-terracotta)' }}>
                                <Wallet size={16} />
                                <span>Dynamic Budget Plan</span>
                              </div>
                              <span className="badge-status badge-low-crowd" style={{ fontSize: '0.7rem' }}>
                                ✓ Within Budget
                              </span>
                            </div>

                            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--charcoal-deep)', marginBottom: '4px' }}>
                              {msg.embeddedCard.data.destination}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                              <span>Estimated: <strong>₹{msg.embeddedCard.data.estimated}</strong></span>
                              <span>Target: <strong>₹{msg.embeddedCard.data.budget}</strong></span>
                              <span style={{ color: 'var(--accent-green)', fontWeight: 700 }}>Buffer: +₹{msg.embeddedCard.data.remaining}</span>
                            </div>

                            <button
                              onClick={() => setActiveTab('planner')}
                              className="btn-primary"
                              style={{ width: '100%', padding: '8px', fontSize: '0.8rem' }}
                            >
                              <span>View Full Smart Itinerary & Stays</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        )}

                        {/* 2. Itinerary Rain Modification Alert Card */}
                        {msg.embeddedCard.type === 'itinerary_change' && (
                          <div style={{
                            backgroundColor: '#E8F5E9',
                            borderRadius: 'var(--radius-lg)',
                            padding: '16px',
                            border: '1.5px solid var(--accent-green)'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: '#1B5E20', marginBottom: '6px' }}>
                              <CloudSun size={16} />
                              <span>Weather-Aware Itinerary Adaptation</span>
                            </div>
                            <p style={{ fontSize: '0.82rem', color: '#2E7D32', marginBottom: '10px' }}>
                              {msg.embeddedCard.data.changeSummary}
                            </p>
                            <button
                              onClick={() => setActiveTab('planner')}
                              style={{
                                padding: '6px 14px',
                                borderRadius: 'var(--radius-pill)',
                                backgroundColor: '#1B5E20',
                                color: '#FFFFFF',
                                fontSize: '0.78rem',
                                fontWeight: 700
                              }}
                            >
                              Inspect Updated Schedule
                            </button>
                          </div>
                        )}

                        {/* 3. Destination Card */}
                        {msg.embeddedCard.type === 'destination' && (
                          <div style={{
                            backgroundColor: '#FFFFFF',
                            borderRadius: 'var(--radius-lg)',
                            padding: '14px',
                            border: '1px solid var(--border-medium)',
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'center'
                          }}>
                            <img
                              src={msg.embeddedCard.data.image}
                              alt={msg.embeddedCard.data.name}
                              onError={(e) => {
                                if (e.currentTarget.src !== 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80') {
                                  e.currentTarget.src = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80';
                                }
                              }}
                              style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }}
                            />
                            <div style={{ flex: 1 }}>
                              <strong style={{ fontSize: '0.95rem', color: 'var(--charcoal-deep)', display: 'block' }}>
                                {msg.embeddedCard.data.name}
                              </strong>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                {msg.embeddedCard.data.location} • ⭐ {msg.embeddedCard.data.rating}
                              </span>
                            </div>
                            <button
                              onClick={() => {
                                openDestinationDetails(msg.embeddedCard.data);
                                setActiveTab('explore');
                              }}
                              className="btn-outline-terracotta"
                              style={{ padding: '6px 12px', fontSize: '0.75rem' }}
                            >
                              Explore
                            </button>
                          </div>
                        )}

                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Suggested Chips */}
          <div style={{
            padding: '10px 20px',
            backgroundColor: 'var(--bg-surface-elevated)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)' }}>Suggested:</span>
            {presetChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleChipClick(chip)}
                style={{
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--charcoal-deep)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  transition: 'var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--brand-terracotta-subtle)';
                  e.currentTarget.style.borderColor = 'var(--brand-terracotta)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'var(--border-medium)';
                }}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form onSubmit={handleSend} style={{
            padding: '16px 20px',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <button
              type="button"
              onClick={handleVoiceInput}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: isListening ? 'var(--alert-red)' : 'var(--bg-surface-elevated)',
                color: isListening ? '#FFFFFF' : 'var(--brand-terracotta)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-medium)',
                animation: isListening ? 'pulseGlow 1.5s infinite' : 'none'
              }}
              title="Voice Input"
            >
              <Mic size={18} />
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isListening ? t.aiGuide.listeningVoice : t.aiGuide.chatPlaceholder}
              style={{
                flex: 1,
                padding: '12px 18px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-medium)',
                outline: 'none',
                fontSize: '0.92rem'
              }}
            />

            <button
              type="submit"
              className="btn-primary"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Send Message"
            >
              <Send size={16} />
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};
