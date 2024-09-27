import React from 'react';
import BrandImg from '../assets/brand-image.jpg';

function Brand() {
  return (
    <div className='brnad-section'>
      <div className='brand-image'>
        <img src={BrandImg} alt='DINO Since' />
      </div>

      <div className='brand'>
        <h2>The Brand</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim fugit
          iste distinctio possimus non, vitae dolorum dolores quod minus. Neque
          eaque dolorum maiores rerum adipisci ipsa? Alias mollitia quo cumque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim fugit
          iste distinctio possimus non, vitae dolorum dolores quod minus. Neque
          eaque dolorum maiores rerum adipisci ipsa? Alias mollitia quo cumque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim fugit
          iste distinctio possimus non, vitae dolorum dolores quod minus. Neque
          eaque dolorum maiores rerum adipisci ipsa? Alias mollitia quo cumque.
        </p>
      </div>
    </div>
  );
}

export default Brand;
