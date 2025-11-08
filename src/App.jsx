import React, { useRef, useState } from 'react';
import HeroHeader from './components/HeroHeader';
import FinancialTree from './components/FinancialTree';
import QuizLesson from './components/QuizLesson';
import ResultsPanel from './components/ResultsPanel';
import Dashboard from './components/Dashboard';

function App() {
  const [profile, setProfile] = useState({ level: 'Principiante', xp: 120, streak: 3 });
  const [view, setView] = useState('home'); // home | dashboard | lesson | results
  const [result, setResult] = useState(null);
  const treeRef = useRef(null);

  const handleGetStarted = ({ level, goal }) => {
    setProfile((p) => ({ ...p, level: level.charAt(0).toUpperCase() + level.slice(1), goal }));
  };

  const openLesson = () => {
    setView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const finishLesson = (r) => {
    setResult({ ...r, streak: (profile?.streak || 0) + 1 });
    setProfile((p) => ({ ...p, xp: (p?.xp || 0) + (r?.xp || 0), streak: (p?.streak || 0) + 1 }));
    setView('results');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-6 md:py-10">
        <HeroHeader onGetStarted={handleGetStarted} goToDashboard={() => setView('dashboard')} />

        {view === 'dashboard' && (
          <>
            <Dashboard profile={profile} />
            <div ref={treeRef} className="mt-6">
              <FinancialTree onOpenLesson={openLesson} />
            </div>
          </>
        )}

        {view === 'lesson' && (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <QuizLesson onFinish={finishLesson} />
            </div>
            <div className="md:col-span-1 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <h4 className="font-semibold text-[#1E1B4B]">Suggerimento</h4>
                <p className="text-sm text-slate-600 mt-1">Ripassa i concetti chiave: interesse composto, budget 50/30/20, rischio vs rendimento.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <h4 className="font-semibold text-[#1E1B4B]">Obiettivi del giorno</h4>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 space-y-1">
                  <li>Completa 1 lezione</li>
                  <li>Raggiungi 30 XP</li>
                  <li>Mantieni la streak</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {view === 'results' && (
          <ResultsPanel result={result} onContinue={() => setView('dashboard')} />
        )}

        {/* Footer style message */}
        <div className="py-8 text-center text-sm text-slate-500">
          <span>
            “Inizia oggi il tuo viaggio verso la libertà finanziaria. 5 minuti al giorno bastano per cambiare il tuo futuro.”
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
