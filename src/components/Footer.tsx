import { GIS_CAMPUS_INFO } from '../config/gisConfig';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="font-display text-base font-bold text-slate-900">
              {GIS_CAMPUS_INFO.institutionName}
            </div>
            <p className="mt-1 text-sm text-slate-600">
              {GIS_CAMPUS_INFO.accreditation} · {GIS_CAMPUS_INFO.location}
            </p>
          </div>

          <nav
            aria-label="Pautan Footer"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600"
          >
            <a href="#utama" className="hover:text-blue-900 transition-colors">
              Utama
            </a>
            <a href="#jaminan-ibu-bapa" className="hover:text-blue-900 transition-colors">
              Jaminan Ibu Bapa
            </a>
            <a href="#program-jpk" className="hover:text-blue-900 transition-colors">
              6 Program JPK
            </a>
            <a href="#semak-kelayakan" className="hover:text-blue-900 transition-colors">
              Semak Kelayakan
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Global Institute of Studies (GIS), Nilai, Negeri
            Sembilan. Hak cipta terpelihara.
          </p>
          <p>Program Kemahiran Bertauliah JPK · Syarat Umur Minimum 18 Tahun Ke Atas</p>
        </div>
      </div>
    </footer>
  );
}
