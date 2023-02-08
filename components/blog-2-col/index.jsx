import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogTwoCol from './blog-2-col';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'News & Blog'} subtitle={'Blog Standard'} />
        <BlogTwoCol/>
      </main>
      <Footer />
    </>
  );
};

export default index;