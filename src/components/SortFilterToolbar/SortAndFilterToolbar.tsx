import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DROPDOWN_FILTER_COLORS,
  SORT_TYPES,
  type FilterColorsT,
  type SortTypesT,
} from "./utils";

import { Dispatch, SetStateAction } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SortAndFilterToolbarP = {
  selectedFilter: FilterColorsT;
  setSelectedFilter: Dispatch<SetStateAction<FilterColorsT>>;
  selectedSort: SortTypesT;
  setSelectedSort: Dispatch<SetStateAction<SortTypesT>>;
};

const SortAndFilterToolbar = ({
  selectedFilter,
  setSelectedFilter,
  selectedSort,
  setSelectedSort,
}: SortAndFilterToolbarP) => {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">{`Sorting by ${selectedSort.label}`}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Colors</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {SORT_TYPES.map((sortType, index) => {
              return (
                <DropdownMenuCheckboxItem
                  key={index}
                  checked={selectedSort.id === sortType.id}
                  onCheckedChange={() => setSelectedSort(sortType)}
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
              {selectedFilter.id
                ? `${selectedFilter.label} filter selected`
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
                  checked={selectedFilter.id === color.id}
                  onCheckedChange={() => setSelectedFilter(color)}
                >
                  {color.label}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SortAndFilterToolbar;
