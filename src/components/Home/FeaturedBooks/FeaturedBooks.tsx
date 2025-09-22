"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  author: string;
  rating: number;
  image: string;
}

// Fake data
const books: Book[] = [
  {
    id: 1,
    title: "The Great Adventure",
    author: "John Smith",
    rating: 4.5,
    image: "/images/books/book1.jpg",
  },
  {
    id: 2,
    title: "Mystery of the Lost City",
    author: "Emily White",
    rating: 4.7,
    image: "/images/books/book2.jpg",
  },
  {
    id: 3,
    title: "Journey Through Time",
    author: "David Brown",
    rating: 4.3,
    image: "/images/books/book3.jpg",
  },
  {
    id: 4,
    title: "Fantasy Realms",
    author: "Alice Green",
    rating: 4.6,
    image: "/images/books/book4.jpg",
  },
  {
    id: 5,
    title: "Science Wonders",
    author: "Michael Black",
    rating: 4.4,
    image: "/images/books/book5.jpg",
  },
];

export default function FeaturedBooks() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Books</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {books.map((book) => (
            <Link key={book.id} href={`/books/${book.id}`}>
              <Card className="hover:scale-105 transition-transform duration-300 cursor-pointer bg-white dark:bg-gray-800">
                <CardHeader className="p-0 relative h-60 w-full">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg font-semibold">{book.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                    {book.author}
                  </CardDescription>
                  <p className="mt-1 text-sm text-indigo-600 dark:text-indigo-400">
                    ⭐ {book.rating.toFixed(1)}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
