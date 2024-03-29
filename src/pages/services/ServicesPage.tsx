import CTA from "../../components/cta/CTA";
import { useEffect } from "react";
import Contact from "../../components/contact-form/Contact";
import { tiles } from "../../assets/data/data";
import Tiles from "../../components/tiles/Tiles";
import "./ServicesPage.scss";
import { Link } from "react-router-dom";
import serviceHero from "../../assets/images/serviceHero.jpg";

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Care For All - Services";
    }, []);
  return (
    <section className="services">
      <div className="services__container">
        <div className="services__hero">
          <div className="services__top">
            <h1 className="services__heading">Our Services</h1>
            <h2 className="services__title">Special Announcement!</h2>
            <p className="services__text">
              We are happy to announce that we would be offering one month free
              counselling sessions for our clients who signs up with us.
            </p>
            <Link to={"/waitlist"} className="services__btn">
              Join the waitlist
            </Link>
          </div>
          <div className="services__img-div">
            <img
              src={serviceHero}
              alt="Child looking at a phone with excitement."
              className="services__img"
            />
          </div>
        </div>
        {tiles.map((tile) => {
          return <Tiles key={tile.id} {...tile} />;
        })}

        <CTA msg=" Compassion guides our actions as we prioritize inclusivity, respect, and integrity. We are committed to collaboration, embracing diversity, and advocating for the rights and health equity of individuals with disabilities." />
        <Contact />
      </div>
    </section>
  );
};

export default ServicesPage;
