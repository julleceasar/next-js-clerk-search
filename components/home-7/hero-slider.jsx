import Link from 'next/link';
import Slider from 'react-slick';

import { slider_data_7 } from '../../data';
import { SampleNextArrow, SamplePrevArrow } from '../../utils/slider-arrow';


// slick setting
const settings = {
  autoplay: false,
  autoplaySpeed: 10000,
  dots: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  fade: true,
};

const HeroSlider = () => {
  return (
    <>
      <section className="slider__area slider__area-3 p-relative">
        <Slider className='slider-active-3' {...settings}>
          {
            slider_data_7.map((slider, index) => {
              return <div key={index}>
                <div className="single-slider single-slider-2 slider__height-6 d-flex align-items-center"
                  style={{ backgroundImage: `url(${slider.bgImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  <div className="container custom-container-2">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-10">
                        <div className='slider__content slider__content-5'>
                          <span className={`${slider.meta ? 'meta' : ''}`}>{slider.sm_title}</span>
                          <h2>{slider.title}</h2>
                          <p>{slider.subtitle} </p>
                          <div className="hero-slider-btn">
                            <Link href="/shop">
                              <a className="os-btn-4">Discover now</a>
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