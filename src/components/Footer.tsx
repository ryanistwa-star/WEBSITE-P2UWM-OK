import React from 'react';
import { P2UWMLogo } from './P2UWMLogo';
import { ShieldCheck, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenSecurity: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSecurity }) => {
  return (
    <footer className="relative z-10 glass-nav text-sky-200/70 text-xs border-t border-sky-500/20 mt-16 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Col 1 & 2: Organization Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 rounded-xl p-1 shadow-lg shadow-blue-950/50">
                <P2UWMLogo className="w-8 h-8" />
              </div>
              <div className="leading-tight">
                <span className="text-base font-bold text-white tracking-tight">
                  P2UWM Wahyuni Mandira
                </span>
                <div className="text-[11px] text-sky-300">
                  Kabupaten Ogan Komering Ilir, Sumatera Selatan
                </div>
              </div>
            </div>
            <p className="text-sky-100/80 leading-relaxed max-w-sm">
              Perkumpulan Petambak Udang Wahyuni Mandira (P2UWM) adalah wadah perjuangan, koordinasi, dan kemandirian bagi 840+ petambak udang vaname di 16 blok kawasan pertambakan terpadu pesisir OKI.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenSecurity}
                className="inline-flex items-center gap-2 text-sky-300 hover:text-white glass-pill px-3 py-1.5 rounded-xl text-[11px] transition-all border border-sky-400/25"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Enkripsi Klien AES-256 Terverifikasi</span>
              </button>
            </div>
          </div>

          {/* Col 3: Menu Utama 1 */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider text-sky-300">
              Menu Utama
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('profil')} className="hover:text-white transition-colors">
                  Profil Organisasi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sejarah')} className="hover:text-white transition-colors">
                  Sejarah & Pemimpin
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('struktur')} className="hover:text-white transition-colors">
                  Struktur Kepengurusan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('program')} className="hover:text-white transition-colors">
                  Program Kerja & Rapat
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Menu Utama 2 */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider text-sky-300">
              Layanan & Media
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('galeri')} className="hover:text-white transition-colors">
                  Galeri Foto Dokumentasi
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('berita')} className="hover:text-white transition-colors">
                  Portal Berita & Modul SOP
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('anggota')} className="hover:text-white transition-colors">
                  Direktori Data Anggota
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('forum')} className="hover:text-white transition-colors">
                  Forum Anggota & Lapor
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Sekretariat Kontak */}
          <div className="space-y-3">
            <div className="text-white font-bold text-xs uppercase tracking-wider text-sky-300">
              Sekretariat Sentral
            </div>
            <div className="space-y-2 text-sky-200/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span>Balai Sentral P2UWM, Blok 07, Wahyuni Mandira, Kec. Sungai Menang, Ogan Komering Ilir, Sumsel 30653</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>+62 812-7890-4411 (Sekretariat)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>sekretariat@p2uwm.or.id</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-sky-300/60 font-mono-numbers">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Hotline Siaga Lapangan 24 Jam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sky-300/60 text-[11px]">
          <div>
            © 2012 — 2026 Perkumpulan Petambak Udang Wahyuni Mandira (P2UWM). Hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-3">
            <span>Kemandirian</span>
            <span>·</span>
            <span>Keadilan</span>
            <span>·</span>
            <span>Keberlanjutan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
