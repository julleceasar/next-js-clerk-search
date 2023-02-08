import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { blogs } from '../../data';

const items = blogs.filter(blog => blog.masonry).reverse();

const BlogTwoCalMas = () => {
  return (
    <>
      <section className="blog__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, }} >
              <Masonry gutter="25px">
                {items.map((item, index) => (
                  <div key={index} className="">
                    <div className="blog__item mb-60">
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
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>

        </div>
      </section>
    </>
  );
};

export default BlogTwoCalMas;