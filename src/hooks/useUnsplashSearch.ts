import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const unsplashBaseUrl = "https://api.unsplash.com";

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
  orderBy: OrderByT,
  filterColor?: FilterColorT | null
) => {
  let query = `${unsplashBaseUrl}/search/photos?page=${page}&query=${searchTerm}&order_by=${orderBy}&per_page=6`;
  if (filterColor) {
    query = `${query}&color=${filterColor}`;
  }

  return query;
};

export const useUnsplashSearch = (
  searchTerm: string,
  page: number,
  orderBy: OrderByT,
  filterColor?: FilterColorT | null
) => {
  const fetchUnsplashImages = async () => {
    const response = await fetch(
      buildUnsplashQuery(searchTerm, page, orderBy, filterColor),
      {
        method: "GET",
        headers: {
          "Accept-Version": "v1",
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
        },
      }
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, error, data, refetch } = useQuery({
    enabled: !!searchTerm,
    queryKey: [searchTerm, page, filterColor, orderBy],
    queryFn: () => fetchUnsplashImages(),
  });

  return { isLoading, error, data, refetch };
};
