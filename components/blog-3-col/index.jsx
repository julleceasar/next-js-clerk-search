import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import BlogThreeCol from './blog-three-col';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'News & Blog'} subtitle={'Blog Standard'} />
        <BlogThreeCol/>
      </main>
      <Footer />
    </>
  );
};

export default index;