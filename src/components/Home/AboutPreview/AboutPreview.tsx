"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
        
        {/* Text Content */}
        <div className="max-w-xl mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">About The Forgotten Tome</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            The Forgotten Tome is a sanctuary for book lovers, where timeless classics, hidden gems, and modern bestsellers come together. 
            Discover your next favorite read and dive into worlds you never imagined.
          </p>
          <Link href="/about">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
              Read More
            </Button>
          </Link>
        </div>

        {/* Optional Illustration */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="/images/about_preview.jpg"
            alt="Books illustration"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
