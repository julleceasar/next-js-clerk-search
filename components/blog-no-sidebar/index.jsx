import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogNoSidebar from './blog-no-sidebar';


const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'News & Blog'} subtitle={'Blog Standard'} />
        <BlogNoSidebar/>
      </main>
      <Footer />
    </>
  );
};

export default index;