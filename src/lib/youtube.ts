/** Accept ordinary YouTube links while only embedding validated YouTube videos. */
export function youtubeEmbed(value?: string | null): string | undefined {
  if (!value?.trim()) return;
  try {
    const url = new URL(value.trim());
    if (!["https:", "http:"].includes(url.protocol)) return;
    const host = url.hostname.toLowerCase();
    let id: string | null | undefined;
    if (host === "youtu.be") {
      id = url.pathname.split("/")[1];
    } else if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com"].includes(host)) {
      const [, kind, video] = url.pathname.split("/");
      id = kind === "watch" ? url.searchParams.get("v") : ["embed", "shorts", "live"].includes(kind) ? video : undefined;
    }
    if (!id || !/^[a-zA-Z0-9_-]{11}$/.test(id)) return;
    return `https://www.youtube.com/embed/${id}`;
  } catch {
    return;
  }
}
