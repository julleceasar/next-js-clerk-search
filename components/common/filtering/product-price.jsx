import React, { useState } from 'react';
import Slider from 'react-rangeslider';
import useGlobalContext from '../../../hooks/use-context';

const ProductPrice = () => {
  const {price,handlePriceChange} = useGlobalContext();

  return (
    <>
      <div className="sidebar__widget mb-55">
        <div className="sidebar__widget-title mb-30">
          <h3>Filter By Price</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="price__slider">
            <div id="slider-range">
              <Slider
                value={price}
                max={500}
                orientation="horizontal"
                onChange={(value) => handlePriceChange(value)}
              />
            </div>
            <div>
              <form onSubmit={e => e.preventDefault()}>
                <button type="submit">Filter</button>
                <label htmlFor="amount">Price :</label>
                <input type="text" id="amount" value={`$-${price}`} readOnly />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPrice;