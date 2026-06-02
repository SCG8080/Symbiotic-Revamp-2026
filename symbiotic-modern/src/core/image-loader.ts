export default function customImageLoader({ src }: { src: string }) {
  if (src.startsWith("http") || src.startsWith("data:")) {
    return src;
  }
  
  // Prepend the repository name for GitHub Pages
  // Make sure not to double-slash if src starts with /
  const basePath = "/Symbiotic-Revamp-2026";
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  
  return `${basePath}${normalizedSrc}`;
}
