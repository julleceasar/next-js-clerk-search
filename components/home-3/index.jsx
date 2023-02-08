import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Banner from '../common/banner/banner';
import BannerTwo from '../common/banner/banner-2';
import BlogArea from '../common/blog/blog-area';
import Brands from '../common/brands/brands';
import SubscribeArea from '../common/subscribe-area';
import HeroSlider from '../home-2/hero-slider';
import SaleOff from '../common/product/sale-off';
import ProductOffer from '../common/product/product-offer';
import Products from '../common/product/trending-prd-2';
import Testimonial from './testimonial';

const index = () => {
  return (
    <>
      <Header header_big={true} />
      <main className="box-25">
        <HeroSlider />
        <Banner df={true} />
        <Products />
        <BannerTwo df={true} />
        <SaleOff />
        <Testimonial />
        <ProductOffer />
        <Brands df={true} />
        <SubscribeArea df={true} />
        <BlogArea home_three={true} />
      </main>
      <div className='box-25 box-m-15 box-pb-40'>
        <Footer df={true} />
      </div>
    </>
  );
};

export default index;