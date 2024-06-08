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
    <div
      style={{
        position: "relative",
        width: width,
        height: height,
      }}
    >
      <Image
        src={image.urls.small}
        alt={image.alt_description}
        fill
        quality={quality}
        style={{ objectFit: "cover" }}
        blurDataURL={image.blur_hash}
      />
    </div>
  );
};

export default ImageComponent;
