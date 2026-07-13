import './Home.css';
import ChocolateFudgeCake from '../../assets/Chocolate-Fudge -Cake.jpg';
import StrawberryCreamCake from '../../assets/Strawberry -Cream-Cake.jpg';
import RedVelvetCake from '../../assets/Red-Velvet-Cake.jpg';
import BlackForestCake from '../../assets/Black-Forest-Cake.jpg';
import MangoMagic from '../../assets/Mango-Magic.jpg';
import RainbowCake from '../../assets/Rainbow-Celebration-Cake.jpg';
import ChocoBerry from '../../assets/ChocoBerry_Lava_Dome.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="mt-5 py-5 bg-image">
        <div className="container">
          <div className="hero-shell fade-up">
            <div className="row align-items-center g-5">
              <div className="col-12 col-lg-7 text-center text-lg-start">
                <span className="hero-badge">Artisan Cakes • Freshly Baked Daily</span>
                <h1 className="display-5 fw-bold text-black">Every Bite Makes a Memory!</h1>
                <div className="col-lg-10 mx-auto mx-lg-0">
                  <p className="fs-5 mb-4 mt-3">
                    Freshly baked, handcrafted cakes made with love for every celebration.
                    From birthdays to weddings, discover flavors that turn special moments into sweet memories.
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                    <Link to="/cake" className="btn premium-btn btn-lg">Order Now</Link>
                    <Link to="/gallery" className="btn premium-btn  btn-lg">Explore</Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="hero-highlight-card">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <p className="small text-uppercase mb-1">Most loved</p>
                      <h3 className="h5 mb-0">Signature selection</h3>
                    </div>
                    <span className="hero-rating">4.9/5</span>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="hero-feature-item">Hand-finished with premium ingredients</li>
                    <li className="hero-feature-item">Custom frosting and elegant presentation</li>
                    <li className="hero-feature-item">Freshly baked for every celebration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="col-12 col-lg-10 mx-auto my-5 p-auto text-center">
          <span className="section-badge">Crafted With Love</span>
          <h2 className="display-5 fw-bold mb-3 text-color">Delight in Every Slice</h2>
          <p className="mb-4 text-secondary">
            Indulge in the magic of our handcrafted cakes, each made with love and bursting
            with flavor. Perfect for every celebration — from birthdays to sweet surprises.
            Discover your favorite slice of joy and turn moments into memories that last forever!
          </p>
        </div>
      </section>

      <section className="py-5 py-md-6 py-xl-8 page-section">
        <div className="container overflow-hidden">
          <div className="row align-items-center g-5">
            <div className="col-12">
              <div className="featured-grid">
                {[
                  { src: ChocolateFudgeCake, title: "Chocolate Fudge Cake", desc: "Rich, moist chocolate layers topped with decadent fudge frosting for the ultimate chocolate lover's delight." },
                  { src: StrawberryCreamCake, title: "Strawberry Cream Cake", desc: "Fresh strawberries and airy cream layered over soft sponge for a refreshing, fruity treat." },
                  { src: RedVelvetCake, title: "Red Velvet Cake", desc: "Classic red velvet with silky cream cheese frosting, perfect for birthdays and anniversaries." },
                  { src: BlackForestCake, title: "Black Forest Cake", desc: "Layers of chocolate sponge, cherries, and whipped cream — a timeless indulgence." },
                  { src: MangoMagic, title: "Mango Magic", desc: "A tropical delight with fresh mango pieces and creamy coconut frosting." },
                  { src: RainbowCake, title: "Rainbow Celebration Cake", desc: "Colorful layers and playful frosting make it perfect for joyful celebrations." }
                ].map((cake) => (
                  <div key={cake.title}>
                    <div className="card border-0 shadow-sm h-100 card-bg-clr rounded-4 transition-card">
                      <div className="card-body text-center p-4">
                        <img
                          src={cake.src}
                          alt={cake.title}
                          className="img-fluid rounded-3 mb-3 object-fit-cover cake-imgA"
                        />
                        <h5 className="fw-bold mb-2">{cake.title}</h5>
                        <p className="text-secondary small mb-3">{cake.desc}</p>
                        <Link
                          to="/cake"
                          className="fw-bold text-decoration-none try-now d-inline-flex align-items-center gap-1"
                        >
                          Try Now
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                            className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146
                        5.354a.5.5 0 1 1 .708-.708l3
                        3a.5.5 0 0 1 0 .708l-3
                        3a.5.5 0 0 1-.708-.708L10.293
                        8.5H4.5A.5.5 0 0 1 4 8z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="col-12 col-lg-10 mx-auto my-5 p-auto text-center">
          <Link to="/cake" className="btn premium-btn btn-lg">
            See all
          </Link>
        </div>
      </section>


      <section className="py-3 py-md-5 page-section">
        <div className="container">
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <div className="section-surface p-2 p-lg-3 rounded-4">
                <img className="img-fluid rounded-4" loading="lazy" src={ChocoBerry} alt="ChocoBerry Lava Dome cake" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-10 section-surface p-4 p-lg-5 rounded-4">
                  <span className="section-badge">Chef's Signature</span>
                  <h2 className="mb-3">ChocoBerry Lava Dome</h2>
                  <span className="try-now">(Our Special)</span>
                  <hr />
                  <p className="lead fs-4 mb-3 mb-xl-5">
                    Rich molten chocolate and tangy berries, perfectly encased in a glossy dome.
                    Every bite melts in your mouth, delivering a decadent and unforgettable treat.
                  </p>

                  {[
                    "Made with premium dark chocolate",
                    "Filled with fresh seasonal berries",
                    "Finished with edible gold dust",
                  ].map((text, i) => (
                    <div className="d-flex align-items-center mb-3" key={i}>
                      <div className="me-3 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                          <path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z" />
                        </svg>
                      </div>
                      <p className="fs-5 m-0">{text}</p>
                    </div>
                  ))}

                  <Link to="/cake" className="btn premium-btn btn-lg">
                    Browse All Cakes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5 text-center page-section">
        <div className="section-surface p-4 p-lg-5 rounded-4 mb-5">
          <span className="section-badge">Testimonials</span>
          <h2 className="fw-bold mb-3">Sweet Words from Our Happy Customers</h2>
          <hr className="mx-auto mb-3 accent-divider" />
          <p className="text-secondary mb-0">A few moments our guests loved to share with us.</p>
        </div>

        <div className="row g-4 justify-content-center">
          {[
            { name: "Priya S.", quote: "Absolutely loved it! The ChocoBerry Lava Dome was rich, gooey, and perfectly balanced with the berries. A must-try for all chocolate lovers!" },
            { name: "Arjun M.", quote: "The presentation was stunning, and the taste was heavenly. Every bite just melted in my mouth — pure bliss!" },
            { name: "Neha K.", quote: "This cake felt like a dessert straight out of a luxury restaurant. The chocolate and berry combo was divine!" },
            { name: "Rahul D.", quote: "Smooth, rich, and perfectly sweet! It's my new favorite dessert — worth every bite." },
          ].map((t) => (
            <div className="col-12 col-sm-10 col-md-6 col-lg-3" key={t.name}>
              <div className="card shadow border-0 text-start p-4 h-100 testimonial-card">
                <h4 className="fs-5 mb-4">{t.name}</h4>
                <p>{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;