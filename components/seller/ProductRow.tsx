"use client";

import { Product } from "@/types/product";
import { Pencil, Trash2 } from "lucide-react";

type Props = {
  product: Product;
};

export default function ProductRow({ product }: Props) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="px-4 py-4">{product.id}</td>

      <td className="px-4 py-4">{product.name}</td>

      <td className="px-4 py-4">{product.category}</td>

      <td className="px-4 py-4">₹{product.price}</td>

      <td className="px-4 py-4">
        {product.featured ? "Yes" : "No"}
      </td>

      <td className="px-4 py-4">
        <div className="flex gap-3">

          <button className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600">
            <Pencil size={18} />
          </button>

          <button className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600">
            <Trash2 size={18} />
          </button>

        </div>
      </td>

    </tr>
  );
}