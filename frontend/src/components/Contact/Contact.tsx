import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">

          <div className="col-lg-10">

            <div className="contact-card">

              <div className="row g-0">

                {/* Left Content */}

                <div className="col-lg-5 contact-info p-5">

                  <span className="contact-badge">
                    Contact Us
                  </span>

                  <h2 className="contact-title mt-4">
                    Let's Create Something
                    <span> Sweet Together</span>
                  </h2>

                  <p className="contact-description mt-4">
                    We'd love to hear from you. Whether you have a custom cake
                    idea, want to place an order, or simply have a question,
                    we're always happy to help.
                  </p>

                  <div className="contact-details mt-5">

                    <div className="detail-item">
                      📍 Chennai, Tamil Nadu
                    </div>

                    <div className="detail-item">
                      📞 +91 98765 43210
                    </div>

                    <div className="detail-item">
                      ✉ BB@cakeshop.com
                    </div>

                  </div>

                </div>

                {/* Right Form */}

                <div className="col-lg-7 p-5">

                  <form>

                    <div className="row">

                      <div className="col-md-6 mb-4">

                        <div className="form-floating">

                          <input
                            type="text"
                            className="form-control premium-input"
                            id="name"
                            placeholder="Name"
                          />

                          <label htmlFor="name">
                            Full Name
                          </label>

                        </div>

                      </div>

                      <div className="col-md-6 mb-4">

                        <div className="form-floating">

                          <input
                            type="email"
                            className="form-control premium-input"
                            id="email"
                            placeholder="Email"
                          />

                          <label htmlFor="email">
                            Email Address
                          </label>

                        </div>

                      </div>

                    </div>

                    <div className="mb-4">

                      <div className="form-floating">

                        <input
                          type="text"
                          className="form-control premium-input"
                          id="subject"
                          placeholder="Subject"
                        />

                        <label htmlFor="subject">
                          Subject
                        </label>

                      </div>

                    </div>

                    <div className="mb-4">

                      <div className="form-floating">

                        <textarea
                          className="form-control premium-input"
                          id="message"
                          placeholder="Message"
                          style={{ height: "180px" }}
                        ></textarea>

                        <label htmlFor="message">
                          Your Message
                        </label>

                      </div>

                    </div>

                    <button
                      type="submit"
                      className="btn contact-btn"
                    >
                      Send Message →
                    </button>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;