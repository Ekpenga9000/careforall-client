import "./CareersPage.scss";
const CareersPage = () => {
  return (
    <section className="careers">
      <div className="careers__container">
        <div>
          <div>
            <h1 className="careers__h1">Careers</h1>
            <p className="careers__h3">
              Applications are considered on a regular basis for community
              support worker , Disability support worker , Health care
              aide & volunteers.
            </p>
          </div>
          <div>
            <h2>Our Culture</h2>
            <p>
              At Care For All, we are committed to fostering a culture of
              inclusivity, respect, and integrity. We are dedicated to providing
              comprehensive and accessible healthcare solutions that enhance the
              quality of life for people with disabilities. Our team is
              passionate about promoting independence, dignity, and holistic
              wellness through innovative and person-centered care. We are
              committed to collaboration, embracing diversity, and advocating
              for the rights and health equity of individuals with disabilities.
            </p>
          </div>
        </div>

        <h2>Now Hiring!</h2>

        <p>
          Are you passionate about making a meaningful impact in your community
          while gaining invaluable experience? Join our dynamic team as a
          volunteer and embark on a journey of personal growth and societal
          change. We welcome applications for positions including Community
          Support Worker, Disability Support Worker, Health Care Aide, as well
          as volunteers.
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
          At Care For All, we are committed to fostering a culture of
          inclusivity, respect, and integrity. We are dedicated to providing
          comprehensive and accessible healthcare solutions that enhance the
          quality of life for people with disabilities. Our team is passionate
          about promoting independence, dignity, and holistic wellness through
          innovative and person-centered care. We are committed to
          collaboration, embracing diversity, and advocating for the rights and
          health equity of individuals with disabilities.
        </p>
      </div>
    </section>
  );
};

export default CareersPage;
