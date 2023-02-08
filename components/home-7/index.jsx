import HeaderFour from "../../layout/headers/header-4";
import BannerThree from "../common/banner/banner-3";
import Blogs from "./blogs";
import Brands from "../common/brands/brands-2";
import FashionProduct from "./fashion-prd";
import FeatureProducts from "./feature-products";
import HeroSlider from "./hero-slider";
import Testimonial from "./testimonial";
import VideoBox from "./video-box";
import FooterThree from "../../layout/footers/footer-3";

const index = () => {
  return (
    <>
      <HeaderFour/>
      <main>
        <HeroSlider/>
        <BannerThree/>
        <FashionProduct/>
        <VideoBox/>
        <FeatureProducts/>
        <Testimonial/>
        <Blogs/>
        <Brands/>
      </main>
      <FooterThree/>
    </>
  );
};

export default index;