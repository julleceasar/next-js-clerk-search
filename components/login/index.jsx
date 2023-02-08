import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import LoginArea from './login-area';

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb title={'Login'} subtitle={'Login'} />
        <LoginArea/>
      </main>
      <Footer />
    </>
  );
};

export default index;