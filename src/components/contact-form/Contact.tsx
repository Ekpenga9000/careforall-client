import { ReactElement, FC, useRef, useLayoutEffect, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import imgUrl from "../../assets/images/careforall4.jpg";
import ImageComponent from "../imageComponent/ImageComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FormState } from "../../interfaces/interfaces";
gsap.registerPlugin(ScrollTrigger);

const Contact: FC = (): ReactElement => {
  const [formData, setFormData] = useState<FormState>({
    fullname: "",
    phonenumber: "",
    email: "",
    counselling: false,
    homeservice: false,
    skilldevelopment: false,
    others: false,
  });
  const [message, setMessage] = useState("");
  const comp = useRef(null);
  const contactDiv = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(contactDiv.current, {
        duration: 1,
        y: 50,
        opacity: 0,
        scrollTrigger: contactDiv.current,
        ease: "power1.inOut",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      fullname,
      phonenumber,
      email,
      counselling,
      homeservice,
      skilldevelopment,
      others,
    } = formData;

    if (
      ![fullname, phonenumber, email].every(
        (field) => typeof field === "string" && field.trim()
      )
    ) {
      setMessage("Please ensure that all form fields are filled.");
      return;
    }

    if (
      ![counselling, homeservice, skilldevelopment, others].some(
        (field) => field
      )
    ) {
      setMessage("Please select at least one service.");
      return;
    }

    try {
      const message = `Hello, my name is ${fullname}, my email is ${email} and my phone number is ${phonenumber}. I'm seeking the following services: ${
        counselling ? "Professional Counselling" : ""
      } ${homeservice ? "Home Service Support" : ""} ${
        skilldevelopment ? "Skill Development" : ""
      } ${others ? "Others services" : ""}`;
      const emailReq = {
        serviceId: "service_agfu60a",
        templateId: "template_iu6mtqb",
        publicKey: "HED-OPmCn_S5yXKxx",
      };
      const templateParams = {
        from_name: fullname,
        from_email: email,
        to_name: "Care For All - Client Services",
        message,
      };
      const initialState: FormState = {
        fullname: "",
        phonenumber: "",
        email: "",
        counselling: false,
        homeservice: false,
        skilldevelopment: false,
        others: false,
      };
      await emailjs.send(
        emailReq.serviceId,
        emailReq.templateId,
        templateParams,
        emailReq.publicKey
      );
      setFormData({ ...initialState });
      setMessage("Thank you for reaching out!");
      console.log("Email sent successfully!");
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong, please try again later.");
    }
  };

  return (
    <section className="contact" ref={comp}>
      <div className="contact__container" ref={contactDiv}>
        <div className="contact__img-div">
          <ImageComponent
            imgUrl={imgUrl}
            alt="A girl holding paper, being supervised by a woman."
          />
        </div>
        <div className="contact__form-div">
          <form onSubmit={handleSubmit} className="contact__form">
            <h3 className="contact__h3">Talk to Care For All</h3>
            <p className="contact__p">
              We're here to support you. Your confidential request will be
              directed to Care For All client services, and our team will reach
              out to you soon.
            </p>
            <div className="contact__input-div">
              <input
                type="text"
                placeholder="Name"
                name="fullname"
                className="contact__input"
                onChange={handleFormChange}
                value={formData.fullname as string}
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phonenumber"
                className="contact__input"
                onChange={handleFormChange}
                value={formData.phonenumber as string}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="contact__input"
                onChange={handleFormChange}
                value={formData.email as string}
              />
            </div>
            <div>
              <h4 className="contact__h4">
                I'm Seeking any of these Services:
              </h4>
              <div className="contact__checkbox-div">
                <input
                  type="checkbox"
                  name="counselling"
                  id="counselling"
                  className="contact__checkbox"
                  onChange={handleFormChange}
                  checked={formData.counselling as boolean}
                />
                <label htmlFor="counselling" className="contact__label">
                  Professional Counselling
                </label>
              </div>
              <div className="contact__checkbox-div">
                <input
                  type="checkbox"
                  name="homeservice"
                  id="homeservice"
                  className="contact__checkbox"
                  onChange={handleFormChange}
                  checked={formData.homeservice as boolean}
                />
                <label htmlFor="homeservice" className="contact__label">
                  Home Service Support
                </label>
              </div>
              <div className="contact__checkbox-div">
                <input
                  type="checkbox"
                  name="skilldevelopment"
                  id="skilldevelopment"
                  className="contact__checkbox"
                  onChange={handleFormChange}
                  checked={formData.skilldevelopment as boolean}
                />
                <label htmlFor="skilldevelopment" className="contact__label">
                  Skill Development
                </label>
              </div>
              <div className="contact__checkbox-div">
                <input
                  type="checkbox"
                  name="others"
                  id="others"
                  className="contact__checkbox"
                  onChange={handleFormChange}
                  checked={formData.others as boolean}
                />
                <label htmlFor="others" className="contact__label">
                  Others
                </label>
              </div>
            </div>
            <div>
              <button className="contact__btn">Submit</button>
            </div>
          </form>
          {message && <p className="contact__input">{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
