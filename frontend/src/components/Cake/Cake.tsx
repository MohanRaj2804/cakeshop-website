import { useEffect, useState } from 'react';
import './Cake.scss';
import api from '../../services/api';
import slide1 from '../../assets/slide_1.jpg';
import slide2 from '../../assets/slide_2.jpg';
import slide3 from '../../assets/slide_3.jpg';
import ChocolateFudgeCake from '../../assets/Chocolate-Fudge -Cake.jpg';
import StrawberryCreamCake from '../../assets/Strawberry -Cream-Cake.jpg';
import RedVelvetCake from '../../assets/Red-Velvet-Cake.jpg';
import BlackForestCake from '../../assets/Black-Forest-Cake.jpg';
import RainbowCake from '../../assets/Rainbow-Celebration-Cake.jpg';
import CookiesCreamCake from '../../assets/Cookies-Cream-Cake.jpg';
import { Link } from 'react-router-dom';
import ChocoBerry from '../../assets/ChocoBerry_Lava_Dome.jpg';

const cakeImages: { [key: string]: string } = {
  "Chocolate Fudge Cake": ChocolateFudgeCake,
  "Strawberry Cream Cake": StrawberryCreamCake,
  "Red Velvet Cake": RedVelvetCake,
  "Black Forest Cake": BlackForestCake,
  "Rainbow Celebration Cake": RainbowCake,
  "Cookies & Cream Cake": CookiesCreamCake
};

interface PriceVariant {
  label: string;
  price: number;
}

interface CakeItem {
  _id: string;
  title: string;
  description?: string;
  image?: string;
  priceVariants?: PriceVariant[];
}

function Cake() {
  const [cakes, setCakes] = useState<CakeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.getCakes();
        setCakes(data);

        const defaultSelection: { [key: string]: number } = {};
        data.forEach((cake: CakeItem) => {
          if (cake.priceVariants?.length) {
            defaultSelection[cake._id] = cake.priceVariants[0].price;
          }
        });
        setSelectedSize(defaultSelection);
      } catch (err) {
        console.error('Failed to fetch cakes', err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return <p className="text-center py-5">Loading cakes...</p>;
  }

  if (!loading && cakes.length === 0) {
    return (
      <section className="py-5 shop-page">
        <div className="container text-center">
          <h2>No cakes available</h2>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Carousel */}
      <div id="cakeCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[slide1, slide2, slide3].map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img
                src={slide}
                className="d-block w-100 carousel-img"
                alt="cake banner"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cakes Section */}
      <section className="py-5 shop-page">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold">✨ Premium Cake Collection</h1>
            <p className="lead text-muted">
              Handcrafted happiness for every celebration
            </p>
          </div>

          <div className="row g-4">
            {cakes.map((cake) => (
              <div key={cake._id} className="col-12 col-sm-6 col-md-4">
                <div className="card premium-card h-100">

                  {/* Image Section */}
                  <div className="image-wrapper">
                    <img
                      src={cakeImages[cake.title] || cake.image}
                      className="card-img-top"
                      alt={cake.title}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    <span className="badge bg-warning text-dark premium-badge">
                      Best Seller
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{cake.title}</h5>

                    {/* Rating */}
                    <div className="mb-2 text-warning">★★★★☆</div>

                    {cake.description && (
                      <p className="card-text text-muted small">
                        {cake.description}
                      </p>
                    )}

                    {/* Size Selector */}
                    <select
                      className="form-select mb-3"
                      value={selectedSize[cake._id]}
                      onChange={(e) =>
                        setSelectedSize({
                          ...selectedSize,
                          [cake._id]: Number(e.target.value),
                        })
                      }
                    >
                      {cake.priceVariants?.map((pv, i) => (
                        <option key={i} value={pv.price}>
                          {pv.label} - ₹{pv.price}
                        </option>
                      ))}
                    </select>

                    {/* Price */}
                    <h4 className="text-primary fw-bold mb-3">
                      ₹{selectedSize[cake._id]}
                    </h4>

                    <button className="btn btn-dark w-100">
                      🛒 Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="signature-section py-5">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT IMAGE */}
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="signature-img-wrapper">
          <img
            src={ChocoBerry}
            alt="ChocoBerry Lava Dome"
            className="img-fluid signature-img"
          />
          <span className="signature-badge">Chef’s Signature</span>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="col-lg-6">
        <div className="signature-content">
          <h2 className="fw-bold mb-2">
            ChocoBerry Lava Dome
          </h2>

          <p className="signature-tag">(Limited Edition Special)</p>

          {/* PRICE SECTION */}
          <div className="signature-price mb-3">
            <span className="original-price">₹1299</span>
            <span className="discount-price">₹999</span>
            <span className="save-badge">Save ₹300</span>
          </div>

          <p className="text-muted mb-4">
            Rich molten chocolate and tangy berries, perfectly encased in a glossy dome.
            Every bite melts in your mouth, delivering a decadent and unforgettable treat.
          </p>

          {/* Features */}
          <div className="signature-feature">
            <i className="bi bi-stars"></i>
            <span>Made with premium dark chocolate</span>
          </div>

          <div className="signature-feature">
            <i className="bi bi-stars"></i>
            <span>Filled with fresh seasonal berries</span>
          </div>

          <div className="signature-feature mb-4">
            <i className="bi bi-stars"></i>
            <span>Finished with edible gold dust</span>
          </div>

          <Link to="/cake">
            <button className="signature-btn">
              ✨ Order Now
            </button>
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
}

export default Cake;