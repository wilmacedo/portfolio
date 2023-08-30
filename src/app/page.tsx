import { social } from "@/config/social";
import dynamic from "next/dynamic";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function Home() {
  return (
    <main>
      <div className="absolute -z-[1] inset-0 bg-gradient-radial" />

      <Navbar />

      <section className="pt-14 px-8 md:px-16 sm:pt-40">
        <div className="w-full mx-auto lg:max-w-5xl">
          <div className="mt-12 grid auto-rows-auto grid-cols-1 gap-6 sm:gap-10 sm:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold lg:text-6xl">Wil Macedo</h1>
              <h2 className="mt-2 font-light lg:mt-3 lg:text-2xl">
                Software Engineer
              </h2>
              <div
                className={twMerge(
                  "mt-4 text-[#8A858F] font-light leading-[1.8]",
                  "md:max-w-sm lg:mt-9 lg:text-xl"
                )}
              >
                <p>
                  Specialized in creating (and occasionally designing) digital
                  experiences.
                </p>
                <p className="mt-4 lg:mt-6">
                  Currently, I&apos;m creating a new way to use your
                  cryptocurrencies at{" "}
                  <Link
                    href="https://klever.io"
                    target="_blank"
                    className="inline-block text-underline text-transparent bg-clip-text bg-gradient-to-r from-[#fa29bb] to-[#a94dff]"
                  >
                    Klever
                  </Link>
                  .
                </p>
              </div>
              <nav className="mt-8 inline-flex items-center gap-6">
                {social.map(({ icon: Icon, href }, index) => (
                  <Link key={index} href={href} target="_blank">
                    <Icon strokeWidth={1.5} />
                  </Link>
                ))}
              </nav>
            </div>
            {/* TODO: Add more updated profile pic and section with animation */}
            {/* <div className="hidden sm:flex">
              <Image
                src="/profile-without-bg.png"
                height={400}
                width={400}
                alt="Profile picture of Wil Macedo"
                sizes="(min-width: 1000px) 1000px, 100vw"
              />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
