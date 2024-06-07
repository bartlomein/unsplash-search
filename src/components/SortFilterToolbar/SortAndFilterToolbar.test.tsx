import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SortAndFilterToolbar from "./SortAndFilterToolbar";
import {
  DROPDOWN_FILTER_COLORS,
  SORT_TYPES,
  FilterColorsT,
  SortTypesT,
} from "./utils";

const mockFilterColors = DROPDOWN_FILTER_COLORS as FilterColorsT[];
const mockSortTypes = SORT_TYPES as SortTypesT[];

describe("SortAndFilterToolbar", () => {
  const initialSort = mockSortTypes[0];
  const initialFilter = mockFilterColors[0];

  it("updates the sorting when a new option is selected", async () => {
    const setSelectedSort = jest.fn();
    render(
      <SortAndFilterToolbar
        selectedFilter={initialFilter}
        setSelectedFilter={jest.fn()}
        selectedSort={initialSort}
        setSelectedSort={setSelectedSort}
      />
    );

    const user = userEvent.setup();
    await user.click(screen.getByText(`Sorting by ${initialSort.label}`));
    await user.click(screen.getByText(mockSortTypes[1].label));

    expect(setSelectedSort).toHaveBeenCalledWith(mockSortTypes[1]);
  });
});
