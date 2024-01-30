import { ReactElement, FC } from "react";
import { CardProps } from "../interfaces/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Zoom } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-flip";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../card/Card";

const CarouselDemo: FC<{ cards?: CardProps[] }> = ({
  cards = [],
}): ReactElement => {
    return (
      <>
      <div className="">
      <Swiper
        style={{
          "--swiper-navigation-color": "#E23664",
          "--swiper-pagination-color": "#E23664",
          width: "100%",
          padding: "1.5rem",
        }}
        slidesPerView={3}
        autoplay={true}
        speed={1000}
        spaceBetween={1}
        zoom={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide>
            <Card
              key={card.id}
              imgUrl={card.imgUrl}
              alt={card.alt}
              header={card.header}
              text={card.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
            </div>
            
    {/* <div className="hidden lg:block">
      <Swiper
        style={{
          "--swiper-navigation-color": "#E23664",
          "--swiper-pagination-color": "#E23664",
          width: "100%",
          padding: "1.5rem",
        }}
        slidesPerView={3}
        autoplay={true}
        speed={1000}
        spaceBetween={10}
        zoom={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {cards.map((card) => (
          <SwiperSlide>
            <Card
              key={card.id}
              imgUrl={card.imgUrl}
              alt={card.alt}
              header={card.header}
              text={card.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div> */}
      </>
  );
};

export default CarouselDemo;
