import { useState } from 'react';
import ProductCard from './ProductCard';

function SellerDashboard({ products, addProduct }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price && image) {
      addProduct({ name, description, price: parseFloat(price), image });
      setName('');
      setDescription('');
      setPrice('');
      setImage('');
      setError('');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="seller-container">
      <div className="add-item-container">
        <h2 className="add-item-title">Add New Item</h2>
        <div className="login-form">
          <div className="form-group">
            <label className="form-label">Item Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Enter item name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-input"
              placeholder="Enter item description"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Price ($)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-input"
              placeholder="Enter price"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="form-input"
              placeholder="Enter image URL"
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <button onClick={handleSubmit} className="form-button">
            Add Item
          </button>
        </div>
      </div>
      <div>
        <h2 className="items-title">Your Listed Items</h2>
        <div className="items-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} isBuyer={false} />
            ))
          ) : (
            <p className="items-empty">No items listed yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;