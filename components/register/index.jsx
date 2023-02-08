import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import RegisterArea from './register-area';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'Register'} subtitle={'Register'} />
        <RegisterArea/>
      </main>
      <Footer />
    </>
  );
};

export default index;