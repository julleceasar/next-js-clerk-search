import { useSelector } from 'react-redux';
import useGlobalContext from '../../hooks/use-context';
import { selectProducts } from '../../redux/features/product-slice';
import ProductModal from '../common/modal/product-modal';
import ProductGrid from '../common/product/product-grid';
import ProductList from '../common/product/product-list';

const ShopFourColArea = ({shopThreeCol}) => {
  const {items,handleSelectChange} = useGlobalContext();
  return (
    <>
      <section className="shop__area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className={`${shopThreeCol ? 'col-xl-8 offset-xl-2 col-lg-8 offset-lg-2' : 'col-xl-12'}`}>
              <div className="shop__content-area">
                <div className="shop__header d-sm-flex justify-content-between align-items-center mb-40">
                  <div className="shop__header-left">
                    <div className="show-text">
                      <span>Showing 1–12 of 20 results</span>
                    </div>
                  </div>
                  <div className="shop__header-right d-flex align-items-center justify-content-between justify-content-sm-end">
                    <div className="sort-wrapper mr-30 pr-25 p-relative">
                    <select onChange={handleSelectChange}>
                        <option defaultValue="1">Default Sorting</option>
                        <option defaultValue="2">Short by new</option>
                        <option defaultValue="3">Short by featured</option>
                        <option defaultValue="4">Short by price</option>
                      </select>
                    </div>
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-grid-tab" data-bs-toggle="pill" href="#pills-grid" role="tab" aria-controls="pills-grid" aria-selected="true"><i className="fas fa-th"></i></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-list-tab" data-bs-toggle="pill" href="#pills-list" role="tab" aria-controls="pills-list" aria-selected="false"><i className="fas fa-list-ul"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                    <div className="row custom-row-10">
                      <ProductGrid itemsPerPage={12} col={shopThreeCol ? 'col-xl-4 col-lg-4 col-md-6 col-sm-6 custom-col-10' :'col-xl-3 col-lg-3 col-md-6 col-sm-6 custom-col-10'} items={items} />
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-list" role="tabpanel" aria-labelledby="pills-list-tab">
                    <ProductList itemsPerPage={4} items={items} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* product modal start */}
      <ProductModal />
      {/* product modal end */}

    </>
  );
};

export default ShopFourColArea;