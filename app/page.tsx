
import Navbar from "@/components/layout/Navbar";
import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />


      {/* <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold">
          Welcome to MedalMart 🏆
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          India's Marketplace for Trophies, Medals & Awards.
        </p>
      </main> */}
    </>
  );
}