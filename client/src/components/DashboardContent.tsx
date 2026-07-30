'use client';

import { useEffect, useState } from 'react';

interface ModelResults {
  [modelName: string]: {
    mae: number;
    r2: number;
  };
}

interface ModelInfo {
  best_model: string;
  best_r2: number;
  all_results: ModelResults;
  locations: string[];
  area_types: string[];
  availabilities: string[];
}

interface PropertySample {
  location: string;
  area_type: string;
  availability: string;
  total_sqft: number;
  society: string;
  bhk: string;
  bath: number | null;
  balcony: number | null;
  price_lakhs: number;
  price_per_sqft: number;
}

export default function DashboardContent() {
  const [info, setInfo] = useState<ModelInfo | null>(null);
  const [properties, setProperties] = useState<PropertySample[]>([]);
  const [totalRecords, setTotalRecords] = useState<number>(13320);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch('/api/model-info').then((res) => res.json()),
      fetch('/api/sample-properties').then((res) => res.json()),
    ])
      .then(([infoData, propsData]) => {
        if (infoData && !infoData.error) {
          setInfo(infoData);
        }
        if (propsData && propsData.properties) {
          setProperties(propsData.properties);
          setTotalRecords(propsData.total_dataset_records || 13320);
        }
      })
      .catch((err) => {
        setError(err.message || 'Failed to connect to backend model service');
      })
      .finally(() => setLoading(false));
  }, []);

  const formatValuation = (lakhs: number) => {
    if (lakhs >= 100) {
      return `₹ ${(lakhs / 100).toFixed(2)} Cr`;
    }
    return `₹ ${lakhs.toFixed(2)} Lakhs`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-gutter">
      {/* Metric 1: Active Model */}
      <div className="md:col-span-4 bg-surface-container-lowest rounded-[16px] p-5 md:p-stack-md shadow-[0px_4px_20px_rgba(45,45,45,0.04)] flex flex-col justify-between group">
        <div className="flex items-center justify-between mb-stack-sm">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            Active Engine
          </h3>
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined">psychology</span>
          </div>
        </div>
        <div>
          <div className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-1 truncate">
            {loading ? '...' : info?.best_model || 'Random Forest'}
          </div>
          <div className="flex items-center gap-1 text-primary">
            <span className="material-symbols-outlined text-sm">
              verified
            </span>
            <span className="font-label-sm text-label-sm">
              {info ? `${(info.best_r2 * 100).toFixed(1)}% R² Accuracy` : 'Model Active'}
            </span>
          </div>
        </div>
      </div>

      {/* Metric 2: Dataset Records */}
      <div className="md:col-span-4 bg-surface-container-lowest rounded-[16px] p-5 md:p-stack-md shadow-[0px_4px_20px_rgba(45,45,45,0.04)] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-stack-sm">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            Dataset Records
          </h3>
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">analytics</span>
          </div>
        </div>
        <div>
          <div className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-1">
            {loading ? '...' : totalRecords.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant">
            <span className="font-label-sm text-label-sm">
              Bengaluru Listings Analyzed
            </span>
          </div>
        </div>
      </div>

      {/* Metric 3: Locations Coverage */}
      <div className="md:col-span-4 bg-surface-container-lowest rounded-[16px] p-5 md:p-stack-md shadow-[0px_4px_20px_rgba(45,45,45,0.04)] flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary-fixed/30 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center justify-between mb-stack-sm relative z-10">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
            Locations Covered
          </h3>
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
            <span className="material-symbols-outlined">location_city</span>
          </div>
        </div>
        <div className="relative z-10">
          <div className="font-display-lg-mobile text-display-lg-mobile text-on-surface mb-1">
            {loading ? '...' : info?.locations.length || 633}
          </div>
          <div className="flex gap-1.5 flex-wrap mt-2 max-h-12 overflow-hidden">
            {info?.locations.slice(0, 3).map((loc) => (
              <span key={loc} className="px-2.5 py-0.5 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-[11px] truncate max-w-[100px]">
                {loc}
              </span>
            ))}
            {(info?.locations.length || 633) > 3 && (
              <span className="px-2 py-0.5 bg-surface-container-high text-on-surface-variant rounded-full font-label-sm text-[11px]">
                +{(info?.locations.length || 633) - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bengaluru Property Market Valuations Table */}
      <div className="md:col-span-12 bg-surface-container-lowest rounded-[16px] overflow-hidden shadow-[0px_4px_20px_rgba(45,45,45,0.04)]">
        <div className="p-5 md:p-stack-md flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-outline-variant/20">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Bengaluru Property Valuations
            </h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              Real property valuations extracted from the Bengaluru dataset with full attributes
            </p>
          </div>
          <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-xs w-fit">
            Dataset Sample Listings
          </span>
        </div>

        <div className="table-responsive">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20">
                <th className="py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Location & Society
                </th>
                <th className="py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Area Type
                </th>
                <th className="py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Availability
                </th>
                <th className="py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Specs (Sqft / Layout)
                </th>
                <th className="py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Market Valuation
                </th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-on-surface-variant">
                    Loading Bengaluru dataset properties...
                  </td>
                </tr>
              ) : properties.length > 0 ? (
                properties.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors"
                  >
                    {/* Location & Society */}
                    <td className="py-4 px-4 md:px-6">
                      <div className="font-medium text-on-surface">
                        {item.location}
                      </div>
                      <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
                        <span className="material-symbols-outlined text-[13px] text-outline">
                          domain
                        </span>
                        {item.society}
                      </div>
                    </td>

                    {/* Area Type */}
                    <td className="py-4 px-4 md:px-6 text-on-surface-variant text-sm whitespace-nowrap">
                      {item.area_type}
                    </td>

                    {/* Availability */}
                    <td className="py-4 px-4 md:px-6 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-[11px] ${
                          item.availability === 'Ready To Move'
                            ? 'bg-primary-container/30 text-on-primary-container'
                            : 'bg-secondary-container/50 text-on-secondary-container'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[12px]">
                          {item.availability === 'Ready To Move' ? 'check_circle' : 'schedule'}
                        </span>
                        {item.availability}
                      </span>
                    </td>

                    {/* Specs */}
                    <td className="py-4 px-4 md:px-6 text-on-surface text-sm whitespace-nowrap">
                      <div className="font-semibold text-on-surface">
                        {item.total_sqft.toLocaleString()} sqft
                      </div>
                      <div className="font-label-sm text-[12px] text-on-surface-variant">
                        {item.bhk} • {item.bath ?? '—'} Bath • {item.balcony ?? '0'} Balcony
                      </div>
                    </td>

                    {/* Valuation */}
                    <td className="py-4 px-4 md:px-6 whitespace-nowrap">
                      <div className="font-bold text-primary font-body-lg">
                        {formatValuation(item.price_lakhs)}
                      </div>
                      <div className="font-label-sm text-[11px] text-on-surface-variant">
                        ₹ {item.price_per_sqft.toLocaleString('en-IN')} / sqft
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-on-surface-variant">
                    {error || 'No property records available. Make sure Python backend is running.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Model Benchmark Performance Table */}
      <div className="md:col-span-12 bg-surface-container-lowest rounded-[16px] overflow-hidden shadow-[0px_4px_20px_rgba(45,45,45,0.04)] mt-4">
        <div className="p-5 md:p-stack-md flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-outline-variant/20">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface">
              Model Benchmark Performance
            </h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
              Comparison of trained algorithms on the Bengaluru dataset
            </p>
          </div>
        </div>

        <div className="table-responsive">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20">
                <th className="py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Algorithm
                </th>
                <th className="py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  R² Score
                </th>
                <th className="py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  MAE (Lakhs)
                </th>
                <th className="py-4 px-4 md:px-6 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md">
              {loading ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-on-surface-variant">
                    Loading ML benchmark data...
                  </td>
                </tr>
              ) : info?.all_results ? (
                Object.entries(info.all_results).map(([modelName, metrics]) => {
                  const isBest = modelName === info.best_model;
                  return (
                    <tr
                      key={modelName}
                      className={`border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors ${
                        isBest ? 'bg-primary/5 font-medium' : ''
                      }`}
                    >
                      <td className="py-4 px-4 md:px-6 text-on-surface">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[18px]">
                            {isBest ? 'stars' : 'auto_graph'}
                          </span>
                          {modelName}
                        </div>
                      </td>
                      <td className="py-4 px-4 md:px-6 text-on-surface font-semibold">
                        {(metrics.r2 * 100).toFixed(2)}%
                      </td>
                      <td className="py-4 px-4 md:px-6 text-on-surface">
                        ₹ {metrics.mae.toFixed(2)} L
                      </td>
                      <td className="py-4 px-4 md:px-6">
                        {isBest ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-container/40 text-on-primary-container font-label-sm text-label-sm">
                            <span className="material-symbols-outlined text-[14px]">
                              check_circle
                            </span>
                            Selected Best
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                            Evaluated
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-on-surface-variant">
                    {error || 'No benchmark results available.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
