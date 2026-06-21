import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const sections = [
    {
      label: "Navigate",
      links: [
        { href: "/", text: "Home" },
        { href: "/blog", text: "Blogs" },
        { href: "/contact", text: "Contact" },
      ],
    },
  ];

  return (
    <footer className="bg-forest-800 text-cream-200 mt-24">
      <div className="container mx-auto px-6 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand block */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl font-bold text-cream-100">
                SearchNextEra
              </span>
            </Link>
            <p className="font-body text-sm text-cream-300 leading-relaxed max-w-xs">
              Your go-to destination for digital marketing insights, SEO
              strategies, content marketing tips, social media trends, and
              online business growth. We share practical guides, industry
              updates, and actionable techniques to help marketers, creators,
              and businesses grow online.
            </p>
            {/* Decorative rule */}
            <div className="mt-6 h-px w-16 bg-forest-500" />
          </div>

          {/* Link sections */}
          {sections.map((section) => (
            <div key={section.label}>
              <h4 className="font-sans text-xs uppercase tracking-widest font-600 text-forest-400 mb-4">
                {section.label}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-cream-300 hover:text-cream-100 transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-forest-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-forest-400">
            © {year} SearchNextEra. All rights reserved.
          </p>
          <p className="font-sans text-xs text-forest-400 italic">
            Written slowly. Read at your own pace.
          </p>
        </div>
      </div>
    </footer>
  );
}
