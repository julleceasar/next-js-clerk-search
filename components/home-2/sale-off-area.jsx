import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";

import { cart_product } from "../../redux/features/cart-slice";
import { single_product } from "../../redux/features/product-slice";
import { add_to_wishlist } from "../../redux/features/wishlist-slice";
import ProductModal from "../common/modal/product-modal";


// slider setting
const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};

const SaleOffArea = () => {

  const saleOffProduct = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  // const saleOffProduct = products.map(item => item.product).slice(0,7);

  return (
    <>
      <section className="sale__area pb-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title-wrapper text-center mb-55">
                <div className="section__title mb-10">
                  <h2>Sale Off</h2>
                </div>
                <div className="section__sub-title">
                  <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="sale__area-slider-2">

                <Slider {...settings}>
                  {
                    saleOffProduct.slice(0, 7).map((item, index) => {
                      return <div key={index}>
                        <div className="sale__item">
                          {
                            item.product.map((product, index) => (
                              <div key={index} className="product__wrapper mb-60">
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

                                    <a onClick={() => dispatch(single_product(product.id))} href="#" data-bs-toggle="modal" data-bs-target="#productModalId">
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
                                      <span>${product.price}.00</span>
                                      <span className="old-price">${product.old_price}.00</span>
                                    </div>
                                  </div>
                                  <div className="add-cart p-absolute transition-3">
                                    <button onClick={() => dispatch(cart_product(product))}>+ Add to Cart</button>
                                  </div>
                                </div>
                              </div>
                            ))
                          }

                        </div>
                      </div>
                    })
                  }

                </Slider>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product modal start */}
      <ProductModal />
      {/* product modal end */}

    </>
  );
};

export default SaleOffArea;