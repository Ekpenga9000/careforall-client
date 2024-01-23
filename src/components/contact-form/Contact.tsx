import { ReactElement, FC } from "react";
import "./Contact.scss";
import imgUrl from "../../assets/images/careforall4.jpg";

const Contact: FC = (): ReactElement => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__img-div">
          <img
            src={imgUrl}
            alt="A girl holding paper, being supervised by a woman."
            className="contact__img"
            loading="lazy"
          />
        </div>
        <div className="contact__form-div">
          <form onSubmit={handleSubmit} className="contact__form">
            <h2 className="contact__h2">Talk to Care For All</h2>
            <p className="contact__p">
              We're here to explore how we can best support you. Your
              confidential request and information will be securely directed to
              Care For All client services, and our team will reach out to you
              in the coming days.
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
            <div className="contact__checkbox-div">
              <h4 className="contact__h4">
                I'm Seeking any of these Services:
              </h4>
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
            <button className="contact__btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
