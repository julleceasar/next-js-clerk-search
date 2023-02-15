import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeMain from '../components/home';

const index = ({products}) => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Default'} />
      <HomeMain />
    </Wrapper>
  );
};

export default index;


export async function getStaticProps() {
  
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const headers = new Headers();
  const storeApiToken = process.env.BIGCOMMERCE_STORE_API_TOKEN ? process.env.BIGCOMMERCE_STORE_API_TOKEN : '';
  headers.append('Content-type', 'application/json');
  headers.append('X-Auth-Token', storeApiToken);
  const res = await fetch(`https://api.bigcommerce.com/stores/${process.env.BIGCOMMERCE_STORE_API_STORE_HASH}/v3/catalog/products`,{method: 'GET', headers: headers})
  const products = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  }
}