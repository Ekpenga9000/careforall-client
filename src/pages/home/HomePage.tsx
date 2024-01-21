import { FC, ReactElement } from 'react'; 
import "./HomePage.scss"; 
import TextComp from '../../components/TextComp';

const HomePage:FC = ():ReactElement => {
  return (
      <section className='homepage'>
          <div className='homepage__container'>
             <TextComp/> 
          </div>
    </section>
  )
}

export default HomePage