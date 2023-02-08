import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import useCartInfo from '../../hooks/use-cart-info';

import { cartProducts, cart_product, clear_cart, decrease_quantity, remove_cart_product }
  from '../../redux/features/cart-slice';

const CartArea = () => {
  const cartItems = useSelector(cartProducts);
  const dispatch = useDispatch();
  const { total } = useCartInfo();
  const handleChange = () => {};
  const handleSubmit = e => e.preventDefault();
  return (
    <>
      <section className="cart-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {cartItems.length === 0 &&
                <div className='text-center'>
                  <h3>Your cart is empty</h3>
                  <button className="os-btn os-btn-2 mt-30">Return to shop</button>
                </div>
              }
              {cartItems.length > 0 && <form onSubmit={handleSubmit}>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <Link href={`/product-details/${item.id}`}>
                              <a>
                                <img src={item.img} alt="" />
                              </a>
                            </Link>
                          </td>
                          <td className="product-name">
                            <Link href={`/product-details/${item.id}`}>
                              <a>{item.title}</a>
                            </Link>
                          </td>
                          <td className="product-price"><span className="amount">${item.price}</span></td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <input type="text" onChange={handleChange} value={item.quantity} />
                              <div onClick={() => dispatch(decrease_quantity(item))} className="dec qtybutton">-</div>
                              <div onClick={() => dispatch(cart_product(item))} className="inc qtybutton">+</div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">${item.quantity * item.price}</span>
                          </td>
                          <td onClick={() => dispatch(remove_cart_product(item))} className="product-remove">
                            <button ><i className="fa fa-times"></i></button>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <input required id="coupon_code" className="input-text" name="coupon_code"
                          placeholder="Coupon code" type="text" />
                        <button className="os-btn os-btn-black" name="apply_coupon" type="submit">Apply
                          coupon</button>
                      </div>
                      <div className="coupon2">
                        <button onClick={() => dispatch(clear_cart())} className="os-btn os-btn-black" 
                        name="update_cart" type="button">Clear cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ms-auto">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>Subtotal <span>${total}</span></li>
                        <li>Total <span>${total}</span></li>
                      </ul>
                      <Link href={'/checkout'}>
                        <a className="os-btn">Proceed to checkout</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartArea;