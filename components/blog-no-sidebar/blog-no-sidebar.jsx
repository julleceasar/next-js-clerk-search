import { blogs } from "../../data";
import BlogItems from "../common/blog/blog-items";

const items = blogs.slice(0, 8)

const BlogNoSidebar = () => {
  return (
    <>
      <section className="blog__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
              <BlogItems itemsPerPage={3} items={items} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogNoSidebar;