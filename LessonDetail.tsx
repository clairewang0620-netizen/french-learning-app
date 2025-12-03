import React, { useState, useEffect } from 'react';
import { Lesson } from './types';
import { COURSE_CONTENT } from './constants';
import { playTextToSpeech, generateExplanation } from './geminiService';
import { ArrowLeft, Volume2, BookOpen, MessageCircle, Play, Sparkles } from 'lucide-react';

interface LessonDetailProps {
  lessonId: string;
  onBack: () => void;
}

const LessonDetail: React.FC<LessonDetailProps> = ({ lessonId, onBack }) => {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState<'vocab' | 'phrases' | 'scenario'>('vocab');
  const [explanation, setExplanation] = useState<string | null>(null);
  const [loadingExpl, setLoadingExpl] = useState(false);

  useEffect(() => {
    // Find lesson in curriculum
    let found: Lesson | undefined;
    COURSE_CONTENT.forEach(module => {
      const l = module.lessons.find(l => l.id === lessonId);
      if (l) found = l;
    });
    setLesson(found || null);
  }, [lessonId]);

  if (!lesson) {
    return <div className="p-8 text-center text-slate-500">Lesson not found.</div>;
  }

  const handleExplain = async (text: string) => {
    setLoadingExpl(true);
    setExplanation(null);
    const result = await generateExplanation(text);
    setExplanation(result);
    setLoadingExpl(false);
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 animate-fadeIn">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 px-4 py-3 flex items-center gap-3 shadow-sm">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600">
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <div className="flex items-center gap-2">
             <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">{lesson.level}</span>
             <h2 className="text-lg font-bold text-slate-800 leading-tight">{lesson.title}</h2>
          </div>
          <p className="text-xs text-slate-500 truncate">{lesson.description}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 bg-white">
        <button
          onClick={() => setActiveTab('vocab')}
          className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'vocab' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <BookOpen size={16} className="inline mr-2 mb-0.5" />
          Vocabulary
        </button>
        <button
          onClick={() => setActiveTab('phrases')}
          className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'phrases' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <MessageCircle size={16} className="inline mr-2 mb-0.5" />
          Phrases
        </button>
        <button
          onClick={() => setActiveTab('scenario')}
          className={`flex-1 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'scenario' ? 'border-indigo-600 text-indigo-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <Play size={16} className="inline mr-2 mb-0.5" />
          Scenario
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 max-w-3xl mx-auto w-full">
        
        {activeTab === 'vocab' && (
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.vocabulary.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group">
                <div>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-bold text-slate-800">{item.french}</h3>
                    {item.gender && <span className="text-xs text-slate-400 italic">({item.gender})</span>}
                  </div>
                  <p className="text-slate-600">{item.english}</p>
                  {item.context && <p className="text-xs text-slate-400 mt-1 italic">"{item.context}"</p>}
                </div>
                <button 
                    onClick={() => playTextToSpeech(item.french)}
                    className="p-2 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
                >
                  <Volume2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'phrases' && (
          <div className="space-y-3">
            {lesson.phrases.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-all group">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${item.formal ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                    {item.formal ? 'Formal' : 'Casual'}
                  </span>
                  <div className="flex gap-2">
                     <button 
                        onClick={() => handleExplain(item.french)}
                        className="text-xs text-indigo-600 hover:underline flex items-center gap-1"
                      >
                        <Sparkles size={12} /> Explain
                      </button>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <div>
                        <p className="text-lg font-medium text-slate-900 mb-1">{item.french}</p>
                        <p className="text-slate-600">{item.english}</p>
                    </div>
                    <button 
                        onClick={() => playTextToSpeech(item.french)}
                        className="p-3 bg-slate-50 text-slate-600 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors shrink-0"
                    >
                        <Volume2 size={20} />
                    </button>
                </div>
              </div>
            ))}
            
            {/* AI Explanation Modal/Card */}
            {loadingExpl && (
                 <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex items-center gap-2 animate-pulse">
                    <Sparkles size={16} className="text-indigo-500" />
                    <span className="text-sm text-indigo-700">Asking Gemini for context...</span>
                 </div>
            )}
            {explanation && !loadingExpl && (
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                    <div className="flex items-center gap-2 mb-1">
                        <Sparkles size={16} className="text-indigo-600" />
                        <span className="text-xs font-bold text-indigo-600 uppercase">Gemini Context</span>
                    </div>
                    <p className="text-sm text-slate-800 leading-relaxed">{explanation}</p>
                    <button onClick={() => setExplanation(null)} className="text-xs text-indigo-500 mt-2 hover:underline">Close</button>
                </div>
            )}
          </div>
        )}

        {activeTab === 'scenario' && (
          <div className="space-y-6 pb-20">
            <div className="bg-slate-100 p-4 rounded-lg text-center mb-6">
                <h3 className="font-bold text-slate-800">{lesson.scenario.title}</h3>
                <p className="text-sm text-slate-500">{lesson.scenario.description}</p>
            </div>

            <div className="space-y-4">
              {lesson.scenario.lines.map((line, idx) => {
                const isUser = idx % 2 === 0; // Alternating styles for visual interest
                return (
                    <div key={idx} className={`flex gap-3 ${isUser ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-xl shadow-sm border border-indigo-200">
                            {line.avatar}
                        </div>
                        <div className={`flex-1 p-3 rounded-2xl max-w-[85%] ${isUser ? 'bg-white rounded-tl-none border border-slate-200' : 'bg-indigo-50 rounded-tr-none border border-indigo-100'}`}>
                             <div className="flex justify-between items-center mb-1">
                                <span className="text-xs font-bold text-slate-400">{line.speaker}</span>
                                <button onClick={() => playTextToSpeech(line.french, isUser ? 'Kore' : 'Fenrir')} className="text-slate-400 hover:text-indigo-600">
                                    <Volume2 size={14} />
                                </button>
                             </div>
                             <p className="text-slate-800 font-medium mb-1 font-serif text-lg leading-relaxed">{line.french}</p>
                             <p className="text-slate-500 text-sm border-t border-dashed border-slate-200 pt-1 mt-1">{line.english}</p>
                        </div>
                    </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonDetail;