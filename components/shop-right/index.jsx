import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import ShopProduct from '../common/product/shop-product';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'Shop'} subtitle={'Shop'} />
        <ShopProduct shop_right={true}/>
      </main>
      <Footer/>
    </>
  );
};

export default index;