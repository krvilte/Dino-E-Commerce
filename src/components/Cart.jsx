import React from 'react';
import ProductImg from '../assets/Product.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../slices/cart/cartSlice';

function Cart() {
  const items = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeItem(productId));
  };

  return (
    <div className='cart-page'>
      <main className='cart'>
        <h2>Cart Items</h2>
        {items.length > 0 ? (
          items.map((item) => {
            return (
              <div key={item._id} className='item'>
                <div className='item-card'>
                  <div className='product-img'>
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className='right--i'>
                    <div className='product-info'>
                      <h3 className='title'>{item.title}</h3>

                      <p className='descrption'>{item.des}</p>

                      <div className='pricing'>
                        <span className='price'>₹{item.price}</span>
                        <span className='old-price'>₹{item.oldPrice}</span>
                      </div>
                    </div>

                    <div className='list-action'>
                      <select name='qty' id='qty'>
                        <option>Qty</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>

                      <span
                        onClick={() => handleRemove(item._id)}
                        className='remove-item'
                      >
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className='emptyCart'>Nothing in the Cart</div>
        )}
      </main>

      <section className='order-summary'>
        <h2>Order Summary</h2>

        <div className='info'>
          <div>
            <span>
              Price{'('}1 item{')'}:
            </span>

            <span>₹12,529</span>
          </div>

          <div>
            <span>Discount:</span>

            <span>-₹6,730</span>
          </div>

          <div>
            <span>Total Amount</span>

            <span> ₹5,799</span>
          </div>

          <p className='total'> You will save ₹6,730 on this order </p>
        </div>

        <button className='proceed'>Proceed</button>
      </section>
    </div>
  );
}

export default Cart;
