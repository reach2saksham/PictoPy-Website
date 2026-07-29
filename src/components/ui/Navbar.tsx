import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ThemeContext, ThemeOptions } from "@/context/theme-provider";
import { FiChevronDown, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import PictoPyLogo from "@/assets/PictoPy_Logo.png";
import { navItems, platformConfig } from "@/const/const";
import { usePlatform } from "@/hooks/usePlatform";
import { useDownloadLink } from "@/hooks/useDownloadLink";

const languages = ["English", "Hindi", "Spanish", "French", "German"];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === ThemeOptions.Dark;
  const [selectedLang, setSelectedLang] = useState<string>("English");
  const [listShow, setListShow] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const platform = usePlatform();
  const { link, loading } = useDownloadLink(platform.platform);
  const { icon: Icon } = platformConfig[platform.platform];

  return (
    <nav className="sticky top-4 z-999 w-full flex justify-center">
      <div className="h-19 w-full rounded-2xl border border-border flex items-center justify-between px-4  min-[1250px]:px-8 bg-[linear-gradient(#F8F9FA,#F8F9FA)] dark:bg-[linear-gradient(93.78deg,rgba(17,18,20,0.75)_4.87%,rgba(12,13,15,0.9)_75.88%)] shadow-[inset_0_1px_1px_1px_#00000026] dark:shadow-[inset_0_1px_1px_1px_#FFFFFF26]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={PictoPyLogo}
            alt="PictoPy logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain shrink-0 select-none"
            loading="eager"
            draggable={false}
          />
          <span className="text-primary text-[20px] font-semibold tracking-tight select-none">
            PictoPy
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden min-[1000px]:flex items-center gap-8 font-medium text-[14px] text-text3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="transition hover:text-text3/70"
            >
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <Button
              className="flex items-center gap-1 hover:text-text3/70 transition"
              variant="ghost"
              onMouseEnter={() => setListShow(true)}
            >
              {selectedLang}
              <FiChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </Button>
            {listShow && (
              <div className="absolute right-0 top-full mt-4 rounded-lg border border-border bg-bg p-1 translate-y-1 transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="w-full rounded-md px-3 py-2 text-left text-sm text-text3 transition hover:bg-bg/10 hover:text-text3/80"
                    onClick={() => {
                      setSelectedLang(lang);
                    }}
                    onMouseEnter={() => setListShow(true)}
                    onMouseLeave={() => setListShow(false)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden min-[1000px]:flex items-center gap-5">
          <Button
            className="transition rounded-lg"
            variant={"ghost"}
            onClick={toggleTheme}
          >
            {isDark ? <FiSun size={24} /> : <FiMoon size={24} fill="#666465" />}
          </Button>
          <div className="mx-3 h-6 w-px border border-text3" />
          <Button
            asChild
            disabled={loading || !link}
            className="h-9 px-3 rounded-lg flex items-center gap-2 text-sm font-medium transition"
          >
            <a href={link ?? "#"} target="_blank" rel="noopener noreferrer">
              <Icon size={17} />
              Download
            </a>
          </Button>
        </div>

        {/* Mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="min-[1000px]:hidden rounded-lg"
          onMouseEnter={() => setSidebarOpen(true)}
        >
          <FiMenu size={24} />
        </Button>

        {/* Mobile sidebar */}
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </nav>
  );
};

type MobileSidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

function MobileSidebar({ sidebarOpen, setSidebarOpen }: MobileSidebarProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === ThemeOptions.Dark;
  const platform = usePlatform();
  const { link, loading } = useDownloadLink(platform.platform);
  const { icon: Icon } = platformConfig[platform.platform];
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed bg-bg z-40 transition-opacity duration-300 min-[1000px]:hidden ${
          sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bg-bg z-50 h-screen w-full max-w-full text-center sm:max-w-72 border border-border transition-transform duration-300 min-[1000px]:hidden ${
          sidebarOpen ? "translate-x-0 " : "translate-x-full "
        }`}
        onMouseLeave={() => setSidebarOpen(false)}
      >
        {/* Menu section */}
        <div className="flex items-center justify-between p-5">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={PictoPyLogo}
              alt="PictoPy logo"
              width={32}
              height={32}
              className="h-8 w-8 object-contain shrink-0 select-none"
              loading="eager"
              draggable={false}
            />
            <span className="text-primary text-[20px] font-semibold tracking-tight select-none">
              PictoPy
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX size={22} />
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col p-4 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="rounded-lg px-3 py-3 text-text3 transition hover:text-text3/70 hover:bg-muted"
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Theme toggle and Download section */}
        <div className="flex flex-col gap-4 px-4 pb-4">
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="h-10 w-full justify-center gap-3 rounded-xl hover:bg-muted"
          >
            {isDark ? (
              <>
                <FiSun size={22} />
                <b className="text-text">Toggle Light</b>{" "}
              </>
            ) : (
              <>
                <FiMoon size={22} fill="#666465" />
                <b className="text-text">Toggle Dark</b>{" "}
              </>
            )}
          </Button>

          <Button
            asChild
            disabled={loading || !link}
            className="h-11 w-full rounded-xl flex items-center justify-center gap-2 shadow-sm"
          >
            <a href={link ?? "#"} target="_blank" rel="noopener noreferrer">
              <Icon size={17} />
              Download
            </a>
          </Button>
        </div>
      </aside>
    </>
  );
}

export default Navbar;
