import Slider from "react-slick";

import { brands } from "../../../data";
import { SampleNextArrow, SamplePrevArrow } from "../../../utils/slider-arrow";


const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
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


const Brands = () => {
  return (
    <>
      <div className="brand__area pb-90">
        <div className="container custom-container-2">
          <div className="brand__slider-active slick-carousel">

            <Slider {...settings}>
              {
                brands.map((item, index) => {
                  return <div key={item.id} className="brand__slider-item">
                    <div className="brand__image">
                      <img src={item.img} alt="client" />
                    </div>
                  </div>
                })
              }
            </Slider>

          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;