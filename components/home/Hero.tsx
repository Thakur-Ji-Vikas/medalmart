export default function Hero() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-3xl">

          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            India's Marketplace for
            <span className="text-yellow-600">
              {" "}Premium Medals & Trophies
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Discover medals, trophies, certificates, shields,
            and customized awards from trusted sellers across India.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="rounded-lg bg-yellow-600 px-6 py-3 text-white font-semibold hover:bg-yellow-700">
              Shop Now
            </button>

            <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100">
              Become a Seller
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}