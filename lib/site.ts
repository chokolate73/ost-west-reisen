// Canonical production origin. The old site was indexed under
// https://www.ost-west-reisen-koeln.de, so we keep www as the canonical
// host to preserve existing rankings after the domain switch.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ost-west-reisen-koeln.de";
