export interface PostData {
  title: string;
  body: string;
  published?: boolean;
  pinned?: boolean;
  order?: number | null;
  image?: string | null;
  imageAlt?: string | null;
  link?: { url?: string | null; label?: string | null } | null;
  video?: string | null;
}

export function visiblePosts(posts: PostData[]): PostData[] {
  return posts
    .filter((post) => post.published !== false)
    .sort((a, b) =>
      Number(Boolean(b.pinned)) - Number(Boolean(a.pinned)) ||
      (a.order ?? 100) - (b.order ?? 100) ||
      a.title.localeCompare(b.title, "nl")
    );
}
