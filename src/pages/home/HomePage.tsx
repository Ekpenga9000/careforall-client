import { FC, ReactElement } from 'react'; 
import "./HomePage.scss"; 
import Hero from '../../components/heroSection/Hero';
import Carousel from '../../components/carousel/Carousel';
import { data } from '../../assets/data/data';
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact-form/Contact';
const HomePage: FC = (): ReactElement => {
  return (
      <section className='homepage'>
          <div className='homepage__container'>
        <Hero />
        <Carousel cards={data} />
        <Contact/>
        <Footer/>
          </div>
    </section>
  )
}

export default HomePage;