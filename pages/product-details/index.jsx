import {useSelector} from 'react-redux';
import Breadcrumb from '../../components/common/breadcrumb';
import ProductDetails from '../../components/common/product/product-details';
import SEO from '../../components/seo';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Wrapper from '../../layout/wrapper';
import { selectProducts } from '../../redux/features/product-slice';

const ProductDetailsPage = () => {
  const product = useSelector(selectProducts).map(item => item.product).flat()[0];
  return (
    <Wrapper>
    <SEO pageTitle={'Product Details'}/>
    <Header/>
    <Breadcrumb title={'Product Details'} subtitle={'Product Details'} />
    <ProductDetails product={product} />
    <Footer/>
    </Wrapper>
  );
};

export default ProductDetailsPage;