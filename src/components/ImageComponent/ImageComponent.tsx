import React from "react";
import Image from "next/image";
import { UnsplashImageT } from "@/types/images.types";

type ImageComponentP = {
  image: UnsplashImageT;
  height: number;
  width: number;
  quality: number;
};

const ImageComponent = ({ image, width, height, quality }: ImageComponentP) => {
  return (
    <div className="flex-row">
      <Image
        src={image.urls.small}
        alt={image.alt_description}
        // layout="fill"
        width={width}
        height={height}
        quality={quality}
        className="object-cover"
        blurDataURL={image.blur_hash}
      />
    </div>
  );
};

export default ImageComponent;
