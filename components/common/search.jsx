import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

import { search_bar } from '../../redux/features/search-slice';

const Search = () => {
  const search = useSelector(state => state.search.isOpen);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <>
      {/* <!-- search area start --> */}
      <section className={`header__search white-bg transition-3 ${search ? 'search-opened' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="header__search-inner text-center">
                <form onSubmit={handleSubmit}>
                  <div className="header__search-btn" onClick={() => dispatch(search_bar(false))}>
                    <button className="header__search-btn-close">
                      <i className="fal fa-times"></i>
                    </button>
                  </div>
                  <div className="header__search-header">
                    <h3>Search</h3>
                  </div>
                  <div className="header__search-categories">
                    <ul className="search-category">
                      <li>
                        <Link href="/shop">
                          <a>All Categories</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <a>Accessories</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <a>Chair</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <a >Tablet</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <a>Men</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop">
                          <a>Women</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header__search-input p-relative">
                    <input type="text" placeholder="Search for products... " />
                    <button type="button"><i className="far fa-search"></i></button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* body overlay */}
      <div onClick={() => dispatch(search_bar(false))}
        className={`body-overlay transition-3 ${search ? 'opened' : ''}`}></div>
      {/* <!-- search area end --> */}
    </>
  );
};

export default Search;