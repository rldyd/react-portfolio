import React from "react";
import about from "../img/aboutPic.png";

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
          I am currently attending the GW Coding bootcamp. Now, a Full Stack
          Developer is a software expert who's equally proficient in frontend
          (client-side) development and backend (server-side) development. Full
          Stack Developers are familiar with each layer of tech stacks that go
          into the making of a software product. They know how each layer
          functions and, most importantly, can manipulate all the backend
          components.
        </p>
      </div>
    </div>
  );
}

export default Image;
