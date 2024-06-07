import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { UnsplashImageT } from "@/types/images.types";

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
  filterColor?: FilterColorT | null,
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
  filterColor?: FilterColorT | null,
  orderBy?: OrderByT
) => {
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
  console.log("searchTerm", searchTerm);

  const { isLoading, error, data, refetch } = useQuery({
    enabled: !!searchTerm,
    queryKey: [searchTerm, page, filterColor, orderBy],
    queryFn: () => fetchUnsplashImages(),
  });

  return { isLoading, error, data, refetch };
};
