import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import ShopThreeColArea from './shop-3-col-area';
import Footer from '../../layout/footers/footer';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'Shop'} subtitle={'Shop'} />
        <ShopThreeColArea />
      </main>
      <Footer />
    </>
  );
};

export default index;