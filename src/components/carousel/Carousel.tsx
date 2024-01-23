import { ReactElement, FC } from 'react'; 
import Card from '../card/Card';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps{
    cards: {
        imgUrl: string,
        alt: string,
        header: string,
        text: string
    }[]; 
}
const Carousel: FC<CarouselProps> = (props): ReactElement => {
    const { cards } = props; 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 5
              }
            }
          ]
    };
    
    return (
        <Slider {...settings}>
            {
                cards.map((card, index) => (
                    <div key={index}>
                        <Card
                            imgUrl={card.imgUrl}
                            alt={card.alt}
                            header={card.header}
                            text={card.text}
                                />
                    </div>
                ))
            }
      </Slider>
  )
}

export default Carousel