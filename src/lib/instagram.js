/** Normalize public post/reel URLs, dropping sharing and tracking parameters. */
export function instagramPostUrl(value) {
  if (typeof value !== "string" || !value.trim()) return;
  try {
    const url = new URL(value.trim());
    if (!["https:", "http:"].includes(url.protocol)) return;
    if (!["instagram.com", "www.instagram.com", "m.instagram.com"].includes(url.hostname)) return;
    if (url.username || url.password || url.port) return;
    const match = url.pathname.match(/^\/(p|reel|tv)\/([A-Za-z0-9_-]+)\/?$/);
    if (match) return `https://www.instagram.com/${match[1]}/${match[2]}/`;
  } catch {
    return;
  }
}
