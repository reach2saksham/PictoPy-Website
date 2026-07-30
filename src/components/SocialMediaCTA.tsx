import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

// Data to display in SocialMediaCTA section
const cards = [
  {
    icon: <FaDiscord className="text-[#5865F2]" />,
    title: "Discord",
    count: "7k",
    label: "members",
    description:
      "Get the inside community and learn how other people use PictoPy.",
    action: "Join",
    link: "https://discord.com/channels/1022871757289422898/1311271974630330388",
  },
  {
    icon: <FaGithub className="dark:text-white" />,
    title: "GitHub",
    count: "2k",
    label: "followers",
    description:
      "Keep up to date with the latest releases, features and improvements.",
    action: "Star Us",
    link: "https://github.com/AOSSIE-Org/PictoPy",
  },
  {
    icon: <FaYoutube className="text-[#FF0000]" />,
    title: "YouTube",
    count: "40",
    label: "Subscribers",
    description:
      "Check out our YouTube channel to learn about PictoPy and even more projects",
    action: "Subscribe",
    link: "https://www.youtube.com/@AOSSIE-Org",
  },
];

export default function SocialMediaCTA() {
  return (
    <section className="mt-22.5 lg:mt-30 flex flex-col gap-14 w-full">
      <h1 className="place-self-center max-w-136 text-center tracking-[0.2px] font-medium text-[18px] md:text-[20px] text-[#606060] dark:text-text2">
        <span className="text-black dark:text-white">Stay in the loop. </span>
        Join the community and learn how other people get the most out of
        PictoPy.
      </h1>

      {/* Secial Media CTA section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex min-h-40 md:min-h-42.5 flex-col gap-4.5 rounded-xl border border-[#00000029] bg-[linear-gradient(112.57deg,rgba(17,18,20,0.075)_4.87%,rgba(12,13,15,0.09)_75.88%)] shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.15)] dark:border-white/6 dark:bg-[linear-gradient(112.57deg,rgba(17,18,20,0.75)_4.87%,rgba(12,13,15,0.9)_75.88%)] dark:shadow-[inset_0px_1px_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-[10px] px-6 py-6.5 transition-all duration-300 leading-[22.4px]"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-[28px]">{card.icon}</div>

                <h3 className="text-[20px] font-medium leading-none dark:text-white text-black">
                  {card.title}
                </h3>
              </div>

              <div className="text-right dark:[text-shadow:0px_0px_4px_rgba(0,0,0,0.25)]">
                <span className="font-mono text-sm font-medium text-[#515151] dark:text-text3 tracking-[0.3px]">
                  {card.count}
                </span>{" "}
                <span className="font-mono text-sm font-medium text-[#515151] dark:text-text3 tracking-[0.3px]">
                  {card.label}
                </span>
              </div>
            </div>

            <p className="max-w-83 text-[14px] leading-[22.4px] tracking-normal font-medium text-[#515151] dark:text-text3 dark:[text-shadow:0px_0px_4px_rgba(0,0,0,0.25)]">
              {card.description}
            </p>

            <button
              className="inline-flex w-fit items-center gap-2 text-[14px] font-medium text-black dark:text-white transition-all hover:gap-3"
              onClick={() => {
                window.open(card.link, "_blank", "noopener,noreferrer");
              }}
            >
              {card.action}
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
