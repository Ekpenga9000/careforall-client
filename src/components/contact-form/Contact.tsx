import { ReactElement, FC, useRef, useLayoutEffect } from "react";
import "./Contact.scss";
import imgUrl from "../../assets/images/careforall4.jpg";
import ImageComponent from "../imageComponent/ImageComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact: FC = (): ReactElement => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const comp = useRef(null);
  const contactDiv = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(contactDiv.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        scrollTrigger: contactDiv.current,
        ease: "power1.inOut",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact" ref={comp}>
      <div className="contact__container" ref={contactDiv}>
        <div className="contact__img-div">
          <ImageComponent
            imgUrl={imgUrl}
            alt="A girl holding paper, being supervised by a woman."
          />
        </div>
        <div className="contact__form-div">
          <form onSubmit={handleSubmit} className="contact__form">
            <h3 className="contact__h3">Talk to Care For All</h3>
            <p className="contact__p">
              We're here to support you. Your confidential request will be
              directed to Care For All client services, and our team will reach
              out to you soon.
            </p>
            <div className="contact__input-div">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                className="contact__input"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phonenumber"
                className="contact__input"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="contact__input"
              />
            </div>
            <div>
              <h4 className="contact__h4">
                I'm Seeking any of these Services:
              </h4>
              <div className="contact__checkbox-div">
                <input
                  type="checkbox"
                  name="counselling"
                  id="counselling"
                  className="contact__checkbox"
                />
                <label htmlFor="counselling" className="contact__label">
                  Professional Counselling
                </label>
              </div>
              <div className="contact__checkbox-div">
                <input
                  type="checkbox"
                  name="homeservice"
                  id="homeservice"
                  className="contact__checkbox"
                />
                <label htmlFor="homeservice" className="contact__label">
                  Home Service Support
                </label>
              </div>
              <div className="contact__checkbox-div">
                <input
                  type="checkbox"
                  name="skilldevelopment"
                  id="skilldevelopment"
                  className="contact__checkbox"
                />
                <label htmlFor="skilldevelopment" className="contact__label">
                  Skill Development
                </label>
              </div>
              <div className="contact__checkbox-div">
                <input
                  type="checkbox"
                  name="others"
                  id="others"
                  className="contact__checkbox"
                />
                <label htmlFor="others" className="contact__label">
                  Others
                </label>
              </div>
            </div>
            <div>
              <button className="contact__btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
