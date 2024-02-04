import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Hi from './components/Go';
import Image from './components/wiki';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element= {<Home/>} />
          <Route path="/timer" element={<Hi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;






