import styles from "./footer.module.css";

const Footer = () => (
  <footer id="contact" className={styles.footer}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <h5>Contact Information</h5>
          <div className="mb-3">
            <i className="fas fa-map-marker-alt text-primary mr-2"></i>
            123 Education Street, Belagavi, Karnataka 590001
          </div>
          <div className="mb-3">
            <i className="fas fa-phone text-primary mr-2"></i>
            +91 831 2345678
          </div>
          <div className="mb-3">
            <i className="fas fa-envelope text-primary mr-2"></i>
            contact@bharateshbed.org
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#home" className={styles.footerLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.footerLink}>
                About Us
              </a>
            </li>
            <li>
              <a href="#academics" className={styles.footerLink}>
                Academics
              </a>
            </li>
            <li>
              <a href="#faculty" className={styles.footerLink}>
                Faculty
              </a>
            </li>
            <li>
              <a href="#facilities" className={styles.footerLink}>
                Facilities
              </a>
            </li>
            <li>
              <a href="#events" className={styles.footerLink}>
                Events
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12 mb-4">
          <h5>Connect With Us</h5>
          <div className={`${styles["social-icons"]} mb-3`}>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p>
            Follow us on social media for latest updates and news about our
            college activities.
          </p>
        </div>
      </div>
      <hr style={{ borderColor: "#475569" }} />
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            &copy; 2025 Bharatesh B.Ed College. All rights reserved. | Designed
            with ❤️ for Excellence in Education
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
