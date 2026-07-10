export default function FilterBar() {
  return (
    <section className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">

      <input
        type="text"
        placeholder="Search products..."
        className="border rounded-lg px-4 py-3 w-full md:w-80"
      />

      <select className="border rounded-lg px-4 py-3">
        <option>All Categories</option>
        <option>Trophies</option>
        <option>Medals</option>
        <option>Certificates</option>
      </select>

    </section>
  );
}