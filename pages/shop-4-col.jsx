import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ShopFourMain from '../components/shop-4-col';

const ShopFourCol = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop 4 col'} />
      <ShopFourMain />
    </Wrapper>
  );
};

export default ShopFourCol;