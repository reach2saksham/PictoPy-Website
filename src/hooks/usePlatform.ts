"use client";
import { useEffect, useState } from "react";

type Platform = "mac" | "windows" | "linux";

export function usePlatform() {
  const [platform, setPlatform] = useState<Platform>("windows");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const ua =
      typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : "";

    const mobile = /android|iphone|ipad|ipod|mobile/i.test(ua);
    setIsMobile(mobile);

    let detectedPlatform: Platform = "linux";
    if (!ua) detectedPlatform = "windows";
    else if (ua.includes("mac")) detectedPlatform = "mac";
    else if (ua.includes("win")) detectedPlatform = "windows";
    else if (ua.includes("linux")) detectedPlatform = "linux";

    setPlatform(detectedPlatform);
    setMounted(true);
  }, []);

  return { platform, isMobile, mounted };
}

