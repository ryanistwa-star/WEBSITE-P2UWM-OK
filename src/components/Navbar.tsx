import React, { useState } from 'react';
import { P2UWMLogo } from './P2UWMLogo';
import { 
  Menu, 
  X, 
  Lock, 
  TrendingUp, 
  AlertTriangle, 
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSecurity: () => void;
  onOpenEmergency: () => void;
  onOpenPrice: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onOpenSecurity,
  onOpenEmergency,
  onOpenPrice
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact Main Menu requested by user:
  // profil, sejarah, struktur, program kerja, galeri, berita, anggota, forum
  const mainNavItems = [
    { id: 'profil', label: 'Profil' },
    { id: 'sejarah', label: 'Sejarah' },
    { id: 'struktur', label: 'Struktur' },
    { id: 'program', label: 'Program Kerja' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'berita', label: 'Berita' },
    { id: 'anggota', label: 'Anggota' },
    { id: 'forum', label: 'Forum' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          {/* Brand with Logo P2UWM */}
          <button 
            onClick={() => handleNavClick('profil')}
            className="flex items-center gap-3.5 text-left group shrink-0 focus:outline-none"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 rounded-xl blur-xs opacity-70 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white/95 rounded-lg p-1 shadow-lg shadow-blue-950/50">
                <P2UWMLogo className="w-9 h-9 sm:w-10 sm:h-10" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5 font-sans">
                <span>P2UWM</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-sky-300 border border-blue-400/30 hidden sm:inline-block">
                  OKI, SUMSEL
                </span>
              </div>
              <div className="text-[11px] text-sky-200/80 font-medium tracking-wide">
                Wahyuni Mandira
              </div>
            </div>
          </button>

          {/* Main Navigation - Ocean Glass Pill style */}
          <nav className="hidden xl:flex items-center gap-1 p-1.5 rounded-full bg-blue-950/40 border border-sky-500/20 backdrop-blur-md shadow-inner shadow-blue-950/50">
            {mainNavItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive 
                      ? 'text-white' 
                      : 'text-sky-100/80 hover:text-white hover:bg-sky-500/10'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 rounded-full shadow-lg shadow-sky-500/30 border border-sky-400/40"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action Buttons on Desktop */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Price Quick trigger */}
            <button
              onClick={onOpenPrice}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 transition-all flex items-center gap-1.5 shadow-sm"
              title="Cek Harga Udang Hari Ini & Kalkulator"
            >
              <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
              <span>Harga Udang</span>
            </button>

            {/* Emergency Report Quick trigger */}
            <button
              onClick={onOpenEmergency}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all flex items-center gap-1.5 shadow-sm"
              title="Lapor Kendala Teknis Lapangan Darurat"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>Lapor Darurat</span>
            </button>

            {/* Security Indicator */}
            <button
              onClick={onOpenSecurity}
              className="p-2 rounded-xl bg-blue-950/40 border border-sky-500/20 hover:border-sky-400 text-sky-300 hover:text-white transition-all shadow-sm"
              title="Status Enkripsi Data AES-256"
              aria-label="Status Keamanan"
            >
              <Lock className="w-4 h-4 text-sky-400" />
            </button>

            {/* Admin Dashboard button */}
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'dashboard'
                  ? 'bg-gradient-to-r from-blue-600 to-sky-600 text-white shadow-lg shadow-blue-600/40 border border-sky-400/40'
                  : 'bg-blue-900/40 hover:bg-blue-800/50 text-sky-100 border border-sky-500/25'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-sky-300" />
              <span>Dasbor Admin</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenPrice}
              className="p-2 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-300"
              aria-label="Harga Udang"
            >
              <TrendingUp className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenEmergency}
              className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300"
              aria-label="Lapor Darurat"
            >
              <AlertTriangle className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-blue-950/60 border border-sky-500/20 text-white hover:bg-blue-900/40 transition-all"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Glass style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden glass-panel border-t border-sky-500/20 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-2 mb-4">
              {mainNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 text-white shadow-md'
                      : 'bg-blue-950/40 text-slate-200 hover:bg-blue-900/40 border border-sky-500/15'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-sky-500/20 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  onOpenSecurity();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-sky-200 flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-sky-400" />
                <span>Enkripsi AES-256</span>
              </button>

              <button
                onClick={() => handleNavClick('dashboard')}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white text-xs font-bold rounded-xl shadow-sm border border-sky-400/40"
              >
                Dasbor Admin
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
