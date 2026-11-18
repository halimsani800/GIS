import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { JPK_PROGRAMS, JpkProgram, ProgramCategory } from '../config/gisConfig';
import { ProgramIllustration } from './ProgramIllustration';

interface ProgramsSectionProps {
  onSelectProgram: (programTitle: string) => void;
}

const CATEGORIES: ProgramCategory[] = [
  'Semua',
  'Kejuruteraan & Teknikal',
  'Perkhidmatan & Hospitaliti',
];

export function ProgramsSection({ onSelectProgram }: ProgramsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>('Semua');

  const filteredPrograms: JpkProgram[] =
    selectedCategory === 'Semua'
      ? JPK_PROGRAMS
      : JPK_PROGRAMS.filter((prog) => prog.category === selectedCategory);

  return (
    <section id="program-jpk" className="bg-slate-50 py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-900">
              Senarai Program Kemahiran Bertauliah JPK
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              6 Bidang Kemahiran Tinggi Di Kampus GIS Nilai
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Pilih kategori untuk menapis bidang latihan, dan klik{' '}
              <span className="font-semibold text-slate-800">“Tanya Mengenai Program Ini”</span>{' '}
              untuk mengisi pilihan program terus ke dalam borang semakan kelayakan.
            </p>
          </div>

          {/* Interactive Filter Controls (Buttons allowed by design constitution) */}
          <div
            role="group"
            aria-label="Penapis kategori program"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 bg-white border border-slate-200 rounded-xl self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-700 ${
                    isActive
                      ? 'bg-blue-900 text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <article
              key={program.id}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-blue-300 transition-colors duration-150"
            >
              <div>
                {/* Clean visual illustration header */}
                <ProgramIllustration programId={program.id} />

                {/* Unboxed metadata with middot separators (Zero-Pill Discipline) */}
                <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500">
                  <span className="font-mono tabular-nums font-semibold text-amber-700">
                    {program.indexLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{program.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-blue-900">{program.qualification}</span>
                </div>

                {/* Card Title */}
                <h3 className="mt-2 font-display text-xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-500">
                  Fokus Industri: {program.industryFocus}
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {program.summary}
                </p>

                {/* Learning Outcomes */}
                <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  {program.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-3">
                <div className="text-xs text-slate-500 font-mono tabular-nums">
                  Tempoh: {program.duration}
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProgram(program.title)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <span>Tanya Mengenai Program Ini</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
