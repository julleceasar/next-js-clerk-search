import BlogItems from "../common/blog/blog-items";
import BlogSidebar from "../common/blog/blog-sidebar";
import { blogs } from "../../data";

const items  = blogs.slice(0,8)

const BlogArea = () => {
  
  return (
    <>
      <section className="blog__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <BlogItems itemsPerPage={3} items={items} />
            </div>
            <div className="col-xl-3 col-lg-4 offset-xl-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;