import Download from "@/components/Download";
import Hero from "@/components/Hero";
import MacMockup from "@/components/MockUp";

import image from "@/assets/PictoPy_Logo.png";
import MockUpWithDesc from "@/components/MockUpWithDesc";
import Metrics from "@/components/Metrics";
import SocialMediaCTA from "@/components/SocialMediaCTA";
import MacMockDesc from "@/components/MacMockDesc";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Download />
      <MacMockup image={image} />
      <MacMockDesc />
      <MockUpWithDesc image={image} />
      <Metrics />
      <SocialMediaCTA />
    </>
  );
}
