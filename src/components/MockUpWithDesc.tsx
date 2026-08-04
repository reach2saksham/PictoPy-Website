import Image, { StaticImageData } from "next/image";
import MacMockup from "./MockUp";
import PictoPyImage from "@/assets/pictopy_logo.svg";
import { getTranslations } from "next-intl/server";

async function MockUpWithDesc({ image }: { image: StaticImageData }) {
  const t = await getTranslations("Home.MockUpWithDesc");
  return (
    <>
      <section className="mt-10 flex flex-col gap-15 md:mt-28 md:gap-14 lg:mt-28 min-[850px]:flex-row lg:gap-20 xl:gap-25">
        <div className="flex max-w-full flex-col gap-8 md:gap-10 lg:max-w-[25%]">
          <div className="text-xl font-medium leading-8 tracking-[0.2px] md:text-2xl md:leading-9.5">
            <span className="text-[#000000] dark:text-text">
              {t("featureSectionTitle")}
            </span>
            <p className="mt-2 text-base leading-7 md:text-lg md:leading-8">
              <span className="text-[#000000] dark:text-text dark:[text-shadow:0px_0px_20px_#9AAAFFA6]">
                {t("featureSectionDescriptionHighlighting")}{" "}
              </span>
              <span className="text-[#434345]">
                {t("featureSectionDescription")}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm leading-[22.4px] tracking-[0.2px]">
            <div className="flex w-fit items-center gap-2 rounded-md bg-[#1B1C1E] px-2 py-0.5">
              <Image
                src={PictoPyImage.src}
                aria-label="PictoPy Logo"
                alt="PictoPy Logo"
                className="h-4 w-4"
                loading="lazy"
                width={16}
                height={16}
              />
              <span className="text-white">{t("reviewButton")}</span>
            </div>

            <span className="text-text3">{t("testimonialLabel")}</span>
          </div>
        </div>

        <MacMockup
          image={image}
          imageClassName="h-[228px] md:h-[320px] lg:h-[466px]"
        />
      </section>

      <div className="font-medium text-[20px] text-center place-self-center text-text2 max-w-100 mt-22.5">
        <span className="text-[#000000] dark:text-text">
          {t("featureHeading")}{" "}
        </span>
        <span>{t("featureSubheading")}</span>
      </div>
    </>
  );
}

export default MockUpWithDesc;
