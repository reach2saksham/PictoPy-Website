import { useMemo } from "react";

export type Platform = "mac" | "windows" | "linux";

export function usePlatform() {
  return useMemo(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isMobile =
      /android|iphone|ipad|ipod|mobile/i.test(ua);

    let platform: Platform = "linux";

    if (ua.includes("mac")) platform = "mac";
    else if (ua.includes("win")) platform = "windows";

    return { platform, isMobile };
  }, []);
}