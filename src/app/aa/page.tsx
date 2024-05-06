"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const range = 2; // Number of page numbers to show before and after current page

    for (let i = 1; i <= totalPages; i++) {
      const isCurrentPage = i === currentPage;
      const isInRange = Math.abs(currentPage - i) <= range;

      if (isCurrentPage || isInRange) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={isCurrentPage ? "active" : ""}
          >
            {i}
          </button>
        );
      } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
        pageNumbers.push("...");
      }
    }

    return pageNumbers;
  };

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      {renderPageNumbers()}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
