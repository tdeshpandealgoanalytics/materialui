// src/pages/Cards.js
import React, { useState } from 'react';

const Cards = () => {
  const totalCards = 100;
  const cardsPerPage = 10;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, totalCards);

    const cards = [];
    for (let i = startIndex + 1; i <= endIndex; i++) {
      cards.push(
        <div key={i} className="card">
          <div className="card-body">
            <h5 className="card-title">Card {i}</h5>
            <p className="card-text">Description of Card {i}</p>
          </div>
        </div>
      );
    }
    return cards;
  };

  return (
    <div>
      <h1>Cards Page</h1>
      <p>Hello, this is the Cards page.</p>

      {/* Render Cards */}
      <div className="card-container">{renderCards()}</div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cards;