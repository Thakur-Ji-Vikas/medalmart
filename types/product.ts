import { Review } from "./review";

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  featured: boolean;
  description: string;
  
  reviews: Review[];
};