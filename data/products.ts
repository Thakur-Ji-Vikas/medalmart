import { Product } from "@/types/product";
export const products: Product[] = [
  {
    id: 1,
    name: "Premium Gold Trophy",
    slug: "premium-gold-trophy",
    price: 899,
    category: "Trophies",
    image: "/images/hero/trophy.webp",
    images: ["/images/hero/trophy.webp","/images/hero/award.webp","/images/hero/medal.webp"],
    featured: true,
    description:
      "Premium gold trophy suitable for schools, college and corporate award ceremonies.",
    reviews: [
      {
        id: 1,
        user: "Rahul",
        rating: 5,
        comment: "Excellent quality trophy.",
        date: "2026-07-01",
      },
      {
        id: 2,
        user: "Priya",
        rating: 4,
        comment: "Very nice finishing.",
        date: "2026-07-05",
      },
    ],
  },
  {
    id: 2,
    name: "Champion Medal",
    slug: "champion-medal",
    price: 149,
    category: "Medals",
    image: "/images/hero/medal.webp",
    images: ["/images/hero/medal.webp"],
    featured: true,
    description:
      "Premium champion medal suitable for schools, college and corporate award ceremonies.",
    reviews: [
      {
        id: 1,
        user: "Ankit",
        rating: 5,
        comment: "Perfect medal for school events.",
        date: "2026-07-03",
      },
    ],
  },
  {
    id: 3,
    name: "Wooden Award Shield",
    slug: "wooden-award-shield",
    price: 699,
    category: "Shields",
    image: "/images/hero/award.webp",
    images: [ "/images/hero/award.webp"],
    featured: true,
    description:
      "Premium wooden award shield suitable for schools, college and corporate award ceremonies.",
      reviews: [],
  },
  {
    id: 4,
    name: "Crystal Trophy",
    slug: "crystal-trophy",
    price: 1299,
    category: "Corporate Awards",
    image: "/images/hero/trophy1.webp",
    images: ["/images/hero/trophy1.webp"],
    featured: false,
    description:
      "Premium crystal trophy suitable for schools, college and corporate award ceremonies.",
      reviews: [],
  },
  {
    id: 5,
    name: "Silver Medal",
    slug: "silver-medal",
    price: 199,
    category: "Medals",
    image: "/images/hero/trophy2.webp",
    images: ["/images/hero/trophy2.webp"],
    featured: false,
    description:
      "Premium silver medal suitable for schools, college and corporate award ceremonies.",
      reviews: [],
  },
  {
    id: 6,
    name: "Premium Cup Trophy",
    slug: "premium-cup",
    price: 999,
    category: "Trophies",
    image: "/images/hero/trophy3.webp",
    images: ["/images/hero/trophy3.webp"],
    featured: false,
    description:
      "Premium premium cup trophy suitable for schools, college and corporate award ceremonies.",
      reviews: [],
  },
];
