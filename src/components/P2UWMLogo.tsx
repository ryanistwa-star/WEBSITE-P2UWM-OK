import React from 'react';

interface P2UWMLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const P2UWMLogo: React.FC<P2UWMLogoProps> = ({ 
  className = "w-10 h-10", 
  size,
  showText = false 
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 400 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full shrink-0 drop-shadow-[0_4px_12px_rgba(13,148,136,0.25)]"
        style={{ width: size, height: size }}
      >
        {/* Outer White Background Card with subtle shadow */}
        <rect x="10" y="10" width="380" height="340" rx="8" fill="#FFFFFF" />
        <rect x="10" y="10" width="380" height="340" rx="8" stroke="#1E293B" strokeWidth="9" />

        {/* 1. Timbangan Keadilan (Scale of Justice in Black) */}
        {/* Central Vertical Post */}
        <rect x="194" y="32" width="12" height="110" fill="#1E293B" rx="2" />
        {/* Top Horizontal Beam */}
        <rect x="70" y="32" width="260" height="10" fill="#1E293B" rx="3" />

        {/* Left Scale: Hanging Strings & Pan */}
        <line x1="102" y1="42" x2="80" y2="92" stroke="#1E293B" strokeWidth="4" />
        <line x1="102" y1="42" x2="124" y2="92" stroke="#1E293B" strokeWidth="4" />
        <path d="M72 94 C72 120, 132 120, 132 94 Z" fill="#1E293B" />

        {/* Right Scale: Hanging Strings & Pan */}
        <line x1="298" y1="42" x2="276" y2="92" stroke="#1E293B" strokeWidth="4" />
        <line x1="298" y1="42" x2="320" y2="92" stroke="#1E293B" strokeWidth="4" />
        <path d="M268 94 C268 120, 328 120, 328 94 Z" fill="#1E293B" />

        {/* 2. Central Green Rectangle (Bidang Hijau) */}
        <rect x="62" y="122" width="276" height="154" fill="#0D8044" rx="4" />

        {/* 3. Stylized White Shrimp (Udang Vaname Putih) */}
        <g transform="translate(18, 12)">
          {/* Antennas / Sungut */}
          <path d="M90 120 L270 120" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <path d="M80 148 L170 148" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

          {/* Rostrum & Head */}
          <path d="M68 152 L120 120 L160 162 L110 180 Z" fill="#FFFFFF" />

          {/* Eye nodes */}
          <circle cx="120" cy="172" r="7" stroke="#0D8044" strokeWidth="4" fill="#FFFFFF" />
          <line x1="134" y1="184" x2="124" y2="175" stroke="#FFFFFF" strokeWidth="4" />
          <circle cx="140" cy="190" r="7" stroke="#0D8044" strokeWidth="4" fill="#FFFFFF" />
          <line x1="154" y1="200" x2="144" y2="192" stroke="#FFFFFF" strokeWidth="4" />

          {/* Body Carapace (Badan & Punggung) */}
          <path d="M125 152 Q230 152 240 185 L240 236 Q190 238 150 205 Z" fill="#FFFFFF" />

          {/* Abdominal Fan Tail (Kipas Ekor & Segmen) */}
          {/* Fan Segments radiating */}
          <path d="M240 210 C298 210, 310 240, 275 285 L240 210 Z" fill="#FFFFFF" />
          <path d="M240 210 L300 245" stroke="#0D8044" strokeWidth="3" />
          <path d="M240 210 L288 268" stroke="#0D8044" strokeWidth="3" />
          <path d="M240 210 L265 282" stroke="#0D8044" strokeWidth="3" />

          {/* Pleopods / Kaki Renang */}
          <rect x="175" y="215" width="28" height="12" fill="#FFFFFF" transform="rotate(18, 175, 215)" />
          <rect x="175" y="235" width="30" height="12" fill="#FFFFFF" transform="rotate(18, 175, 235)" />
        </g>

        {/* 4. Left Wreath: Kapas (Cotton Pods & Sepals) */}
        <g>
          {/* Cotton bolls with green calyx and white fluff */}
          {[
            { cx: 80, cy: 125, r: 10 },
            { cx: 62, cy: 145, r: 11 },
            { cx: 50, cy: 170, r: 12 },
            { cx: 44, cy: 200, r: 13 },
            { cx: 48, cy: 232, r: 13 },
            { cx: 62, cy: 262, r: 12 },
            { cx: 85, cy: 288, r: 12 },
            { cx: 115, cy: 308, r: 11 },
            { cx: 150, cy: 318, r: 10 }
          ].map((c, i) => (
            <g key={i}>
              <path
                d={`M${c.cx - c.r} ${c.cy} Q${c.cx} ${c.cy + c.r * 1.5} ${c.cx + c.r} ${c.cy} Z`}
                fill="#2E7D32"
              />
              <circle cx={c.cx} cy={c.cy - 3} r={c.r * 0.9} fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
              <path
                d={`M${c.cx - c.r * 0.7} ${c.cy} Q${c.cx} ${c.cy - c.r} ${c.cx + c.r * 0.7} ${c.cy}`}
                fill="#FFFFFF"
              />
            </g>
          ))}
        </g>

        {/* 5. Right Wreath: Padi (Golden Yellow Rice Ear) */}
        <g>
          {[
            { cx: 352, cy: 125 },
            { cx: 362, cy: 145 },
            { cx: 368, cy: 170 },
            { cx: 368, cy: 198 },
            { cx: 360, cy: 226 },
            { cx: 346, cy: 254 },
            { cx: 324, cy: 280 },
            { cx: 295, cy: 304 },
            { cx: 260, cy: 318 }
          ].map((p, i) => (
            <g key={i}>
              {/* Rice grain kernel left and right */}
              <ellipse cx={p.cx - 6} cy={p.cy} rx="8" ry="13" transform={`rotate(${30 - i * 6}, ${p.cx - 6}, ${p.cy})`} fill="#EAB308" stroke="#CA8A04" strokeWidth="1.5" />
              <ellipse cx={p.cx + 6} cy={p.cy} rx="8" ry="13" transform={`rotate(${-30 + i * 6}, ${p.cx + 6}, ${p.cy})`} fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
              <line x1={p.cx} y1={p.cy - 12} x2={p.cx} y2={p.cy + 12} stroke="#A16207" strokeWidth="2" />
            </g>
          ))}
        </g>

        {/* 6. Bottom Binding Ribbon (Pita Pengikat Padi & Kapas) */}
        <path d="M140 326 Q200 340 260 326" stroke="#EAB308" strokeWidth="7" strokeLinecap="round" />
        <path d="M185 328 L170 348 L195 340 L215 352 L202 328 Z" fill="#CA8A04" />
      </svg>

      {showText && (
        <div className="leading-tight">
          <div className="font-extrabold text-white text-base tracking-tight font-sans">
            P2UWM
          </div>
          <div className="text-[11px] text-teal-300 font-medium tracking-wide">
            Wahyuni Mandira
          </div>
        </div>
      )}
    </div>
  );
};
