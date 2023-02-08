import { blogs } from '../../data';
import { BlogItems } from '../blog-2-col/blog-2-col';

const items = blogs.slice(0, 8);

const BlogThreeCol = () => {
  return (
    <>
      <section className="blog__area pt-100 pb-100">
        <div className="container">
          <div className="row">
          <BlogItems itemsPerPage={6} items={items} colThree={true} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogThreeCol;