import { blogs } from '../../data';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import BlogDetailsArea from './blog-details-area';

const item = blogs[0]

const index = () => {
  return (
    <>
      <Header white_bg={true} />
      <main>
        <BlogDetailsArea item={item} />
      </main>
      <Footer />
    </>
  );
};

export default index;