import Breadcrumb from '../components/common/breadcrumb';
import SEO from '../components/seo';
import Footer from '../layout/footers/footer';
import Header from '../layout/headers/header';
import Wrapper from '../layout/wrapper';

const ErrorPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Error Page'} />
      <Header />
      <main>
        <Breadcrumb img="/assets/img/page-title/page-title-2.jpg" title={'File Not Found'} subtitle={'404 Error Page'} />
        <section className="error__area pt-60 pb-100">
          <div className="container">
            <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
              <div className="error__content text-center">
                <div className="error__number">
                  <h1>404</h1>
                </div>
                <span>component not found</span>
                <h2>Nothing To See Here!</h2>
                <p>The page are looking for has been moved or doesn’t exist anymore, if you like you can return to our homepage. If the problem persists, please send us an email to <span className="highlight comment">basictheme@gmail.com</span></p>

                <div className="error__search">
                  <input type="text" placeholder="Enter Your Text..." />
                  <button type="submit" className="os-btn os-btn-3 os-btn-black">Search</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </Wrapper>
  );
};

export default ErrorPage;