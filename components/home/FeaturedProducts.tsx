import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Premium Gold Trophy",
    price: "₹899",
    image: "/images/hero/trophy.webp",
  },
  {
    id: 2,
    name: "Champion Medal",
    price: "₹149",
    image: "/images/hero/medal.webp",
  },
  {
    id: 3,
    name: "Wooden Award Shield",
    price: "₹699",
    image: "/images/hero/award.webp",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <p className="mt-3 text-gray-500">
            Popular products loved by schools, colleges and companies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-72 items-center justify-center bg-white">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={220}
                  height={220}
                  className="object-contain"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-3 text-2xl font-bold text-yellow-600">
                  {product.price}
                </p>

                <button
                  className="mt-6 w-full rounded-xl bg-yellow-600 py-3 font-semibold text-white transition hover:bg-yellow-700"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}