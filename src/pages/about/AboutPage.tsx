import { ReactElement, FC } from 'react'; 
import "./AboutPage.scss"; 
import AboutHero from '../../components/aboutHero/AboutHero';

const AboutPage: FC = ():ReactElement => {
  return (
      <section className='about'>
          <div className="about__container">
            <AboutHero/>
        </div>
    </section>
  )
}

export default AboutPage;