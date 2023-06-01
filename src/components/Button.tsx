import React from 'react'

export const Button = ({totalPages,handlePageChange}) => {
  return (
    <div >
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      className="border px-2 py-4"
      >
        {pageNumber}
      </button>
    ))}
  </div>
  )
}
