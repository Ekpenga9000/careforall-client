import "./CareersPage.scss";
import career from "../../assets/images/careforall2.jpg";
const CareersPage = () => {
  return (
    <section className="careers">
      <div className="careers__container">
        <div className="careers__div">
          <div className="careers__text-div">
            <h1 className="careers__h1">Careers</h1>
            <p className="careers__text">
              Join Care for All and embark on a fulfilling career in disability
              services, where your work makes a meaningful difference in the
              lives of those we support.
            </p>
          </div>
          <div className="careers__img-div">
            <img
              src={career}
              alt="A man laughing with a boy with special needs."
              className="careers__img"
            />
          </div>
        </div>

        <h2>We are Hiring!</h2>

        <p className="careers__h3">
          Applications are considered on a regular basis for community support
          worker , Disability support worker , Health care aide & volunteers.
        </p>
        <p>
          Are you passionate about making a meaningful impact in your community
          while gaining invaluable experience? Join our dynamic team as a
          volunteer and embark on a journey of personal growth and societal
          change. We welcome applications for positions including Community
          Support Worker, Disability Support Worker, Health Care Aide, as well
          as volunteers.
        </p>

        <h3>Why work with us?</h3>
        <p>
          At Care For All, we prioritize inclusivity, respect, and integrity,
          striving to enhance the quality of life for individuals with
          disabilities through accessible healthcare solutions. Our passionate
          team promotes independence, dignity, and holistic wellness with
          innovative, person-centered care. Committed to collaboration and
          diversity, we advocate for the rights and health equity of those we
          serve.
        </p>

        <h3>Job Requirements</h3>
        <ul>
          <li>High school diploma or equivalent is required</li>
          <li>Experience in the field is an asset</li>
          <li>
            Valid driver’s license, class 5 Licence is required and access to a
            reliable vehicle
          </li>
          <li>First Aid and CPR certification</li>
          <li>Clear Criminal Record Check</li>
          <li>Written references.</li>
        </ul>
        <p className="careers__p">
          If you meet this criteria, please send a copy of your resume to {` `}
          <a href="mailto:abasstijani@careforall.ca">
            abasstijani@careforall.ca
          </a>
        </p>
        <p>
          At Care For All, we foster an inclusive culture of respect and
          integrity, delivering comprehensive healthcare solutions to enhance
          the quality of life for individuals with disabilities. Our passionate
          team promotes independence, dignity, and holistic wellness through
          innovative, person-centered care. We prioritize collaboration,
          diversity, and advocacy for the rights and health equity of all
          individuals with disabilities.
        </p>
      </div>
    </section>
  );
};

export default CareersPage;
