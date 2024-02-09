import { ReactElement, FC } from "react";
import "./AboutImgGrid.scss";
import grid1 from "../../assets/images/cfa-grid-1.jpg"; 
import grid2 from "../../assets/images/cfa-grid-2.jpg"; 

const AboutImgGrid: FC = (): ReactElement => {
  return (
    <div className="about-img-grid">
          <div className="about-img-grid__div--large">
              <img src={ grid2 } alt="A young kid writing with a pencil" className="about-img-grid__img"/>
      </div>
          <div className="about-img-grid__div--small">
              <img src={ grid1 } alt="A young kid with headphones on" className="about-img-grid__img"/>
      </div>
    </div>
  );
};

export default AboutImgGrid;
