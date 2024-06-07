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
      className="flex-row"
      style={{
        position: "relative",
        width: width,
        height: height,
      }}
    >
      <Image
        src={image.urls.small}
        alt={image.alt_description}
        width={width}
        height={height}
        quality={quality}
        style={{ objectFit: "contain" }}
        blurDataURL={image.blur_hash}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageComponent;
