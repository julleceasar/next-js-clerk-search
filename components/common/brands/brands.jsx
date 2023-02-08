import Slider from "react-slick";
import { brands } from "../../../data";

const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
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

const Brands = ({df}) => {
  return (
    <>
      <section className={`client__area ${df ? '' : 'pt-15 pb-140'}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className={`client__slider ${df ? 'pt-80 pb-80 border-top-1' : ''} text-center`}>
                <Slider {...settings}>
                  {
                    brands.map((item, index) => {
                      return <div key={item.id} className="client__thumb">
                        <a href="#">
                          <img src={item.img} alt="client" />
                        </a>
                      </div>
                    })
                  }
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;