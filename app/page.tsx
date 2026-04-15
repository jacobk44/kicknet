"use client";

import { useState, useEffect } from "react";
import Hero from "@/app/ui/home/hero";
import { Button } from "@/app/ui/button";
import Link from "next/link";

const slides = [1, 2, 3]; // just for length control

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hero index={index} />

      <section className="text-center py-10">
        <h2 className="text-xl font-semibold">Your Seasonal Refresh</h2>
        <h3 className="text-sm">Save up to 30% on key styles now</h3>
        <div className="mt-1 flex justify-center">
          <Link href="/shop">
            <Button>Shop Now</Button>
          </Link>
        </div>

        {/* 🔥 Pagination moved HERE (top of page section) */}
        <div className="flex justify-center gap-3 py-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-black" : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
