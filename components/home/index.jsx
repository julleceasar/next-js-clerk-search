import Header from '../../layout/headers/header';
import BlogArea from '../common/blog/blog-area';
import Brands from '../common/brands/brands';
import Banner from '../common/banner/banner';
import BannerTwo from '../common/banner/banner-2';
import HeroSlider from '../common/hero-slider';
import Products from '../common/product/trending-products';
import SaleOff from '../common/product/sale-off';
import SubscribeArea from '../common/subscribe-area';
import Footer from '../../layout/footers/footer';

const index = () => {
  return (
    <>
      <Header />
      <HeroSlider />
      <Banner/>
      <Products/>
      <BannerTwo/>
      <SaleOff/>
      <Brands/>
      <BlogArea/>
      <SubscribeArea/>
      <Footer/>
    </>
  );
};

export default index;