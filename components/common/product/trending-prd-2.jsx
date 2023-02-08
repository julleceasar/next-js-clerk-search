import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import { cart_product } from "../../../redux/features/cart-slice";
import { selectProducts, single_product } from "../../../redux/features/product-slice";
import { add_to_wishlist } from "../../../redux/features/wishlist-slice";
import ProductModal from "../modal/product-modal";


// slick setting
const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
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


const Products = () => {
  const products = useSelector(selectProducts);
  const products_1 = products.map(item => item.product).flat().slice(0, 3);
  const products_2 = products.map(item => item.product).flat().slice(3, 6);
  const big_2_product = products.map(item => item.product).flat().find(item => item.big_2);
  const big_3_product = products.map(item => item.product).flat().find(item => item.big_3);
  const dispatch = useDispatch();
  return (
    <>
      <section className="product__area pt-60 pb-65">
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
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="product__slider-3 owl-carousel">
                <Slider {...settings}>
                  {
                    products_1.map((item, index) => {
                      return <div key={index}>
                        <div className="product__item">

                          <div key={index} className="product__wrapper mb-60">
                            <div className="product__thumb">
                              <Link href={`/product-details/${item.id}`}>
                                <a className="w-img">
                                  <img src={item.img} alt="product-img" />
                                  {item.thumb_img &&
                                    <img className="product__thumb-2" src={item.thumb_img} alt="product-img" />
                                  }
                                </a>
                              </Link>
                              <div className="product__action transition-3">
                                <button onClick={() => dispatch(add_to_wishlist(item))} 
                                data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                                  <i className="fal fa-heart"></i>
                                </button>
                                <Link href={`/product-details/${item.id}`}>
                                  <a data-bs-toggle="tooltip" data-bs-placement="top" title="Details">
                                    <i className="fal fa-link"></i>
                                  </a>
                                </Link>
                                {/* <!-- Button trigger modal --> */}
                                <a onClick={() => dispatch(single_product(item.id))} href="#" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-search"></i>
                                </a>
                              </div>

                              {item.product__sale && <div className="product__sale">
                                {item.product__sale.map((item, index) => (
                                  <span key={index} className={`${item === 'new' ? 'new' : 'percent'}`}>
                                    {item}
                                  </span>
                                ))}
                              </div>}

                            </div>
                            <div className="product__content p-relative">
                              <div className="product__content-inner">
                                <h4>
                                  <Link href={`/product-details/${item.id}`}>
                                    <a>{item.title}</a>
                                  </Link>
                                </h4>
                                <div className="product__price transition-3">
                                  <span>${item.price}.00</span>
                                  <span className="old-price">${item.old_price}.00</span>
                                </div>
                              </div>
                              <div className="add-cart p-absolute transition-3">
                                <button onClick={() => dispatch(cart_product(item))}>+ Add to Cart</button>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    })
                  }

                </Slider>

              </div>
              <div className="product__banner  mb-30">
                <Link href={`/product-details/${big_3_product.id}`}>
                  <a className="w-img">
                    <img src={big_3_product.img} alt="" />
                  </a>
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="product__banner w-img pb-25 mb-30">
                <Link href={`/product-details/${big_2_product.id}`}>
                  <a className="w-img">
                    <img src={big_2_product.img} alt="" />
                  </a>
                </Link>
              </div>
              <div className="product__slider-3 owl-carousel">
                <Slider {...settings}>
                  {
                    products_2.map((item, index) => {
                      return <div key={index}>
                        <div className="product__item">
                          <div key={index} className="product__wrapper mb-60">
                            <div className="product__thumb">
                              <Link href={`/product-details/${item.id}`}>
                                <a className="w-img">
                                  <img src={item.img} alt="product-img" />
                                  <img className="product__thumb-2" src={item.thumb_img} alt="product-img" />
                                </a>
                              </Link>
                              <div className="product__action transition-3">
                                <button onClick={() => dispatch(add_to_wishlist(item))}
                                 data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
                                  <i className="fal fa-heart"></i>
                                </button>
                                <Link href={`/product-details/${item.id}`}>
                                  <a data-bs-toggle="tooltip" data-bs-placement="top" title="Details">
                                    <i className="fal fa-link"></i>
                                  </a>
                                </Link>
                                {/* <!-- Button trigger modal --> */}
                                <a onClick={() => dispatch(single_product(item.id))} href="#" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-search"></i>
                                </a>
                              </div>

                              {item.product__sale && <div className="product__sale">
                                {item.product__sale.map((item, index) => (
                                  <span key={index} className={`${item === 'new' ? 'new' : 'percent'}`}>
                                    {item}
                                  </span>
                                ))}
                              </div>}

                            </div>
                            <div className="product__content p-relative">
                              <div className="product__content-inner">
                                <h4>
                                  <Link href={`/product-details/${item.id}`}>
                                    <a>{item.title}</a>
                                  </Link>
                                </h4>
                                <div className="product__price transition-3">
                                  <span>${item.price}.00</span>
                                  <span className="old-price">${item.old_price}.00</span>
                                </div>
                              </div>
                              <div className="add-cart p-absolute transition-3">
                                <button onClick={() => dispatch(cart_product(item))}>+ Add to Cart</button>
                              </div>
                            </div>
                          </div>


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

export default Products;