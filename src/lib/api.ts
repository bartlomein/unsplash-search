const unsplashBaseUrl = "https://api.unsplash.com";

export type OrderByT = "latest" | "relevant";

export type FilterColorT =
  | "black_and_white"
  | "black"
  | "white"
  | "yellow"
  | "orange"
  | "red"
  | "purple"
  | "magenta"
  | "green"
  | "teal"
  | "blue"
  | "";

export const buildQuery = (
  searchTerm: string,
  page: number,
  orderBy: OrderByT = "relevant",
  filterColor?: FilterColorT | null,
  isUnsplash: boolean = false
) => {
  let query = `${
    isUnsplash ? `${unsplashBaseUrl}/search/photos` : ""
  }?page=${page}&query=${searchTerm}&order_by=${orderBy}${
    isUnsplash ? `&per_page=6` : ""
  }`;
  if (filterColor) {
    query = `${query}&color=${filterColor}`;
  }

  return query;
};

export const fetchUnsplashImages = async (
  searchTerm: string,
  page: number,
  orderBy: OrderByT,
  filterColor?: FilterColorT | null
) => {
  const response = await fetch(
    buildQuery(searchTerm, page, orderBy, filterColor, true),
    {
      method: "GET",
      headers: {
        "Accept-Version": "v1",
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
