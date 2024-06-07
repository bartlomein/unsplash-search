import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Images from "./Images"; // Update path if needed
import "@testing-library/jest-dom"; // Import jest-dom for custom matchers
import { UnsplashImageT } from "@/types/images.types";
import ImageComponent from "../ImageComponent/ImageComponent";

// Mock the ImageComponent to prevent unnecessary rendering
jest.mock("../ImageComponent/ImageComponent", () => {
  return ({ image, ...props }: any) => (
    <div data-testid="mocked-image-component">{image.description}</div>
  );
});

describe("Images Component", () => {
  test("renders loading message when isLoading is true", () => {
    render(<Images isLoading={true} />);
    const loadingElement = screen.getByText("Loading");
    expect(loadingElement).toBeInTheDocument();
  });

  test("renders no search message when images is undefined", () => {
    render(<Images isLoading={false} />);
    const noSearchMessageElement = screen.getByText(
      "Please search for an image in the searchbar"
    );
    expect(noSearchMessageElement).toBeInTheDocument();
  });

  test("renders no results message when images is an empty array", () => {
    render(<Images isLoading={false} images={[]} />);
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

    render(<Images isLoading={false} images={sampleImages} />);

    const imageElements = screen.getAllByTestId("mocked-image-component");
    expect(imageElements).toHaveLength(sampleImages.length);
    expect(imageElements[0]).toHaveTextContent(sampleImages[0].description);
    expect(imageElements[1]).toHaveTextContent(sampleImages[1].description);
  });
});
