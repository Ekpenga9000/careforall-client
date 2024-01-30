import { ReactElement, FC } from "react";
import "./Footer.scss";



const Footer: FC = (): ReactElement => {
  

  return (
    <footer className="footer">
      <div className="footer__container">
      <section className="footer__top-section">
        <div className="footer__top-div">
          <div>
            <h4 className="footer__header">Address</h4>
            <p className="footer__p">Care For All Inc.</p>
            <p className="footer__p">Calgary, Alberta</p>
          </div>
          <div>
            <h4 className="footer__header">Contact</h4>
            <p className="footer__p">Phone: (519) 697-3683 </p>
            <p className="footer__p">Email: info@careforall.ca</p>
          </div>
        </div>

        <div className="footer__menu">
          <p className="footer__item">Get Involved</p>
          <p className="footer__item">Services</p>
          <p className="footer__item">Community</p>
          <p className="footer__item">Events</p>
          <p className="footer__item">About us</p>
        </div>
      </section>
      </div>
      <section className="footer__copy-section">
        <p className="footer__copy">
          © 2024 Care For All | All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
