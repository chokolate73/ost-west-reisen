import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 308 redirects for URLs of the old ost-west-reisen-koeln.de site that are
  // indexed by Google (inventory from the Google index; cross-check against
  // the Search Console page report before go-live).
  async redirects() {
    return [
      { source: "/katalog", destination: "/#destinations", permanent: true },
      { source: "/tours", destination: "/#tours", permanent: true },
      { source: "/exkursion", destination: "/#tours", permanent: true },
      { source: "/aktiv", destination: "/#destinations", permanent: true },
      { source: "/kur", destination: "/#health", permanent: true },
      { source: "/onas", destination: "/#why", permanent: true },
      { source: "/kontakt", destination: "/#contacts", permanent: true },
      { source: "/agb-1", destination: "/agb", permanent: true },
      { source: "/online-buchung", destination: "/#form", permanent: true },
      { source: "/online-buchung-tr", destination: "/#form", permanent: true },
      { source: "/online-buchung-bg", destination: "/#form", permanent: true },
    ];
  },
};

export default nextConfig;
