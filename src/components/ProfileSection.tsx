import React from 'react';
import { P2UWMLogo } from './P2UWMLogo';
import { P2UWM_ASSETS } from '../data/p2uwmData';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Scale, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Building2, 
  Layers, 
  Droplets,
  Award,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

interface ProfileSectionProps {
  onNavigate: (tab: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onNavigate }) => {
  const logoMeanings = [
    {
      title: 'Timbangan Keadilan',
      desc: 'Melambangkan perjuangan supremasi keadilan, kesetaraan hak petambak, serta transparansi timbang tara dalam seluruh transaksi tata niaga hasil panen udang.',
      icon: <Scale className="w-5 h-5 text-sky-300" />,
      color: 'from-blue-600/25 via-sky-900/20 to-blue-950/30'
    },
    {
      title: 'Bidang Persegi Hijau',
      desc: 'Melambangkan hamparan ekosistem tambak Wahyuni Mandira seluas ribuan hektar yang subur, lestari, berwawasan lingkungan hidup, dan terjaga dari kerusakan alam.',
      icon: <Droplets className="w-5 h-5 text-cyan-300" />,
      color: 'from-cyan-600/25 via-blue-900/20 to-blue-950/30'
    },
    {
      title: 'Udang Vaname Putih',
      desc: 'Melambangkan komoditas unggulan utama (Litopenaeus vannamei) yang menjadi tumpuan kedaulatan ekonomi, sumber penghidupan, dan martabat keluarga petambak.',
      icon: <Award className="w-5 h-5 text-sky-400" />,
      color: 'from-sky-500/25 via-blue-950/30 to-slate-900/40'
    },
    {
      title: 'Padi dan Kapas',
      desc: 'Melambangkan cita-cita kemakmuran sandang dan pangan serta kesejahteraan sosial yang adil dan merata bagi seluruh anggota petambak di 16 blok pertambakan.',
      icon: <Sparkles className="w-5 h-5 text-amber-300" />,
      color: 'from-blue-700/25 via-amber-900/15 to-blue-950/30'
    }
  ];

  const pillars = [
    {
      title: 'Kemandirian Usaha',
      desc: 'Mengelola tata air, pengadaan sarana produksi (saprotam), dan distribusi pakan secara swadaya melalui kelembagaan koperasi petambak.'
    },
    {
      title: 'Solidaritas & Gotong Royong',
      desc: 'Kebersamaan memelihara 42 km tanggul kanal primer-sekunder dan saling tolong-menolong saat terjadi kendala teknis atau fluktuasi alam.'
    },
    {
      title: 'Keberlanjutan Lingkungan',
      desc: 'Penerapan standar budidaya CBIB ramah lingkungan, zero-antibiotik terlarang, serta pelestarian sabuk hijau bakau (mangrove greenbelt).'
    },
    {
      title: 'Integritas & Tata Kelola Terbuka',
      desc: 'Kepengurusan yang akuntabel, transparan dalam pengelolaan kas pemeliharaan saluran, dan mengedepankan musyawarah mufakat.'
    }
  ];

  return (
    <div className="relative py-12 lg:py-16 space-y-16">
      {/* 1. Hero Profile Banner with Ocean Glass Effect */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden border border-sky-500/25 shadow-2xl"
        >
          {/* Background Ambient Ocean Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Kawasan Pertambakan Wahyuni Mandira, OKI, Sumatera Selatan</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Perkumpulan Petambak Udang Wahyuni Mandira (P2UWM)
              </h1>

              <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed max-w-2xl">
                Wadah perjuangan, koordinasi, dan penyalur aspirasi bagi para petambak udang di kawasan pertambakan terpadu Wahyuni Mandira, Kecamatan Sungai Menang, Ogan Komering Ilir. Mengemban amanah memastikan keberlanjutan usaha budidaya udang agar senantiasa profesional, mandiri, dan berdaya saing tinggi.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('program')}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white text-xs font-bold shadow-lg shadow-sky-600/30 hover:scale-[1.02] transition-all flex items-center gap-2 border border-sky-400/40"
                >
                  <span>Lihat Program Kerja</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('sejarah')}
                  className="px-5 py-2.5 rounded-xl glass-pill hover:bg-sky-500/15 text-sky-100 text-xs font-semibold transition-all border border-sky-400/25"
                >
                  Jejak Sejarah Perjuangan
                </button>
              </div>
            </div>

            {/* Official Logo Display Card */}
            <div className="lg:col-span-4 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="relative glass-card rounded-2xl p-6 border border-sky-400/30 text-center max-w-xs w-full shadow-2xl bg-blue-950/50"
              >
                <div className="w-36 h-36 mx-auto bg-white rounded-2xl p-2 shadow-lg mb-4 flex items-center justify-center border border-sky-100">
                  <P2UWMLogo className="w-full h-full" />
                </div>
                <h3 className="font-bold text-white text-base">Lambang Resmi P2UWM</h3>
                <p className="text-[11px] text-sky-300 mt-1">
                  Simbol Kedaulatan, Keadilan, dan Kemakmuran Petambak
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. Bedah Makna Lambang Logo P2UWM (Ocean Blue Glass Grid) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
            Filosofi Kelembagaan
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Makna & Filosofi Lambang Logo P2UWM
          </h2>
          <p className="text-xs sm:text-sm text-sky-200/80 mt-1 max-w-2xl">
            Setiap elemen pada lambang P2UWM merefleksikan nilai perjuangan, keadilan, dan harapan ribuan petambak di pesisir Sumatera Selatan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {logoMeanings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-2xl p-5 border border-sky-400/20 bg-gradient-to-br ${item.color} relative overflow-hidden transition-all shadow-lg`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-900/50 backdrop-blur-md flex items-center justify-center mb-4 border border-sky-400/30 shadow-inner">
                {item.icon}
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-sky-100/80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. Visi & Misi Organisasi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-sky-500/20 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                <Target className="w-4 h-4" />
                <span>Visi Utama Organisasi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-4">
                "Mewujudkan Petambak Udang Wahyuni Mandira yang Mandiri, Berdaulat, Profesional, dan Berkelanjutan Berdaya Saing Global."
              </h3>
              <p className="text-xs text-sky-200/80 leading-relaxed">
                P2UWM bertekad menjadi garda terdepan pembelaan hak ekonomi petambak sekaligus mercusuar percontohan tata kelola budidaya udang air payau mandiri terbesar di Indonesia.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-sky-500/20 flex items-center gap-4 text-xs text-sky-300 font-mono-numbers">
              <span className="font-semibold">Berasaskan:</span>
              <span>Pancasila & UUD 1945</span>
              <span>·</span>
              <span>Kekeluargaan</span>
            </div>
          </div>

          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-sky-500/20 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
              <Eye className="w-4 h-4" />
              <span>Misi Strategis P2UWM</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Empat Langkah Perjuangan Berkelanjutan:
            </h3>

            <div className="space-y-3">
              {[
                'Merevitalisasi dan memelihara keandalan infrastruktur saluran kanal primer-sekunder sepanjang 42 km demi pasokan air laut higienis.',
                'Menegakkan transparansi harga dasar tambak harian serta memperjuangkan akses langsung ke industri pembeli dan eksportir resmi.',
                'Menyediakan fasilitas laboratorium pengujian kualitas air dan screening bakteri Vibrio gratis demi menekan risiko gagal panen.',
                'Menjalin sinergi erat dengan Pemerintah Kabupaten OKI, DKP Sumsel, dan Kementerian Kelautan dan Perikanan (KKP).'
              ].map((misi, i) => (
                <div key={i} className="glass-card p-3.5 rounded-xl flex items-start gap-3 border border-sky-400/15">
                  <div className="w-6 h-6 rounded-full bg-blue-600/30 text-sky-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-sky-400/40">
                    {i + 1}
                  </div>
                  <p className="text-xs text-sky-100/90 leading-relaxed">{misi}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Empat Pilar Nilai Inti */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-sky-500/20 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">
              Prinsip Dasar
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Empat Pilar Integritas P2UWM
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-sky-400/15 space-y-2">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs text-sky-200/80 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
