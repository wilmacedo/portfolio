"use client";

import { routes } from "@/config/routes";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function currentTab() {
    const { hash } = window.location;
    return hash.length === 0 ? "home" : hash;
  }

  function toggleMobileMenu() {
    setOpened((prev) => !prev);
  }

  function closeMobileMenu() {
    if (!opened) return;

    setOpened(false);
  }

  return (
    <>
      <nav
        data-scrolled={scrolled}
        className={twMerge(
          "group fixed w-full z-20 inline-flex items-center justify-center transition-all duration-[350ms] border-b border-transparent",
          "px-4 py-8 md:py-12 md:px-16 lg:py-12 lg:px-16 lg:data-[scrolled=true]:py-8",
          "data-[scrolled=true]:backdrop-blur-sm data-[scrolled=true]:shadow-md"
        )}
      >
        <div
          className={twMerge(
            "w-full h-6 inline-flex items-center justify-between lg:max-w-5xl",
            "group-data-[scrolled=true]:h-4"
          )}
        >
          <Link
            href="#home"
            onClick={closeMobileMenu}
            className={twMerge(
              "relative overflow-hidden transition-all duration-[350ms] hover:opacity-60",
              "ml-4 scale-125 md:ml-0 md:scale-100",
              "group-data-[scrolled=true]:scale-100 md:group-data-[scrolled=true]:scale-75"
            )}
          >
            <Image
              className="animate-bottom-top"
              src="/logo/letters.svg"
              width={60}
              height={60}
              alt="Logo"
            />
            <Image
              className="absolute animation-delay-1000 animate-fade-in w-6 h-6 -top-[1px] left-[1.12rem] opacity-0"
              src="/logo/marks.svg"
              width={60}
              height={60}
              alt="Logo"
            />
          </Link>

          <div className="group hidden md:inline-flex items-center gap-8">
            {routes.map((route, index) => (
              <Link
                key={index}
                data-tab={currentTab()}
                href={`#${route.path}`}
                className={`opacity-50 transition-all hover:opacity-100 data-[tab=${route.path}]:opacity-100`}
              >
                <span className="transition-all duration-[350ms] group-data-[scrolled=true]:text-sm">
                  {route.name}
                </span>
              </Link>
            ))}

            <a href="/resume_us.pdf" download>
              <div className="p-px rounded-md bg-gradient-to-r from-[#fa29bb] to-[#a94dff]">
                <div className="px-3.5 py-1.5 bg-black transition-all rounded-md hover:opacity-90 group-data-[scrolled=true]:backdrop-blur-sm">
                  <span className="transition-all duration-[350ms] group-data-[scrolled=true]:text-sm">
                    Resume
                  </span>
                </div>
              </div>
            </a>
          </div>

          <button
            className="relative block md:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu size={36} />
          </button>
        </div>
      </nav>

      <div
        data-opened={opened}
        className={twMerge(
          "group fixed w-full transition-all h-px duration-500 z-10 bg-zinc-700/25 backdrop-blur-sm",
          "data-[opened=true]:h-screen"
        )}
      >
        <div
          className={twMerge(
            "mt-28 px-12 w-full flex flex-col gap-4 opacity-0 invisible transition-all delay-200",
            "group-data-[opened=true]:opacity-100 group-data-[opened=true]:visible"
          )}
        >
          {routes.map((route, index) => (
            <div key={index} className="mt-2">
              <Link href={`#${route.path}`} onClick={closeMobileMenu}>
                <span>{route.name}</span>
              </Link>
              <div className="mt-2 h-px w-full bg-slate-400/30" />
            </div>
          ))}

          <a href="/resume_us.pdf" download>
            <div className="p-px rounded-md bg-gradient-to-r from-[#fa29bb] to-[#a94dff]">
              <div className="px-3.5 py-1.5 bg-[#19111c] text-center transition-all rounded-md hover:opacity-90 group-data-[scrolled=true]:backdrop-blur-sm">
                <span className="transition-all duration-[350ms] group-data-[scrolled=true]:text-sm">
                  Resume
                </span>
              </div>
            </div>
          </a>

          {/* <div className="mt-4 mx-auto inline-flex items-center gap-4">
            {social.map(({ icon: Icon, href }, index) => (
              <Link key={index} target="_blank" href={href}>
                <Icon />
              </Link>
            ))}
          </div>

          <div className="mt-4 text-center">
            <span className="text-sm text-slate-200/70">
              Loosely designed in Figma and built with Next.js and Tailwind CSS,
              deployed with Vercel. It is private and no trackers are being
              used.
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
}
