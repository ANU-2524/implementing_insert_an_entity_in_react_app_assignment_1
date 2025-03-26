// src/App.jsx

import React from 'react';
import Home from './Home';
import {Routes , Route} from 'react-router-dom' ;
import './App.css'; // Import global styles
import AddData from './components/AddData.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="add-Book" element={<AddData/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
