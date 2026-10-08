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
