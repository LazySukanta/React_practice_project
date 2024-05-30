import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
    
    


  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <UserClass name="Sukante" location="Kolkata" />
        <UserClass name="Dinda" location="Indida" />
      </div>
    );
  }
}

export default About;
