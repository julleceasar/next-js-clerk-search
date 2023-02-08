import { useSelector } from "react-redux";
import { selectProducts } from "../../../redux/features/product-slice";
import FeatureProduct from "../product/feature-product";

const BannerTwo = ({df,h4}) => {
  const products = useSelector(selectProducts)
  const featureProducts = products.map(item => item.product).flat().filter(prd => prd.featured);

  return (
    <>
      <div className="banner__area-2 pb-60">
        <div className={`container-fluid ${df ? '' : 'p-0'}`}>
          <div className="row g-0">
            {featureProducts.map((product, index) => (
              <FeatureProduct key={index} index={index} product={product} h4={h4} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTwo;