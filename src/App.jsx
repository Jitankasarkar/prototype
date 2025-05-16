import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SellerDashboard from './components/SellerDashboard';
import BuyerDashboard from './components/BuyerDashboard';

// Mock initial products
const initialProducts = [
  { id: 1, name: 'Handmade Candle', description: 'Scented lavender candle', price: 15.99, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
  { id: 2, name: 'Wooden Coaster', description: 'Set of 4 carved coasters', price: 12.50, image: 'https://images.unsplash.com/photo-1590283603385-4e1d1b2f8c07' },
];

function App() {
  const [user, setUser] = useState(null); // { type: "seller" | "buyer", name: string }
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('products');
    return saved ? JSON.parse(saved) : initialProducts;
  });
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'login', 'seller', 'buyer'

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