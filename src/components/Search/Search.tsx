"use client";
import React, { useCallback } from "react";

import SortAndFilterToolbar from "../SortFilterToolbar/SortAndFilterToolbar";
import PaginationComponent from "../Pagination/Pagination";
import Images from "../Images/Images";
import InputAndButton from "../InputAndButton/InputAndButton";
import { useRouter } from "next/navigation";

import { FilterColorT, OrderByT } from "@/lib/api";
import { buildQuery } from "@/lib/api";

type SearchTypesT = {
  searchTerm?: string;
  selectedFilter: FilterColorT;
  selectedSort: OrderByT;
  selectedPage: number;
  totalPages: number | undefined;
  images: any;
};

const Search = ({
  searchTerm = "",
  selectedFilter,
  selectedSort,
  selectedPage,
  images,
  totalPages,
}: SearchTypesT) => {
  const router = useRouter();

  const memoizedOnSubmitPress = useCallback((value: string) => {
    const query = buildQuery(value, 1, selectedSort, selectedFilter);
    router.push(`/images/${query}`);
  }, []);

  const memoizedFilterChange = useCallback(
    (filter: FilterColorT) => {
      const query = buildQuery(searchTerm, 1, selectedSort, filter);
      router.push(`/images/${query}`);
    },
    [searchTerm, selectedSort]
  );

  const memoizedSortChange = useCallback(
    (sort: OrderByT) => {
      const query = buildQuery(searchTerm, 1, sort, selectedFilter);
      router.push(`/images/${query}`);
    },
    [searchTerm, selectedFilter]
  );

  const memoizedPageChange = useCallback(
    (page: number) => {
      const query = buildQuery(searchTerm, page, selectedSort, selectedFilter);
      router.push(`/images/${query}`);
    },
    [searchTerm, selectedFilter, selectedSort]
  );

  return (
    <div className="flex flex-col">
      <InputAndButton
        onButtonPress={memoizedOnSubmitPress}
        value={searchTerm}
      />

      {searchTerm ? (
        <SortAndFilterToolbar
          selectedFilter={selectedFilter}
          setSelectedFilter={memoizedFilterChange}
          selectedSort={selectedSort}
          setSelectedSort={memoizedSortChange}
        />
      ) : null}

      <Images images={images} />

      {totalPages ? (
        <PaginationComponent
          currentPage={selectedPage}
          setCurrentPage={memoizedPageChange}
          totalPages={totalPages}
        />
      ) : null}
    </div>
  );
};

export default Search;
