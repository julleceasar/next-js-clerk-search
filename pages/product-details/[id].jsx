import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Breadcrumb from '../../components/common/breadcrumb';
import ProductDetails from '../../components/common/product/product-details';
import SEO from '../../components/seo';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Wrapper from '../../layout/wrapper';

import { specific_product } from '../../redux/features/product-slice';

const DynamicProductDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const product = useSelector(state => state.products.product);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)
  
    else (dispatch(specific_product(id)))

    return () => {
      
    };
  }, [id,dispatch]);

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

export default DynamicProductDetails;