import type { Metadata } from "next";
import DashboardContent from "@/components/DashboardContent";

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
          Portfolio & Model Intelligence
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Real-time machine learning analytics and valuation metrics.
        </p>
      </div>

      <DashboardContent />
    </main>
  );
}
