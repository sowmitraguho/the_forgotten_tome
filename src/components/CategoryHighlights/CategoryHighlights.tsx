"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Fake data (will replace with backend)
const categories: Category[] = [
  {
    id: 1,
    name: "Fiction",
    description: "Immerse yourself in stories that spark the imagination.",
    image: "/images/categories/fiction.jpg",
  },
  {
    id: 2,
    name: "Non-Fiction",
    description: "Learn from real stories, biographies, and knowledge.",
    image: "/images/categories/nonfiction.jpg",
  },
  {
    id: 3,
    name: "Children",
    description: "Fun and educational books for young readers.",
    image: "/images/categories/children.jpg",
  },
  {
    id: 4,
    name: "Mystery & Thriller",
    description: "Exciting tales that keep you on the edge of your seat.",
    image: "/images/categories/mystery.jpg",
  },
  {
    id: 5,
    name: "Sci-Fi & Fantasy",
    description: "Explore new worlds and futuristic adventures.",
    image: "/images/categories/scifi.jpg",
  },
];

export default function CategoryHighlights() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Explore Categories</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer bg-white dark:bg-gray-800"
            >
              <CardHeader className="p-0">
                <div className="relative h-40 w-full">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold">{cat.name}</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300">{cat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
