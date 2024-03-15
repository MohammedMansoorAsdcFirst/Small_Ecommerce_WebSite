import React from 'react'
import NavBar from './components/NavBar';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className="cards flex flex-wrap justify-center absolute top-28">
          <Card />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
