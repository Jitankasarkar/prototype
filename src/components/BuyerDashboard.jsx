import ProductCard from './ProductCard';
import './BuyerDashboard.css'; // Optional: separate CSS for styling

function BuyerDashboard({ products }) {
  return (
    <div className="buyer-dashboard">
      {products.length > 0 ? (
        <>
          <h2 className="buyer-title">Available Handmade Items</h2>
          <div className="items-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} isBuyer={true} />
            ))}
          </div>
        </>
      ) : (
        <div className="empty-state">
          <h2>No Items Yet</h2>
          <p>Once sellers add products, they’ll show up here.</p>
        </div>
      )}
    </div>
  );
}

export default BuyerDashboard;
