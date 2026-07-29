import { useEffect, useState } from "react";

export type Platform = "mac" | "windows" | "linux";

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubAsset[];
}

let releaseCache: GitHubRelease | null = null;

async function getLatestRelease() {
  if (releaseCache) return releaseCache;

  const res = await fetch(
    "https://api.github.com/repos/AOSSIE-Org/PictoPy/releases/latest",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch latest release");
  }

  releaseCache = await res.json();

  return releaseCache;
}

export function useDownloadLink(platform: Platform) {
  const [link, setLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    getLatestRelease()
      .then((release) => {
        let asset;

        switch (platform) {
          case "mac":
            asset = release?.assets.find(
              (a) => a.name.endsWith(".dmg") || a.name.endsWith(".app"),
            );
            break;

          case "windows":
            asset = release?.assets.find(
              (a) => a.name.endsWith(".exe") || a.name.endsWith(".msi"),
            );
            break;

          case "linux":
            asset = release?.assets.find((a) => a.name.endsWith(".deb"));
            break;
        }

        if (mounted) {
          setLink(asset?.browser_download_url ?? null);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));

    return () => {
      mounted = false;
    };
  }, [platform]);

  return { link, loading };
}
