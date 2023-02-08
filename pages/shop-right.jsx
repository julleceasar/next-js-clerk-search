import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ShopRightMain from '../components/shop-right';

const ShopRight = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop Right'} />
      <ShopRightMain/>
    </Wrapper>
  );
};

export default ShopRight;