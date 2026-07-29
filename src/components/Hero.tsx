export default function Hero() {
  return (
    <section className="flex items-center justify-center gap-5 mt-23.5 min-[411px]:mt-17.5">
      {/* Content */}
      <div className="text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 font-medium rounded-[43px] border dark:border-[#9F8B4B] bg-black dark:bg-[#1C1D15]  px-3 py-[5.95px] text-sm dark:shadow-[0px_0px_20px_0px_#F5306B1A]">
          <span className="text-[#ffffff]">
            Feature: Introducing AI Tagging
          </span>
          <div className="inline-flex visible">
            <div className="mx-3 h-4.25 w-px border border-[#434345]" />
            <button
              className="text-[#E5E5E5] dark:text-text3 hover:text-text3/80"
              onClick={() => {
                document.getElementById("downloads-section")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Download now →
            </button>
          </div>
        </div>

        {/* Heading */}
        <h1
          className="mt-15 min-[411px]:mt-2 text-5xl font-semibold text-[#202020] drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)] dark:text-white dark:[text-shadow:0px_4px_4px_rgba(0,0,0,0.15)] leading-tight tracking-tight md:text-[64px]"
          id="downloads-section"
        >
          The most advanced
          <br />
          Open-Source Gallery
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-2.5 max-w-2xl text-[16px] text-text2 font-medium">
          <span className="text-text">Intelligent Gallery Management.</span>{" "}
          Advanced AI analyzes and organizes your photos locally, keeping every
          file secure and under your control.
        </p>
      </div>
    </section>
  );
}
