import './Gallery.scss';
import slide1 from '../../assets/slide_1.jpg';
import slide2 from '../../assets/slide_2.jpg';
import slide3 from '../../assets/slide_3.jpg';
import ChocolateFudgeCake from '../../assets/Chocolate-Fudge -Cake.jpg';
import StrawberryCreamCake from '../../assets/Strawberry -Cream-Cake.jpg';
import RedVelvetCake from '../../assets/Red-Velvet-Cake.jpg';
import BlackForestCake from '../../assets/Black-Forest-Cake.jpg';
import RainbowCake from '../../assets/Rainbow-Celebration-Cake.jpg';
import CookiesCreamCake from '../../assets/Cookies-Cream-Cake.jpg';

function Gallery() {
    const images = [
        { src: slide1, alt: 'Cake Showcase 1' },
        { src: slide2, alt: 'Cake Showcase 2' },
        { src: slide3, alt: 'Cake Showcase 3' },
        { src: ChocolateFudgeCake, alt: 'Chocolate Fudge Cake' },
        { src: StrawberryCreamCake, alt: 'Strawberry Cream Cake' },
        { src: RedVelvetCake, alt: 'Red Velvet Cake' },
        { src: BlackForestCake, alt: 'Black Forest Cake' },
        { src: RainbowCake, alt: 'Rainbow Celebration Cake' },
        { src: CookiesCreamCake, alt: 'Cookies Cream Cake' }
    ];

    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold">Our Sweet Gallery</h1>
                        <p className="lead text-secondary">Explore our delicious creations that bring joy to every celebration</p>
                    </div>
                    <div className="row g-4">
                        {images.map((image, index) => (
                            <div key={index} className="col-12 col-sm-6 col-md-4">
                                <div className="gallery-item">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="img-fluid rounded shadow-sm"
                                        style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Gallery;