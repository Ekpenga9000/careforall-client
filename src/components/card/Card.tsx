import { ReactElement, FC, useRef, useLayoutEffect } from 'react';
import "./Card.scss"; 
import { CardProps } from '../interfaces/interface';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Card: FC<CardProps> = (props): ReactElement => {
    const { imgUrl, alt, header, text } = props; 
    const cardComp = useRef(null); 
    const comp = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(cardComp.current, {
                duration: 1, 
                y: 50, 
                opacity:0,
                scrollTrigger: cardComp.current, 
                ease:"power1.inOut"
            })
        }, comp)
        return () => ctx.revert();
    }, [])

  return (
      <div className='card' ref={cardComp}>
          <div className='card__container'>
              <div className='card__img-div'>
                  <img src={imgUrl} alt={ alt } className='card__img'/>
              </div>
              <h3 className='card__header'>{ header }</h3>
              <p className='card__p'>{ text }</p>
          </div>
      </div>
  )
}

export default Card;