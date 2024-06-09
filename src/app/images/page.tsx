import React from "react";

import { QueryClient } from "@tanstack/react-query";
import { fetchUnsplashImages } from "@/lib/api";
import Search from "@/components/Search/Search";
import { OrderByT, FilterColorT } from "@/lib/api";
import { UnsplashImageT } from "@/types/images.types";

type SearchParamsP = {
  searchParams: {
    page: number;
    query: string;
    order_by: OrderByT;
    color: FilterColorT;
  };
};

type APIResultT = {
  results: UnsplashImageT[];
  total_pages: number;
  errors?: string[];
};

const ImagesPage = async ({ searchParams }: SearchParamsP) => {
  const queryClient = new QueryClient();
  const page = Number(searchParams.page);
  const searchTerm = (searchParams.query as string) || "";
  const order_by = searchParams.order_by;
  const color = searchParams.color;

  let data: APIResultT | undefined;
  let error;

  try {
    data = await queryClient.fetchQuery({
      queryKey: [searchTerm, page, order_by],
      queryFn: () => fetchUnsplashImages(searchTerm, page, order_by, color),
    });
  } catch (e) {
    error = e;
  }

  return (
    <div>
      <Search
        images={data?.results}
        selectedSort={order_by}
        selectedPage={page}
        searchTerm={searchTerm}
        selectedFilter={color}
        totalPages={data?.total_pages}
      />

      {error ? (
        <div className="text-center	text-red-600" p-8>
          {JSON.stringify((error as Error)?.message)}
        </div>
      ) : null}

      {data?.errors ? (
        <div>
          {data.errors.map((err) => (
            <div className="text-center	text-red-600" p-8>
              {err}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ImagesPage;
