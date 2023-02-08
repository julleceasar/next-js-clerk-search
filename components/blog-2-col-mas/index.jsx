import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogTwoCalMas from './blog-2-col-mas';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'News & Blog'} subtitle={'Blog Standard'} />
        <BlogTwoCalMas/>
      </main>
      <Footer />
    </>
  );
};

export default index;