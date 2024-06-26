import React from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import { UnsplashImageT } from "@/types/images.types";

type ImagesP = {
  images?: UnsplashImageT[];
};

const Images = ({ images }: ImagesP) => {
  if (images?.length == 0) {
    return <div className="m-auto p-8">No images for this search</div>;
  }
  return (
    <div className="grid auto-cols-auto  lg:grid-cols-3 md:grid-cols-2 p-4 auto-cols-max gap-8 m-auto">
      {images?.map((elem, index) => {
        return (
          <ImageComponent
            image={elem}
            height={300}
            width={300}
            quality={70}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Images;
