import React from 'react';
import HeaderLinks from './HeaderLinks';
import HeaderLogo from './HeaderLogo';

function Header(){
  return (
    <div className="div-styles">
      <HeaderLogo/>
      <HeaderLinks/>
      <style jsx>{`
        .div-styles {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          width: auto;
          background-color: white;
          border-bottom: 1px solid #EDEDED;
        }
      `}</style>
    </div>
  )
}

export default Header;
