import Footer from '../../layout/footers/footer';
import HeaderTwo from '../../layout/headers/header-2';
import BannerTwo from '../common/banner/banner-2';
import Products from '../common/product/trending-products';
import SubscribeArea from '../common/subscribe-area';
import HeroSlider from './hero-slider';

const index = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroSlider />
        <div className="box-25">
          <Products h5={true} />
          <BannerTwo />
          <SubscribeArea />
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default index;