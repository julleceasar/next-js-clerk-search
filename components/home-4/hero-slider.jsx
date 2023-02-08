import Link from "next/link";
import Slider from "react-slick";


const sliderData = [
  {
    id: 1,
    bgImg: '/assets/img/slider/04/slider-01.jpg',
    title: <>Handmade <br /> Hand carved Coffee</>,
    subtitle: <>As rich and unique as the coffee beans it is intended
      for, this little scoop will make your morning ritual a special occasion every day.</>,
  },
  {
    id: 2,
    bgImg: '/assets/img/slider/slider-2.jpg',
    title: <>Think Different &<br /> Do it otherwise</>,
    subtitle: <>As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.</>,
  },
  {
    id: 3,
    bgImg: '/assets/img/slider/slider-3.jpg',
    title: <>High Beam<br /> by Tom Chung</>,
    subtitle: <>As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.</>,
  },
]

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
      <section className="slider__area slider__area-4 p-relative">
        <Slider className='slider-active' {...settings}>

          {
            sliderData.map((slider, index) => {
              return <div key={index}>
                <div className="single-slider single-slider-2 slider__height-4 d-flex align-items-center"
                  style={{ backgroundImage: `url(${slider.bgImg})`, backgroundRepeat: 'no-repeat', 
                  backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7 col-md-9 col-sm-11 col-12">
                        <div className="slider__content slider__content-4 p-relative z-index-1">
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