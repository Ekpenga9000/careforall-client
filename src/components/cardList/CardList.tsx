import { ReactElement, FC } from 'react'; 
import { CardProps } from '../interfaces/Card';
import Card from '../card/Card';
import "./CardList.scss";

const CardList: FC<{ cards?: CardProps[] }> = ({ cards = [] }): ReactElement => {
 
  return (
      <div className='cardList'>
          {
              cards.map((card) => (
                <Card
                key={card.id}
                imgUrl={card.imgUrl}
                alt={card.alt}
                header={card.header}
                text={card.text}
              />
              ))
          }
    </div>
  )
}

export default CardList;