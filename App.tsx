import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import LessonDetail from './LessonDetail';
import { Home, User, Settings } from 'lucide-react';

const App: React.FC = () => {
  // Simple hash router state
  const [currentRoute, setCurrentRoute] = useState<string>('');
  // Premium state (simulate purchase)
  const [isPremium, setIsPremium] = useState<boolean>(false);

  useEffect(() => {
    const handleHashChange = () => {
      // Remove the '#'
      const hash = window.location.hash.slice(1);
      setCurrentRoute(hash);
    };

    // Initial check
    handleHashChange();

    // Check localStorage for premium status
    const savedPremium = localStorage.getItem('lumiere_premium');
    if (savedPremium === 'true') {
        setIsPremium(true);
    }

    // Listen
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: string) => {
    window.location.hash = path;
  };

  const handleUnlock = () => {
      // Simulate payment processing
      setIsPremium(true);
      localStorage.setItem('lumiere_premium', 'true');
      alert("🎉 Payment Successful! Welcome to Premium.");
  };

  const renderContent = () => {
    if (currentRoute.startsWith('/lesson/')) {
      // Split by slash and get the ID, ignoring any trailing slashes or queries
      const parts = currentRoute.split('/lesson/');
      if (parts.length > 1) {
          const lessonId = parts[1].split('/')[0];
          return <LessonDetail lessonId={lessonId} onBack={() => navigateTo('/')} />;
      }
    }
    
    // Default to Dashboard
    return <Dashboard 
        onLessonSelect={(id) => navigateTo(`/lesson/${id}`)} 
        isPremium={isPremium}
        onUnlock={handleUnlock}
    />;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col mx-auto max-w-md shadow-2xl overflow-hidden md:max-w-full md:shadow-none font-sans">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto relative scroll-smooth">
        {renderContent()}
      </main>

      {/* Bottom Nav (only visible on dashboard for aesthetics) */}
      {!currentRoute.startsWith('/lesson/') && (
        <nav className="bg-white border-t border-slate-200 px-6 py-3 flex justify-between items-center sticky bottom-0 z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <button className="flex flex-col items-center gap-1 text-indigo-600 transition-colors">
            <Home size={24} strokeWidth={2.5} />
            <span className="text-[10px] font-bold">Learn</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
            <User size={24} />
            <span className="text-[10px] font-medium">Profile</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-slate-600 transition-colors">
            <Settings size={24} />
            <span className="text-[10px] font-medium">Settings</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;