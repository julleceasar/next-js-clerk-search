import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useSWR from 'swr'
import fetcher from '../../utils/fetcher';
import { search_bar } from '../../redux/features/search-slice';
import Image from 'next/image';

const Search = () => {

  const search = useSelector(state => state.search.isOpen);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault()
  }
  const [searchQuery, setSearchQuery] = useState("");
  const [productIds, setProductIds] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    const fetchProductIds = async () => {
      const result = await axios(
        `/api/search/get-searched-product-ids?searchQuery=${searchQuery}`,
      );

      setProductIds(result.data)
    };

    fetchProductIds();
  }, [searchQuery]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios(
        `/api/search/get-searched-products?productIds=${productIds}`,
      );

      setFilteredProducts(result.data)
    };

    fetchProducts();
  }, [productIds]);

  console.log(filteredProducts)

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };


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
                    <input onChange={handleChange} type="text" placeholder="Search for products... " />
                    <button type="button"><i className="far fa-search"></i></button>
                  </div>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '5px', border: '1px solid whitesmoke'}}>
                    {filteredProducts && filteredProducts.map((product) => {
                      return (
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid lightgray', padding: '15px'}}>
                        <Image src={product.image} alt={product.name} width={80} height={80} objectFit={'contain'}/>
                        <h3 key={product.name}>{product.name}</h3>
                        <h3>{product.price} SEK</h3>
                        </div>
                      )
                    })}
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