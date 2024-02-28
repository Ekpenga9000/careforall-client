import { ReactElement, FC } from "react";
import "./AboutPage.scss";
import AboutHero from "../../components/aboutHero/AboutHero";
import AboutVision from "../../components/aboutVision/AboutVision";
import AboutValues from "../../components/aboutValues/AboutValues";
import CTA from "../../components/cta/CTA";
import Contact from "../../components/contact-form/Contact";
import MeetCeo from "../../components/meetCeo/MeetCeo";

const AboutPage: FC = (): ReactElement => {
  return (
    <section className="about">
      <div className="about__container">
        <AboutHero />
        <AboutVision />
        <AboutValues />
        <MeetCeo />
        <CTA msg=" Compassion guides our actions as we prioritize inclusivity, respect, and integrity. We are committed to collaboration, embracing diversity, and advocating for the rights and health equity of individuals with disabilities." />
        <Contact />
      </div>
    </section>
  );
};

export default AboutPage;
