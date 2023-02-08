import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

import Cart from '../../components/common/cart';
import Search from '../../components/common/search';
import { extra_info } from '../../data/header/header';
import useCartInfo from '../../hooks/use-cart-info';
import useSticky from '../../hooks/use-sticky';
import { search_bar } from '../../redux/features/search-slice';
import Menu from './menu';
import logo from '../../public/assets/img/logo/logo.png';
import useGlobalContext from '../../hooks/use-context';
import Sidebar from '../../components/common/sidebar';

const HeaderThree = () => {
  const { quantity, total } = useCartInfo();
  const { headerSticky } = useSticky();
  const dispatch = useDispatch();
  const { setShowSidebar } = useGlobalContext();
  return (
    <>
      <header>
        <div id="header__transparent" className="header__area header__transparent">
          <div className="container">
            <div className="header__top header__top-2">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12">
                  <div className="header__welcome">
                    <span>Wellcome to Outstock2!</span>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-3 col-sm-5">
                  <div className="logo logo__6 text-md-center">
                    <Link href="/">
                      <a>
                        <Image src={logo} alt="logo" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="header__right p-relative d-flex justify-content-between 
                  justify-content-sm-end align-items-center">
                    <div className="mobile-menu-btn d-lg-none">
                      <button className="mobile-menu-toggle" onClick={() => setShowSidebar(true)}>
                        <i className="fas fa-bars"></i>
                      </button>
                    </div>
                    <div className="header__action">
                      <ul>
                        <li>
                          <button className="search-toggle" onClick={() => dispatch(search_bar(true))}>
                            <i className="ion-ios-search-strong"></i> Search</button>
                        </li>
                        <li>
                          <button className="cart">
                            <i className="ion-bag"></i> Cart <span>({quantity})</span>
                          </button>
                          {/* cart area start */}
                          <Cart />
                          {/* cart area end */}
                        </li>
                        <li> <button ><i className="far fa-bars"></i></button>
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
            <div id="header-sticky" className={`header__bottom ${headerSticky ? 'sticky' : ''}`}>
              <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                  <div className="main-menu d-none d-lg-flex justify-content-center position-relative">
                    <nav>
                      <Menu />
                    </nav>
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

export default HeaderThree;