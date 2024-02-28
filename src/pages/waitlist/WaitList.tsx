import "./WaitList.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const WaitList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Care For All - Waitlist";
  }, []);

  return (
    <section>
      <div className="waitlist">
        <div className="waitlist__container">
          <div className="waitlist__div">
            <div className="waitlist__heading-div">
              <h1 className="waitlist__heading">Waitlist</h1>
              <p>Sign up for the chance to get a free month's consultation. </p>
            </div>
            <div className="waitlist__form-div">
              <form className="waitlist__form">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="waitlist__input"
                />
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="waitlist__input"
                />
                <input
                  type="submit"
                  value="Join the waitlist"
                  className="waitlist__btn"
                />
              </form>
              <Link to={"/"} className="waitlist__link">
                Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitList;
