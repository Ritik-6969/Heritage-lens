import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/ToastContainer';
import { DemoGuideBar } from './components/common/DemoGuideBar';
import { AuthModal } from './components/auth/AuthModal';
import { HomePage } from './components/home/HomePage';
import { ExplorePage } from './components/explore/ExplorePage';
import { SmartPlannerPage } from './components/planner/SmartPlannerPage';
import { AIChatGuide } from './components/ai/AIChatGuide';
import { HeritageQuestPage } from './components/quest/HeritageQuestPage';
import { ScamShieldPage } from './components/scamshield/ScamShieldPage';
import { CulturePage } from './components/culture/CulturePage';
import { ResponsiblePage } from './components/responsible/ResponsiblePage';

export const App: React.FC = () => {
  const { activeTab } = useApp();

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'explore':
        return <ExplorePage />;
      case 'planner':
        return <SmartPlannerPage />;
      case 'ai':
        return <AIChatGuide />;
      case 'quest':
        return <HeritageQuestPage />;
      case 'scamshield':
        return <ScamShieldPage />;
      case 'culture':
        return <CulturePage />;
      case 'responsible':
        return <ResponsiblePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container">
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Render */}
      <main className="main-content">
        {renderActiveView()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Hackathon Guided Presentation Controller */}
      <DemoGuideBar />

      {/* User Login / Profile Modal */}
      <AuthModal />

      {/* Toast Alert System */}
      <ToastContainer />
    </div>
  );
};

export default App;
