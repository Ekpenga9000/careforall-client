import CTA from "../../components/cta/CTA";
import Contact from "../../components/contact-form/Contact";
import { tiles } from "../../assets/data/data";
import Tiles from "../../components/tiles/Tiles";
import "./ServicesPage.scss";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <section className="services">
          <div className="services__container">
              <div className="services__hero">
                  <h2 className="services__title">We are happy to announce that we would be offering one month free counselling sessions for our clients who signs up with us. </h2>
                  <Link to={"/waitlist"} className="services__btn">Join the waitlist</Link>
              </div>
              {
                  tiles.map((tile) => {
                      return <Tiles key={tile.id} {...tile} />
                  })
            }

        <CTA msg=" Compassion guides our actions as we prioritize inclusivity, respect, and integrity. We are committed to collaboration, embracing diversity, and advocating for the rights and health equity of individuals with disabilities." />
        <Contact />
      </div>
    </section>
  );
};

export default ServicesPage;
