import { ReactElement, FC } from 'react'; 
import "./AboutHero.scss"
import AboutImgGrid from '../aboutGrid/AboutImgGrid';

const AboutHero:FC = ():ReactElement => {
  return (
      <div className='about-hero'>
          <div className='about-hero__div'>
              <h2 className='about-hero__text'>Mission</h2>
              <p className='about-hero__text'>
              Dedicated to providing comprehensive and accessible healthcare solutions, our mission is to enhance the quality of life for people with disabilities through innovative and person-centered care, promoting independence, dignity, and holistic wellness.
              </p>
          </div>
          <div className='about-hero__img-div'>
            <AboutImgGrid/>
          </div>
    </div>
  )
}

export default AboutHero;