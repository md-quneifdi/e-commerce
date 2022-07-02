import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './HomePage.css';

function HomePage() {

  const [counter, setCounter] = useState(0);
  const [add, setAdd] = useState(false);

  return (
    <div className="home-page">
      <Header count={counter} add={add} setAdd={() => setAdd(false)}  />
      <Main count={counter} incCount={() => setCounter(counter + 1)}
       decCount={() => (counter > 0 ? setCounter(counter - 1) : "")} 
       add={add} setAdd={() => setAdd(true)} />
    </div>
  )
}

export default HomePage;
