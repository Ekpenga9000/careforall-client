import { ReactElement, FC } from "react";
import "./AboutPage.scss";
import AboutHero from "../../components/aboutHero/AboutHero";
import AboutVision from "../../components/aboutVision/AboutVision";
import AboutValues from "../../components/aboutValues/AboutValues";
import CTA from "../../components/cta/CTA";
import Contact from "../../components/contact-form/Contact";
// import MeetCeo from "../../components/meetCeo/MeetCeo";
import culturePic from "../../assets/images/careforall3.jpg";
import { useEffect } from "react";
const AboutPage: FC = (): ReactElement => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Care For All - About us";
  }, []);
  return (
    <section className="about">
      <div className="about__container">
        <AboutHero />
        <AboutVision />
        <div className="about__div">
          <div className="about__text-div">
            <h2 className="about__heading">Our Culture</h2>
            <p>
              At Care For All, we are committed to fostering a culture of
              inclusivity, respect, and integrity. We are dedicated to providing
              comprehensive and accessible healthcare solutions that enhance the
              quality of life for people with disabilities. Our team is
              passionate about promoting independence, dignity, and holistic
              wellness through innovative and person-centered care. We are
              committed to collaboration, embracing diversity, and advocating
              for the rights and health equity of individuals with disabilities.{" "}
            </p>
          </div>
          <div className="about__img-div">
            <img src={culturePic} alt="A family ." className="about__img" />
          </div>
        </div>
        <AboutValues />
        {/* <MeetCeo /> */}
        <CTA msg=" Compassion guides our actions as we prioritize inclusivity, respect, and integrity. We are committed to collaboration, embracing diversity, and advocating for the rights and health equity of individuals with disabilities." />
        <Contact />
      </div>
    </section>
  );
};

export default AboutPage;
