import React, { useState } from 'react';
import { OFFICERS, PAST_LEADERSHIP } from '../data/p2uwmData';
import { Officer } from '../types';
import { Phone, Mail, Award, Clock, Users, History, ChevronRight } from 'lucide-react';

export const LeadershipDirectory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'pusat' | 'korwil' | 'korlap' | 'sebelumnya'>('pusat');
  const [selectedOfficer, setSelectedOfficer] = useState<Officer | null>(null);

  const filteredOfficers = OFFICERS.filter(o => o.category === selectedCategory);

  return (
    <div className="py-10 bg-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
              <span>Struktur & Integritas Kepemimpinan</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span>Tata Kelola Organisasi P2UWM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Direktori Kepengurusan & Riwayat Pemimpin
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Informasi lengkap dewan pengurus pusat, koordinator wilayah kanal, koordinator lapangan 16 blok, serta catatan kronologis kiprah para ketua dan wakil ketua pendahulu.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg shrink-0">
            <button
              onClick={() => setSelectedCategory('pusat')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'pusat' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pengurus Pusat
            </button>
            <button
              onClick={() => setSelectedCategory('korwil')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'korwil' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Koordinator Wilayah
            </button>
            <button
              onClick={() => setSelectedCategory('korlap')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === 'korlap' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Koordinator Lapangan
            </button>
            <button
              onClick={() => setSelectedCategory('sebelumnya')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1 ${
                selectedCategory === 'sebelumnya' ? 'bg-white text-teal-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>Pengurus Sebelumnya</span>
            </button>
          </div>
        </div>

        {/* View 1: Active Officers (Pusat / Korwil / Korlap) */}
        {selectedCategory !== 'sebelumnya' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredOfficers.map((officer) => (
              <div
                key={officer.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-teal-800 text-teal-100 flex items-center justify-center font-bold text-sm shrink-0">
                      {officer.name.charAt(0)}
                    </div>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {officer.status}
                    </span>
                  </div>

                  <div className="mb-2">
                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                      {officer.name}
                    </h3>
                    <div className="text-xs font-medium text-teal-800 mt-0.5">
                      {officer.role}
                    </div>
                    {officer.wilayah && (
                      <div className="text-xs text-slate-500 font-mono-numbers mt-0.5">
                        Wilayah Tugas: {officer.wilayah}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {officer.bio}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1.5 mb-4 border border-slate-100">
                    <div className="text-slate-500 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <span className="text-slate-700 truncate">{officer.specialization}</span>
                    </div>
                    <div className="text-slate-500 flex items-center gap-1.5 font-mono-numbers">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{officer.experienceYears} Tahun Pengalaman Tambak</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono-numbers">
                  <a
                    href={`tel:${officer.phone}`}
                    className="flex items-center gap-1.5 text-slate-700 hover:text-teal-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{officer.phone}</span>
                  </a>
                  <a
                    href={`mailto:${officer.email}`}
                    className="text-slate-400 hover:text-slate-700 p-1"
                    title={officer.email}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View 2: Past Leadership Chronology (Ketua & Wakil Ketua dari Periode ke Periode) */}
        {selectedCategory === 'sebelumnya' && (
          <div className="space-y-6">
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl text-xs text-teal-900 leading-relaxed">
              <strong>Catatan Arsip Kelembagaan:</strong> P2UWM memegang teguh asas keterbukaan dan penghargaan atas jasa para perintis. Berikut adalah linimasa kepengurusan periode terdahulu sejak era transisi kemandirian kawasan tambak Wahyuni Mandira tahun 2012.
            </div>

            <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
              {PAST_LEADERSHIP.map((period, index) => (
                <div key={period.period} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-slate-900 border-4 border-white shadow-xs group-hover:scale-110 transition-transform" />

                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:border-slate-300 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono-numbers text-xs font-bold text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded">
                        Periode Kepengurusan: {period.period}
                      </span>
                      <span className="text-xs text-slate-400">Arsip Resmi Organisasi</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-100">
                      <div>
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          Ketua Umum:
                        </div>
                        <div className="text-base font-bold text-slate-900 mt-0.5">
                          {period.chairman}
                        </div>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          Wakil Ketua Umum:
                        </div>
                        <div className="text-base font-bold text-slate-900 mt-0.5">
                          {period.viceChairman}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs font-semibold text-slate-800 mb-1">
                        Deskripsi Peran & Dinamika Kepengurusan:
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {period.roleDescription}
                      </p>
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-slate-800 mb-2">
                        Capaian & Tonggak Sejarah Utama:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {period.keyAchievements.map((ach, aIdx) => (
                          <div key={aIdx} className="p-2.5 bg-slate-50 rounded-lg text-xs text-slate-700 flex items-start gap-2 border border-slate-100">
                            <span className="text-teal-700 font-bold shrink-0">✓</span>
                            <span className="leading-relaxed">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
