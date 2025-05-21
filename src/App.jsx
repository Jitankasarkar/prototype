import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SellerDashboard from './components/SellerDashboard';
import BuyerDashboard from './components/BuyerDashboard';

const initialProducts = [
  { id: 1, name: 'Handmade Candle', description: 'Scented lavender candle', price: 15.99, image: 'https://img3.exportersindia.com/product_images/bc-full/2021/8/9073197/handmade-candles-1629520543-5951257.jpeg' },
  { id: 2, name: 'Tote Bags', description: 'Set of 4 carved bags', price: 12.50, image: 'https://i.pinimg.com/originals/09/8d/93/098d936e5803e7763a3d1c1be2bdcf6f.jpg' },
];

function App() {
  const [user, setUser] = useState(null); 
  const [products, setProducts] = useState(initialProducts);

  const [currentPage, setCurrentPage] = useState('home'); 

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setCurrentPage(parsedUser.type === 'seller' ? 'seller' : 'buyer');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleLogin = (userType, userName) => {
    const newUser = { type: userType, name: userName };
    setUser(newUser);
    setCurrentPage(userType === 'seller' ? 'seller' : 'buyer');
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
    localStorage.removeItem('user');
  };

  const handleReset = () => {
    setUser(null);
    setProducts(initialProducts);
    setCurrentPage('home');
    localStorage.removeItem('user');
    localStorage.removeItem('products');
  };

  const addProduct = (product) => {
    setProducts([...products, { id: products.length + 1, ...product }]);
  };

  return (
    <div>
      <NavBar
        user={user}
        currentPage={currentPage}
        onLoginClick={() => setCurrentPage('login')}
        onHomeClick={() => setCurrentPage('home')}
        onLogout={handleLogout}
        onReset={handleReset}
      />
      <div className="container">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
        {currentPage === 'seller' && <SellerDashboard products={products} addProduct={addProduct} />}
        {currentPage === 'buyer' && <BuyerDashboard products={products} />}
      </div>
    </div>
  );
}

export default App;