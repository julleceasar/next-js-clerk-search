import { blogs } from '../../data';
import BlogItems from '../common/blog/blog-items';
import BlogSidebar from '../common/blog/blog-sidebar';

const items = blogs.slice(0, 8)

const BlogLeftSidebar = () => {
  return (
    <>
      <section className="blog__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <BlogSidebar />
            </div>
            <div className="col-xl-9 col-lg-8">
              <BlogItems itemsPerPage={3} items={items} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogLeftSidebar;