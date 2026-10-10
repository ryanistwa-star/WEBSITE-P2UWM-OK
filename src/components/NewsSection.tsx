import React, { useState } from 'react';
import { NEWS_ARTICLES, TRAINING_MODULES } from '../data/p2uwmData';
import { NewsArticle, TrainingModule } from '../types';
import { Newspaper, BookOpen, Download, Clock, ArrowRight, X, CheckCircle, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const NewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'berita' | 'modul'>('berita');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownloadDoc = (docName: string) => {
    setDownloadSuccess(docName);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="relative py-12 lg:py-16 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Publikasi & Peningkatan Kapasitas</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portal Berita & Modul Budidaya Berkelanjutan
            </h1>
            <p className="text-xs sm:text-sm text-sky-200/80 mt-1 max-w-2xl">
              Informasi terkini kegiatan organisasi P2UWM, kabar kebijakan kelautan OKI, serta panduan SOP budidaya udang vaname ramah lingkungan berstandar ekspor.
            </p>
          </div>

          {/* Segmented Controls Sea Blue */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-sky-500/20 shrink-0">
            <button
              onClick={() => setActiveTab('berita')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'berita'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              <span>Kabar Berita Tambak</span>
            </button>
            <button
              onClick={() => setActiveTab('modul')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'modul'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Modul SOP Budidaya</span>
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="p-3 bg-sky-500/20 border border-sky-400/40 text-sky-100 rounded-xl text-xs flex items-center gap-2 shadow-lg">
            <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Dokumen <strong>{downloadSuccess}</strong> berhasil diunduh ke perangkat Anda.</span>
          </div>
        )}

        {/* Tab 1: Berita Grid */}
        {activeTab === 'berita' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_ARTICLES.map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-2xl overflow-hidden border border-sky-500/20 hover:border-sky-400/50 transition-all flex flex-col justify-between shadow-xl"
              >
                {article.imageUrl && (
                  <div className="aspect-video w-full overflow-hidden bg-blue-950 relative">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-sky-300 text-[10px] font-bold border border-sky-400/30">
                      {article.category}
                    </div>
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-sky-300/70 font-mono-numbers mb-2">
                      <span>{article.date}</span>
                      <span aria-hidden="true" className="text-sky-500">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-white text-base leading-snug mb-2 hover:text-sky-300 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs text-sky-100/80 line-clamp-3 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-semibold text-sky-300 hover:text-white flex items-center gap-1.5 mt-auto pt-3 border-t border-sky-500/20 transition-colors"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Modul SOP Grid */}
        {activeTab === 'modul' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRAINING_MODULES.map((mod, idx) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-2xl p-6 border border-sky-500/20 hover:border-sky-400/50 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-xs font-mono-numbers text-sky-400 font-bold">
                      {mod.code}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                      {mod.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-sky-100/80 leading-relaxed mb-4">
                    {mod.description}
                  </p>

                  <div className="glass-card p-3.5 rounded-xl border border-sky-400/10 space-y-2 mb-4 text-xs">
                    <div className="font-bold text-sky-300 text-[11px] uppercase tracking-wider">
                      Pokok Bahasan Utama:
                    </div>
                    <ul className="space-y-1 text-sky-100/90">
                      {mod.topics.slice(0, 3).map((topic, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-sky-400 font-bold">✓</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-sky-500/20 flex items-center justify-between text-xs font-mono-numbers">
                  <div className="flex items-center gap-1.5 text-sky-300/70">
                    <Clock className="w-3.5 h-3.5 text-sky-400/70" />
                    <span>{mod.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedModule(mod)}
                      className="px-3.5 py-1.5 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white rounded-xl text-xs font-bold hover:scale-[1.02] transition-all border border-sky-400/30 shadow-md"
                    >
                      Buka SOP
                    </button>
                    <button
                      onClick={() => handleDownloadDoc(mod.downloadableDoc)}
                      className="p-1.5 rounded-xl glass-pill hover:bg-sky-500/20 text-sky-200 hover:text-white transition-all border border-sky-400/20"
                      title="Unduh Panduan SOP (.PDF)"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Reader Modal: Article */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel rounded-3xl max-w-2xl w-full border border-sky-500/30 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              <div className="p-4 bg-slate-950/90 border-b border-sky-500/20 flex items-center justify-between text-white">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
                <div className="text-xs text-sky-300 font-mono-numbers">
                  {selectedArticle.date} · Penulis: {selectedArticle.author}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {selectedArticle.title}
                </h2>

                <div className="space-y-3 text-xs sm:text-sm text-sky-100/90 leading-relaxed pt-2">
                  {selectedArticle.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modal: Module Checklist */}
      <AnimatePresence>
        {selectedModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel rounded-3xl max-w-xl w-full border border-sky-500/30 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              <div className="p-5 bg-slate-950/90 border-b border-sky-500/20 flex items-center justify-between text-white">
                <div>
                  <div className="text-xs text-sky-400 font-mono-numbers">{selectedModule.code}</div>
                  <h3 className="font-bold text-base text-white">{selectedModule.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-5 overflow-y-auto text-xs text-sky-100/90">
                <p className="leading-relaxed text-sm text-white">
                  {selectedModule.description}
                </p>

                <div className="glass-card p-4 rounded-xl border border-sky-400/15 space-y-2">
                  <h4 className="font-bold text-sky-300 uppercase tracking-wider text-xs">
                    Protokol Kerja Lapangan Wajib:
                  </h4>
                  <div className="space-y-1.5">
                    {selectedModule.actionSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-blue-600/30 text-sky-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold border border-sky-400/40">
                          {idx + 1}
                        </span>
                        <span className="text-white">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-2">
                    Daftar Materi SOP:
                  </h4>
                  <ul className="space-y-1 text-sky-200/80 list-disc list-inside">
                    {selectedModule.topics.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-sky-500/20 flex items-center justify-between">
                  <button
                    onClick={() => {
                      handleDownloadDoc(selectedModule.downloadableDoc);
                      setSelectedModule(null);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-md hover:scale-[1.02]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Unduh Panduan PDF</span>
                  </button>
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="px-3 py-2 rounded-xl glass-pill hover:bg-sky-500/15 text-sky-200"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
