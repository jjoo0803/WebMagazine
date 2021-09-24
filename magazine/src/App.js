import React, { useState, useEffect } from 'react'
import './App.css';

import Header from './components/header/Header'
import Content from './components/body/content'
import { MockData } from './MockData/Mock'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(MockData)
  }, [data])

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content data={data}/>
      </header>
    </div>
  );
}

export default App;
