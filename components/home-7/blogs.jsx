import Link from "next/link";
import Slider from "react-slick";

import { blogs } from "../../data";
import { SampleNextArrow, SamplePrevArrow } from "../../utils/slider-arrow";

const blog_items = blogs.filter(blog => blog.blog_two);

// slider setting
const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
};


const Blogs = () => {
  return (
    <>
      <div className="blog__slider-area pt-100 pb-100">
        <div className="container custom-container-2">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-12">
                  <div className="section__wrapper text-center">
                    <h3 className="section__title-2"><span> From Our Blog </span></h3>
                    <p>Update The Latest Fashion Trends in The World</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-40">
            <div className="col-xl-12">
              <div className="blog__slider-active slick-gap slick-carousel">

                <Slider {...settings}>
                  {blog_items.map(blog => (
                    <div key={blog.id} className="blog__slider-item">
                      <div className="blog-thumb m-img">
                        <img src={blog.img} alt="blog-img" />
                        <Link href={`/blog-details/${blog.id}`}>
                          <a className="btn">
                            <i className="fa fa-link"></i>
                          </a>
                        </Link>
                      </div>
                      <div className="blog__post-content">
                        <div className="blog__wrapper">
                          <h5 className="blog__post-title">
                            <Link href={`/blog-details/${blog.id}`}>
                              <a>{blog.title}</a>
                            </Link>
                          </h5>
                          <div className="article-meta d-flex justify-content-center">
                            <span className="article-author"><span>By</span> {blog.author}</span>
                            <span> /</span>
                            <span className="article-publish">
                              <i className="fa fa-calendar-o"></i>{blog.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;