import React from 'react';

function HeaderLinks(){
  return (
    <div className="div-styles">
      <style jsx>{`
        .div-styles {
          font-size: 16px;
          color: #3D95CE;
          margin-right: 5%;
        }
        ul {
          list-style: none;
        }
        li {
          display: inline;
          padding: 20px;
          font-family: helvetica;
          font-weight: 200;
        }
        .sign-up {
          font-weight: 400;
        }
      `}</style>
      <ul>
        <li>How Venmo Works</li>
        <li>Business</li>
        <li>Card</li>
        <li>Security</li>
        <li>Contact Us</li>
        <li className="sign-up">Sign In</li>
      </ul>
    </div>
  )
}

export default HeaderLinks;
