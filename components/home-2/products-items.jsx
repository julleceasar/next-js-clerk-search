import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import { cart_product } from '../../redux/features/cart-slice';
import { single_product } from '../../redux/features/product-slice';
import { add_to_wishlist } from '../../redux/features/wishlist-slice';
import ProductModal from '../common/modal/product-modal';


// slick setting
const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
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


const ProductItems = () => {

  const products = useSelector(state => state.products.products);
  const trendingItems = products.filter(item => item.trending);
  const big_product = products.map(item => item.product).flat().filter(item => item.big);
  const dispatch = useDispatch();

  return (
    <>
      <section className="product__area pt-60 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__title-wrapper text-center mb-55">
                <div className="section__title mb-10">
                  <h2>Trending Products</h2>
                </div>
                <div className="section__sub-title">
                  <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="product__banner p-relative">
            {big_product.map(prd => (
              <div key={prd.id} className="product__banner-inner p-absolute fix d-none d-lg-block">
                <div className="product__banner-img">
                  <Link href={`/product-details/${prd.id}`}>
                    <a>
                      <img src={prd.img} alt="product-banner" />
                    </a>
                  </Link>
                </div>
                <div className="product__banner-content p-absolute">
                  <h4>
                    <Link href={`/product-details/${prd.id}`}>
                      <a>{prd.title}</a>
                    </Link>
                  </h4>
                  <Link href={`/product-details/${prd.id}`}>
                    <a className="link-btn">discover now</a>
                  </Link>
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6">
                <div className="product__slider-2">

                  <Slider {...settings}>
                    {
                      trendingItems.map((item, index) => {
                        return <div key={index}>
                          <div className="product__item">
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
                                      <button onClick={() => dispatch(add_to_wishlist(product))}
                                       data-bs-toggle="tooltip" data-bs-placement="top" 
                                      title="Add to Wishlist">
                                        <i className="fal fa-heart"></i>
                                      </button>
                                      <Link href={`/product-details/${product.id}`}>
                                        <a data-bs-toggle="tooltip" data-bs-placement="top" title="Details">
                                          <i className="fal fa-link"></i>
                                        </a>
                                      </Link>
                                      {/* <!-- Button trigger modal --> */}
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
                                        {product.old_price && <span className="old-price">${product.old_price}.00</span>}
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
        </div>
      </section>



      {/* product modal start */}
      <ProductModal />
      {/* product modal end */}

    </>
  );
};

export default ProductItems;