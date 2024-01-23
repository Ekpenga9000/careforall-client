import { FC, ReactElement } from 'react'; 
import "./HomePage.scss"; 
import Hero from '../../components/heroSection/Hero';
import Carousel from '../../components/carousel/Carousel';
import { data } from '../../assets/data/data';
const HomePage: FC = (): ReactElement => {
  return (
      <section className='homepage'>
          <div className='homepage__container'>
        <Hero />
        <Carousel cards={data}/>
          </div>
    </section>
  )
}

export default HomePage;