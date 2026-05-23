export type Destination = {
  slug: string;
  name: string;
  from: string;
  to: string;
};

// `from`/`to` are the diagonal gradient colors shown as a graceful fallback
// when the photo at /destinations/<slug>.jpg is missing.
export const destinations: Destination[] = [
  { slug: "spain", name: "Испания", from: "#f6c89a", to: "#3f93bd" },
  { slug: "italy", name: "Италия", from: "#f0a085", to: "#2e7d9a" },
  { slug: "greece", name: "Греция", from: "#bfe3f2", to: "#2f6fb0" },
  { slug: "egypt", name: "Египет", from: "#f6d49a", to: "#c4863a" },
  { slug: "bulgaria", name: "Болгария", from: "#f4d8a8", to: "#3f9fb5" },
  { slug: "croatia", name: "Хорватия", from: "#e6b89c", to: "#2f7fa3" },
  { slug: "turkey", name: "Турция", from: "#a7d9c9", to: "#1f7a8c" },
  { slug: "georgia", name: "Грузия", from: "#cfe3c2", to: "#3a8f7a" },
  { slug: "czech", name: "Чехия", from: "#e7c9b0", to: "#8a6d9a" },
  { slug: "other", name: "Другие страны", from: "#cfe8d8", to: "#2c8fa6" },
  { slug: "cruises", name: "Круизы", from: "#bfe3f2", to: "#1f6f9e" },
];
