import { FC, ReactElement } from 'react'; 
import "./HomePage.scss"; 
import Hero from '../../components/heroSection/Hero';
// import Carousel from '../../components/carousel/Carousel';
// import { data } from '../../assets/data/data';
import photo1 from "../../assets/images/careforall2.jpg"; 
import photo2 from "../../assets/images/careforall3.jpg"; 
import icon1 from "../../assets/icons/missionIcon.png";
import icon2 from "../../assets/icons/donationIcon.png";
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact-form/Contact';
import Tiles, { TilesProps } from '../../components/tiles/Tiles';
import CTA from '../../components/cta/CTA';
const HomePage: FC = (): ReactElement => {

  const imageObj1 = {
    src: photo1, 
    alt:"Man and boy with special needs laughing facing each other."
  }
  const imageObj2 = {
    src: photo2, 
    alt:"Hands of different people in a huddle."
  }
  
  const iconObj1 = {
    src: icon1,
    alt: "An arrow hitting the bull's eye"
  }

  const iconObj2 = {
    src: icon2,
    alt: "Drawing of a hand with a heart on it."
  }

  const tilesProps1: TilesProps = {
    image: imageObj1, 
    icon: iconObj1, 
    header: "It’s all about impact",
    text: "At the heart of our mission is a vision: a society where individuals with disabilities are embraced for their unique contributions, enjoying the same rights and privileges as every citizen. We are dedicated to providing personalized services that empower individuals with disabilities to achieve their goals in employment, volunteering, and recreation. This isn't just what we do; it's our heartfelt passion.",
    isReverse:false
  } 

  const tilesProps2: TilesProps = {
    image: imageObj2, 
    icon: iconObj2, 
    header: "Community is vital",
    text: "We recognize the significance of community for individuals with diverse abilities. We have built a community platform with inclusivity at its core, fostering a strong sense of belonging.",
    isReverse:true
  }
  return (
      <section className='homepage'>
          <div className='homepage__container'>
        <Hero />
        {/* <Carousel cards={data} /> */}
        <section className='homepage__tile-div'>
        <Tiles {...tilesProps1} />
        <Tiles {...tilesProps2} />
        <CTA/>
        </section>
        <Contact/>
        {/* <Footer/> */}
          </div>
    </section>
  )
}

export default HomePage;