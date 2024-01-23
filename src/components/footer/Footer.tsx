import { ReactElement, FC } from "react";
import "./Footer.scss";

const Footer: FC = (): ReactElement => {
  return (
    <footer className="footer">
      <section></section>
      <section className="footer__copy-section">
        <p className="footer__copy">
          © 2024 Care For All | All Rights Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
