import "./Footer.scss";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={logo} alt="" className="logo" />
        <h2>Sparkling Stars Ltd</h2>
        <p>Govindpuram Ekta Nagar</p>
        <p>Campwel Road</p>
        <p>Lucknow</p>
      </div>
      <div className="footer-section">
        <h2>Legal Notices</h2>
        <div>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Disclaimer</p>
        </div>
      </div>
      <div className="footer-section">
        <h2>Quick Links</h2>
        <div>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Disclaimer</p>
        </div>
      </div>
      <div className="footer-section">
        <h2>Follow</h2>
        <div>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Disclaimer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
