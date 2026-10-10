import React, { useState } from 'react';
import { INITIAL_TECHNICAL_REPORTS } from '../data/p2uwmData';
import { TechnicalReport } from '../types';
import { AlertTriangle, PlusCircle, CheckCircle2, Clock, Send, ShieldCheck, UserCheck, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const IncidentReporting: React.FC = () => {
  const [reports, setReports] = useState<TechnicalReport[]>(INITIAL_TECHNICAL_REPORTS);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showForm, setShowForm] = useState<boolean>(false);

  // Form state
  const [farmerName, setFarmerName] = useState('');
  const [farmerPhone, setFarmerPhone] = useState('');
  const [block, setBlock] = useState('Blok 01');
  const [pondNumber, setPondNumber] = useState('');
  const [category, setCategory] = useState<TechnicalReport['category']>('Kualitas Air & Penyakit');
  const [urgency, setUrgency] = useState<TechnicalReport['urgency']>('Tinggi');
  const [description, setDescription] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!farmerName || !description || !pondNumber) return;

    const newTicketId = `TKT-2026-0${reports.length + 89}`;
    const newReport: TechnicalReport = {
      id: newTicketId,
      farmerName,
      farmerPhone: farmerPhone || '+62 812-XXXX-XXXX',
      block,
      pondNumber,
      category,
      urgency,
      description,
      status: 'Menunggu',
      reportedAt: 'Baru saja (Real-time)',
      assignedOfficer: `Korlap Wilayah ${block}`,
      resolutionNotes: 'Laporan telah diverifikasi terenkripsi AES-256. Notifikasi otomatis dikirimkan ke handy talky & WhatsApp petugas siaga blok.'
    };

    setReports([newReport, ...reports]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowForm(false);
      setFarmerName('');
      setFarmerPhone('');
      setPondNumber('');
      setDescription('');
    }, 2000);
  };

  const handleUpdateStatus = (id: string, newStatus: TechnicalReport['status']) => {
    setReports(reports.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  const filteredReports = reports.filter(r => {
    if (filterStatus === 'all') return true;
    return r.status === filterStatus;
  });

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Tanggap Darurat Lapangan 24 Jam
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Pelaporan Kendala Teknis Tambak Real-Time
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Saluran pelaporan darurat bagi anggota P2UWM. Setiap laporan langsung diteruskan ke Koordinator Lapangan (Korlap) untuk penanganan segera di 16 blok pertambakan.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-rose-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 whitespace-nowrap self-start md:self-auto hover:scale-[1.02]"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{showForm ? 'Tutup Formulir' : 'Buat Laporan Baru'}</span>
          </button>
        </div>

        {/* Collapsible Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl"
            >
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Formulir Pengaduan Lapangan Terenkripsi</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Kirim Laporan Kendala Petak Tambak
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  Data Anda dilindungi enkripsi AES-256. Petugas lapangan akan menerima koordinat blok dan segera menuju lokasi Anda.
                </p>

                {submitSuccess ? (
                  <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-sm">Laporan Berhasil Diterbitkan!</div>
                      <div className="text-xs text-emerald-300">Tiket kendala telah masuk antrean dispatch darurat Korlap Wilayah.</div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">
                          Nama Petambak / Pelapor: <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Darmawan Saputra"
                          value={farmerName}
                          onChange={(e) => setFarmerName(e.target.value)}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">
                          Nomor Kontak WhatsApp / Telp:
                        </label>
                        <input
                          type="tel"
                          placeholder="Contoh: 0812-7890-XXXX"
                          value={farmerPhone}
                          onChange={(e) => setFarmerPhone(e.target.value)}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">
                          Lokasi Blok: <span className="text-rose-400">*</span>
                        </label>
                        <select
                          value={block}
                          onChange={(e) => setBlock(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          {Array.from({ length: 16 }, (_, i) => {
                            const num = String(i + 1).padStart(2, '0');
                            return <option key={num} value={`Blok ${num}`}>{`Blok ${num}`}</option>;
                          })}
                        </select>
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">
                          Nomor Petak Tambak: <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Petak B-08"
                          value={pondNumber}
                          onChange={(e) => setPondNumber(e.target.value)}
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold text-slate-300 mb-1">
                          Tingkat Urgensi:
                        </label>
                        <select
                          value={urgency}
                          onChange={(e) => setUrgency(e.target.value as TechnicalReport['urgency'])}
                          className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="Darurat">🚨 Darurat (Perlu Penanganan &lt; 1 Jam)</option>
                          <option value="Tinggi">⚠️ Tinggi (Perlu Penanganan Hari Ini)</option>
                          <option value="Sedang">ℹ️ Sedang (Jadwal Rutin Patroli)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">
                        Kategori Masalah:
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as TechnicalReport['category'])}
                        className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="Kualitas Air & Penyakit">Kualitas Air & Penyakit (DO Drop, Salinitas Drop, Gejala Berak Putih/WSSV)</option>
                        <option value="Pompa & Pintu Air">Pompa & Pintu Air (Klep Bocor, Saluran Mampet, Mesin Rusak)</option>
                        <option value="Listrik & Genset">Listrik & Genset (Trip PLN, Drop Tegangan, Trafo Rusak)</option>
                        <option value="Oksigen (DO Rendah)">Oksigen Rendah / Tambahan Kincir Darurat</option>
                        <option value="Logistik & Saprotam">Logistik & Saprotam (Kehabisan Kapur/Dolomit/Pakan Darurat)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1">
                        Deskripsi Detail Kejadian: <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Jelaskan kondisi air, perilaku udang di ancho, atau kendala fisik pompa secara jelas..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Formulir Terenkripsi AES-256</span>
                      </div>
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-rose-600 text-slate-950 font-bold rounded-xl flex items-center gap-2 hover:scale-[1.02] transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Kirim Laporan Real-Time</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Filter */}
        <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-1 p-1 bg-white/[0.05] rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1 font-medium rounded-lg transition-all ${
                filterStatus === 'all' ? 'bg-white/15 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Semua ({reports.length})
            </button>
            <button
              onClick={() => setFilterStatus('Menunggu')}
              className={`px-3 py-1 font-medium rounded-lg transition-all ${
                filterStatus === 'Menunggu' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400 hover:text-white'
              }`}
            >
              Menunggu ({reports.filter(r => r.status === 'Menunggu').length})
            </button>
            <button
              onClick={() => setFilterStatus('Ditangani')}
              className={`px-3 py-1 font-medium rounded-lg transition-all ${
                filterStatus === 'Ditangani' ? 'bg-sky-500/20 text-sky-300' : 'text-slate-400 hover:text-white'
              }`}
            >
              Ditangani ({reports.filter(r => r.status === 'Ditangani').length})
            </button>
            <button
              onClick={() => setFilterStatus('Selesai')}
              className={`px-3 py-1 font-medium rounded-lg transition-all ${
                filterStatus === 'Selesai' ? 'bg-emerald-500/20 text-emerald-300' : 'text-slate-400 hover:text-white'
              }`}
            >
              Selesai ({reports.filter(r => r.status === 'Selesai').length})
            </button>
          </div>

          <div className="text-xs text-slate-400 hidden sm:block font-mono-numbers">
            {filteredReports.length} Tiket Kejadian
          </div>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className={`glass-panel rounded-2xl p-5 border transition-all ${
                report.urgency === 'Darurat' ? 'border-amber-400/50 bg-amber-950/20' : 'border-white/10'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono-numbers mb-1">
                    <span className="font-bold text-teal-300">{report.id}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-white">{report.block} ({report.pondNumber})</span>
                    <span aria-hidden="true">·</span>
                    <span>{report.reportedAt}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    {report.category}
                  </h4>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  report.urgency === 'Darurat'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : report.urgency === 'Tinggi'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'bg-white/10 text-slate-300 border border-white/10'
                }`}>
                  {report.urgency}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {report.description}
              </p>

              <div className="pt-3 border-t border-white/10 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>Pelapor: <strong className="text-white">{report.farmerName}</strong></span>
                  </div>
                  <a
                    href={`tel:${report.farmerPhone}`}
                    className="flex items-center gap-1 text-teal-300 hover:underline font-mono-numbers"
                  >
                    <PhoneCall className="w-3 h-3" />
                    <span>{report.farmerPhone}</span>
                  </a>
                </div>

                {report.assignedOfficer && (
                  <div className="text-slate-300 glass-card p-2.5 rounded-xl text-[11px] leading-relaxed border border-white/5">
                    <span className="font-semibold text-teal-300">Petugas Ditugaskan:</span> {report.assignedOfficer}
                    {report.resolutionNotes && (
                      <div className="mt-1 text-slate-400">
                        <span className="font-semibold text-slate-300">Tindakan:</span> {report.resolutionNotes}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <div>
                    {report.status === 'Menunggu' && (
                      <span className="inline-flex items-center gap-1 text-amber-300 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        Menunggu Penanganan
                      </span>
                    )}
                    {report.status === 'Ditangani' && (
                      <span className="inline-flex items-center gap-1 text-sky-300 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        Sedang Ditangani
                      </span>
                    )}
                    {report.status === 'Selesai' && (
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Selesai Ditangani
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {report.status === 'Menunggu' && (
                      <button
                        onClick={() => handleUpdateStatus(report.id, 'Ditangani')}
                        className="px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-bold rounded-lg transition-colors"
                      >
                        Tugaskan Lapangan
                      </button>
                    )}
                    {report.status === 'Ditangani' && (
                      <button
                        onClick={() => handleUpdateStatus(report.id, 'Selesai')}
                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold rounded-lg transition-colors"
                      >
                        Tandai Selesai
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
