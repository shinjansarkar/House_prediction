import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - EstateIQ AI",
  description:
    "Real-time AI insights and predictive analytics for your luxury assets.",
};

export default function DashboardPage() {
  return (
    <main className="flex-grow py-10 md:py-16 pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full bg-noise">
      {/* Page Header */}
      <div className="mb-8 md:mb-stack-lg pt-6 md:pt-10">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">
          Portfolio Overview
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Real-time AI insights and predictive analytics for your luxury assets.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-gutter">
        {/* Metric: Total Predictions */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-[16px] p-5 md:p-stack-md shadow-[0px_4px_20px_rgba(45,45,45,0.04)] flex flex-col justify-between group">
          <div className="flex items-center justify-between mb-stack-sm">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              Total Predictions
            </h3>
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">analytics</span>
            </div>
          </div>
          <div>
            <div className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-1">
              1,248
            </div>
            <div className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-sm">
                trending_up
              </span>
              <span className="font-label-sm text-label-sm">
                +12.5% this month
              </span>
            </div>
          </div>
        </div>

        {/* Metric: Model Accuracy */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-[16px] p-5 md:p-stack-md shadow-[0px_4px_20px_rgba(45,45,45,0.04)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-stack-sm">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              Model Accuracy
            </h3>
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">verified</span>
            </div>
          </div>
          <div>
            <div className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-1">
              94.2%
            </div>
            <div className="flex items-center gap-1 text-on-surface-variant">
              <span className="font-label-sm text-label-sm">
                High Confidence Rating
              </span>
            </div>
          </div>
        </div>

        {/* Metric: Active Markets */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-[16px] p-5 md:p-stack-md shadow-[0px_4px_20px_rgba(45,45,45,0.04)] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary-fixed/30 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between mb-stack-sm relative z-10">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
              Active Markets
            </h3>
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
              <span className="material-symbols-outlined">location_city</span>
            </div>
          </div>
          <div className="relative z-10">
            <div className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-1">
              12
            </div>
            <div className="flex gap-2 mt-2">
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">
                NYC
              </span>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">
                London
              </span>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-label-sm">
                Paris
              </span>
            </div>
          </div>
        </div>

        {/* Chart: Price Trajectory */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-[16px] p-5 md:p-stack-md shadow-[0px_4px_20px_rgba(45,45,45,0.04)] flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Price Trajectory Forecast
            </h2>
            <button className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md">
              <span>Last 6 Months</span>
              <span className="material-symbols-outlined text-sm">
                expand_more
              </span>
            </button>
          </div>
          <div className="flex-grow w-full relative h-[220px] sm:h-[240px] flex items-end pt-4">
            {/* Y-Axis Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pb-8 z-0">
              <div className="border-b border-outline-variant/20 w-full h-0" />
              <div className="border-b border-outline-variant/20 w-full h-0" />
              <div className="border-b border-outline-variant/20 w-full h-0" />
              <div className="border-b border-outline-variant/20 w-full h-0" />
            </div>
            {/* Chart SVG */}
            <svg
              className="w-full h-full relative z-10"
              preserveAspectRatio="none"
              viewBox="0 0 800 200"
            >
              <defs>
                <linearGradient
                  id="trendGradient"
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#536350" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#536350" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,150 Q100,140 200,160 T400,100 T600,60 T800,20 L800,200 L0,200 Z"
                fill="url(#trendGradient)"
              />
              <path
                d="M0,150 Q100,140 200,160 T400,100 T600,60 T800,20"
                fill="none"
                stroke="#536350"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
              <path
                d="M0,180 Q150,170 300,150 T550,120 T800,90"
                fill="none"
                stroke="#d4c4b1"
                strokeDasharray="6,6"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
            {/* X-Axis Labels */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-on-surface-variant font-label-sm text-label-sm pt-2">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Chart: Asset Distribution Donut */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-[16px] p-5 md:p-stack-md shadow-[0px_4px_20px_rgba(45,45,45,0.04)] flex flex-col items-center">
          <h2 className="font-headline-sm text-headline-sm text-on-surface w-full text-left mb-6">
            Asset Distribution
          </h2>
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                className="text-surface-container-highest"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="text-primary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="60, 100"
                strokeLinecap="round"
                strokeWidth="4"
              />
              <path
                className="text-secondary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="25, 100"
                strokeDashoffset="-60"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display-lg-mobile text-display-lg-mobile text-on-surface leading-none">
                60%
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                Urban Core
              </span>
            </div>
          </div>
          {/* Legend */}
          <div className="w-full space-y-3">
            {[
              { color: "bg-primary", label: "Urban Core", val: "60%" },
              { color: "bg-secondary", label: "Suburban Luxury", val: "25%" },
              {
                color: "bg-surface-container-highest",
                label: "Coastal/Resort",
                val: "15%",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between font-label-md text-label-md"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-on-surface">{item.label}</span>
                </div>
                <span className="text-on-surface-variant">{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Table: Recent Intelligence */}
        <div className="md:col-span-12 bg-surface-container-lowest rounded-[16px] overflow-hidden shadow-[0px_4px_20px_rgba(45,45,45,0.04)]">
          <div className="p-5 md:p-stack-md flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-outline-variant/20">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Recent Intelligence
            </h2>
            <button className="text-primary font-label-md text-label-md hover:text-surface-tint transition-colors">
              View All
            </button>
          </div>
          <div className="table-responsive">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/20">
                  {[
                    "Property Asset",
                    "AI Valuation",
                    "Confidence",
                    "Status",
                    "",
                  ].map((h, i) => (
                    <th
                      key={i}
                      className={`py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold ${
                        i === 4 ? "text-right" : ""
                      }`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-body-md text-body-md">
                {/* Row 1 */}
                <tr className="border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group">
                  <td className="py-4 px-4 md:px-6 flex items-center gap-4 min-w-[220px] md:min-w-0" data-label="Property Asset">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Luxury modern estate exterior"
                      className="w-12 h-12 rounded-lg object-cover shadow-sm"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5t0SJnpyy9kw0lpfTC1kBmQiyZ3M50lWzT8hSAbp9qaJruQi-1C-gyrQGXMOx4eKzA8oweSWKpBQZPHkddgIr3x_ZycnCpBfdSYNGosJhkFWXDl2N8_ST55tP0xOiCxl3lq2z7JCnvqpVIiF5mPwyVMJOuRysVu0WhK6O5wjdDNgwdKxwx2EXIINT9eL7e4QvV_B5KHWcQ8mMm65DLssYeZUC7sYnQECctAeeWos3UH_SDEfjiQal2mb3QqmpeQOC5Uomm_T65ck"
                    />
                    <div>
                      <div className="font-medium text-on-surface">
                        The Glasshouse Estate
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        Beverly Hills, CA
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-on-surface font-medium whitespace-nowrap" data-label="AI Valuation">
                    $14,250,000
                  </td>
                  <td className="py-4 px-4 md:px-6" data-label="Confidence">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="w-[95%] h-full bg-primary" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        95%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 md:px-6" data-label="Status">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-container/30 text-on-primary-container font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        check_circle
                      </span>{" "}
                      Verified
                    </span>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-right" data-label="Action">
                    <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors group">
                  <td className="py-4 px-4 md:px-6 flex items-center gap-4 min-w-[220px] md:min-w-0" data-label="Property Asset">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Minimalist apartment interior with city view"
                      className="w-12 h-12 rounded-lg object-cover shadow-sm"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd_bTgZDa0em_sm4yH-E1GD84iPE0jgASgUQ_2_yqvY5_jcpDbwgr47gu-IZDM9wG24cqGn5IIEWnlzZzrqZ87umhWzCcRMcTSTpuPmLnh9GbRbSLQElYioblhJCytDVlPlQjQF2g2fre8ILqNtzjtDJejvcO8n8bs4GyvGifmFedoWtpQENSuqK7wMB8vs09e4bdw0s__vcaaIbtrBV2Ky55SutykoTHdcMC0E6XeSL-s9DTSomVf3l7WjWwiCDSr62qH1VyZS50"
                    />
                    <div>
                      <div className="font-medium text-on-surface">
                        Tribeca Penthouse
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant">
                        New York, NY
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-on-surface font-medium whitespace-nowrap" data-label="AI Valuation">
                    $8,900,000
                  </td>
                  <td className="py-4 px-4 md:px-6" data-label="Confidence">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="w-[88%] h-full bg-primary/80" />
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        88%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 md:px-6" data-label="Status">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[14px]">
                        sync
                      </span>{" "}
                      Processing
                    </span>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-right" data-label="Action">
                    <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
