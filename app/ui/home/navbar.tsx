"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinks from "./nav-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const categories = [
    { name: "New Arrival", href: "/categories/new-arrival" },
    { name: "For Men", href: "/categories/men" },
    { name: "For Women", href: "/categories/women" },
    { name: "For Kids", href: "/categories/kids" },
    { name: "Clothing", href: "/categories/clothing" },
    { name: "Accessories", href: "/categories/accessories" },
    { name: "Sales", href: "/categories/sales" },
    { name: "Brand", href: "/categories/brand" },
    { name: "Fresh Sneakers", href: "/categories/fresh-sneakers" },
  ];

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50 w-full text-white">
      <div className="w-full px-4">
        {/* TOP ROW */}
        <div className="flex items-center h-16 w-full">
          {/* HAMBURGER */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-xl">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* LOGO */}
          <div className="flex-1 flex justify-center md:justify-start">
            <span className="text-lg md:text-xl font-bold text-white">
              KICKNET
            </span>
          </div>

          {/* DESKTOP SEARCH (WHITE) */}
          <div className="hidden md:flex flex-1 max-w-xs mx-6">
            <input
              type="text"
              placeholder="Search sneakers..."
              className="w-full px-3 py-2 text-sm bg-white text-black rounded-md border border-gray-300 placeholder-gray-500"
            />
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <NavLinks />
          </div>

          {/* MOBILE ICONS */}
          <div className="md:hidden flex ml-auto">
            <NavLinks />
          </div>
        </div>

        {/* DESKTOP CATEGORIES */}
        <div className="hidden md:flex justify-center gap-4 bg-black py-2 border-t border-white/10">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="px-3 py-1 rounded-md text-white hover:bg-white/10 text-sm"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* MOBILE SEARCH (same style as desktop) */}
        <div className="md:hidden px-4 py-2 border-t border-white/10">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search sneakers..."
              className="w-full px-3 py-2 text-sm bg-white text-black rounded-md border border-gray-300 placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2 border-t border-white/10 pt-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="block py-2 px-2 rounded-md text-white hover:bg-white/10 text-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
