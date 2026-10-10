import React from 'react';
import { PAST_LEADERSHIP, HISTORY_NARRATIVE, P2UWM_ASSETS } from '../data/p2uwmData';
import { History, Award, CheckCircle2, Calendar, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const HistorySection: React.FC = () => {
  return (
    <div className="relative py-12 lg:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <History className="w-3.5 h-3.5" />
            <span>Rekam Jejak & Jejak Perjuangan</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sejarah Perkumpulan Petambak Wahyuni Mandira
          </h1>
          <p className="text-xs sm:text-sm text-sky-200/80 mt-2 leading-relaxed">
            Dari pembukaan hutan pesisir Sungai Menang, Ogan Komering Ilir di era akhir 1990-an, hingga konsolidasi kemandirian organisasi profesi petambak udang terbesar dan paling terorganisir.
          </p>
        </div>

        {/* Narrative Narrative Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel rounded-3xl p-6 sm:p-10 border border-sky-500/20 mb-16 overflow-hidden relative shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-sky-100/90 leading-relaxed">
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {HISTORY_NARRATIVE.title}
              </h2>
              <p className="text-sky-300 font-medium">
                {HISTORY_NARRATIVE.subtitle}
              </p>
              <p className="text-white font-medium">
                {HISTORY_NARRATIVE.lead}
              </p>
              {HISTORY_NARRATIVE.paragraphs.map((para, idx) => (
                <p key={idx} className="text-sky-100/80">{para}</p>
              ))}
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden glass-card border border-sky-400/30 aspect-4/3 relative shadow-2xl">
                <img
                  src={P2UWM_ASSETS.canal}
                  alt="Kanal Wahyuni Mandira"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex items-end p-5">
                  <div className="text-xs text-white">
                    <span className="font-bold text-sky-300 block">Kanal Primer Wahyuni Mandira</span>
                    <span className="text-sky-100/80">Saluran urat nadi tata air 16 blok pertambakan pesisir OKI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chronological Previous Leadership Timeline */}
        <div className="space-y-8">
          <div className="border-b border-sky-500/20 pb-4">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
              Arsip Kronologis Kepemimpinan
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Daftar Pengurus Sebelumnya (Ketua & Wakil Ketua)
            </h2>
            <p className="text-xs sm:text-sm text-sky-200/80 mt-1 max-w-2xl">
              Susunan kronologis kepengurusan terdahulu dari masa ke masa beserta deskripsi peran dan tonggak capaian strategis selama menjabat.
            </p>
          </div>

          <div className="relative border-l-2 border-sky-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {PAST_LEADERSHIP.map((period, index) => (
              <motion.div
                key={period.period}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Glowing Timeline Marker */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-blue-950 border-2 border-sky-400 shadow-lg shadow-sky-500/50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                </div>

                <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-sky-500/20 hover:border-sky-400/50 transition-all shadow-xl">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-numbers font-bold text-sky-300 bg-blue-600/20 border border-sky-400/30">
                      Masa Bakti: {period.period}
                    </span>
                    <span className="text-[11px] text-sky-200/60 font-mono-numbers">
                      Dokumen Arsip Sah Organisasi
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 pb-4 border-b border-sky-500/15">
                    <div className="glass-card p-3.5 rounded-xl border border-sky-400/10">
                      <div className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider">
                        Ketua Umum:
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                        {period.chairman}
                      </div>
                    </div>

                    <div className="glass-card p-3.5 rounded-xl border border-sky-400/10">
                      <div className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider">
                        Wakil Ketua Umum:
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white mt-0.5">
                        {period.viceChairman}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-1.5">
                      Peran & Dinamika Kepemimpinan:
                    </div>
                    <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
                      {period.roleDescription}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-sky-300 uppercase tracking-wider mb-2">
                      Capaian Historis & Tonggak Keberhasilan:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {period.keyAchievements.map((ach, aIdx) => (
                        <div key={aIdx} className="glass-card p-3 rounded-xl border border-sky-400/10 text-xs text-sky-100/90 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
