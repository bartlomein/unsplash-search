import React from "react";
import ImageComponent from "../ImageComponent/ImageComponent";
import { UnsplashImageT } from "@/types/images.types";

type ImagesP = {
  images?: UnsplashImageT[];
  isLoading: boolean;
};

const Images = ({ images, isLoading }: ImagesP) => {
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (!images) {
    return <div>Please search for an image in the searchbar</div>;
  }
  if (images?.length == 0) {
    return <div>No images for this search</div>;
  }
  return (
    <div className="flex flex-wrap gap-8">
      {images.map((elem, index) => {
        return (
          <ImageComponent
            image={elem}
            height={400}
            width={400}
            quality={70}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Images;
