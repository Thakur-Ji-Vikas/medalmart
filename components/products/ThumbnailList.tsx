"use client";

import Image from "next/image";

type Props = {
  images: string[];
  selectedImage: string;
  onSelect: (image: string) => void;
};

export default function ThumbnailList({
  images,
  selectedImage,
  onSelect,
}: Props) {
  return (
    <div className="mt-4 flex gap-3">

      {images.map((image) => (

        <button
          key={image}
          onClick={() => onSelect(image)}
          className={`overflow-hidden rounded-lg border-2 transition ${
            selectedImage === image
              ? "border-amber-500"
              : "border-gray-200"
          }`}
        >
          <Image
            src={image}
            alt="Thumbnail"
            width={80}
            height={80}
            className="object-contain p-2"
          />
        </button>

      ))}

    </div>
  );
}