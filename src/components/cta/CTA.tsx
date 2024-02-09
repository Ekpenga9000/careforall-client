import { ReactElement, FC } from "react";
import "./CTA.scss";

interface CTAProp{
  msg:string
}
const CTA: FC<CTAProp> = (props): ReactElement => {
  const { msg } = props; 
  return (
    <section className="cta">
      <div className="cta__container">
        <h3 className="cta__header">
          Become a Care For All volunteer and Ambassador
        </h3>
        <p className="cta__p">
          { msg }
        </p>
        <button className="cta__btn">Join our community</button>
      </div>
    </section>
  );
};

export default CTA;
