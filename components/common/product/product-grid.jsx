import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { add_force_page, add_item_offset, single_product } from '../../../redux/features/product-slice';
import { add_to_wishlist } from '../../../redux/features/wishlist-slice';
import { cart_product } from '../../../redux/features/cart-slice';
import Pagination from '../pagination';

function ProductGrid({ itemsPerPage,col = "col-xl-4 col-lg-4 col-md-6 col-sm-6 custom-col-10",items,setShowing}){
  const { forcePage, item_offset } = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  useEffect(() => {
    if (currentItems && setShowing) {
      setShowing(currentItems.length)
    }
  }, [currentItems, setShowing])

  useEffect(() => {
    dispatch(add_item_offset(itemOffset));
  }, [dispatch, itemOffset]);

  useEffect(() => {
    setItemOffset(item_offset);
  }, [item_offset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    dispatch(add_force_page(event.selected));
  };

  return (
    <>
      {currentItems && currentItems.map((product, index) => (
        <div key={index} className={col}>
          <div className="product__wrapper mb-60">
            <div className="product__thumb">
              <Link href={`/product-details/${product.id}`}>
                <a className="w-img">
                  <img src={product.img} alt="product-img" />
                  {product.thumb_img &&
                    <img className="product__thumb-2" src={product.thumb_img} alt="product-img" />
                  }
                </a>
              </Link>
              <div className="product__action transition-3">
                <button onClick={() => dispatch(add_to_wishlist(product))} data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                  <i className="fal fa-heart"></i>
                </button>
                <Link href={`/product-details/${product.id}`}>
                  <a data-bs-toggle="tooltip" data-bs-placement="top" title="Details">
                    <i className="fal fa-link"></i>
                  </a>
                </Link>
                {/* <!-- Button trigger modal --> */}
                <a onClick={() => dispatch(single_product(product.id))} href="#" data-bs-toggle="modal" 
                data-bs-target="#productModalId">
                  <i className="fal fa-search"></i>
                </a>
              </div>

              {product.product__sale && <div className="product__sale">
                {product.product__sale.map((item, index) => (
                  <span key={index} className={`${item === 'new' ? 'new' : 'percent'}`}>
                    {item}
                  </span>
                ))}
              </div>}

            </div>
            <div className="product__content p-relative">
              <div className="product__content-inner">
                <h4>
                  <Link href={`/product-details/${product.id}`}>
                    <a>{product.title}</a>
                  </Link>
                </h4>
                <div className="product__price transition-3">
                  <span>${product.price}</span>
                  {product.old_price && <span className="old-price">${product.old_price}</span>}
                </div>
              </div>
              <div className="add-cart p-absolute transition-3">
                <button onClick={() => dispatch(cart_product(product))}>+ Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="row mt-35">
        <div className="col-xl-12">
          <div className="shop-pagination-wrapper d-md-flex justify-content-between align-items-center">
            <div className="basic-pagination">
              <Pagination handlePageClick={handlePageClick} pageCount={pageCount} focusPage={forcePage} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}


export default ProductGrid;