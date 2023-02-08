import Slider from "react-slick";

import useGlobalContext from "../../../hooks/use-context";
import { SampleNextArrow, SamplePrevArrow } from "../../../utils/slider-arrow";
import SingleSmProduct from "./single-sm-product";


// slick setting
const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const ProductOffer = ({h4}) => {
  const {items} = useGlobalContext();
  return (
    <>
      <section className={`product__offer ${h4 ? 'pb-45' : 'pt-115 pb-50'}`}>
        <div className={`container ${h4 ? 'custom-container' : ''}`}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="product__offer-inner mb-30">
                <div className="product__title mb-60">
                  <h4>Top Seller Products</h4>
                </div>
                <div className="product__offer-slider">
                  <Slider {...settings}>
                    <div className="product__offer-wrapper">
                      <div className="sidebar__widget-content">
                        {items.slice(0, 3).map((item, index) => (
                          <SingleSmProduct key={index} product={item} />
                        ))}
                      </div>
                    </div>
                    <div className="product__offer-wrapper">
                      <div className="sidebar__widget-content">
                        {items.slice(3, 6).map((item, index) => (
                          <SingleSmProduct key={index} product={item} />
                        ))}
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="product__offer-inner mb-30">
                <div className="product__title mb-60">
                  <h4>On Sale Products</h4>
                </div>
                <div className="product__offer-slider owl-carousel">
                <Slider {...settings}>
                    <div className="product__offer-wrapper">
                      <div className="sidebar__widget-content">
                        {items.slice(6, 9).map((item, index) => (
                          <SingleSmProduct key={index} product={item} />
                        ))}
                      </div>
                    </div>
                    <div className="product__offer-wrapper">
                      <div className="sidebar__widget-content">
                        {items.slice(9, 12).map((item, index) => (
                          <SingleSmProduct key={index} product={item} />
                        ))}
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="product__offer-inner mb-30">
                <div className="product__title mb-60">
                  <h4>Top Rated Products</h4>
                </div>
                <div className="product__offer-slider owl-carousel">
                <Slider {...settings}>
                    <div className="product__offer-wrapper">
                      <div className="sidebar__widget-content">
                        {items.slice(12, 15).map((item, index) => (
                          <SingleSmProduct key={index} product={item} />
                        ))}
                      </div>
                    </div>
                    <div className="product__offer-wrapper">
                      <div className="sidebar__widget-content">
                        {items.slice(15, 18).map((item, index) => (
                          <SingleSmProduct key={index} product={item} />
                        ))}
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOffer;