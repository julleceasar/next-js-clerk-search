import Link from "next/link";
import Slider from "react-slick";

import { home_slider } from "../../data";
// slick setting
const settings = {
  autoplay: false,
  autoplaySpeed: 10000,
  dots: true,
  fade: false,
  arrows: false,
  fade: true,
};

const HeroSlider = () => {
  return (
    <>
      <section className="slider__area slider__area-3 p-relative">

        <Slider className='slider-active' {...settings}>
          {
            home_slider.map((slider, index) => {
              return <div key={index}>
                <div className="single-slider single-slider-2 slider__height-5 d-flex align-items-center"
                  style={{ backgroundImage: `url(${slider.bgImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  <div className="container-fluid p-relative z-index-1">
                    <div className="row">
                      <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="slider__content slider__content-3 pl-250">
                          <h2>{slider.title}</h2>
                          <p>{slider.subtitle} </p>
                          <div className="hero-slider-btn">
                            <Link href={`/shop`}>
                              <a className="os-btn os-btn-2">Discover now</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </Slider>

      </section>
    </>
  );
};

export default HeroSlider;