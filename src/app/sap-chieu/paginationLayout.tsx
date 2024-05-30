"use client";
import { getMovieByOption } from "@/api/movie.api";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
export default function PaginationLayout({ totalPage }: { totalPage: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [visiblePages, setVisiblePages] = useState<number[]>([]);
  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);

    let startPage = 1;
    let endPage = totalPage;

    if (totalPage > 7) {
      startPage = Math.max(1, page - 1);
      endPage = Math.min(totalPage, page + 1);
    }

    setVisiblePages(
      Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      )
    );
  }, [searchParams, totalPage]);

  const handleClickPage = useCallback(
    (page: number) => {
      router.push(`${pathName}?page=${page || 1}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [router, pathName]
  );
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handleClickPage(currentPage - 1)}
          />
        </PaginationItem>
        {visiblePages.map((page) => (
          <PaginationItem
            key={page}
            className={`px-6 py-2 rounded-lg ${
              parseInt(searchParams.get("page") ?? "1") === page
                ? "bg-red-400"
                : ""
            }`}
            onClick={() => handleClickPage(page)}
          >
            {page}
          </PaginationItem>
        ))}
        {totalPage > 7 && currentPage > 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {totalPage > 7 && currentPage < totalPage - 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handleClickPage(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
