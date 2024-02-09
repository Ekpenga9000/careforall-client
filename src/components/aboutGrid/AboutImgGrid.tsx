import { ReactElement, FC, useRef, useLayoutEffect } from "react";
import "./AboutImgGrid.scss";
import grid1 from "../../assets/images/cfa-grid-1.jpg";
import grid2 from "../../assets/images/cfa-grid-2.jpg";
import gsap from "gsap";

const AboutImgGrid: FC = (): ReactElement => {
  const large = useRef(null);
  const small = useRef(null);
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(large.current, {
        duration:0.8, 
        y: -20,
        x: 20, 
        opacity: 0.2,
        ease:"power1.in"
      })
      gsap.from(small.current, {
        duration:0.8, 
        y: 20,
        x: -20, 
        opacity: 0.2,
        ease:"power1.in"
      })
    }, comp);

    return () => ctx.revert(); 
  }, [])
  return (
    <div className="about-img-grid" ref={ comp }>
      <div className="about-img-grid__div--large" ref={large}>
        <img
          src={grid2}
          alt="A young kid writing with a pencil"
          className="about-img-grid__img"
        />
      </div>
      <div className="about-img-grid__div--small" ref={small}>
        <img
          src={grid1}
          alt="A young kid with headphones on"
          className="about-img-grid__img"
        />
      </div>
    </div>
  );
};

export default AboutImgGrid;
