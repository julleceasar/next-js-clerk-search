import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeTwoMain from '../components/home-2';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home two'} />
      <HomeTwoMain/>
    </Wrapper>
  );
};

export default index;
