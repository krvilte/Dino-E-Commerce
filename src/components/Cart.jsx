import React from 'react';
import ProductImg from '../assets/Product.jpg';

function Cart() {
  return (
    <div className='cart-page'>
      <section className='cart'>
        <h2>Cart Items</h2>
        <div className='item'>
          <div className='item-card'>
            <div className='product-img'>
              <img src={ProductImg} alt='' />
            </div>

            <div className='right--i'>
              <div className='product-info'>
                <h3 className='title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h3>

                <p className='descrption'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime, eos tenetur culpa debitis, fugit nihil, distinctio
                  reprehenderit corporis excepturi sequi dolorum repellendus
                  aliquid unde aut sint nostrum dolores laborum natus.
                </p>

                <div className='pricing'>
                  <span className='price'>₹400</span>
                  <span className='old-price'>₹780</span>
                </div>
              </div>

              <div className='list-action'>
                <select name='qty' id='qty'>
                  <option selected>Qty</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>

                <span className='remove-item'>Remove</span>
              </div>
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='item-card'>
            <div className='product-img'>
              <img src={ProductImg} alt='' />
            </div>

            <div className='right--i'>
              <div className='product-info'>
                <h3 className='title'>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </h3>

                <p className='descrption'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Maxime, eos tenetur culpa debitis, fugit nihil, distinctio
                  reprehenderit corporis excepturi sequi dolorum repellendus
                  aliquid unde aut sint nostrum dolores laborum natus.
                </p>

                <div className='pricing'>
                  <span className='price'>₹400</span>
                  <span className='old-price'>₹780</span>
                </div>
              </div>

              <div className='list-action'>
                <select name='qty' id='qty'>
                  <option selected>Qty</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>

                <span className='remove-item'>Remove</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
