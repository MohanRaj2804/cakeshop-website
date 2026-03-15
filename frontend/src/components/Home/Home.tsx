import './Home.scss';
import ChocolateFudgeCake from '../../assets/Chocolate-Fudge -Cake.jpg';
import StrawberryCreamCake from '../../assets/Strawberry -Cream-Cake.jpg';
import RedVelvetCake from '../../assets/Red-Velvet-Cake.jpg';
import BlackForestCake from '../../assets/Black-Forest-Cake.jpg';
import ChocoBerry from '../../assets/ChocoBerry_Lava_Dome.jpg';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className=" mt-5 py-5 bg-img col">
                <div className='col-9'>
                    <h1 className="display-5 fw-bold text-black ">Every Bite Makes a Memory!</h1>
                    <div className="col-lg-6 mx-auto w-75">
                        <p className="fs-5 mb-5 mt-5 text-center">
                            Indulge in our freshly baked, handcrafted cakes made with love and the finest ingredients. From birthdays to weddings, every cake is a delicious masterpiece designed to bring joy, sweetness, and unforgettable memories to your celebrations. Explore our flavors, create your dream cake, and make every moment extra special.
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="h-btn btn-lg px-3 me-sm-3 fw-bold shadow-sm rounded-pill">Order Now</button>
                            <button type="button" className="h-btn-2 btn-lg px-4 shadow-sm rounded-pill">Explore</button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-5 py-md-6 py-xl-8">
                <div className="container overflow-hidden">
                    <div className="row align-items-center g-5">
                        {/* Text Section */}
                        <div className="col-12 col-lg-5">
                            <div className="text-section">
                                <h2 className="display-5 fw-bold mb-3 text-color">Delight in Every Slice</h2>
                                <p className="mb-4 text-secondary">
                                    Indulge in the magic of our handcrafted cakes, each made with love and bursting
                                    with flavor. Perfect for every celebration — from birthdays to sweet surprises.
                                    Discover your favorite slice of joy and turn moments into memories that last forever!
                                </p>
                                <Link to='/cake'>
                                    <a href="#!" className="btn btn-lg btn-clr fw-semibold shadow-sm rounded-pill">
                                        Browse All Cakes
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/* Cakes Section */}
                        <div className="col-12 col-lg-7">
                            <div className="row g-4">
                                {[ // We’ll map the cards for DRY code
                                    { src: ChocolateFudgeCake, title: "Chocolate Fudge Cake", desc: "Rich, moist chocolate layers topped with decadent fudge frosting for the ultimate chocolate lover’s delight." },
                                    { src: StrawberryCreamCake, title: "Strawberry Cream Cake", desc: "Fresh strawberries and airy cream layered over soft sponge for a refreshing, fruity treat." },
                                    { src: RedVelvetCake, title: "Red Velvet Cake", desc: "Classic red velvet with silky cream cheese frosting, perfect for birthdays and anniversaries." },
                                    { src: BlackForestCake, title: "Black Forest Cake", desc: "Layers of chocolate sponge, cherries, and whipped cream — a timeless indulgence." },
                                ].map((cake, i) => (
                                    <div className="col-12 col-sm-6" key={i}>
                                        <div className="card border-0 shadow-sm h-100 card-bg-clr rounded-4 transition-card">
                                            <div className="card-body text-center p-4">
                                                <img
                                                    src={cake.src}
                                                    alt={cake.title}
                                                    className="img-fluid rounded-3 mb-3 object-fit-cover"
                                                    style={{ height: "200px", width: "100%" }}
                                                />
                                                <h5 className="fw-bold mb-2">{cake.title}</h5>
                                                <p className="text-secondary small mb-3">{cake.desc}</p>
                                                <Link to='/cake'>
                                                    <a href="#!" className="fw-bold text-decoration-none try-now d-inline-flex align-items-center gap-1">
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
                                                    </a>
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

            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6">
                            <img className="img-fluid rounded" loading="lazy" src={ChocoBerry} alt="About 2" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-center">
                                <div className="col-12 col-xl-10">
                                    <h2 className="mb-3">ChocoBerry Lava Dome</h2>
                                    <span className='try-now'>(Our Special)</span>
                                    <hr />
                                    <p className="lead fs-4 mb-3 mb-xl-5">Rich molten chocolate and tangy berries, perfectly encased in a glossy dome. Every bite melts in your mouth, delivering a decadent and unforgettable treat.</p>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z" /></svg>
                                        </div>
                                        <div>
                                            <p className="fs-5 m-0">Made with premium dark chocolate</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z" /></svg>
                                        </div>
                                        <div>
                                            <p className="fs-5 m-0">Filled with fresh seasonal berries</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-4 mb-xl-5">
                                        <div className="me-3 text-primary">

                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-80q-17 0-28.5-11.5T120-120v-200q0-33 23.5-56.5T200-400v-160q0-33 23.5-56.5T280-640h160v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h160q33 0 56.5 23.5T760-560v160q33 0 56.5 23.5T840-320v200q0 17-11.5 28.5T800-80H160Zm120-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z" /></svg>
                                        </div>
                                        <p className="fs-5 m-0">Finished with edible gold dust</p>                         <div>

                                        </div>
                                    </div>
                                    <Link to='/cake'>
                                        <a href="#!" className="btn btn-lg btn-clr fw-semibold shadow-sm rounded-pill thm-color">
                                            Taste the Magic
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container my-5 text-center">
                <h2 className="fw-bold mb-3">Sweet Words from Our Happy Customers</h2>
                <hr className="mx-auto mb-5" style={{ width: "80px", height: "3px", backgroundColor: "#f08e80", border: "none" }} />

                <div className="row g-4 justify-content-center">
                    <div className="col-12 col-sm-10 col-md-6 col-lg-3">
                        <div className="card shadow border-0 text-start p-4 h-100">
                            <h4 className="fs-5 mb-4">Priya S.</h4>
                            <p>
                                Absolutely loved it! The ChocoBerry Lava Dome was rich, gooey, and perfectly balanced with the berries. A must-try for all chocolate lovers!
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-10 col-md-6 col-lg-3">
                        <div className="card shadow border-0 text-start p-4 h-100">
                            <h4 className="fs-5 mb-4">Arjun M.</h4>
                            <p>
                                The presentation was stunning, and the taste was heavenly. Every bite just melted in my mouth — pure bliss!
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-10 col-md-6 col-lg-3">
                        <div className="card shadow border-0 text-start p-4 h-100">
                            <h4 className="fs-5 mb-4">Neha K.</h4>
                            <p>
                                This cake felt like a dessert straight out of a luxury restaurant. The chocolate and berry combo was divine!
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-10 col-md-6 col-lg-3">
                        <div className="card shadow border-0 text-start p-4 h-100">
                            <h4 className="fs-5 mb-4">Rahul D.</h4>
                            <p>
                                Smooth, rich, and perfectly sweet! It’s my new favorite dessert — worth every bite.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;