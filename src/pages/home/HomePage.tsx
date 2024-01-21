import { FC, ReactElement } from 'react'; 
import "./HomePage.scss"; 
import Hero from '../../components/heroSection/Hero';

const HomePage:FC = ():ReactElement => {
  return (
      <section className='homepage'>
          <div className='homepage__container'>
             <Hero/>
          </div>
    </section>
  )
}

export default HomePage;