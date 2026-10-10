import React, { useState } from 'react';
import { MeetingNotifier } from './MeetingNotifier';
import { ActivityReporting } from './ActivityReporting';
import { 
  Briefcase, 
  Droplets, 
  Activity, 
  Truck, 
  Zap, 
  Calendar, 
  FileCheck2, 
  ArrowRight,
  CheckCircle2,
  BellRing
} from 'lucide-react';
import { motion } from 'motion/react';

export const WorkProgramSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'program' | 'rapat' | 'laporan'>('program');

  const mainPrograms = [
    {
      id: 'PROG-01',
      title: 'Normalisasi & Pemeliharaan Kanal Primer 42 KM',
      category: 'Infrastruktur Tata Air',
      desc: 'Pengerukan sedimentasi lumpur muara dan saluran kanal primer-sekunder secara berkala menggunakan armada ponton ekskavator swadaya organisasi.',
      metrics: '42 KM Jalur Air Terawat · 16 Blok Terlindungi',
      status: 'Berjalan Rutin',
      icon: <Droplets className="w-5 h-5 text-sky-400" />
    },
    {
      id: 'PROG-02',
      title: 'Layanan Laboratorium Kualitas Air & Biosecurity Gratis',
      category: 'Riset & Pengendalian Penyakit',
      desc: 'Pengujian kepadatan bakteri Vibrio (TCBS Agar), alkalinitas, DO, dan skrining bibit benur SPF secara gratis untuk seluruh petambak anggota aktif.',
      metrics: '2 Kali Seminggu · Hasil < 24 Jam via WhatsApp',
      status: 'Aktif Penuh',
      icon: <Activity className="w-5 h-5 text-cyan-400" />
    },
    {
      id: 'PROG-03',
      title: 'Pengadaan Saprotam Subsidi & Pupuk Dolomit Koperasi',
      category: 'Kemandirian Logistik',
      desc: 'Penyaluran pupuk dolomit, kalsium tohor, molase, dan probiotik berkualitas tinggi dengan harga subsidi khusus anggota guna memangkas biaya modal budidaya.',
      metrics: 'Subsidi 35% · Gudang Sentral Blok 07',
      status: 'Aktif Setiap Musim Tanam',
      icon: <Truck className="w-5 h-5 text-blue-400" />
    },
    {
      id: 'PROG-04',
      title: 'Ketahanan Energi Tambak & Alokasi Kuota Solar Subsidi',
      category: 'Elektrifikasi & Energi',
      desc: 'Advokasi kelancaran transmisi listrik PLN ke tambak dan legalitas rekomendasi kuota BBM genset solar darurat dari Dinas Perikanan Kabupaten OKI.',
      metrics: 'Hemat Biaya Genset 60% · Siaga 24/7',
      status: 'Terfasilitasi',
      icon: <Zap className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <div className="relative py-12 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Realisasi Kinerja & Rencana Strategis</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Program Kerja Unggulan P2UWM
            </h1>
            <p className="text-xs sm:text-sm text-sky-200/80 mt-1 max-w-2xl">
              Rencana aksi nyata dan program berkelanjutan untuk memajukan perekonomian petambak, memelihara saluran kanal, serta mengevaluasi kegiatan secara digital.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-sky-500/20 shrink-0">
            <button
              onClick={() => setActiveSubTab('program')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeSubTab === 'program'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              Program Unggulan
            </button>
            <button
              onClick={() => setActiveSubTab('rapat')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'rapat'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Agenda Rapat Bulanan</span>
            </button>
            <button
              onClick={() => setActiveSubTab('laporan')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'laporan'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Laporan & Evaluasi Digital</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Program Unggulan Grid */}
        {activeSubTab === 'program' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mainPrograms.map((prog, idx) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-sky-500/20 hover:border-sky-400/50 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-900/50 flex items-center justify-center border border-sky-400/25 shadow-inner">
                      {prog.icon}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 font-mono-numbers">
                      {prog.status}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono-numbers text-sky-400 uppercase tracking-wider mb-1">
                    {prog.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-sky-100/80 leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sky-500/20 flex items-center justify-between text-xs text-sky-200/80 font-mono-numbers">
                  <span className="text-sky-300 font-semibold">{prog.metrics}</span>
                  <span className="text-sky-400/60 text-[11px]">ID: {prog.id}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Agenda Rapat Bulanan with Automated Notifications */}
        {activeSubTab === 'rapat' && (
          <div className="glass-panel rounded-3xl p-2 sm:p-4 border border-sky-500/20 shadow-2xl">
            <MeetingNotifier />
          </div>
        )}

        {/* Tab 3: Pelaporan Kegiatan Organisasi with Photo Upload & Evaluation */}
        {activeSubTab === 'laporan' && (
          <div className="glass-panel rounded-3xl p-2 sm:p-4 border border-sky-500/20 shadow-2xl">
            <ActivityReporting />
          </div>
        )}
      </div>
    </div>
  );
};
