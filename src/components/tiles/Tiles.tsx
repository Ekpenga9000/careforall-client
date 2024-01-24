import { ReactElement, FC } from "react";
import "./Tiles.scss";
import ImageComponent from "../imageComponent/ImageComponent";

type imgObj = {
  src: string,
  alt: string,
};

export interface TilesProps {
  image: imgObj,
  icon: imgObj,
  header: string,
  text: string,
  isReverse: boolean,
}

const Tiles: FC<TilesProps> = (props): ReactElement => {
  const { image, icon, header, text, isReverse } = props;
  return (
    <section className="tiles">
      <div className={`tiles__container${isReverse ? "--reverse" : ""}`}>
        <div className="tiles__img-div">
          <ImageComponent imgUrl={image.src} alt={image.alt} />
        </div>
        <div className="tiles__msg-div">
          <div className="tiles__icon-div">
            <ImageComponent imgUrl={icon.src} alt={icon.alt} />
          </div>
          <h3 className="tiles__h3">{header}</h3>
          <p className="tiles__p">{text} </p>
        </div>
      </div>
    </section>
  );
};

export default Tiles;
