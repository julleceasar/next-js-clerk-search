import ReactPaginate from 'react-paginate';

const Pagination = ({handlePageClick,pageCount,focusPage}) => {
  return (
    <ReactPaginate
      nextLabel={<><i className="fal fa-angle-right"></i></>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      forcePage={focusPage}
      previousLabel={<><i className="fal fa-angle-left"></i></>}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;