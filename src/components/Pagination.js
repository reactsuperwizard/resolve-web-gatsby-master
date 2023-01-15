import React from 'react';
import ReactPaginate from 'react-paginate';

import { screen } from '../constants';

const Pagination = ({ pageCount, perPage, onPageChange, ...props }) => {
  return (
    <>
      <ReactPaginate
        {...props}
        containerClassName="pagination"
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        breakLabel={'...'}
        onPageChange={onPageChange}
      />
      <style jsx global>{`
        .pagination {
          padding: 0;
          font-size: 18px;
          display: flex;
          justify-content: center;
          width: 50%;
          max-width: 350px;
          margin: 0 auto;
          list-style: none;
        }
        .pagination li {
          cursor: pointer;
          margin: 8px;
        }
        .pagination .disabled {
          opacity: 0.5 !important;
        }
        .pagination li:not(:first-child),
        .pagination li:not(:last-child) {
          opacity: 0.5;
        }
        .pagination li.selected,
        .pagination li.next,
        .pagination li.previous {
          opacity: 1;
        }
        @media (max-width: ${screen.mobileMax}px) {
          .pagination {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Pagination;
