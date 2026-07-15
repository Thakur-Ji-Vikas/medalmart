import CheckoutForm from "@/components/checkout/CheckoutForm";

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="mb-10 text-4xl font-bold">
        Checkout
      </h1>

      <CheckoutForm />

    </main>
  );
}



// import CheckoutForm from "@/components/checkout/CheckoutForm";
// import AddressForm from "@/components/checkout/AddressForm";
// import PaymentMethod from "@/components/checkout/PaymentMethod";
// import OrderSummary from "@/components/checkout/OrderSummary";
// import PlaceOrderButton from "@/components/checkout/PlaceOrderButton";

// export default function CheckoutPage() {
//   return (
//     <main>
//       <CheckoutForm />
//       <AddressForm />
//       <PaymentMethod />
//       <OrderSummary />
//       <PlaceOrderButton />
//     </main>
//   );
// }