import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const BlogItems = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>

      <div className="blog__wrapper">
        {currentItems && currentItems.map((blog, index) => (
          <div key={index} className="blog__item blog__border-bottom mb-60 pb-60">
            <div className="blog__thumb fix">
              <Link href={`/blog-details/${blog.id}`}>
                <a className="w-img">
                  <img src={blog.img} alt="blog" />
                </a>
              </Link>
            </div>
            <div className="blog__content">
              <h4 className="blog__title">
                <Link href={`/blog-details/${blog.id}`}>
                  <a>{blog.title}</a>
                </Link>
              </h4>
              <div className="blog__meta">
                <span>By <a href="#">{blog.author}</a></span>
                <span>/ {blog.date}</span>
              </div>
              <p>{blog.desc}</p>
              <Link href={`/blog-details/${blog.id}`}>
                <a className="os-btn">read more</a>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-35">
        <div className="col-xl-12">
          <div className="shop-pagination-wrapper d-md-flex justify-content-between align-items-center">

            <div className="basic-pagination">
              <ReactPaginate
                nextLabel={<><i className="fal fa-angle-right"></i></>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
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
            </div>

            <div className="shop__header-left">
              <div className="show-text bottom">
                <span>Showing 1–{currentItems?.length} of {items?.length} results</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default BlogItems;