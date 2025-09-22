"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center justify-between px-6 py-16 lg:flex-row">

                {/* Left Content */}
                <div className="max-w-xl text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Discover Your Next <span className="text-indigo-600 dark:text-indigo-400">Great Read</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Explore timeless classics, hidden gems, and modern bestsellers — all in one place.
                        Dive into the world of stories waiting to be uncovered.
                    </p>
                    <div className="mt-6 flex justify-center lg:justify-start">
                        <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                            <a href="/categories">Browse Categories</a>
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="mt-10 w-full max-w-lg lg:mt-0 lg:w-1/2">
                    <Image
                        src="/images/hero_cover.jpg" // replace with your image in /public
                        alt="Bookshelf background"
                        width={600}
                        height={400}
                        className="rounded-xl object-cover shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
