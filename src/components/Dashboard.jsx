import React from 'react';
import { Trophy, Medal, Flame, Target, User } from 'lucide-react';

export default function Dashboard({ profile }) {
  const { level = 'Principiante', xp = 120, streak = 3 } = profile || {};
  const progress = 45;
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#A3FF12] text-[#1E1B4B]">
              <User className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm text-slate-500">Benvenut*</div>
              <div className="text-xl font-bold text-[#1E1B4B]">Il tuo percorso finanziario</div>
            </div>
          </div>
          <div className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700">{level}</div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <Stat label="XP" value={xp} icon={<Trophy className="h-5 w-5" />} />
          <Stat label="Streak" value={`${streak}🔥`} icon={<Flame className="h-5 w-5" />} />
          <Stat label="Obiettivo" value="5 min/die" icon={<Target className="h-5 w-5" />} />
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-[#1E1B4B]">Competenza finanziaria</span>
            <span className="text-sm text-slate-500">{progress}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full bg-gradient-to-r from-[#A3FF12] to-emerald-400" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-500">
            <span>Base</span>
            <span>Spese</span>
            <span>Investimenti</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Medal className="h-5 w-5 text-amber-600" />
            <h3 className="text-lg font-semibold text-[#1E1B4B]">Classifica settimanale</h3>
          </div>
          <div className="text-sm text-slate-500">Amici</div>
        </div>
        <ul className="space-y-2">
          {[{n:'Alex', xp: 240}, {n:'Marta', xp: 180}, {n:'Tu', xp: xp}].map((u, i) => (
            <li key={i} className="flex items-center justify-between rounded-lg border border-slate-100 p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">{i+1}</div>
                <span className="font-medium">{u.n}</span>
              </div>
              <span className="text-sm text-slate-600">{u.xp} XP</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Stat({ label, value, icon }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 flex items-center gap-2 text-xl font-bold text-[#1E1B4B]">
        {icon}
        {value}
      </div>
    </div>
  );
}
