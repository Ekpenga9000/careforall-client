import './MeetCeo.scss';
import ceo from '../../assets/images/ceo.jpg';

const MeetCeo = () => {
  return (
      <div className='ceo'>
          <h2 className='ceo__title'>Meet the CEO</h2>
            <div className='ceo__container'>
              <div className='ceo__div'>
                    <h3 className='ceo__h3'>Abass Tijani</h3>
                    <p className='ceo__text'>
                    Our CEO, Abass Tijani, is a visionary leader with a passion for improving the lives of individuals with disabilities. He is committed to providing comprehensive and accessible healthcare solutions, enhancing the quality of life for people with disabilities through innovative and person-centered care, promoting empowerment, dignity, and holistic wellness.
                    </p>
                </div>
                <div className='ceo__img-div'>
                    <img src={ceo} alt='Abass Tijani' className='ceo__img'/>
                </div>
            </div>
    </div>
  )
}

export default MeetCeo