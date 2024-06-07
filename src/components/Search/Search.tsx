"use client";
import React, { useState } from "react";

import { useUnsplashSearch } from "@/hooks/useUnsplashSearch";
import SortAndFilterToolbar from "../SortFilterToolbar/SortAndFilterToolbar";
import PaginationComponent from "../Pagination/Pagination";
import Images from "../Images/Images";
import InputAndButton from "../InputAndButton/InputAndButton";
import {
  FilterColorsT,
  SortTypesT,
  INITIAL_COLOR_FILTER,
  INITIAL_SORT_TYPE,
} from "../SortFilterToolbar/utils";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilter, setSelectedFilter] =
    useState<FilterColorsT>(INITIAL_COLOR_FILTER);
  const [selectedSort, setSelectedSort] =
    useState<SortTypesT>(INITIAL_SORT_TYPE);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onSubmitPress = (value: string) => {
    setCurrentPage(1);
    setSearchTerm(value);
  };
  const { data, isLoading } = useUnsplashSearch(
    searchTerm,
    currentPage,
    selectedFilter.id,
    selectedSort.id
  );

  const totalPages = data?.total_pages;

  return (
    <div>
      <InputAndButton onButtonPress={onSubmitPress} />

      <SortAndFilterToolbar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />

      <Images images={data?.results} isLoading={isLoading} />
      {totalPages ? (
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      ) : null}
    </div>
  );
};

export default Search;
