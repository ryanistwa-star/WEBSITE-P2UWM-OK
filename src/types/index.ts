export interface ShrimpPrice {
  size: number; // e.g. 30, 40, 50, etc.
  pricePerKg: number;
  change24h: number; // in IDR
  trend: 'up' | 'down' | 'stable';
  minRange: number;
  maxRange: number;
  updatedAt: string;
}

export interface PriceHistoryPoint {
  date: string;
  size30: number;
  size50: number;
  size70: number;
  size100: number;
}

export interface Officer {
  id: string;
  name: string;
  role: string;
  category: 'pusat' | 'korwil' | 'korlap';
  wilayah?: string; // e.g. "Blok 01 - 04 (Kanal Barat)" or "Blok 07"
  bio: string;
  phone: string;
  email: string;
  experienceYears: number;
  specialization: string;
  avatarUrl?: string;
  status: 'Aktif' | 'Siaga Lapangan';
}

export interface PastLeader {
  period: string; // e.g. "2012 - 2016"
  chairman: string;
  viceChairman: string;
  keyAchievements: string[];
  roleDescription: string;
}

export interface Member {
  id: string; // e.g. "P2UWM-01-042"
  name: string;
  block: string; // e.g. "Blok 03"
  canal: string; // e.g. "Kanal Sekunder 2"
  pondCount: number;
  landAreaHa: number;
  currentDOC?: number;
  membershipStatus: 'Aktif Penuh' | 'Masa Tanam' | 'Persiapan Kolam';
  cbibCertified: boolean;
  joinedYear: number;
  phone: string;
}

export interface TechnicalReport {
  id: string;
  farmerName: string;
  farmerPhone: string;
  block: string;
  pondNumber: string;
  category: 'Kualitas Air & Penyakit' | 'Pompa & Pintu Air' | 'Listrik & Genset' | 'Oksigen (DO Rendah)' | 'Logistik & Saprotam';
  urgency: 'Darurat' | 'Tinggi' | 'Sedang';
  description: string;
  status: 'Menunggu' | 'Ditangani' | 'Selesai';
  reportedAt: string;
  assignedOfficer?: string;
  resolutionNotes?: string;
}

export interface ForumPost {
  id: string;
  title: string;
  authorName: string;
  authorBlock: string;
  category: 'Budidaya & Pakan' | 'Kualitas Air' | 'Saprotam & Mesin' | 'Advokasi & Regulasi' | 'Umum';
  content: string;
  createdAt: string;
  likes: number;
  repliesCount: number;
  replies: ForumReply[];
  isPinned?: boolean;
}

export interface ForumReply {
  id: string;
  authorName: string;
  authorRole?: string;
  content: string;
  createdAt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: 'Kabar Tambak' | 'Regulasi & Ekspor' | 'Inovasi Budidaya';
  date: string;
  readTime: string;
  author: string;
  content: string[];
  imageUrl?: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  code: string;
  description: string;
  duration: string;
  level: 'Pemula' | 'Lanjutan' | 'Standar Ekspor';
  topics: string[];
  actionSteps: string[];
  downloadableDoc: string;
}

export interface MeetingAgenda {
  id: string;
  title: string;
  type: 'Rapat Pleno Bulanan' | 'Koordinasi Teknis Korwil' | 'Evaluasi Panen & Kanal';
  date: string;
  time: string;
  location: string;
  leadBy: string;
  description: string;
  agendaItems: string[];
  targetAudience: string;
}

export interface ActivityReport {
  id: string;
  title: string;
  date: string;
  location: string;
  participantsCount: number;
  summary: string;
  budgetAllocated: string;
  statusEvaluation: 'Tercapai 100%' | 'Selesai Sempurna' | 'Tinjauan Lanjutan';
  satisfactionScore: number; // 1-100
  photos: string[];
  documents: string[];
}
