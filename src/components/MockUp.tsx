import Image, { type StaticImageData } from "next/image";
import { FaApple } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { IoBatteryFullOutline } from "react-icons/io5";

export default function MacMockup({
  image,
  imageClassName,
}: {
  image: StaticImageData;
  imageClassName?: string;
}) {
  return (
    <section className="flex w-full justify-center h-fit">
      {/* Outer Frame */}
      <div
        className="rounded-[19px] w-full border border-[#000000B8] dark:border-[#FFFFFF14] bg-[linear-gradient(0deg,rgba(0,0,0,0.72),rgba(0,0,0,0.72)),radial-gradient(85.77%_49.97%_at_51%_5.12%,rgba(255,150,150,0.11)_0%,rgba(222,226,255,0.08)_45.83%,rgba(241,242,255,0.02)_100%)] dark:bg-[linear-gradient(0deg,rgba(0,0,0,0.44),rgba(0,0,0,0.44)),radial-gradient(85.77%_49.97%_at_51%_5.12%,rgba(255,150,150,0.11)_0%,rgba(222,226,255,0.08)_45.83%,rgba(241,242,255,0.02)_100%)] backdrop-blur-[2px]"
        aria-hidden="true"
      >
        {/* Second Outer frame */}
        <div
          className="rounded-[19px] bg-[#FFFFFF01] shadow-[inset_0px_0.5px_0px_1px_#FFFFFF4D,0px_0px_40px_20px_#FFFFFF08] p-2.25"
          aria-hidden="true"
        >
          {/* Inner Window */}
          <div
            className="overflow-hidden rounded-xl border bg-[#07080A] border-[#FFFFFF14] shadow-[inset_0px_0.5px_0px_1px_#FFFFFF1A,0px_0px_2px_0px_#FFFFFF30]"
            aria-hidden="true"
          >
            {/* Top Bar */}
            <div className="flex h-10 items-center justify-between px-2 min-[480px]:px-3 sm:px-5 text-[10px] min-[480px]:text-[11px] sm:text-[12px] font-medium text-[#FFFFFF] dark:text-[#5F6061] overflow-hidden select-none">
              {/* Right Section */}
              <div className="flex min-w-0 items-center gap-2 min-[480px]:gap-3 sm:gap-4">
                <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                  <FaApple size={12} fill="currentColor" />
                  <span>PictoPy</span>
                </div>

                <span className="truncate">File</span>
                <span className="truncate">Edit</span>
                <span className="truncate">View</span>
                <span className="truncate">Go</span>
                <span className="hidden min-[420px]:block">Window</span>
                <span className="hidden min-[480px]:block">Help</span>
              </div>

              {/* Left section */}
              <div className="flex shrink-0 items-center gap-1.5 min-[480px]:gap-2 sm:gap-4">
                <FaWifi size={13} className="sm:h-3.75 sm:w-3.75" aria-label="WiFi icon" />
                <IoBatteryFullOutline
                  size={17}
                  className="sm:h-4.75 sm:w-4.75"
                />

                <span className="hidden sm:block text-[14px] font-semibold">
                  Mon March 02
                </span>

                <span className="text-[10px] min-[480px]:text-[11px] sm:text-[12px]">
                  9:41 AM
                </span>
              </div>
            </div>

            {/* Mockup Area */}
            <Image
              src={image}
              alt="PictoPy mockup preview"
              aria-hidden="true"
              loading="eager"
              className={`w-full object-contain bg-[#07080A] ${imageClassName}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
