import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cake.css';
import api from '../../services/api';
import { addCartItem } from '../../services/cart';
import slide1 from '../../assets/slide_1.jpg';
import slide2 from '../../assets/slide_2.jpg';
import slide3 from '../../assets/slide_3.jpg';
import ChocolateFudgeCake from '../../assets/Chocolate-Fudge -Cake.jpg';
import StrawberryCreamCake from '../../assets/Strawberry -Cream-Cake.jpg';
import RedVelvetCake from '../../assets/Red-Velvet-Cake.jpg';
import BlackForestCake from '../../assets/Black-Forest-Cake.jpg';
import RainbowCake from '../../assets/Rainbow-Celebration-Cake.jpg';
import CookiesCreamCake from '../../assets/Cookies-Cream-Cake.jpg';
import MangoMagic from '../../assets/Mango-Magic.jpg';
import PistachioRoyale from '../../assets/Pistachio-Royale.jpg';
import RaspberryRomance from '../../assets/Raspberry-Romance.jpg';
import ChocoBerry from '../../assets/ChocoBerry_Lava_Dome.jpg';

const cakeImages: { [key: string]: string } = {
  "Chocolate Fudge Cake": ChocolateFudgeCake,
  "Strawberry Cream Cake": StrawberryCreamCake,
  "Red Velvet Cake": RedVelvetCake,
  "Black Forest Cake": BlackForestCake,
  "Rainbow Celebration Cake": RainbowCake,
  "Cookies & Cream Cake": CookiesCreamCake,
  "Cookies Cream Cake": CookiesCreamCake,
  "Mango Magic Cake": MangoMagic,
  "Mango Magic": MangoMagic,
  "Pistachio Royale Cake": PistachioRoyale,
  "Pistachio Royale": PistachioRoyale,
  "Raspberry Romance Cake": RaspberryRomance,
  "Raspberry Romance": RaspberryRomance,
};

const getCakeImage = (title?: string, fallback?: string) => {
  if (!title) return fallback;

  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes('mango')) return MangoMagic;
  if (normalizedTitle.includes('cookies') && normalizedTitle.includes('cream')) return CookiesCreamCake;
  if (normalizedTitle.includes('rainbow')) return RainbowCake;
  if (normalizedTitle.includes('chocolate fudge')) return ChocolateFudgeCake;
  if (normalizedTitle.includes('strawberry')) return StrawberryCreamCake;
  if (normalizedTitle.includes('red velvet')) return RedVelvetCake;
  if (normalizedTitle.includes('black forest')) return BlackForestCake;
  if (normalizedTitle.includes('pistachio')) return PistachioRoyale;
  if (normalizedTitle.includes('raspberry')) return RaspberryRomance;

  return cakeImages[title] || fallback;
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
  const navigate = useNavigate();
  const [cakes, setCakes] = useState<CakeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: number }>({});
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const load = async () => {
      try {
        let data = await api.getCakes();

        const mangoExists = data.some((cake: CakeItem) =>
          cake.title.toLowerCase().includes('mango')
        );
        const pistachioExists = data.some((cake: CakeItem) =>
          cake.title.toLowerCase().includes('pistachio')
        );

        if (!mangoExists) {
          const mangoCake: CakeItem = {
            _id: 'mango-magic-cake-fallback',
            title: 'Mango Magic Cake',
            description: 'Tropical mango cake with luscious cream and fruity flavor.',
            image: MangoMagic,
            priceVariants: [
              { label: '500g', price: 599 },
              { label: '1kg', price: 1099 }
            ]
          };
          data = [...data, mangoCake];
        }

        if (!pistachioExists) {
          const pistachioCake: CakeItem = {
            _id: 'pistachio-royale-cake-fallback',
            title: 'Pistachio Royale Cake',
            description: 'Premium pistachio cream layered between soft vanilla sponge.',
            image: PistachioRoyale,
            priceVariants: [
              { label: '500g', price: 599 },
              { label: '1kg', price: 1199 }
            ]
          };
          data = [...data, pistachioCake];
        }

        const raspberryExists = data.some((cake: CakeItem) =>
          cake.title.toLowerCase().includes('raspberry')
        );

        if (!raspberryExists) {
          const raspberryCake: CakeItem = {
            _id: 'raspberry-romance-cake-fallback',
            title: 'Raspberry Romance Cake',
            description: 'Tangy raspberry cream paired with fluffy vanilla sponge.',
            image: RaspberryRomance,
            priceVariants: [
              { label: '500g', price: 699 },
              { label: '1kg', price: 1399 }
            ]
          };
          data = [...data, raspberryCake];
        }

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
          <div className="text-center mb-5 cake-intro-card p-4 rounded-4">
            <span className="section-badge">Signature Collection</span>
            <h1 className="display-5 fw-bold">Premium Cake Collection</h1>
            <p className="lead text-muted mb-0">
              Handcrafted happiness for every celebration
            </p>
            {message && <p className="text-success mt-3 mb-0">{message}</p>}
          </div>

          <div className="row g-4">
            {cakes.map((cake) => (
              <div key={cake._id} className="col-12 col-sm-6 col-md-4">
                <div className="card premium-card h-100">

                  {/* Image Section */}
                  <div className="image-wrapper">
                    <img
                      src={getCakeImage(cake.title, cake.image)}
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
                    <label className="form-label small fw-semibold text-muted">Choose a size</label>
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

                    <div className="cake-card-footer">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <p className="text-muted small mb-1">Starting at</p>
                          <h4 className="text-primary fw-bold mb-0">
                            ₹{selectedSize[cake._id]}
                          </h4>
                        </div>
                        <span className="price-pill">Premium</span>
                      </div>

                      <button
                        className="premium-btn w-100"
                        type="button"
                        onClick={() => {
                          const selectedPrice = selectedSize[cake._id] || cake.priceVariants?.[0]?.price || 0;
                          const selectedVariant = cake.priceVariants?.find((variant) => variant.price === selectedPrice);

                          addCartItem({
                            id: `${cake._id}-${selectedVariant?.label || 'default'}`,
                            cakeId: cake._id,
                            title: cake.title,
                            size: selectedVariant?.label || 'Standard',
                            price: selectedPrice,
                            quantity: 1,
                            note: cake.description || '',
                            badge: 'Premium',
                          });

                          setMessage(`${cake.title} added to cart`);
                          setTimeout(() => setMessage(''), 2500);
                          navigate('/cart');
                        }}
                      >
                        🛒 Buy Now
                      </button>
                    </div>
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
              <div className="signature-panel signature-content">
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

                <button
                  className="premium-btn"
                  type="button"
                  onClick={() => {
                    addCartItem({
                      id: 'chocoberry-lava-dome',
                      cakeId: 'chocoberry-lava-dome',
                      title: 'ChocoBerry Lava Dome',
                      size: 'Individual Dome',
                      price: 799,
                      quantity: 1,
                      note: 'Molten chocolate centre with tangy berry compote.',
                      badge: 'Chef\'s Signature',
                    });
                    navigate('/cart');
                  }}
                >
                  ✨ Order Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Cake;