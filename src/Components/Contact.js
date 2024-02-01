import React from "react";
import Blog from "./Blog";
function Contact(props) {
  return (
    <div>
      <Blog name={props.name} age={props.age} salary={props.salary} />
    </div>
  );
}

export default Contact;
