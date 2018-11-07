import React from 'react';
import HeaderLinks from './HeaderLinks';

function Header(){
  return (
    <div className="header-styles">
      <style jsx>{`
        .header-styles {
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
