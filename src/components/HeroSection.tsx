import { ArrowRight } from 'lucide-react';
import { PARENT_PILLARS } from '../config/gisConfig';

interface HeroSectionProps {
  onPrimaryCta: () => void;
}

export function HeroSection({ onPrimaryCta }: HeroSectionProps) {
  return (
    <section
      id="utama"
      className="relative overflow-hidden bg-slate-50 border-b border-slate-200 min-h-[88vh] flex flex-col justify-between"
    >
      {/* Subtle architectural workshop vector backdrop with slow cinematic pan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      >
        <div className="hero-cinematic-pan absolute inset-0">
          <svg
            viewBox="0 0 1440 820"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover opacity-55"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Subtle architectural blueprint grid */}
            <defs>
              <pattern id="gisGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="0.7"
                  strokeOpacity="0.45"
                />
              </pattern>
              <linearGradient id="campusGlow" x1="800" y1="60" x2="1380" y2="700" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0.55" />
                <stop offset="55%" stopColor="#EFF6FF" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            <rect width="1440" height="820" fill="url(#gisGrid)" />
            <circle cx="1140" cy="300" r="380" fill="url(#campusGlow)" />

            {/* Modern vocational campus & technical workshop architectural perspective lines */}
            <g stroke="#94A3B8" strokeOpacity="0.42" strokeWidth="1.2">
              <path d="M760 660 L1020 190 L1380 190 L1380 660 Z" fill="#FFFFFF" fillOpacity="0.65" />
              <path d="M1020 190 L1020 660" />
              <path d="M840 515 L1380 515" />
              <path d="M895 415 L1380 415" />
              <path d="M950 315 L1380 315" />
              {/* Workshop bay ribs */}
              <path d="M1110 190 L1110 660" />
              <path d="M1200 190 L1200 660" />
              <path d="M1290 190 L1290 660" />
            </g>

            {/* Precision mechanical & electrical CAD accents on the right flank */}
            <g stroke="#1E3A8A" strokeOpacity="0.22" strokeWidth="1.5">
              <circle cx="1155" cy="365" r="76" strokeDasharray="6 6" />
              <circle cx="1155" cy="365" r="46" />
              <path d="M1155 268 L1155 462" />
              <path d="M1058 365 L1252 365" />
            </g>
            <g stroke="#D97706" strokeOpacity="0.35" strokeWidth="1.5">
              <rect x="1080" y="540" width="150" height="72" rx="6" />
              <path d="M1104 576 H1206" />
            </g>
          </svg>
        </div>

        {/* Light gradient scrim ensuring WCAG AA/AAA text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/45" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      {/* Main Hero Content Split */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 pb-10 lg:pt-16 lg:pb-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch w-full">
          {/* Left Dominant Focal Carrier */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed metadata trust marker */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium text-blue-900 mb-5">
              <span>Pusat Bertauliah JPK</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Kampus Nilai, Negeri Sembilan</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Pelajar 18 Tahun Ke Atas</span>
            </div>

            <h1
              className="font-display font-extrabold tracking-tight text-slate-900 leading-[1.12] max-w-2xl"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.65rem)',
                textWrap: 'balance',
              }}
            >
              Masa Depan Terjamin Dengan Kemahiran Bertauliah JPK di Nilai
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Platform khas untuk ibu bapa merancang laluan pendidikan praktikal anak berumur 18
              tahun ke atas. Dilengkapi kemudahan Pinjaman Yuran PTPK, asrama terkawal di Nilai,
              70% latihan amali bengkel, dan bimbingan penempatan kerja industri.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={onPrimaryCta}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                <span>Semak Kelayakan & Bantuan PTPK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#program-jpk"
                className="inline-flex items-center py-2.5 px-1 text-sm sm:text-base font-semibold text-blue-900 hover:text-amber-700 border-b border-blue-900/30 hover:border-amber-600 transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Lihat 6 Program Kemahiran
              </a>
            </div>
          </div>

          {/* Right Structural Editorial Proof Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-amber-700 tracking-wide">
                  Ringkasan Kemasukan Kampus Nilai
                </p>
                <h2 className="mt-2 font-display text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  Pendekatan Praktikal Untuk Anak Berkembang & Berdikari
                </h2>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  Direka khas untuk pelajar yang lebih berminat pada pembelajaran tangan (hands-on)
                  berbanding peperiksaan teori semata-mata.
                </p>
              </div>

              {/* Clean Tabular Key Metrics */}
              <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-2 gap-5">
                <div>
                  <div className="font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-blue-900">
                    70% : 30%
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-slate-700">
                    Nisbah Amali Bengkel vs Teori
                  </div>
                </div>
                <div>
                  <div className="font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-amber-700">
                    SKM 2 & 3
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-slate-700">
                    Persijilan Rasmi JPK Malaysia
                  </div>
                </div>
                <div>
                  <div className="font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-slate-900">
                    18+ Thn
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-slate-700">
                    Syarat Umur Minimum Pelajar
                  </div>
                </div>
                <div>
                  <div className="font-mono tabular-nums text-2xl sm:text-3xl font-semibold text-slate-900">
                    6 Bidang
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-slate-700">
                    Program Kemahiran Tinggi
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Pinjaman Yuran PTPK · Asrama Nilai Disediakan</span>
                <span className="font-semibold text-blue-900">OJT Industri</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Row: 4 Teras Ketenangan Ibu Bapa */}
      <div className="relative z-10 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">
              4 Teras Ketenangan Ibu Bapa
            </h2>
            <p className="text-sm text-slate-500">
              Penyelesaian menyeluruh dari pembiayaan hingga penempatan kerjaya
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PARENT_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="border border-slate-200 rounded-xl p-5 bg-slate-50/70 hover:bg-white hover:border-blue-300 transition-colors duration-150"
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono tabular-nums text-sm font-semibold text-amber-700">
                    {pillar.index}.
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {pillar.headline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
