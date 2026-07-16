"use client";

type Props = {
  category: string;
  setCategory: (value: string) => void;
};

const categories = [
  "All",
  "Trophies",
  "Medals",
  "Shields",
  "Corporate Awards",
];

export default function CategoryFilter({
  category,
  setCategory,
}: Props) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="rounded-xl border p-3"
    >
      {categories.map((item) => (
        <option
          key={item}
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
}