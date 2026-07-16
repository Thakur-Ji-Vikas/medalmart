"use client";

import { useState } from "react";
import Image from "next/image";
import ThumbnailList from "./ThumbnailList";

type Props = {
  images: string[];
  productName: string;
};

export default function ProductGallery({
  images,
  productName,
}: Props) {
  // Main image currently displayed
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Product Image */}
      <div className="flex justify-center rounded-2xl bg-white p-8 shadow">
        <Image
          src={selectedImage}
          alt={productName}
          width={450}
          height={450}
          className="object-contain transition-all duration-300"
        />
      </div>

      {/* Thumbnail Images */}
      <ThumbnailList
        images={images}
        selectedImage={selectedImage}
        onSelect={setSelectedImage}
      />
    </div>
  );
}