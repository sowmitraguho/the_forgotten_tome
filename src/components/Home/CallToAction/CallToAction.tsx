"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-indigo-600 dark:bg-indigo-500 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Start your journey — Find your next read today
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          Explore thousands of books across genres, curated just for you.
        </p>
        <Link href="/categories">
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-indigo-600 dark:hover:bg-gray-200">
            Browse Categories
          </Button>
        </Link>
      </div>
    </section>
  );
}
