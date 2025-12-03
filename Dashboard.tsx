import React, { useState } from 'react';
import { COURSE_CONTENT } from './constants';
import { ChevronRight, Lock, Crown, CheckCircle } from 'lucide-react';

interface DashboardProps {
  onLessonSelect: (id: string) => void;
  isPremium: boolean;
  onUnlock: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLessonSelect, isPremium, onUnlock }) => {
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const handleLessonClick = (lessonId: string, isLocked: boolean) => {
    if (isLocked) {
      setShowUpgradeModal(true);
    } else {
      onLessonSelect(lessonId);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-8 pb-32 animate-fadeIn">
      <header className="mb-8 pt-4 flex justify-between items-end border-b border-slate-100 pb-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">My French Path</h1>
          <p className="text-slate-500">Master A1-A2 levels with daily practice.</p>
        </div>
        {isPremium ? (
            <div className="flex items-center gap-1 text-amber-600 font-bold text-xs bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shadow-sm">
                <Crown size={14} fill="currentColor" /> PRO ACTIVE
            </div>
        ) : (
            <button 
                onClick={() => setShowUpgradeModal(true)}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
                Restore
            </button>
        )}
      </header>

      {/* Premium Banner (if not premium) */}
      {!isPremium && (
        <div 
          onClick={() => setShowUpgradeModal(true)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg cursor-pointer transform transition hover:scale-[1.02] relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="flex items-start justify-between relative z-10">
                <div>
                    <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                        <Crown size={20} fill="currentColor" className="text-amber-300 animate-pulse" /> 
                        Lumière Premium
                    </h3>
                    <p className="text-indigo-100 text-sm mb-4 max-w-[80%]">Unlock all A2 & B1 scenarios, unlimited AI roleplay, and pronunciation analysis.</p>
                    <button className="bg-white text-indigo-600 text-xs font-bold px-4 py-2 rounded-full shadow-sm group-hover:bg-indigo-50 transition-colors">
                        Upgrade for $9.99
                    </button>
                </div>
                <div className="text-6xl opacity-20 rotate-12 select-none">🇫🇷</div>
            </div>
        </div>
      )}

      {COURSE_CONTENT.map((module) => (
        <section key={module.level} className="relative">
            {/* Connector Line (visual only) */}
            <div className="absolute left-6 top-10 bottom-[-20px] w-0.5 bg-slate-200 -z-10 last:hidden"></div>

            <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-white ${module.level === 'A1' ? 'bg-indigo-600 shadow-indigo-200' : 'bg-emerald-600 shadow-emerald-200'}`}>
                    {module.level}
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        {module.title}
                        {module.lessons.some(l => l.isPremium) && !isPremium && <Lock size={14} className="text-slate-300" />}
                    </h2>
                    <p className="text-sm text-slate-500">{module.description}</p>
                </div>
            </div>

            <div className="ml-6 pl-8 space-y-3">
                {module.lessons.map((lesson) => {
                    const isLocked = (lesson.isPremium && !isPremium);
                    return (
                        <button
                            key={lesson.id}
                            onClick={() => handleLessonClick(lesson.id, !!isLocked)}
                            className={`w-full p-4 rounded-xl border shadow-sm transition-all flex items-center justify-between group text-left relative overflow-hidden
                                ${isLocked ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200 hover:shadow-md hover:border-indigo-300'}
                            `}
                        >
                            <div className="flex items-center gap-4 relative z-10 w-full">
                                <div className={`w-10 h-10 shrink-0 rounded-lg text-xl flex items-center justify-center transition-colors ${isLocked ? 'bg-slate-200 grayscale opacity-50' : 'bg-indigo-50 group-hover:bg-indigo-100'}`}>
                                    {lesson.icon}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className={`font-semibold truncate transition-colors ${isLocked ? 'text-slate-400' : 'text-slate-800 group-hover:text-indigo-700'}`}>{lesson.title}</h3>
                                        {lesson.isPremium && <span className="text-[9px] bg-amber-100 text-amber-700 px-1.5 rounded-sm font-bold uppercase tracking-wide">Pro</span>}
                                    </div>
                                    <p className={`text-xs truncate ${isLocked ? 'text-slate-300' : 'text-slate-500'}`}>{lesson.description}</p>
                                </div>
                                <div className="shrink-0">
                                    {isLocked ? (
                                        <Lock className="text-slate-300" size={18} />
                                    ) : (
                                        <ChevronRight className="text-slate-300 group-hover:text-indigo-500 transition-colors" size={20} />
                                    )}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </section>
      ))}

        {/* Upgrade Modal */}
        {showUpgradeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fadeIn">
                <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl relative">
                    <button 
                        onClick={() => setShowUpgradeModal(false)}
                        className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2"
                    >
                        ✕
                    </button>
                    
                    <div className="text-center mb-6 pt-2">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                            <Crown size={32} className="text-amber-500" fill="currentColor" />
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-slate-800 mb-2">Unlock Full Access</h2>
                        <p className="text-slate-500 text-sm px-4">Get unlimited access to A2 & B1 levels, smart AI explanations, and scenarios.</p>
                    </div>

                    <div className="space-y-4 mb-8 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3 text-sm text-slate-700">
                            <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                            <span>50+ Premium Lessons (A1-B1)</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-700">
                            <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                            <span>Unlimited AI Roleplay</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-700">
                            <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                            <span>Offline Mode & Progress Sync</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => {
                            onUnlock();
                            setShowUpgradeModal(false);
                        }}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:scale-[1.01] transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                        Unlock for $9.99 / year
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-4">One-time payment. Secure transaction.</p>
                </div>
            </div>
        )}
    </div>
  );
};

export default Dashboard;