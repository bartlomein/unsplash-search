import { FilterColorT, OrderByT } from "@/hooks/useUnsplashSearch";
export type FilterColorsT = {
  label: string;
  id: FilterColorT | null;
};

export type SortTypesT = {
  label: string;
  id: OrderByT;
};

export const INITIAL_COLOR_FILTER: FilterColorsT = {
  label: "No color filter selected",
  id: null,
};

export const DROPDOWN_FILTER_COLORS: FilterColorsT[] = [
  INITIAL_COLOR_FILTER,
  {
    label: "Black and white",
    id: "black_and_white",
  },
  {
    label: "Black",
    id: "black",
  },
  {
    label: "White",
    id: "white",
  },
  {
    label: "Yellow",
    id: "yellow",
  },
  {
    label: "Red",
    id: "red",
  },
  {
    label: "Purple",
    id: "purple",
  },
  {
    label: "Magenta",
    id: "magenta",
  },
  {
    label: "Green",
    id: "green",
  },
  {
    label: "Teal",
    id: "teal",
  },
  {
    label: "Blue",
    id: "blue",
  },
];

export const INITIAL_SORT_TYPE: SortTypesT = {
  label: "relevant",
  id: "relevant",
};

export const SORT_TYPES: SortTypesT[] = [
  INITIAL_SORT_TYPE,
  { label: "latest", id: "latest" },
];
