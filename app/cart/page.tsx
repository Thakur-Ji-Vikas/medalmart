"use client";

import { useCart } from "@/hooks/useCart";
import Image from "next/image";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        <p className="text-gray-500 text-lg">
          Your cart is empty.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="space-y-6">

        {cart.map((item) => (

          <div
            key={item.id}
            className="flex items-center gap-6 rounded-xl border p-6"
          >

            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="object-contain"
            />

            <div className="flex-1">

              <h2 className="text-2xl font-semibold">
                {item.name}
              </h2>

              <p className="mt-2 text-amber-600 font-bold">
                ₹{item.price}
              </p>

              <div className="mt-4 flex items-center gap-3">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 rounded bg-gray-200"
                >
                  −
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-3 py-1 rounded bg-gray-200"
                >
                  +
                </button>

              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-4 text-red-600 hover:underline"
              >
                Remove
              </button>

            </div>

            <div className="text-xl font-bold">
              ₹{item.price * item.quantity}
            </div>

          </div>

        ))}

      </div>

      <div className="mt-10 border-t pt-6 flex justify-between items-center">

        <h2 className="text-3xl font-bold">
          Subtotal
        </h2>

        <p className="text-3xl font-bold text-amber-600">
          ₹{subtotal}
        </p>

      </div>

      <button className="mt-8 w-full rounded-xl bg-amber-600 py-4 text-white font-semibold hover:bg-amber-700">
        Proceed to Checkout
      </button>

    </main>
  );
}





// // export default function CartPage() {
// //   return (
// //     <div className="container mx-auto px-6 py-20">
// //       <h1 className="text-4xl font-bold">Shopping Cart</h1>
// //     </div>
// //   );
// // }


// "use client";

// import { useCart } from "@/hooks/useCart";

// export default function CartPage() {
//   const { cart } = useCart();

//   return (
//     <main className="max-w-6xl mx-auto px-6 py-10">
//       <h1 className="text-4xl font-bold mb-8">
//         Shopping Cart
//       </h1>

//       {cart.length === 0 ? (
//         <p className="text-gray-500">
//           Your cart is empty.
//         </p>
//       ) : (
//         <div className="space-y-6">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="rounded-xl border p-6"
//             >
//               <h2 className="text-2xl font-semibold">
//                 {item.name}
//               </h2>

//               <p className="mt-2">
//                 ₹{item.price}
//               </p>

//               <p className="mt-2">
//                 Quantity: {item.quantity}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }


