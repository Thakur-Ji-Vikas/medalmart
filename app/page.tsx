import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold">
          Welcome to MedalMart 🏆
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          India's Marketplace for Trophies, Medals & Awards.
        </p>
      </main>
    </>
  );
}