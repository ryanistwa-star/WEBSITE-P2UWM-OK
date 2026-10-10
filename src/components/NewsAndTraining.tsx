import React, { useState } from 'react';
import { NEWS_ARTICLES, TRAINING_MODULES } from '../data/p2uwmData';
import { NewsArticle, TrainingModule } from '../types';
import { BookOpen, Newspaper, Download, CheckCircle, Clock, ArrowRight, X, Sparkles, FileText } from 'lucide-react';

export const NewsAndTraining: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedModule, setSelectedModule] = useState<TrainingModule | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'berita' | 'pelatihan'>('berita');

  const handleDownloadDoc = (docName: string) => {
    setDownloadSuccess(docName);
    setTimeout(() => {
      setDownloadSuccess(null);
    }, 3000);
  };

  return (
    <div className="py-10 bg-white min-h-[600px] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
              <span>Wawasan & Peningkatan Kapasitas</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>P2UWM Knowledge Base</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Portal Berita & Modul Budidaya Berkelanjutan
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Publikasi resmi perkembangan organisasi, kebijakan tata kelola tambak OKI, serta kurikulum standar operasional budidaya udang vaname ramah lingkungan.
            </p>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab('berita')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'berita'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              <span>Portal Berita Digital</span>
            </button>
            <button
              onClick={() => setActiveTab('pelatihan')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'pelatihan'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Modul Pelatihan SOP</span>
            </button>
          </div>
        </div>

        {/* Tab 1: News Portal */}
        {activeTab === 'berita' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="group bg-slate-50 border border-slate-200/90 rounded-xl overflow-hidden hover:border-slate-300 transition-all flex flex-col shadow-xs"
              >
                {article.imageUrl && (
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
                      {article.category}
                    </div>
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 font-mono-numbers">
                      <span>{article.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-teal-800 transition-colors mb-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-semibold text-teal-800 hover:text-teal-950 flex items-center gap-1 mt-auto pt-3 border-t border-slate-200/60"
                  >
                    <span>Baca Artikel Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Training Modules */}
        {activeTab === 'pelatihan' && (
          <div className="space-y-6">
            {downloadSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dokumen <strong>{downloadSuccess}</strong> berhasil diunduh ke perangkat Anda.</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TRAINING_MODULES.map((mod) => (
                <div
                  key={mod.id}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="text-xs font-mono-numbers text-teal-800 font-bold">
                        {mod.code}
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-900">
                        {mod.level}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {mod.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {mod.description}
                    </p>

                    <div className="space-y-2 mb-4 bg-white p-3.5 rounded-lg border border-slate-200/60 text-xs">
                      <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                        Pokok Bahasan Utama:
                      </div>
                      <ul className="space-y-1 text-slate-600">
                        {mod.topics.slice(0, 3).map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-teal-700 font-bold">✓</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{mod.duration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedModule(mod)}
                        className="px-3 py-1.5 bg-slate-900 text-white rounded-md hover:bg-slate-800 font-medium text-xs transition-colors"
                      >
                        Buka Panduan
                      </button>
                      <button
                        onClick={() => handleDownloadDoc(mod.downloadableDoc)}
                        className="p-1.5 border border-slate-200 rounded-md hover:bg-white text-slate-700 transition-colors"
                        title="Unduh Panduan SOP PDF"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal: Article Detail Reader */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-slate-200 max-h-[85vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex items-center justify-between z-10">
                <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 text-slate-400 hover:text-slate-800 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {selectedArticle.imageUrl && (
                <div className="aspect-video w-full bg-slate-900 overflow-hidden">
                  <img
                    src={selectedArticle.imageUrl}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono-numbers">
                  <span>{selectedArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>Ditulis oleh: {selectedArticle.author}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-2">
                  {selectedArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>P2UWM Digital Press Desk</span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-medium"
                  >
                    Tutup Artikel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Module Detailed Checklist */}
        {selectedModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
                <div>
                  <div className="text-xs text-teal-400 font-mono-numbers">{selectedModule.code}</div>
                  <h3 className="font-bold text-base text-white">{selectedModule.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto text-xs text-slate-600">
                <p className="text-sm leading-relaxed text-slate-700">
                  {selectedModule.description}
                </p>

                <div className="p-4 bg-teal-50/60 border border-teal-200 rounded-lg space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                    Langkah Kerja Lapangan Wajib:
                  </h4>
                  <div className="space-y-1.5">
                    {selectedModule.actionSteps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-teal-800 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-slate-800">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                    Materi Teknis Lengkap:
                  </h4>
                  <ul className="space-y-1 text-slate-600 list-disc list-inside">
                    {selectedModule.topics.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => {
                      handleDownloadDoc(selectedModule.downloadableDoc);
                      setSelectedModule(null);
                    }}
                    className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-700 font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Unduh SOP Resmi (.PDF)</span>
                  </button>
                  <button
                    onClick={() => setSelectedModule(null)}
                    className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700"
                  >
                    Selesai
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
