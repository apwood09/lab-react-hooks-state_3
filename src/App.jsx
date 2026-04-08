import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

function App() {
  // dark mode 
  const [darkMode, setDarkMode] = useState(false);

  // category 
  const [category, setCategory] = useState("All");

  // cart
  const [cart, setCart] = useState([]);

  // toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  // add to cart 
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      
      <ProductList category={category} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  );
}

export default App;