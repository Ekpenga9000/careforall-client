import { ReactElement, FC } from 'react';
import "./AboutImgGrid.scss";
const AboutImgGrid:FC = ():ReactElement => {
  return (
      <div className='about-img-grid'>
        <div className='about-img-grid__div--large'></div>
        <div className='about-img-grid__div--small'></div>
    </div>
  )
}

export default AboutImgGrid