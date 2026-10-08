import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-brand-orange text-brand-brown hover:bg-brand-orange-dark",
  secondary:
    "bg-brand-brown text-white hover:bg-[#3a2610]",
  outline:
    "border border-brand-brown/40 bg-white text-brand-brown hover:border-brand-brown",
};

export default function Button({
  to,
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-semibold transition-colors motion-reduce:transition-none ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
