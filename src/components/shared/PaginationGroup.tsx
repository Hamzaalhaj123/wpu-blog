"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious, 
} from "@/components/shared/Pagination";
import { useSearchParams } from "next/navigation";

type PaginationGroupProps = {
  
  currentPage: number;
  pageCount: number;
};

export default function PaginationGroup({ currentPage, pageCount }: PaginationGroupProps) {
  const searchParams = useSearchParams();

  const getPaginationUrl = (offset: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", (currentPage + offset).toString());
    return `?${newSearchParams.toString()}`;
  };

  return (
    <Pagination className="relative">
      <PaginationContent>
        {currentPage > 1 ? (
          <PaginationItem>
            <PaginationPrevious href={getPaginationUrl(-1)} />
          </PaginationItem>
        ) : null}
        {currentPage - 2 > 0 ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : null}
        {currentPage - 1 > 0 ? (
          <PaginationItem>
            <PaginationLink href={getPaginationUrl(-1)}>{currentPage - 1}</PaginationLink>
          </PaginationItem>
        ) : null}
        <PaginationItem>
          <PaginationLink href={getPaginationUrl(0)} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        {currentPage + 1 <= pageCount ? (
          <PaginationItem>
            <PaginationLink href={getPaginationUrl(1)}>{currentPage + 1}</PaginationLink>
          </PaginationItem>
        ) : null}
        {currentPage + 2 <= pageCount ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : null}
        {currentPage + 1 <= pageCount ? (
          <PaginationItem>
            <PaginationNext href={getPaginationUrl(1)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
