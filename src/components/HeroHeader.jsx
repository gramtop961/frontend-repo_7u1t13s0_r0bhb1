import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Coins, Trophy } from 'lucide-react';

export default function HeroHeader({ onGetStarted, goToDashboard }) {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState('principiante');
  const [goal, setGoal] = useState('risparmi');

  const startNow = () => setStep(1);
  const finishOnboarding = () => {
    onGetStarted({ level, goal });
    goToDashboard();
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden rounded-2xl border border-slate-200 bg-[#F8F9FC]">
      <div className="absolute inset-0">{/* 3D Scene */}
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability - does not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/80 via-[#1E1B4B]/40 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <Shield className="h-4 w-4 text-lime-300" />
          <span className="text-sm">La tua guida alla finanza amica</span>
        </div>

        <h1 className="max-w-3xl text-4xl font-extrabold md:text-5xl">
          FIN•GO — Impara la finanza in modo semplice e coinvolgente
        </h1>
        <p className="mt-4 max-w-2xl text-white/90">
          Micro-lezioni interattive, quiz e ricompense. 5 minuti al giorno bastano per cambiare il tuo futuro.
        </p>

        {step === 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={startNow}
              className="inline-flex items-center gap-2 rounded-full bg-[#A3FF12] px-6 py-3 font-semibold text-[#1E1B4B] shadow-lg shadow-lime-300/30 transition hover:translate-y-[-1px] hover:shadow-xl"
            >
              Inizia ora
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <Coins className="h-4 w-4 text-yellow-300" /> Guadagna XP, sblocca bonus
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
              <Trophy className="h-4 w-4 text-amber-300" /> Scala la classifica
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="mt-8 w-full max-w-2xl rounded-2xl bg-white p-6 text-left text-slate-900 shadow-xl">
            <h3 className="text-xl font-bold text-[#1E1B4B]">Benvenut* in FIN•GO! 👋</h3>
            <p className="mt-1 text-slate-600">Facci sapere qualcosa su di te per personalizzare il percorso.</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-slate-700">Il tuo livello attuale</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {['principiante', 'medio', 'esperto'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setLevel(item)}
                      className={`rounded-lg border px-3 py-2 text-sm capitalize transition ${
                        level === item ? 'border-[#1E1B4B] bg-[#1E1B4B] text-white' : 'border-slate-200 bg-white hover:border-[#1E1B4B]/50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Il tuo obiettivo</label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {[
                    { key: 'risparmi', label: 'Gestire i risparmi' },
                    { key: 'debiti', label: 'Ridurre i debiti' },
                    { key: 'investire', label: 'Iniziare a investire' },
                  ].map((g) => (
                    <button
                      key={g.key}
                      onClick={() => setGoal(g.key)}
                      className={`rounded-lg border px-3 py-2 text-sm transition ${
                        goal === g.key ? 'border-[#A3FF12] bg-[#A3FF12] text-[#1E1B4B]' : 'border-slate-200 bg-white hover:border-[#A3FF12]/50'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button onClick={() => setStep(0)} className="rounded-lg px-4 py-2 text-slate-600 hover:bg-slate-100">Indietro</button>
              <button
                onClick={finishOnboarding}
                className="rounded-lg bg-[#1E1B4B] px-5 py-2 font-semibold text-white shadow-md transition hover:translate-y-[-1px] hover:shadow-lg"
              >
                Personalizza e vai alla Dashboard
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
