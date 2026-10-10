import React, { useState } from 'react';
import { OFFICERS } from '../data/p2uwmData';
import { Officer } from '../types';
import { Users, Phone, Mail, Award, Clock, MapPin, Shield, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const StructureSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'pusat' | 'korwil' | 'korlap'>('pusat');

  const filteredOfficers = OFFICERS.filter(o => o.category === activeCategory);

  return (
    <div className="relative py-12 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>Hierarki & Dewan Kepengurusan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Struktur Organisasi P2UWM
            </h1>
            <p className="text-xs sm:text-sm text-sky-200/80 mt-1 max-w-2xl">
              Susunan kepengurusan terpadu dari tingkat Dewan Pengurus Harian Pusat, Koordinator Wilayah (Korwil), hingga Koordinator Lapangan (Korlap) di 16 blok pertambakan Wahyuni Mandira.
            </p>
          </div>

          {/* Glass Segmented Controls */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-sky-500/20 shrink-0">
            <button
              onClick={() => setActiveCategory('pusat')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'pusat'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              Pengurus Pusat
            </button>
            <button
              onClick={() => setActiveCategory('korwil')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'korwil'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              Koordinator Wilayah
            </button>
            <button
              onClick={() => setActiveCategory('korlap')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === 'korlap'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              Koordinator Lapangan (16 Blok)
            </button>
          </div>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredOfficers.map((officer, index) => (
              <motion.div
                key={officer.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-2xl p-6 border border-sky-500/20 flex flex-col justify-between hover:border-sky-400/50 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-700 via-sky-600 to-cyan-500 text-white font-extrabold flex items-center justify-center text-base shadow-lg shadow-sky-500/25 border border-sky-300/30">
                      {officer.name.charAt(0)}
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 font-mono-numbers">
                      {officer.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-base leading-snug mb-1">
                    {officer.name}
                  </h3>
                  <div className="text-xs font-semibold text-sky-300 mb-2">
                    {officer.role}
                  </div>

                  {officer.wilayah && (
                    <div className="flex items-center gap-1.5 text-xs text-sky-200/80 font-mono-numbers mb-3">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{officer.wilayah}</span>
                    </div>
                  )}

                  <p className="text-xs text-sky-100/80 leading-relaxed line-clamp-3 mb-4">
                    {officer.bio}
                  </p>

                  <div className="glass-card p-3 rounded-xl border border-sky-400/10 space-y-2 mb-4 text-xs">
                    <div className="flex items-center gap-2 text-sky-200">
                      <Award className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">{officer.specialization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sky-300/70 font-mono-numbers text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-sky-400/70 shrink-0" />
                      <span>{officer.experienceYears} Tahun Pengabdian Tambak</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-sky-500/20 flex items-center justify-between text-xs font-mono-numbers">
                  <a
                    href={`tel:${officer.phone}`}
                    className="flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>{officer.phone}</span>
                  </a>
                  <a
                    href={`mailto:${officer.email}`}
                    className="p-1.5 rounded-lg glass-pill hover:bg-sky-500/20 text-sky-200 hover:text-white transition-all border border-sky-400/20"
                    title={officer.email}
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
