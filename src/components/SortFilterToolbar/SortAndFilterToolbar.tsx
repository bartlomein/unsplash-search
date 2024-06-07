import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DROPDOWN_FILTER_COLORS, type DropdownFilterColorsT } from "./utils";
import { FilterColorT } from "@/hooks/useUnsplashSearch";
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
  selectedFilter: DropdownFilterColorsT;
  setSelectedFilter: Dispatch<SetStateAction<DropdownFilterColorsT>>;
};

const SortAndFilterToolbar = ({
  selectedFilter,
  setSelectedFilter,
}: SortAndFilterToolbarP) => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="airplane-mode">Sort by latest</Label>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {selectedFilter?.id
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
