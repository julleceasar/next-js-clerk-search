import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import BlogTwoColMain from '../components/blog-2-col';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog 2 col'} />
      <BlogTwoColMain />
    </Wrapper>
  );
};

export default index;