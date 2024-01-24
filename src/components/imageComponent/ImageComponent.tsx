import { ReactElement, FC, useState, useEffect, useLayoutEffect, useRef } from 'react';
import { FaImage } from "react-icons/fa6";
import gsap from 'gsap';
import "./ImageComponent.scss";
interface ImgProps{
    imgUrl: string, 
    alt:string
}
const ImageComponent: FC<ImgProps> = ({ imgUrl, alt }): ReactElement => {
  const loader = useRef(null); 
  const comp = useRef(null);

  const [imageLoaded, setImageLoaded] = useState<boolean>(false); 
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => { 

      gsap.to(loader.current, {
        backgroundColor: "#cecbcb",
        duration: 1,
        repeat: -1, 
        yoyo:true,
        ease:"power1.in"
      });
    }, comp); 
    return () => ctx.revert();
  }, [])
 
  useEffect(() => {
    const img = new Image(); 
    img.onload = () => {
      setImageLoaded(true); 
    }
    img.src = imgUrl
  }, [imgUrl]); 

  return (
    <section className='img' ref={comp}>
      {!imageLoaded && <div className='img--blur' ref={loader}>
      <FaImage />
    </div>}
      {imageLoaded &&
        <img src={imgUrl} alt={alt} className='img--clear' loading='lazy'/>}
      </section>
  )
}

export default ImageComponent;