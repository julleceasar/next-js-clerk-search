import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import CartArea from './cart-area';

const index = () => {
  return (
    <>
      <Header/>
      <main>
        <Breadcrumb title={'Your Cart'} subtitle={'Cart'} />
        <CartArea/>
      </main>
      <Footer/>
    </>
  );
};

export default index;