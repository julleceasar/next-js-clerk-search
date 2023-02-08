import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import ShopFourColArea from './shop-4-col-area';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'Shop'} subtitle={'Shop'} />
        <ShopFourColArea/>
      </main>
      <Footer/>
    </>
  );
};

export default index;