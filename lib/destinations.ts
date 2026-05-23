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
  { slug: "bulgaria", name: "Болгария", from: "#f4d8a8", to: "#3f9fb5" },
  { slug: "greece", name: "Греция", from: "#bfe3f2", to: "#2f6fb0" },
  { slug: "turkey", name: "Турция", from: "#a7d9c9", to: "#1f7a8c" },
  { slug: "croatia", name: "Хорватия", from: "#e6b89c", to: "#2f7fa3" },
  { slug: "cyprus", name: "Кипр", from: "#cfe8d8", to: "#2c8fa6" },
  { slug: "uae", name: "ОАЭ", from: "#f6cf8f", to: "#c4863a" },
  { slug: "health", name: "Лечебные курорты", from: "#cfeede", to: "#3a9d8e" },
  { slug: "montenegro", name: "Черногория", from: "#b9d6c9", to: "#2a6f8a" },
];
