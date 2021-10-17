import React from "react";
import about from "../img/about-3.jpeg";

function Image() {
  return (
    <div className="Image">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am
          <span> Kyle Ahn</span>
        </h4>
        <p>
          Currently, I work as a mechanical & pumping estimator, and at the same
          time, I am studying at full stack developer bootcamp at GWU. The
          reason why I started studying Full stack developer is that I have a
          more vision, and studying and working on coding gives me more
          motivation and fun.
        </p>
      </div>
    </div>
  );
}

export default Image;
