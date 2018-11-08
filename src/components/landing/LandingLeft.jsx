import React from 'react';
import blackPhone from '../../assets/images/blackPhone.png';
import whitePhone from '../../assets/images/whitePhone.png';

function LandingLeft() {
  return (
    <div className="div-styles">
      <style jsx>{`
        .div-styles {
          width: 50%;
        }
        img {
          width: 316px;
          height: 643.23px;
        }
        img + img {
          width: 324px;
          height: 655.91px;
          position: absolute;
          transform: translate(-146px, -9px);
        }
      `}</style>
      <img src={blackPhone}/>
      <img src={whitePhone}/>
    </div>
  );
}

export default LandingLeft;
