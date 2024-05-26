import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Dishes from './components/Dishes';
import About from './components/About';
import Review from './components/Review';
import Order from './components/Order';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Dishes />
      <About />
      <Review />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
