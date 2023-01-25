import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import UserTable from "../UserTable";
import { GrNext, GrPrevious } from "react-icons/gr";

const PaginatedItems = ({
  itemsPerPage,
  items,
  goToEdit,
  handleDelete,
  total,
  fetchUser,
  pageNumber,
}: any) => {
  const currentItems = items;
  const pageCount = Math.ceil(total / itemsPerPage);

  const handlePageClick = (event: any) => {
    fetchUser(event.selected, itemsPerPage);
  };

  return (
    <>
      <UserTable
        user={currentItems}
        goToEdit={goToEdit}
        handleDelete={handleDelete}
      />
      <div className="paginate">
        <ReactPaginate
          activeClassName={"item active "}
          breakClassName={"item"}
          breakLabel="..."
          containerClassName={"pagination"}
          marginPagesDisplayed={2}
          nextClassName={"item next "}
          pageClassName={"item pagination-page "}
          nextLabel={<GrNext size={20} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousClassName={"item previous"}
          previousLabel={<GrPrevious size={20} />}
          forcePage={pageNumber}
        />
      </div>
    </>
  );
};

export default PaginatedItems;
