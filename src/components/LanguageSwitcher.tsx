"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { languages } from "@/config/languages";
import { useLocale, useTranslations } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex gap-2 items-center">

      <select
        id="language-select"
        value={locale}
        disabled={isPending}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="flex rounded-lg items-center hover:text-text3/70 transition bg-transparent text-text3 hover:bg-bg-hover px-3 py-1.5 cursor-pointer"
        aria-label={t("selectLanguage")}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.localName} ({lang.name})
          </option>
        ))}
      </select>
    </div>
  );
}
