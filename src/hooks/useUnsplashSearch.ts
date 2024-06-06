import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const unsplashBaseUrl = "https://api.unsplash.com";

type UnsplashImageT = {
  id: string;
  urls: { regular: string };
  alt_description: string;
};

export type OrderByT = "latest" | "relevant";

export type FilterColorT =
  | "black_and_white"
  | "black"
  | "white"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "magenta"
  | "green"
  | "teal"
  | "blue";

const buildUnsplashQuery = (
  searchTerm: string,
  page: number,
  filterColor?: FilterColorT,
  orderBy?: OrderByT
) => {
  let query = `${unsplashBaseUrl}/search/photos?page=${page}&query=${searchTerm}`;
  if (filterColor) {
    query = `${query}&color=${filterColor}`;
  }
  if (orderBy) {
    query = `${query}&order_by=${orderBy}`;
  }
  return query;
};

export const useUnsplashSearch = (
  searchTerm: string,
  page: number,
  filterColor?: FilterColorT,
  orderBy?: OrderByT
) => {
  console.log(
    "process.env.UNSPLASH_ACCESS_KEY",
    process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
  );
  // ${unsplashBaseUrl}/search/photos?page=${page}&query=${searchTerm}&color=${filterColor}&order_by=${orderBy}

  const fetchUnsplashImages = async () => {
    const response = await fetch(
      buildUnsplashQuery(searchTerm, page, filterColor, orderBy),
      {
        method: "GET",
        headers: {
          "Accept-Version": "v1",
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
        },
      }
    );
    const data = await response.json();
    return data.results as UnsplashImageT[];
  };

  const { isLoading, error, data, refetch } = useQuery({
    enabled: !!searchTerm,
    queryKey: ["searchTerm", "page", "filterColor", "orderBy"],
    queryFn: () => fetchUnsplashImages(),
  });

  return { isLoading, error, data, refetch };
};
