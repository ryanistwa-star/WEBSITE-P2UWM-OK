import React, { useState } from 'react';
import { P2UWM_ASSETS } from '../data/p2uwmData';
import { Image as ImageIcon, Eye, X, ZoomIn, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; title: string; category: string; desc: string } | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryList = [
    {
      url: P2UWM_ASSETS.hero,
      title: 'Bentang Pesisir 16 Blok Tambak Wahyuni Mandira',
      category: 'Infrastruktur',
      desc: 'Hamparan ribuan petak kolam udang vaname air payau dengan tata letak geometris rapi yang dialiri kanal irigasi primer Sungai Menang, Ogan Komering Ilir.'
    },
    {
      url: P2UWM_ASSETS.harvest,
      title: 'Pemeriksaan Hasil Panen Udang Vaname Segar',
      category: 'Panen Raya',
      desc: 'Petambak anggota P2UWM melakukan pengecekan kualitas dan penimbangan udang vaname segar langsung dari petak panen sebelum dikirim ke cold storage.'
    },
    {
      url: P2UWM_ASSETS.meeting,
      title: 'Musyawarah Pleno Anggota Tahunan (RAT) P2UWM',
      category: 'Musyawarah',
      desc: 'Rapat koordinasi dan musyawarah anggota membahas transparansi pengelolaan saluran irigasi bersama dan stabilitas harga pakan di balai sentral Blok 07.'
    },
    {
      url: P2UWM_ASSETS.canal,
      title: 'Pintu Air Kanal Primer & Sistem Irigasi Air Asin',
      category: 'Infrastruktur',
      desc: 'Infrastruktur pintu klep pengendali pasang surut air laut untuk menyuplai air laut bersih beroksigen tinggi ke saluran sekunder tambak.'
    }
  ];

  const filteredItems = galleryList.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="relative py-12 lg:py-16 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Dokumentasi Visual Lapangan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Galeri Kegiatan & Potret Kawasan P2UWM
            </h1>
            <p className="text-xs sm:text-sm text-sky-200/80 mt-1 max-w-2xl">
              Rekaman lensa perjuangan dan aktivitas para petambak udang Wahyuni Mandira dalam merawat kanal, memanen hasil bumi bahari, dan bermusyawarah mufakat.
            </p>
          </div>

          {/* Filter Pills Sea Blue */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-sky-500/20 shrink-0">
            {['all', 'Panen Raya', 'Infrastruktur', 'Musyawarah'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                    : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
                }`}
              >
                {cat === 'all' ? 'Semua Foto' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with Glass Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedPhoto(item)}
                whileHover={{ y: -6 }}
                className="group relative glass-panel rounded-2xl overflow-hidden cursor-pointer border border-sky-500/20 hover:border-sky-400/50 shadow-2xl aspect-4/3 transition-all"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-sky-300 font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5 text-sky-300" />
                    <span>Klik untuk memperbesar</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-sky-400/30 shadow-2xl"
          >
            <div className="p-4 bg-slate-950/90 border-b border-sky-500/20 flex items-center justify-between text-white">
              <div>
                <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-bold text-base text-white">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Tutup foto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full bg-slate-950 flex items-center justify-center">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 bg-slate-950/90 text-xs sm:text-sm text-sky-100/90 border-t border-sky-500/20 leading-relaxed">
              {selectedPhoto.desc}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
