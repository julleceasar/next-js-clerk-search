import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';

import { single_product } from '../../redux/features/product-slice';
import { SampleNextArrow, SamplePrevArrow } from '../../utils/slider-arrow';

// slick setting
const settings = {
  autoplay: false,
  autoplaySpeed: 10000,
  slidesToShow: 4,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
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


const FeatureProducts = () => {
  const products = useSelector(state => state.products.products);
  const fashion_products = products.map(item => item.product).flat().filter(item => item.feature_prd);
  const dispatch = useDispatch();
  return (
    <>
      <div className="product__slider-area pt-95 pb-60">
        <div className="container custom-container-2">
          <div className="row">
            <div className="col-xl-12">
              <div className="section__wrapper text-center">
                <h3 className="section__title-2"><span>FEATURED PRODUCTS</span></h3>
                <p>Claritas est etiam processus dynamicus, qui sequitur.</p>
              </div>
            </div>
          </div>
          <div className="row mt-40">
            <div className="col-lg-12">

              <Slider className='product__slider-active slick-gap slick-carousel' {...settings}>
                {
                  fashion_products.map((prd, index) => {
                    return <div key={index} className="product__slider-item">
                      <div className="product__item mb-40">
                        <div className="product__wrapper">
                          <div className="product__thumb">
                            <Link href={`/product-details/${prd.id}`}>
                              <a className="w-img">
                                <img src={prd.img} alt="product-img" />
                                <img className="product__thumb-2" src={prd.thumb_img} alt="product-img" />
                              </a>
                            </Link>
                            <div className="product__action-3 transition-3">
                              <Link href={`/product-details/${prd.id}`}>
                                <a className="action-btn">
                                  <i className="fal fa-plus"></i> Select Option</a>
                              </Link>

                              <a className="action-btn" onClick={() => dispatch(single_product(prd.id))} href="#"
                                data-bs-toggle="modal" data-bs-target="#productModalId">
                                <i className="fal fa-eye"></i>
                              </a>

                            </div>
                            {prd.new && <div className="product__sale product__sale-3">
                              <span className="new">new</span>
                            </div>}
                          </div>
                          <div className="product__content product__content-2 p-relative text-center">
                            <div className="product__content-inner">
                              <div className="rating">
                                <a href="#"><i className="fal fa-star"></i></a>
                                <a href="#"><i className="fal fa-star"></i></a>
                                <a href="#"><i className="fal fa-star"></i></a>
                                <a href="#"><i className="fal fa-star"></i></a>
                                <a href="#"><i className="fal fa-star"></i></a>
                              </div>
                              <h4>
                                <Link href={`/product-details/${prd.id}`}>
                                  <a>{prd.title}</a>
                                </Link>
                              </h4>
                              <div className="product__price-3">
                                <span>${prd.price}.00</span>
                                {prd.old_price && <span className="old-price">
                                  <del> ${prd.old_price}.00</del>
                                </span>}
                              </div>
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
    </>
  );
};

export default FeatureProducts;