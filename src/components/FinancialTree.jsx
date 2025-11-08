import React from 'react';
import { CheckCircle2, Lock, BookOpen, CreditCard, LineChart, Receipt, Brain } from 'lucide-react';

const nodes = [
  { id: 'base1', label: 'Cos’è il denaro', icon: BookOpen, color: 'bg-lime-100 text-[#1E1B4B]' },
  { id: 'base2', label: 'Bilancio personale', icon: Receipt, color: 'bg-lime-100 text-[#1E1B4B]' },
  { id: 'spese1', label: 'Budget & spese', icon: CreditCard, color: 'bg-emerald-100 text-emerald-900' },
  { id: 'invest1', label: 'ETF & azioni', icon: LineChart, color: 'bg-sky-100 text-sky-900' },
  { id: 'tasse1', label: 'Tasse & INPS', icon: Receipt, color: 'bg-orange-100 text-orange-900' },
  { id: 'mind1', label: 'Mindset', icon: Brain, color: 'bg-violet-100 text-violet-900' },
];

export default function FinancialTree({ onOpenLesson }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[#1E1B4B]">Percorso a livelli</h2>
        <div className="text-sm text-slate-500">Completa le unità per sbloccare le successive</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nodes.map((n, idx) => {
          const Icon = n.icon;
          const unlocked = idx < 3; // first 3 unlocked demo
          const completed = idx === 0; // first completed demo
          return (
            <button
              key={n.id}
              onClick={() => unlocked && onOpenLesson(n)}
              className={`group flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                unlocked ? 'border-slate-200 hover:border-[#1E1B4B] hover:shadow-md' : 'border-slate-100 opacity-60'
              } ${n.color}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/70">
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">{n.label}</div>
                <div className="text-xs text-slate-600">Unità {idx + 1}</div>
              </div>
              {completed ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              ) : unlocked ? (
                <div className="rounded-full bg-[#A3FF12] px-2 py-1 text-xs font-semibold text-[#1E1B4B]">GO</div>
              ) : (
                <Lock className="h-5 w-5 text-slate-400" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
