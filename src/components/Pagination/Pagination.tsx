import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationComponentP = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

const PaginationComponent = ({
  setCurrentPage,
  currentPage,
  totalPages,
}: PaginationComponentP) => {
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={
                currentPage > 1
                  ? () => setCurrentPage(currentPage - 1)
                  : () => null
              }
            />
          </PaginationItem>
          <PaginationItem>
            <div>{`Page ${currentPage} of ${totalPages}`}</div>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={
                currentPage < totalPages
                  ? () => setCurrentPage(currentPage + 1)
                  : () => null
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
