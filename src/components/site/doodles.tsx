type P = { className?: string };

const base = "h-full w-full";

export function CurtainDoodle({ className }: P) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className ?? base} aria-hidden>
      <path d="M10 18h180" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {[30, 55, 80].map((x, i) => (
        <path
          key={i}
          d={`M${x} 20c-14 40 12 80 -4 120 -6 15 2 34 10 42`}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ))}
      {[120, 145, 170].map((x, i) => (
        <path
          key={i}
          d={`M${x} 20c14 40 -12 80 4 120 6 15 -2 34 -10 42`}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ))}
      <circle cx="100" cy="18" r="4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function WallpaperDoodle({ className }: P) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className ?? base} aria-hidden>
      <rect x="18" y="18" width="164" height="164" rx="6" stroke="currentColor" strokeWidth="2" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <path
            key={`${r}-${c}`}
            d={`M${39 + c * 41} ${58 + r * 41}c-9-14 0-26 10-26s19 12 10 26c9-14 21-6 21 4s-12 17-24 10c6 13-1 24-10 24s-16-11-10-24c-12 7-24 0-24-10s12-18 27-4z`}
            stroke="currentColor"
            strokeWidth="1.2"
            transform={`translate(-20,-38) scale(0.92)`}
          />
        )),
      )}
      <path d="M182 18l-26 26" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function SofaDoodle({ className }: P) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className ?? base} aria-hidden>
      <path
        d="M30 118V70a16 16 0 0116-16h108a16 16 0 0116 16v48"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M22 120a12 12 0 0112-12h132a12 12 0 0112 12v22H22z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M62 108V84h76v24" stroke="currentColor" strokeWidth="1.6" />
      <path d="M40 142v18M160 142v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MattressDoodle({ className }: P) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className ?? base} aria-hidden>
      <rect x="24" y="78" width="152" height="52" rx="18" stroke="currentColor" strokeWidth="2" />
      <path d="M24 104h152" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 7" />
      {[52, 84, 116, 148].map((x) => (
        <circle key={x} cx={x} cy="118" r="2.4" stroke="currentColor" strokeWidth="1.2" />
      ))}
      <path
        d="M36 78V64a10 10 0 0110-10h108a10 10 0 0110 10v14"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M44 130v14M156 130v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
