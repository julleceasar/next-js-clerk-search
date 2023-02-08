import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import BlogTwoColMasMain from '../components/blog-2-col-mas';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog 2 col mas'} />
      <BlogTwoColMasMain/>
    </Wrapper>
  );
};

export default index;