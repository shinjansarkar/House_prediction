import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - EstateIQ",
  description: "Get in touch with the EstateIQ team.",
};

export default function ContactPage() {
  return (
    <main className="flex-grow px-margin-mobile md:px-margin-desktop py-10 md:py-16 max-w-container-max mx-auto w-full flex flex-col items-center justify-center">
      <div className="text-center mb-10 md:mb-stack-lg max-w-2xl mx-auto pt-6 md:pt-10">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-sm tracking-tight">
          Contact Us
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Have questions? Our team is here to help you navigate the quiet luxury
          of AI-powered real estate.
        </p>
      </div>

      <div className="w-full max-w-xl bg-surface-container-lowest rounded-[16px] p-6 md:p-8 lg:p-10 shadow-[0px_4px_20px_rgba(45,45,45,0.04)] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <form className="flex flex-col gap-stack-md relative z-10">
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g., Arjun Sharma"
              className="w-full bg-surface-container px-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-300"
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g., arjun@example.com"
              className="w-full bg-surface-container px-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-300"
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us how we can help..."
              className="w-full bg-surface-container px-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-300 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-sm flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">send</span>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
