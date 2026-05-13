import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EstateIQ - AI Real Estate Prediction",
  description:
    "Smart House Price Prediction with AI. Experience quiet luxury in real estate decision-making.",
};

export default function HomePage() {
  return (
    <main className="flex-grow px-margin-mobile md:px-margin-desktop py-10 md:py-16 max-w-container-max mx-auto w-full">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-gutter items-center min-h-0 lg:min-h-[620px] mb-16 md:mb-24 pt-6 md:pt-10">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-stack-md z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-surface-container-low px-4 py-1.5 rounded-full w-fit border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-[16px]">
              psychology
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              AI Powered Insights
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight">
            Smart House Price Prediction{" "}
            <span className="text-primary italic">with AI</span>
          </h1>

          {/* Body */}
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Experience quiet luxury in real estate decision-making. Our serene,
            intelligent models provide hyper-accurate valuations based on
            millions of data points.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="/predict"
              className="bg-primary text-on-primary font-label-md text-label-md px-8 py-3.5 rounded-full hover:scale-[1.02] transition-transform duration-300 shadow-[0px_4px_20px_rgba(83,99,80,0.15)] flex justify-center items-center gap-2"
            >
              Start Prediction
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            <Link
              href="/dashboard"
              className="bg-surface-container-lowest text-on-surface font-label-md text-label-md px-8 py-3.5 rounded-full border border-outline-variant/30 hover:bg-surface-container-low transition-colors duration-300 shadow-sm flex justify-center items-center gap-2"
            >
              Explore Dashboard
            </Link>
          </div>
        </div>

        {/* Right Column – Hero Image */}
        <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] lg:h-[650px] w-full rounded-2xl overflow-hidden bg-surface-container shadow-[0px_8px_30px_rgba(45,45,45,0.06)] group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Luxury Home"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfLCE8J2pPKv85Hik2Ru9m2VH0yxB2gofj4czyFY1Z3pElmJ2NIOQvDPNNzVd86nCTMFaAwccG_O_1CBAemcRhPgV4IXVd_Y0fILubvQiVSTiFbVNlDuIBD68KAyt-HXx3jiEAjP00GamcPKGEOafvd6Bb9i-wbo6OLWdHLzh7iQt81GMamtyd8-F8eioqrxkAW0vJ9dsNfUlWR6sFoVNWmISPAT7oVhNalMJQ7eTr7pfRGwUpaKfs6xJLM4rHlfz3_rQNQHZJU0c"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent" />

          {/* Floating Card 1 */}
          <div className="absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-auto bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl shadow-[0px_4px_20px_rgba(45,45,45,0.08)] border border-white/20 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">
                  trending_up
                </span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  Predicted Value
                </p>
                <p className="font-headline-sm text-headline-sm text-on-surface">
                  $2.45M
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-4 right-4 left-4 sm:bottom-8 sm:right-8 sm:left-auto bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl shadow-[0px_4px_20px_rgba(45,45,45,0.08)] border border-white/20 animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check_circle
                </span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  AI Confidence
                </p>
                <p className="font-body-md text-body-md font-semibold text-primary">
                  98.2% Accuracy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-12 md:py-16 mb-16 md:mb-24">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
            Serene Intelligence
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our models process complexity so you experience simplicity. Discover
            the features that power quiet luxury real estate decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[280px]">
          {/* Bento Item 1 – spans 2 cols */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant/20 shadow-[0px_4px_20px_rgba(45,45,45,0.03)] flex flex-col justify-between relative overflow-hidden group hover:shadow-[0px_8px_30px_rgba(45,45,45,0.06)] transition-all duration-500 min-h-[240px] md:min-h-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-150" />
            <div className="z-10 max-w-sm">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Hyper-Local Market Trends
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Real-time analysis of neighborhood dynamics, school ratings, and
                micro-economic shifts.
              </p>
            </div>
          </div>

          {/* Bento Item 2 */}
          <div className="bg-surface-container rounded-2xl p-6 md:p-8 border border-outline-variant/10 shadow-sm flex flex-col justify-between hover:bg-surface-container-high transition-colors duration-300 min-h-[220px] md:min-h-0">
            <div>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-secondary">
                  update
                </span>
              </div>
              <h3
                className="font-headline-sm text-headline-sm text-on-surface mb-2"
                style={{ fontSize: "20px" }}
              >
                Instant Valuation
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Upload a property profile and receive a comprehensive appraisal
                in seconds.
              </p>
            </div>
          </div>

          {/* Bento Item 3 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 border border-outline-variant/20 shadow-[0px_4px_20px_rgba(45,45,45,0.03)] flex flex-col justify-between group overflow-hidden relative min-h-[220px] md:min-h-0">
            <div className="z-10">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">
                  architecture
                </span>
              </div>
              <h3
                className="font-headline-sm text-headline-sm text-on-surface mb-2"
                style={{ fontSize: "20px" }}
              >
                Property Potential
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                AI-driven remodeling ROI projections.
              </p>
            </div>
          </div>

          {/* Bento Item 4 – spans 2 cols with image */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(45,45,45,0.03)] group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Blueprint to Reality"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zvZ1_wcYIFUNPqWWOQOnKpHRh3IEnXU6PXaGPghz8DtvBof0X7zU6BCoVK65eqz6q8qAFhign426fRgfDQc15gOvAVBjPTx40YKnU6qKpsuVB9Hl4oHQaSwodxgL1ZQj5SdbkeyMRLYm2C287aZrk2wzVcT6JeCrYhyzhvCB9QaL_fN42KJiLHwBWMrAmu56qyIYtnJdeJDqu2liShmsTiOwfywCacwrCwBanTiqi2brmtOcqKLNNqJjpN9sNIyZKC_FIzdMr-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/90 to-surface/40 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 max-w-sm">
                From Blueprint to Reality
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                Visualize potential with our generative AI space-planning tools.
              </p>
              <button className="mt-6 bg-white text-on-surface font-label-md text-label-md px-6 py-2 rounded-full w-fit shadow-sm border border-outline-variant/20 hover:text-primary transition-colors">
                Try Visualizer
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-10 md:p-16 border border-outline-variant/20 shadow-[0px_4px_20px_rgba(45,45,45,0.03)]">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
              Ready to Transform Your Real Estate Decision?
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
              Get instant AI-powered valuations and market insights for any property in seconds.
            </p>
            <Link
              href="/predict"
              className="bg-primary text-on-primary font-label-md text-label-md px-10 py-4 rounded-full hover:scale-[1.02] hover:shadow-[0px_8px_30px_rgba(83,99,80,0.25)] transition-all duration-300 shadow-[0px_4px_20px_rgba(83,99,80,0.15)] inline-flex justify-center items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
              Start Your Prediction Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

