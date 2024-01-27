import { ReactElement, FC } from "react";
import "./CTA.scss";

const CTA: FC = (): ReactElement => {
  return (
    <section className="cta">
      <div className="cta__container">
        <h3 className="cta__header">
          Become a Care For All volunteer and Ambassador
        </h3>
        <p className="cta__p">
          Spread kindness with Care For All! Join us as a volunteer or
          ambassador, let's unite to create a positive impact together.
        </p>
        <button className="cta__btn">Join our community</button>
      </div>
    </section>
  );
};

export default CTA;
