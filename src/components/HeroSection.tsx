import React from 'react';
import { P2UWM_ASSETS } from '../data/p2uwmData';
import { ArrowRight, AlertTriangle, TrendingUp, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (tab: string) => void;
  onOpenSecurity: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenSecurity }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src={P2UWM_ASSETS.hero} 
          alt="Bentang kawasan pertambakan udang Wahyuni Mandira Ogan Komering Ilir" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:py-20">
        <div className="max-w-3xl">
          {/* Unboxed natural kicker */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-teal-400 mb-3">
            <span>Perkumpulan Petambak Udang Wahyuni Mandira</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span>Kecamatan Sungai Menang, OKI, Sumatera Selatan</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-5" style={{ textWrap: 'balance' }}>
            Wadah Perjuangan, Kedaulatan, dan Keberlanjutan Budidaya Udang Rakyat
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            P2UWM mengorganisir 840+ petambak mandiri di 16 blok pertambakan pesisir Ogan Komering Ilir. Mengawal stabilitas harga pasar, memelihara saluran kanal irigasi bersama, menghadirkan laboratorium biosecurity terpadu, dan merespons kendala teknis petambak secara tanggap dan profesional.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <button
              onClick={() => onNavigate('harga')}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm rounded-lg shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <span>Pantau Harga Udang Harian</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('lapor')}
              className="px-5 py-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 border border-slate-700 font-medium text-sm rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Lapor Kendala Teknis Lapangan</span>
            </button>

            <button
              onClick={() => onNavigate('sejarah')}
              className="px-4 py-2.5 text-slate-300 hover:text-white text-sm font-medium transition-colors whitespace-nowrap"
            >
              Profil & Sejarah Organisasi →
            </button>
          </div>

          {/* Security & Verification trust strip */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <button 
              onClick={onOpenSecurity}
              className="flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Enkripsi Klien AES-256 Aktif</span>
            </button>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">·</span>
              <span>2.418 Petak Kolam Terdata</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">·</span>
              <span>16 Blok Wilayah Siaga</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">·</span>
              <span>Laboratorium Kualitas Air P2UWM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Utility Ribbon - Full Width below hero */}
      <div className="relative z-10 bg-slate-950/90 border-t border-slate-800 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2 font-mono-numbers">
              <span className="text-slate-400">Harga Acuan Size 30:</span>
              <span className="text-teal-400 font-semibold">Rp 104.000 / kg</span>
              <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-2 font-mono-numbers">
              <span className="text-slate-400">Harga Acuan Size 50:</span>
              <span className="text-teal-400 font-semibold">Rp 81.500 / kg</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Status Salinitas Kanal:</span>
              <span className="text-slate-200">17.8 ppt (Optimal)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <span>Pembaruan: 10 Oktober 2026 06:00 WIB</span>
          </div>
        </div>
      </div>
    </section>
  );
};
