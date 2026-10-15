import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  LogOut, 
  Compass,
  ArrowRight
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { authModalOpen, setAuthModalOpen, userProfile, loginUser, logoutUser, showToast, t } = useApp();
  
  const [authMode, setAuthMode] = useState<'signin' | 'signup' | 'profile'>('signin');
  const [name, setName] = useState('Aarav Sharma');
  const [email, setEmail] = useState('aarav.explorer@heritagelens.in');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [password, setPassword] = useState('heritage2026');

  if (!authModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(name, email, phone);
  };

  const handleQuickDemoLogin = () => {
    loginUser('Aarav Sharma', 'aarav.explorer@heritagelens.in', '+91 98765 43210');
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1050,
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
        maxWidth: '460px',
        width: '100%',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden',
        position: 'relative',
        animation: 'fadeIn 0.3s ease'
      }}>
        {/* Close button */}
        <button
          onClick={() => setAuthModalOpen(false)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10,
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-surface-elevated)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--charcoal-deep)'
          }}
        >
          <X size={16} />
        </button>

        {/* Modal Header */}
        <div style={{
          backgroundColor: 'var(--charcoal-deep)',
          color: '#FAF7F2',
          padding: '28px 24px 20px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #C85A32 0%, #B8860B 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            margin: '0 auto 12px',
            boxShadow: '0 4px 14px rgba(200, 90, 50, 0.3)'
          }}>
            {userProfile.isAuthenticated ? userProfile.avatar : '🧭'}
          </div>

          <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: '#FFFFFF', marginBottom: '4px' }}>
            {userProfile.isAuthenticated 
              ? `Explorer Profile: ${userProfile.name}` 
              : authMode === 'signup' 
                ? 'Join HeritageLens India' 
                : 'Sign In to HeritageLens'}
          </h3>

          <p style={{ fontSize: '0.82rem', color: '#D5DDD7' }}>
            {userProfile.isAuthenticated 
              ? 'Level 4 Heritage Hunter • Verified Account' 
              : 'Save itineraries, unlock quests, and sync explorer badges'}
          </p>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          
          {userProfile.isAuthenticated ? (
            /* LOGGED IN PROFILE VIEW */
            <div>
              <div style={{
                backgroundColor: 'var(--bg-surface-elevated)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Full Name:</span>
                  <strong>{userProfile.name}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Email:</span>
                  <strong>{userProfile.email}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Explorer Level:</span>
                  <strong style={{ color: 'var(--brand-terracotta)' }}>Level {userProfile.level} ({userProfile.xp} XP)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Saved Locations:</span>
                  <span>{userProfile.savedDestinations.length} circuits</span>
                </div>
              </div>

              <button
                onClick={() => {
                  logoutUser();
                  setAuthModalOpen(false);
                }}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: '#FFEBEE',
                  color: 'var(--alert-red)',
                  border: '1px solid #FFCDD2',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <LogOut size={16} />
                <span>Log Out of Account</span>
              </button>
            </div>
          ) : (
            /* AUTH FORM (SIGN IN / SIGN UP) */
            <form onSubmit={handleSubmit}>
              
              {/* Quick Google 1-Click Demo Login */}
              <button
                type="button"
                onClick={handleQuickDemoLogin}
                style={{
                  width: '100%',
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--charcoal-deep)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  marginBottom: '16px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Google (1-Click)</span>
              </button>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)'
              }}>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-subtle)' }} />
                <span>OR SIGN IN WITH EMAIL</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-subtle)' }} />
              </div>

              {authMode === 'signup' && (
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--charcoal-deep)', display: 'block', marginBottom: '4px' }}>
                    Explorer Full Name:
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-surface-elevated)' }}>
                    <User size={16} color="var(--brand-terracotta)" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aarav Sharma"
                      style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.88rem' }}
                    />
                  </div>
                </div>
              )}

              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--charcoal-deep)', display: 'block', marginBottom: '4px' }}>
                  Email Address:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-surface-elevated)' }}>
                  <Mail size={16} color="var(--brand-terracotta)" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="aarav.explorer@heritagelens.in"
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.88rem' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--charcoal-deep)', display: 'block', marginBottom: '4px' }}>
                  Password:
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--border-medium)', backgroundColor: 'var(--bg-surface-elevated)' }}>
                  <Lock size={16} color="var(--brand-terracotta)" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.88rem' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '0.92rem', marginBottom: '14px' }}
              >
                <span>{authMode === 'signup' ? 'Create Account & Explore' : 'Sign In'}</span>
                <ArrowRight size={16} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                {authMode === 'signup' ? (
                  <span>
                    Already have an account?{' '}
                    <strong 
                      onClick={() => setAuthMode('signin')} 
                      style={{ color: 'var(--brand-terracotta)', cursor: 'pointer' }}
                    >
                      Sign In
                    </strong>
                  </span>
                ) : (
                  <span>
                    Don't have an account?{' '}
                    <strong 
                      onClick={() => setAuthMode('signup')} 
                      style={{ color: 'var(--brand-terracotta)', cursor: 'pointer' }}
                    >
                      Create Free Account
                    </strong>
                  </span>
                )}
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
