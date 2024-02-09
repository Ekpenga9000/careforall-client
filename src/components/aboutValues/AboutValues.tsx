import { ReactElement, FC } from "react";
import "./AboutValues.scss";
import grid4 from "../../assets/images/cfa-grid-4.jpg";

const AboutValues: FC = (): ReactElement => {
  return (
    <section className="values">
      <div className="values__container">
        <div className="values__top">
          <div className="values__top--primary"></div>
          <div className="values__top--main">
            <img
              src={grid4}
              alt="Boy sitting on a chair and smiliing"
              className="values__img"
            />
          </div>
          {/* <div className="values__top--tertiary"></div> */}
        </div>
      </div>
      <div className="values__container--bottom">
        <div className="values__bottom">
          <h4 className="values__h4">Our Values</h4>
          <ul className="values__list">
            <li className="values__item">
              <span className="values__span">C</span>ommunity
            </li>
            <li className="values__item">
              <span className="values__span">A</span>dvocacy
            </li>
            <li className="values__item">
              <span className="values__span">R</span>espect
            </li>
            <li className="values__item">
              <span className="values__span">I</span>nclusivity
            </li>
            <li className="values__item">
              <span className="values__span">N</span>urturing
            </li>
            <li className="values__item">
              <span className="values__span">G</span>rowth
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
