import React from 'react'
import Header from './header/Header'
import Landing from './landing/Landing'
import WebFont from 'webfontloader'


function App(){
  return (
    <div>
      <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      <Header/>
      <Landing/>
    </div>
  )
}

export default App
