import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Compass,
  MapPin,
  Bot,
  ShieldAlert,
  Award,
  Palette,
  Globe,
  Menu,
  X,
  Sparkles,
  User,
  LogOut,
  HeartHandshake,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    language,
    setLanguage,
    activeTab,
    setActiveTab,
    userProfile,
    setAuthModalOpen,
    logoutUser,
    userLevel,
    userXp,
    t,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navItems = [
    {
      id: 'explore',
      label: t.nav.explore,
      icon: Compass,
    },
    {
      id: 'planner',
      label: t.nav.planTrip,
      icon: MapPin,
    },
    {
      id: 'ai',
      label: t.nav.aiGuide,
      icon: Bot,
      isSpecial: true,
    },
    {
      id: 'quest',
      label: t.nav.heritageQuest,
      icon: Award,
    },
    {
      id: 'scamshield',
      label: t.nav.scamShield,
      icon: ShieldAlert,
      isAlert: true,
    },
    {
      id: 'culture',
      label: t.nav.culture,
      icon: Palette,
    },
    {
      id: 'responsible',
      label: t.nav.responsible,
      icon: HeartHandshake,
    },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header className="main-navbar">

        <div className="navbar-container">

          {/* =================================================
              BRAND
          ================================================= */}

          <div
            className="navbar-brand"
            onClick={() => handleNavClick('home')}
          >
            <div className="brand-logo">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 21V10C4 6.5 8 3 12 3C16 3 20 6.5 20 10V21" />
                <path d="M8 21V13C8 11 10 9 12 9C14 9 16 11 16 13V21" />
                <circle
                  cx="12"
                  cy="6.5"
                  r="1.5"
                  fill="#FAF7F2"
                  stroke="none"
                />
              </svg>
            </div>

            <div className="brand-text">
              <span className="brand-name">
                Heritage
                <span>Lens</span>
              </span>

              <span className="brand-tagline">
                India Beyond Famous
              </span>
            </div>
          </div>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="desktop-nav">

            {navItems.map((item) => {

              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    nav-item
                    ${isActive ? 'nav-active' : ''}
                    ${item.isAlert ? 'nav-alert' : ''}
                  `}
                >

                  <Icon size={15} />

                  <span>
                    {item.label}
                  </span>

                  {item.isSpecial && (
                    <span className="ai-badge">
                      AI
                    </span>
                  )}

                </button>
              );

            })}

          </nav>


          {/* =================================================
              RIGHT SIDE CONTROLS
          ================================================= */}

          <div className="navbar-controls">

            {/* XP */}

            <button
              className="xp-badge"
              onClick={() => handleNavClick('quest')}
              title="Heritage Hunter XP Status"
            >
              <Sparkles size={13} />

              <span>
                Lv {userLevel} • {userXp} XP
              </span>
            </button>


            {/* LANGUAGE */}

            <button
              className="language-switcher"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              <Globe size={13} />

              <span>
                {language === 'en' ? 'हिन्दी' : 'EN'}
              </span>
            </button>


            {/* =================================================
                USER PROFILE
            ================================================= */}

            {userProfile.isAuthenticated ? (

              <div className="profile-section">

                <button
                  className="profile-button"
                  onClick={() =>
                    setProfileDropdownOpen(!profileDropdownOpen)
                  }
                >

                  <span className="profile-avatar">
                    {userProfile.avatar}
                  </span>

                  <span className="profile-name">
                    {userProfile.name.split(' ')[0]}
                  </span>

                </button>


                {/* PROFILE DROPDOWN */}

                {profileDropdownOpen && (

                  <div className="profile-dropdown">

                    <div className="profile-info">

                      <div className="profile-full-name">
                        {userProfile.name}
                      </div>

                      <div className="profile-email">
                        {userProfile.email}
                      </div>

                    </div>


                    <button
                      className="profile-menu-item"
                      onClick={() => {
                        setAuthModalOpen(true);
                        setProfileDropdownOpen(false);
                      }}
                    >
                      <User size={14} />
                      <span>My Profile</span>
                    </button>


                    <button
                      className="logout-button"
                      onClick={() => {
                        logoutUser();
                        setProfileDropdownOpen(false);
                      }}
                    >
                      <LogOut size={14} />
                      <span>Log Out</span>
                    </button>

                  </div>

                )}

              </div>

            ) : (

              <button
                className="signin-button"
                onClick={() => setAuthModalOpen(true)}
              >
                <User size={14} />
                <span>Sign In</span>
              </button>

            )}


            {/* =================================================
                MOBILE HAMBURGER
            ================================================= */}

            <button
              className="mobile-hamburger"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setProfileDropdownOpen(false);
              }}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >

              {mobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}

            </button>

          </div>

        </div>


        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        {mobileMenuOpen && (

          <div className="mobile-menu-drawer">

            <div className="mobile-menu-header">

              <span>
                Explore HeritageLens
              </span>

              <button
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={18} />
              </button>

            </div>


            {/* MOBILE NAV ITEMS */}

            <div className="mobile-nav-items">

              {navItems.map((item) => {

                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (

                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      mobile-nav-item
                      ${isActive ? 'mobile-nav-active' : ''}
                      ${item.isAlert ? 'mobile-nav-alert' : ''}
                    `}
                  >

                    <div className="mobile-nav-icon">
                      <Icon size={18} />
                    </div>

                    <span>
                      {item.label}
                    </span>


                    {item.isSpecial && (
                      <span className="mobile-ai-badge">
                        AI
                      </span>
                    )}


                    {item.isAlert && (
                      <span className="mobile-alert-dot" />
                    )}

                  </button>

                );

              })}

            </div>


            {/* MOBILE XP */}

            <div
              className="mobile-xp-card"
              onClick={() => handleNavClick('quest')}
            >

              <div className="mobile-xp-icon">
                <Sparkles size={18} />
              </div>

              <div className="mobile-xp-content">

                <span>
                  Heritage Hunter
                </span>

                <strong>
                  Level {userLevel} • {userXp} XP
                </strong>

              </div>

              <Award size={18} />

            </div>


            {/* MOBILE LANGUAGE */}

            <button
              className="mobile-language-button"
              onClick={toggleLanguage}
            >

              <Globe size={18} />

              <span>
                {language === 'en'
                  ? 'Switch to हिन्दी'
                  : 'Switch to English'}
              </span>

              <strong>
                {language === 'en' ? 'हिन्दी' : 'EN'}
              </strong>

            </button>

          </div>

        )}

      </header>


      {/* =====================================================
          RESPONSIVE CSS
      ====================================================== */}

      <style>{`

        /* =====================================================
           GLOBAL
        ====================================================== */

        .main-navbar,
        .main-navbar *,
        .mobile-menu-drawer,
        .mobile-menu-drawer * {
          box-sizing: border-box;
        }

        .main-navbar button {
          font-family: inherit;
          cursor: pointer;
        }


        /* =====================================================
           MAIN NAVBAR
        ====================================================== */

        .main-navbar {
          position: fixed;

          top: 0;
          left: 0;

          width: 100%;

          z-index: 1000;

          background:
            rgba(250, 247, 242, 0.94);

          backdrop-filter:
            blur(16px);

          -webkit-backdrop-filter:
            blur(16px);

          border-bottom:
            1px solid
            rgba(22, 25, 23, 0.08);

          box-shadow:
            0 2px 15px
            rgba(0, 0, 0, 0.03);
        }


        /* =====================================================
           CONTAINER
        ====================================================== */

        .navbar-container {

          width: 100%;

          max-width: 1500px;

          height: 74px;

          margin: 0 auto;

          padding:
            0 24px;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 16px;

          overflow: visible;
        }


        /* =====================================================
           BRAND
        ====================================================== */

        .navbar-brand {

          display: flex;

          align-items: center;

          gap: 12px;

          cursor: pointer;

          user-select: none;

          flex-shrink: 0;

          min-width: 0;
        }


        .brand-logo {

          width: 40px;

          height: 40px;

          flex-shrink: 0;

          border-radius: 12px;

          background:
            linear-gradient(
              135deg,
              #C85A32 0%,
              #A33F19 100%
            );

          display: flex;

          align-items: center;

          justify-content: center;

          color: white;

          box-shadow:
            0 4px 12px
            rgba(200, 90, 50, 0.3);
        }


        .brand-text {
          min-width: 0;
        }


        .brand-name {

          display: block;

          font-family:
            var(--font-serif);

          font-size: 1.2rem;

          font-weight: 700;

          line-height: 1.15;

          color:
            var(--charcoal-deep);

          white-space: nowrap;
        }


        .brand-name span {
          color:
            var(--brand-terracotta);
        }


        .brand-tagline {

          display: block;

          margin-top: 2px;

          font-size: 0.66rem;

          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 0.12em;

          color:
            var(--brand-gold-dark);

          white-space: nowrap;
        }


        /* =====================================================
           DESKTOP NAV
        ====================================================== */

        .desktop-nav {

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 2px;

          flex: 1;

          min-width: 0;
        }


        .nav-item {

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 5px;

          padding:
            7px 9px;

          border: none;

          border-radius:
            var(--radius-pill);

          background:
            transparent;

          color:
            var(--text-primary);

          font-size: 0.78rem;

          font-weight: 500;

          white-space: nowrap;

          transition:
            all 0.2s ease;
        }


        .nav-item:hover {

          background:
            rgba(0, 0, 0, 0.05);

          transform:
            translateY(-1px);
        }


        .nav-active {

          background:
            var(--charcoal-deep) !important;

          color:
            white !important;

          font-weight: 700 !important;
        }


        .nav-alert {

          color:
            var(--alert-red) !important;

          background:
            rgba(211, 47, 47, 0.08);
        }


        .nav-alert.nav-active {

          color:
            white !important;

          background:
            var(--alert-red) !important;
        }


        .ai-badge {

          padding:
            2px 5px;

          border-radius:
            var(--radius-pill);

          background:
            var(--brand-gold-light);

          color:
            var(--brand-gold-dark);

          font-size:
            0.58rem;

          font-weight:
            800;
        }


        .nav-active .ai-badge {

          background:
            var(--brand-gold);

          color:
            white;
        }


        /* =====================================================
           RIGHT CONTROLS
        ====================================================== */

        .navbar-controls {

          display: flex;

          align-items: center;

          gap: 7px;

          flex-shrink: 0;

          min-width: max-content;
        }


        /* =====================================================
           XP
        ====================================================== */

        .xp-badge {

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 5px;

          padding:
            8px 4px;

          border:
            1px solid
            rgba(197, 160, 89, 0.4);

          border-radius:
            var(--radius-pill);

          background:
            linear-gradient(
              135deg,
              #FFF9EB,
              #F5E8C7
            );

          color:
            #8C6809;

          box-shadow:
            var(--shadow-sm);

          font-size:
            0.72rem;

          font-weight:
            700;

          white-space:
            nowrap;

          border: 1px solid
            rgba(197, 160, 89, 0.4);
        }


        /* =====================================================
           LANGUAGE
        ====================================================== */

        .language-switcher {

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 5px;

          min-height: 36px;

          padding:
            6px 9px;

          border-radius:
            var(--radius-pill);

          border:
            1px solid
            var(--border-medium);

          background:
            white;

          color:
            var(--charcoal-deep);

          box-shadow:
            var(--shadow-sm);

          font-size:
            0.76rem;

          font-weight:
            700;

          white-space:
            nowrap;
        }


        .language-switcher svg {
          color:
            var(--brand-terracotta);
        }


        /* =====================================================
           PROFILE
        ====================================================== */

        .profile-section {
          position:
            relative;
        }


        .profile-button {

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 6px;

          min-height: 36px;

          max-width: 130px;

          padding:
            5px 9px;

          border-radius:
            var(--radius-pill);

          background:
            white;

          border:
            1.5px solid
            var(--brand-terracotta);

          color:
            var(--charcoal-deep);

          box-shadow:
            var(--shadow-sm);

          font-size:
            0.78rem;

          font-weight:
            700;
        }


        .profile-avatar {
          flex-shrink:
            0;
        }


        .profile-name {

          max-width:
            65px;

          overflow:
            hidden;

          text-overflow:
            ellipsis;

          white-space:
            nowrap;
        }


        /* =====================================================
           PROFILE DROPDOWN
        ====================================================== */

        .profile-dropdown {

          position:
            absolute;

          top:
            calc(100% + 10px);

          right:
            0;

          width:
            230px;

          padding:
            12px;

          display:
            flex;

          flex-direction:
            column;

          gap:
            8px;

          background:
            white;

          border:
            1px solid
            var(--border-subtle);

          border-radius:
            var(--radius-md);

          box-shadow:
            var(--shadow-lg);

          z-index:
            2000;

          animation:
            profileFade
            0.18s
            ease;
        }


        @keyframes profileFade {

          from {
            opacity: 0;

            transform:
              translateY(-5px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        .profile-info {

          padding-bottom:
            9px;

          border-bottom:
            1px solid
            var(--border-subtle);
        }


        .profile-full-name {

          font-size:
            0.85rem;

          font-weight:
            700;

          color:
            var(--charcoal-deep);

          overflow:
            hidden;

          text-overflow:
            ellipsis;

          white-space:
            nowrap;
        }


        .profile-email {

          margin-top:
            3px;

          font-size:
            0.7rem;

          color:
            var(--text-secondary);

          overflow:
            hidden;

          text-overflow:
            ellipsis;

          white-space:
            nowrap;
        }


        .profile-menu-item,
        .logout-button {

          width:
            100%;

          display:
            flex;

          align-items:
            center;

          gap:
            8px;

          padding:
            8px;

          border:
            none;

          border-radius:
            7px;

          font-size:
            0.8rem;

          text-align:
            left;
        }


        .profile-menu-item {

          background:
            transparent;

          color:
            var(--charcoal-deep);
        }


        .profile-menu-item:hover {

          background:
            rgba(0, 0, 0, 0.04);
        }


        .logout-button {

          color:
            var(--alert-red);

          background:
            var(--alert-red-bg);

          font-weight:
            700;
        }


        /* =====================================================
           SIGN IN
        ====================================================== */

        .signin-button {

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            6px;

          min-height:
            36px;

          padding:
            7px 12px;

          border:
            none;

          border-radius:
            var(--radius-pill);

          background:
            var(--charcoal-deep);

          color:
            white;

          font-size:
            0.78rem;

          font-weight:
            700;

          white-space:
            nowrap;
        }


        /* =====================================================
           MOBILE HAMBURGER
        ====================================================== */

        .mobile-hamburger {

          display:
            none;

          align-items:
            center;

          justify-content:
            center;

          width:
            38px;

          height:
            38px;

          padding:
            7px;

          border:
            none;

          border-radius:
            9px;

          background:
            rgba(0, 0, 0, 0.05);

          color:
            var(--charcoal-deep);
        }


        /* =====================================================
           MOBILE MENU
        ====================================================== */

        .mobile-menu-drawer {

          width:
            100%;

          max-height:
            calc(100vh - 70px);

          overflow-y:
            auto;

          padding:
            16px;

          background:
            var(--bg-surface);

          border-bottom:
            1px solid
            var(--border-medium);

          box-shadow:
            var(--shadow-lg);

          animation:
            mobileMenuOpen
            0.2s
            ease;

          -webkit-overflow-scrolling:
            touch;
        }


        @keyframes mobileMenuOpen {

          from {

            opacity:
              0;

            transform:
              translateY(-8px);
          }

          to {

            opacity:
              1;

            transform:
              translateY(0);
          }

        }


        .mobile-menu-header {

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          margin-bottom:
            12px;

          padding:
            0 4px;
        }


        .mobile-menu-header span {

          font-size:
            0.76rem;

          font-weight:
            800;

          text-transform:
            uppercase;

          letter-spacing:
            0.08em;

          color:
            var(--text-secondary);
        }


        .mobile-menu-header button {

          width:
            34px;

          height:
            34px;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border:
            none;

          border-radius:
            8px;

          background:
            rgba(0, 0, 0, 0.05);
        }


        .mobile-nav-items {

          display:
            flex;

          flex-direction:
            column;

          gap:
            7px;
        }


        .mobile-nav-item {

          position:
            relative;

          width:
            100%;

          min-height:
            48px;

          display:
            flex;

          align-items:
            center;

          gap:
            11px;

          padding:
            9px 12px;

          border:
            none;

          border-radius:
            11px;

          background:
            var(--bg-surface-elevated);

          color:
            var(--text-primary);

          font-size:
            0.9rem;

          font-weight:
            500;

          text-align:
            left;
        }


        .mobile-nav-active {

          background:
            var(--charcoal-deep) !important;

          color:
            white !important;

          font-weight:
            700 !important;
        }


        .mobile-nav-alert {

          color:
            var(--alert-red);
        }


        .mobile-nav-active.mobile-nav-alert {

          background:
            var(--alert-red) !important;

          color:
            white !important;
        }


        .mobile-nav-icon {

          width:
            34px;

          height:
            34px;

          flex-shrink:
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            9px;

          background:
            rgba(0, 0, 0, 0.045);
        }


        .mobile-nav-active
        .mobile-nav-icon {

          background:
            rgba(255, 255, 255, 0.12);
        }


        .mobile-ai-badge {

          margin-left:
            auto;

          padding:
            3px 7px;

          border-radius:
            20px;

          background:
            var(--brand-gold);

          color:
            white;

          font-size:
            0.6rem;

          font-weight:
            800;
        }


        .mobile-alert-dot {

          width:
            7px;

          height:
            7px;

          margin-left:
            auto;

          border-radius:
            50%;

          background:
            var(--alert-red);
        }


        /* =====================================================
           MOBILE XP
        ====================================================== */

        .mobile-xp-card {

          margin-top:
            14px;

          display:
            flex;

          align-items:
            center;

          gap:
            10px;

          padding:
            12px;

          border-radius:
            13px;

          background:
            linear-gradient(
              135deg,
              #FFF9EB,
              #F5E8C7
            );

          border:
            1px solid
            rgba(197, 160, 89, 0.35);

          cursor:
            pointer;
        }


        .mobile-xp-icon {

          width:
            38px;

          height:
            38px;

          flex-shrink:
            0;

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          border-radius:
            10px;

          background:
            rgba(184, 134, 11, 0.12);

          color:
            #B8860B;
        }


        .mobile-xp-content {

          flex:
            1;

          min-width:
            0;

          display:
            flex;

          flex-direction:
            column;

          gap:
            2px;
        }


        .mobile-xp-content span {

          font-size:
            0.7rem;

          color:
            #8C6809;

          font-weight:
            600;
        }


        .mobile-xp-content strong {

          font-size:
            0.82rem;

          color:
            #735507;
        }


        /* =====================================================
           MOBILE LANGUAGE
        ====================================================== */

        .mobile-language-button {

          width:
            100%;

          margin-top:
            9px;

          min-height:
            46px;

          display:
            flex;

          align-items:
            center;

          gap:
            9px;

          padding:
            10px 12px;

          border:
            1px solid
            var(--border-medium);

          border-radius:
            11px;

          background:
            white;

          color:
            var(--charcoal-deep);

          font-size:
            0.82rem;

          font-weight:
            600;

          text-align:
            left;
        }


        .mobile-language-button span {

          flex:
            1;
        }


        .mobile-language-button svg {

          flex-shrink:
            0;

          color:
            var(--brand-terracotta);
        }


        /* =====================================================
           LAPTOP
           IMPORTANT FIX
        ====================================================== */

        @media (max-width: 1250px) {

          .navbar-container {

            height:
              70px;

            padding-left:
              18px;

            padding-right:
              18px;

            gap:
              12px;
          }


          /*
             Hide desktop navigation BEFORE
             it starts overlapping.
          */

          .desktop-nav {

            display:
              none !important;
          }


          /*
             Show hamburger.
          */

          .mobile-hamburger {

            display:
              flex !important;

            align-items:
              center;

            justify-content:
              center;
          }


          /*
             Keep XP visible on laptop/tablet.
          */

          .xp-badge {

            display:
              flex;
          }


          .navbar-controls {

            gap:
              7px;
          }


          .mobile-menu-drawer {

            max-height:
              calc(100vh - 70px);
          }

        }


        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {

          .navbar-container {

            height:
              68px;

            padding-left:
              14px;

            padding-right:
              14px;
          }


          /*
             Hide XP on smaller tablet.
          */

          .xp-badge {

            display:
              none;
          }


          .mobile-menu-drawer {

            max-height:
              calc(100vh - 68px);
          }

        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 768px) {

          .navbar-container {

            height:
              68px;

            padding-left:
              14px;

            padding-right:
              14px;

            gap:
              8px;
          }


          .brand-logo {

            width:
              36px;

            height:
              36px;

            border-radius:
              10px;
          }


          .brand-name {

            font-size:
              1rem;
          }


          .brand-tagline {

            font-size:
              0.55rem;

            letter-spacing:
              0.08em;
          }


          .navbar-controls {

            gap:
              6px;
          }


          .xp-badge {

            display:
              none;
          }


          .language-switcher {

            min-height:
              36px;

            padding:
              6px 9px;
          }


          .profile-button {

            min-height:
              36px;

            padding:
              5px 8px;
          }


          .profile-name {

            max-width:
              55px;
          }


          .signin-button {

            min-height:
              36px;

            padding:
              7px 9px;
          }


          .signin-button span {

            display:
              none;
          }


          .mobile-hamburger {

            width:
              36px;

            height:
              36px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 480px) {

          .navbar-container {

            height:
              64px;

            padding-left:
              10px;

            padding-right:
              10px;

            gap:
              5px;
          }


          .navbar-brand {

            gap:
              8px;

            min-width:
              0;

            flex:
              1;
          }


          .brand-logo {

            width:
              32px;

            height:
              32px;

            border-radius:
              9px;
          }


          .brand-logo svg {

            width:
              18px;

            height:
              18px;
          }


          .brand-name {

            font-size:
              0.9rem;
          }


          .brand-tagline {

            display:
              none;
          }


          .navbar-controls {

            gap:
              4px;
          }


          .language-switcher {

            min-height:
              34px;

            padding:
              5px 7px;

            font-size:
              0.68rem;
          }


          .language-switcher svg {

            width:
              11px;

            height:
              11px;
          }


          .profile-button {

            min-height:
              34px;

            padding:
              4px 7px;
          }


          .profile-name {

            display:
              none;
          }


          .signin-button {

            width:
              34px;

            height:
              34px;

            min-width:
              34px;

            min-height:
              34px;

            padding:
              6px;
          }


          .mobile-hamburger {

            width:
              34px;

            height:
              34px;

            padding:
              5px;
          }


          .mobile-menu-drawer {

            max-height:
              calc(100vh - 64px);

            padding:
              14px 12px 20px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ====================================================== */

        @media (max-width: 360px) {

          .navbar-container {

            padding-left:
              7px;

            padding-right:
              7px;

            gap:
              3px;
          }


          .brand-logo {

            width:
              29px;

            height:
              29px;
          }


          .brand-logo svg {

            width:
              16px;

            height:
              16px;
          }


          .brand-name {

            font-size:
              0.78rem;
          }


          .navbar-controls {

            gap:
              3px;
          }


          .language-switcher {

            min-width:
              31px;

            padding:
              5px;

            font-size:
              0;
          }


          .language-switcher span {

            display:
              none;
          }


          .language-switcher svg {

            width:
              13px;

            height:
              13px;
          }


          .signin-button {

            width:
              31px;

            height:
              31px;

            min-width:
              31px;

            min-height:
              31px;
          }


          .mobile-hamburger {

            width:
              31px;

            height:
              31px;
          }

        }


        /* =====================================================
           TOUCH DEVICES
        ====================================================== */

        @media (hover: none) and (pointer: coarse) {

          .mobile-nav-item {

            min-height:
              50px;
          }


          .mobile-language-button {

            min-height:
              48px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {

            animation-duration:
              0.01ms !important;

            animation-iteration-count:
              1 !important;

            transition-duration:
              0.01ms !important;

            scroll-behavior:
              auto !important;
          }

        }

      `}</style>
    </>
  );
};