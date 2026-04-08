"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinks from "./nav-link"; // other links like Home, Cart, etc.

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
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full px-4">
        {/* TOP ROW */}
        <div className="flex items-center h-16 w-full">
          {/* LEFT: Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 text-xl">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>

          {/* CENTER: Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <span className="text-lg md:text-xl font-bold text-blue-700">
              KICKNET
            </span>
          </div>

          {/* DESKTOP: Search */}
          <div className="hidden md:flex flex-1 max-w-xs mx-6">
            <input
              type="text"
              placeholder="Search sneakers..."
              className="w-full px-3 py-1 text-sm border rounded-md"
            />
          </div>

          {/* DESKTOP: NavLinks */}
          <div className="hidden md:flex items-center gap-6 ml-auto">
            <NavLinks />
          </div>

          {/* MOBILE: NavLinks icons */}
          <div className="md:hidden flex ml-auto">
            <NavLinks />
          </div>
        </div>

        {/* DESKTOP CATEGORIES SUBMENU */}
        <div className="hidden md:flex justify-center gap-4 border-t border-gray-200 bg-gray-50 py-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="px-3 py-1 rounded-md hover:bg-sky-100 hover:text-blue-600 font-medium text-gray-700 text-sm"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* MOBILE SEARCH BAR */}
        <div className="md:hidden pb-3 border-t">
          <div className="flex items-center mt-3 border rounded-full px-4 py-2 bg-gray-100">
            <input
              type="text"
              placeholder="Search sneakers..."
              className="w-full text-sm bg-transparent outline-none"
            />
            <span className="text-gray-500 text-lg ml-2">🔍</span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2 border-t pt-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="block py-2 px-2 rounded-md hover:bg-sky-100 hover:text-blue-600 font-medium text-gray-700 text-sm"
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