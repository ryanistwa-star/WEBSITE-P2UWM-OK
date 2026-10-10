/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GlassBackground } from './components/GlassBackground';
import { Navbar } from './components/Navbar';
import { ProfileSection } from './components/ProfileSection';
import { HistorySection } from './components/HistorySection';
import { StructureSection } from './components/StructureSection';
import { WorkProgramSection } from './components/WorkProgramSection';
import { GallerySection } from './components/GallerySection';
import { NewsSection } from './components/NewsSection';
import { MembersSection } from './components/MembersSection';
import { ForumSection } from './components/ForumSection';
import { AdminDashboard } from './components/AdminDashboard';
import { SecurityModal } from './components/SecurityModal';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Main Menu: profil, sejarah, struktur, program, galeri, berita, anggota, forum
  const [activeTab, setActiveTab] = useState<string>('profil');
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState<boolean>(false);
  const [forumInitialSubTab, setForumInitialSubTab] = useState<'forum' | 'harga' | 'lapor'>('forum');

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPrice = () => {
    setForumInitialSubTab('harga');
    setActiveTab('forum');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEmergency = () => {
    setForumInitialSubTab('lapor');
    setActiveTab('forum');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-slate-100 flex flex-col font-sans relative selection:bg-sky-600 selection:text-white">
      {/* Animated Glowing Glass Background */}
      <GlassBackground />

      {/* Glass Top Bar Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={handleNavigate} 
        onOpenSecurity={() => setIsSecurityModalOpen(true)}
        onOpenEmergency={handleOpenEmergency}
        onOpenPrice={handleOpenPrice}
      />

      {/* Main Content Area with View Transitions */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'profil' && (
            <motion.div
              key="profil"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <ProfileSection onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activeTab === 'sejarah' && (
            <motion.div
              key="sejarah"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <HistorySection />
            </motion.div>
          )}

          {activeTab === 'struktur' && (
            <motion.div
              key="struktur"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <StructureSection />
            </motion.div>
          )}

          {activeTab === 'program' && (
            <motion.div
              key="program"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <WorkProgramSection />
            </motion.div>
          )}

          {activeTab === 'galeri' && (
            <motion.div
              key="galeri"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <GallerySection />
            </motion.div>
          )}

          {activeTab === 'berita' && (
            <motion.div
              key="berita"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <NewsSection />
            </motion.div>
          )}

          {activeTab === 'anggota' && (
            <motion.div
              key="anggota"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <MembersSection />
            </motion.div>
          )}

          {activeTab === 'forum' && (
            <motion.div
              key="forum"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <ForumSection initialSubTab={forumInitialSubTab} />
            </motion.div>
          )}

          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <div className="py-8">
                <AdminDashboard />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Security & Data Encryption Modal */}
      <SecurityModal 
        isOpen={isSecurityModalOpen} 
        onClose={() => setIsSecurityModalOpen(false)} 
      />

      {/* Institutional Glass Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenSecurity={() => setIsSecurityModalOpen(true)} 
      />
    </div>
  );
}
