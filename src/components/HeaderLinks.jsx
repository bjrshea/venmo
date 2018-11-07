import React from 'react';

function HeaderLinks(){
  return (
    <div className="header-link-styles">
      <style jsx>{`
        .header-link-styles {
          font-size: 16px;
          color: #3D95CE;
        }
      `}</style>
      <ul>
        <li>How Venmo Works</li>
        <li>Business</li>
        <li>Card</li>
        <li>Security</li>
        <li>Contact Us</li>
        <li>Sign In</li>
      </ul>
    </div>
  )
}
