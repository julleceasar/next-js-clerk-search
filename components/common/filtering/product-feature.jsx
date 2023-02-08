import { selectProducts } from '../../../redux/features/product-slice';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const ProductFeature = () => {
  const products = useSelector(selectProducts);
  const featurePrd = products.map(prd => prd.product).flat().filter(item => item.feature_prd).slice(0, 2);

  return (
    <>
      <div className="sidebar__widget">
        <div className="sidebar__widget-title mb-30">
          <h3>Featured Products</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="features__product">
            <ul>
              {featurePrd.map((product, index) => (
                <li key={index} className="mb-20">
                  <div className="featires__product-wrapper d-flex">
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
                        {product.old_price && <span className="price-old">${product.old_price}</span>}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFeature;