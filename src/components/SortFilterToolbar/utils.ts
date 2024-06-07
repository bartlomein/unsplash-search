import { FilterColorT } from "@/hooks/useUnsplashSearch";
export type DropdownFilterColorsT = {
  label: string;
  id: FilterColorT | null;
};
export const DROPDOWN_FILTER_COLORS: DropdownFilterColorsT[] = [
  {
    label: "No color filter selected",
    id: null,
  },
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
