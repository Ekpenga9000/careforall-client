import { ReactElement, FC } from 'react';
import "./AboutVision.scss";

const AboutVision:FC = ():ReactElement => {
  return (
      <section className='vision'>
          <div className='vision__container'>
              <h3 className='vision__h3'>Our Vision</h3>
              <p className='vision__p'>
              Empowering lives and fostering inclusivity, we envision a world where individuals with disabilities enjoy optimal health and well-being, breaking barriers to lead fulfilling lives.
              </p>
          </div>
    </section>
  )
}

export default AboutVision