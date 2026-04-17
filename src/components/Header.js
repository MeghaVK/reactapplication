import { useState } from "react";

const Header = () => {
  const [btnname,setbtnname]=useState('Login');
  return (
    
    <nav className='navbar navbar navbar-expand-lg '>
      <div className='container'>
        <a className='navbar-brand' href='#home'>
          <img src='logo.png' height={100} alt='food' />
        </a>

        <button className='navbar-toggler'
          type='button'
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav">
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto gap-5'>
            <li className='nav-item'>
              <a className='nav-link active' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href='#about'>
                About Us
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href='#services'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href='#contact'>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" onClick={()=>{
                btnname==='Login'?setbtnname('Logout') :setbtnname('Login')
              }}>
                {btnname}
              </button>
            </li>


          </ul>

        </div>
      </div>

    </nav>
  )
}
export default Header;