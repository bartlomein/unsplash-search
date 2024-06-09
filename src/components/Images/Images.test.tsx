import React from "react";
import { render, screen } from "@testing-library/react";
import Images from "./Images";
import "@testing-library/jest-dom";
import { UnsplashImageT } from "@/types/images.types";

jest.mock("../ImageComponent/ImageComponent", () => {
  return ({ image, ...props }: any) => (
    <div data-testid="mocked-image-component">{image.description}</div>
  );
});

describe("Images Component", () => {
  test("renders no results message when images is an empty array", () => {
    render(<Images images={[]} />);
    const noResultsMessageElement = screen.getByText(
      "No images for this search"
    );
    expect(noResultsMessageElement).toBeInTheDocument();
  });

  test("renders ImageComponent for each image when images exist", () => {
    const sampleImages: UnsplashImageT[] = [
      { description: "Image 1", urls: { small: "url1" } },
      { description: "Image 2", urls: { small: "url2" } },
    ];

    render(<Images images={sampleImages} />);

    const imageElements = screen.getAllByTestId("mocked-image-component");
    expect(imageElements).toHaveLength(sampleImages.length);
    expect(imageElements[0]).toHaveTextContent(sampleImages[0].description);
    expect(imageElements[1]).toHaveTextContent(sampleImages[1].description);
  });
});
