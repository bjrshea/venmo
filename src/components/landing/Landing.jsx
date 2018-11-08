import React from 'react';
import LandingRight from './LandingRight';
import LandingLeft from './LandingLeft';


function Landing(){
  return (
    <div className="div-styles">
      <LandingLeft/>
      <LandingRight/>
      <style jsx>{`
        .div-styles {
          display: flex;
          max-width: 1000px;
          min-height: 906px;
          margin: 2em auto auto auto;
        }
      `}</style>
    </div>
  )
}

export default Landing;
