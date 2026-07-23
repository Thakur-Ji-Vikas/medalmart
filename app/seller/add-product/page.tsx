import ProductForm from "@/components/seller/ProductForm";

export default function AddProduct() {
  return (
    <main className="mx-auto max-w-3xl">

      <h1 className="mb-8 text-4xl font-bold">
        Add Product
      </h1>

      <ProductForm />

    </main>
  );
}