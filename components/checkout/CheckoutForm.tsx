import AddressForm from "./AddressForm";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import PlaceOrderButton from "./PlaceOrderButton";

export default function CheckoutForm() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">

      {/* Left Side */}
      <div className="lg:col-span-2">

        <AddressForm />

        <PaymentMethod />

      </div>

      {/* Right Side */}
      <div>

        <OrderSummary />

        <PlaceOrderButton />

      </div>

    </div>
  );
}