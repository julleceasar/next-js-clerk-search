import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import CheckoutArea from './checkout-area';
import CouponArea from './coupon-area';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'Checkout'} subtitle={'Checkout'} />
        <CouponArea />
        <CheckoutArea/>
      </main>
      <Footer />
    </>
  );
};

export default index;