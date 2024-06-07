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
  const { data, isLoading, error } = useUnsplashSearch(
    searchTerm,
    currentPage,
    selectedSort.id,
    selectedFilter.id
  );

  const totalPages = data?.total_pages;

  return (
    <div className="w-4/6 flex flex-col">
      <InputAndButton onButtonPress={onSubmitPress} />

      <SortAndFilterToolbar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />

      {!error ? <Images images={data?.results} isLoading={isLoading} /> : null}
      {error ? <div>{error.message}</div> : null}
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
