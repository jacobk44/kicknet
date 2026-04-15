"use client";

import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "NEW",
    subtitle: "ARRIVALS",
    href: "/new-arrivals",
    mobileImage: "/pagini-small.png",
    desktopImage: "/pagini.png",
    bg: "bg-gradient-to-r from-blue-700 to-blue-500",
  },
  {
    title: "HOT",
    subtitle: "DEALS",
    href: "/deals",
    mobileImage: "/pagani-home.webp",
    desktopImage: "/pagani-homelarge.png",
    bg: "bg-gradient-to-r from-red-600 to-orange-500",
  },
  {
    title: "LIMITED",
    subtitle: "EDITION",
    href: "/limited-edition",
    mobileImage: "/shoe3.png",
    desktopImage: "/pagani-homoo.jpg",
    bg: "bg-gradient-to-r from-purple-700 to-pink-500",
  },
];

export default function Hero({ index }: { index: number }) {
  const current = slides[index];

  const isLimited = current.title === "LIMITED";

  return (
    <Link href={current.href} className="block">
      <section
        className="w-full min-h-[50vh] md:min-h-[85vh] overflow-hidden text-white flex items-center bg-center bg-cover cursor-pointer"
        style={
          isLimited
            ? { backgroundImage: `url(${current.desktopImage})` }
            : undefined
        }
      >
        <div
          className={`w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 ${
            isLimited ? "bg-black/40 h-full" : current.bg
          }`}
        >
          <div>
            <h1 className="font-bold uppercase leading-tight text-3xl md:text-3xl">
              <span>
                {current.title}
                <span className="text-blue-300 text-5xl md:text-7xl ml-2">
                  {current.subtitle}
                </span>
              </span>
            </h1>
          </div>

          {/* Mobile Image ONLY if NOT limited */}
          {!isLimited && (
            <Image
              src={current.mobileImage}
              alt="product"
              width={400}
              height={400}
              priority
              className="mt-4 md:hidden transition-all duration-700 rotate-[-10deg] h-auto"
            />
          )}

          {/* Desktop Image ONLY if NOT limited */}
          {!isLimited && (
            <Image
              src={current.desktopImage}
              alt="product"
              width={500}
              height={500}
              priority
              className="hidden md:block mt-0 transition-all duration-700 rotate-[-15deg] h-auto"
            />
          )}
        </div>
      </section>
    </Link>
  );
}
