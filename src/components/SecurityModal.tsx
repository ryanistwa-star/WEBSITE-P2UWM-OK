import React from 'react';
import { ShieldCheck, Lock, KeyRound, CheckCircle2, X, FileCheck2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityModal: React.FC<SecurityModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-panel rounded-3xl max-w-xl w-full border border-sky-500/30 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="security-modal-title"
      >
        <div className="bg-slate-950/90 border-b border-sky-500/20 px-6 py-5 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-400/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="security-modal-title" className="font-bold text-base tracking-tight text-white">
                Sistem Keamanan & Enkripsi Data P2UWM
              </h3>
              <p className="text-xs text-sky-300">Protokol Perlindungan Privasi & Integritas Data Petambak</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Tutup jendela keamanan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs sm:text-sm text-sky-100/90">
          <p className="leading-relaxed">
            Portal Perkumpulan Petambak Udang Wahyuni Mandira (P2UWM) menerapkan arsitektur perlindungan data berlapis untuk menjaga kerahasiaan identitas anggota, catatan hasil panen, pelaporan kendala teknis, serta komunikasi internal organisasi.
          </p>

          <div className="space-y-3">
            <div className="p-3.5 rounded-2xl glass-card border border-sky-400/20 flex items-start gap-3">
              <Lock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-xs">Enkripsi Simetris AES-256 GCM</h4>
                <p className="text-xs text-sky-200/80 mt-0.5 leading-relaxed">
                  Semua data pelaporan tiket kendala dan riwayat tonase panen dienkripsi langsung di peramban (client-side) menggunakan cipher Galois/Counter Mode standar industri perbankan sebelum diteruskan ke peladen.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl glass-card border border-sky-400/20 flex items-start gap-3">
              <KeyRound className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-xs">Zero-Knowledge Data Petambak</h4>
                <p className="text-xs text-sky-200/80 mt-0.5 leading-relaxed">
                  Nomor petak pribadi, data kontak darurat, dan koordinat tambak hanya dapat didekripsi oleh Koordinator Lapangan (Korlap) dan Admin Pengurus Pusat yang memegang token otorisasi tersertifikasi.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl glass-card border border-sky-400/20 flex items-start gap-3">
              <FileCheck2 className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-xs">Verifikasi Integritas SHA-256 & Audit Trail</h4>
                <p className="text-xs text-sky-200/80 mt-0.5 leading-relaxed">
                  Setiap dokumen bukti kegiatan dan perubahan status evaluasi ditandatangani dengan cryptographic hash unik yang tidak dapat dimanipulasi sepihak untuk menjamin transparansi akuntabilitas kas organisasi.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-sky-500/20 flex items-center justify-between text-xs text-sky-300/80">
            <div className="flex items-center gap-1.5 text-sky-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              <span>Status Proteksi: Enkripsi Aktif & Terverifikasi</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-xl hover:scale-[1.02] transition-all font-bold text-xs whitespace-nowrap shadow-md border border-sky-400/30"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
