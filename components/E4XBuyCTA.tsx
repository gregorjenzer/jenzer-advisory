// Drop-in CTA for /e4x and /e4x/pilot-kit
// Usage: 1) Save as components/E4XBuyCTA.tsx  2) Import and render <E4XBuyCTA buyHref="https://mybook.to/E4X" updatesHref="#updates" />
// If you don't want a universal link yet, use your current Amazon URL: buyHref="https://amzn.eu/d/dP5l6ig"

import React from "react";

export default function E4XBuyCTA({
  buyHref = "https://mybook.to/E4X", // Booklinker (geo‑routes to local Amazon)
  updatesHref = "#updates", // anchor to your updates form
  small = false,
}: {
  buyHref?: string;
  updatesHref?: string;
  small?: boolean;
}) {
  return (
    <section className={`w-full ${small ? "py-4" : "py-8"}`}>
      <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm">
        <div className="grid items-center gap-6 md:grid-cols-[1.6fr,auto]">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Engage for Excellence (E4X)</h2>
            <p className="mt-2 text-gray-600">Now available on Amazon worldwide. The link auto‑routes to your local Amazon store.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={buyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium shadow ring-1 ring-gray-300 hover:shadow-md bg-black text-white"
            >
              Buy the book
            </a>
            <a
              href={updatesHref}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium ring-1 ring-gray-300 hover:bg-gray-50"
            >
              Get updates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
