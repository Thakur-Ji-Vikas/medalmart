"use client";

import { useState } from "react";

export default function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "Trophies",
    description: "",
    featured: false,
    image: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("New Product:", form);

    alert("Product added successfully!");

    setForm({
      name: "",
      price: "",
      category: "Trophies",
      description: "",
      featured: false,
      image: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border bg-white p-6 shadow-sm"
    >
      {/* Product Name */}
      <input
        type="text"
        placeholder="Product Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
        className="w-full rounded-xl border p-3"
      />

      {/* Price */}
      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
        className="w-full rounded-xl border p-3"
      />

      {/* Category */}
      <select
        value={form.category}
        onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        }
        className="w-full rounded-xl border p-3"
      >
        <option>Trophies</option>
        <option>Medals</option>
        <option>Shields</option>
        <option>Corporate Awards</option>
      </select>

      {/* Description */}
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
        rows={4}
        className="w-full rounded-xl border p-3"
      />

      {/* Image URL */}
      <input
        type="text"
        placeholder="Image URL"
        value={form.image}
        onChange={(e) =>
          setForm({ ...form, image: e.target.value })
        }
        className="w-full rounded-xl border p-3"
      />

      {/* Featured */}
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={form.featured}
          onChange={(e) =>
            setForm({
              ...form,
              featured: e.target.checked,
            })
          }
        />

        Featured Product
      </label>

      {/* Submit */}
      <button
        className="rounded-xl bg-amber-600 px-6 py-3 text-white hover:bg-amber-700"
      >
        Save Product
      </button>
    </form>
  );
}