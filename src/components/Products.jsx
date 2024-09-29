import React, { useEffect, useState } from 'react';
import ProductImage from '../assets/Product.jpg';
import useProductData from '../data/useProductData';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cart/cartSlice';

function Products() {
  const data = useProductData();
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className='products-page'>
      <section className='filter-options'>
        <div className='header'>
          <span>Filter</span>
        </div>

        <div className='filter-opt'>
          <label>Category</label>

          <form className='categ-f'>
            <div>
              <input type='radio' id='kids' />
              <label htmlFor='kids' id='kids'>
                Kids
              </label>
            </div>
            <div>
              <input type='radio' id='men' />
              <label htmlFor='Mmen' id='men'>
                Men
              </label>
            </div>
            <div>
              <input type='radio' id='women' />
              <label htmlFor='women' id='women'>
                Women
              </label>
            </div>
          </form>

          <form action='' className='brand-f'>
            <label htmlFor='brand'>Brands</label>
            <div>
              <input type='checkbox' name='zara' id='zara' />
              <label htmlFor='zara'>Zara</label>
            </div>
            <div>
              <input type='checkbox' name='gucci' id='gucci' />
              <label htmlFor='gucci'>Gucci</label>
            </div>
            <div>
              <input type='checkbox' name='chanel' id='chanel' />
              <label htmlFor='chanel'>Chanel</label>
            </div>
            <div>
              <input type='checkbox' name='zara' id='zara' />
              <label htmlFor='zara'>Zara</label>
            </div>
            <div>
              <input type='checkbox' name='armani' id='armani' />
              <label htmlFor='armani'>Armani</label>
            </div>
          </form>
        </div>
      </section>

      <main className='product-section'>
        <div className='header'>
          <span>Products</span>

          <form action=''>
            <label htmlFor='shortBy'>Short By</label>
            <select name='short-by' id='shortBy'>
              <option value='latest'>Latest</option>
              <option value='old'>Old</option>
            </select>
          </form>
        </div>

        <div className='products'>
          {data.map((product) => {
            if (product.category !== 'Beauty Product') {
              return (
                <div key={product._id} className='product'>
                  <div className='product-img'>
                    <img src={product.image} alt={product.title} />
                  </div>

                  <div className='product-info'>
                    <span className='ratings'>{product.rating} ⭐</span>

                    <h3>{product.title}</h3>
                    <div className='pricing'>
                      <span className='price'>₹{product.price}</span>
                      <span className='old-price'>₹{product.oldPrice}</span>
                      <span className='off-percent'>
                        (
                        {Math.round(
                          100 - (product.price / product.oldPrice) * 100
                        )}
                        % off)
                      </span>
                    </div>

                    <button onClick={() => handleAdd(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </main>
    </div>
  );
}

export default Products;
