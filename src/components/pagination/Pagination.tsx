import React from 'react'

interface PaginationProps {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    itemsPerPage: number;
    totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage, itemsPerPage, totalItems }) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="join flex justify-center mt-5">
            {Array.from({ length: totalPages }, (_, index) => (
                <input
                    key={index + 1}
                    className="join-item btn btn-square"
                    type="radio"
                    name="options"
                    aria-label={(index + 1).toString()}
                    checked={currentPage === index + 1}
                    onChange={() => setCurrentPage(index + 1)}
                />
            ))}
        </div>
    )
}

export default Pagination