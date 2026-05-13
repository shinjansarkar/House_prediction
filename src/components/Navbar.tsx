'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/predict', label: 'Predict' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-outline-variant/20 bg-white/80 backdrop-blur-xl shadow-[0px_4px_20px_rgba(45,45,45,0.04)]">
        <div className="mx-auto flex w-full max-w-container-max items-center justify-between gap-4 px-margin-mobile py-4 md:px-margin-desktop">
          <Link href="/" className="font-display-lg-mobile text-headline-sm text-primary tracking-tight hover:text-primary/80 transition-colors hover:drop-shadow-sm">
            EstateIQ
          </Link>

          <nav className="hidden md:flex items-center gap-8 rounded-full bg-surface-container-low/50 hover:bg-surface-container-low/80 px-6 py-2 border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? 'text-primary font-semibold border-b-2 border-primary pb-1 font-body-md text-body-md hover:scale-105 hover:text-primary/80 transition-all duration-300 hover:drop-shadow-sm'
                      : 'text-on-surface-variant font-medium font-body-md text-body-md hover:scale-105 transition-all duration-300 hover:text-primary hover:drop-shadow-sm'
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-low text-primary shadow-sm hover:shadow-md hover:bg-surface-container-low/80 transition-all duration-300"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-outline-variant/20 bg-white/95 backdrop-blur-xl px-margin-mobile py-5 shadow-lg animate-slide-in">
            <div className="mx-auto flex w-full max-w-container-max flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={
                      isActive
                        ? 'text-primary font-semibold font-body-md text-body-md border-l-2 border-primary pl-3 py-2 bg-surface-container-low/30 rounded-r-md shadow-sm'
                        : 'text-on-surface-variant font-medium font-body-md text-body-md hover:text-primary hover:bg-surface-container-low/50 hover:pl-4 transition-all duration-300 py-2 rounded-r-md pl-3 hover:shadow-sm'
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
