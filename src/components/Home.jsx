import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import womensCollection from '../assets/Collection-01.jpg';
import mensCollection from '../assets/Collection-02.jpg';
import kidsCollection from '../assets/Collection-03.jpg';
import beauty from '../assets/beauty.jpg';

function Home() {
  return (
    <>
      <div className='hero-section'>
        <div className='hero-cover'>
          <div>
            <h3 className='hero-title'>Exclusice Offer</h3>
            <span className='info-light'>Classic Collection</span>
            <span className='offer'>UP-TO 40% OFF</span>

            <div className='shopbtn'>
              <Link to='/products' className='shop'>
                <span>Shop Now</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='new-products'>
        <h2>New Arrivals</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          delectus!
        </p>

        <div className='categ-container'>
          <div className='categ'>
            <img src={womensCollection} alt='Womens Products' />
            <div className='overlay'>
              <span className='text'>Women's Collection</span>
            </div>
          </div>
          <div className='categ'>
            <img src={mensCollection} alt='Mens Products' />
            <div className='overlay'>
              <span className='text'>Men's Collection</span>
            </div>
          </div>
          <div className='categ'>
            <img src={kidsCollection} alt='Kids Products' />
            <div className='overlay'>
              <span className='text'>Kids's Collection</span>
            </div>
          </div>
        </div>
      </div>

      <div className='other-products'>
        <h2>Other Collection</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          delectus!
        </p>

        <div className='opt-container'>
          <div className='opt'>
            <img src={beauty} alt='Beauty Products' />
            <div className='opt-text'>
              <span className='text'>Beauty</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
