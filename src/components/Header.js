import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnname, setbtnname] = useState('Login');

  useEffect(() => {
    console.log('header useEffect called');
  }, [btnname]);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        
        <Link className='navbar-brand' to="/">
          <img src='logo.png' height={60} alt='food' />
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto gap-4'>

            <li className='nav-item'>
              <Link className='nav-link' to="/">Home</Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to="/about">About Us</Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/services'>Services</Link>           </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>Contact</Link>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-primary"
                onClick={() =>
                  setbtnname(btnname === 'Login' ? 'Logout' : 'Login')
                }
              >
                {btnname}
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;