import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Banner from '../common/banner/banner';
import BannerTwo from '../common/banner/banner-2';
import BlogArea from '../common/blog/blog-area';
import Brands from '../common/brands/brands';
import SubscribeArea from '../common/subscribe-area';
import HeroSlider from './hero-slider';
import ProductItems from './products-items';
import SaleOffArea from './sale-off-area';

const index = () => {
  return (
    <>
      <Header header_big={true} />
      <main className="box-25">
        <HeroSlider/>
        <Banner df={true} />
        <ProductItems/>
        <BannerTwo df={true} />
        <SaleOffArea/>
        <BlogArea/>
        <Brands df={true} />
        <SubscribeArea df={true} />
      </main>
      <div className="box-25 box-pb-40">
        <Footer df={true} />
      </div>
    </>
  );
};

export default index;