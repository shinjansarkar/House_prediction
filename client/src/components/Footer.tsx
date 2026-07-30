import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant/20 py-8 md:py-stack-lg mt-auto">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 md:gap-base text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
          <div className="font-display-lg text-headline-sm text-primary">EstateIQ</div>
          <div className="font-label-md text-label-md text-on-surface-variant">
            © 2026 EstateIQ. Quiet Luxury in Real Estate.
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <Link
            href="#"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
          >
            AI Ethics
          </Link>
          <Link
            href="#"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
