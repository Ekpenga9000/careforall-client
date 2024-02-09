import { ReactElement, FC, useRef, useLayoutEffect } from "react";
import "./AboutValues.scss";
import grid4 from "../../assets/images/cfa-grid-4.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutValues: FC = (): ReactElement => {
    const comp = useRef(null); 
    const img = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(img.current, {
                duration: 0.8, 
                y: 30,
                x: 20,
                opacity: 0, 
                scrollTrigger: img.current,
                ease:"power1.inOut"
         })
         gsap.utils.toArray<HTMLElement>(".values__item").forEach((item) => {
            gsap.from(item, {
              opacity: 0,
                y: 50,
                x: 20,
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none",
              },
              stagger: {
                amount: 0.5, // Stagger amount
              },
            });
          });
        }, comp);
        
        return () => ctx.revert();
  }, [])

  return (
    <section className="values" ref={comp}>
      <div className="values__container">
        <div className="values__top">
          <div className="values__top--primary"></div>
          <div className="values__top--main" ref={img}>
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
