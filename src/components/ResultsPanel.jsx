import React from 'react';
import { Award, Flame, Zap } from 'lucide-react';

export default function ResultsPanel({ result, onContinue }) {
  if (!result) return null;
  const { xp = 20, correct = true, streak = 3 } = result;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lime-100 text-[#1E1B4B]">
        <Award className="h-8 w-8" />
      </div>
      <h3 className="text-2xl font-bold text-[#1E1B4B]">{correct ? 'Ottimo lavoro!' : 'Ben fatto, continua a esercitarti!'}</h3>
      <p className="mt-2 text-slate-600">Hai guadagnato +{xp} XP {correct ? '🎉' : '✅'} Continua così e sbloccherai il livello "Investitore consapevole".</p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-amber-700">
          <Zap className="h-4 w-4" /> XP: {xp}
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-orange-700">
          <Flame className="h-4 w-4" /> Streak: {streak}
        </div>
      </div>
      <button
        onClick={onContinue}
        className="mt-6 rounded-full bg-[#1E1B4B] px-6 py-3 font-semibold text-white shadow-md transition hover:translate-y-[-1px] hover:shadow-lg"
      >
        Continua
      </button>
    </div>
  );
}
