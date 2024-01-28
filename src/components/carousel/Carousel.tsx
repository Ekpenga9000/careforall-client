import { ReactElement, FC } from "react";
import Card from "../card/Card";
import "./Carousel.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardProps } from "../interfaces/Card";

const Carousel: FC<{ cards?: CardProps[] }> = ({
  cards = [],
}): ReactElement => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 5,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <div className="flex flex-wrap">
      {/* <Slider {...settings}> */}
        {cards.map((card) => {
          return (
            <div>
              <Card
                key={card.id}
                imgUrl={card.imgUrl}
                alt={card.alt}
                header={card.header}
                text={card.text}
              />
            </div>
          );
        })}
      {/* </Slider> */}
      </div>
    </div>
  );
};

export default Carousel;
