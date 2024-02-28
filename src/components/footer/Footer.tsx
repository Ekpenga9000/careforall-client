import { ReactElement, FC } from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

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
              <a
                className="footer__p"
                href={`mailto:abasstijani@careforall.ca`}
              >
                Email: abasstijani@careforall.ca
              </a>
              <ul className="footer__menu-item">
                <li className="footer__list">
                  <a
                    href="https://www.instagram.com/careforall.ca/"
                    target="blank"
                    className="footer__icon-link"
                  >
                    <FaInstagram className="footer__icon" />
                  </a>
                </li>
                <li className="footer__list">
                  <a
                    href="https://www.facebook.com/careforallinc"
                    target="blank"
                    className="footer__icon-link"
                  >
                    <FaFacebookF className="footer__icon" />
                  </a>
                </li>
                <li className="footer__list">
                  <a
                href="/"
                    target="blank"
                    className="footer__icon-link"
                  >
                    <FaLinkedinIn className="footer__icon" />
                  </a>
                </li>
              </ul>
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
