import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { cart_product } from '../../../redux/features/cart-slice';

const SingleSmProduct = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="features__product-wrapper d-flex mb-20">
        <div className="features__product-thumb mr-15">
          <Link href={`/product-details/${product.id}`}>
            <a>
              <img src={product.img} alt="pro-sm-1" />
            </a>
          </Link>
        </div>
        <div className="features__product-content">
          <h5>
            <Link href={`/product-details/${product.id}`}>
              <a>{product.title}</a>
            </Link>
          </h5>
          <div className="price">
            <span>${product.price}</span>
            <span className="price-old">${product.old_price}</span>
            <div className="add-cart p-absolute transition-3">
              <button onClick={() => dispatch(cart_product(product))}>+ Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSmProduct;