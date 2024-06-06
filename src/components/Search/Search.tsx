"use client";
import React, { useState } from "react";
import Input from "../Input/Input";
import { useUnsplashSearch } from "@/hooks/useUnsplashSearch";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const onTextChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const { data } = useUnsplashSearch(searchTerm, 1);

  console.log("data", data);

  console.log(searchTerm);
  return (
    <div>
      <Input onChange={onTextChange} />
    </div>
  );
};

export default Search;
