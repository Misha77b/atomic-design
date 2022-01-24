import React, { useEffect, useState } from 'react';

import './App.scss';
import ProductCad from './Moleculs/ProductCard/ProductCad';

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('./store.json')
    .then(res => res.json())
    .then(res => setProducts(res))
}, [])


  return (
    <div className="App">
      <ProductCad products={products} />
    </div>
  );
}

export default App;
