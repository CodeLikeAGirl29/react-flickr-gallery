const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY || "";

if (!apiKey) {
  console.warn("VITE_UNSPLASH_API_KEY is missing! Check your .env file or Vercel settings.");
}

export default apiKey;