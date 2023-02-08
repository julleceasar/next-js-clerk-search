import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import BlogLeftSidebarMain from '../components/blog-left-sidebar';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Blog left sidebar'} />
      <BlogLeftSidebarMain/>
    </Wrapper>
  );
};

export default index;