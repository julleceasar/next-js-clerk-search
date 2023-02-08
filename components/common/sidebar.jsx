import React, { useState } from 'react';
import Link from 'next/link';
import useGlobalContext from '../../hooks/use-context';

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [home, setHome] = useState(false);
  const [shop, setShop] = useState(false);
  const [productPages, setProductPages] = useState(false);
  const [otherPages, setOtherPages] = useState(false);
  const [blog, setBlog] = useState(false);

  const handleMenuDropDown = (page) => {
    if (page === 'home') {
      setHome(!home)
      setShop(false)
      setProductPages(false)
      setOtherPages(false);
      setBlog(false)
    }

    if (page === 'shop') {
      setHome(false)
      setShop(!shop)
      setProductPages(false)
      setOtherPages(false)
      setBlog(false)
    }

    if (page === 'product-pages') {
      setHome(false)
      setShop(false)
      setProductPages(!productPages)
      setOtherPages(false)
      setBlog(false)
    }

    if (page === 'other-pages') {
      setHome(false)
      setShop(false)
      setProductPages(false)
      setOtherPages(!otherPages)
      setBlog(false)
    }

    if (page === 'blog') {
      setHome(false)
      setShop(false)
      setProductPages(false)
      setOtherPages(false)
      setBlog(!blog)
    }
  }

  return (
    <>
      <section className={`extra__info transition-3 ${showSidebar ? 'info-opened' : ''}`}>
        <div className="extra__info-inner">
          <div className="extra__info-close text-end" onClick={() => setShowSidebar(false)}>
            <a href="#" className="extra__info-close-btn"><i className="fal fa-times"></i></a>
          </div>

          {/* <!-- side-mobile-menu start --> */}
          <nav className="side-mobile-menu d-block d-lg-none mm-menu">
            <ul>
              <li className={`menu-item-has-children has-droupdown ${home ? 'active' : ''}`}>
                <a onClick={() => handleMenuDropDown('home')}>Home</a >
                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${home ? 'active' : ''}`}>
                  <li><Link href="/">Home Style 1</Link></li>
                  <li><Link href="/home-2">Home Style 2</Link></li>
                  <li><Link href="/home-3">Home Style 3</Link></li>
                  <li><Link href="/home-4">Home Style 4</Link></li>
                  <li><Link href="/home-5">Home Style 5</Link></li>
                  <li><Link href="/home-6">Home Style 6</Link></li>
                  <li><Link href="/home-7">Home Style 7</Link></li>
                </ul>
              </li>

              <li className={`menu-item-has-children has-droupdown ${shop ? 'active' : ''}`}>
                <a onClick={() => handleMenuDropDown('shop')}>Shop Shop</a>
                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${shop ? 'active' : ''}`}>
                  <li><Link href="/shop">Standard Shop Page</Link></li>
                  <li><Link href="/shop-right">Shop Right Sidebar</Link></li>
                  <li><Link href="/shop-4-col">Shop 4 Column</Link></li>
                  <li><Link href="/shop-3-col">Shop 3 Column</Link></li>
                  <li><Link href="/shop">Shop Page</Link></li>
                  <li><Link href="/shop">Shop Page</Link></li>
                  <li><Link href="/shop">Shop Infinity</Link></li>
                </ul>
              </li>


              <li className={`menu-item-has-children has-droupdown ${productPages ? 'active' : ''}`}>
                <a onClick={() => handleMenuDropDown('product-pages')}>Product Pages</a>
                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${productPages ? 'active' : ''}`}>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/login">Login</Link></li>
                  <li><Link href="/creator">Creators</Link></li>
                  <li><Link href="/shop">Our Shop</Link></li>
                </ul>
              </li>

              <li className={`menu-item-has-children has-droupdown ${otherPages ? 'active' : ''}`}>
                <a onClick={() => handleMenuDropDown('other-pages')}>Other Pages</a>
                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${otherPages ? 'active' : ''}`}>
                  <li><Link href="/wishlist">Wishlist</Link></li>
                  <li><Link href="/cart">Shopping Cart</Link></li>
                  <li><Link href="/register">Register</Link></li>
                  <li><Link href="/login">Login</Link></li>
                </ul>
              </li>

              <li className={`menu-item-has-children has-droupdown ${blog ? 'active' : ''}`}>
                <a onClick={() => handleMenuDropDown('blog')}>Blog</a>
                <ul onClick={() => setShowSidebar(false)} className={`sub-menu ${blog ? 'active' : ''}`}>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                  <li><Link href="/blog-no-sidebar">Blog No Sidebar</Link></li>
                  <li><Link href="/blog-2-col">Blog 2 Column</Link></li>
                  <li><Link href="/blog-2-col-mas">BLog 2 Col Masonary</Link></li>
                  <li><Link href="/blog-3-col">Blog 3 Column</Link></li>
                  <li><Link href="/blog-details">Blog Details</Link></li>
                </ul>
              </li>

              <li> <Link href="/contact">Contact</Link> </li>

            </ul>
          </nav>
          {/* <!-- side-mobile-menu end --> */}
        </div>
      </section>

      {/* body overlay */}
      <div onClick={() => setShowSidebar(false)}
        className={`body-overlay transition-3 ${showSidebar ? 'opened' : ''}`}>
      </div>
    </>
  );
};

export default Sidebar;