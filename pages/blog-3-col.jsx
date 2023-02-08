import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import BlogThreeColMain from '../components/blog-3-col';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog 3 col'} />
      <BlogThreeColMain />
    </Wrapper>
  );
};

export default index;