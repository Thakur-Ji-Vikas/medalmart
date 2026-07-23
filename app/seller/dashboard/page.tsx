import DashboardCard from "@/components/seller/DashboardCard";

export default function SellerDashboard() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">
        Seller Dashboard
      </h1>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="Products"
          value={24}
        />

        <DashboardCard
          title="Orders"
          value={136}
        />

        <DashboardCard
          title="Revenue"
          value="₹1,24,800"
        />

        <DashboardCard
          title="Customers"
          value={84}
        />
      </section>
    </>
  );
}