"use client";

import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  name: string;
  images: string[];
};

export default function ProductGallery({
  name,
  images,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="flex justify-center rounded-2xl bg-white p-8 shadow">
        <Image
          src={selectedImage}
          alt={name}
          width={450}
          height={450}
          className="object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              selectedImage === image
                ? "border-amber-500"
                : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={`${name} ${index + 1}`}
              width={90}
              height={90}
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}