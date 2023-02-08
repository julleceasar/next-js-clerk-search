import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogLeftSidebar from './blog-left-sidebar';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'News & Blog'} subtitle={'Blog Standard'} />
        <BlogLeftSidebar/>
      </main>
      <Footer />
    </>
  );
};

export default index;