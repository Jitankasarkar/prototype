import ProductCard from './ProductCard';

function BuyerDashboard({ products }) {
  return (
    <div>
      <h2 className="buyer-title">Available Handmade Items</h2>
      <div className="items-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} isBuyer={true} />
          ))
        ) : (
          <p className="items-empty">No items available.</p>
        )}
      </div>
    </div>
  );
}

export default BuyerDashboard;