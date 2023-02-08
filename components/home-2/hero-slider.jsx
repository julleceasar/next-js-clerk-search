import Link from "next/link";
import Slider from "react-slick";

const homeSliderData = [
  {
    id: 1,
    bgImg: '/assets/img/slider/03/slider-01.jpg',
    dark: true,
    title: <>Lighting <br /> Creative Furniture</>,
    subtitle: <>From luxury watches and chronographs to wall clocks and weather stations, Henning Koppels.</>,
  },
  {
    id: 2,
    bgImg: '/assets/img/slider/03/slider-02.jpg',
    title: <>Clock <br /> Creative Furniture</>,
    subtitle: <>The Drop™ chair was designed by Arne Jacobsen in 1958 as part of his masterpiece, the legendary Radisson Blu Royal Hotel in Copenhagen.</>,
  },
  {
    id: 3,
    bgImg: '/assets/img/slider/03/slider-03.jpg',
    title: <>Drop Chair <br /> The Black Leather Edition</>,
    subtitle: <>From luxury watches and chronographs to wall clocks and weather stations, Henning Koppels.</>,
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
      <section className="slider__area slider__area-2 p-relative pl-15 pr-15">
        <Slider className='slider-active' {...settings}>
          {
            homeSliderData.map((slider, index) => {
              return <div key={index}>
                <div className="single-slider single-slider-2 slider__height-2 d-flex align-items-center"
                  style={{ backgroundImage: `url(${slider.bgImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xl-6 col-lg-7 col-md-10 col-sm-10 col-12">
                        <div className={`slider__content ${slider.dark ? 'slider__content-black' : ''} 
                        slider__content-3 pl-250 p-relative z-index-1`}>
                          <h2>{slider.title}</h2>
                          <p>{slider.subtitle} </p>
                          <div className="hero-slider-btn">
                            <Link href="/shop">
                              <a className={`os-btn ${slider.dark ? 'os-btn-white' : 'os-btn-2'}`}>Discover now</a>
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