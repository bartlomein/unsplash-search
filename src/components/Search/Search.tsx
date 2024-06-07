"use client";
import React, { useState } from "react";

import { useUnsplashSearch } from "@/hooks/useUnsplashSearch";
import SortAndFilterToolbar from "../SortFilterToolbar/SortAndFilterToolbar";
import Pagination from "../Pagination/Pagination";
import Images from "../Images/Images";
import InputAndButton from "../InputAndButton/InputAndButton";
import { DropdownFilterColorsT } from "../SortFilterToolbar/utils";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilter, setSelectedFilter] =
    React.useState<DropdownFilterColorsT>({
      label: "No color filter selected",
      id: null,
    });

  const onTextChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitPress = () => {};
  const { data, isLoading } = useUnsplashSearch(
    searchTerm,
    1,
    selectedFilter.id
  );

  return (
    <div>
      <InputAndButton
        onTextChange={onTextChange}
        onButtonPress={onSubmitPress}
      />

      <SortAndFilterToolbar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <Images images={data} isLoading={isLoading} />
      <Pagination />
    </div>
  );
};

export default Search;
