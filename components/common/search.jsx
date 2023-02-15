import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { search_bar } from "../../redux/features/search-slice";
import Image from "next/image";

const Search = () => {
  const search = useSelector((state) => state.search.isOpen);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [productIds, setProductIds] = useState("");
  const [suggestedWords, setSuggestedWords] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      const fetchSuggestedWords = async () => {
        const result = await axios(
          `/api/search/search-suggestions?searchQuery=${searchQuery}`
        );

        setSuggestedWords(result.data);
      };

      fetchSuggestedWords();
    }, 300);
  }, [searchQuery]);

  useEffect(() => {
    setTimeout(() => {
      const fetchCategories = async () => {
        const result = await axios(
          `/api/search/search-categories?searchQuery=${searchQuery}`
        );

        setCategories(result.data);
      };

      fetchCategories();
    }, 300);
  }, [searchQuery]);

  useEffect(() => {
    setTimeout(() => {
      const fetchProductIds = async () => {
        const result = await axios(
          `/api/search/search-predictive?searchQuery=${searchQuery}`
        );

        setProductIds(result.data);
      };

      fetchProductIds();
    }, 300);
  }, [searchQuery]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios(
        `/api/search/get-searched-products?productIds=${productIds}`
      );

      setFilteredProducts(result.data);
    };

    fetchProducts();
  }, [productIds]);

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  console.log(categories)

  return (
    <>
      {/* <!-- search area start --> */}
      <section
        className={`header__search white-bg transition-3 ${
          search ? "search-opened" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="header__search-inner text-center">
                <form onSubmit={handleSubmit}>
                  <div
                    className="header__search-btn"
                    onClick={() => {
                      dispatch(search_bar(false));
                      setSearchQuery("");
                    }}
                  >
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
                          <a>Tablet</a>
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
                    <input
                      value={searchQuery}
                      onChange={handleChange}
                      type="text"
                      placeholder="Search for products... "
                    />
                    <button type="button">
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                  <div
                    style={{
                      display: filteredProducts == 0 ? "none" : "flex",
                      flexDirection: "column",
                      gap: "5px",
                      border: "1px solid whitesmoke",
                      maxHeight: "50vh",
                      overflowY: "scroll",
                    }}
                  >
                    {suggestedWords &&
                      suggestedWords.map((word) => {
                        return (
                          <div
                            key={word}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              borderBottom: "1px solid whitesmoke",
                              padding: "15px",
                              gap: "10px",
                            }}
                          >
                            <button type="button">
                              <i className="far fa-search"></i>
                            </button>

                            <h4 style={{ margin: "0px" }} key={word}>
                              Sök efter "{word}"
                            </h4>
                          </div>
                        );
                      })}

                    {filteredProducts &&
                      filteredProducts.map((product) => {
                        return (
                          <Link
                            key={product.id}
                            href={`/product-details/${product.id}`}
                          >
                            <div
                              onClick={() => {
                                dispatch(search_bar(false));
                                setSearchQuery("");
                              }}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                borderBottom: "1px solid whitesmoke",
                                padding: "10px",
                                cursor: "pointer",
                              }}
                            >
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={50}
                                height={50}
                                objectFit={"contain"}
                              />
                              <h4 key={product.name}>{product.name}</h4>
                              <h4>{product.price},00 SEK</h4>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* body overlay */}
      <div
        onClick={() => {
          dispatch(search_bar(false));
          setSearchQuery("");
        }}
        className={`body-overlay transition-3 ${search ? "opened" : ""}`}
      ></div>
      {/* <!-- search area end --> */}
    </>
  );
};

export default Search;
