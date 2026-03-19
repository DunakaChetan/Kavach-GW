import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-0 mb-3">
              <Image src="/Kavach-Logo.png" alt="Kavach" width={200} height={80} style={{ width: "auto", height: "64px" }} />
              <span className="text-2xl font-extrabold tracking-tight text-text-primary -ml-1">Kavach</span>
            </div>
            <p className="text-sm text-text-muted max-w-sm leading-relaxed">
              AI-powered parametric income protection for India&apos;s gig delivery
              workers. Automatic payouts when disruptions strike.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-primary mb-3 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2">
              {["How It Works", "Pricing", "Coverage", "API Docs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-text-muted hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-primary mb-3 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-text-muted hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">© 2026 Kavach. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Security"].map((item) => (
              <Link key={item} href="#" className="text-xs text-text-muted hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
