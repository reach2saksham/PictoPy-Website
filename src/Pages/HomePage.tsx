import FAQ from "@/Pages/FaqPage/FAQ";
import Download from "@/components/Download";
import Hero from "@/components/Hero";
import MacMockup from "@/components/MockUp";

import image from "@/assets/PictoPy_Logo.png";
import MockUpWithDesc from "@/components/MockUpWithDesc";
import Metrics from "@/components/Metrics";
import SocialMediaCTA from "@/components/SocialMediaCTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <Download />
      <MacMockup image={image} />
      <div className="flex max-w-153.75 text-center place-self-center mt-14 text-[#606060] dark:text-text2">
        <p className="font-medium text-[16px] leading-6 tracking-normal">
          Advanced desktop gallery application powered by Tauri, React, and Rust
          with a Python backend for intelligent image analysis and seamless
          management.
        </p>
      </div>
      <MockUpWithDesc image={image} />
      <Metrics />
      <SocialMediaCTA />
      <FAQ />
    </>
  );
}
