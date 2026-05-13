'use client';

import { useState } from 'react';

export default function PredictPage() {
  const [formData, setFormData] = useState({
    location: '',
    areaType: 'Super built-up Area',
    availability: 'Ready to Move',
    totalSqft: '',
    society: '',
    bhk: '',
    bath: '',
    balcony: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prediction logic to be connected to backend
  };

  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" />

      <main className="flex-grow px-margin-mobile md:px-margin-desktop py-10 md:py-16 w-full max-w-container-max mx-auto flex flex-col items-center justify-center relative z-10">
        {/* Page Header */}
        <div className="text-center mb-10 md:mb-stack-lg max-w-2xl mx-auto pt-6 md:pt-10">
          <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface mb-stack-sm tracking-tight">
            AI Price Estimation
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Enter property details to receive an instant, highly accurate market
            valuation powered by our quiet luxury AI.
          </p>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-gutter items-start">
          {/* Prediction Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-[16px] p-6 md:p-8 lg:p-10 shadow-[0px_4px_20px_rgba(45,45,45,0.04)] relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-stack-md relative z-10"
            >
              {/* Location */}
              <div className="col-span-1 md:col-span-2">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">
                  Location
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                    location_on
                  </span>
                  <input
                    type="text"
                    className="w-full bg-surface-container pl-12 pr-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-300"
                    placeholder="e.g., Whitefield, Bangalore"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Area Type */}
              <div className="col-span-1">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">
                  Area Type
                </label>
                <select
                  className="w-full bg-surface-container px-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface transition-all duration-300 appearance-none"
                  value={formData.areaType}
                  onChange={(e) =>
                    setFormData({ ...formData, areaType: e.target.value })
                  }
                >
                  <option>Super built-up Area</option>
                  <option>Built-up Area</option>
                  <option>Carpet Area</option>
                  <option>Plot Area</option>
                </select>
              </div>

              {/* Availability */}
              <div className="col-span-1">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">
                  Availability
                </label>
                <select
                  className="w-full bg-surface-container px-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface transition-all duration-300 appearance-none"
                  value={formData.availability}
                  onChange={(e) =>
                    setFormData({ ...formData, availability: e.target.value })
                  }
                >
                  <option>Ready to Move</option>
                  <option>Under Construction</option>
                </select>
              </div>

              {/* Total Sqft */}
              <div className="col-span-1">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">
                  Total Sqft
                </label>
                <input
                  type="number"
                  className="w-full bg-surface-container px-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-300"
                  placeholder="e.g., 1500"
                  value={formData.totalSqft}
                  onChange={(e) =>
                    setFormData({ ...formData, totalSqft: e.target.value })
                  }
                />
              </div>

              {/* Society */}
              <div className="col-span-1">
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">
                  Society
                </label>
                <input
                  type="text"
                  className="w-full bg-surface-container px-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface placeholder:text-outline transition-all duration-300"
                  placeholder="e.g., Prestige Shantiniketan"
                  value={formData.society}
                  onChange={(e) =>
                    setFormData({ ...formData, society: e.target.value })
                  }
                />
              </div>

              {/* BHK / Bath / Balcony */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-sm col-span-1 md:col-span-2">
                {[
                  {
                    key: 'bhk' as const,
                    label: 'BHK',
                    placeholder: '2',
                    min: 1,
                    max: 10,
                  },
                  {
                    key: 'bath' as const,
                    label: 'Bath',
                    placeholder: '2',
                    min: 1,
                    max: 10,
                  },
                  {
                    key: 'balcony' as const,
                    label: 'Balcony',
                    placeholder: '1',
                    min: 0,
                    max: 10,
                  },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">
                      {field.label}
                    </label>
                    <input
                      type="number"
                      min={field.min}
                      max={field.max}
                      className="w-full bg-surface-container px-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md text-on-surface placeholder:text-outline text-center transition-all duration-300"
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field.key]: e.target.value })
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Submit */}
              <div className="col-span-1 md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-sm flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">auto_awesome</span>
                  Generate Prediction
                </button>
              </div>
            </form>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-surface-container-lowest rounded-[16px] p-6 md:p-8 shadow-[0px_4px_20px_rgba(45,45,45,0.04)] border border-outline-variant/10 flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-fixed/20 rounded-bl-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">
                analytics
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Market Valuation
              </h3>
            </div>

            <div className="flex-grow flex flex-col justify-center py-8">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
                Estimated Price
              </p>
              <div className="flex items-end gap-2 mb-4">
                <span className="font-display-lg text-display-lg text-primary tracking-tight">
                  ₹ 1.45
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface-variant mb-2">
                  Cr
                </span>
              </div>
              <div className="inline-flex items-center gap-1 bg-surface-container px-3 py-1.5 rounded-full w-fit mb-8">
                <span className="material-symbols-outlined text-primary text-[16px]">
                  check_circle
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  94% Confidence Score
                </span>
              </div>

              <div className="space-y-4">
                <div className="h-px w-full bg-outline-variant/20" />
                <div className="flex justify-between items-center">
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Price per sqft
                  </span>
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    ₹ 9,666
                  </span>
                </div>
                <div className="h-px w-full bg-outline-variant/20" />
                <div className="flex justify-between items-center">
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Market Trend
                  </span>
                  <span className="flex items-center text-primary font-medium font-body-md text-body-md">
                    +4.2%{' '}
                    <span className="material-symbols-outlined text-[18px] ml-1">
                      trending_up
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-6">
              <p className="font-label-sm text-label-sm text-outline text-center">
                Based on EstateIQ AI analysis of 10,000+ similar local listings.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
