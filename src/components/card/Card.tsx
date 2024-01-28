import { ReactElement, FC } from 'react';
import "./Card.scss"; 
import { CardProps } from '../interfaces/Card';

const Card: FC<CardProps> = (props): ReactElement => {
    const { imgUrl, alt, header, text} = props; 

  return (
      <div className='card'>
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