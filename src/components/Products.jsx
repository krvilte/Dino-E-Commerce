import React from 'react';
import ProductImage from '../assets/Product.jpg';

function Products() {
  return (
    <div className='products-page'>
      <section className='filter-options'>
        <div className='header'>
          <span>Filter</span>
        </div>

        <div className='filter-opt'>
          <span>Category</span>

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

          <form className='rating-f'>
            <label htmlFor='rating-filter'>Ratings</label>
            <input
              type='range'
              name='rating-filter'
              id='rating-filter'
              min={0}
              max={5}
            />
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

      <section className='product-section'>
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
          <div className='product'>
            <img src={ProductImage} alt='' />

            <div className='product-info'>
              <span className='ratings'>5.0 ⭐</span>

              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
                beatae aliquam dolores cupiditate temporibus, amet sunt dicta
                delectus autem eum quisquam commodi voluptatibus, unde molestiae
                mollitia earum dignissimos voluptate praesentium?
              </p>
              <div className='pricing'>
                <span className='price'>₹150</span>
                <span className='old-price'>₹233</span>
              </div>

              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
