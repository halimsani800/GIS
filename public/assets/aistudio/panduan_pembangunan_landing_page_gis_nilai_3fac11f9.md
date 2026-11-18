# Dokumentasi Pembangunan Landing Page — Global Institute of Studies (GIS), Nilai

Dokumen ini merupakan panduan teknikal dan struktur pembangunan *landing page* rasmi untuk **Global Institute of Studies (GIS), Nilai, Negeri Sembilan** bagi program kemahiran bertauliah **Jabatan Pembangunan Kemahiran (JPK)**.

---

## 1. Objektif & Sasaran Pengguna
* **Sasaran Utama:** Ibu bapa dan penjaga yang mempunyai anak berumur **18 tahun ke atas**.
* **Fokus Penyelesaian Kerisauan Ibu Bapa:**
  1. **Masalah Kewangan & Yuran:** Penyediaan **Pinjaman Yuran Pengajian PTPK**, bantuan elaun sara diri (bagi yang layak), serta khidmat nasihat mengurus kewangan pelajar.
  2. **Keselamatan & Sahsiah Anak:** Kawalan disiplin asrama dan kampus di Nilai serta pemantauan rapat melalui **Program Mentor-Mentee**.
  3. **Jaminan Belajar:** Silibus berasaskan **70% amali (hands-on) & 30% teori** di bawah piawaian JPK sehingga pelajar layak menerima Sijil Kemahiran Malaysia (SKM).
  4. **Jaminan Pekerjaan:** **Pendedahan industri awal** (latihan industri / OJT) serta bantuan **penempatan pekerjaan** bersama panel majikan selepas tamat belajar.

---

## 2. Senarai 6 Program Kemahiran JPK
1. **Teknologi Kimpalan** (Industri Minyak & Gas, Perkapalan, Fabrikasi Struktur)
2. **Teknologi Automotif** (Servis Kenderaan, Diagnostik Elektronik & Pengurusan Bengkel)
3. **Penjagaan Orang Tua** (Penjagaan Warga Emas, Rehabilitasi & Kesihatan Komuniti)
4. **Pendidikan Awal Kanak-Kanak** (Asuhan, Bimbingan Kreatif & Pengurusan Taska/Tadika)
5. **Teknologi Elektrik** (Pendawaian 1 Fasa & 3 Fasa, Kawalan Motor & Penyelenggaraan)
6. **Seni Kulinari** (Penyediaan Makanan Komersial, Pastri & Operasi Dapur Hotel)

---

## 3. Spesifikasi Reka Bentuk & Teknikal
* **Tema Visual:** 100% **Light Mode** (latar belakang putih `#FFFFFF` dan kelabu lembut `#F8FAFC` dengan aksen Biru Korporat `#1E3A8A` / `#2563EB` dan Emas/Amber `#D97706`) bagi memberikan imej telus, bersih, dan meyakinkan ibu bapa.
* **Wide-Screen Cinematic Hero Banner:** Susun atur penuh skrin (`min-h-[92vh]`) dengan imej bengkel moden beranimasi perlahan (*cinematic pan*), tindihan kecerunan cerah (*light gradient overlay*), dan kad ringkasan *4 Teras Ketenangan Ibu Bapa*.
* **Animasi Transisi Skrol:** Menggunakan `IntersectionObserver` (`class="reveal"`, `.reveal-left`, `.reveal-right`, dan `.delay-*`) untuk efek kemunculan teks dan kad yang halus tanpa membebankan prestasi pelayar.
* **Penapis Program & Borang WhatsApp:**
  * Ibu bapa boleh menapis program mengikut kategori dan klik *"Tanya Mengenai Program Ini"* untuk mengisi pilihan program secara automatik di dalam borang.
  * Borang semakan kelayakan menjana ringkasan maklumat serta pautan terus ke WhatsApp Pegawai Kemasukan.

---

## 4. Langkah Konfigurasi Sebelum Pelancaran (Production)
1. **Tukar Nombor WhatsApp Rasmi:**
   * Buka fail `index.html` dan cari baris `const nomborWhatsAppGIS = '60123456789';` di bahagian `<script>`.
   * Gantikan `60123456789` dengan nombor telefon rasmi Pegawai Kemasukan GIS Nilai (format antarabangsa tanpa tanda `+`, contoh: `60191234567`).
2. **Ganti Imej Hero (Pilihan):**
   * Gantikan URL imej pada tag `<img>` di dalam seksyen Hero dengan gambar sebenar kampus atau bengkel praktikal GIS Nilai beresolusi tinggi (nisbah 16:9 widescreen).
3. **Integrasi Analitik & Pixel Pemasaran:**
   * Masukkan kod *Google Analytics 4 (GA4)* atau *Meta Pixel* di dalam bahagian `<head>` untuk menjejak kadar penukaran (*conversion rate*) pendaftaran ibu bapa daripada kempen iklan.