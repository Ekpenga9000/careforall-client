import { FC, ReactElement, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.scss";
import heroImg from "../../assets/images/careforall1.png";

const Hero: FC = (): ReactElement => {
  const comp = useRef(null); 
  const headerH1 = useRef(null); 
  const heroImgDiv = useRef(null);
  const headerH3 = useRef(null); 

  useLayoutEffect(() => {
    let ctx = gsap.context(() => { 
      gsap.from(headerH1.current, {
        duration: 1,
        opacity: 0.5,
        x: -25,
        ease: "power1.in"
      }); 
      gsap.from(heroImgDiv.current, {
        duration: 1,
        opacity: 0.5,
        y: 1,
        ease: "power1.in"
      });
      gsap.from(headerH3.current, {
        duration: 1,
        opacity: 0.5,
        y: 5,
        ease: "power1.in"
      });
    }, comp); 

    return () => ctx.revert();
   }, []);

  return (
    <section className="hero" ref={comp}>
      <div className="hero__top">
        <div className="hero__msg-div">
          <h1 className="hero__h1" ref={headerH1}>
            "Empowering Lives: Inclusive Support Services for Individuals with
            Disabilities"
          </h1>
          <div className="hero__btn-div">
            <button className="hero__btn">Join the community</button>
          </div>
        </div>
        <div className="hero__img-div" ref={heroImgDiv}>
          <img
            src={heroImg}
            alt="Woman holding a special boy and man smiling with them"
            className="hero__img"
          />
        </div>
      </div>
      <div className="hero__bottom">
        <h3 className="hero__h3" ref={ headerH3 }>
          Step into a compassionate haven, where we dedicate ourselves to
          enhancing lives through tailored support services. Join our caring
          community, prioritizing your well-being and fostering independence.
          Together, let's create a world where everyone's abilities shine,
          building a future filled with warmth and boundless possibilities.
        </h3>
      </div>
    </section>
  );
};

export default Hero;
