import Script from "next/script";
import { getTranslations } from "next-intl/server";
import HomePage from "@/components/HomePage";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t("heading"),
    description: t("metaDescription"),
    publisher: {
      "@type": "Organization",
      name: "PictoPy",
      url: "https://pictopy.aossie.org",
      logo: "https://pictopy.aossie.org/brand/icons/pictopy_logo.svg",
    },
    inLanguage: locale,
  };

  return (
    <>
      {" "}
      {/* Schema.org JSON-LD Structured Data */}
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
