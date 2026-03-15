import './Contact.scss';
import contactBg from '../../assets/bg-img-3.jpg';

function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold premium-title">
            ✨ Reach Out to Butter Bliss
          </h2>
          <p className="lead text-muted">
            Let’s create something sweet and unforgettable for your special day.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="premium-contact-card">
              <div className="row g-0">

                {/* LEFT SIDE WITH IMAGE */}
                <div
                  className="col-lg-6 premium-info-section"
                  style={{
                    backgroundImage: `url(${contactBg})`
                  }}
                >
                  <div className="overlay"></div>

                  <div className="info-content">
                    <h3 className="mb-3">Get In Touch</h3>
                    <p className="mb-4">
                      Have a custom cake idea? A birthday surprise?
                      Or just craving something sweet?
                      We’d love to hear from you!
                    </p>

                    <div className="contact-details">
                      <div className="detail-item">
                        <i className="bi bi-geo-fill"></i>
                        <div>
                          <h6>Address</h6>
                          <p>8014 Edith Blvd NE, Albuquerque, NY</p>
                        </div>
                      </div>

                      <div className="detail-item">
                        <i className="bi bi-telephone-fill"></i>
                        <div>
                          <h6>Phone</h6>
                          <p>+1 (505) 792-2430</p>
                        </div>
                      </div>

                      <div className="detail-item">
                        <i className="bi bi-envelope-fill"></i>
                        <div>
                          <h6>Email</h6>
                          <p>ButterBliss@gmail.com</p>
                        </div>
                      </div>

                      <div className="detail-item">
                        <i className="bi bi-clock-fill"></i>
                        <div>
                          <h6>Opening Hours</h6>
                          <p>Mon – Fri : 9AM – 7PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT FORM */}
                <div className="col-lg-6 bg-white">
                  <div className="p-4 p-lg-5">
                    <h4 className="mb-4 fw-bold">Send Us a Message</h4>

                    <form>
                      <input className="form-control premium-input mb-3" placeholder="Full Name" required />
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input className="form-control premium-input" type="email" placeholder="Email" required />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input className="form-control premium-input" type="tel" placeholder="Phone" />
                        </div>
                      </div>
                      <input className="form-control premium-input mb-3" placeholder="Subject" required />
                      <textarea className="form-control premium-input mb-4" rows={4} placeholder="Message" required />
                      <button className="premium-btn w-100">✉ Send Message</button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;