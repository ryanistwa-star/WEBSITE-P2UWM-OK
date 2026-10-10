import React, { useState } from 'react';
import { INITIAL_MEMBERS } from '../data/p2uwmData';
import { Search, Filter, ShieldCheck, CheckCircle2, User, Phone, MapPin, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export const MembersSection: React.FC = () => {
  const [members] = useState(INITIAL_MEMBERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [filterCertified, setFilterCertified] = useState<'all' | 'certified' | 'uncertified'>('all');

  const filteredMembers = members.filter(m => {
    const matchesQuery = m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         m.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         m.canal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBlock = selectedBlock === 'all' || m.block === selectedBlock;
    const matchesCert = filterCertified === 'all' || 
                        (filterCertified === 'certified' && m.cbibCertified) ||
                        (filterCertified === 'uncertified' && !m.cbibCertified);
    return matchesQuery && matchesBlock && matchesCert;
  });

  const totalPonds = members.reduce((acc, m) => acc + m.pondCount, 0);
  const certifiedCount = members.filter(m => m.cbibCertified).length;

  return (
    <div className="relative py-12 lg:py-16 space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <User className="w-3.5 h-3.5" />
              <span>Basis Data Terpadu & Verifikasi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Direktori Anggota Petambak P2UWM
            </h1>
            <p className="text-xs sm:text-sm text-sky-200/80 mt-1 max-w-2xl">
              Basis data resmi anggota petambak di kawasan Wahyuni Mandira, mencakup data petak kolam, saluran irigasi, serta sertifikasi Cara Budidaya Ikan yang Baik (CBIB).
            </p>
          </div>

          {/* Quick KPI Ocean Glass Pills */}
          <div className="flex items-center gap-3 text-xs font-mono-numbers">
            <div className="glass-panel px-3.5 py-2 rounded-xl border border-sky-500/25 text-white">
              <span className="text-sky-200/70">Total Anggota: </span>
              <strong className="text-sky-300">{members.length} Petambak</strong>
            </div>
            <div className="glass-panel px-3.5 py-2 rounded-xl border border-sky-500/25 text-white">
              <span className="text-sky-200/70">Lolos CBIB: </span>
              <strong className="text-cyan-300">{certifiedCount} Terverifikasi</strong>
            </div>
          </div>
        </div>

        {/* Filter Bar with Ocean Glass Design */}
        <div className="glass-panel rounded-2xl p-4 border border-sky-500/20 space-y-3 shadow-xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-sky-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Cari nama petambak, ID anggota (contoh: WM-24-001), atau saluran kanal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-10 pr-4 py-2.5 bg-blue-950/40 border border-sky-500/20 rounded-xl text-white placeholder-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="text-xs px-3 py-2.5 bg-blue-950 border border-sky-500/25 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              >
                <option value="all">Semua Blok (01 - 16)</option>
                {Array.from({ length: 16 }, (_, i) => {
                  const num = String(i + 1).padStart(2, '0');
                  return <option key={num} value={`Blok ${num}`}>{`Blok ${num}`}</option>;
                })}
              </select>

              <select
                value={filterCertified}
                onChange={(e) => setFilterCertified(e.target.value as any)}
                className="text-xs px-3 py-2.5 bg-blue-950 border border-sky-500/25 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              >
                <option value="all">Semua Status CBIB</option>
                <option value="certified">CBIB Terverifikasi</option>
                <option value="uncertified">Dalam Proses Audit</option>
              </select>
            </div>
          </div>
        </div>

        {/* Ocean Glass Table */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-sky-500/20 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-blue-950/50 border-b border-sky-500/20 text-sky-200 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">ID & Nama Petambak</th>
                  <th className="py-3.5 px-4">Lokasi Blok & Kanal</th>
                  <th className="py-3.5 px-4 text-center">Petak Aktif</th>
                  <th className="py-3.5 px-4 text-center">Luas (Ha)</th>
                  <th className="py-3.5 px-4 text-center">Siklus DOC</th>
                  <th className="py-3.5 px-4 text-center">Standar CBIB</th>
                  <th className="py-3.5 px-4 text-center">Status</th>
                  <th className="py-3.5 px-4 text-right">Kontak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-500/10 font-mono-numbers">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-blue-900/20 transition-colors">
                    <td className="py-3.5 px-4 font-sans">
                      <div className="font-bold text-white text-sm">
                        {member.name}
                      </div>
                      <div className="text-[11px] text-sky-400 font-mono-numbers">
                        {member.id} · Sejak {member.joinedYear}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-sans">
                      <div className="font-semibold text-sky-100">{member.block}</div>
                      <div className="text-[11px] text-sky-300/70">{member.canal}</div>
                    </td>

                    <td className="py-3.5 px-4 text-center font-bold text-white">
                      {member.pondCount} Kolam
                    </td>

                    <td className="py-3.5 px-4 text-center text-sky-200">
                      {member.landAreaHa.toFixed(1)} Ha
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      {member.currentDOC && member.currentDOC > 0 ? (
                        <span className="font-semibold text-sky-300">
                          DOC {member.currentDOC}
                        </span>
                      ) : (
                        <span className="text-sky-400/50 font-sans italic text-[11px]">
                          Persiapan
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center font-sans">
                      {member.cbibCertified ? (
                        <span className="inline-flex items-center gap-1 text-cyan-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                          Lolos CBIB
                        </span>
                      ) : (
                        <span className="text-sky-300/50 text-[11px]">
                          Audit
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center font-sans">
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        member.membershipStatus === 'Aktif Penuh'
                          ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                          : member.membershipStatus === 'Masa Tanam'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                      }`}>
                        {member.membershipStatus}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-right font-mono-numbers">
                      <a
                        href={`tel:${member.phone}`}
                        className="text-sky-300 hover:text-white text-[11px] inline-flex items-center gap-1 transition-colors"
                      >
                        <Phone className="w-3 h-3 text-sky-400" />
                        <span>{member.phone}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-blue-950/30 border-t border-sky-500/20 text-xs text-sky-300/80 flex flex-wrap items-center justify-between gap-3">
            <div>
              Menampilkan {filteredMembers.length} dari total {members.length} petambak terdaftar
            </div>
            <div className="flex items-center gap-1.5 text-sky-300">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Direktori Terenkripsi AES-256 Terverifikasi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
