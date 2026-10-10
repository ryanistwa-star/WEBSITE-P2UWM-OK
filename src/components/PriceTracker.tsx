import React, { useState } from 'react';
import { INITIAL_SHRIMP_PRICES, PRICE_TREND_SERIES } from '../data/p2uwmData';
import { TrendingUp, TrendingDown, Minus, Calculator, RefreshCw, Info, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export const PriceTracker: React.FC = () => {
  const [prices] = useState(INITIAL_SHRIMP_PRICES);
  const [selectedSize, setSelectedSize] = useState<number>(40);
  const [biomassKg, setBiomassKg] = useState<number>(2500);
  const [activeTab, setActiveTab] = useState<'harian' | 'tren' | 'kalkulator'>('harian');

  const selectedPriceObj = prices.find((p) => p.size === selectedSize) || prices[0];
  const calculatedTotal = (selectedPriceObj.pricePerKg * biomassKg);

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Section Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1">
              Bursa Harga Tambak Wahyuni Mandira
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Informasi Harga Udang Vaname Harian
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Harga acuan dasar tambak (farm-gate price) hasil kesepakatan verifikasi tim pasar P2UWM bersama asosiasi pengolah dan pembeli cold storage terdaftar.
            </p>
          </div>

          {/* Tab Controls Glass */}
          <div className="flex items-center gap-1 p-1 bg-white/[0.06] rounded-xl border border-white/10 shrink-0">
            <button
              onClick={() => setActiveTab('harian')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'harian'
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Tabel Harian
            </button>
            <button
              onClick={() => setActiveTab('kalkulator')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'kalkulator'
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Kalkulator Panen
            </button>
            <button
              onClick={() => setActiveTab('tren')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'tren'
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Tren 7 Hari
            </button>
          </div>
        </div>

        {/* Tab 1: Daily Table */}
        {activeTab === 'harian' && (
          <div className="space-y-4">
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="p-3.5 bg-white/[0.03] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">Spesies:</span>
                  <span>Litopenaeus vannamei (Udang Vaname Segar)</span>
                  <span className="text-slate-500">·</span>
                  <span className="font-semibold text-white">Kondisi:</span>
                  <span>Tambak Wahyuni Mandira (FOB Tambak)</span>
                </div>
                <div className="flex items-center gap-1.5 text-teal-300 font-mono-numbers">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Update: 10 Oktober 2026 06:00 WIB</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/[0.04] border-b border-white/10 text-slate-300 font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Size (Ekor/kg)</th>
                      <th className="py-3 px-4 text-right">Harga Acuan P2UWM</th>
                      <th className="py-3 px-4 text-right">Perubahan 24 Jam</th>
                      <th className="py-3 px-4 text-right">Rentang Pasar (Min - Max)</th>
                      <th className="py-3 px-4 text-center">Status Permintaan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {prices.map((item) => (
                      <tr key={item.size} className="hover:bg-white/[0.04] transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 font-bold flex items-center justify-center text-xs border border-teal-500/30">
                            {item.size}
                          </span>
                          <div>
                            <div>Size {item.size}</div>
                            <div className="text-[11px] text-slate-400 font-normal">± {Math.round(1000 / item.size)} gram / ekor</div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono-numbers font-bold text-teal-300 text-sm sm:text-base">
                          {formatRupiah(item.pricePerKg)}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono-numbers text-xs">
                          {item.trend === 'up' && (
                            <span className="text-emerald-400 font-semibold inline-flex items-center gap-1">
                              <TrendingUp className="w-3.5 h-3.5" />
                              +{formatRupiah(item.change24h)}
                            </span>
                          )}
                          {item.trend === 'down' && (
                            <span className="text-rose-400 font-semibold inline-flex items-center gap-1">
                              <TrendingDown className="w-3.5 h-3.5" />
                              {formatRupiah(item.change24h)}
                            </span>
                          )}
                          {item.trend === 'stable' && (
                            <span className="text-slate-400 inline-flex items-center gap-1">
                              <Minus className="w-3.5 h-3.5" />
                              Stabil
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right font-mono-numbers text-xs text-slate-300">
                          {formatRupiah(item.minRange)} — {formatRupiah(item.maxRange)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                            {item.trend === 'up' ? 'Permintaan Naik' : item.trend === 'down' ? 'Koreksi Stok' : 'Permintaan Normal'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Price Insights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 mb-1">
                  <Building2 className="w-4 h-4" />
                  <span>Pasar Pengolahan (Cold Storage)</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Permintaan udang Size 30-40 untuk pasar ekspor Amerika Utara dan Uni Eropa terpantau tinggi menjelang persiapan libur akhir tahun.
                </p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 mb-1">
                  <Info className="w-4 h-4" />
                  <span>Syarat Standar Penimbangan</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sampling timbang resmi P2UWM menggunakan es balok food-grade perbandingan 1:1, bebas residu antibiotik (Kloramfenikol, Nitrofurans).
                </p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 mb-1">
                  <Calculator className="w-4 h-4" />
                  <span>Advokasi Perlindungan Harga</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Jika pembeli menawarkan harga di bawah batas bawah toleransi P2UWM, petambak dapat melapor ke Posko Advokasi Pasar P2UWM untuk mediasi.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Harvest Calculator */}
        {activeTab === 'kalkulator' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>Simulasi Penjualan Hasil Panen</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Kalkulator Estimasi Pendapatan Panen Tambak
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Hitung proyeksi pendapatan kotor hasil panen berdasarkan size target dan perkiraan tonase udang yang diangkat dari petak tambak.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 uppercase mb-2">
                    Pilih Size Udang Target:
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {prices.map((p) => (
                      <button
                        key={p.size}
                        onClick={() => setSelectedSize(p.size)}
                        className={`py-2 px-2 text-center rounded-xl border text-xs font-semibold transition-all ${
                          selectedSize === p.size
                            ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-teal-400 shadow-md'
                            : 'glass-card text-slate-300 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <div>Size {p.size}</div>
                        <div className="text-[10px] font-mono-numbers opacity-80 mt-0.5">
                          {p.pricePerKg / 1000}k
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-200 mb-1">
                    <span>Perkiraan Biomassa Panen (Kilogram):</span>
                    <span className="font-mono-numbers text-teal-300 font-bold text-sm">{biomassKg.toLocaleString('id-ID')} kg</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="10000"
                    step="100"
                    value={biomassKg}
                    onChange={(e) => setBiomassKg(Number(e.target.value))}
                    className="w-full accent-teal-400 cursor-pointer h-2 bg-white/10 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono-numbers mt-1">
                    <span>200 kg (Parsial)</span>
                    <span>2.500 kg (1 Petak Normal)</span>
                    <span>10.000 kg (Panen Raya Blok)</span>
                  </div>
                </div>

                <div className="p-5 glass-card rounded-2xl border border-white/15 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Harga Acuan P2UWM (Size {selectedSize}):</span>
                    <span className="font-mono-numbers font-semibold text-white">{formatRupiah(selectedPriceObj.pricePerKg)} / kg</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>Total Estimasi Berat Bersih:</span>
                    <span className="font-mono-numbers font-semibold text-white">{biomassKg.toLocaleString('id-ID')} kg ({(biomassKg / 1000).toFixed(1)} Ton)</span>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-teal-300 font-bold">Estimasi Nilai Hasil Panen:</div>
                      <div className="text-[11px] text-slate-400">Sebelum dipotong biaya operasional pakan & benur</div>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-teal-300 font-mono-numbers">
                      {formatRupiah(calculatedTotal)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Tren 7 Hari */}
        {activeTab === 'tren' && (
          <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4 shadow-2xl">
            <div>
              <h3 className="text-base font-bold text-white mb-1">
                Pergerakan Harga Udang 7 Hari Terakhir
              </h3>
              <p className="text-xs text-slate-300">
                Data historis fluktuasi harga acuan dasar tambak Wahyuni Mandira (dalam Ribuan Rupiah/kg)
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono-numbers">
                <thead className="bg-white/[0.04] text-slate-300 font-semibold border-b border-white/10">
                  <tr>
                    <th className="py-2.5 px-3">Tanggal</th>
                    <th className="py-2.5 px-3 text-right">Size 30</th>
                    <th className="py-2.5 px-3 text-right">Size 50</th>
                    <th className="py-2.5 px-3 text-right">Size 70</th>
                    <th className="py-2.5 px-3 text-right">Size 100</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {PRICE_TREND_SERIES.map((pt) => (
                    <tr key={pt.date} className="hover:bg-white/[0.03]">
                      <td className="py-2.5 px-3 font-semibold text-white">{pt.date} 2026</td>
                      <td className="py-2.5 px-3 text-right text-teal-300 font-bold">{formatRupiah(pt.size30)}</td>
                      <td className="py-2.5 px-3 text-right text-slate-200">{formatRupiah(pt.size50)}</td>
                      <td className="py-2.5 px-3 text-right text-slate-300">{formatRupiah(pt.size70)}</td>
                      <td className="py-2.5 px-3 text-right text-slate-400">{formatRupiah(pt.size100)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
