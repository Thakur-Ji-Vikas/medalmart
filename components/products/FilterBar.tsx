"use client";

type FilterBarProps = {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

export default function FilterBar({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 rounded-lg border p-3"
      />

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="rounded-lg border p-3"
      >
        <option>All</option>
        <option>Trophies</option>
        <option>Medals</option>
        <option>Shields</option>
        <option>Corporate Awards</option>
      </select>

    </div>
  );
}






// export default function FilterBar() {
//   return (
//     <section className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">

//       <input
//         type="text"
//         placeholder="Search products..."
//         className="border rounded-lg px-4 py-3 w-full md:w-80"
//       />

//       <select className="border rounded-lg px-4 py-3">
//         <option>All Categories</option>
//         <option>Trophies</option>
//         <option>Medals</option>
//         <option>Certificates</option>
//       </select>

//     </section>
//   );
// }