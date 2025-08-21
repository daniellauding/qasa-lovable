import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showPageNumbers = true,
  showNavigation = true,
  maxVisiblePages = 5,
  className = '',
  ...props
}) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfVisible = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - halfVisible);
    let end = Math.min(totalPages, start + maxVisiblePages - 1);

    // Adjust if we're near the end
    if (end === totalPages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={`flex items-center justify-center space-x-4 ${className}`} {...props}>
      {/* Previous Button */}
      {showNavigation && (
        <Button
          iconOnly
          variant="transparent"
          size="xs"
          icon={<ChevronLeft className="h-5 w-5" />}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        />
      )}

      {/* Page Numbers */}
      {showPageNumbers && (
        <div className="flex items-center space-x-2">
          {visiblePages.map((page, index) => {
            const isFirst = index === 0;
            const isLast = index === visiblePages.length - 1;
            const showStartEllipsis = isFirst && page > 1;
            const showEndEllipsis = isLast && page < totalPages;

            return (
              <React.Fragment key={page}>
                {showStartEllipsis && (
                  <>
                    <button
                      onClick={() => handlePageChange(1)}
                      className="h-8 w-8 text-sm font-medium rounded-full transition-colors text-gray-70 hover:text-gray-90 hover:bg-gray-20"
                    >
                      1
                    </button>
                    <span className="text-gray-70">...</span>
                  </>
                )}
                
                <button
                  onClick={() => handlePageChange(page)}
                  className={`h-8 w-8 text-sm font-medium rounded-full transition-colors ${
                    page === currentPage
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-gray-70 hover:text-gray-90 hover:bg-gray-20'
                  }`}
                >
                  {page}
                </button>

                {showEndEllipsis && (
                  <>
                    <span className="text-gray-70">...</span>
                    <button
                      onClick={() => handlePageChange(totalPages)}
                      className="h-8 w-8 text-sm font-medium rounded-full transition-colors text-gray-70 hover:text-gray-90 hover:bg-gray-20"
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* Next Button */}
      {showNavigation && (
        <Button
          iconOnly
          variant="transparent"
          size="xs"
          icon={<ChevronRight className="h-5 w-5" />}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        />
      )}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  showPageNumbers: PropTypes.bool,
  showNavigation: PropTypes.bool,
  maxVisiblePages: PropTypes.number,
  className: PropTypes.string,
};

export default Pagination;
