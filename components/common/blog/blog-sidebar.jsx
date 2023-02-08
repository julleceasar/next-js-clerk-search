import Link from "next/link";
import { blogs } from "../../../data";

const categoryData = [
  {
    id: 'accessories',
    title: 'Accessories',
    target: 'collapseAccessories',
    expanded: true,
    show: true,
    category_list: [
      { list: 'Catagories 1' },
      { list: 'Catagories 2' },
      { list: 'Catagories 3' },
    ]
  },
  {
    id: 'cloth',
    target: 'collapsecloth',
    title: 'Clothing',
    category_list: [
      { list: 'Catagories 1' },
      { list: 'Catagories 2' },
      { list: 'Catagories 3' },
    ]
  },
  {
    id: "men",
    target: 'collapsemen',
    title: "Men's",
    category_list: [
      { list: 'Catagories 1' },
      { list: 'Catagories 2' },
      { list: 'Catagories 3' },
    ]
  },
  {
    id: "music",
    target: 'collapsemusic',
    title: "Music",
    category_list: [
      { list: 'Catagories 1' },
      { list: 'Catagories 2' },
      { list: 'Catagories 3' },
    ]
  },
  {
    id: "decoration",
    target: 'collapseDecoration',
    title: "Decoration",
    category_list: [
      { list: 'Catagories 1' },
      { list: 'Catagories 2' },
      { list: 'Catagories 3' },
    ]
  },
]

const BlogSidebar = () => {
  return (
    <>
      <div className="sidebar__wrapper">
        <div className="sidebar__widget mb-55">
          <div className="widget__search p-relative">
            <form action="#">
              <input type="text" placeholder="Search..." />
              <button type="submit"><i className="far fa-search"></i></button>
            </form>
          </div>
        </div>
        <div className="sidebar__widget mb-55">
          <div className="sidebar__widget-title mb-25">
            <h3>Product Categories</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="categories">
              <div id="accordion">
                {categoryData.map((category, index) => (
                  <div key={index} className="card">
                    <div className="card-header white-bg" id={category.id}>
                      <h5 className="mb-0">
                        <button className={`shop-accordion-btn ${category.show ? '' : 'collapsed'}`} data-bs-toggle="collapse"
                          data-bs-target={`#${category.target}`} aria-expanded={category.expanded ? 'true' : 'false'} aria-controls={`${category.target}`}>
                          {category.title}
                        </button>
                      </h5>
                    </div>

                    <div id={category.target} className={`collapse ${category.show ? 'show' : ''}`}
                      aria-labelledby={category.id} data-bs-parent="#accordion">
                      <div className="card-body">
                        <div className="categories__list">
                          <ul>
                            {category.category_list.map((list, index) => (
                              <li onClick={() => dispatch(category_product(list.list))} key={index}>
                                <a href="#">{list.list}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-55">
          <div className="sidebar__widget-title mb-25">
            <h3>Latest Posts</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="rc__post-wrapper">
              <ul>
                {blogs.slice(0, 3).map((blog, index) => (
                  <li key={index} className="d-flex">
                    <div className="rc__post-thumb mr-20 ">
                      <Link href={`/blog-details/${blog.id}`}>
                        <a>
                          <img src={blog.img} alt="blog-1" />
                        </a>
                      </Link>
                    </div>
                    <div className="rc__post-content">
                      <h6>
                        <Link href={`/blog-details/${blog.id}`}>
                          <a>{blog.title}</a>
                        </Link>
                      </h6>
                      <div className="rc__meta">
                        <span> {blog.date}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-55">
          <div className="sidebar__widget-title mb-25">
            <h3>Recent Comments</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="rc__comments">
              <ul>
                <RecentComment name={'Salim Rana'} />
                <RecentComment name={'Shahnewaz Sakil'} />
                <RecentComment name={'Naim Ahmed'} />
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-55">
          <div className="sidebar__widget-title mb-25">
            <h3>Archives</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="sidebar__links">
              <ul>
                <li><a href="#">December 2013</a></li>
                <li><a href="#"> November 2013</a></li>
                <li><a href="#"> September 2013</a></li>
                <li><a href="#">November 2012</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sidebar__widget mb-55">
          <div className="sidebar__widget-title mb-25">
            <h3>Meta</h3>
          </div>
          <div className="sidebar__widget-content">
            <div className="sidebar__links">
              <ul>
                <li><a href="#">Log in</a></li>
                <li><a href="#"> Entries RSS</a></li>
                <li><a href="#"> Comments RSS</a></li>
                <li><a href="#">WordPress.org</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;


const RecentComment = ({ name }) => {
  return (
    <li className="d-flex mb-20">
      <div className="rc__comments-avater mr-15">
        <img src="/assets/img/blog/comments/avater-3.png" alt="" />
      </div>
      <div className="rc__comments-content">
        <h6>{name}</h6>
        <p>Hi, this is a comment....</p>
        <span>on <span className="highlight comment"> Hello world!</span></span>
      </div>
    </li>
  )
}