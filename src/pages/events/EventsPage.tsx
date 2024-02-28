import Contact from "../../components/contact-form/Contact";
import "./EventsPage.scss";

const EventsPage = () => {
  return (
    <section className="events">
      <div className="events__container">
        <div className="events__div">
                  <h1 className="events__heading">Events</h1>
                  
                    <h2>Special Announcement!</h2>
          <p>
            We are pleased to announce that we are officially launching on March
            1st, 2024!{" "}
          </p>
              </div>
              <Contact />
      </div>
    </section>
  );
};

export default EventsPage;
