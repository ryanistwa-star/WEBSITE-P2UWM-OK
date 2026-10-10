import React, { useState } from 'react';
import { HISTORY_NARRATIVE, P2UWM_ASSETS } from '../data/p2uwmData';
import { Compass, BookOpen, Layers, ShieldCheck, Eye, X, Image as ImageIcon } from 'lucide-react';

export const HistoryAndGallery: React.FC = () => {
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<{ url: string; title: string; category: string; caption: string } | null>(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('all');

  const galleryItems = [
    {
      url: P2UWM_ASSETS.hero,
      title: 'Bentang Pesisir 16 Blok Pertambakan Wahyuni Mandira',
      category: 'Infrastruktur',
      caption: 'Pemandangan lanskap saluran tata air kanal primer dan petak-petak tambak vaname di kawasan Sungai Menang, Ogan Komering Ilir.'
    },
    {
      url: P2UWM_ASSETS.harvest,
      title: 'Panen Raya Udang Vaname Segar Standar Ekspor',
      category: 'Panen Raya',
      caption: 'Pemeriksaan kualitas dan sortasi udang vaname segar hasil budidaya ramah lingkungan oleh petambak P2UWM sebelum pengiriman ke cold storage.'
    },
    {
      url: P2UWM_ASSETS.meeting,
      title: 'Musyawarah Pleno & Rapat Koordinasi Tahunan P2UWM',
      category: 'Musyawarah',
      caption: 'Pertemuan rutin anggota membahas transparansi pengelolaan saluran irigasi bersama dan stabilitas harga saprotam di balai sentral.'
    },
    {
      url: P2UWM_ASSETS.canal,
      title: 'Pintu Air Kanal Primer & Sistem Irigasi Air Asin',
      category: 'Infrastruktur',
      caption: 'Infrastruktur pintu klep pengendali pasang surut air laut untuk menyuplai air bersih beroksigen tinggi ke saluran sekunder tambak.'
    }
  ];

  const filteredGallery = galleryItems.filter(item => {
    if (activeGalleryFilter === 'all') return true;
    return item.category === activeGalleryFilter;
  });

  return (
    <div className="py-12 bg-white min-h-[600px] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 1: History Narrative */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
            <span>Profil & Rekam Jejak</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Sejarah Perjuangan Wahyuni Mandira</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4 max-w-3xl">
            {HISTORY_NARRATIVE.title}
          </h2>
          <p className="text-sm font-medium text-teal-900 mb-6 max-w-3xl leading-relaxed">
            {HISTORY_NARRATIVE.subtitle}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 text-sm text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900 text-base leading-relaxed">
                {HISTORY_NARRATIVE.lead}
              </p>
              {HISTORY_NARRATIVE.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Compass className="w-4 h-4 text-teal-800" />
                  <span>Empat Pilar Perjuangan P2UWM:</span>
                </h3>

                <div className="space-y-3">
                  {HISTORY_NARRATIVE.pillars.map((pillar, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200/80 text-xs">
                      <div className="font-bold text-slate-900 mb-0.5">{pillar.title}</div>
                      <div className="text-slate-600 leading-relaxed">{pillar.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Photo Gallery */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
                <span>Dokumentasi Visual</span>
                <span aria-hidden="true" className="text-slate-400">·</span>
                <span>Galeri Foto Lapangan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Aktivitas Terbaru Petambak Wahyuni Mandira
              </h3>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
              <button
                onClick={() => setActiveGalleryFilter('all')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  activeGalleryFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Semua Foto
              </button>
              <button
                onClick={() => setActiveGalleryFilter('Panen Raya')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  activeGalleryFilter === 'Panen Raya' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Panen Raya
              </button>
              <button
                onClick={() => setActiveGalleryFilter('Infrastruktur')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  activeGalleryFilter === 'Infrastruktur' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Infrastruktur Kanal
              </button>
              <button
                onClick={() => setActiveGalleryFilter('Musyawarah')}
                className={`px-3 py-1 font-medium rounded-md transition-colors ${
                  activeGalleryFilter === 'Musyawarah' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Musyawarah
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedGalleryPhoto(item)}
                className="group relative bg-slate-900 rounded-xl overflow-hidden cursor-pointer shadow-xs aspect-4/3"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-300 mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal: Gallery Lightbox */}
        {selectedGalleryPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <div className="relative max-w-4xl w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-800">
              <div className="p-4 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider">
                    {selectedGalleryPhoto.category}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {selectedGalleryPhoto.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedGalleryPhoto(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-video w-full bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedGalleryPhoto.url}
                  alt={selectedGalleryPhoto.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 bg-slate-950/90 text-xs text-slate-300 border-t border-slate-800">
                {selectedGalleryPhoto.caption}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
