interface ProgramIllustrationProps {
  programId: string;
}

export function ProgramIllustration({ programId }: ProgramIllustrationProps) {
  switch (programId) {
    case 'kimpalan':
      return (
        <svg viewBox="0 0 320 120" fill="none" className="w-full h-28" aria-hidden="true">
          <rect width="320" height="120" rx="8" fill="#F8FAFC" />
          <path d="M24 94 H296" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Steel I-beam & structural pipe */}
          <rect x="44" y="42" width="110" height="36" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
          <rect x="166" y="42" width="110" height="36" rx="2" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
          {/* Weld seam */}
          <path d="M154 44 Q160 50 166 44 M154 54 Q160 60 166 54 M154 64 Q160 70 166 64 M154 74 Q160 80 166 74" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" />
          {/* Welding torch & arc spark */}
          <path d="M196 14 L164 46" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="50" r="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <path d="M148 38 L153 43 M172 38 L167 43 M160 32 L160 39" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'automotif':
      return (
        <svg viewBox="0 0 320 120" fill="none" className="w-full h-28" aria-hidden="true">
          <rect width="320" height="120" rx="8" fill="#F8FAFC" />
          <path d="M24 94 H296" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Vehicle chassis silhouette */}
          <path
            d="M52 78 L66 52 L112 40 L194 40 L236 56 L266 62 L268 78 Z"
            fill="#EFF6FF"
            stroke="#1E3A8A"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <circle cx="98" cy="80" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <circle cx="98" cy="80" r="6" fill="#CBD5E1" />
          <circle cx="224" cy="80" r="14" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          <circle cx="224" cy="80" r="6" fill="#CBD5E1" />
          {/* Diagnostic waveform */}
          <path d="M126 24 H142 L149 14 L157 32 L165 20 L172 24 H194" stroke="#D97706" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'elektrik':
      return (
        <svg viewBox="0 0 320 120" fill="none" className="w-full h-28" aria-hidden="true">
          <rect width="320" height="120" rx="8" fill="#F8FAFC" />
          {/* Distribution board schematic */}
          <rect x="64" y="20" width="192" height="80" rx="4" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.5" />
          <path d="M84 44 H140 M84 64 H140 M84 84 H140" stroke="#1E3A8A" strokeWidth="1.75" />
          <rect x="148" y="34" width="24" height="52" rx="2" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="1.5" />
          <path d="M172 44 H236 M172 64 H236 M172 84 H236" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Lightning indicator */}
          <path d="M214 34 L204 52 H214 L208 68 L224 48 H213 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );

    case 'penjagaan-orang-tua':
      return (
        <svg viewBox="0 0 320 120" fill="none" className="w-full h-28" aria-hidden="true">
          <rect width="320" height="120" rx="8" fill="#F8FAFC" />
          {/* Vital monitor & care cross */}
          <rect x="52" y="22" width="216" height="76" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M68 62 H112 L124 40 L136 78 L148 50 L158 62 H200" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Medical cross */}
          <rect x="216" y="42" width="32" height="32" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <path d="M232 49 V67 M223 58 H241" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'pendidikan-awal-kanak-kanak':
      return (
        <svg viewBox="0 0 320 120" fill="none" className="w-full h-28" aria-hidden="true">
          <rect width="320" height="120" rx="8" fill="#F8FAFC" />
          {/* Open book & geometric learning blocks */}
          <path
            d="M72 88 V36 C72 32 100 30 124 38 V90 C100 84 72 88 72 88 Z"
            fill="#EFF6FF"
            stroke="#1E3A8A"
            strokeWidth="1.5"
          />
          <path
            d="M176 88 V36 C176 32 148 30 124 38 V90 C148 84 176 88 176 88 Z"
            fill="#FFFFFF"
            stroke="#1E3A8A"
            strokeWidth="1.5"
          />
          {/* Tactile blocks */}
          <rect x="200" y="58" width="28" height="28" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <polygon points="244,32 260,58 228,58" fill="#DBEAFE" stroke="#1E3A8A" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="244" cy="76" r="12" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.5" />
        </svg>
      );

    case 'seni-kulinari':
    default:
      return (
        <svg viewBox="0 0 320 120" fill="none" className="w-full h-28" aria-hidden="true">
          <rect width="320" height="120" rx="8" fill="#F8FAFC" />
          <path d="M40 94 H280" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Culinary cloche & chef toque silhouette */}
          <path
            d="M106 86 C106 54 130 34 160 34 C190 34 214 54 214 86 Z"
            fill="#EFF6FF"
            stroke="#1E3A8A"
            strokeWidth="1.75"
          />
          <circle cx="160" cy="27" r="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <path d="M92 86 H228" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          {/* Chef knife & whisk minimal line */}
          <path d="M62 40 V86 M56 40 V54 C56 58 68 58 68 54 V40" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M254 36 V86 M254 36 C262 42 262 58 254 64" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}
