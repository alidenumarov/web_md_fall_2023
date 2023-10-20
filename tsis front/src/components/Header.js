import React from 'react';
import logos from '../img/pizza-logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacts');
  };

  return (
    <div className='header'>
      <div className="logo">
        <a href="/">
          <img src={logos} alt="logo" />
        </a>
      </div>
      <div className="address">
        <p>Palermo Pizza Delivery</p>
        <p>in Almaty</p>
      </div>
      <div className="phone_number">
        <p onClick={handleClick}>
          Contacts
        </p>
      </div>
    </div>
  );
};

export default Header;
