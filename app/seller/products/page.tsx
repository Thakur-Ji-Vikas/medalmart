import Link from "next/link";
import ProductTable from "@/components/seller/ProductTable";

export default function SellerProducts() {
  return (
    <main>

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          Seller Products
        </h1>

        <Link
          href="/seller/add-product"
          className="rounded-xl bg-amber-600 px-5 py-3 text-white hover:bg-amber-700"
        >
          + Add Product
        </Link>

      </div>

      <ProductTable />

    </main>
  );
}