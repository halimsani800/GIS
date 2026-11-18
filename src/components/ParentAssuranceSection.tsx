import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PARENT_PILLARS } from '../config/gisConfig';

interface PillarDetail {
  index: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  points: string[];
  parentOutcome: string;
}

const PILLAR_DETAILS: PillarDetail[] = [
  {
    index: '01',
    tabLabel: '01. Kewangan & PTPK',
    title: 'Pinjaman Yuran Pengajian PTPK & Bantuan Elaun Sara Diri',
    subtitle:
      'Mengurangkan beban kewangan keluarga supaya anak boleh memulakan latihan kemahiran tanpa tertangguh.',
    points: [
      'Urusan permohonan Pinjaman Yuran Pengajian di bawah Perbadanan Tabung Pembangunan Kemahiran (PTPK) dibimbing oleh pegawai GIS.',
      'Kelayakan elaun sara diri bulanan bagi pelajar yang memenuhi syarat kelayakan PTPK semasa tempoh pengajian.',
      'Khidmat nasihat perancangan kewangan pelajar agar penggunaan elaun lebih terurus sepanjang menetap di Nilai.',
    ],
    parentOutcome:
      'Ibu bapa menerima taklimat struktur yuran dan kelayakan PTPK secara telus sebelum mendaftar.',
  },
  {
    index: '02',
    tabLabel: '02. Asrama & Sahsiah',
    title: 'Kawalan Disiplin Asrama & Program Mentor-Mentee di Nilai',
    subtitle:
      'Persekitaran kampus dan kediaman yang selamat serta dipantau rapi untuk anak berusia 18 tahun ke atas.',
    points: [
      'Asrama pelajar berasingan dengan peraturan waktu keluar masuk yang direkod dan dipantau oleh warden bertugas.',
      'Setiap pelajar dipadankan bersama pensyarah pembimbing melalui Program Mentor-Mentee untuk memantau kehadiran dan disiplin.',
      'Saluran komunikasi terus kepada ibu bapa sekiranya berlaku isu kehadiran, kesihatan atau keperluan bimbingan.',
    ],
    parentOutcome:
      'Ketenangan fikiran untuk keluarga di luar Negeri Sembilan kerana perkembangan anak dipantau rapat.',
  },
  {
    index: '03',
    tabLabel: '03. Silibus 70:30',
    title: 'Pembelajaran 70% Amali Bengkel & 30% Teori Piawaian JPK',
    subtitle:
      'Kaedah praktikal berfokus kemahiran sebenar sehingga pelajar layak dianugerahkan Sijil Kemahiran Malaysia (SKM).',
    points: [
      '70% waktu pengajian dijalankan terus di bengkel teknikal, dapur latihan, atau bilik simulasi klinikal & asuhan.',
      '30% teori tertumpu kepada pemahaman keselamatan kerja, bacaan pelan teknikal, dan piawaian kompetensi JPK.',
      'Penilaian berasaskan kecekapan amali berterusan yang memberi peluang kepada pelajar menyerlah walaupun kurang cenderung pada akademik tradisional.',
    ],
    parentOutcome:
      'Anak membina keyakinan diri dan penguasaan kemahiran tangan yang boleh diukur oleh majikan.',
  },
  {
    index: '04',
    tabLabel: '04. Laluan Kerjaya',
    title: 'Pendedahan Industri Awal (OJT) & Bantuan Penempatan Pekerjaan',
    subtitle:
      'Latihan tidak berhenti di dalam kelas; pelajar disambungkan terus dengan keperluan tenaga mahir industri.',
    points: [
      'Latihan industri (On-the-Job Training / OJT) bersama syarikat, pusat servis, hospital komuniti, tadika, dan hotel rakan industri.',
      'Bimbingan penyediaan resume teknikal, etika temuduga kerja, serta persediaan menghadapi suasana tempat kerja sebenar.',
      'Sokongan padanan kerja bersama rangkaian panel majikan GIS Nilai selepas pelajar berjaya menamatkan latihan SKM.',
    ],
    parentOutcome:
      'Hala tuju kerjaya yang jelas sebaik tamat pengajian bagi membantu anak berdikari dan menyumbang kepada keluarga.',
  },
];

interface ParentAssuranceSectionProps {
  onConsultClick: () => void;
}

export function ParentAssuranceSection({ onConsultClick }: ParentAssuranceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = PILLAR_DETAILS[activeIndex];

  return (
    <section id="jaminan-ibu-bapa" className="bg-white py-20 lg:py-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="reveal max-w-3xl">
          <p className="text-sm font-semibold text-blue-900">
            Penyelesaian 4 Kerisauan Utama Ibu Bapa
          </p>
          <h2
            className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Mengapa Ibu Bapa Memilih GIS Nilai Untuk Masa Depan Anak
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Kami memahami keutamaan keluarga apabila menghantar anak berumur 18 tahun ke atas
            untuk menyambung latihan kemahiran: pembiayaan yang jelas, keselamatan terjaga,
            pengiktirafan rasmi JPK, dan peluang kerja sebenar.
          </p>
        </div>

        {/* Interactive Mechanism & Proof Grid */}
        <div
          id="pembiayaan"
          className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          {/* Left Column: Quantitative Ratio Breakdown & Pillar Selector */}
          <div className="lg:col-span-5 reveal-left flex flex-col justify-between gap-6">
            {/* Interactive Pillar Tabs */}
            <div
              role="tablist"
              aria-label="Teras Jaminan Ibu Bapa"
              className="flex flex-col gap-2"
            >
              {PILLAR_DETAILS.map((item, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={item.index}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-700 ${
                      isSelected
                        ? 'bg-blue-900 text-white border-blue-900'
                        : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-display font-semibold text-sm sm:text-base whitespace-nowrap truncate">
                        {item.tabLabel}
                      </span>
                      <span
                        className={`text-xs font-mono shrink-0 ${
                          isSelected ? 'text-amber-300' : 'text-slate-400'
                        }`}
                      >
                        {isSelected ? 'Dipilih' : 'Lihat'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 70% Amali / 30% Teori Visual Proof Block */}
            <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-base font-bold text-slate-900">
                  Struktur Silibus Bertauliah JPK
                </h3>
                <span className="font-mono tabular-nums text-xs font-semibold text-blue-900">
                  70% : 30%
                </span>
              </div>

              <div className="mt-4 w-full h-3.5 rounded-full overflow-hidden bg-slate-200 flex">
                <div
                  className="bg-blue-900 h-full transition-all duration-300"
                  style={{ width: '70%' }}
                  aria-label="70 peratus amali"
                />
                <div
                  className="bg-amber-600 h-full transition-all duration-300"
                  style={{ width: '30%' }}
                  aria-label="30 peratus teori"
                />
              </div>

              <div className="mt-3.5 grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="font-mono tabular-nums font-bold text-blue-900">70%</span>{' '}
                  <span className="text-slate-700 font-medium">Latihan Amali Bengkel</span>
                </div>
                <div className="text-right">
                  <span className="font-mono tabular-nums font-bold text-amber-700">30%</span>{' '}
                  <span className="text-slate-700 font-medium">Teori & Keselamatan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Active Pillar Detailed Explanation */}
          <div className="lg:col-span-7 reveal-right">
            <div className="h-full border border-slate-200 rounded-xl p-7 sm:p-9 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="font-mono tabular-nums text-amber-700 font-semibold">
                    Teras {current.index}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Piawaian GIS Nilai</span>
                </div>

                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                  {current.title}
                </h3>

                <p className="mt-3 text-base text-slate-600 leading-relaxed">
                  {current.subtitle}
                </p>

                <ul className="mt-7 space-y-4 border-t border-slate-100 pt-6">
                  {current.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3.5">
                      <span className="mt-0.5 w-6 h-6 rounded-md bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">Jaminan Ibu Bapa: </span>
                  {current.parentOutcome}
                </p>

                <button
                  type="button"
                  onClick={onConsultClick}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-700"
                >
                  <span>Semak Kelayakan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Row of all 4 pillars for immediate scannability */}
        <div className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {PARENT_PILLARS.map((pillar) => (
            <div key={pillar.index} className="space-y-1.5">
              <div className="text-xs font-mono tabular-nums font-semibold text-amber-700">
                {pillar.index}. {pillar.title}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.proofHighlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
