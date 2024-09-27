import React from 'react';
import Search from './Search';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoCart } from 'react-icons/io5';

import '../scss/layout.scss';

function Header() {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
          <div className='left-nav'>
            <Link to='/' className='logo-link'>
              <h1 className='logo'>DINO</h1>
            </Link>

            <div className='navmenu-container'>
              <ul className='navmenu'>
                <li className='navitem'>
                  <NavLink to='/' className='link'>
                    Home
                  </NavLink>
                </li>

                <li className='navitem'>
                  <NavLink to='/brand' className='link'>
                    Brand
                  </NavLink>
                </li>

                <li className='navitem'>
                  <NavLink to='/products' className='link'>
                    Products
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className='right-nav'>
            <div className='search-bar'>
              <Search />
            </div>

            <div className='profile-control'>
              <FaRegUserCircle />
              <span>Profile</span>
            </div>

            <NavLink to='/cart' className='cart'>
              <div className='cart-control'>
                <IoCart />
                <div>
                  <span className='itemAdded'>2</span>
                  <span>Cart</span>
                </div>
              </div>
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;