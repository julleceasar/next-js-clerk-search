import Slider from "react-slick";
import { blogs } from "../../../data";
import Link from 'next/link';

const blog_items = blogs.filter(blog => blog.blog_one);

// slider setting
const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};


const BlogArea = ({ home_three, h4 }) => {
  return (
    <>
      <section className={`blog__area pb-70 ${home_three ? 'pt-90' : ''}`}>
        <div className={`container ${h4 ? 'custom-container' : ''}`}>
          <div className="row">
            <div className="col-xl-12">
              <div className={`section__title-wrapper text-center mb-55 ${h4 ? 'p-relative' : ''}`}>
                <div className="section__title mb-10">
                  <h2>Our Blog Posts</h2>
                </div>
                <div className="section__sub-title">
                  <p>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="blog__slider owl-carousel">

                <Slider {...settings}>
                  {
                    blog_items.map((item, index) => {
                      return <div key={index} className="blog__item mb-30">
                        <div className="blog__thumb fix">
                          <Link href={`/blog-details/${item.id}`}>
                            <a className="w-img">
                              <img src={item.img} alt="blog" />
                            </a>
                          </Link>
                        </div>
                        <div className="blog__content">
                          <h4>
                            <Link href={`/blog-details/${item.id}`}>
                              <a>{item.title}</a>
                            </Link>
                          </h4>
                          <div className="blog__meta">
                            <span>By <a href="#">{item.author}</a></span>
                            <span>/ {item.date}</span>
                          </div>
                          <p>{item.desc}</p>
                          <Link href={`/blog-details/${item.id}`}>
                            <a className="os-btn">read more</a>
                          </Link>
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
    </>
  );
};

export default BlogArea;