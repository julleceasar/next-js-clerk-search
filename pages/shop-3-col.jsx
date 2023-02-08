import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ShopThreeMain from '../components/shop-3-col';

const ShopThreeCol = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop 3 col'} />
      <ShopThreeMain />
    </Wrapper>
  );
};

export default ShopThreeCol;