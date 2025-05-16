function ProductCard({ product, isBuyer }) {
    const handleBuy = () => {
      alert(`You have selected to buy ${product.name} for $${product.price.toFixed(2)}!`);
    };
  
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        {isBuyer && (
          <button onClick={handleBuy} className="product-button">
            Buy
          </button>
        )}
      </div>
    );
  }
  
  export default ProductCard;