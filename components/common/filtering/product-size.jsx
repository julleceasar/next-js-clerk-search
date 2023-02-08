import React from 'react';
import useGlobalContext from '../../../hooks/use-context';

const ProductSize = () => {
  const {handleProductSizes,sizeActive} = useGlobalContext()
  const sizes = ['S','M','XL','L','XXL']
  return (
    <>
      <div className="sidebar__widget mb-55">
        <div className="sidebar__widget-title mb-30">
          <h3>Any Size</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="size">
            <ul>
              {sizes.map((size,index) => (
              <li className={sizeActive === size ? 'active' : ''} 
              onClick={()=> handleProductSizes(size)} key={index}>
                <button>{size}</button>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSize;