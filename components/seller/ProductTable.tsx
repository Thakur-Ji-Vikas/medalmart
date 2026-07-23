"use client";

import { products } from "@/data/products";
import ProductRow from "./ProductRow";

export default function ProductTable() {
  return (
    <div className="overflow-x-auto rounded-2xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-4 py-4 text-left">ID</th>

            <th className="px-4 py-4 text-left">Product</th>

            <th className="px-4 py-4 text-left">Category</th>

            <th className="px-4 py-4 text-left">Price</th>

            <th className="px-4 py-4 text-left">Featured</th>

            <th className="px-4 py-4 text-left">Actions</th>

          </tr>

        </thead>

        <tbody>

          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}