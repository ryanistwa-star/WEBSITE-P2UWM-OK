import React, { useState } from 'react';
import { CommunityForum } from './CommunityForum';
import { PriceTracker } from './PriceTracker';
import { IncidentReporting } from './IncidentReporting';
import { MessageSquare, TrendingUp, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

interface ForumSectionProps {
  initialSubTab?: 'forum' | 'harga' | 'lapor';
}

export const ForumSection: React.FC<ForumSectionProps> = ({ initialSubTab = 'forum' }) => {
  const [activeSubTab, setActiveSubTab] = useState<'forum' | 'harga' | 'lapor'>(initialSubTab);

  return (
    <div className="relative py-12 lg:py-16 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Sub navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ruang Komunikasi & Layanan Anggota</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Forum Musyawarah & Pusat Layanan Petambak
            </h1>
            <p className="text-xs sm:text-sm text-sky-200/80 mt-1 max-w-2xl">
              Saluran pertukaran pengalaman budidaya, pengecekan harga acuan udang vaname harian, serta pelaporan kendala darurat di 16 blok pertambakan.
            </p>
          </div>

          {/* Sub Navigation Sea Blue Glass Pills */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl glass-panel border border-sky-500/20 shrink-0">
            <button
              onClick={() => setActiveSubTab('forum')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'forum'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Forum Diskusi</span>
            </button>
            <button
              onClick={() => setActiveSubTab('harga')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'harga'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Harga & Kalkulator</span>
            </button>
            <button
              onClick={() => setActiveSubTab('lapor')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'lapor'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400/30'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Lapor Darurat</span>
            </button>
          </div>
        </div>

        {/* Content with ocean glass border */}
        <div className="glass-panel rounded-3xl p-2 sm:p-6 border border-sky-500/20 shadow-2xl">
          {activeSubTab === 'forum' && <CommunityForum />}
          {activeSubTab === 'harga' && <PriceTracker />}
          {activeSubTab === 'lapor' && <IncidentReporting />}
        </div>
      </div>
    </div>
  );
};
