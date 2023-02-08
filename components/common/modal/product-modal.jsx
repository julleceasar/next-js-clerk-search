import Link from "next/link";
import { useDispatch } from "react-redux";

import useGlobalContext from "../../../hooks/use-context";
import { cart_product, decrease_quantity } from "../../../redux/features/cart-slice";

const ProductModal = () => {
  const {product} = useGlobalContext()
  const dispatch = useDispatch();
  const handleChange = () => {};
  const handleSubmit = e =>  e.preventDefault()

 
  return (
    <>
      <div className="modal fade" id="productModalId" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered product-modal" role="document">
          <div className="modal-content">
            <div className="product__modal-wrapper p-relative">
              <div className="product__modal-close p-absolute">
                <button data-bs-dismiss="modal"><i className="fal fa-times"></i></button>
              </div>
              <div className="product__modal-inner">
                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                    <div className="product__modal-box">
                      <div className="tab-content mb-20" id="nav-tabContent">
                        {product?.images?.map((img, index) => (
                          <div key={index} className={`tab-pane fade ${index === 0 ? 'show active' : ''} `}
                            id={`nav-${index}`} role="tabpanel" aria-labelledby={`nav-${index}-tab`}>
                            <div className="product__modal-img w-img">
                              <img src={img.src} alt="" />
                            </div>
                          </div>
                        ))}
                      </div>

                      <nav>
                        <div className="nav nav-tabs justify-content-between" id="nav-tab" role="tablist">
                          {product?.images?.map((img, index) => (
                            <a key={index} className={`nav-item nav-link ${index === 0 ? 'active' : ''}`}
                              id={`nav-${index}-tab`} data-bs-toggle="tab" href={`#nav-${index}`}
                              role="tab" aria-controls={`nav-${index}`}
                              aria-selected={index === 0 ? 'true' : 'false'}>
                              <div className="product__nav-img w-img">
                                <img src={img.src} alt="" />
                              </div>
                            </a>
                          ))}
                        </div>
                      </nav>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                    <div className="product__modal-content">
                      <h4>
                        <Link href={`/product-details/${product?.id}`}>
                          <a>{product?.title}</a>
                        </Link>
                      </h4>
                      <div className="rating rating-shop mb-15">
                        <ul>
                          <li><span><i className="fas fa-star"></i></span></li>
                          <li><span><i className="fas fa-star"></i></span></li>
                          <li><span><i className="fas fa-star"></i></span></li>
                          <li><span><i className="fas fa-star"></i></span></li>
                          <li><span><i className="fal fa-star"></i></span></li>
                        </ul>
                        <span className="rating-no ml-10">
                          {product?.rating} rating(s)
                        </span>
                      </div>
                      <div className="product__price-2 mb-25">
                        <span>${product?.price}</span>
                        <span className="old-price">${product?.old_price}</span>
                      </div>
                      <div className="product__modal-des mb-30">
                        <p>{product.desc}</p>
                      </div>
                      <div className="product__modal-form">
                        <form onSubmit={handleSubmit}>
                          <div className="product__modal-input size mb-20">
                            <label>Size <i className="fas fa-star-of-life"></i></label>
                            <select>
                              <option>- Please select -</option>
                              {product?.sizes?.map((size, index) => (
                                <option key={index}>{size}</option>
                              ))}
                            </select>
                          </div>
                          <div className="product__modal-input color mb-20">
                            <label>Color <i className="fas fa-star-of-life"></i></label>
                            <select>
                              <option>- Please select -</option>
                              {product?.colors?.map((color, index) => (
                                <option key={index}>{color}</option>
                              ))}
                            </select>
                          </div>
              
                          <div className="pro-quan-area d-lg-flex align-items-center">
                            <div className="pro-cart-btn">
                              <button onClick={() => dispatch(cart_product(product))}
                                className="os-btn os-btn-black os-btn-3 mr-10 text-center">+ Add to Cart</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;