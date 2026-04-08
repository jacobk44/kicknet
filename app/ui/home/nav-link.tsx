"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { UserIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

type NavLink = {
  name: string;
  href: string;
  icon: typeof UserIcon; // or more generally: React.ComponentType<{ className?: string }>
};

type NavLinksProps = {
  onLinkClick?: () => void;
};

const links: NavLink[] = [
  { name: "Account", href: "../services", icon: UserIcon },
  { name: "Wish", href: "../about", icon: HeartIcon },
  { name: "Cart", href: "../contacts", icon: ShoppingBagIcon },
];

export default function NavLinks({ onLinkClick }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={clsx(
              "flex h-[40px] grow items-center justify-center rounded-md  p-3 text-sm font-small hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              { "bg-sky-100 text-blue-600": pathname === link.href }
            )}
          >
            <LinkIcon className="w-6 h-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}