import React from 'react';
import useGlobalContext from '../../../hooks/use-context';

const ProductColor = () => {
  const colors = ['Ocean Blue','Yellow','Blue','Green',' White'];
  const {handleColors,color} = useGlobalContext();
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <>
      <div className="sidebar__widget mb-60">
        <div className="sidebar__widget-title mb-20">
          <h3>Choose Color</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="color__pick">
            <form onSubmit={handleSubmit}>
              <ul>
                {colors.map((clr,index) => (
                <li key={index} onClick={()=> handleColors(clr)}>
                  <button type="submit" className={`color ${clr === color ? 'active' : ''} color-${index}`}></button>
                </li>
                ))}
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductColor;