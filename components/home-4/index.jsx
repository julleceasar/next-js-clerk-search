import Header from '../../layout/headers/header';
import HeroSlider from './hero-slider';
import Banner from '../common/banner/banner';
import Products from '../common/product/trending-products';
import BannerTwo from '../common/banner/banner-2';
import ProductOffer from '../common/product/product-offer';
import BlogArea from '../common/blog/blog-area';
import SubscribeArea from '../common/subscribe-area';
import FooterTwo from '../../layout/footers/footer-2';

const index = () => {
  
  return (
    <>
      <Header />
      <main className="box-white grey-bg pt-50">
        <div className="container">
          <div className='box-white-inner'>
            <div className="row">
              <div className='col-xl-12'>
                <HeroSlider/>
                <Banner h4={true} />
                <Products h4={true} />
                <BannerTwo h4={true} />
                <ProductOffer h4={true} />
                <BlogArea h4={true} />
                <SubscribeArea h4={true} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterTwo/>
    </>
  );
};

export default index;