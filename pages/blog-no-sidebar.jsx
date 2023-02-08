import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import BlogNoSidebarMain from '../components/blog-no-sidebar';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog no sidebar'} />
      <BlogNoSidebarMain />
    </Wrapper>
  );
};

export default index;