"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  UserIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Account", href: "../services", icon: UserIcon },
  { name: "Wish", href: "../about", icon: HeartIcon },
  { name: "Cart", href: "../contacts", icon: ShoppingBagIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {/* DESKTOP: grouped white pill */}
      <div className="hidden md:flex items-center bg-white rounded-md px-2 py-1 gap-1">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex items-center gap-1 px-3 py-2 rounded-md text-black hover:bg-gray-200 transition",
                { "bg-gray-200": pathname === link.href },
              )}
            >
              <Icon className="w-5 h-5 text-black" />
              <span className="text-sm font-medium">{link.name}</span>
            </Link>
          );
        })}
      </div>

      {/* MOBILE: only icons (no background) */}
      <div className="md:hidden flex items-center gap-4 text-white">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link key={link.name} href={link.href}>
              <Icon className="w-6 h-6 text-white" />
            </Link>
          );
        })}
      </div>
    </>
  );
}
