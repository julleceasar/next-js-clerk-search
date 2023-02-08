import Link from "next/link";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { blogs } from "../../data";

const items = blogs.slice(0, 8);

const BlogTwoCol = () => {
  return (
    <>
      <section className="blog__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <BlogItems itemsPerPage={6} items={items} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogTwoCol;


export const BlogItems = ({ itemsPerPage, items, colThree }) => {
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

      {currentItems && currentItems.map((item, index) => (
        <div key={index} className={colThree ? 'col-xl-4 col-lg-4 col-md-6' : "col-xl-6 col-lg-6 col-md-6"}>
          <div key={index} className="blog__item mb-60">
            <div className="blog__thumb fix">
              <Link href={`/blog-details/${item.id}`}>
                <a className="w-img">
                  <img src={item.img} alt="blog" />
                </a>
              </Link>
            </div>
            <div className="blog__content">
              <h4>
                <Link href={`/blog-details/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </h4>
              <div className="blog__meta">
                <span>By <a href="#">{item.author}</a></span>
                <span>/ {item.date}</span>
              </div>
              <p>{item.desc.substring(0, 120)}[...]</p>
              <Link href={`/blog-details/${item.id}`}>
                <a className="os-btn">read more</a>
              </Link>
            </div>
          </div>
        </div>
      ))}


      <div className="row ">
        <div className="col-xl-12">
          <div className="mt-35 shop-pagination-wrapper d-md-flex justify-content-between align-items-center">

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
  )
}