"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
        
        {/* Logo & Quote */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-2">The Forgotten Tome</h3>
          <p className="text-gray-600 dark:text-gray-300">
            “Every book is a new adventure waiting to be discovered.”
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li><Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link></li>
            <li><Link href="/categories" className="hover:text-indigo-600 dark:hover:text-indigo-400">Categories</Link></li>
            <li><Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400">Privacy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-600 dark:hover:text-indigo-400"><Facebook size={24} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-600 dark:hover:text-indigo-400"><Twitter size={24} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-600 dark:hover:text-indigo-400"><Instagram size={24} /></a>
          </div>
        </div>

        {/* Optional Extra Info / Empty for Layout */}
        <div className="hidden lg:block"></div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 mt-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} The Forgotten Tome. All rights reserved.
      </div>
    </footer>
  );
}
