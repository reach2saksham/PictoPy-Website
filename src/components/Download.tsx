import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useDownloadLink } from "@/hooks/useDownloadLink";
import { platformConfig } from "@/const/const";
import { usePlatform } from "@/hooks/usePlatform";

type PlatformConfigItem = (typeof platformConfig)[keyof typeof platformConfig];

type DownloadButtonProps = {
  value: PlatformConfigItem;
};

const Download: FC = () => {
  const platformArray = Object.values(platformConfig);
  const { isMobile } = usePlatform();

  return (
    <section
      id="downloads-section"
      className="w-full py-13 transition-colors duration-300  overflow-hidden"
    >
      {isMobile ? (
        <p className="font-mono text-center font-normal text-muted-foreground text-xs text-[#1e1e1e] dark:text-[#C1C1C1]">
          You can use PictoPy on any Personal Computer.
          <br />
          Be it Windows, Mac or Linux.
        </p>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {platformArray.map((value) => (
              <DownloadButton key={value.plateform} value={value} />
            ))}
          </div>
          <VersionBar />
        </>
      )}
    </section>
  );
};

export default Download;

// CTA (Download button)
function DownloadButton({ value }: DownloadButtonProps) {
  const { link, loading } = useDownloadLink(value.plateform);

  return (
    <Button
      disabled={loading}
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
      className="h-9 px-3 rounded-lg flex items-center gap-2 text-sm font-medium transition"
    >
      <value.icon />
      {value.label}
    </Button>
  );
}

interface ReleaseData {
  version: string;
  date: string;
}

// Version below CTA
function VersionBar() {
  const [release, setRelease] = useState<ReleaseData>({
    version: "Loading...",
    date: "Loading...",
  });

  useEffect(() => {
    async function getRelease() {
      try {
        const res = await fetch(
          "https://api.github.com/repos/AOSSIE-Org/PictoPy/releases/latest",
        );

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();

        setRelease({
          version: data.tag_name,
          date: new Date(data.published_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        });
      } catch {
        setRelease({
          version: "v1.0.0",
          date: "Sep 7, 2025",
        });
      }
    }

    getRelease();
  }, []);

  return (
    <section className="font-mono w-full flex justify-center py-4">
      <div className="flex flex-wrap text-text3 items-center justify-center text-xs">
        <span>{release.version}</span>

        <span className="mx-5 h-2.5 w-px bg-text3" />

        <span>Latest: {release.date}</span>

        <span className="mx-5 h-2.5 w-px bg-text3" />

        <span>Multi-OS Support</span>

        <span className="mx-5 h-2.5 w-px bg-text3" />

        <span>Free Forever</span>
      </div>
    </section>
  );
}
