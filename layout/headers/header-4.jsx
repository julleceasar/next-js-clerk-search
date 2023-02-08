import Link from "next/link";
import { useDispatch } from "react-redux";
import Image from "next/image";

import Cart from "../../components/common/cart";
import Search from "../../components/common/search";
import { extra_info } from "../../data/header/header";
import useCartInfo from "../../hooks/use-cart-info";
import useSticky from "../../hooks/use-sticky";
import { search_bar } from "../../redux/features/search-slice";
import Menu from "./menu";
import logo from '../../public/assets/img/logo/log-3.webp';
import useGlobalContext from "../../hooks/use-context";
import Sidebar from "../../components/common/sidebar";


const HeaderFour = () => {
  const dispatch = useDispatch();
  const { headerSticky } = useSticky();
  const { quantity } = useCartInfo();
  const { setShowSidebar } = useGlobalContext();
  return (
    <>
      <header>
        <div id="header-sticky" className={`header__area header__transparent header__transparent-2 pt-15 pb-15 box-25 
        ${headerSticky ? 'sticky' : ''}`}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <Image src={logo} alt="logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-1 col-sm-1">
                <div className="main-menu main-menu-3 d-none d-lg-block p-relative">
                  <nav>
                    <Menu />
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-7 col-sm-8">
                <div className="header__right p-relative d-flex justify-content-between justify-content-sm-end align-items-center">

                  <div className="mobile-menu-btn d-lg-none">
                    <button className="mobile-menu-toggle" onClick={() => setShowSidebar(true)}>
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>
                  <div className="header__action">
                    <ul>
                      <li>
                        <button className="search-toggle" onClick={() => dispatch(search_bar(true))}>
                          <i className="fas fa-search"></i></button>
                      </li>
                      <li>
                        <button className="cart">
                          <i className="fas fa-cart-plus"></i><span className="cart-number-2">{quantity}</span>
                        </button>
                        {/* cart area start */}
                        <Cart />
                        {/* cart area end */}
                      </li>
                      <li> <button ><i className="fas fa-user"></i></button>
                        <ul className="extra-info">
                          {extra_info.map((item, index) => (
                            <li key={index}>
                              <div className={`${item.class}`}>
                                <div className="extra-title">
                                  <h5>{item.title}</h5>
                                </div>
                                <ul>
                                  {item.listItems.map((list, index) => (
                                    <li key={index}>
                                      <Link href={`${list.link}`}><a>{`${list.title}`}</a></Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search area start */}
      <Search />
      {/* search area end */}

      {/* sidebar start */}
      <Sidebar />
      {/* sidebar end */}

    </>
  );
};

export default HeaderFour;