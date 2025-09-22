"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Williams",
    role: "Book Lover",
    message: "The Forgotten Tome helped me discover rare books I couldn't find anywhere else!",
    avatar: "/images/testimonials/sarah.jpg",
  },
  {
    id: 2,
    name: "James Miller",
    role: "Student",
    message: "I love browsing categories here – the site is clean, fast, and easy to use.",
    avatar: "/images/testimonials/james.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Writer",
    message: "A perfect platform for book enthusiasts. The recommendations are always on point!",
    avatar: "/images/testimonials/emily.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Readers Say</h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.id} className="bg-white dark:bg-gray-800 p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="flex items-center gap-4 p-0 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg font-semibold">{t.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-300">{t.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 dark:text-gray-200">{t.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
