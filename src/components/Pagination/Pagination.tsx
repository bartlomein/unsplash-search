import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Dispatch, SetStateAction } from "react";
type PaginationComponentP = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
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
