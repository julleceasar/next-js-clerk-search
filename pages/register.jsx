import SEO from "../components/seo";
import Wrapper from "../layout/wrapper";
import RegisterMain from '../components/register';


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Register'} />
      <RegisterMain/>
    </Wrapper>
  );
};

export default index;