'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Hide the floating button inside the Sanity Studio so it doesn't
  // overlap the editor's Publish / Delete actions.
  if (pathname?.startsWith('/studio')) return null;

  return (
    <a
      href="https://wa.me/97430305180"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none group-hover:animate-none" />

      {/* WhatsApp SVG Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:rotate-12"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.936 9.936 0 0 0 4.779 1.218h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.92 9.92 0 0 0 12.012 2Zm5.72 14.16c-.244.688-1.201 1.249-1.657 1.282-.43.032-.851.156-2.73-.585-2.404-.95-3.929-3.39-4.05-3.554-.12-.165-1.008-1.34-1.008-2.557 0-1.216.629-1.816.852-2.063.224-.246.488-.309.65-.309.163 0 .326.002.468.008.148.006.348-.056.545.422.203.49.69 1.693.75 1.818.061.125.102.27.018.437-.083.167-.124.27-.248.416-.124.147-.262.327-.374.439-.125.124-.255.26-.11.51.146.251.65 1.07 1.393 1.733.959.855 1.766 1.12 2.01 1.24.244.12.386.102.53-.062.142-.163.61-.71.772-.952.163-.243.325-.203.548-.12.224.083 1.423.671 1.667.793.244.12.406.182.467.287.061.104.061.604-.183 1.293Z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-16 bg-neutral-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl border border-white/10">
        Chat on WhatsApp
      </span>
    </a>
  );
}
