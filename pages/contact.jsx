import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ContactMain from '../components/contact';

const Contact = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact'} />
      <ContactMain/>
    </Wrapper>
  );
};

export default Contact;