"use client";
import React, { useState, useCallback } from "react";

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

  const memoizedOnSubmitPress = useCallback((value: string) => {
    setCurrentPage(1);
    setSearchTerm(value);
  }, []);

  const memoizedFilterChange = useCallback((filter: FilterColorsT) => {
    setCurrentPage(1);
    setSelectedFilter(filter);
  }, []);

  const memoizedSortChange = useCallback((sort: SortTypesT) => {
    setCurrentPage(1);
    setSelectedSort(sort);
  }, []);

  const { data, isLoading, error } = useUnsplashSearch(
    searchTerm,
    currentPage,
    selectedSort.id,
    selectedFilter.id
  );

  const totalPages = data?.total_pages;

  return (
    <div className="flex flex-col">
      <InputAndButton onButtonPress={memoizedOnSubmitPress} />

      <SortAndFilterToolbar
        selectedFilter={selectedFilter}
        setSelectedFilter={memoizedFilterChange}
        selectedSort={selectedSort}
        setSelectedSort={memoizedSortChange}
      />

      {!error ? <Images images={data?.results} isLoading={isLoading} /> : null}
      {error ? (
        <div className="m-auto text-red-600" p-8>
          {error.message}
        </div>
      ) : null}
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
