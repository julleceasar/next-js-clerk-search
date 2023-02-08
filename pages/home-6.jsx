import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeSixMain from '../components/home-6';


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Six'} />
      <HomeSixMain />
    </Wrapper>
  );
};

export default index;