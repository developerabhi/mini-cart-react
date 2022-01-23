import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<ProductList/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
