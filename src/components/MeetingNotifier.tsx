import React, { useState } from 'react';
import { UPCOMING_MEETINGS } from '../data/p2uwmData';
import { MeetingAgenda } from '../types';
import { Calendar, Clock, MapPin, Send, CheckCircle2, BellRing, Users, Download } from 'lucide-react';

export const MeetingNotifier: React.FC = () => {
  const [meetings] = useState<MeetingAgenda[]>(UPCOMING_MEETINGS);
  const [selectedMeeting, setSelectedMeeting] = useState<MeetingAgenda>(UPCOMING_MEETINGS[0]);
  const [isBlasting, setIsBlasting] = useState(false);
  const [blastSuccess, setBlastSuccess] = useState(false);
  const [rsvpCount, setRsvpCount] = useState(184);
  const [hasRsvpd, setHasRsvpd] = useState(false);

  const handleTriggerNotificationBlast = () => {
    setIsBlasting(true);
    setBlastSuccess(false);

    setTimeout(() => {
      setIsBlasting(false);
      setBlastSuccess(true);
      setTimeout(() => setBlastSuccess(false), 5000);
    }, 1500);
  };

  const handleRsvp = () => {
    if (!hasRsvpd) {
      setRsvpCount(rsvpCount + 1);
      setHasRsvpd(true);
    }
  };

  const handleDownloadCalendar = (m: MeetingAgenda) => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//P2UWM//ID\nBEGIN:VEVENT\nSUMMARY:${m.title}\nDESCRIPTION:${m.description}\nLOCATION:${m.location}\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Agenda_P2UWM_${m.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 sm:p-6 text-white space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-sky-500/20">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
            Agenda Musyawarah Bulanan
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Notifikasi Agenda Rapat Rutin Bulanan
          </h2>
          <p className="text-xs text-sky-200/80 mt-1 max-w-2xl">
            Sistem otomatisasi jadwal rapat pleno petambak, konsolidasi korwil, dan pengingat musyawarah tata air di seluruh blok Wahyuni Mandira.
          </p>
        </div>

        <button
          onClick={handleTriggerNotificationBlast}
          disabled={isBlasting}
          className="px-4 py-2.5 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2 whitespace-nowrap border border-sky-400/40 hover:scale-[1.02]"
        >
          <BellRing className={`w-4 h-4 ${isBlasting ? 'animate-spin' : ''}`} />
          <span>{isBlasting ? 'Mengirim Blast...' : 'Kirim Blast WhatsApp & SMS'}</span>
        </button>
      </div>

      {/* Blast Success Alert */}
      {blastSuccess && (
        <div className="p-4 bg-sky-500/20 border border-sky-400/40 text-sky-100 rounded-xl flex items-center gap-3 text-xs shadow-lg">
          <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
          <div>
            <span className="font-bold">Notifikasi Berhasil Dikirimkan!</span> Sebanyak{' '}
            <strong className="text-white">842 pesan WhatsApp gateway & SMS resmi</strong> telah diteruskan secara otomatis ke seluruh kontak petambak dan pengurus blok.
          </div>
        </div>
      )}

      {/* Meeting Spotlight Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-sky-500/20 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold text-sky-300 bg-sky-500/20 border border-sky-400/30 px-2.5 py-0.5 rounded-full">
              {selectedMeeting.type}
            </span>
            <span className="text-xs text-sky-200/60 font-mono-numbers">
              ID Rapat: {selectedMeeting.id}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
            {selectedMeeting.title}
          </h3>

          <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed mb-6">
            {selectedMeeting.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-blue-950/40 border border-sky-500/20 mb-6 text-xs">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sky-100">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span className="font-semibold">{selectedMeeting.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sky-200/80 font-mono-numbers">
                <Clock className="w-4 h-4 text-sky-400/70" />
                <span>{selectedMeeting.time}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sky-100">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{selectedMeeting.location}</span>
              </div>
              <div className="text-sky-200/70 text-[11px]">
                Dipimpin: <strong className="text-white">{selectedMeeting.leadBy}</strong>
              </div>
            </div>
          </div>

          {/* Agenda Items */}
          <div className="space-y-2.5 mb-6">
            <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider">
              Susunan Agenda Rapat:
            </h4>
            <div className="space-y-1.5">
              {selectedMeeting.agendaItems.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-blue-950/30 border border-sky-500/15 text-xs text-sky-100/90 flex items-start gap-2">
                  <span className="font-bold text-sky-400 font-mono-numbers">{idx + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance & RSVP action */}
          <div className="pt-4 border-t border-sky-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-sky-200">
              <Users className="w-4 h-4 text-sky-400" />
              <span>
                Konfirmasi Kehadiran: <strong className="text-white font-mono-numbers">{rsvpCount} Petambak</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDownloadCalendar(selectedMeeting)}
                className="px-3 py-2 glass-pill hover:bg-sky-500/20 text-sky-200 text-xs font-medium rounded-xl flex items-center gap-1.5 transition-all border border-sky-400/30"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Simpan (.ics)</span>
              </button>
              <button
                onClick={handleRsvp}
                disabled={hasRsvpd}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  hasRsvpd
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                    : 'bg-gradient-to-r from-blue-600 to-sky-600 text-white hover:scale-[1.02] border border-sky-400/40 shadow-md'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{hasRsvpd ? 'Terkonfirmasi Hadir' : 'Konfirmasi Hadir (RSVP)'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Schedule List */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-sky-300 uppercase tracking-wider">
            Agenda Lainnya:
          </h4>
          {meetings.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelectedMeeting(m)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all shadow-md ${
                selectedMeeting.id === m.id
                  ? 'bg-blue-600/30 border-sky-400 shadow-sky-500/20'
                  : 'glass-card border-sky-500/20 hover:border-sky-400/40'
              }`}
            >
              <div className="text-[11px] font-semibold text-sky-400 mb-1">
                {m.type}
              </div>
              <h5 className="font-bold text-white text-xs leading-snug mb-2">
                {m.title}
              </h5>
              <div className="text-[11px] text-sky-200/70 space-y-0.5 font-mono-numbers">
                <div>📅 {m.date}</div>
                <div>⏰ {m.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
