import {
  Truck,
  Award,
  Palette,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick shipping across India with reliable logistics partners.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Carefully selected trophies and medals from trusted manufacturers.",
  },
  {
    icon: Palette,
    title: "Customization",
    description:
      "Engraving, logos, names and event branding available.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Sellers",
    description:
      "Every seller is reviewed before listing products.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Why Choose MedalMart?
          </h2>

          <p className="mt-3 text-gray-500">
            Everything you need for awards, recognition and celebrations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex justify-center">
                <item.icon
                  size={48}
                  className="text-yellow-600"
                />
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}