import React, { useState } from 'react';
import { ACTIVITY_REPORTS, P2UWM_ASSETS } from '../data/p2uwmData';
import { ActivityReport } from '../types';
import { FileText, Upload, CheckCircle2, Image as ImageIcon, PlusCircle, Star, Download, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ActivityReporting: React.FC = () => {
  const [reports, setReports] = useState<ActivityReport[]>(ACTIVITY_REPORTS);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('10 Oktober 2026');
  const [location, setLocation] = useState('Balai Pertemuan Blok 07');
  const [participantsCount, setParticipantsCount] = useState(85);
  const [summary, setSummary] = useState('');
  const [budgetAllocated, setBudgetAllocated] = useState('Rp 12.000.000');
  const [satisfactionScore, setSatisfactionScore] = useState(95);
  const [statusEvaluation, setStatusEvaluation] = useState<ActivityReport['statusEvaluation']>('Tercapai 100%');
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([P2UWM_ASSETS.meeting]);
  const [submitNotice, setSubmitNotice] = useState(false);

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !summary) return;

    const newReport: ActivityReport = {
      id: `ACT-2026-0${reports.length + 1}`,
      title,
      date,
      location,
      participantsCount,
      summary,
      budgetAllocated,
      statusEvaluation,
      satisfactionScore,
      photos: uploadedPhotos.length > 0 ? uploadedPhotos : [P2UWM_ASSETS.canal],
      documents: [`Berita_Acara_${title.substring(0, 15).replace(/\s+/g, '_')}.pdf`]
    };

    setReports([newReport, ...reports]);
    setSubmitNotice(true);
    setTimeout(() => {
      setSubmitNotice(false);
      setShowUploadModal(false);
      setTitle('');
      setSummary('');
    }, 2000);
  };

  const handleSimulateAddPhoto = () => {
    if (!uploadedPhotos.includes(P2UWM_ASSETS.harvest)) {
      setUploadedPhotos([...uploadedPhotos, P2UWM_ASSETS.harvest]);
    } else if (!uploadedPhotos.includes(P2UWM_ASSETS.canal)) {
      setUploadedPhotos([...uploadedPhotos, P2UWM_ASSETS.canal]);
    }
  };

  return (
    <div className="p-4 sm:p-6 text-white space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-sky-500/20">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
            Akuntabilitas & Dokumentasi
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Pelaporan Kegiatan Organisasi & Evaluasi Digital
          </h2>
          <p className="text-xs text-sky-200/80 mt-1 max-w-2xl">
            Arsip laporan pertanggungjawaban musyawarah, gotong royong saluran kanal, dan pembagian saprotam yang dilengkapi unggah bukti foto serta evaluasi berkala secara digital.
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="px-4 py-2.5 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2 whitespace-nowrap border border-sky-400/40 hover:scale-[1.02]"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Unggah Laporan & Evaluasi Baru</span>
        </button>
      </div>

      {/* Activity Reports List */}
      <div className="space-y-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="glass-card rounded-2xl p-6 border border-sky-500/20 shadow-xl space-y-4"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-sky-300 font-mono-numbers">
                  <span className="font-bold bg-blue-600/30 border border-sky-400/30 px-2 py-0.5 rounded-full">{report.id}</span>
                  <span aria-hidden="true" className="text-sky-500">·</span>
                  <span>{report.date}</span>
                  <span aria-hidden="true" className="text-sky-500">·</span>
                  <span>{report.location}</span>
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {report.title}
                </h3>
              </div>

              <div className="text-right shrink-0">
                <div className="text-[11px] text-sky-200/70">Hasil Evaluasi Digital:</div>
                <div className="text-xs font-bold text-sky-300 flex items-center justify-end gap-1">
                  <Star className="w-3.5 h-3.5 fill-sky-400 text-sky-400" />
                  <span>Skor: {report.satisfactionScore}% ({report.statusEvaluation})</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
              {report.summary}
            </p>

            {/* Photos Gallery */}
            <div>
              <div className="text-xs font-semibold text-sky-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>Dokumen Bukti Foto Kegiatan:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {report.photos.map((photo, pIdx) => (
                  <div
                    key={pIdx}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group relative w-32 h-20 rounded-xl overflow-hidden bg-blue-950 border border-sky-400/30 cursor-pointer shadow-md"
                  >
                    <img
                      src={photo}
                      alt="Bukti foto dokumentasi"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                      <Eye className="w-4 h-4 text-sky-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metadata strip */}
            <div className="pt-3 border-t border-sky-500/20 flex flex-wrap items-center justify-between gap-3 text-xs text-sky-200/70 font-mono-numbers">
              <div className="flex items-center gap-4">
                <div>Peserta: <strong className="text-white">{report.participantsCount} Petambak</strong></div>
                <div>Anggaran: <strong className="text-white">{report.budgetAllocated}</strong></div>
              </div>

              <div className="flex items-center gap-2">
                {report.documents.map((doc, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1 text-sky-300 bg-blue-950/40 border border-sky-500/25 px-2.5 py-1 rounded-lg text-[11px]">
                    <FileText className="w-3.5 h-3.5 text-sky-400" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: New Activity Report */}
      <AnimatePresence>
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel rounded-3xl max-w-xl w-full border border-sky-500/30 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              <div className="bg-slate-950/90 border-b border-sky-500/20 p-5 flex items-center justify-between sticky top-0 z-10 text-white">
                <div>
                  <h3 className="font-bold text-sm">Formulir Pelaporan Kegiatan & Bukti Foto</h3>
                  <p className="text-xs text-sky-300">Arsip digital akuntabilitas Perkumpulan P2UWM</p>
                </div>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitNotice ? (
                <div className="p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-sky-400 mx-auto" />
                  <h4 className="font-bold text-base text-white">Laporan Kegiatan Berhasil Diterbitkan!</h4>
                  <p className="text-xs text-sky-200">Dokumen bukti foto dan evaluasi telah tersimpan dalam repositori arsip terenkripsi P2UWM.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReport} className="p-6 space-y-4 text-xs overflow-y-auto">
                  <div>
                    <label className="block font-semibold text-sky-200 mb-1">Judul Kegiatan: <span className="text-rose-400">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Normalisasi Tanggul Saluran Pembuang Blok 12"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-sky-200 mb-1">Tanggal Pelaksanaan:</label>
                      <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-sky-200 mb-1">Lokasi:</label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-sky-200 mb-1">Jumlah Petambak Hadir:</label>
                      <input
                        type="number"
                        value={participantsCount}
                        onChange={(e) => setParticipantsCount(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-sky-200 mb-1">Realisasi Anggaran Kas:</label>
                      <input
                        type="text"
                        value={budgetAllocated}
                        onChange={(e) => setBudgetAllocated(e.target.value)}
                        className="w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-sky-200 mb-1">Ringkasan Pelaksanaan: <span className="text-rose-400">*</span></label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Jelaskan progres fisik dan hasil kesepakatan musyawarah..."
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-sky-500/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  {/* Photo upload box */}
                  <div className="p-3 bg-blue-950/40 border border-dashed border-sky-500/30 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sky-200 flex items-center gap-1.5">
                        <Upload className="w-3.5 h-3.5 text-sky-400" />
                        <span>Unggah Bukti Foto ({uploadedPhotos.length} Foto)</span>
                      </span>
                      <button
                        type="button"
                        onClick={handleSimulateAddPhoto}
                        className="text-[11px] text-sky-300 hover:text-white font-semibold underline"
                      >
                        + Tambah Foto
                      </button>
                    </div>

                    <div className="flex gap-2">
                      {uploadedPhotos.map((p, idx) => (
                        <div key={idx} className="w-16 h-12 rounded-lg overflow-hidden border border-sky-400/30 bg-blue-950">
                          <img src={p} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Digital Periodic Evaluation */}
                  <div className="p-3.5 bg-blue-950/50 border border-sky-500/25 rounded-xl space-y-3">
                    <div className="font-bold text-sky-300 uppercase tracking-wider text-[11px]">
                      Evaluasi Berkala Digital:
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sky-200 mb-1">Status Capaian:</label>
                        <select
                          value={statusEvaluation}
                          onChange={(e) => setStatusEvaluation(e.target.value as any)}
                          className="w-full px-2 py-1.5 bg-slate-900 border border-sky-500/30 rounded-lg text-white"
                        >
                          <option value="Tercapai 100%">Tercapai 100%</option>
                          <option value="Selesai Sempurna">Selesai Sempurna</option>
                          <option value="Tinjauan Lanjutan">Tinjauan Lanjutan</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sky-200 mb-1">Skor Efektivitas ({satisfactionScore}%):</label>
                        <input
                          type="range"
                          min="70"
                          max="100"
                          value={satisfactionScore}
                          onChange={(e) => setSatisfactionScore(Number(e.target.value))}
                          className="w-full accent-sky-400 h-2 bg-white/10 rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowUploadModal(false)}
                      className="px-4 py-2 glass-pill rounded-xl text-sky-200 hover:text-white"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-xl font-bold shadow-md hover:scale-[1.02]"
                    >
                      Simpan Laporan
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox photo */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-10 right-0 text-white hover:text-sky-300 p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto}
              alt="Dokumentasi Kegiatan"
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-sky-500/30"
            />
          </div>
        </div>
      )}
    </div>
  );
};
