import vidMsg from "../../assets/video/vid.mp4";
import "./VideoMessage.scss";
const VideoMessage = () => {
  return (
    <section className="video">
      <div className="video__container">
        <h3 className="video__header">Message from the CEO</h3>
        <div className="video__div">
          <video controls className="video__vid">
            <source src={vidMsg} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoMessage;
