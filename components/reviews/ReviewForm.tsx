"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Review submission will be connected to the backend later.");

    setName("");
    setComment("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-xl border p-6"
    >
      <h2 className="mb-6 text-2xl font-bold">
        Write a Review
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 w-full rounded-lg border p-3"
        required
      />

      <textarea
        placeholder="Your Review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="mb-4 h-32 w-full rounded-lg border p-3"
        required
      />

      <Button type="submit">
        Submit Review
      </Button>
    </form>
  );
}