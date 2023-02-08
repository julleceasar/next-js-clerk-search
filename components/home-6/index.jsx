import HeaderThree from '../../layout/headers/header-3';
import Banner from '../common/banner/banner';
import BannerTwo from '../common/banner/banner-2';
import HeroSlider from '../common/hero-slider';
import Products from '../common/product/trending-prd-2';
import SaleOff from '../common/product/sale-off';
import BlogArea from '../common/blog/blog-area';
import SubscribeArea from '../common/subscribe-area';
import Footer from '../../layout/footers/footer';

const index = () => {
  return (
    <>
      <HeaderThree/>
      <main>
        <HeroSlider home_six={true} />
        <Banner home_six={true} />
        <Products/>
        <BannerTwo/>
        <SaleOff/>
        <BlogArea/>
        <SubscribeArea/>
      </main>
      <Footer/>
    </>
  );
};

export default index;