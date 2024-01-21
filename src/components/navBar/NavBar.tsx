import { FC, ReactElement, useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import logo from "../../assets/logo/cfa-transparent.png";
import "./NavBar.scss";
import gsap from "gsap";

const NavBar: FC = (): ReactElement => {
  const [isSliderActive, setIsSliderActive] = useState<boolean>(false);
  const comp = useRef(null); 
  const slider = useRef(null);
  const hamburger = useRef(null); 
  const closeBtn = useRef(null);

  const toggleOptions = () => {
    setIsSliderActive(!isSliderActive); 
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(slider.current, {
        duration: 0.4,
        x: 100,
        opacity: 0.2,
        ease: "power1.in"
      });

      gsap.from(hamburger.current, {
        rotate: 180,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.from(closeBtn.current, {
        rotate: 180,
        duration: 0.4,
        ease: "power2.out"
      });
    }, comp);

    return () => ctx.revert(); 
  }), []

  return (
    <section className="nav" ref={ comp }>
      <nav className="nav__main">
        <Link to={"/"} className="nav__logo-link">
          <div className="nav__logo-div">
            <img src={logo} alt="Care for all's logo" className="nav__logo" />
          </div>
        </Link>

        <div className="nav__icon-div">
          {
            isSliderActive ? <div ref={closeBtn}><MdOutlineClose className="nav__icon"  onClick={toggleOptions}/></div> :
            <div ref={hamburger}><RxHamburgerMenu className="nav__icon" onClick={toggleOptions}/></div>
          }
        </div>

       {isSliderActive && <ul className="nav__menu--mobile" ref={slider}>
          <li className="nav__item--mobile">Services</li>
          <li className="nav__item--mobile">About us</li>
          <li className="nav__item--mobile">Events</li>
          <li className="nav__item--mobile">Get Involved</li>
          <li className="nav__item--mobile">Community</li>
        </ul>}

        <ul className="nav__menu">
          <li className="nav__item">Services</li>
          <li className="nav__item">About us</li>
          <li className="nav__item">Events</li>
          <li className="nav__item">Get Involved</li>
          <li className="nav__item">Community</li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
