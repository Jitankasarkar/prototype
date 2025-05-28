import Banner_1 from "../assets/Banner_1.mp4";
import icon_1 from "../assets/icon_1.png";
import icon_2 from "../assets/icon_2.png";
import icon_3 from "../assets/icon_3.png";

function HomePage() {
  return (
    <div className="home-container">
      {/* Welcome Banner */}

      <section className="welcome-section">
        <div className="video-overlay">
          <video
            className="welcome-video"
            autoPlay
            loop
            muted
            playsInline
            src={Banner_1}
            type="video/mp4"
          />
          <div className="dark-overlay" />
        </div>

        <div className="welcome-content">
          <h3 className="welcome-title">
            Welcome to IEMBaba, a marketplace where
          </h3>
          <p className="welcome-subtitle">
             Artisans meet admirers and creativity finds home. Here, every product tells a story, handcrafted with passion and purpose by skilled creators. At IEMBaba, you're not just shopping — you're supporting dreams, culture, and craftsmanship.
          </p>
          <button className="welcome-button">Start Shopping</button>
        </div>
      </section>

      {/* About Section */}
<section className="about-section">
  <div className="about-container">
    {/* Left (fixed) */}
    <div className="parent-about-left">
    <div className="about-left">
      <h2 className="section-title">About the Marketplace</h2>
      <p className="about-subtitle">
        Discover the heart of handmade. <br />
        Support creativity. <br />
        Empower artisans. <br />
        Celebrate uniqueness.
      </p>
      <button className="about-btn">About</button>
    </div>
    </div>

    {/* Right (scrollable cards) */}
    <div className="about-right">
      <div className="about-cards-scroll">
        <div className="about-card"> 
          <div className="about-icons"><img src={icon_1} alt="" /></div>
          <h3 className="card-title">Curated Handmade Goods</h3>
          <p className="card-description">
            Explore a diverse collection of high-quality, handcrafted items made with love and care by skilled artisans.
          </p>
        </div>
        <div className="about-card">
          <div className="about-icons"><img src={icon_2} alt="" /></div>
          <h3 className="card-title">Support Artisans</h3>
          <p className="card-description">
            Connect directly with creators, empowering small businesses and preserving traditional craftsmanship.
          </p>
        </div>
        <div className="about-card">
                    <div className="about-icons"><img src={icon_3} alt="" /></div>
          <h3 className="card-title">Seamless Experience</h3>
          <p className="card-description">
            Enjoy a user-friendly platform for buying and selling, with secure transactions and global reach.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Reviews Section */}
      <section className="reviews-section">
        <h2 className="review-title">What Our Users Say</h2>
        <div className="reviews-cards">
          <div className="review-card">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="User 1"
              className="review-image"
            />
            <p className="review-quote">
              "I found the most beautiful handmade jewelry here. The quality is
              amazing, and I love supporting artisans!"
            </p>
            <p className="review-author">— Sarah M., Buyer</p>
          </div>
          <div className="review-card">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="User 2"
              className="review-image"
            />
            <p className="review-quote">
              "Selling my crafts on this platform has been a game-changer. It's
              easy to use and reaches customers worldwide."
            </p>
            <p className="review-author">— James T., Seller</p>
          </div>
          <div className="review-card">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
              alt="User 3"
              className="review-image"
            />
            <p className="review-quote">
              "The variety of unique items is incredible. I keep coming back for
              gifts and home decor!"
            </p>
            <p className="review-author">— Emily R., Buyer</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p className="footer-text">
          &copy; 2025 Handmade Marketplace. All rights reserved.
        </p>
        <p className="footer-contact">
          Contact us:{" "}
          <a href="mailto:support@handmademarketplace.com">
            jitankasarkar2017@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
