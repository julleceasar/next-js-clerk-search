import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import WishlistArea from './wishlist-area';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'Wishlist'} subtitle={'Wishlist'} />
        <WishlistArea/>
      </main>
      <Footer />
    </>
  );
};

export default index;