import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div>
          <p className="footer__title">Get to Know Us</p>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>
        <div>
          <p className="footer__title">Make Money with Us</p>
          <p>Sell products on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-publish with US</p>
          <p>Host an Amazon Hub</p>
        </div>
        <div className="hideOnSmall">
          <p className="footer__title ">Amazon Payment Products</p>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>
        <div>
          <p className="footer__title">Let Us Help You</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates </p>
          <p>Amazon Assistant</p>
          <p>Amazon and Covid-19</p>
          <p>Returns & Rplacement</p>
          <p>Help</p>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright__info">
          <span className="hideOnSmall">Conditions of Use</span>
          <span className="hideOnSmall">Privacy Notice</span>
          <span>Interest-Based Ads</span>
          <span>
            &copy; 2020, Amazon Clone By{" "}
            <a href="https://github.com/Nomi0125"> Nomi.</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
