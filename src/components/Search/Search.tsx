"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import { useUnsplashSearch } from "@/hooks/useUnsplashSearch";
import SortAndFilterToolbar from "../SortFilterToolbar/SortAndFilterToolbar";
import Pagination from "../Pagination/Pagination";
import Images from "../Images/Images";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onTextChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const { data, isLoading } = useUnsplashSearch(searchTerm, 1);
  console.log("data", data);
  return (
    <div>
      <Input onChange={onTextChange} />
      <SortAndFilterToolbar />

      <Images images={data} isLoading={isLoading} />
      <Pagination />
    </div>
  );
};

export default Search;
