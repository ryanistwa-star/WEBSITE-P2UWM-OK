import React, { useState } from 'react';
import { INITIAL_MEMBERS } from '../data/p2uwmData';
import { Member } from '../types';
import { Search, Filter, ShieldCheck, CheckCircle2, User, Phone, MapPin } from 'lucide-react';

export const MemberDirectory: React.FC = () => {
  const [members] = useState<Member[]>(INITIAL_MEMBERS);
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
    <div className="py-10 bg-slate-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-800 mb-1">
            <span>Basis Data Anggota Resmi</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Registrasi Petambak Wahyuni Mandira</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Daftar Petambak Anggota P2UWM
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Direktori kepemilikan petak tambak, status sertifikasi budidaya (CBIB), dan verifikasi keanggotaan aktif yang terenkripsi dan terverifikasi secara berkala.
              </p>
            </div>

            {/* Quick stats badges */}
            <div className="flex items-center gap-4 text-xs font-mono-numbers">
              <div className="p-2.5 bg-white border border-slate-200 rounded-lg">
                <span className="text-slate-500">Total Petambak Terdata: </span>
                <strong className="text-slate-900">{members.length} Orang</strong>
              </div>
              <div className="p-2.5 bg-white border border-slate-200 rounded-lg">
                <span className="text-slate-500">Sertifikasi CBIB: </span>
                <strong className="text-teal-800">{certifiedCount} Terverifikasi</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs mb-6 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Cari nama petambak, ID anggota (contoh: WM-24-001), atau saluran kanal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
            </div>

            <div className="flex gap-2">
              <select
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 font-medium"
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
                className="text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 font-medium"
              >
                <option value="all">Semua Sertifikasi</option>
                <option value="certified">Hanya CBIB Terverifikasi</option>
                <option value="uncertified">Belum CBIB</option>
              </select>
            </div>
          </div>
        </div>

        {/* Members Table */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">ID Anggota & Nama Petambak</th>
                  <th className="py-3 px-4">Lokasi Blok & Kanal</th>
                  <th className="py-3 px-4 text-center">Petak Aktif</th>
                  <th className="py-3 px-4 text-center">Luas (Ha)</th>
                  <th className="py-3 px-4 text-center">Siklus DOC</th>
                  <th className="py-3 px-4 text-center">Standar CBIB</th>
                  <th className="py-3 px-4 text-center">Status Keanggotaan</th>
                  <th className="py-3 px-4 text-right">Kontak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono-numbers">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900 font-sans text-sm">
                        {member.name}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono-numbers">
                        {member.id} · Anggota sejak {member.joinedYear}
                      </div>
                    </td>

                    <td className="py-3 px-4 font-sans">
                      <div className="font-semibold text-slate-800">{member.block}</div>
                      <div className="text-[11px] text-slate-500">{member.canal}</div>
                    </td>

                    <td className="py-3 px-4 text-center font-bold text-slate-900">
                      {member.pondCount} Kolam
                    </td>

                    <td className="py-3 px-4 text-center text-slate-700">
                      {member.landAreaHa.toFixed(1)} Ha
                    </td>

                    <td className="py-3 px-4 text-center">
                      {member.currentDOC && member.currentDOC > 0 ? (
                        <span className="font-semibold text-teal-800">
                          DOC {member.currentDOC}
                        </span>
                      ) : (
                        <span className="text-slate-400 italic font-sans text-[11px]">
                          Persiapan
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-center font-sans">
                      {member.cbibCertified ? (
                        <span className="inline-flex items-center gap-1 text-emerald-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Lolos CBIB
                        </span>
                      ) : (
                        <span className="text-slate-400 text-[11px]">
                          Proses Audit
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4 text-center font-sans">
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                        member.membershipStatus === 'Aktif Penuh'
                          ? 'bg-emerald-50 text-emerald-800'
                          : member.membershipStatus === 'Masa Tanam'
                          ? 'bg-sky-50 text-sky-800'
                          : 'bg-amber-50 text-amber-800'
                      }`}>
                        {member.membershipStatus}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-right font-mono-numbers">
                      <a
                        href={`tel:${member.phone}`}
                        className="text-slate-600 hover:text-teal-800 text-[11px] inline-flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-slate-400" />
                        <span>{member.phone}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-3">
            <div>
              Menampilkan {filteredMembers.length} dari total {members.length} petambak terdaftar
            </div>
            <div className="flex items-center gap-1.5 text-teal-800">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Direktori Terproteksi & Terverifikasi Dewan Pusat P2UWM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
