import React, { useState } from 'react';
import { INITIAL_TECHNICAL_REPORTS } from '../data/p2uwmData';
import { 
  BarChart3, 
  Users, 
  Layers, 
  Waves, 
  AlertTriangle, 
  CheckCircle, 
  Download, 
  Filter, 
  Search,
  Activity,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const AdminDashboard: React.FC = () => {
  const [selectedBlockFilter, setSelectedBlockFilter] = useState('all');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Operational metrics for 16 Blocks in Wahyuni Mandira
  const blockOperationalData = [
    { block: 'Blok 01', ponds: 154, activeMembers: 52, biomassTon: 24.8, salinityPpt: 17.5, ph: 7.9, korlap: 'Kuswanto Broto', canalStatus: 'Optimal' },
    { block: 'Blok 02', ponds: 148, activeMembers: 50, biomassTon: 21.2, salinityPpt: 17.6, ph: 7.8, korlap: 'Kuswanto Broto', canalStatus: 'Optimal' },
    { block: 'Blok 03', ponds: 160, activeMembers: 54, biomassTon: 26.0, salinityPpt: 18.0, ph: 8.0, korlap: 'M. Taufik Nur', canalStatus: 'Optimal' },
    { block: 'Blok 04', ponds: 142, activeMembers: 48, biomassTon: 19.5, salinityPpt: 18.2, ph: 8.1, korlap: 'M. Taufik Nur', canalStatus: 'Normal' },
    { block: 'Blok 05', ponds: 165, activeMembers: 56, biomassTon: 28.4, salinityPpt: 17.8, ph: 7.8, korlap: 'Supriyadi', canalStatus: 'Optimal' },
    { block: 'Blok 06', ponds: 150, activeMembers: 51, biomassTon: 22.1, salinityPpt: 17.4, ph: 7.7, korlap: 'Supriyadi', canalStatus: 'Normal' },
    { block: 'Blok 07', ponds: 158, activeMembers: 53, biomassTon: 25.6, salinityPpt: 16.9, ph: 7.6, korlap: 'Darmawan', canalStatus: 'Perhatian (Hujan)' },
    { block: 'Blok 08', ponds: 146, activeMembers: 49, biomassTon: 20.8, salinityPpt: 17.2, ph: 7.8, korlap: 'Darmawan', canalStatus: 'Normal' },
    { block: 'Blok 09', ponds: 152, activeMembers: 51, biomassTon: 23.5, salinityPpt: 18.5, ph: 8.0, korlap: 'Budi Santoso', canalStatus: 'Optimal' },
    { block: 'Blok 10', ponds: 140, activeMembers: 47, biomassTon: 18.9, salinityPpt: 18.6, ph: 8.1, korlap: 'Budi Santoso', canalStatus: 'Normal' },
    { block: 'Blok 11', ponds: 155, activeMembers: 52, biomassTon: 24.2, salinityPpt: 19.0, ph: 8.0, korlap: 'Wahyu Hidayat', canalStatus: 'Optimal' },
    { block: 'Blok 12', ponds: 144, activeMembers: 48, biomassTon: 19.8, salinityPpt: 19.2, ph: 8.2, korlap: 'Wahyu Hidayat', canalStatus: 'Normal' },
    { block: 'Blok 13', ponds: 162, activeMembers: 55, biomassTon: 27.5, salinityPpt: 19.5, ph: 8.1, korlap: 'Iskandar Z.', canalStatus: 'Optimal' },
    { block: 'Blok 14', ponds: 148, activeMembers: 50, biomassTon: 21.0, salinityPpt: 19.8, ph: 8.2, korlap: 'Iskandar Z.', canalStatus: 'Normal' },
    { block: 'Blok 15', ponds: 150, activeMembers: 51, biomassTon: 22.4, salinityPpt: 20.2, ph: 8.3, korlap: 'Zainal Abidin', canalStatus: 'Zona Muara Pasang' },
    { block: 'Blok 16', ponds: 144, activeMembers: 48, biomassTon: 20.1, salinityPpt: 20.5, ph: 8.3, korlap: 'Zainal Abidin', canalStatus: 'Zona Muara Pasang' },
  ];

  const filteredBlocks = blockOperationalData.filter(b => {
    if (selectedBlockFilter === 'all') return true;
    return b.block === selectedBlockFilter;
  });

  const totalActivePonds = blockOperationalData.reduce((acc, b) => acc + b.ponds, 0);
  const totalBiomassEstimateTon = blockOperationalData.reduce((acc, b) => acc + b.biomassTon, 0);
  const totalActiveFarmers = blockOperationalData.reduce((acc, b) => acc + b.activeMembers, 0);

  const handleExportCSV = () => {
    const headers = 'Blok,Jumlah Petak,Petambak Aktif,Estimasi Panen (Ton),Salinitas (ppt),pH Air,Korlap,Status Kanal\n';
    const rows = blockOperationalData.map(b => `${b.block},${b.ponds},${b.activeMembers},${b.biomassTon},${b.salinityPpt},${b.ph},${b.korlap},"${b.canalStatus}"`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Data_Operasional_P2UWM_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Pusat Kendali Eksekutif</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Dasbor Pemantauan Operasional Seluruh Anggota
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              Agregasi data 2.418 petak kolam di 16 blok kawasan Wahyuni Mandira, parameter kualitas air saluran primer-sekunder, dan status siaga lapangan.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-teal-500/20 transition-all flex items-center gap-2 whitespace-nowrap hover:scale-[1.02]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Ekspor Rekapitulasi Data (CSV)</span>
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 rounded-xl text-xs flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Rekapitulasi operasional kawasan tambak berhasil diunduh ke format CSV.</span>
          </div>
        )}

        {/* 4 Primary Operational KPI Cards Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div whileHover={{ y: -4 }} className="glass-panel rounded-2xl p-5 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300">Total Petak Aktif</span>
              <Layers className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
              {totalActivePonds.toLocaleString('id-ID')}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Tersebar di 16 Blok Pertambakan WM
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="glass-panel rounded-2xl p-5 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Petambak Terdaftar</span>
              <Users className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono-numbers">
              {totalActiveFarmers} Jiwa
            </div>
            <div className="text-[11px] text-emerald-300 font-medium mt-1">
              842 Terdata dalam database digital
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="glass-panel rounded-2xl p-5 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Estimasi Panen Q4</span>
              <BarChart3 className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono-numbers">
              {totalBiomassEstimateTon.toFixed(1)} Ton
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Target serapan cold storage ekspor
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="glass-panel rounded-2xl p-5 border border-white/10 shadow-xl">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">Status Laporan Teknis</span>
              <ShieldAlert className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono-numbers">
              {INITIAL_TECHNICAL_REPORTS.filter(r => r.status !== 'Selesai').length} Terbuka
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Dalam penanganan siaga Korlap
            </div>
          </motion.div>
        </div>

        {/* Operational Filter & Table Glass */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="p-4 bg-white/[0.03] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Monitoring Kawasan Blok:
              </span>
              <select
                value={selectedBlockFilter}
                onChange={(e) => setSelectedBlockFilter(e.target.value)}
                className="text-xs px-3 py-1.5 bg-slate-900 border border-white/10 rounded-xl font-medium text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
              >
                <option value="all">Tampilkan Semua 16 Blok</option>
                {blockOperationalData.map(b => (
                  <option key={b.block} value={b.block}>{b.block}</option>
                ))}
              </select>
            </div>

            <div className="text-xs text-teal-300 font-mono-numbers">
              Parameter Kualitas Air Lab: pH Rata-rata 7.9 · Salinitas 18.4 ppt
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono-numbers">
              <thead className="bg-white/[0.04] border-b border-white/10 text-slate-300 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 font-sans">Kawasan Blok</th>
                  <th className="py-3 px-4 text-center">Jumlah Petak</th>
                  <th className="py-3 px-4 text-center">Petambak</th>
                  <th className="py-3 px-4 text-right">Estimasi Panen</th>
                  <th className="py-3 px-4 text-center">Salinitas</th>
                  <th className="py-3 px-4 text-center">pH Air</th>
                  <th className="py-3 px-4 font-sans">Korlap Siaga</th>
                  <th className="py-3 px-4 font-sans text-right">Status Saluran Kanal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredBlocks.map((block) => (
                  <tr key={block.block} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-3 px-4 font-sans font-bold text-white">
                      {block.block}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-200 font-semibold">
                      {block.ponds}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-300">
                      {block.activeMembers}
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-teal-300">
                      {block.biomassTon.toFixed(1)} Ton
                    </td>
                    <td className="py-3 px-4 text-center text-slate-200">
                      {block.salinityPpt} ppt
                    </td>
                    <td className="py-3 px-4 text-center text-slate-200">
                      {block.ph}
                    </td>
                    <td className="py-3 px-4 font-sans text-slate-300">
                      {block.korlap}
                    </td>
                    <td className="py-3 px-4 font-sans text-right">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        block.canalStatus.includes('Perhatian')
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : block.canalStatus.includes('Optimal')
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-white/10 text-slate-300 border border-white/10'
                      }`}>
                        {block.canalStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-white/[0.02] border-t border-white/10 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <span>Sistem Telemetri Sentral P2UWM · Terhubung ke Gardu Distribusi Listrik & Stasiun Pompa Muara</span>
            <span className="text-teal-300 font-semibold">Pembaruan: Sinkronisasi Otomatis Setiap 30 Menit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
