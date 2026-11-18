/**
 * Konfigurasi Rasmi Global Institute of Studies (GIS), Nilai.
 *
 * LANGKAH SEBELUM PELANCARAN (PRODUCTION):
 * Gantikan nomborWhatsAppGIS di bawah dengan nombor rasmi Pegawai Kemasukan
 * GIS Nilai (format antarabangsa tanpa tanda '+', contoh: '60191234567').
 */
export const nomborWhatsAppGIS = '60123456789';

export const GIS_CAMPUS_INFO = {
  institutionName: 'Global Institute of Studies (GIS)',
  shortName: 'GIS Nilai',
  accreditation: 'Pusat Bertauliah Jabatan Pembangunan Kemahiran (JPK)',
  location: 'Nilai, Negeri Sembilan',
  address: 'Bandar Baru Nilai, 71800 Nilai, Negeri Sembilan Darul Khusus',
  officeHours: 'Isnin – Jumaat: 9:00 pagi – 5:30 petang · Sabtu: 9:00 pagi – 1:00 tengah hari',
  minimumAge: 18,
} as const;

export type ProgramCategory = 'Semua' | 'Kejuruteraan & Teknikal' | 'Perkhidmatan & Hospitaliti';

export interface JpkProgram {
  id: string;
  code: string;
  indexLabel: string;
  title: string;
  category: Exclude<ProgramCategory, 'Semua'>;
  qualification: string;
  duration: string;
  industryFocus: string;
  summary: string;
  outcomes: string[];
}

export const JPK_PROGRAMS: JpkProgram[] = [
  {
    id: 'kimpalan',
    code: 'MC-024',
    indexLabel: '01',
    title: 'Teknologi Kimpalan',
    category: 'Kejuruteraan & Teknikal',
    qualification: 'SKM Tahap 2 & Tahap 3',
    duration: '12 – 18 Bulan (70% Bengkel Amali)',
    industryFocus: 'Industri Minyak & Gas, Perkapalan & Fabrikasi Struktur',
    summary:
      'Latihan kemahiran kimpalan arka, MIG, TIG dan pemeriksaan mutu sambungan logam mengikut piawaian keselamatan bengkel industri berat.',
    outcomes: [
      'Kemahiran kimpalan plat dan paip pelbagai posisi',
      'Pematuhan prosedur keselamatan & kesihatan pekerjaan (OSHA)',
      'Laluan kerjaya sebagai Jurukimpal Berkemahiran di sektor marin & minyak gas',
    ],
  },
  {
    id: 'automotif',
    code: 'TP-300',
    indexLabel: '02',
    title: 'Teknologi Automotif',
    category: 'Kejuruteraan & Teknikal',
    qualification: 'SKM Tahap 2 & Tahap 3',
    duration: '12 – 18 Bulan (70% Bengkel Amali)',
    industryFocus: 'Servis Kenderaan, Diagnostik Elektronik & Pengurusan Bengkel',
    summary:
      'Pendedahan langsung kepada penyelenggaraan enjin, sistem brek, transmisi, penyaman udara kenderaan serta pengesanan kerosakan komputer (ECU).',
    outcomes: [
      'Diagnostik elektronik kenderaan moden menggunakan pengimbas industri',
      'Servis sistem mekanikal, suspensi dan penyelenggaraan berkala',
      'Persediaan sebagai Mekanik Bertauliah atau Penyelia Pusat Servis',
    ],
  },
  {
    id: 'elektrik',
    code: 'EE-320',
    indexLabel: '03',
    title: 'Teknologi Elektrik',
    category: 'Kejuruteraan & Teknikal',
    qualification: 'SKM Tahap 2 & Tahap 3',
    duration: '12 – 18 Bulan (70% Bengkel Amali)',
    industryFocus: 'Pendawaian 1 Fasa & 3 Fasa, Kawalan Motor & Penyelenggaraan',
    summary:
      'Latihan praktikal pemasangan litar elektrik domestik dan industri, papan agihan, kawalan motor elektrik serta pengujian litar mengikut piawaian keselamatan.',
    outcomes: [
      'Pemasangan dan pengujian pendawaian 1 Fasa & 3 Fasa',
      'Penyelenggaraan sistem kawalan motor dan panel industri',
      'Peluang kerjaya sebagai Juruteknik Elektrik di kilang dan kontraktor berdaftar',
    ],
  },
  {
    id: 'penjagaan-orang-tua',
    code: 'HT-050',
    indexLabel: '04',
    title: 'Penjagaan Orang Tua',
    category: 'Perkhidmatan & Hospitaliti',
    qualification: 'SKM Tahap 2 & Tahap 3',
    duration: '12 – 15 Bulan (70% Amali Klinikal & Komuniti)',
    industryFocus: 'Penjagaan Warga Emas, Rehabilitasi & Kesihatan Komuniti',
    summary:
      'Melatih penjaga profesional yang cekap dalam pemantauan kesihatan asas, bantuan mobiliti, pemakanan seimbang serta sokongan emosi warga emas.',
    outcomes: [
      'Teknik penjagaan harian, pemantauan tanda vital dan kebersihan diri',
      'Bantuan rehabilitasi ringan dan pengurusan kecemasan asas',
      'Permintaan tinggi di pusat jagaan swasta, hospital komuniti & pusat rehabilitasi',
    ],
  },
  {
    id: 'pendidikan-awal-kanak-kanak',
    code: 'T982',
    indexLabel: '05',
    title: 'Pendidikan Awal Kanak-Kanak',
    category: 'Perkhidmatan & Hospitaliti',
    qualification: 'SKM Tahap 3',
    duration: '12 – 15 Bulan (70% Amali & Praktikum Taska/Tadika)',
    industryFocus: 'Asuhan, Bimbingan Kreatif & Pengurusan Taska / Tadika',
    summary:
      'Latihan menyeluruh dalam perkembangan sahsiah, keselamatan kanak-kanak, perancangan aktiviti pembelajaran kreatif serta pengendalian operasi taska.',
    outcomes: [
      'Penyediaan modul pembelajaran bermain sambil belajar mengikut peringkat umur',
      'Asas pertolongan cemas kanak-kanak, nutrisi dan keselamatan premis',
      'Layak berkhidmat sebagai Pendidik Bertauliah atau Pengurus Taska & Tadika',
    ],
  },
  {
    id: 'seni-kulinari',
    code: 'HT-012',
    indexLabel: '06',
    title: 'Seni Kulinari',
    category: 'Perkhidmatan & Hospitaliti',
    qualification: 'SKM Tahap 2 & Tahap 3',
    duration: '12 – 18 Bulan (70% Dapur Komersial)',
    industryFocus: 'Penyediaan Makanan Komersial, Pastri & Operasi Dapur Hotel',
    summary:
      'Latihan intensif di dapur latihan komersial merangkumi teknik potongan, masakan tempatan & antarabangsa, asas pastri, serta kawalan kebersihan makanan.',
    outcomes: [
      'Penguasaan teknik masakan panas, sajian katering dan asas bakeri',
      'Pengurusan inventori dapur, kos sajian dan piawaian keselamatan makanan',
      'Penempatan kerjaya di hotel, resort, restoran rangkaian & sektor hospitaliti',
    ],
  },
];

export interface ParentPillar {
  index: string;
  title: string;
  headline: string;
  description: string;
  proofHighlight: string;
}

export const PARENT_PILLARS: ParentPillar[] = [
  {
    index: '01',
    title: 'Kewangan & Pinjaman PTPK',
    headline: 'Pinjaman Yuran & Elaun Sara Diri',
    description:
      'Penyediaan laluan Pinjaman Yuran Pengajian Perbadanan Tabung Pembangunan Kemahiran (PTPK), bantuan elaun sara diri bagi yang layak, serta khidmat nasihat pengurusan kewangan pelajar.',
    proofHighlight: 'Bimbingan penuh permohonan PTPK sebelum kemasukan bermula.',
  },
  {
    index: '02',
    title: 'Keselamatan & Sahsiah Anak',
    headline: 'Asrama Terkawal & Mentor-Mentee',
    description:
      'Kawalan disiplin asrama dan kampus di Nilai dipantau secara berkala bersama Program Mentor-Mentee agar ibu bapa sentiasa maklum tentang kehadiran dan perkembangan sahsiah anak.',
    proofHighlight: 'Pemantauan warden asrama & laporan berkala melalui mentor.',
  },
  {
    index: '03',
    title: 'Jaminan Belajar 70 : 30',
    headline: '70% Amali Bengkel · 30% Teori JPK',
    description:
      'Silibus dirangka khusus untuk pelajar yang lebih menyerlah melalui latihan praktikal berterusan sehingga layak dianugerahkan Sijil Kemahiran Malaysia (SKM) bertauliah JPK.',
    proofHighlight: 'Penilaian kompetensi berterusan di bengkel berpiawaian industri.',
  },
  {
    index: '04',
    title: 'Jaminan Laluan Pekerjaan',
    headline: 'OJT Awal & Panel Majikan',
    description:
      'Pelajar didedahkan dengan latihan industri awal (On-the-Job Training) dan dibantu melalui padanan penempatan kerja bersama rangkaian panel majikan GIS selepas tamat pengajian.',
    proofHighlight: 'Sokongan penyediaan resume, temuduga & padanan kerja industri.',
  },
];
