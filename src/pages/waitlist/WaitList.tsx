import "./WaitList.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IWaitlistForm } from "../../interfaces/interfaces";
import { handleFormChange } from "../../utils/formFunctions";
import emailjs from "@emailjs/browser";

const WaitList = () => {
  const [formValue, setFormValue] = useState<IWaitlistForm>({
    name: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Care For All - Waitlist";
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleFormChange(e, formValue, setFormValue);
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email } = formValue;
    if (!name || !email) {
      setMessage("Please ensure that all form fields are filled.");
      return;
    }
    const message = `Hello, my name is ${name}, my email is ${email} and I would like to join the waitlist.`;

    try {
      const emailReq = {
        serviceId: "service_79fkvsb",
        templateId: "template_yer32ra",
        publicKey: "0_vM7HVU_rNxyMtv_",
      };
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Care For All - Waitlist",
        message,
      };
      const initialState: IWaitlistForm = {
        name: "",
        email: "",
      };
      await emailjs.send(
        emailReq.serviceId,
        emailReq.templateId,
        templateParams,
        emailReq.publicKey
      );
      setMessage("Thank you for joining the waitlist!");
      setTimeout(() => { setFormValue({ ...initialState }); }, 5000);
      console.log("Email sent successfully!");
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong, please try again later.");
    }
  };

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
              <form className="waitlist__form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="waitlist__input"
                  value={formValue.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="waitlist__input"
                  value={formValue.email}
                  onChange={handleChange}
                />
                <button className="waitlist__btn">Join the waitlist</button>
              </form>
              {message && <p className="waitlist__p">{message}</p>}
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
