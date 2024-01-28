import { ReactElement, FC, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Tiles.scss";
import ImageComponent from "../imageComponent/ImageComponent";
gsap.registerPlugin(ScrollTrigger);

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
  const comp = useRef(null); 
  const imgDiv = useRef(null); 
  const statementDiv = useRef(null); 

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(imgDiv.current, {
        duration: 1,
        x: -50,
        opacity: 0,
        scrollTrigger: imgDiv.current,
        ease: "power1.out"
      });
      gsap.from(statementDiv.current, {
        duration: 1,
        x: 300,
        opacity: 0,
        scrollTrigger: statementDiv.current,
        ease: "power1.out"
      });
     }, comp);

    return () => ctx.revert(); 
  }, [])

  const { image, icon, header, text, isReverse } = props;
  return (
    <section className="tiles" ref={comp}>
      <div className={`tiles__container${isReverse ? "--reverse" : ""}`}>
        <div className="tiles__img-div" ref={isReverse ? statementDiv : imgDiv }>
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
