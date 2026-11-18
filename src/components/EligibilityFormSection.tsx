import { FormEvent, useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, MapPin, Clock, MessageSquare } from 'lucide-react';
import {
  GIS_CAMPUS_INFO,
  JPK_PROGRAMS,
  nomborWhatsAppGIS,
} from '../config/gisConfig';

interface EligibilityFormSectionProps {
  selectedProgram: string;
  onProgramChange: (programTitle: string) => void;
}

interface FormState {
  parentName: string;
  studentName: string;
  studentAge: string;
  phone: string;
  program: string;
  needsPtpk: 'Ya, Perlu Pinjaman Yuran PTPK' | 'Bayaran Sendiri / Penaja';
  needsHostel: 'Ya, Perlu Asrama GIS Nilai' | 'Ulang-alik / Kediaman Sendiri';
}

interface FormErrors {
  parentName?: string;
  studentName?: string;
  studentAge?: string;
  phone?: string;
  program?: string;
}

export function EligibilityFormSection({
  selectedProgram,
  onProgramChange,
}: EligibilityFormSectionProps) {
  const [form, setForm] = useState<FormState>({
    parentName: '',
    studentName: '',
    studentAge: '18',
    phone: '',
    program: selectedProgram || JPK_PROGRAMS[0].title,
    needsPtpk: 'Ya, Perlu Pinjaman Yuran PTPK',
    needsHostel: 'Ya, Perlu Asrama GIS Nilai',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync automatically whenever user clicks "Tanya Mengenai Program Ini" on any card
  useEffect(() => {
    if (selectedProgram) {
      setForm((prev) => ({ ...prev, program: selectedProgram }));
      setSubmittedSummary(null);
    }
  }, [selectedProgram]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (form.parentName.trim().length < 2) {
      nextErrors.parentName = 'Sila masukkan nama ibu bapa atau penjaga.';
    }
    if (form.studentName.trim().length < 2) {
      nextErrors.studentName = 'Sila masukkan nama penuh anak (calon pelajar).';
    }

    const parsedAge = Number(form.studentAge);
    if (!Number.isFinite(parsedAge) || parsedAge < GIS_CAMPUS_INFO.minimumAge || parsedAge > 35) {
      nextErrors.studentAge =
        'Syarat kemasukan JPK di GIS Nilai adalah berumur 18 tahun ke atas.';
    }

    const cleanPhone = form.phone.replace(/[\s-]/g, '');
    if (!/^(\+?60|0)1[0-9]{8,9}$/.test(cleanPhone)) {
      nextErrors.phone = 'Sila masukkan nombor telefon / WhatsApp Malaysia yang sah (cth: 0123456789).';
    }

    if (!form.program) {
      nextErrors.program = 'Sila pilih satu program kemahiran JPK.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const summaryText = [
      'Salam Pegawai Kemasukan GIS Nilai,',
      'Saya ingin membuat semakan kelayakan Program Kemahiran JPK untuk anak saya:',
      '',
      `• Nama Ibu Bapa / Penjaga: ${form.parentName.trim()}`,
      `• Nama Anak (Pelajar): ${form.studentName.trim()}`,
      `• Umur Anak: ${form.studentAge} tahun`,
      `• No. Telefon Ibu Bapa: ${form.phone.trim()}`,
      `• Program Pilihan: ${form.program}`,
      `• Pembiayaan Yuran: ${form.needsPtpk}`,
      `• Kemudahan Asrama: ${form.needsHostel}`,
      '',
      'Mohon maklumkan tarikh kemasukan terdekat dan proses permohonan PTPK. Terima kasih.',
    ].join('\n');

    setSubmittedSummary(summaryText);
    setCopied(false);
  };

  const whatsappUrl = submittedSummary
    ? `https://wa.me/${nomborWhatsAppGIS}?text=${encodeURIComponent(submittedSummary)}`
    : '#';

  const handleCopySummary = async () => {
    if (!submittedSummary) return;
    try {
      await navigator.clipboard.writeText(submittedSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="semak-kelayakan" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Clear 3-Step Admission Briefing */}
          <div className="lg:col-span-5 reveal-left">
            <p className="text-sm font-semibold text-blue-900">
              Konsultasi & Semakan Kelayakan
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Semak Kelayakan Anak & Bantuan Pinjaman PTPK
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Lengkapkan maklumat ringkas di sebelah untuk menjana ringkasan permohonan dan
              berhubung terus melalui WhatsApp bersama Pegawai Kemasukan GIS Nilai.
            </p>

            <div className="mt-8 space-y-6 border-t border-slate-200 pt-7">
              <div>
                <div className="font-mono tabular-nums text-xs font-semibold text-amber-700">
                  01. Isi Maklumat Asas
                </div>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Masukkan nama ibu bapa, umur anak (18 tahun ke atas), pilihan program JPK serta
                  keperluan asrama dan PTPK.
                </p>
              </div>
              <div>
                <div className="font-mono tabular-nums text-xs font-semibold text-amber-700">
                  02. Jana Ringkasan Kelayakan
                </div>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Sistem menyediakan teks ringkasan tersusun supaya pegawai kemasukan dapat memberi
                  jawapan tepat tanpa soal jawab berulang.
                </p>
              </div>
              <div>
                <div className="font-mono tabular-nums text-xs font-semibold text-amber-700">
                  03. Terus Ke WhatsApp Pegawai GIS Nilai
                </div>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  Dapatkan pengesahan slot kemasukan, senarai dokumen PTPK, dan temujanji lawatan
                  kampus atau bengkel di Nilai.
                </p>
              </div>
            </div>

            {/* Campus Info Box */}
            <div className="mt-8 border border-slate-200 rounded-xl p-6 bg-slate-50 space-y-3">
              <h3 className="font-display text-base font-bold text-slate-900">
                Lokasi & Waktu Operasi Pejabat Kemasukan
              </h3>
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-blue-900 shrink-0 mt-1" />
                <span>{GIS_CAMPUS_INFO.address}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <Clock className="w-4 h-4 text-blue-900 shrink-0 mt-1" />
                <span>{GIS_CAMPUS_INFO.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form & Generated WhatsApp Summary */}
          <div className="lg:col-span-7 reveal-right">
            <div className="border border-slate-200 rounded-xl p-6 sm:p-8 bg-slate-50">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      Nama Ibu Bapa / Penjaga
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      value={form.parentName}
                      onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                      placeholder="Contoh: Encik Ahmad bin Salleh"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                    />
                    {errors.parentName && (
                      <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      No. Telefon / WhatsApp Ibu Bapa
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Contoh: 0191234567"
                      className="w-full px-3.5 py-2.5 text-sm font-mono bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="studentName"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      Nama Penuh Anak (Calon Pelajar)
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      value={form.studentName}
                      onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                      placeholder="Contoh: Muhammad Danish bin Ahmad"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                    />
                    {errors.studentName && (
                      <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                        {errors.studentName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="studentAge"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      Umur Anak (18+)
                    </label>
                    <input
                      id="studentAge"
                      type="number"
                      min={18}
                      max={35}
                      value={form.studentAge}
                      onChange={(e) => setForm({ ...form, studentAge: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm font-mono tabular-nums bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                    />
                    {errors.studentAge && (
                      <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                        {errors.studentAge}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="programSelect"
                    className="block text-sm font-semibold text-slate-800 mb-1.5"
                  >
                    Pilihan Program Kemahiran JPK
                  </label>
                  <select
                    id="programSelect"
                    value={form.program}
                    onChange={(e) => {
                      setForm({ ...form, program: e.target.value });
                      onProgramChange(e.target.value);
                    }}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                  >
                    {JPK_PROGRAMS.map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        {prog.indexLabel}. {prog.title} ({prog.qualification})
                      </option>
                    ))}
                  </select>
                  {errors.program && (
                    <p className="mt-1.5 text-xs font-medium text-red-700" role="alert">
                      {errors.program}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="needsPtpk"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      Keperluan Pinjaman PTPK
                    </label>
                    <select
                      id="needsPtpk"
                      value={form.needsPtpk}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          needsPtpk: e.target.value as FormState['needsPtpk'],
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                    >
                      <option value="Ya, Perlu Pinjaman Yuran PTPK">
                        Ya, Perlu Pinjaman Yuran PTPK
                      </option>
                      <option value="Bayaran Sendiri / Penaja">
                        Bayaran Sendiri / Penaja
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="needsHostel"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      Keperluan Asrama di Nilai
                    </label>
                    <select
                      id="needsHostel"
                      value={form.needsHostel}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          needsHostel: e.target.value as FormState['needsHostel'],
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
                    >
                      <option value="Ya, Perlu Asrama GIS Nilai">
                        Ya, Perlu Asrama GIS Nilai
                      </option>
                      <option value="Ulang-alik / Kediaman Sendiri">
                        Ulang-alik / Kediaman Sendiri
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Jana Ringkasan & Sediakan Pautan WhatsApp</span>
                </button>
              </form>

              {/* Generated Summary & Direct WhatsApp Action */}
              {submittedSummary && (
                <div
                  aria-live="polite"
                  className="mt-6 bg-white border border-blue-200 rounded-xl p-5 sm:p-6 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base font-bold text-slate-900">
                      Ringkasan Semakan Kelayakan Sedia Dihantar
                    </h3>
                    <span className="text-xs font-semibold text-amber-700">
                      Disahkan Layak Umur 18+
                    </span>
                  </div>

                  <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-lg p-4 leading-relaxed">
                    {submittedSummary}
                  </pre>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors duration-150 whitespace-nowrap"
                    >
                      <span>Hantar Ke WhatsApp Pegawai Kemasukan</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-blue-900" />
                          <span>Disalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Salin Teks</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
