import React from "react";
import Skills from "../components/Skills";
import Tittle from "../components/Tittle";

function ResumePage() {
  return (
    <div>
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <Skills skill={"HTML"} progress={"65%"} width={"65%"} />
        <Skills skill={"CSS"} progress={"70%"} width={"70%"} />
        <Skills skill={"SCSS"} progress={"70%"} width={"70%"} />
        <Skills skill={"jQuery"} progress={"60%"} width={"60%"} />
        <Skills skill={"Javascript"} progress={"75%"} width={"75%"} />
        <Skills skill={"Node Js"} progress={"70%"} width={"70%"} />
        <Skills skill={"Express"} progress={"70%"} width={"70%"} />
        <Skills skill={"MongoDB"} progress={"70%"} width={"70%"} />
        <Skills skill={"React Js"} progress={"65%"} width={"65%"} />
      </div>
      <button className="btn">Dowonload Resume</button>
    </div>
  );
}

export default ResumePage;
