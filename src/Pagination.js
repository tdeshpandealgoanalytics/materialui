import React, { useState } from 'react';
import './Pagination.css';
const Pagination = () => {
  const linesPerPage = 10;
  const totalLines = 100;
  const totalPages = Math.ceil(totalLines / linesPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderLines = () => {
    const lines = [];

    for (let i = (currentPage - 1) * linesPerPage + 1; i <= currentPage * linesPerPage; i++) {
      lines.push(<div key={i}>Line {i}</div>);
    }

    return lines;
  };

  const renderPagination = () => {
    const paginationItems = [];

    for (let page = 1; page <= totalPages; page++) {
      paginationItems.push(
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      );
    }

    return paginationItems;
  };

  return (
    <div className="container">
      <h1>Pagination Example</h1>
      <div className="lines">
        {renderLines()}
      </div>
      <div className="pagination-container">
      <div className="pagination">
        {renderPagination()}
      </div>
      </div>
    </div>
  );
};

export default Pagination;