import React from 'react';

const ContactUs = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">

          <div className="row g-4">
            {/* Contact Information Card */}
            <div className="col-lg-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="card-title text-primary mb-4">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    Address
                  </h5>
                  <address className="mb-4">
                    <strong>Shree Bharatesh Gurukul</strong><br />
                    Railway Station Road<br />
                    Bellad Bagewadi – 591 305<br />
                    <strong>Taluka:</strong> Hukkeri<br />
                    <strong>District:</strong> Belagavi<br />
                    <strong>State:</strong> Karnataka
                  </address>

                  <h5 className="card-title text-primary mb-3">
                    <i className="fas fa-envelope me-2"></i>
                    Email
                  </h5>
                  <div className="mb-4">
                    <a href="mailto:bharateshbedcollege@gmail.com" className="d-block text-decoration-none mb-2">
                      bharateshbedcollege@gmail.com
                    </a>
                    <a href="mailto:bharateshcollegeofeducation@rediffmail.com" className="d-block text-decoration-none mb-2">
                      bharateshcollegeofeducation@rediffmail.com
                    </a>
                    <a href="mailto:info@bharateshbedcollege.org" className="d-block text-decoration-none">
                      info@bharateshbedcollege.org
                    </a>
                  </div>

                  <h5 className="card-title text-primary mb-3">
                    <i className="fas fa-phone me-2"></i>
                    Phone
                  </h5>
                  <div>
                    <a href="tel:08333267274" className="d-block text-decoration-none mb-2">
                      08333 267274
                    </a>
                    <a href="tel:9448436668" className="d-block text-decoration-none mb-2">
                      9448436668
                    </a>
                    <a href="tel:7204970888" className="d-block text-decoration-none">
                      7204970888
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="col-lg-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="card-title text-primary mb-4">
                    <i className="fas fa-info-circle me-2"></i>
                    Additional Information
                  </h5>
                  
                  <div className="mb-4">
                    <h6 className="text-dark mb-3">About the College</h6>
                    <p className="text-muted">
                      Bharatesh College of Education is dedicated to providing quality education 
                      and training for aspiring teachers. Located in the heart of Karnataka, 
                      we offer comprehensive programs in teacher education.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-dark mb-3">Getting Here</h6>
                    <p className="text-muted mb-2">
                      <strong>By Train:</strong> Located on Railway Station Road, easily accessible from the railway station.
                    </p>
                    <p className="text-muted mb-2">
                      <strong>By Bus:</strong> Well connected by state transport buses.
                    </p>
                    <p className="text-muted">
                      <strong>By Road:</strong> Accessible via major highways connecting Belagavi district.
                    </p>
                  </div>

                  <div>
                    <h6 className="text-dark mb-3">Connect With Us</h6>
                    <div className="d-flex gap-3">
                      <a href="#" className="btn btn-outline-primary btn-sm">
                        <i className="fab fa-facebook-f me-1"></i>Facebook
                      </a>
                      <a href="#" className="btn btn-outline-info btn-sm">
                        <i className="fab fa-twitter me-1"></i>Twitter
                      </a>
                      <a href="#" className="btn btn-outline-success btn-sm">
                        <i className="fab fa-whatsapp me-1"></i>WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="row mt-5">
            <div className="col-md-4 mb-3">
              <div className="card text-center border-primary">
                <div className="card-body">
                  <i className="fas fa-clock text-primary fs-2 mb-3"></i>
                  <h6 className="card-title">Office Hours</h6>
                  <p className="card-text text-muted small">
                    Mon - Fri: 9:00 AM - 5:00 PM<br />
                    Sat: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center border-success">
                <div className="card-body">
                  <i className="fas fa-graduation-cap text-success fs-2 mb-3"></i>
                  <h6 className="card-title">Admissions</h6>
                  <p className="card-text text-muted small">
                    For admission inquiries<br />
                    Contact us during office hours
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center border-info">
                <div className="card-body">
                  <i className="fas fa-question-circle text-info fs-2 mb-3"></i>
                  <h6 className="card-title">General Info</h6>
                  <p className="card-text text-muted small">
                    For general questions<br />
                    Email or call us anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;