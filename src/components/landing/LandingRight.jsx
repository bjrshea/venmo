import React from 'react';

function LandingRight() {
  return (
    <div className="div-styles">
      <style jsx>{`
        .div-styles {
          font-family: helvetica;
          width: 50%;
          text-align: center;
        }
        h1 {
          margin-top: 140px;
          font-size: 40px;
          font-weight: 200;
          color: #262626;
        }
        h5, h3 {
          font-weight: 200;
          color: #717273;
        }
        .button-large {
          font-size: 20px;
          line-height: 24px;
          padding: 16px 28px;
          background-color: #3d95ce;
          box-shadow: 0 1px 2px rgba(38,38,38,.15);
          color: #fff;
          border-radius: 4px;
          width: 383.328px;
          height: 56px;
          font-weight: 600;
          border: none;
        }
        .button-large:hover {
          cursor: pointer;
          opacity: .5;
        }
      `}</style>
      <h1>Send money and make purchases at approved merchants</h1>
      <button className='button-large'>Sign Up with Facebook</button>
      <h5>We'll never post without your permission.</h5>
      <h3>or with your email address</h3>
    </div>
  )
}
export default LandingRight;
