const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export const LinkedInIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21H9z" />
  </svg>
);

export const MailIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const WhatsAppIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.33A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.02.79.8-2.95-.2-.31A8.2 8.2 0 1 1 12 20.2zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.09-.38-.12-.55.12s-.63.8-.77.96-.28.19-.53.06a6.7 6.7 0 0 1-1.97-1.22 7.4 7.4 0 0 1-1.36-1.7c-.14-.24 0-.37.11-.5l.37-.43c.12-.14.16-.24.25-.4a.45.45 0 0 0-.02-.43c-.06-.13-.55-1.34-.76-1.83-.2-.47-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.05 4.77 4.77 0 0 0 1 2.52 10.9 10.9 0 0 0 4.18 3.7c.58.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.18s-.22-.18-.47-.3z" />
  </svg>
);

export const PinIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const DownloadIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
  </svg>
);

export const ArrowIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden>
    <path d="M5 12h14m0 0-5-5m5 5-5 5" />
  </svg>
);

export const stepIcons = [
  (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={p.className} {...base} aria-hidden>
      <circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5" />
    </svg>
  ),
  (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={p.className} {...base} aria-hidden>
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z" /><path d="M9 4v14M15 6v14" />
    </svg>
  ),
  (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={p.className} {...base} aria-hidden>
      <path d="M14.7 6.3a4 4 0 0 1 5 5L14 17l-3 3-4-4 3-3z" /><path d="m5 19 2-2" />
    </svg>
  ),
  (p: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={p.className} {...base} aria-hidden>
      <path d="M16 20v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="8" r="3.5" /><path d="m19 11 1.5 1.5L23 10" />
    </svg>
  ),
];
