import React from "react";

import { Button } from "@/components/ui/button";
import { DROPDOWN_FILTER_COLORS, SORT_TYPES } from "./utils";

import type { OrderByT, FilterColorT } from "@/lib/api";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SortAndFilterToolbarP = {
  selectedFilter: FilterColorT;
  setSelectedFilter: (filter: FilterColorT) => void;
  selectedSort: OrderByT;
  setSelectedSort: (sort: OrderByT) => void;
};

const SortAndFilterToolbar = ({
  selectedFilter,
  setSelectedFilter,
  selectedSort,
  setSelectedSort,
}: SortAndFilterToolbarP) => {
  const orderBy = SORT_TYPES.find((sortType) => sortType.id === selectedSort);

  const filterBy = DROPDOWN_FILTER_COLORS.find(
    (filterType) => filterType.id === selectedFilter
  );

  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-2">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">{`Sorting by ${orderBy?.label}`}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Colors</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {SORT_TYPES.map((sortType, index) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={index}
                    checked={selectedSort === sortType.id}
                    onCheckedChange={() => setSelectedSort(sortType.id)}
                  >
                    {sortType.label}
                  </DropdownMenuCheckboxItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {selectedFilter
                  ? `${filterBy?.label} filter selected`
                  : "No color filter selected"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Colors</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {DROPDOWN_FILTER_COLORS.map((color, index) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={index}
                    checked={selectedFilter === color.id}
                    onCheckedChange={() => setSelectedFilter(color.id)}
                  >
                    {color.label}
                  </DropdownMenuCheckboxItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SortAndFilterToolbar;
