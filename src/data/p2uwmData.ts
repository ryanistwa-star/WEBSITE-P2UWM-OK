import {
  ShrimpPrice,
  PriceHistoryPoint,
  Officer,
  PastLeader,
  Member,
  TechnicalReport,
  ForumPost,
  NewsArticle,
  TrainingModule,
  MeetingAgenda,
  ActivityReport
} from '../types';

export const P2UWM_ASSETS = {
  hero: '/src/assets/images/p2uwm_hero_aquaculture_1791640449995.jpg',
  harvest: '/src/assets/images/p2uwm_shrimp_harvest_1791640464170.jpg',
  meeting: '/src/assets/images/p2uwm_farmer_meeting_1791640476865.jpg',
  canal: '/src/assets/images/p2uwm_canal_infrastructure_1791640489025.jpg'
};

export const INITIAL_SHRIMP_PRICES: ShrimpPrice[] = [
  { size: 30, pricePerKg: 104000, change24h: 1500, trend: 'up', minRange: 102000, maxRange: 106000, updatedAt: '10 Okt 2026 06:00 WIB' },
  { size: 40, pricePerKg: 91000, change24h: 1000, trend: 'up', minRange: 89500, maxRange: 92500, updatedAt: '10 Okt 2026 06:00 WIB' },
  { size: 50, pricePerKg: 81500, change24h: 500, trend: 'up', minRange: 80000, maxRange: 83000, updatedAt: '10 Okt 2026 06:00 WIB' },
  { size: 60, pricePerKg: 73000, change24h: 0, trend: 'stable', minRange: 72000, maxRange: 74000, updatedAt: '10 Okt 2026 06:00 WIB' },
  { size: 70, pricePerKg: 67500, change24h: -500, trend: 'down', minRange: 66500, maxRange: 68500, updatedAt: '10 Okt 2026 06:00 WIB' },
  { size: 80, pricePerKg: 62000, change24h: 0, trend: 'stable', minRange: 61000, maxRange: 63000, updatedAt: '10 Okt 2026 06:00 WIB' },
  { size: 100, pricePerKg: 54000, change24h: 500, trend: 'up', minRange: 53000, maxRange: 55000, updatedAt: '10 Okt 2026 06:00 WIB' }
];

export const PRICE_TREND_SERIES: PriceHistoryPoint[] = [
  { date: '04 Okt', size30: 101000, size50: 79500, size70: 66000, size100: 52500 },
  { date: '05 Okt', size30: 101500, size50: 80000, size70: 66500, size100: 53000 },
  { date: '06 Okt', size30: 102000, size50: 80500, size70: 67000, size100: 53000 },
  { date: '07 Okt', size30: 102500, size50: 81000, size70: 67500, size100: 53500 },
  { date: '08 Okt', size30: 103000, size50: 81000, size70: 68000, size100: 53500 },
  { date: '09 Okt', size30: 103500, size50: 81000, size70: 68000, size100: 53500 },
  { date: '10 Okt', size30: 104000, size50: 81500, size70: 67500, size100: 54000 }
];

export const OFFICERS: Officer[] = [
  // Pengurus Pusat
  {
    id: 'OFF-001',
    name: 'H. Rusdianto Pratama, S.Pi.',
    role: 'Ketua Umum P2UWM',
    category: 'pusat',
    bio: 'Praktisi budidaya udang vaname berpengalaman lebih dari 24 tahun di kawasan Wahyuni Mandira. Pelopor kemandirian kelembagaan petambak dan penguatan jaringan distribusi saprotam nasional.',
    phone: '+62 812-7890-4411',
    email: 'ketua.umum@p2uwm.or.id',
    experienceYears: 24,
    specialization: 'Kebijakan Agribisnis & Tata Kelola Kawasan Tambak',
    status: 'Aktif'
  },
  {
    id: 'OFF-002',
    name: 'Ir. Bambang Tri Wijaya',
    role: 'Wakil Ketua Umum Bidang Operasional',
    category: 'pusat',
    bio: 'Insinyur perikanan budidaya yang mengawal modernisasi sistem pintu air kanal primer dan elektrifikasi tambak mandiri demi menekan biaya bahan bakar operasional.',
    phone: '+62 813-6621-8890',
    email: 'wakil.ketua@p2uwm.or.id',
    experienceYears: 20,
    specialization: 'Infrastruktur Kanal & Sistem Elektrifikasi Tambak',
    status: 'Aktif'
  },
  {
    id: 'OFF-003',
    name: 'Ahmad Fauzi, M.Si.',
    role: 'Sekretaris Jenderal',
    category: 'pusat',
    bio: 'Mengkoordinasikan administrasi kesekretariatan organisasi, legalitas kelembagaan, serta kemitraan strategis dengan Kementerian Kelautan dan Perikanan (KKP) dan Pemkab OKI.',
    phone: '+62 821-8840-1200',
    email: 'sekretariat@p2uwm.or.id',
    experienceYears: 16,
    specialization: 'Administrasi Organisasi & Advokasi Kebijakan Publik',
    status: 'Aktif'
  },
  {
    id: 'OFF-004',
    name: 'Hj. Siti Rohmah, S.E.',
    role: 'Bendahara Umum',
    category: 'pusat',
    bio: 'Bertanggung jawab atas audit transparansi keuangan iuran anggota, dana pemeliharaan tanggul kolektif, dan unit simpan pinjam saprotam petambak.',
    phone: '+62 812-7319-5502',
    email: 'keuangan@p2uwm.or.id',
    experienceYears: 18,
    specialization: 'Akuntansi Koperasi & Manajemen Dana Pemeliharaan',
    status: 'Aktif'
  },
  {
    id: 'OFF-005',
    name: 'Muhammad Syafi\'i, S.H.',
    role: 'Ketua Bidang Hukum & Advokasi Petambak',
    category: 'pusat',
    bio: 'Mengawal perlindungan hak tanah garapan anggota, advokasi sengketa batas lahan tambak, serta kepatuhan hukum perizinan budidaya berwawasan lingkungan.',
    phone: '+62 813-7750-9901',
    email: 'advokasi@p2uwm.or.id',
    experienceYears: 14,
    specialization: 'Hukum Agraria & Advokasi Lingkungan Tambak',
    status: 'Aktif'
  },
  {
    id: 'OFF-006',
    name: 'Dr. Hendra Gunawan, S.Pi., M.Env.',
    role: 'Ketua Bidang Riset & Budidaya Berkelanjutan',
    category: 'pusat',
    bio: 'Peneliti kualitas air pesisir Sumatera. Memimpin laboratorium pengujian mikroba P2UWM untuk pemantauan densitas Vibrio dan program probiotik lokal.',
    phone: '+62 812-7108-3344',
    email: 'riset.budidaya@p2uwm.or.id',
    experienceYears: 17,
    specialization: 'Biosecurity Tambak, Bakteriologi & SOP Kualitas Air',
    status: 'Aktif'
  },

  // Koordinator Wilayah (Korwil)
  {
    id: 'OFF-KOR-01',
    name: 'Sutrisno Budiman',
    role: 'Koordinator Wilayah I (Kanal Barat)',
    category: 'korwil',
    wilayah: 'Blok 01 s/d Blok 04 (Kanal Barat)',
    bio: 'Memimpin koordinasi harian 214 petambak di kawasan kanal barat, mengawal jadwal pasang surut air masuk dan pengoperasian pompa booster barat.',
    phone: '+62 852-6711-2091',
    email: 'korwil.barat@p2uwm.or.id',
    experienceYears: 19,
    specialization: 'Manajemen Tata Air Saluran Sekunder Barat',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-KOR-02',
    name: 'H. Marzuki Yahya',
    role: 'Koordinator Wilayah II (Kanal Tengah)',
    category: 'korwil',
    wilayah: 'Blok 05 s/d Blok 08 (Kanal Sentral)',
    bio: 'Mengkoordinir ketahanan tanggul tengah dan integrasi pasokan pakan pabrikan bagi 228 petambak di jantung kawasan Wahyuni Mandira.',
    phone: '+62 813-6890-4402',
    email: 'korwil.tengah@p2uwm.or.id',
    experienceYears: 22,
    specialization: 'Manajemen Logistik & Keselamatan Tanggul',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-KOR-03',
    name: 'Agus Hermawan',
    role: 'Koordinator Wilayah III (Kanal Timur)',
    category: 'korwil',
    wilayah: 'Blok 09 s/d Blok 12 (Kanal Timur)',
    bio: 'Mengawasi salinitas air muara timur serta memimpin tanggap cepat penanganan hama kepiting liar dan pencemaran lumpur dasar kolam.',
    phone: '+62 822-7901-3318',
    email: 'korwil.timur@p2uwm.or.id',
    experienceYears: 15,
    specialization: 'Sanitasi Dasar Kolam & Salinitas Muara',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-KOR-04',
    name: 'Rudi Hartono, S.T.',
    role: 'Koordinator Wilayah IV (Kanal Selatan & Muara)',
    category: 'korwil',
    wilayah: 'Blok 13 s/d Blok 16 (Zona Muara Selatan)',
    bio: 'Membawahi zona pasang tertinggi di pesisir OKI, mengawasi proteksi abrasi hutan bakau penyangga (mangrove greenbelt) kawasan tambak.',
    phone: '+62 853-8109-7722',
    email: 'korwil.selatan@p2uwm.or.id',
    experienceYears: 16,
    specialization: 'Konservasi Mangrove & Pintu Air Muara Utama',
    status: 'Siaga Lapangan'
  },

  // Koordinator Lapangan (Korlap) Blok
  {
    id: 'OFF-LAP-01',
    name: 'Kuswanto (Korlap Blok 01 - 02)',
    role: 'Koordinator Lapangan Blok 01 - 02',
    category: 'korlap',
    wilayah: 'Blok 01 & 02 (Total 110 Petak)',
    bio: 'Petugas lapangan siaga patroli teknis harian, inspeksi kelayakan kincir angin dan kabel listrik tambak petambak Blok 01-02.',
    phone: '+62 821-7550-1011',
    email: 'korlap.b01@p2uwm.or.id',
    experienceYears: 11,
    specialization: 'Patroli Mekanikal Kincir & Genset Lapangan',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-LAP-02',
    name: 'M. Taufik (Korlap Blok 03 - 04)',
    role: 'Koordinator Lapangan Blok 03 - 04',
    category: 'korlap',
    wilayah: 'Blok 03 & 04 (Total 104 Petak)',
    bio: 'Fokus pada monitoring harian DO (Dissolved Oxygen) dini hari dan deteksi dini gejala penurunan nafsu makan udang di ancho kolam.',
    phone: '+62 852-7301-2044',
    email: 'korlap.b03@p2uwm.or.id',
    experienceYears: 12,
    specialization: 'Monitoring Ancho & Fluktuasi Oksigen Malam',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-LAP-03',
    name: 'Supriyadi (Korlap Blok 05 - 06)',
    role: 'Koordinator Lapangan Blok 05 - 06',
    category: 'korlap',
    wilayah: 'Blok 05 & 06 (Total 118 Petak)',
    bio: 'Spesialis penanganan kebocoran pematang tanah dan koordinasi alat berat mini ekskavator untuk perbaikan tanggul petak darurat.',
    phone: '+62 813-7922-3088',
    email: 'korlap.b05@p2uwm.or.id',
    experienceYears: 14,
    specialization: 'Struktur Tanggul & Pengoperasian Ekskavator',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-LAP-04',
    name: 'Darmawan (Korlap Blok 07 - 08)',
    role: 'Koordinator Lapangan Blok 07 - 08',
    category: 'korlap',
    wilayah: 'Blok 07 & 08 (Total 110 Petak)',
    bio: 'Memandu petambak dalam persiapan dasar kolam, pengeringan lumpur hitam, dan pengapuran dolomit sesuai dosis tepat per hektar.',
    phone: '+62 822-8144-5509',
    email: 'korlap.b07@p2uwm.or.id',
    experienceYears: 13,
    specialization: 'Pengapuran Dolomit & Sterilisasi Dasar Tambak',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-LAP-05',
    name: 'Budi Santoso (Korlap Blok 09 - 10)',
    role: 'Koordinator Lapangan Blok 09 - 10',
    category: 'korlap',
    wilayah: 'Blok 09 & 10 (Total 102 Petak)',
    bio: 'Petugas piket pengambilan sampel air harian untuk diuji salinitas, alkalinitas, nitrit, dan amonia di laboratorium organisasi.',
    phone: '+62 853-6622-4411',
    email: 'korlap.b09@p2uwm.or.id',
    experienceYears: 10,
    specialization: 'Sampling Kimia Air Tambak',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-LAP-06',
    name: 'Wahyu Hidayat (Korlap Blok 11 - 12)',
    role: 'Koordinator Lapangan Blok 11 - 12',
    category: 'korlap',
    wilayah: 'Blok 11 & 12 (Total 98 Petak)',
    bio: 'Mengkoordinasi penyaluran benur SPF bergaransi resmi sertifikat karantina serta verifikasi kondisi benur saat tebar malam hari.',
    phone: '+62 812-7011-8833',
    email: 'korlap.b11@p2uwm.or.id',
    experienceYears: 9,
    specialization: 'Aklimatisasi Benur & Logistik Tebar Benur',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-LAP-07',
    name: 'Iskandar Zulkarnain (Korlap Blok 13 - 14)',
    role: 'Koordinator Lapangan Blok 13 - 14',
    category: 'korlap',
    wilayah: 'Blok 13 & 14 (Total 108 Petak)',
    bio: 'Mengawal protokol biosecurity pintu masuk blok dan sterilisasi jaring perlindungan dari burung camar pemangsa (bird netting).',
    phone: '+62 852-6901-4477',
    email: 'korlap.b13@p2uwm.or.id',
    experienceYears: 11,
    specialization: 'Biosecurity & Bird Netting Shield',
    status: 'Siaga Lapangan'
  },
  {
    id: 'OFF-LAP-08',
    name: 'Zainal Abidin (Korlap Blok 15 - 16)',
    role: 'Koordinator Lapangan Blok 15 - 16',
    category: 'korlap',
    wilayah: 'Blok 15 & 16 (Zona Muara Pasang)',
    bio: 'Berjaga di stasiun pompa muara selatan untuk memastikan pintu klep otomatis tertutup rapat saat pasang ekstrem rob air laut.',
    phone: '+62 813-7722-6699',
    email: 'korlap.b15@p2uwm.or.id',
    experienceYears: 16,
    specialization: 'Operasional Pintu Air Pasang & Klep Otomatis',
    status: 'Siaga Lapangan'
  }
];

export const PAST_LEADERSHIP: PastLeader[] = [
  {
    period: '2012 — 2016',
    chairman: 'H. Suwarno Hadisubroto',
    viceChairman: 'Bpk. M. Tohir Ridwan',
    roleDescription: 'Peletak fondasi kelembagaan asosiasi mandiri pasca-transisi kepemilikan tambak dari sistem inti-plasma lama menuju tata kelola mandiri petambak rakyat.',
    keyAchievements: [
      'Pendirian resmi wadah P2UWM berbadan hukum sah di kawasan Wahyuni Mandira.',
      'Penyusunan Anggaran Dasar & Anggaran Rumah Tangga (AD/ART) berbasis musyawarah mufakat.',
      'Penyelamatan aset saluran irigasi bersama dan pembentukan satgas pengamanan kanal blok 01-16.',
      'Mediasi perdamaian dan kepastian hukum hak garap bagi 800+ kepala keluarga petambak.'
    ]
  },
  {
    period: '2016 — 2020',
    chairman: 'Ir. H. Syamsuddin Nur',
    viceChairman: 'H. Rusdianto Pratama, S.Pi.',
    roleDescription: 'Era konsolidasi infrastruktur makro, perbaikan kanal primer secara swadaya, dan integrasi pasokan energi listrik PLN menembus kawasan tambak pesisir.',
    keyAchievements: [
      'Normalisasi swadaya kanal primer sepanjang 42 km menggunakan armada ponton ekskavator bersama.',
      'Perjuangan masuknya jaringan transmisi listrik PLN ke tambak Wahyuni Mandira, memangkas biaya genset solar hingga 60%.',
      'Pembentukan Koperasi Saprotam Mandira Prima untuk memutus monopoli harga pakan dan obat perikanan.',
      'Penyelenggaraan Panen Raya Berkelanjutan perdana dengan volume 1.400 ton diserap pasar ekspor.'
    ]
  },
  {
    period: '2020 — 2024',
    chairman: 'H. Mustofa Kamal, S.P.',
    viceChairman: 'Ahmad Fauzi, M.Si.',
    roleDescription: 'Transformasi tata kelola modern, pendirian laboratorium pengujian kualitas air terpadu, dan sertifikasi standarisasi biosecurity anti-penyakit udang.',
    keyAchievements: [
      'Pembangunan Laboratorium Biosecurity P2UWM untuk tes PCR patogen udang (WSSV, AHPND/EMS, EHP) mandiri.',
      'Digitalisasi database petambak dan pemetaan koordinat GIS 2.400+ petak tambak di wilayah OKI.',
      'Kemitraan langsung dengan asosiasi eksportir udang nasional (AP5I) untuk stabilitas harga panen.',
      'Penyusunan Modul SOP Budidaya Ramah Lingkungan berbasis zero-antibiotik dan pelestarian sabuk mangrove.'
    ]
  }
];

export const INITIAL_MEMBERS: Member[] = [
  { id: 'WM-24-001', name: 'H. Rusdianto Pratama', block: 'Blok 01', canal: 'Kanal Sekunder 1A', pondCount: 4, landAreaHa: 2.0, currentDOC: 62, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2012, phone: '+62 812-7890-4411' },
  { id: 'WM-24-002', name: 'Kuswanto Broto', block: 'Blok 01', canal: 'Kanal Sekunder 1B', pondCount: 2, landAreaHa: 1.0, currentDOC: 45, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2013, phone: '+62 821-7550-1011' },
  { id: 'WM-24-003', name: 'Suhendra Wijaya', block: 'Blok 02', canal: 'Kanal Sekunder 2A', pondCount: 3, landAreaHa: 1.5, currentDOC: 80, membershipStatus: 'Masa Tanam', cbibCertified: true, joinedYear: 2014, phone: '+62 813-7901-4455' },
  { id: 'WM-24-004', name: 'M. Taufik Nur', block: 'Blok 03', canal: 'Kanal Sekunder 3A', pondCount: 2, landAreaHa: 1.0, currentDOC: 30, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2012, phone: '+62 852-7301-2044' },
  { id: 'WM-24-005', name: 'Hj. Rohana Dewi', block: 'Blok 03', canal: 'Kanal Sekunder 3B', pondCount: 4, landAreaHa: 2.0, currentDOC: 75, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2015, phone: '+62 812-7788-9900' },
  { id: 'WM-24-006', name: 'Bambang Irawan', block: 'Blok 04', canal: 'Kanal Sekunder 4A', pondCount: 3, landAreaHa: 1.5, currentDOC: 18, membershipStatus: 'Masa Tanam', cbibCertified: false, joinedYear: 2017, phone: '+62 822-8111-9022' },
  { id: 'WM-24-007', name: 'H. Marzuki Yahya', block: 'Blok 05', canal: 'Kanal Sekunder 5A', pondCount: 5, landAreaHa: 2.5, currentDOC: 92, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2012, phone: '+62 813-6890-4402' },
  { id: 'WM-24-008', name: 'Supriyadi Santoso', block: 'Blok 06', canal: 'Kanal Sekunder 6B', pondCount: 2, landAreaHa: 1.0, currentDOC: 0, membershipStatus: 'Persiapan Kolam', cbibCertified: true, joinedYear: 2016, phone: '+62 813-7922-3088' },
  { id: 'WM-24-009', name: 'Darmawan Saputra', block: 'Blok 07', canal: 'Kanal Sekunder 7A', pondCount: 3, landAreaHa: 1.5, currentDOC: 52, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2014, phone: '+62 822-8144-5509' },
  { id: 'WM-24-010', name: 'Siti Aminah', block: 'Blok 07', canal: 'Kanal Sekunder 7B', pondCount: 2, landAreaHa: 1.0, currentDOC: 40, membershipStatus: 'Aktif Penuh', cbibCertified: false, joinedYear: 2018, phone: '+62 852-6789-0123' },
  { id: 'WM-24-011', name: 'H. Ridwan Kamil', block: 'Blok 08', canal: 'Kanal Sekunder 8A', pondCount: 4, landAreaHa: 2.0, currentDOC: 88, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2013, phone: '+62 813-6655-4433' },
  { id: 'WM-24-012', name: 'Agus Hermawan', block: 'Blok 09', canal: 'Kanal Sekunder 9A', pondCount: 3, landAreaHa: 1.5, currentDOC: 64, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2012, phone: '+62 822-7901-3318' },
  { id: 'WM-24-013', name: 'Budi Santoso', block: 'Blok 10', canal: 'Kanal Sekunder 10B', pondCount: 2, landAreaHa: 1.0, currentDOC: 10, membershipStatus: 'Masa Tanam', cbibCertified: true, joinedYear: 2016, phone: '+62 853-6622-4411' },
  { id: 'WM-24-014', name: 'Wahyu Hidayat', block: 'Blok 11', canal: 'Kanal Sekunder 11A', pondCount: 4, landAreaHa: 2.0, currentDOC: 70, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2015, phone: '+62 812-7011-8833' },
  { id: 'WM-24-015', name: 'Tri Handoko', block: 'Blok 12', canal: 'Kanal Sekunder 12A', pondCount: 3, landAreaHa: 1.5, currentDOC: 0, membershipStatus: 'Persiapan Kolam', cbibCertified: true, joinedYear: 2017, phone: '+62 821-8901-2244' },
  { id: 'WM-24-016', name: 'Iskandar Zulkarnain', block: 'Blok 13', canal: 'Kanal Sekunder 13B', pondCount: 4, landAreaHa: 2.0, currentDOC: 84, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2012, phone: '+62 852-6901-4477' },
  { id: 'WM-24-017', name: 'Mansyur Subandi', block: 'Blok 14', canal: 'Kanal Sekunder 14A', pondCount: 2, landAreaHa: 1.0, currentDOC: 55, membershipStatus: 'Aktif Penuh', cbibCertified: false, joinedYear: 2019, phone: '+62 813-7744-1188' },
  { id: 'WM-24-018', name: 'Zainal Abidin', block: 'Blok 15', canal: 'Kanal Sekunder 15A', pondCount: 3, landAreaHa: 1.5, currentDOC: 96, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2013, phone: '+62 813-7722-6699' },
  { id: 'WM-24-019', name: 'Rudi Hartono', block: 'Blok 16', canal: 'Kanal Sekunder 16B', pondCount: 4, landAreaHa: 2.0, currentDOC: 61, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2014, phone: '+62 853-8109-7722' },
  { id: 'WM-24-020', name: 'H. Sudarsono', block: 'Blok 02', canal: 'Kanal Sekunder 2B', pondCount: 3, landAreaHa: 1.5, currentDOC: 48, membershipStatus: 'Aktif Penuh', cbibCertified: true, joinedYear: 2012, phone: '+62 812-7800-3321' }
];

export const INITIAL_TECHNICAL_REPORTS: TechnicalReport[] = [
  {
    id: 'TKT-2026-088',
    farmerName: 'Darmawan Saputra',
    farmerPhone: '+62 822-8144-5509',
    block: 'Blok 07',
    pondNumber: 'Petak B-12',
    category: 'Kualitas Air & Penyakit',
    urgency: 'Darurat',
    description: 'Terjadi penurunan salinitas mendadak dari 18 ppt ke 11 ppt akibat hujan lebat subuh tadi, warna air berubah pekat kecokelatan dan udang teramati berenang di tepi permukaan kolam.',
    status: 'Ditangani',
    reportedAt: '10 Okt 2026 05:40 WIB',
    assignedOfficer: 'Dr. Hendra Gunawan & Korlap Darmawan',
    resolutionNotes: 'Sampel air telah diambil untuk tes mikrobiologi. Petugas mendistribusikan kalsium karbonat dan garam grasak 300 kg untuk stabilisasi alkalinitas.'
  },
  {
    id: 'TKT-2026-087',
    farmerName: 'Kuswanto Broto',
    farmerPhone: '+62 821-7550-1011',
    block: 'Blok 01',
    pondNumber: 'Petak A-04',
    category: 'Pompa & Pintu Air',
    urgency: 'Tinggi',
    description: 'Klep pintu saluran sekunder 1B mengalami kebocoran seal karet penahan air, debit pasang asin merembes masuk saat jadwal pengeringan petak.',
    status: 'Menunggu',
    reportedAt: '10 Okt 2026 04:15 WIB',
    assignedOfficer: 'Korlap Kuswanto',
    resolutionNotes: 'Menunggu penurunan debit air surut pukul 10:00 WIB untuk penggantian paking karet dan pemasangan balok pengunci.'
  },
  {
    id: 'TKT-2026-086',
    farmerName: 'Iskandar Zulkarnain',
    farmerPhone: '+62 852-6901-4477',
    block: 'Blok 13',
    pondNumber: 'Petak D-08',
    category: 'Listrik & Genset',
    urgency: 'Sedang',
    description: 'Tegangan gardu trafo blok 13 mengalami penurunan fluktuatif ke 195 Volt menyebabkan 2 unit kincir air trip saklar otomatisnya.',
    status: 'Ditangani',
    reportedAt: '09 Okt 2026 21:30 WIB',
    assignedOfficer: 'Ir. Bambang Tri Wijaya & Tim Teknisi PLN',
    resolutionNotes: 'Koordinasi bersama unit PLN Sungai Menang telah dilakukan. Kapasitor bank tambahan sedang dipasang di panel distribusi utama.'
  },
  {
    id: 'TKT-2026-085',
    farmerName: 'H. Marzuki Yahya',
    farmerPhone: '+62 813-6890-4402',
    block: 'Blok 05',
    pondNumber: 'Petak C-01',
    category: 'Oksigen (DO Rendah)',
    urgency: 'Darurat',
    description: 'Nilai DO terbaca 2.9 ppm pada pukul 03:00 dini hari di petak padat tebar 120 ekor/m². Butuh penambahan darurat 1 set kincir mobile 2 HP.',
    status: 'Selesai',
    reportedAt: '09 Okt 2026 03:10 WIB',
    assignedOfficer: 'Korlap Supriyadi & Tim Siaga P2UWM',
    resolutionNotes: 'Unit kincir cadangan organisasi langsung dikerahkan ke lokasi petak C-01 dalam 35 menit. Nilai DO kembali normal 5.2 ppm pukul 05:00 WIB.'
  }
];

export const INITIAL_FORUM_POSTS: ForumPost[] = [
  {
    id: 'POST-001',
    title: 'Strategi Mengatasi Plankton Crash dan Menjaga Alkalinitas di Musim Pancaroba',
    authorName: 'Dr. Hendra Gunawan, S.Pi.',
    authorBlock: 'Tim Riset P2UWM',
    category: 'Kualitas Air',
    content: 'Rekan-rekan petambak Wahyuni Mandira, memasuki pergantian arah angin muson timur ke barat, fluktuasi suhu air siang-malam sangat tinggi. Harap perhatikan: 1. Jangan buang air tambak jika di kanal terjadi perubahan warna air. 2. Berikan aplikasi molase fermentasi dedak 5 liter/petak per hari untuk menstabilkan bakteri heterotrof. 3. Targetkan alkalinitas minimal 130 ppm menggunakan dolomit murni. Silakan bagikan kondisi petak masing-masing di bawah.',
    createdAt: '09 Okt 2026 09:15 WIB',
    likes: 38,
    repliesCount: 3,
    isPinned: true,
    replies: [
      {
        id: 'REP-01',
        authorName: 'H. Marzuki Yahya',
        authorRole: 'Korwil Tengah (Blok 05)',
        content: 'Terima kasih masukannya Dok. Di Blok 05 kami sudah mulai aplikasi kapur tohor (CaO) tipis 20 kg per petak saat malam setelah hujan, hasilnya air tetap hijau pucuk pisang stabil.',
        createdAt: '09 Okt 2026 10:45 WIB'
      },
      {
        id: 'REP-02',
        authorName: 'Sutrisno Budiman',
        authorRole: 'Korwil Barat',
        content: 'Mohon info ketersediaan stok dolomit di gudang koperasi P2UWM sentral apakah aman sampai akhir bulan ini?',
        createdAt: '09 Okt 2026 13:20 WIB'
      },
      {
        id: 'REP-03',
        authorName: 'Hj. Siti Rohmah, S.E.',
        authorRole: 'Bendahara Umum',
        content: 'Pak Sutrisno, stok dolomit baru masuk 40 ton kemarin sore dari Lampung. Anggota aktif bisa langsung ambil dengan kupon koperasi blok.',
        createdAt: '09 Okt 2026 14:05 WIB'
      }
    ]
  },
  {
    id: 'POST-002',
    title: 'Evaluasi Panen Parsial DOC 75: Pengalaman Memaksimalkan Size 40 Tanpa Risiko Penyakit',
    authorName: 'H. Rusdianto Pratama',
    authorBlock: 'Blok 01',
    category: 'Budidaya & Pakan',
    content: 'Assalamu alaikum sedulur petambak. Kemarin kami lakukan panen parsial tahap 1 di petak A-02 pada DOC 72 dengan mengambil 35% biomassa (sekitar 1.4 ton, size 55). Setelah parsial, laju pertumbuhan sisa udang melonjak dari ADG 0.28 g/hari ke 0.41 g/hari. Sangat efektif menekan beban bahan organik dasar kolam menjelang panen total size 35-40.',
    createdAt: '08 Okt 2026 16:30 WIB',
    likes: 29,
    repliesCount: 2,
    isPinned: false,
    replies: [
      {
        id: 'REP-04',
        authorName: 'Ahmad Fauzi',
        authorRole: 'Sekjen P2UWM',
        content: 'Mantap Pak Ketua. Panen parsial terbukti ampuh mencegah udang lemas kekurangan oksigen. Sangat disarankan bagi petak dengan kincir di bawah 6 unit.',
        createdAt: '08 Okt 2026 17:10 WIB'
      },
      {
        id: 'REP-05',
        authorName: 'Bambang Irawan',
        authorRole: 'Petambak Blok 04',
        content: 'Boleh tahu pak, saat jala panen parsial apakah pakan dipuasakan berapa jam sebelumnya?',
        createdAt: '08 Okt 2026 19:40 WIB'
      }
    ]
  },
  {
    id: 'POST-003',
    title: 'Update Alokasi Solar Genset Subsidi & Jadwal Pemeliharaan Pompa Kanal Sentral',
    authorName: 'Ir. Bambang Tri Wijaya',
    authorBlock: 'Pengurus Pusat',
    category: 'Saprotam & Mesin',
    content: 'Diberitahukan kepada seluruh anggota petambak Blok 01 - 16, surat rekomendasi kuota BBM genset cadangan untuk bulan Oktober telah ditandatangani Diskan OKI. Pengambilan di SPBN dapat dilakukan sesuai jadwal giliran korwil masing-masing untuk mencegah antrian perahu pompong di dermaga.',
    createdAt: '07 Okt 2026 11:00 WIB',
    likes: 45,
    repliesCount: 1,
    isPinned: false,
    replies: [
      {
        id: 'REP-06',
        authorName: 'Agus Hermawan',
        authorRole: 'Korwil Timur (Blok 09)',
        content: 'Siap Pak Bambang, Korwil Timur siap atur jadwal pengambilan hari Selasa dan Kamis.',
        createdAt: '07 Okt 2026 14:15 WIB'
      }
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'NEWS-01',
    title: 'Kunjungan Kerja Tim KKP & Pemkab OKI: Bahas Revitalisasi Tanggul Muara Wahyuni Mandira',
    excerpt: 'Dinas Kelautan dan Perikanan Kabupaten OKI bersama P2UWM meninjau saluran air primer sepanjang pesisir Sungai Menang guna memastikan keberlanjutan pasokan air laut higienis bagi ribuan petak tambak.',
    category: 'Regulasi & Ekspor',
    date: '08 Oktober 2026',
    readTime: '4 menit baca',
    author: 'Biro Humas P2UWM',
    content: [
      'Kawasan pertambakan Wahyuni Mandira di Kecamatan Sungai Menang, Ogan Komering Ilir (OKI), Sumatera Selatan, menerima kunjungan audiensi lapangan dari perwakilan Direktorat Jenderal Perikanan Budidaya KKP dan jajaran Pemkab OKI.',
      'Dalam pertemuan tersebut, Ketua Umum P2UWM H. Rusdianto Pratama menyampaikan aspirasi utama petambak mengenai urgensi bantuan alat berat amphibi untuk pengerukan sedimentasi lumpur di muara primer yang telah mencapai ketebalan 1,8 meter.',
      'Pihak pemerintah daerah berkomitmen mengalokasikan program normalisasi terpadu dan menjamin kemudahan akses perizinan berusaha bagi petambak skala rakyat mandiri demi menjaga devisa ekspor udang nasional.'
    ],
    imageUrl: P2UWM_ASSETS.canal
  },
  {
    id: 'NEWS-02',
    title: 'Volume Panen Udang Vaname P2UWM Q3 2026 Tembus 1.280 Ton Dengan Kualitas Standar Ekspor',
    excerpt: 'Keberhasilan penerapan SOP budidaya ramah lingkungan dan pemantauan kualitas air berkala membuahkan hasil panen melimpah dengan Average Daily Growth (ADG) stabil.',
    category: 'Kabar Tambak',
    date: '05 Oktober 2026',
    readTime: '3 menit baca',
    author: 'Tim Teknis Budidaya',
    content: [
      'Hasil rekapitulasi data operasional panen petambak anggota Perkumpulan Petambak Udang Wahyuni Mandira (P2UWM) periode Kuartal III tahun 2026 mencatatkan rekor menggembirakan dengan total biomassa panen mencapai 1.280 ton.',
      'Mayoritas hasil panen berada pada kategori Size 30 hingga Size 50 yang diserap langsung oleh unit pengolahan ikan (UPI) berstandar HACCP di Lampung dan Palembang untuk pasar ekspor Amerika Serikat dan Jepang.',
      'Tingkat Survival Rate (SR) rata-rata di 16 blok tercatat mencapai 78,4%, meningkat dari 71,2% pada periode yang sama tahun lalu berkat kedisiplinan screening bibit benur SPF di laboratorium mandiri P2UWM.'
    ],
    imageUrl: P2UWM_ASSETS.harvest
  },
  {
    id: 'NEWS-03',
    title: 'P2UWM Resmikan Layanan Deteksi Cepat Bakteri Vibrio Gratis Bagi Seluruh Anggota',
    excerpt: 'Laboratorium riset mandiri organisasi meluncurkan program pemantauan kepadatan bakteri hijau dan kuning setiap hari Selasa dan Jumat tanpa dipungut biaya.',
    category: 'Inovasi Budidaya',
    date: '01 Oktober 2026',
    readTime: '5 menit baca',
    author: 'Laboratorium P2UWM',
    content: [
      'Guna mencegah serangan sindrom kotoran putih (White Feces Disease) dan kematian dini (Early Mortality Syndrome), P2UWM kini menyediakan layanan plating cawan agar TCBS gratis untuk petambak terdaftar.',
      'Petambak cukup membawa sampel air kolam 500 ml steril ke balai laboratorium Blok 07. Hasil densitas koloni Vibrio (CFU/ml) akan dikirimkan langsung ke nomor WhatsApp petambak dalam kurun waktu 24 jam.',
      'Layanan ini terbukti menurunkan risiko gagal panen mendadak dan menghemat pengeluaran petambak hingga jutaan rupiah dibandingkan tes laboratorium komersial luar kota.'
    ],
    imageUrl: P2UWM_ASSETS.meeting
  }
];

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 'MOD-01',
    title: 'SOP Sterilisasi Dasar Kolam & Pengendalian Vektor Organik',
    code: 'SOP-P2UWM-BIO-01',
    description: 'Panduan tuntas persiapan tanah dasar kolam, pembuangan lumpur anaerob, pengapuran bertahap, dan pemberantasan kepiting serta ikan liar pembawa bibit penyakit virus udang.',
    duration: '45 Menit Pembelajaran',
    level: 'Standar Ekspor',
    topics: [
      'Pengeringan retak rambut tanah dasar kolam minimal 14 hari',
      'Pengukuran pH tanah aktual dan dosis dolomit vs kapur tohor',
      'Penyaringan air masuk kanal dengan filter mesh 80 dan saringan ganda',
      'Aplikasi saponin alami non-pestisida kimiawi untuk sterilisasi'
    ],
    actionSteps: [
      'Buang endapan lumpur hitam keluar perimeter tanggul',
      'Lakukan penjemuran hingga tanah berkerak keras',
      'Taburkan kapur kalsit saat tanah masih hangat',
      'Catat hasil pengujian pH tanah sebelum pemasukan air perdana'
    ],
    downloadableDoc: 'SOP_01_Sterilisasi_Kolam_P2UWM.pdf'
  },
  {
    id: 'MOD-02',
    title: 'Manajemen Kualitas Air, Probiotik Alami & Rasio C:N Optimal',
    code: 'SOP-P2UWM-WATER-02',
    description: 'Teknik menumbuhkan fitoplankton dominan chlorella yang stabil, aplikasi kultur bakteri Bacillus subtillis, serta penambahan sumber karbon untuk mereduksi amonia berbahaya.',
    duration: '60 Menit Pembelajaran',
    level: 'Lanjutan',
    topics: [
      'Korelasi kecerahan Secchi Disk (30-40 cm) dengan ketersediaan pakan alami',
      'Formulasi fermentasi molase, dedak halus, ragi, dan probiotik lokal P2UWM',
      'Waktu optimal aerasi kincir air untuk pemerataan oksigen terlarut (DO)',
      'Pengendalian nitrit (NO2) dan amonia bebas (NH3) di air payau'
    ],
    actionSteps: [
      'Ukur parameter DO, pH, dan salinitas 2 kali sehari (subuh dan sore)',
      'Aplikasikan kultur probiotik setiap 3 hari sekali pada pukul 09:00 pagi',
      'Hindari pergantian air drastis jika salinitas kanal berbeda lebih dari 3 ppt'
    ],
    downloadableDoc: 'SOP_02_Kualitas_Air_Probiotik_P2UWM.pdf'
  },
  {
    id: 'MOD-03',
    title: 'Optimalisasi FCR & Tata Kelola Blind Feeding vs Monitoring Ancho',
    code: 'SOP-P2UWM-FEED-03',
    description: 'Strategi efisiensi biaya pakan yang menyumbang 65% modal budidaya. Mengoptimalkan pertumbuhan vaname tanpa mencemari dasar kolam dengan sisa pakan busuk.',
    duration: '50 Menit Pembelajaran',
    level: 'Standar Ekspor',
    topics: [
      'Program pakan blind feeding DOC 1 hingga DOC 30 berdasarkan biomassa benur',
      'Teknik pemasangan dan pembacaan ancho piringan kontrol pada DOC 31 ke atas',
      'Penyesuaian porsi pakan saat cuaca mendung, hujan lebat, dan fase molting',
      'Pemberian vitamin C, asam amino, dan binder alami penambah imunitas'
    ],
    actionSteps: [
      'Kontrol ancho tepat 2 jam pasca tebar pakan pelet',
      'Turunkan porsi pakan 30% jika pakan di ancho masih tersisa lebih dari 10%',
      'Hentikan pakan saat udang mengalami molting massal bulan purnama'
    ],
    downloadableDoc: 'SOP_03_Efisiensi_Pakan_FCR_P2UWM.pdf'
  },
  {
    id: 'MOD-04',
    title: 'Biosecurity Ketat & Mitigasi Wabah Penyakit (WSSV, AHPND, EHP)',
    code: 'SOP-P2UWM-BIO-04',
    description: 'Langkah pencegahan dini masuknya patogen berbahaya ke kawasan tambak Wahyuni Mandira, sanitasi peralatan panen, dan protokol isolasi petak jika terindikasi wabah.',
    duration: '40 Menit Pembelajaran',
    level: 'Pemula',
    topics: [
      'Protokol pencelupan kaki (foot bath) dan disinfeksi tangan di pintu blok',
      'Pemasangan pagar jaring penghalau kepiting (crab barrier) di sepanjang pematang',
      'Deteksi gejala klinis usus kosong, hepatopankreas pucat, dan bercak putih',
      'Standar darurat karantina petak bergejala untuk melindungi tambak tetangga'
    ],
    actionSteps: [
      'Pastikan benur bersertifikat SPF resmi dari hatchery terakreditasi',
      'Dilarang membuang air kolam bergejala langsung ke saluran sekunder bersama',
      'Segera buat laporan kendala teknis ke sistem tiket darurat P2UWM'
    ],
    downloadableDoc: 'SOP_04_Biosecurity_Mitigasi_P2UWM.pdf'
  }
];

export const UPCOMING_MEETINGS: MeetingAgenda[] = [
  {
    id: 'MTG-2026-10',
    title: 'Rapat Pleno Koordinasi Bulanan Petambak P2UWM: Evaluasi Panen Q3 & Jadwal Normalisasi Kanal',
    type: 'Rapat Pleno Bulanan',
    date: 'Minggu, 18 Oktober 2026',
    time: '08:30 — 12:30 WIB',
    location: 'Balai Pertemuan Petambak P2UWM Sentral, Blok 07, Wahyuni Mandira, OKI',
    leadBy: 'Ketua Umum H. Rusdianto Pratama & Sekjen Ahmad Fauzi',
    description: 'Pertemuan bulanan wajib bagi seluruh perwakilan petambak Blok 01 - 16 untuk mengevaluasi capaian produksi kuartal ketiga, laporan transparansi kas pemeliharaan saluran, dan jadwal giliran pengerukan endapan kanal sekunder.',
    agendaItems: [
      '08:30 - Pembukaan & Laporan Kas Pemeliharaan Kanal Bersama (Bendahara Umum)',
      '09:15 - Evaluasi Produksi Panen & Kinerja Laboratorium Kualitas Air (Ketua Bidang Teknis)',
      '10:30 - Musyawarah Jadwal Pengeringan Saluran & Penempatan Ponton Ekskavator (Korwil I-IV)',
      '11:45 - Tanya Jawab, Penyaluran Aspirasi Petambak & Doa Bersama'
    ],
    targetAudience: 'Seluruh Anggota Petambak Terdaftar, Korwil, dan Korlap Blok 01 - 16'
  },
  {
    id: 'MTG-2026-11',
    title: 'Konsolidasi Teknis Korwil: Kesiapsiagaan Pasang Tertinggi & Tanggul Muara',
    type: 'Koordinasi Teknis Korwil',
    date: 'Kamis, 29 Oktober 2026',
    time: '13:30 — 16:00 WIB',
    location: 'Posko Siaga Korwil IV, Muara Kanal Selatan, Wahyuni Mandira',
    leadBy: 'Ir. Bambang Tri Wijaya (Waketum Operasional)',
    description: 'Rapat koordinasi teknis khusus menghadapi pasang laut perbani tinggi di muara pesisir OKI, inspeksi genset siaga pompa banjir, dan penguatan bantaran tambak rawan limpasan air laut.',
    agendaItems: [
      'Inspeksi kesiapan 8 unit pintu klep otomatis saluran primer',
      'Penetapan jadwal piket malam korlap blok rawan rob',
      'Pengadaan material karung pasir darurat 1.500 lembar'
    ],
    targetAudience: 'Koordinator Wilayah, Koordinator Lapangan, dan Satgas Pengairan'
  }
];

export const ACTIVITY_REPORTS: ActivityReport[] = [
  {
    id: 'ACT-2026-03',
    title: 'Gotong Royong Normalisasi Kanal Sekunder 3 & Pengangkatan Gulma Enceng Gondok',
    date: '28 September 2026',
    location: 'Saluran Sekunder Kanal Barat (Perbatasan Blok 03 - 04)',
    participantsCount: 142,
    summary: 'Kegiatan swadaya petambak membersihkan sedimentasi dan gulma air liar sepanjang 3,8 km menggunakan tenaga manual dan perahu pompong pemotong rumput air.',
    budgetAllocated: 'Rp 14.500.000 (Kas Pemeliharaan Kanal P2UWM)',
    statusEvaluation: 'Selesai Sempurna',
    satisfactionScore: 96,
    photos: [
      P2UWM_ASSETS.canal,
      P2UWM_ASSETS.meeting
    ],
    documents: ['Berita_Acara_Karya_Bakti_Kanal_3.pdf', 'Daftar_Hadir_142_Petambak.pdf']
  },
  {
    id: 'ACT-2026-02',
    title: 'Sosialisasi Standar Sertifikasi CBIB & Bimtek Uji Cepat Patogen Bersama DKP Sumsel',
    date: '14 September 2026',
    location: 'Auditorium Balai Sentral Wahyuni Mandira',
    participantsCount: 98,
    summary: 'Pelatihan intensif bagi 98 petambak mengenai tata cara perolehan sertifikat Cara Budidaya Ikan yang Baik (CBIB) dari kementerian guna membuka akses harga premium ekspor.',
    budgetAllocated: 'Rp 8.200.000 (Dana Edukasi Organisasi)',
    statusEvaluation: 'Tercapai 100%',
    satisfactionScore: 94,
    photos: [
      P2UWM_ASSETS.meeting,
      P2UWM_ASSETS.harvest
    ],
    documents: ['Sertifikat_Pelatihan_Peserta_CBIB.pdf', 'Materi_Bimtek_DKP_OKI.pdf']
  },
  {
    id: 'ACT-2026-01',
    title: 'Penyaluran Bantuan Probiotik Mandiri & Dolomit Subsidi Periode Tanam Q3',
    date: '25 Agustus 2026',
    location: 'Gudang Logistik Koperasi P2UWM, Blok 07',
    participantsCount: 310,
    summary: 'Distribusi 45 ton dolomit murni dan 2.200 liter probiotik cair ramah lingkungan kepada petambak terdaftar dengan potongan harga subsidi 35%.',
    budgetAllocated: 'Rp 62.000.000 (Dana Subsidi Silang Organisasi)',
    statusEvaluation: 'Tercapai 100%',
    satisfactionScore: 98,
    photos: [
      P2UWM_ASSETS.harvest,
      P2UWM_ASSETS.hero
    ],
    documents: ['Rekapitulasi_Distribusi_Dolomit_Q3.pdf', 'Laporan_Keuangan_Subsidi.pdf']
  }
];

export const HISTORY_NARRATIVE = {
  title: 'Sejarah & Jejak Perjuangan Petambak Udang Wahyuni Mandira',
  subtitle: 'Dari Pelosok Pesisir Ogan Komering Ilir Menuju Sentra Budidaya Mandiri & Berdaya Saing Global',
  lead: 'Kawasan tambak udang Wahyuni Mandira yang terletak di Kecamatan Sungai Menang, Kabupaten Ogan Komering Ilir (OKI), Sumatera Selatan, merupakan salah satu lanskap budidaya udang air payau terbesar di Asia Tenggara dengan luas bentang ribuan hektar yang terbagi rapi ke dalam 16 blok tambak.',
  paragraphs: [
    'Dibangun pada era akhir tahun 1990-an dengan model integrasi tambak modern, kawasan ini melibatkan ribuan keluarga petambak plasma transmigran dari berbagai penjuru tanah air yang menggantungkan masa depan hidupnya pada kelestarian tambak vaname.',
    'Seiring dinamika perekonomian dan perubahan struktur industri, para petambak menyadari bahwa keberlangsungan usaha budidaya tidak dapat terus bergantung pada pihak eksternal semata. Lahirlah kesadaran kolektif untuk berhimpun, bersatu, dan memperjuangkan kedaulatan ekonomi secara mandiri.',
    'Melalui serangkaian musyawarah akbar yang penuh semangat kebersamaan dan kegigihan, Perkumpulan Petambak Udang Wahyuni Mandira (P2UWM) secara resmi dideklarasikan sebagai wadah tunggal perjuangan, koordinasi tata air bersama, pembelaan hak hukum petambak, dan penyalur aspirasi ke tingkat daerah maupun nasional.',
    'Kini, P2UWM tegak berdiri sebagai organisasi profesi petambak yang profesional, modern, dan mandiri. Dengan mengelola saluran kanal irigasi bersama, menghadirkan laboratorium biosecurity mandiri, menjaga stabilitas harga panen, dan membangun kepemimpinan lintas generasi yang transparan, P2UWM membuktikan bahwa petambak rakyat mampu menjadi pilar ketahanan pangan bahari Indonesia.'
  ],
  pillars: [
    { title: 'Kemandirian Ekonomi', desc: 'Memutus ketergantungan sepihak melalui pengadaan saprotam mandiri, transparansi harga pasar harian, dan kepemilikan armada alat berat bersama.' },
    { title: 'Gotong Royong & Solidaritas', desc: 'Menjaga 42 km kanal primer dan ratusan saluran sekunder secara swadaya demi memastikan seluruh petak tambak mendapatkan pasokan air yang adil.' },
    { title: 'Keberlanjutan Lingkungan', desc: 'Penerapan SOP budidaya ramah lingkungan, larangan antibiotik terlarang, serta konservasi hutan bakau mangrove sebagai sabuk pelindung pesisir OKI.' },
    { title: 'Integritas & Tata Kelola Terbuka', desc: 'Laporan keuangan audit kas berkala, pemanfaatan teknologi digital pelaporan teknis, dan forum musyawarah anggota yang egaliter.' }
  ]
};
