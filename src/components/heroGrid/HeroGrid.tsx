import { ReactElement, FC } from "react";
import "./HeroGrid.scss";
import grid1 from "../../assets/images/cfa-grid-1.jpg"; 
import grid2 from "../../assets/images/cfa-grid-2.jpg"; 
import grid4 from "../../assets/images/cfa-grid-4.jpg"; 
import grid3 from "../../assets/images/cfa-grid-3.jpg"; 

const HeroGrid: FC = (): ReactElement => {
  return (
    <div className="heroGrid">
      <div className="heroGrid__layout">
              <div className="heroGrid__side">
                  <img src={ grid1 } alt="A young kid with headphones on" className="heroGrid__img"/>
        </div>
              <div className="heroGrid__top">
              <img src={ grid2 } alt="A young kid writing with a pencil" className="heroGrid__img"/>
        </div>
              <div className="heroGrid__middle">
              <img src={ grid4 } alt="A young kid on a chair smiling" className="heroGrid__img"/>
        </div>
              <div className="heroGrid__bottom">
              <img src={ grid3 } alt="A woman embracing a boy and a man standing beside them and they're all smiling" className="heroGrid__img"/>
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
