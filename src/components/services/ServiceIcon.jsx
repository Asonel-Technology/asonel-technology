const icons = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </>
  ),
  software: (
    <>
      <path d="M9 8 5 12l4 4M15 8l4 4-4 4" />
      <path d="M13 6l-2 12" />
    </>
  ),
  design: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="5" rx="1" />
      <rect x="13" y="10" width="8" height="11" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
    </>
  ),
  it: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  digital: (
    <>
      <circle cx="6" cy="12" r="2.25" />
      <circle cx="18" cy="7" r="2.25" />
      <circle cx="18" cy="17" r="2.25" />
      <path d="M8.2 11.2 15.8 8M8.2 12.8l7.6 3.2" />
    </>
  ),
  saas: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 12h8M8 15h5" />
    </>
  ),
  mvp: (
    <>
      <path d="M12 3 5 7.5v9L12 21l7-4.5v-9L12 3Z" />
      <path d="M12 12V3M12 12 5 7.5M12 12l7-4.5" />
    </>
  ),
  portal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  customer: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="5" rx="1" />
      <path d="M14 16v5M18 13v8M22 18v3" />
    </>
  ),
  integration: (
    <>
      <circle cx="6" cy="12" r="2.25" />
      <circle cx="18" cy="7" r="2.25" />
      <circle cx="18" cy="17" r="2.25" />
      <path d="M8.2 11.2 15.8 8M8.2 12.8l7.6 3.2" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  qa: (
    <>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M9 20h6M12 14v6" />
    </>
  ),
  team: (
    <>
      <circle cx="8" cy="9" r="2.25" />
      <circle cx="16" cy="9" r="2.25" />
      <path d="M3.5 18.5a4.5 4.5 0 0 1 9 0M11.5 18.5a4.5 4.5 0 0 1 9 0" />
    </>
  ),
};

export default function ServiceIcon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name] ?? icons.software}
    </svg>
  );
}
