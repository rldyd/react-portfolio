import React from "react";
import Contact from "../components/Contact";
import Tittle from "../components/Tittle";
import phone from "../img/phone.svg";
import email from "../img/email.svg";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"Contact"} span={"Contact"} />
      </div>
      <Contact />
    </div>
  );
}

export default ContactPage;
