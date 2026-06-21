// components/Navbar.js — Server Component
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream-100/95 backdrop-blur-sm border-b border-cream-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <nav className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="w-8 h-8 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3h10M3 8h7M3 13h4"
                  stroke="#faf8f0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="font-display font-bold text-xl text-ink-700 group-hover:text-forest-600 transition-colors">
              SearchNextEra
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm font-medium text-ink-400 hover:text-forest-600 transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu icon (static — no JS) */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/blog"
              className="font-sans text-sm font-medium text-forest-600 border border-forest-600 px-3 py-1.5 rounded-full"
            >
              Essays
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
