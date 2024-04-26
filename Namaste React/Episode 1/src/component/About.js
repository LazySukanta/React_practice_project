import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name={"Sukanta"} />
      <UserClass name={"Sukanta Dinda"} location={"Newtown"} />
    </div>
  );
};

export default About;
