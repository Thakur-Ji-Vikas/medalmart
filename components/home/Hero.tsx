import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-yellow-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">

        {/* Left */}

        <div className="max-w-2xl">

          <p className="mb-3 text-yellow-600 font-semibold uppercase tracking-widest">
            Welcome to MedalMart
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
            Celebrate Every
            <span className="text-yellow-600"> Achievement.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Buy premium trophies, medals, certificates, shields,
            mementos and custom awards directly from trusted sellers
            across India.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="rounded-xl bg-yellow-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-yellow-700">
              Shop Now
            </button>

            <button className="rounded-xl border border-gray-300 px-7 py-4 font-semibold transition hover:bg-white">
              Become a Seller
            </button>

          </div>

          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>
              <h2 className="text-3xl font-bold text-yellow-600">
                500+
              </h2>

              <p className="text-gray-500">
                Sellers
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-600">
                10K+
              </h2>

              <p className="text-gray-500">
                Awards Sold
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-yellow-600">
                50+
              </h2>

              <p className="text-gray-500">
                Categories
              </p>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="relative flex justify-center">

          <div className="absolute h-96 w-96 rounded-full bg-yellow-200 blur-3xl opacity-40"></div>

         <Image
         src="/images/hero/trophy3.webp"
         alt="Gold Trophy"
         width={550}
         height={550}
         className="relative rounded-4xl"
         priority
        
        />

        </div>

      </div>
    </section>
  );
}











// export default function Hero() {
//   return (
//     <section className="bg-gray-50 py-24">
//       <div className="mx-auto max-w-7xl px-6">

//         <div className="max-w-3xl">

//           <h1 className="text-5xl font-bold leading-tight text-gray-900">
//             India's Marketplace for
//             <span className="text-yellow-600">
//               {" "}Premium Medals & Trophies
//             </span>
//           </h1>

//           <p className="mt-6 text-lg text-gray-600">
//             Discover medals, trophies, certificates, shields,
//             and customized awards from trusted sellers across India.
//           </p>

//           <div className="mt-8 flex gap-4">

//             <button className="rounded-lg bg-yellow-600 px-6 py-3 text-white font-semibold hover:bg-yellow-700">
//               Shop Now
//             </button>

//             <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100">
//               Become a Seller
//             </button>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }